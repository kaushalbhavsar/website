<?php
/**
 * Copy this file to config.php and set your values.
 * config.php is blocked from web access via .htaccess.
 */
return [
    // Email address that receives form submissions
    'recipient_email' => 'your-email@example.com',

    // From address (must be a domain you control on this host)
    'from_email' => 'noreply@pratikar.com',

    // Site name for email subjects
    'site_name' => 'Pratikar',

    // Rate limit: max submissions per IP per hour
    'rate_limit' => 5,

    // Optional: honeypot field name (must match form)
    'honeypot_field' => 'website',
];
