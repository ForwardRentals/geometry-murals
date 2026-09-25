# Geometry Murals

Static rebuild of [geometrymurals.com](https://geometrymurals.com), migrated off Squarespace. Plain HTML/CSS/JS, hosted on GitHub Pages with no build step.

```
index.html          Home
murals/             Murals
fineart/            Fine Art
clothing/           Clothing (links out to geometry.bigcartel.com)
contact/            Contact
fine-art/, shop/    Redirects for old links
assets/style.css    All styles
assets/site.js      Slideshows, testimonials, mobile menu, form submit
images/             Full-size images (max 1800–2000px)
images/thumbs/      400px slideshow thumbnails
```

## Editing

- **Text:** edit the HTML directly.
- **Add a slideshow image:** drop the file in `images/`, add a 400px copy to `images/thumbs/`, then copy an existing `<img class="ss-slide">` and `<button class="ss-thumb">` pair (bump `data-i`).
- **Colours and fonts:** CSS variables at the top of `assets/style.css`.

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
