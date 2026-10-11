# BEYOND — Website

React + TypeScript (Vite) build of the BEYOND website, following the BEYOND Website PRD V1.1.
No UI library — plain CSS with design tokens in `src/index.css`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build into dist/
```

Requires Node 20.19+ (Node 22 recommended).

## Pages

| Route | Page |
| --- | --- |
| `/` | Home (landing page) |
| `/about` | Who we are, mission, vision, values, division roadmap, process |
| `/services` | Technology Division in detail, Creative & Digital (expanding), process, FAQ |
| `/projects` | Portfolio with service filter |
| `/projects/:slug` | Case study: problem, solution, services, technologies, results |
| `/team` | Team with department filter + "Join BEYOND" |
| `/contact` | Enquiry form, channels, what happens next, FAQ. `?service=…` pre-selects a service |
| `/partnerships` | Partner types, partnership models, process, partnership form |
| `/privacy`, `/terms` | NDPA-aligned Privacy Policy and Terms of Use (drafts — get legal review) |
| anything else | Branded 404 |

## Where things live

```
src/
  data/content.ts         ALL content: services, projects, team, FAQs, contact details, site URL
  lib/analytics.ts        conversion events → window.dataLayer (GTM / GA4 ready)
  hooks/usePageMeta.ts    per-page title, description, canonical, Open Graph, JSON-LD
  hooks/useForm.ts        form state/validation + sendForm() — wire your endpoint here
  hooks/usePageSetup.ts   scroll reset, #anchor links, reveal animations
  components/             Navbar, Footer, PageHero, CtaBand, Faq, ProjectCard, TeamCard…
  components/sections/    Home page sections
  pages/                  One file per route
public/
  llms.txt, robots.txt, sitemap.xml, og-image.png, _redirects (Netlify SPA fallback)
vercel.json               Vercel SPA fallback
```

## Before go-live (checklist)

1. **Domain** — replace `https://www.example.com` in `src/data/content.ts` (`SITE.url`), `index.html`,
   `public/robots.txt`, `public/sitemap.xml` and `public/llms.txt`.
2. **Contact details** — real company email/domain, phone and WhatsApp in `CONTACT` (PRD requires a
   professional company email, not a personal address). Social links in `SOCIALS`.
3. **Forms** — implement `sendForm()` in `src/hooks/useForm.ts` (serverless function, Formspree, CMS, etc.).
4. **Projects & team** — replace placeholders in `content.ts`. Put images in `public/projects/` and
   `public/team/` and set `image` / `photo` paths. Remove the amber "placeholder" notes once real.
   Add any new project slugs to `public/sitemap.xml`.
5. **Analytics** — add your GTM/GA4 snippet to `index.html`. Events already fire:
   `contact_form_submit`, `partnership_form_submit`, `whatsapp_click`, `email_click`, `phone_click`.
6. **Legal** — have the Privacy Policy and Terms reviewed by a legal practitioner, then remove the
   draft notice in `src/pages/LegalPage.tsx`.
7. **CMS (PRD §7)** — when you connect a headless CMS, replace the constants in `content.ts` with fetches
   that return the same types; pages don't need to change.
