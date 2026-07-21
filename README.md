# Aravind Govindhasamy — Portfolio (2026)

Personal portfolio of **Aravind Govindhasamy** — Full Stack Developer (IoT platforms, FastAPI backends, AI-powered computer vision).

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, [shadcn/ui](https://ui.shadcn.com/), and [Magic UI](https://magicui.design/).

## Editing content

All site content lives in a single config file: [`src/data/resume.tsx`](./src/data/resume.tsx) — profile, socials, work, education, skills, projects, hackathons, and certifications. Blog posts are MDX files in [`content/`](./content/) (frontmatter requires `title`, `publishedAt`, `summary`).

## Getting started locally

```bash
pnpm install
pnpm dev
```

## Production on port 8085

```bash
pnpm build:production
PORT=8085 HOSTNAME=127.0.0.1 pnpm start:production
```

Cloudflare Tunnel should point `aravind.budeglobal.in` to `http://localhost:8085`. A template is available at [`deploy/cloudflared/config.example.yml`](./deploy/cloudflared/config.example.yml).

For systemd deployments, use [`deploy/systemd/aravind-portfolio.service`](./deploy/systemd/aravind-portfolio.service). It expects the production checkout at `/srv/aravind-portfolio/app` and runs the Next.js standalone server on `127.0.0.1:8085`.

One-time server setup:

```bash
sudo mkdir -p /srv/aravind-portfolio
sudo chown -R budeglobal:budeglobal /srv/aravind-portfolio
git clone <repo-url> /srv/aravind-portfolio/app
cp /srv/aravind-portfolio/app/deploy/env.production.example /srv/aravind-portfolio/app/.env.production
sudo cp /srv/aravind-portfolio/app/deploy/systemd/aravind-portfolio.service /etc/systemd/system/aravind-portfolio.service
sudo systemctl daemon-reload
sudo systemctl enable aravind-portfolio
```

Deploy updates:

```bash
APP_DIR=/srv/aravind-portfolio/app SERVICE_NAME=aravind-portfolio \
  /srv/aravind-portfolio/app/deploy/scripts/deploy-production.sh
```

## License

MIT — based on the [portfolio template by Dillion Verma](https://github.com/dillionverma/portfolio). See [LICENSE](./LICENSE).
