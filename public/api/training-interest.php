<?php
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

$name = sanitize($data['name'] ?? '', 200);
$email = sanitize($data['email'] ?? '', 254);
$role = sanitize($data['role'] ?? '', 200);
$experience = sanitize($data['experience'] ?? '', 50);
$program = sanitize($data['program'] ?? '', 200);
$goals = sanitize($data['goals'] ?? '', 5000);
$format = sanitize($data['format'] ?? '', 50);
$phone = sanitize($data['phone'] ?? '', 50);

if ($name === '' || $email === '') {
    respond(400, ['success' => false, 'error' => 'Name and email are required.']);
}

if (!validateEmail($email)) {
    respond(400, ['success' => false, 'error' => 'Please provide a valid email address.']);
}

$allowedFormats = ['live-online', 'corporate-workshop', 'self-paced', 'not-sure', ''];
if ($format !== '' && !in_array($format, $allowedFormats, true)) {
    respond(400, ['success' => false, 'error' => 'Invalid format selection.']);
}

$siteName = $config['site_name'] ?? 'Pratikar';
$mailSubject = "[{$siteName}] Training Interest — {$name}";

$body = implode("\n", [
    "Training interest registration — {$siteName}",
    str_repeat('-', 40),
    "Name: {$name}",
    "Email: {$email}",
    "Current role: " . ($role ?: 'Not provided'),
    "Experience: " . ($experience ?: 'Not provided'),
    "Phone: " . ($phone ?: 'Not provided'),
    "Program/area: " . ($program ?: 'Not specified'),
    "Preferred format: " . ($format ?: 'Not specified'),
    str_repeat('-', 40),
    "What they want to learn:",
    $goals ?: 'Not provided',
    str_repeat('-', 40),
    "Submitted: " . gmdate('Y-m-d H:i:s') . ' UTC',
    "IP: {$ip}",
]);

$sent = sendMail(
    $config['recipient_email'],
    $config['from_email'],
    $mailSubject,
    $body
);

if (!$sent) {
    respond(500, ['success' => false, 'error' => 'Unable to send registration. Please contact us directly.']);
}

respond(200, ['success' => true, 'message' => 'Thank you. We will be in touch about training opportunities.']);
