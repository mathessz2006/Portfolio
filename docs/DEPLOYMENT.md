# Deployment Guide — React Portfolio

This project is now a **static React + Vite portfolio**. It does not need any server setup, so it can deploy cleanly on **Vercel** or **GitHub Pages**.

> Note: Create React App is deprecated, so this project uses the modern React/Vite setup with the same simple deployment flow.

---

## Local Setup

```bash
bun install
bun dev
```

Open the local URL shown in your terminal.

---

## Build Locally

```bash
bun run build
```

The production files are created in the `dist/` folder.

---

## Deploy on Vercel

1. Push this project to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Use these settings:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Install Command  | `bun install`   |
| Build Command    | `bun run build` |
| Output Directory | `dist`          |

5. Click **Deploy**.

The included `vercel.json` already points Vercel to the correct output directory and fixes refresh/route fallback issues.

---

## Deploy on GitHub Pages

This project includes `.github/workflows/deploy.yml`, so GitHub can deploy it automatically.

1. Push the project to a GitHub repository.
2. In GitHub, open your repo.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to the `main` branch.
6. GitHub Actions will build and publish the site.

Your site URL will look like:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

---

## Important Files

| File                           | Purpose                                                              |
| ------------------------------ | -------------------------------------------------------------------- |
| `src/App.tsx`                  | Main portfolio page layout                                           |
| `src/main.tsx`                 | React entry file                                                     |
| `index.html`                   | HTML shell and SEO metadata                                          |
| `vite.config.ts`               | Vite config for React, Tailwind, aliases, and GitHub Pages base path |
| `vercel.json`                  | Vercel static deployment config                                      |
| `.github/workflows/deploy.yml` | GitHub Pages deployment workflow                                     |

---

## Troubleshooting

| Issue                          | Fix                                                                                 |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| Vercel shows `404 NOT_FOUND`   | Confirm Output Directory is `dist` and `vercel.json` is committed.                  |
| GitHub Pages blank screen      | Confirm Pages source is **GitHub Actions** and the workflow completed successfully. |
| Assets missing on GitHub Pages | The workflow sets the correct repository base path automatically.                   |
| Build fails on GitHub          | Make sure `bun.lock`, `package.json`, and all `src/` files are committed.           |

---

## Quick Commands

```bash
bun install
bun dev
bun run build
bun run preview
```
