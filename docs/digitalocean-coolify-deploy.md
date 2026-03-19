# DigitalOcean + Coolify Deployment

This project is set up to deploy to a Docker-based host. For a multi-site setup, the recommended path is one DigitalOcean Droplet running Coolify.

## Recommended server size

- Minimum for Coolify only: 2 CPU / 2 GB RAM
- Recommended for 1-3 small apps: 2 CPU / 4 GB RAM

## 1. Create the GitHub repo

If the project is not on GitHub yet:

```bash
git add .
git commit -m "Initial Ratcliff Rebuild Right site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ratcliff-rebuild-right-site.git
git push -u origin main
```

## 2. Create the Droplet

In DigitalOcean:

1. Create a Droplet from the Coolify 1-Click App.
2. Choose Ubuntu 24.04 / Coolify.
3. Pick at least the 2 CPU / 4 GB plan for production and future sites.
4. Add your SSH key.
5. Create the Droplet.

## 3. First server login

SSH into the Droplet:

```bash
ssh root@YOUR_DROPLET_IP
```

On first login, follow the Coolify setup wizard and activate localhost.

## 4. Create the Coolify admin URL

Before switching the main site live, add a DNS record in Namecheap:

- Type: `A Record`
- Host: `coolify`
- Value: `YOUR_DROPLET_IP`
- TTL: `Automatic`

Wait for DNS propagation, then in Coolify set the instance URL to:

```text
https://coolify.ratcliffrebuildright.com
```

## 5. Create the Coolify admin account

Open:

```text
http://YOUR_DROPLET_IP:8000
```

Create the first admin user immediately.

## 6. Deploy the app

In Coolify:

1. Create a project.
2. Add a new application.
3. Connect the GitHub repo or use the public repo URL.
4. Choose the `Dockerfile` deployment method.
5. Confirm the app port is `3000`.

## 7. Add environment variables

Set these in Coolify for the application:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ratt79@charter.net
CONTACT_FROM_EMAIL=Ratcliff Rebuild Right LLC <quotes@ratcliffrebuildright.com>
```

## 8. Point the production domain

Once the app is ready in Coolify, update Namecheap:

- Remove the existing `URL Redirect Record` for `@`
- Remove the existing `CNAME` for `www` that points to `parkingpage.namecheap.com`
- Add `A Record` for `@` -> `YOUR_DROPLET_IP`
- Add `CNAME Record` for `www` -> `ratcliffrebuildright.com`

Keep the Resend records in place:

- `MX` for `send`
- `TXT` for `send`
- `TXT` for `resend._domainkey`
- optional `TXT` for `_dmarc`

## 9. Assign domains in Coolify

In the application settings, add:

- `ratcliffrebuildright.com`
- `www.ratcliffrebuildright.com`

Coolify should issue SSL automatically once DNS resolves.

## 10. Verify

Check:

- `https://ratcliffrebuildright.com`
- `https://www.ratcliffrebuildright.com`
- the contact form
- the Resend logs

## Notes

- Do not commit `.env.local`.
- Rotate any API key that has been pasted into chat or shared publicly.
- Leave Resend receiving disabled unless you intentionally want inbound email handled by Resend.
