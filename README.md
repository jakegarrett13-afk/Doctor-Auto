# Doctor Auto Website

Single-page marketing site for Doctor Auto, a family-owned auto repair shop in Las Vegas, NV, plus two supporting pages (Car Care Club membership, Contact form). Plain HTML/CSS/JS, no build step, no framework.

## Structure

```
index.html            Homepage (hero, services, promo, about, contact, map)
car-care-club.html     Car Care Club membership details
contact.html            Contact form (submits via Formspree)
styles.css               All site styles
script.js                Mobile nav toggle, footer year, contact form submit
assets/                   Logo and partner/certification badge images
```

## Local preview

No build step or server required for basic viewing:

- Double-click `index.html` to open it directly in a browser, **or**
- Run a local server from this folder for the most accurate preview (recommended, since some browsers restrict `fetch()` on `file://` pages):
  ```
  npx serve .
  ```
  or
  ```
  python -m http.server 8000
  ```
  then visit the printed local URL.

## Deploying to Render

Static site, no build command needed:

1. Push this repo to GitHub (or GitLab).
2. In Render: **New → Static Site**, connect the repo.
3. **Root Directory**: this folder if the repo root isn't the site itself (leave blank if it is).
4. **Build Command**: leave blank.
5. **Publish Directory**: `.`
6. Deploy — Render serves `index.html` at the domain root automatically.

## Contact form

The form on `contact.html` submits to Formspree (`https://formspree.io/f/xaewrjky`) via `fetch()` with a hidden honeypot field for spam filtering. No server-side code needed.
