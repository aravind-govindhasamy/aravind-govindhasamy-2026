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
pnpm build
pnpm start:8085
```

Cloudflare Tunnel should point `aravind.budeglobal.in` to `http://localhost:8085`. A template is available at [`deploy/cloudflared/config.example.yml`](./deploy/cloudflared/config.example.yml).

For systemd deployments, use [`deploy/systemd/aravind-portfolio.service`](./deploy/systemd/aravind-portfolio.service).

## License

MIT — based on the [portfolio template by Dillion Verma](https://github.com/dillionverma/portfolio). See [LICENSE](./LICENSE).
