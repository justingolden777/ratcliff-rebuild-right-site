# Ratcliff Rebuild Right LLC Website

Marketing site for Ratcliff Rebuild Right LLC built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- App Router
- React Hook Form + Zod
- Resend for contact form delivery

## Commands

Use `npm.cmd` in this PowerShell environment because `npm.ps1` is blocked by execution policy.

```bash
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

## Project Structure

- `src/app`: routes, layout, sitemap, robots, and the quote API route
- `src/components`: reusable marketing components
- `src/content`: centralized business content and placeholder data
- `src/lib`: metadata, schema, utilities, and validation
- `src/types`: shared TypeScript types
- `public/brand`: logo asset used in the header, footer, and metadata
- `public/portfolio`: current siding and accent wall project images plus placeholder-ready exterior entries

## Environment

Copy `.env.example` to `.env.local` and set the mail credentials before production use.

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ratt79@charter.net
CONTACT_FROM_EMAIL=Ratcliff Rebuild Right LLC <quotes@ratcliffrebuildright.com>
```

## Deployment Notes

This project uses a Next.js server and the `/api/quote` route, so it should be deployed as a Node.js app rather than a static site.

The project is configured with `output: "standalone"` in `next.config.ts` to simplify self-hosting. After `npm run build`, the deployable server output is generated in:

- `.next/standalone`
- `.next/static`
- `public`

For a typical self-hosted Node deployment, upload the contents of `.next/standalone`, then copy `.next/static` to `.next/static` on the server and upload the `public` directory alongside it. Start the app with `server.js` and set the required environment variables in the host panel.

### DigitalOcean + Coolify

The easiest way to host this site alongside future sites on a single server is:

1. Create a DigitalOcean Droplet with the Coolify 1-Click App.
2. Point a subdomain like `coolify.ratcliffrebuildright.com` to the Droplet IP.
3. Finish the Coolify first-run setup and create an admin account.
4. Push this project to GitHub.
5. In Coolify, create an application from the Git repository using the included `Dockerfile`.
6. Add the production environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=ratt79@charter.net
CONTACT_FROM_EMAIL=Ratcliff Rebuild Right LLC <quotes@ratcliffrebuildright.com>
```

7. Assign the production domain `ratcliffrebuildright.com` (and optionally `www.ratcliffrebuildright.com`) to the application in Coolify.
8. Point the domain DNS records to the Droplet IP and let Coolify issue the SSL certificate automatically.

## Notes for Future Updates

- Verify the sending domain in Resend before using the branded `CONTACT_FROM_EMAIL` address in production.
- Add future blog routes under `src/app/blog` using the existing metadata/content patterns.
- Replace the remaining exterior remodel placeholder entries in `src/content/site.ts` as more project photography becomes available.
