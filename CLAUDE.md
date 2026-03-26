# CLAUDE.md — SalaryTakeHome.co.uk

## Project Overview

UK tax and salary calculator website. Helps users calculate take-home pay, compare salaries, estimate mortgage repayments, and more. All calculations run client-side in the browser — no server-side processing or user data stored.

**Live site:** https://www.salarytakehome.co.uk
**Repo:** https://github.com/dark1mp/salarytakehome

## Tech Stack

- **Framework:** Next.js 16.1.3 (App Router)
- **React:** 19.1.4
- **Styling:** Tailwind CSS 4.1.9 via PostCSS
- **Icons:** lucide-react
- **Analytics:** Google Analytics, Microsoft Clarity, Vercel Analytics + Speed Insights
- **Ads:** Google AdSense (ca-pub-3447670244921264) — auto ads site-wide + manual ad unit on pay-rise page
- **Hosting:** Vercel
- **Build tool:** Turbopack (Next.js 16+)

## Commands

```bash
npm run dev          # Dev server with Turbopack
npm run build        # Production build (auto-runs postbuild IndexNow submission)
npm run start        # Start production server
npm run lint         # ESLint
```

## Project Structure

```
src/app/
├── layout.js                    # Root layout (fonts, analytics, schema, meta)
├── page.js                      # Homepage
├── globals.css                  # Global styles
├── sitemap.js                   # Dynamic XML sitemap (add new pages here!)
├── not-found.js                 # Custom 404 page
├── components/
│   ├── AdUnit.js                # Reusable AdSense ad component. Accepts `slot` and `hideOnMobile` props. Slots: 7756198179 (in-content), 1586479879 (top-of-page), 4603525459 (sidebar vertical).
│   ├── Breadcrumbs.js           # Reusable breadcrumbs + BreadcrumbList JSON-LD schema
│   ├── CookieConsent.js
│   ├── Footer.js                # 4-column footer with all nav links
│   ├── LayoutWrapper.js         # Wraps pages with Sidebar + Footer + optional Breadcrumbs
│   ├── RelatedArticles.js       # Reusable related posts component for blog
│   └── Sidebar.js               # Main navigation sidebar
├── api/indexnow/route.js        # On-demand IndexNow submission endpoint
├── take-home-pay-calculator/    # Primary calculator (priority 1.0)
├── pay-rise/
├── hourly-wage/
├── compare-salaries/
├── two-jobs/
├── pro-rata-furlough/
├── sick-pay/
├── maternity-sick-pay/
├── mortgages/
├── debts/
├── blog/                        # Blog listing + individual posts
│   ├── page.js                  # Blog index
│   └── [slug]/page.js           # Individual blog posts
├── about/
├── contact/
├── faq/
├── links/
├── privacy-policy/
├── terms/
└── sitemap-page/                # HTML sitemap
scripts/
└── submit-indexnow.mjs          # Post-build IndexNow submission to Bing/Yandex/Seznam/Naver
.claude/
├── launch.json                  # Dev server config for Claude Preview (nextjs-dev on port 3000)
└── settings.local.json
public/
├── robots.txt
├── manifest.json
├── favicon.ico
└── opengraph-image.png
```

## Calculators (10 total)

| Calculator | Route | Description |
|---|---|---|
| Take Home Pay | `/take-home-pay-calculator` | Main calculator — highest traffic page |
| Pay Rise | `/pay-rise` | Before/after pay rise comparison |
| Hourly Wage | `/hourly-wage` | Hourly to annual conversion with tax |
| Compare Salaries | `/compare-salaries` | Side-by-side salary comparison |
| Two Jobs | `/two-jobs` | Multiple employment tax calculator |
| Pro-Rata | `/pro-rata-furlough` | Part-time / pro-rata salary |
| Sick Pay | `/sick-pay` | Statutory Sick Pay (SSP) |
| Maternity Pay | `/maternity-sick-pay` | Statutory Maternity Pay (SMP) |
| Mortgages | `/mortgages` | Mortgage repayment calculator |
| Debts | `/debts` | Debt repayment calculator |

All calculators support:
- Multiple tax years (2025/26, 2024/25, 2023/24, 2022/23, 2021/22)
- Scottish tax rates (separate bands)
- Student loan plans (1, 2, 4, 5, Postgraduate)
- Pension contributions
- Tax code customisation

## Tax Data

Tax bands, NI thresholds, and student loan thresholds are defined inline in each calculator's `page.js`. Key values for 2025/26:
- Personal Allowance: £12,570
- Basic rate (20%): up to £50,270
- Higher rate (40%): up to £125,140
- Additional rate (45%): above £125,140
- NI rate: 8% (reduced from 10% in 2024/25)
- Scottish rates: 5 bands from 19% to 46%

## Blog

20 blog posts across categories: Salary Guide, Tax Planning, Pensions, Student Loans, Savings & ISAs. Includes "vs" comparison posts (Scottish tax vs English tax, Plan 1 vs Plan 2, salary sacrifice vs personal pension) which target high-intent search queries.

### Adding a New Blog Post

1. Create `src/app/blog/[slug]/page.js`
2. Wrap content in `<LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Post Title" }]}>` — this provides sidebar, footer, and breadcrumbs automatically
3. Add the post to the blog index in `src/app/blog/page.js`
4. Add the URL to `src/app/sitemap.js` (update blog lastModified date too)
5. Cross-link to relevant calculators (hourly-wage, take-home-pay-calculator, pay-rise)
6. Add external links to official sources (.gov.uk, HMRC, SLC etc.) for E-E-A-T credibility
7. Include structured data: Article schema + FAQPage (if applicable). BreadcrumbList schema is handled by the Breadcrumbs component automatically.
8. Add RelatedArticles component at the bottom
9. After deploy, IndexNow submission happens automatically via postbuild script

## SEO Checklist

- Every page needs: title, description, canonical URL, Open Graph tags, Twitter card
- Structured data: WebApplication (root), Article (blog posts), FAQPage (where relevant)
- Sitemap: dynamic at `/sitemap.js` — must be updated when adding/removing pages
- Robots.txt: blocks `/api/`, `/_next/`, `/admin/`
- IndexNow: auto-submits all sitemap URLs post-build to Bing, Yandex, Seznam, Naver. Can also be triggered manually: `node scripts/submit-indexnow.mjs`
- Google: does NOT support IndexNow. Google sitemap ping endpoint is deprecated (returns 404). Use Google Search Console for manual URL submission, or rely on Google crawling the sitemap `<lastmod>` dates.
- Breadcrumbs: every page has visual breadcrumbs + BreadcrumbList JSON-LD schema via the Breadcrumbs component
- **Last Updated badge:** all 10 calculator pages show "Last updated: January 2026 · Reflects 2025/26 tax year" below the h1 description. Update this when tax data changes.
- **Related Reading:** all calculator pages have a Related Reading section at the bottom linking to relevant blog posts. When adding new blog posts, consider updating these links.
- **Internal linking:** calculators link to blog posts (Related Reading sections), blog posts link back to calculators (inline CTAs). Both directions matter for SEO.
- Google Search Console verified, Bing Webmaster verified
- Non-www redirects to www

## Styling Conventions

- **Primary colour:** #1566a0 (blue)
- **Gradients:** blue-to-indigo for headers/CTAs (`from-blue-600 to-indigo-700`)
- **Cards:** white background, rounded-2xl, shadow-lg, hover lift effects
- **Layout:** sidebar navigation on desktop, hamburger menu on mobile (`fixed bottom-20 left-4` — positioned above AdSense anchor ads)
- **Font:** Inter (Google Fonts)
- **Responsive:** mobile-first, Tailwind breakpoints

## Performance

- Inline CSS enabled (experimental Next.js feature)
- Images: WebP + AVIF formats
- Scripts: analytics loaded with `lazyOnload`, ads with `afterInteractive`
- Static assets: 1-year cache headers
- Compression enabled
- Security headers: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- Preconnects to Google Ad Manager and Tag Manager

## Environment Variables

- `OPENAI_API_KEY` — optional, for AI chatbot feature (not currently active)
- No other env vars required — all config is in source

## Key Decisions

- All tax calculations are client-side only — no API calls, no user data stored
- Cookie consent required before analytics/ads load
- External links use `target="_blank" rel="noopener noreferrer"`
- Blog posts use static routes (not dynamic `[slug]`) for maximum SSG performance
- Each calculator page is self-contained with its own tax data (no shared constants file)
- **Every page uses LayoutWrapper** — provides consistent sidebar, footer, and breadcrumbs site-wide. Pass `breadcrumbs` prop for breadcrumb navigation (omit on homepage). This includes blog posts and FAQ (previously they rendered without sidebar/footer).
- **No fake authors** — we decided against fabricated author personas. E-E-A-T is handled at the organisation level via the About page's "Our Approach" section (editorial standards, methodology, data sources).
- **About page includes editorial standards** — "How We Keep Things Accurate", "Why We Built This", and "Editorial Standards" sections establish trust for YMYL content.
- **Take-home pay calculator has no banner** — the blue header banner with logo was removed; the page starts directly with the h1. Don't re-add it.
- **Responsive grid pattern** — use `lg:` (not `md:`) for all multi-column grids site-wide, because the 230px sidebar eats into available width on iPad (768px). Specifically: `lg:grid-cols-2` for 2-column, `lg:grid-cols-2 xl:grid-cols-3` for progressive 3-column, `lg:grid-cols-2 xl:grid-cols-4` for progressive 4-column. Never use `md:grid-cols-2`.
- **Calculator form+results layout** — all calculators with a side results panel use `xl:grid-cols-3` (not `lg:`) with `xl:col-span-2` for the form and `xl:col-span-1` for results. This ensures the results panel doesn't overflow on iPad landscape (1024px). Results stack below the form until 1280px+.
- **AdUnit is self-collapsing** — the `<AdUnit />` component uses a MutationObserver watching `data-ad-status` (set by AdSense to `"filled"` or `"unfilled"`). If no ad renders, it collapses to zero height with no margin/gap. Don't add `min-h` or fixed height to it. Don't use `offsetHeight` to detect ad fill — it gives false positives.
- **AdUnit mobile scroll hint** — when an ad fills on mobile (`lg:hidden`), a "↓ Scroll down to see results" message appears above the ad so users know results are below.
- **Manual ad placements** — All 10 calculator pages have: (1) a desktop-only top ad (`<AdUnit slot="1586479879" hideOnMobile />`) above the h1, and (2) a sticky right sidebar ad (`<AdUnit slot="4603525459" hideOnMobile />`) visible at 2xl+ (160px wide, `order-last`). `/pay-rise` and `/take-home-pay-calculator` also have an in-content ad (`<AdUnit />`, default slot `7756198179`) after Advanced Options. Blog pages rely on auto ads only.
- **Calculator pages use `fullWidth`** — Calculator pages pass `fullWidth` to LayoutWrapper, which removes the `2xl:max-w` constraint since they have their own manual sidebar ad. They also don't use `max-w-[1400px]` or `max-w-6xl` on inner containers — content fills naturally to the sidebar ad.
- **Side rail ad space (non-calculator pages)** — LayoutWrapper uses `2xl:max-w-[1100px]` on the inner content div to leave ~200px+ on the right at 1536px+ viewports for AdSense auto side rail ads. Below `2xl`, content is full width. Don't remove this max-width from non-calculator pages.
- **Narrow layout for blogs** — LayoutWrapper accepts a `narrow` prop (used on all blog pages) which applies `2xl:max-w-[900px]` instead, leaving ~400px for side rail ads. The space is always present on 2xl+ screens whether an ad fills or not.

## Known Gaps / TODO
- Salary breakdown pages only cover £30k-£60k (could expand £20k-£100k)
- Tax data is duplicated across calculator files (could be centralised)
- No RSS feed
- No hreflang tags (should add `en-gb`)
- FAQ schema only on FAQ page (could be added to calculator pages for more rich results)
- No table of contents on long blog posts
- More "vs" comparison content opportunities (e.g. PAYE vs self-employed, full-time vs part-time tax)
- When adding new blog posts, update Related Reading sections on relevant calculator pages
- Blog pages have no manual `<AdUnit />` placements — should add them for better ad revenue
- `/pay-rise` and `/take-home-pay-calculator` have two ad units (top + in-content) — other calculators only have the top ad unit and could benefit from an in-content one too
