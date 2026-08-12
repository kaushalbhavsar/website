<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function respond(int $code, array $payload): void
{
    http_response_code($code);
    echo json_encode($payload);
    exit;
}

function loadConfig(): array
{
    $configPath = __DIR__ . '/config.php';
    if (!file_exists($configPath)) {
        respond(503, [
            'success' => false,
            'error' => 'Form handler not configured. Copy config.sample.php to config.php and set recipient_email.',
        ]);
    }
    return require $configPath;
}

function rateLimitCheck(string $ip, int $limit): void
{
    $dir = sys_get_temp_dir() . '/pratikar-forms';
    if (!is_dir($dir)) {
        mkdir($dir, 0700, true);
    }
    $file = $dir . '/' . hash('sha256', $ip) . '.txt';
    $now = time();
    $window = 3600;
    $entries = [];

    if (file_exists($file)) {
        $entries = array_filter(
            array_map('intval', file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES)),
            fn($t) => ($now - $t) < $window
        );
    }

    if (count($entries) >= $limit) {
        respond(429, ['success' => false, 'error' => 'Too many submissions. Please try again later.']);
    }

    $entries[] = $now;
    file_put_contents($file, implode("\n", $entries));
}

function sanitize(string $value, int $maxLen = 5000): string
{
    $value = trim($value);
    $value = strip_tags($value);
    if (strlen($value) > $maxLen) {
        $value = substr($value, 0, $maxLen);
    }
    return $value;
}

function validateEmail(string $email): bool
{
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function checkHoneypot(array $config, array $data): void
{
    $field = $config['honeypot_field'] ?? 'website';
    if (!empty($data[$field])) {
        respond(200, ['success' => true, 'message' => 'Thank you. We will be in touch shortly.']);
    }
}

function sendMail(string $to, string $from, string $subject, string $body): bool
{
    $headers = implode("\r\n", [
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: PHP/' . phpversion(),
    ]);
    return mail($to, $subject, $body, $headers);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'error' => 'Method not allowed']);
}

$config = loadConfig();
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
rateLimitCheck($ip, (int) ($config['rate_limit'] ?? 5));

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

checkHoneypot($config, $data);
