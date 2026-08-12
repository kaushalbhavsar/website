#!/usr/bin/env bash
set -euo pipefail

# Generates api/config.php from environment variables (used in CI).
# Required: FORM_RECIPIENT_EMAIL
# Optional: FORM_FROM_EMAIL (default: noreply@pratikar.com), FORM_SITE_NAME (default: Pratikar)

OUT_DIR="${1:-out}"
CONFIG_PATH="${OUT_DIR}/api/config.php"

RECIPIENT="${FORM_RECIPIENT_EMAIL:-pratikar@pratikar.com}"
FROM="${FORM_FROM_EMAIL:-noreply@pratikar.com}"
SITE="${FORM_SITE_NAME:-Pratikar}"

mkdir -p "${OUT_DIR}/api"

cat > "${CONFIG_PATH}" << EOF
<?php
return [
    'recipient_email' => '${RECIPIENT}',
    'from_email' => '${FROM}',
    'site_name' => '${SITE}',
    'rate_limit' => 5,
    'honeypot_field' => 'website',
];
EOF

echo "Wrote ${CONFIG_PATH}"
