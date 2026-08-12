<?php
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

$name = sanitize($data['name'] ?? '', 200);
$email = sanitize($data['email'] ?? '', 254);
$organization = sanitize($data['organization'] ?? '', 300);
$phone = sanitize($data['phone'] ?? '', 50);
$message = sanitize($data['message'] ?? '', 5000);
$subject = sanitize($data['subject'] ?? 'General Enquiry', 200);

if ($name === '' || $email === '' || $message === '') {
    respond(400, ['success' => false, 'error' => 'Name, email, and message are required.']);
}

if (!validateEmail($email)) {
    respond(400, ['success' => false, 'error' => 'Please provide a valid email address.']);
}

$siteName = $config['site_name'] ?? 'Pratikar';
$mailSubject = "[{$siteName}] {$subject}";

$body = implode("\n", [
    "New contact enquiry from {$siteName}",
    str_repeat('-', 40),
    "Name: {$name}",
    "Email: {$email}",
    "Organization: " . ($organization ?: 'Not provided'),
    "Phone: " . ($phone ?: 'Not provided'),
    "Subject: {$subject}",
    str_repeat('-', 40),
    "Message:",
    $message,
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
    respond(500, ['success' => false, 'error' => 'Unable to send message. Please email us directly.']);
}

respond(200, ['success' => true, 'message' => 'Thank you. We will be in touch shortly.']);
