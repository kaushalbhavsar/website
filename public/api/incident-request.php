<?php
declare(strict_types=1);

require __DIR__ . '/_bootstrap.php';

$name = sanitize($data['name'] ?? '', 200);
$email = sanitize($data['email'] ?? '', 254);
$organization = sanitize($data['organization'] ?? '', 300);
$phone = sanitize($data['phone'] ?? '', 50);
$description = sanitize($data['description'] ?? '', 5000);
$noticedAt = sanitize($data['noticedAt'] ?? '', 200);
$activeStatus = sanitize($data['activeStatus'] ?? '', 20);
$systems = sanitize($data['systems'] ?? '', 2000);
$contactMethod = sanitize($data['contactMethod'] ?? 'email', 20);

if ($name === '' || $email === '' || $description === '') {
    respond(400, ['success' => false, 'error' => 'Name, email, and incident description are required.']);
}

if (!validateEmail($email)) {
    respond(400, ['success' => false, 'error' => 'Please provide a valid email address.']);
}

$allowedStatus = ['yes', 'no', 'not-sure'];
if ($activeStatus !== '' && !in_array($activeStatus, $allowedStatus, true)) {
    respond(400, ['success' => false, 'error' => 'Invalid active status value.']);
}

$allowedContact = ['email', 'phone'];
if (!in_array($contactMethod, $allowedContact, true)) {
    respond(400, ['success' => false, 'error' => 'Invalid contact method.']);
}

$siteName = $config['site_name'] ?? 'Pratikar';
$requestLabel = $organization !== '' ? $organization : $name;
$mailSubject = "[{$siteName}] Incident Request - {$requestLabel}";

$body = implode("\n", [
    "INCIDENT ASSISTANCE REQUEST - {$siteName}",
    str_repeat('-', 40),
    "Name: {$name}",
    "Email: {$email}",
    "Organization: " . ($organization ?: 'Not provided'),
    "Phone: " . ($phone ?: 'Not provided'),
    "Preferred contact: {$contactMethod}",
    "Incident active: " . ($activeStatus ?: 'Not specified'),
    "First noticed: " . ($noticedAt ?: 'Not specified'),
    "Systems affected: " . ($systems ?: 'Not specified'),
    str_repeat('-', 40),
    "What happened:",
    $description,
    str_repeat('-', 40),
    "Submitted: " . gmdate('Y-m-d H:i:s') . ' UTC',
    "IP: {$ip}",
    "",
    "NOTE: No passwords, tokens, or sensitive evidence should be submitted via this form.",
]);

$sent = sendMail(
    $config['recipient_email'],
    $config['from_email'],
    $mailSubject,
    $body
);

if (!$sent) {
    respond(500, ['success' => false, 'error' => 'Unable to send request. Please contact us directly.']);
}

respond(200, ['success' => true, 'message' => 'Your incident request has been received. We will respond as soon as possible.']);
