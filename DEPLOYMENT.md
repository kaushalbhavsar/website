# Deploying Pratikar to Shared Hosting

Pratikar is built as a **static site** (`output: "export"`) so it runs on typical shared hosting (cPanel, Plesk, Apache) without Node.js.

## Requirements

- Apache with `mod_rewrite` enabled (standard on most shared hosts)
- PHP 7.4+ for contact/incident forms
- SSL certificate (Let's Encrypt via hosting panel)

## Build locally

```bash
npm install
npm run build
```

This produces a static site in the **`out/`** folder.

## Upload to shared hosting

1. Open **File Manager** or connect via **FTP/SFTP**
2. Go to **`public_html`** (or your domain's document root)
3. Upload **all contents** of `out/` into `public_html`:
   - `index.html`, `_next/`, each page folder, etc.
   - `api/` (PHP form handlers)
   - `.htaccess`
   - `.well-known/security.txt`

4. Ensure **dotfiles** are uploaded (`.htaccess` is required)

## Configure form email (required)

Forms will not send until configured:

1. In `public_html/api/`, copy `config.sample.php` to **`config.php`**
2. Edit `config.php`:

```php
'recipient_email' => 'you@yourdomain.com',
'from_email' => 'noreply@pratikar.com',  // must be on your domain
```

3. Test the contact form after upload

Most shared hosts require the `from_email` domain to match your hosted domain for `mail()` to work.

## Folder structure on the server

```
public_html/
├── .htaccess
├── index.html
├── _next/
├── api/
│   ├── .htaccess
│   ├── config.php          ← you create this
│   ├── config.sample.php
│   ├── contact.php
│   └── incident.php
├── incident/
│   └── index.html
├── contact/
│   └── index.html
└── ...
```

## Updating the site

After content or design changes:

```bash
npm run build
```

Re-upload the contents of `out/` (or use FTP sync). You do not need Node.js on the server.

### Optional: create a zip for upload

```bash
npm run pack
```

This builds the site and creates **`pratikar-deploy.zip`** in the project root. Upload and extract in `public_html` via cPanel File Manager.

## HTTPS

Uncomment the HTTPS redirect lines in `.htaccess` once SSL is active:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on all pages except home | Upload `.htaccess`; confirm `mod_rewrite` is enabled |
| Forms return "not configured" | Create `api/config.php` from sample |
| Forms fail silently | Check `from_email` uses your domain; verify PHP `mail()` in hosting panel |
| CSS/JS broken | Upload entire `_next/` folder; clear browser cache |
| `.well-known/security.txt` 404 | Upload `.well-known/` folder including security.txt |

## What does NOT run on shared hosting

- No Node.js server (`next start` is not used in production)
- No Next.js API routes — forms use PHP instead
- No server-side rendering at request time — all pages are pre-built HTML

## Alternative: subdomain for staging

Upload to a subdomain folder (e.g. `staging.yourdomain.com`) to test before replacing production.
