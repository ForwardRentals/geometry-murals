# Geometry Murals

Static rebuild of [geometrymurals.com](https://geometrymurals.com), migrated off Squarespace. Plain HTML/CSS/JS, hosted on GitHub Pages with no build step.

```
index.html          Home (background video hero)
murals/             Murals
fineart/            Fine Art
clothing/           Clothing (links out to geometry.bigcartel.com)
contact/            Contact
fine-art/, shop/    Redirects for old links
assets/style.css    Theme, type scale, slideshow/form/block styles
assets/site.js      Slideshows (autoplay on home), mobile menu, form submit, video
images/             Full-size images; images/thumbs/ = 400px slideshow thumbnails
video/              Hero video (hero.mp4 1080p, hero-mobile.mp4, hero-poster.jpg)
```

## How the layout works

Each page keeps the original Squarespace grid. The `<style>` block in each page's `<head>` holds the grid rules copied from Squarespace (`.fe-…` for each section's 24-column grid, `.fe-block-…` for each block's `grid-area`, desktop and mobile). That's why every photo, gallery and text box keeps its original size, shape and position.

- **Text:** edit it directly inside the matching `fe-block` in the page HTML.
- **Move or resize a block:** change that block's `grid-area: row-start / col-start / row-end / col-end` in the page's `<style>` (columns 2–25 are the content area; the rule inside `@media (min-width: 768px)` is desktop).
- **Add a slideshow image:** put the file in `images/` and a 400px copy in `images/thumbs/`, then copy an existing `<img class="ss-slide …">` and `<button class="ss-thumb" data-i="…">` pair (bump `data-i`).
- **Colours and fonts:** CSS variables at the top of `assets/style.css`.
- **Cache-busting:** pages load `style.css?v=…` / `site.js?v=…`. After editing either file, bump the `v=` value in the five pages so visitors get the new version straight away.

## Forms

The inquiry forms post to [FormSubmit](https://formsubmit.co) → `gabe.ostapchuk@gmail.com`. The **first** submission triggers a one-time activation email to that address; click the link in it and the forms go live. To use a different service (Formspree, Netlify Forms, etc.), change `FORM_ACTION` in the forms' `action=` attribute.

## Font

The Squarespace site used **PP Editorial** (a licensed Pangram Pangram font). This rebuild uses the free **Instrument Serif** from Google Fonts as a close match. If you buy a PP Editorial web licence, add the `@font-face` and put `"PP Editorial New"` first in `--serif`.

## Custom domain

1. Repo **Settings → Pages → Custom domain**: `geometrymurals.com`
2. DNS at the registrar:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `forwardrentals.github.io`
3. When the certificate is issued, tick **Enforce HTTPS**.
