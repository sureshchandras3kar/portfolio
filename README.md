# Portfolio

Personal portfolio site for Suresh Chandra Sekar.

## Stack

- HTML
- CSS
- JavaScript
- Static assets in `images/` and `documents/`

## Project Structure

- `index.html`: main page markup
- `css/style.css`: site styles and motion system
- `js/main.js`: interactions and animations
- `images/`: profile and image assets
- `documents/`: downloadable resume
- `docs/`: project documentation and review notes

## Local Development

Because this is a static site, you can open `index.html` directly in a browser for quick checks.

For a better local workflow, run a simple static server from the repo root:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This project is intended to be deployed on Vercel.

Recommended Vercel settings:

- Framework preset: `Other`
- Root directory: `.`
- Build command: none
- Output directory: `.`

The repository includes a minimal `vercel.json` for clean static hosting behavior.

## GitHub Repo Standards

This repository includes:

- `CODEOWNERS`
- issue templates
- a pull request template
- `.editorconfig`
- `.gitattributes`

## Notes

- Social metadata in `index.html` currently uses a placeholder Vercel production URL.
- Replace that URL with your final Vercel domain once the project is deployed.
