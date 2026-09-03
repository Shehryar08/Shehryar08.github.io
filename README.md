# Mian Shehryar Hassan - Portfolio

A responsive portfolio for Mian Shehryar Hassan, built with Next.js-compatible React, TypeScript, and CSS. It exports as a static site and includes an automated GitHub Pages deployment workflow.

## Included

- Responsive desktop and mobile layouts
- Light and dark themes with saved preference
- Photo-free typographic identity and responsive grid layout
- Scroll reveals, active navigation, and a scroll progress line
- Ordanis project contribution, ECIU experience, education, certification, skills, and contact links
- Downloadable CV
- Accessible focus states and reduced-motion support

## Run locally

Requirements: Node.js 24 and npm.

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The static website is generated in `dist/client`.

## Publish at shehryar08.github.io

1. Sign in to the `Shehryar08` GitHub account.
2. Create a public repository named exactly `Shehryar08.github.io`.
3. Upload this project or push all files to the repository's `main` branch.
4. Open the repository's **Settings > Pages**.
5. Under **Build and deployment**, choose **GitHub Actions**.
6. Open the **Actions** tab and wait for `Deploy portfolio to GitHub Pages` to finish.
7. Visit `https://shehryar08.github.io/`.

The deployment workflow is already included at `.github/workflows/deploy.yml`.

## Update content

- Portfolio content: `app/portfolio.tsx`
- Design and effects: `app/globals.css`
- Page title and description: `app/layout.tsx`
- CV: `public/Mian_Shehryar_Hassan_CV.pdf`
- Project mark: `public/assets/ordanis-mark.svg`

## Contact links used

- GitHub: https://github.com/Shehryar08
- LinkedIn: https://www.linkedin.com/in/mian-shehryar-hassan-60477a207/
- Email: hassanshehryar38@yahoo.com
