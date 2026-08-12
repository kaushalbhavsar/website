# Pratikar

Cybersecurity incident response, investigation and advisory website for [pratikar.com](https://pratikar.com).

Built with Next.js and exported as static HTML for deployment on shared hosting (Apache + PHP).

## Quick start (development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for shared hosting

```bash
npm run build
```

Upload the contents of **`out/`** to your hosting `public_html` folder. See [DEPLOYMENT.md](./DEPLOYMENT.md) for full instructions.

### Automatic deploy (GitHub Actions)

Push to `main` to deploy via FTP. Configure secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, and `FORM_RECIPIENT_EMAIL` in the repository settings. See [DEPLOYMENT.md](./DEPLOYMENT.md#github-actions-automatic-ftp-deploy).

## Configure forms

After upload, create `api/config.php` on the server from `api/config.sample.php` and set your email address. Forms will not send until this is configured.

## Project structure

```
src/
  app/           # Pages (static export)
  components/    # UI, layout, forms, conversion
  lib/           # SEO, content, site config
public/
  api/           # PHP form handlers (contact, incident)
  .htaccess      # Apache rewrites for shared hosting
```

## Tech stack

- Next.js 16 (static export)
- TypeScript
- Tailwind CSS 4
- Lucide icons
- PHP 7.4+ for form handling on shared hosting

## License

Private — Pratikar.
