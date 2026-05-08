# Art by Kiran Gurung — Editorial GitHub Pages Starter

Static bilingual starter site for **Art by Kiran Gurung**, built from the editorial standalone design direction.

## What this includes

- Astro static site
- GitHub Pages CI/CD workflow
- English route: `/en/`
- Nepali route: `/ne/`
- Editorial split hero
- Masonry-style gallery wall
- Working lightbox
- Category marquee
- Calendar feature section with Etsy link
- Commission enquiry form placeholder
- Classes and shop preview sections
- Real artwork assets copied into `public/images/artworks/`

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown by Astro, usually:

```text
http://localhost:4321
```

## Editing content

Most site text is in:

```text
src/data/siteContent.ts
```

Artwork images are in:

```text
public/images/artworks/
```

Logo assets are in:

```text
public/images/logo/
```

## Forms

The commission form currently posts to a placeholder Formspree URL:

```text
https://formspree.io/f/your-form-id
```

Change this in `src/data/siteContent.ts` under `commissions.formAction` for both `en` and `ne`.

For a free setup, you can use Formspree, Tally, Google Forms, or another external form provider.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload/push this project.
3. Go to **Settings → Pages**.
4. Set source to **GitHub Actions**.
5. Push to `main`.

The workflow lives here:

```text
.github/workflows/deploy.yml
```

### GitHub Pages URL settings

The Astro config infers the GitHub Pages URL and base path on GitHub Actions:

- `username.github.io` or `org.github.io` repositories use `/`.
- Project Pages repositories use `/repo-name`.
- `SITE_URL` can be set to the final Pages URL or custom domain.
- `BASE_PATH` should only be set manually when the inferred path is wrong, such as using `/` with a custom domain.

Set repository variables in **Settings → Secrets and variables → Actions → Variables**:

```text
SITE_URL=https://your-final-site-url
BASE_PATH=/
```

## Design direction

This starter follows the uploaded standalone editorial HTML direction: large serif Kiran/Gurung hero, quiet gallery wall, red accent, calendar stack, warm commissions, classes, shop, and lightbox. It is intentionally portfolio-first rather than ecommerce-first.
