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
│   ├── AdUnit.js                # Reusable AdSense ad component. Accepts `slot` and `hideOnMobile` props. Slots: 7756198179 (in-content), 1586479879 (top-of-page), 4603525459 (sidebar vertical 1), 9534353704 (sidebar vertical 2).
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

28 blog posts across categories: Salary Guide, Tax Planning, Tax Updates, Money Tips, Pensions, Student Loans, Savings & ISAs. Includes "vs" comparison posts (Scottish tax vs English tax, Plan 1 vs Plan 2, salary sacrifice vs personal pension) which target high-intent search queries, plus dedicated topic cluster posts for each calculator (e.g. two-jobs-tax-explained supports /two-jobs, maternity-pay-guide supports /maternity-sick-pay). Every calculator now has at least one dedicated blog post linking back to it.

### Topic Cluster Blog Posts (March 2026)

These 8 posts were added to give every calculator a dedicated supporting blog post:

| Blog Post | Route | Supports Calculator |
|---|---|---|
| UK Minimum Wage 2025/26 | `/blog/uk-minimum-wage-2025-26` | /hourly-wage |
| How to Compare Job Offers | `/blog/how-to-compare-job-offers` | /compare-salaries |
| Two Jobs Tax Explained | `/blog/two-jobs-tax-explained` | /two-jobs |
| Pro-Rata Salary Explained | `/blog/pro-rata-salary-explained` | /pro-rata-furlough |
| SSP Changes 2026 | `/blog/ssp-changes-2026` | /sick-pay |
| Maternity Pay Guide | `/blog/maternity-pay-guide` | /maternity-sick-pay |
| First-Time Buyer Mortgage Guide | `/blog/first-time-buyer-mortgage-guide` | /mortgages |
| How to Pay Off Debt Faster | `/blog/how-to-pay-off-debt-faster` | /debts |

### Adding a New Blog Post

1. Create `src/app/blog/[slug]/page.js`
2. Wrap content in `<LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Post Title" }]} narrow>` — this provides sidebar, footer, breadcrumbs, and narrow layout for side rail ads
3. Add `import AdUnit from "../../components/AdUnit";` and place `<AdUnit slot="1586479879" hideOnMobile />` above the h1
4. Add the post to the blog index in `src/app/blog/page.js`
5. Add the URL to `src/app/sitemap.js` (update blog lastModified date too)
6. Cross-link to relevant calculators (hourly-wage, take-home-pay-calculator, pay-rise)
7. Add external links to official sources (.gov.uk, HMRC, SLC etc.) for E-E-A-T credibility
8. Include structured data: Article schema + FAQPage (if applicable). BreadcrumbList schema is handled by the Breadcrumbs component automatically.
9. Add RelatedArticles component at the bottom
10. After deploy, IndexNow submission happens automatically via postbuild script

## SEO Checklist

- Every page needs: title, description, canonical URL, Open Graph tags, Twitter card
- Structured data: WebApplication (all 10 calculators), Article (blog posts), FAQPage (all 10 calculators — 7 questions each)
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
- **`hideOnMobile` breakpoint is `md` (768px)** — `hideOnMobile` applies `hidden md:block`, so ads show on iPad portrait (768px) and above. This was changed from `lg` (1024px) in March 2026 to capture iPad impressions. Sidebar ads are unaffected because their parent container uses `hidden xl:block`.
- **Manual ad placements** — All 10 calculator pages have: (1) a top ad (`<AdUnit slot="1586479879" hideOnMobile />`) above the h1 (visible on iPad+), and (2) two stacked sticky right sidebar ads (`<AdUnit slot="4603525459" hideOnMobile />` + `<AdUnit slot="9534353704" hideOnMobile />`) visible at xl+ (1280px+). `/pay-rise` and `/take-home-pay-calculator` also have an in-content ad (`<AdUnit />`, default slot `7756198179`) after Advanced Options. All blog pages (index + 28 posts) have a top ad (`<AdUnit slot="1586479879" hideOnMobile />`) above the h1, plus auto ads.
- **Sidebar ads stay at xl+ (1280px)** — We deliberately chose not to show sidebar ads on iPad landscape (1024px) because with the 230px nav sidebar + 192px ad column, only ~602px remains for content. Auto ads handle iPad instead.
- **Sidebar ad positioning** — The sidebar ad uses `absolute right-8 top-8 w-[160px]` with `sticky top-8` inside. The content div uses `xl:pr-[192px]` to reserve space so cards don't overlap. The outer container uses `relative` (not `flex`). Card scaling (`lg:scale-[0.92]`) extends to `2xl` to fit on 13" MacBook screens (1440px).
- **Calculator pages use `fullWidth`** — Calculator pages pass `fullWidth` to LayoutWrapper, which removes the `2xl:max-w` constraint since they have their own manual sidebar ad. They also don't use `max-w-[1400px]` or `max-w-6xl` on inner containers.
- **Side rail ad space (non-calculator pages)** — LayoutWrapper uses `2xl:max-w-[1100px]` on the inner content div to leave ~200px+ on the right at 1536px+ viewports for AdSense auto side rail ads. Below `2xl`, content is full width. Don't remove this max-width from non-calculator pages.
- **Narrow layout for blogs** — LayoutWrapper accepts a `narrow` prop (used on all blog pages) which applies `2xl:max-w-[900px]` instead, leaving ~400px for side rail ads. The space is always present on 2xl+ screens whether an ad fills or not.
- **llms.txt** — `public/llms.txt` and `public/llms-full.txt` provide site metadata for AI crawlers. Update these when adding new calculators, blog posts, or changing tax year data.
- **FAQ schema on all calculators** — All 10 calculator pages have FAQPage JSON-LD schema with 7 unique questions each (pay-rise has 7). When adding new calculators, include FAQPage schema following the same `@graph` pattern with at least 7 questions.
- **WebApplication schema on all calculators** — All 10 calculator pages include a `WebApplication` JSON-LD schema in the `@graph` array alongside the FAQPage. This signals to search engines the page is an interactive tool.
- **Embedded blog links in educational sections** — All calculator pages have contextual blog links embedded within their educational content cards (not just in the Related Reading footer). This creates deeper internal linking and topical authority.
- **External .gov.uk authority links** — All calculator pages link to relevant GOV.UK pages (income tax rates, NI, SSP, maternity pay, etc.) within their educational sections for E-E-A-T credibility.
- **Topic cluster SEO pattern** — Each calculator acts as a "hub" page with 1-2 dedicated blog posts as "spokes". Blog posts link to the calculator with CTAs, and calculator educational cards embed links back to the blog posts. This mirrors the pattern that made `/pay-rise` the best-performing page on Bing. When adding a new calculator, always create at least one supporting blog post.
- **Educational card pattern** — Calculator educational cards follow a consistent structure: icon with gradient background → heading → descriptive text with data tables → embedded blog/gov.uk links. Cards use coloured left borders and distinct icon colour themes (blue, purple, teal, amber, red, etc.) to visually differentiate topics. New cards should include at least one data table and one internal link. All 10 calculators now have 4+ educational cards each.
- **Minimum 4 educational cards per calculator** — Every calculator page should have at least 4 educational content cards plus the FAQ card. This was standardised in March 2026 to match the depth that made `/pay-rise` the top Bing performer.
- **Force light color-scheme** — `globals.css` sets `color-scheme: light only` on `html`. Tailwind CSS v4's preflight defaults to `color-scheme: light dark`, which lets browsers apply dark mode overrides — this made the white sidebar text invisible for users with dark system preferences. Don't remove this rule unless dark mode support is added.

## Known Gaps / TODO
- Salary breakdown pages only cover £30k-£60k (could expand £20k-£100k)
- Tax data is duplicated across calculator files (could be centralised)
- No RSS feed
- No hreflang tags (should add `en-gb`)
- No table of contents on long blog posts
- More "vs" comparison content opportunities (e.g. PAYE vs self-employed, full-time vs part-time tax)
- When adding new blog posts, update Related Reading sections on relevant calculator pages
- Blog pages only have a top ad unit — could add in-content or sidebar ads for better ad revenue
- `/pay-rise` and `/take-home-pay-calculator` have two ad units (top + in-content) — other calculators only have the top ad unit and could benefit from an in-content one too
- Educational content depth varies — `/pay-rise` has ~3,500 words of educational content; other calculators now have ~2,500-3,000 words after adding cards in March 2026, but could still be expanded further to match pay-rise's depth
- `llms.txt` and `llms-full.txt` need updating to reflect the 8 new blog posts added in March 2026
