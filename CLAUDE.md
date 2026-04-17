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
│   ├── AdUnit.js                # Reusable AdSense ad component. Accepts `slot`, `hideOnMobile`, `layout`, and `format` props. Slots: 7756198179 (in-content), 1586479879 (top-of-page), 4603525459 (sidebar vertical 1), 9534353704 (sidebar vertical 2), 3520564956 (in-article blog ads), 1315738286 (sidebar vertical 3 — pay-rise results-aligned), 3284080016 (blog side-rail vertical — auto-rendered by LayoutWrapper when `narrow={true}`, visible at xl+ / 1280px+). For in-article ads use: `layout="in-article" format="fluid"`.
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
├── tax-code/                    # Tax code decoder/checker (not a calculator — no tax data)
├── salary-per-second/           # Fun salary converter — no tax, just time-period breakdowns + live counter
├── dividend-tax/                # Dividend tax calculator — salary + dividends, tax by band, PA tapering
├── salary-breakdown/            # Salary hub page — links to all 17 salary breakdown posts (£20k-£100k)
├── blog/                        # Blog listing + individual posts
│   ├── posts.js                 # Shared blog post data (single source of truth)
│   ├── page.js                  # Blog index (imports from posts.js)
│   └── [slug]/page.js           # Individual blog posts
├── feed.xml/route.js            # RSS feed (imports from posts.js)
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

## Calculators & Tools (13 total)

| Calculator/Tool | Route | Description |
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
| Tax Code Checker | `/tax-code` | Decode UK tax codes — shows allowance, region, letter meaning, warnings |
| Salary Per Second | `/salary-per-second` | Fun salary converter — yearly to per-second with live counter, no tax |
| Dividend Tax | `/dividend-tax` | Dividend tax calculator — salary + dividends with band breakdown |

All calculators support:
- Multiple tax years (2026/27, 2025/26, 2024/25, 2023/24, 2022/23, 2021/22)
- Scottish tax rates (separate bands)
- Student loan plans (1, 2, 4, 5, Postgraduate)
- Pension contributions
- Tax code customisation

## Tax Data

Tax bands, NI thresholds, and student loan thresholds are defined inline in each calculator's `page.js` (no shared constants file). The current default is 2026/27; historical years back to 2021/22 are supported via the tax year selector. For the exact current-year figures, always read the source file (e.g. `src/app/take-home-pay-calculator/page.js`) rather than trusting this doc — values here go stale fast.

Things to remember about the UK tax system when editing:
- rUK income tax thresholds (Personal Allowance, higher-rate, additional-rate) are frozen until April 2031 (Autumn Budget 2025 extended the existing freeze by 3 years). Don't update them year-on-year.
- Scottish bands change more frequently. Starter and Basic rate band limits were extended for 2026/27 while rates and other thresholds stayed flat.
- Dividend basic and higher rates rose by 2pp for 2026/27 (10.75% / 35.75% / 39.35%). The dividend allowance is unchanged at £500.
- SSP was reformed from 6 April 2026: new weekly rate is £123.25 or 80% of AWE if lower, Lower Earnings Limit abolished, 3-day waiting period removed. The sick-pay calculator has a toggle for historical 2025/26 rules.
- SMP and other family statutory payments use £194.32/week for 2026/27 with a £129/week qualifying threshold.
- Employee NI stays at 8% / 2% on the same thresholds as 2025/26. Employer NI is 15% above a £5,000 secondary threshold and is frozen until 2030/31.

## Annual Tax Year Refresh (April)

When a new UK tax year starts, update these in order:

1. **Calculator tax data** — Add the new year to `TAX_YEARS`, `TAX_BANDS`, `NI_BANDS`, and `STUDENT_LOAN` in each calculator's `page.js`, and set it as the default in `useState`. Affects: `take-home-pay-calculator`, `pay-rise`, `two-jobs`, `dividend-tax`. Keep historical years in place.
2. **Statutory rate calculators** — `sick-pay/page.js` (flip `useNewRules` default and update constants), `maternity-sick-pay/page.js` (SMP rate + qualifying threshold).
3. **SEO surface** — every calculator `layout.js` (title/description/OG/Twitter), root `layout.js`, `blog/layout.js`, `faq/page.js`, homepage `<h1>` in `page.js`, `components/Footer.js` tagline, "Last updated" badges on every calculator and blog page, FAQPage JSON-LD answers that mention specific figures.
4. **llms.txt files** — `public/llms.txt` and `public/llms-full.txt` (AI crawlers).
5. **Build and deploy** — `npm run build` auto-submits the sitemap to IndexNow on postbuild.
6. **Blog** — create two new *dated* posts (`uk-tax-changes-YYYY-YY`, `uk-minimum-wage-YYYY-YY`). Swap "UK Tax Changes" Related Reading links across calculator pages and evergreen blog posts from the old post to the new one. Refresh evergreen blog posts in place (don't duplicate them).

Historical posts (`uk-tax-changes-2025-26`, `uk-minimum-wage-2025-26`, etc.) are deliberately left intact as reference for people searching prior years. The URLs stay live and still appear in the sitemap.

## Blog

49 blog posts across categories: Salary Guide, Tax Planning, Tax Updates, Money Tips, Pensions, Student Loans, Savings & ISAs. Includes 6 "vs" comparison posts (Scottish tax vs English tax, Plan 1 vs Plan 2, salary sacrifice vs personal pension, ISA vs LISA, PAYE vs self-employed, full-time vs part-time tax) which target high-intent search queries, plus dedicated topic cluster posts for each calculator (e.g. two-jobs-tax-explained supports /two-jobs, maternity-pay-guide supports /maternity-sick-pay, uk-dividend-tax-explained supports /dividend-tax). Every calculator has at least one dedicated blog post linking back to it. Two dated posts are refreshed each tax year (`uk-tax-changes-YYYY-YY`, `uk-minimum-wage-YYYY-YY`) with the old versions kept as historical reference — see the "Dated vs evergreen posts" note in Key Decisions.

### Topic Cluster Blog Posts

Every calculator has at least one dedicated supporting blog post:

| Blog Post | Route | Supports Calculator |
|---|---|---|
| UK Minimum Wage 2026/27 | `/blog/uk-minimum-wage-2026-27` | /hourly-wage (primary) |
| UK Minimum Wage 2025/26 | `/blog/uk-minimum-wage-2025-26` | historical reference |
| How to Compare Job Offers | `/blog/how-to-compare-job-offers` | /compare-salaries |
| Two Jobs Tax Explained | `/blog/two-jobs-tax-explained` | /two-jobs |
| Pro-Rata Salary Explained | `/blog/pro-rata-salary-explained` | /pro-rata-furlough |
| How Much Is SSP? | `/blog/how-much-is-ssp` | /sick-pay (primary — rates, daily breakdowns, earnings examples) |
| SSP Changes 2026 | `/blog/ssp-changes-2026` | /sick-pay (rule changes focus) |
| Maternity Pay Guide | `/blog/maternity-pay-guide` | /maternity-sick-pay |
| First-Time Buyer Mortgage Guide | `/blog/first-time-buyer-mortgage-guide` | /mortgages |
| How to Pay Off Debt Faster | `/blog/how-to-pay-off-debt-faster` | /debts |
| UK Dividend Tax Explained | `/blog/uk-dividend-tax-explained` | /dividend-tax |
| UK Tax Codes Explained | `/blog/understanding-uk-tax-code` | /tax-code |
| UK Tax Changes 2026/27 | `/blog/uk-tax-changes-2026-27` | /take-home-pay-calculator (current year hub) |
| UK Tax Changes 2025/26 | `/blog/uk-tax-changes-2025-26` | historical reference |

### Adding a New Blog Post

1. Create `src/app/blog/[slug]/page.js`
2. Wrap content in `<LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Post Title" }]} narrow>` — this provides sidebar, footer, breadcrumbs, and narrow layout for side rail ads
3. Add `import AdUnit from "../../components/AdUnit";` and place `<AdUnit slot="1586479879" hideOnMobile />` above the h1
4. Add in-article ads between content sections: `<AdUnit slot="3520564956" layout="in-article" format="fluid" />`. Long posts (10+ min): 3 ads (after 2nd, 4th/5th, and 6th/7th section). Short posts (under 10 min): 2 ads (after 2nd and 4th section). Always keep at least 2 content sections between ads. Place before the CTA/disclaimer, never after.
5. Add the "Last updated" badge below the category/date/readtime row: `<p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: April 2026 &middot; Reflects 2026/27 tax year</p>` (update the text when tax data changes)
6. **Add the post to `src/app/blog/posts.js`** — this is the single source of truth. The blog index, RSS feed (`/feed.xml`), and sitemap (`/sitemap.js`) all import from this file automatically. Fields: slug, title, description, date, readTime, category, featured, priority.
7. **Update `public/llms.txt` and `public/llms-full.txt`** — these are the only manual files that still need separate updates (they use markdown format for AI crawlers).
8. Cross-link to relevant calculators (hourly-wage, take-home-pay-calculator, pay-rise)
9. Cross-link to related blog posts within body text (not just RelatedArticles) for topical authority
10. Add external links to official sources (.gov.uk, HMRC, SLC etc.) for E-E-A-T credibility
11. Include structured data: Article schema + FAQPage (if applicable) with `dateModified`. BreadcrumbList schema is handled by the Breadcrumbs component automatically.
12. Add RelatedArticles component at the bottom
13. After deploy, IndexNow submission happens automatically via postbuild script

## SEO Checklist

- Every page needs: title, description, canonical URL, Open Graph tags, Twitter card
- Structured data: WebApplication (all 10 calculators + tax code checker + salary per second), Article (blog posts), FAQPage (all 10 calculators + tax code checker + salary per second — 7 questions each)
- Sitemap: dynamic at `/sitemap.js` — must be updated when adding/removing pages
- Robots.txt: blocks `/api/`, `/_next/`, `/admin/`
- IndexNow: auto-submits recently-modified sitemap URLs post-build to Bing, Yandex, Seznam, Naver (streaming mode — only URLs with `lastmod` in the last 7 days). Use `node scripts/submit-indexnow.mjs --all` for a full batch resubmission, or `--days=N` to change the recency window. **Note:** the script fetches from the live production sitemap, not the local build, so new URLs won't appear until deployed.
- Google: does NOT support IndexNow. Google sitemap ping endpoint is deprecated (returns 404). Use Google Search Console for manual URL submission, or rely on Google crawling the sitemap `<lastmod>` dates.
- Breadcrumbs: every page has visual breadcrumbs + BreadcrumbList JSON-LD schema via the Breadcrumbs component
- **Last Updated badge:** all 10 calculator pages show "Last updated: April 2026 · Reflects 2026/27 tax year" below the h1 description. Update this during the annual tax year refresh.
- **Related Reading:** all calculator pages have a Related Reading section at the bottom linking to relevant blog posts. When adding new blog posts, consider updating these links.
- **Internal linking:** calculators link to blog posts (Related Reading sections), blog posts link back to calculators (inline CTAs). Both directions matter for SEO.
- **Internal link targets:** every calculator should have ≥3 inbound contextual links from blog posts (not counting RelatedArticles carousels or site chrome — Sidebar/Footer/LayoutWrapper/Breadcrumbs). Every blog post should have ≥2 inbound links from other pages. When adding a new calculator or blog post, add contextual anchors in at least 3 relevant existing pages — don't rely solely on Related Reading tiles. Related Reading tiles can mix blog posts with other calculators/tools (e.g. `/mortgages`, `/tax-code`) where topically relevant.
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
- **Server/client component split for SEO** — Three pages that use `useSearchParams()` have been split into a server component (`page.js`) + client component: `/take-home-pay-calculator` (`TaxCalculatorClient.js`), `/dividend-tax` (`DividendTaxClient.js`), `/salary-per-second` (`SalaryPerSecondClient.js`). The server component renders the H1, educational cards, FAQ, related reading, and JSON-LD schema so they're visible to crawlers without JavaScript. The client component handles only the interactive calculator (form, results, state). This was done because `useSearchParams()` requires a `<Suspense>` boundary, and Bing's crawler doesn't wait for deferred Suspense chunks — so H1s and static content were invisible to Bing. The other 10 calculator pages are still fully `"use client"` (no Suspense, so SSR works fine for crawlers). When adding `useSearchParams()` to a new calculator page, follow this split pattern.
- **Responsive grid pattern** — use `lg:` (not `md:`) for all multi-column grids site-wide, because the 230px sidebar eats into available width on iPad (768px). Specifically: `lg:grid-cols-2` for 2-column, `lg:grid-cols-2 xl:grid-cols-3` for progressive 3-column, `lg:grid-cols-2 xl:grid-cols-4` for progressive 4-column. Never use `md:grid-cols-2`.
- **Calculator form+results layout** — all calculators with a side results panel use `xl:grid-cols-3` (not `lg:`) with `xl:col-span-2` for the form and `xl:col-span-1` for results. This ensures the results panel doesn't overflow on iPad landscape (1024px). Results stack below the form until 1280px+.
- **AdUnit is self-collapsing** — the `<AdUnit />` component uses a MutationObserver watching `data-ad-status` (set by AdSense to `"filled"` or `"unfilled"`). If no ad renders, it collapses to zero height with no margin/gap. Don't add `min-h` or fixed height to it. Don't use `offsetHeight` to detect ad fill — it gives false positives.
- **AdUnit mobile scroll hint** — when an ad fills on mobile (`lg:hidden`), a "↓ Scroll down to see results" message appears above the ad so users know results are below.
- **`hideOnMobile` breakpoint is `md` (768px)** — `hideOnMobile` applies `hidden md:block`, so ads show on iPad portrait (768px) and above. This was changed from `lg` (1024px) in March 2026 to capture iPad impressions. Sidebar ads are unaffected because their parent container uses `hidden xl:block`.
- **Manual ad placements** — All 10 calculator pages have: (1) a top ad (`<AdUnit slot="1586479879" hideOnMobile />`) above the h1 (visible on iPad+), and (2) two stacked sticky right sidebar ads (`<AdUnit slot="4603525459" hideOnMobile />` + `<AdUnit slot="9534353704" hideOnMobile />`) visible at xl+ (1280px+). `/pay-rise`, `/take-home-pay-calculator`, and `/dividend-tax` also have an in-content ad (`<AdUnit />`, default slot `7756198179`) after the input card. `/pay-rise` and `/dividend-tax` also have a third sidebar ad (`<AdUnit slot="1315738286" hideOnMobile />`) positioned absolutely at the same level as the results card (non-sticky, inside a `relative` wrapper around the results section, using `right-[-184px] top-0`). All blog pages (index + every individual post) have a top ad (`<AdUnit slot="1586479879" hideOnMobile />`) above the h1. All individual blog posts also have in-article ads (`<AdUnit slot="3520564956" layout="in-article" format="fluid" />`) placed between content sections — 3 ads on long posts (10+ min), 2 ads on short posts (under 10 min), with at least 2 content sections between ads.
- **Sidebar ads stay at xl+ (1280px)** — We deliberately chose not to show sidebar ads on iPad landscape (1024px) because with the 230px nav sidebar + 192px ad column, only ~602px remains for content. Auto ads handle iPad instead.
- **Sidebar ad positioning** — The sidebar ad uses `absolute right-8 top-8 w-[160px]` with `sticky top-8` inside. The content div uses `xl:pr-[192px]` to reserve space so cards don't overlap. The outer container uses `relative` (not `flex`). Card scaling (`lg:scale-[0.92]`) extends to `2xl` to fit on 13" MacBook screens (1440px).
- **Calculator pages use `fullWidth`** — Calculator pages pass `fullWidth` to LayoutWrapper, which removes the `2xl:max-w` constraint since they have their own manual sidebar ad. They also don't use `max-w-[1400px]` or `max-w-6xl` on inner containers.
- **Side rail ad space (non-calculator pages)** — LayoutWrapper uses `2xl:max-w-[1100px]` on the inner content div to leave ~200px+ on the right at 1536px+ viewports for AdSense auto side rail ads. Below `2xl`, content is full width. Don't remove this max-width from non-calculator pages.
- **Narrow layout for blogs** — LayoutWrapper accepts a `narrow` prop (used on all blog pages and `/salary-breakdown`). At 2xl+ (1536px+) it centers content with `max-w-[900px]`. At xl (1280–1535px) it applies `pr-[192px]` to the content div to reserve space for the side-rail ad (which is absolutely positioned on the right). When modifying the narrow class, keep both rules: the xl padding reserves space when the viewport is too narrow for natural centering, and the 2xl reset (`2xl:pr-0`) avoids double-spacing once centering takes over. The side-rail ad slot `3284080016` is auto-rendered by LayoutWrapper on any narrow page — individual blog pages don't need to add it manually. The absolute container uses `inset-y-8` (not just `top-8`) so it stretches the full height of the relative parent — without this, the inner `sticky top-8` has no scroll range and the ad scrolls away with the page (silently broken locally because AdSense doesn't fill in dev). Local preview: AdSense won't fill on localhost, so the `AdUnit` container collapses to zero height; swap in a placeholder div temporarily if you need to see position.
- **llms.txt** — `public/llms.txt` and `public/llms-full.txt` provide site metadata for AI crawlers. Update these when adding new calculators, blog posts, or changing tax year data.
- **FAQ schema on all calculators** — All 10 calculator pages have FAQPage JSON-LD schema with 7 unique questions each (pay-rise has 7). When adding new calculators, include FAQPage schema following the same `@graph` pattern with at least 7 questions.
- **WebApplication schema on all calculators** — All 10 calculator pages include a `WebApplication` JSON-LD schema in the `@graph` array alongside the FAQPage. This signals to search engines the page is an interactive tool.
- **No FAQPage in root layout** — The root `layout.js` has a site-wide WebApplication schema but must NOT contain a FAQPage inside it. Each calculator and blog post has its own page-specific FAQPage schema. Adding one to the root layout causes "Duplicate field FAQPage" errors in Google Search Console since it gets injected on every page.
- **Embedded blog links in educational sections** — All calculator pages have contextual blog links embedded within their educational content cards (not just in the Related Reading footer). This creates deeper internal linking and topical authority.
- **External .gov.uk authority links** — All calculator pages link to relevant GOV.UK pages (income tax rates, NI, SSP, maternity pay, etc.) within their educational sections for E-E-A-T credibility.
- **Topic cluster SEO pattern** — Each calculator acts as a "hub" page with 1-2 dedicated blog posts as "spokes". Blog posts link to the calculator with CTAs, and calculator educational cards embed links back to the blog posts. This mirrors the pattern that made `/pay-rise` the best-performing page on Bing. When adding a new calculator, always create at least one supporting blog post.
- **Calculator/blog intent split** — When a calculator has a supporting blog post, target different search intent on each to avoid cannibalisation. Calculators own **transactional intent** — "calculator", "calculate [X]", "work out [X]", "[X] calculator UK". Blog posts own **informational intent** — "what is [X]", "[X] meaning", "what does [X] mean", "how does [X] work". Use each side's verbs in metadata, H1, and H2s. Reinforce with structured data: add `HowTo` schema to the calculator and `DefinedTerm` schema to the blog post — this helps search engines route each query to the right page. Established on `/pro-rata-furlough` + `/blog/pro-rata-salary-explained` after GSC audit in April 2026.
- **Educational card pattern** — Calculator educational cards follow a consistent structure: icon with gradient background → heading → descriptive text with data tables → embedded blog/gov.uk links. Cards use coloured left borders and distinct icon colour themes (blue, purple, teal, amber, red, etc.) to visually differentiate topics. New cards should include at least one data table and one internal link. All 10 calculators now have 4+ educational cards each.
- **Minimum 4 educational cards per calculator** — Every calculator page should have at least 4 educational content cards plus the FAQ card. This was standardised in March 2026 to match the depth that made `/pay-rise` the top Bing performer.
- **Force light color-scheme** — `globals.css` sets `color-scheme: light only` on `html`, and `layout.js` has a `<meta name="color-scheme" content="light only">` tag. Tailwind CSS v4's preflight defaults to `color-scheme: light dark`, which lets browsers apply dark mode overrides. Don't remove these unless dark mode support is added.
- **Tailwind v4 oklab browser fallbacks** — `globals.css` contains `@supports not` blocks that fix Tailwind CSS v4's use of `oklab` color space. Tailwind v4 outputs `--tw-gradient-position: to <dir> in oklab` and `oklab()` color functions which older browsers can't parse, causing gradients to disappear entirely (invisible sidebar, blank card icons, missing calculator elements). The fallbacks override `--tw-gradient-position` for all 8 directions to strip `in oklab`, and force white text in the sidebar for very old browsers. Affected browsers: Safari < 16.2, Firefox < 127, Chrome/Edge < 111. Don't remove these fallbacks — they're critical for cross-browser compatibility.
- **Blog post data is centralised in `src/app/blog/posts.js`** — This is the single source of truth for all blog post metadata (slug, title, description, date, readTime, category, featured, priority). The blog index (`page.js`), RSS feed (`feed.xml/route.js`), and sitemap (`sitemap.js`) all import from this file. When adding a new post, add it to `posts.js` and it will automatically appear in all three. The only files that still need manual updates are `public/llms.txt` and `public/llms-full.txt` (different markdown format for AI crawlers).
- **RSS feed** — Available at `/feed.xml` via a Next.js route handler. Auto-discovers via `<link rel="alternate" type="application/rss+xml">` in the root layout. The feed imports from `posts.js` so it stays in sync automatically.
- **"Last updated" badge on blog posts** — All blog posts show a green badge below the category/date/readtime row: "Last updated: April 2026 · Reflects 2026/27 tax year". Update the text during the annual tax year refresh. Badge uses `text-green-700 bg-green-50 border-green-200 rounded-full`.
- **Blog post cross-links** — Blog posts link to each other within body text (not just via RelatedArticles at the bottom). This builds topical authority. When adding new posts, add 2-3 inline links to related existing posts, and update existing posts to link back.
- **Dated vs evergreen blog posts** — Two posts get year-tagged slugs and are replaced annually: `uk-tax-changes-YYYY-YY` and `uk-minimum-wage-YYYY-YY`. For these, create a **new** post each tax year and leave the old one live as historical reference — it stays in the sitemap and keeps its URL. All other posts are evergreen and are updated in place during the annual refresh (don't change the slug, URL, or publish date). This avoids SEO cannibalisation and preserves link equity. Rationale: tax-year-specific content benefits from dated URLs for search intent, but evergreen guides (£100k tax trap, ISA vs LISA, etc.) are the same topic year-on-year and shouldn't be duplicated.
- **`posts.js` landmine — don't blanket-replace year labels** — When doing the annual refresh with a `replace_all` on `2025/26 → 2026/27` in `src/app/blog/posts.js`, the historical dated post titles (`uk-tax-changes-2025-26`, `uk-minimum-wage-2025-26`) will also get clobbered incorrectly. Those titles need to stay labelled with their original year. After any `replace_all` on `posts.js`, grep for `slug: "uk-(tax-changes|minimum-wage)-20` entries and verify the adjacent titles match their slug's year. Same caveat applies to the historical `page.js` files under `src/app/blog/uk-*-20XX-YY/` — leave them untouched during the refresh.
- **Tax Code Checker is a tool, not a calculator** — `/tax-code` decodes tax codes into plain English but does not perform tax calculations. It has no tax data constants (TAX_BANDS, NI_BANDS, etc.) and no calculation logic. It uses the same page layout as calculators (fullWidth LayoutWrapper, sidebar ads, educational cards, FAQ schema) but is listed separately in the calculators table as a "Tool". It has an in-content ad (`<AdUnit showScrollHint />`) after the input card, same as pay-rise.
- **Tax Code Checker has no dedicated blog post yet** — A supporting blog post (e.g. "UK Tax Codes Explained") would complete the topic cluster pattern. The Related Reading section currently links to existing posts (understanding-uk-tax-code, scottish-tax-vs-english-tax, maximize-take-home-pay).
- **Salary Per Second is entertainment, not a calculator** — `/salary-per-second` has no tax data or calculation logic. It divides an annual salary by time periods and shows a live counter using `requestAnimationFrame`. Working assumptions: 52 weeks, 260 working days, 1,950 working hours (37.5hr week). The live counter uses calendar seconds (31,557,600/year) since salaried earnings accrue continuously. Uses the same fullWidth LayoutWrapper pattern as calculators.
- **Salary Per Second has preset buttons** — 8 quick-select buttons for famous salaries (UK Average, Median, PM, Haaland, Salah, NHS Nurse, Teacher, Min Wage). Results update instantly as user types (no submit button, uses `useMemo`). Footballer salary figures are approximate — update if reported wages change.
- **Salary Per Second has shareable URLs** — supports `?salary=X` query param. A "Share these results" button copies the link to clipboard. Uses `useSearchParams()` in the client component (`SalaryPerSecondClient.js`).
- **Hreflang tags** — Root layout has `<link rel="alternate" hreflang="en-gb">` and `<link rel="alternate" hreflang="x-default">` pointing to the site root. `<html lang="en-GB">` is set for consistency.
- **Salary breakdown blog posts cover £20k-£100k** — 17 posts in £5k increments (20k, 25k, 30k, 35k, 40k, 45k, 50k, 55k, 60k, 65k, 70k, 75k, 80k, 85k, 90k, 95k, 100k). Each has full tax breakdown, student loan comparisons, Article + FAQPage schema, and cross-links to adjacent salary posts. The £100k post includes a prominent PA taper trap warning. Posts £55k+ show split basic/higher rate tax rows. Title tag format: "£X After Tax UK 2026/27 — Take-Home Pay on a £Xk Salary" (targets "X after tax" search queries).
- **Salary hub page** — `/salary-breakdown` is a pillar page with 17 color-coded salary cards (green=basic rate, amber=higher rate, red=£100k trap) linking to each breakdown post. Includes `ItemList` JSON-LD schema for carousel eligibility and FAQPage schema (7 questions). Uses LayoutWrapper with `narrow` prop.
- **Blog category filtering is shareable** — The blog index at `/blog` supports `?category=Salary+Guide` (etc.) URL params for shareable filtered views. Category buttons show post count badges. Uses `useSearchParams()` wrapped in Suspense (same pattern as dividend-tax and salary-per-second).
- **Dividend Tax Calculator calculates dividend tax only** — `/dividend-tax` takes salary and dividend inputs and calculates tax on dividends using UK-wide rates (10.75%/35.75%/39.35% from 2026/27; 8.75%/33.75%/39.35% in 2025/26 and earlier). It does NOT calculate income tax or NI on the salary — that's what the take-home pay calculator is for. Key rules implemented: dividends are the "top slice" (sit above salary in bands), dividend allowance (£500 from 2024/25 onwards, was £1,000 in 2023/24 and £2,000 before that), Personal Allowance tapering above £100k, unused PA can shelter dividends. Scottish taxpayers pay UK-wide dividend rates (not Scottish rates). Historical rates differ: 2021/22 used 7.5%/32.5%/38.1% before the 1.25pp Health & Social Care Levy increase, and Autumn Budget 2025 added another 2pp to the basic and higher rates from April 2026. Uses the same fullWidth LayoutWrapper pattern with results-aligned sidebar ad.
- **Dividend Tax Calculator has preset buttons** — 4 quick-select scenario buttons (Ltd Director Low Salary, Ltd Director High, Employed + Shares, High Earner + Dividends). Results update instantly via `useMemo` (no submit button). Uses emerald/teal colour theme to differentiate from other calculators.
- **Dividend Tax Calculator has shareable URLs** — supports `?salary=X&dividends=Y&year=Z` query params. A "Share these results" button copies the link to clipboard. Uses `useSearchParams()` in the client component (`DividendTaxClient.js`).
- **Dividend Tax Calculator has 9 educational cards** — How Dividend Tax Works, Dividend Tax Rates, Dividend Allowance History, Ltd Company Director Strategy, Scottish Taxpayers & Dividends, £100k Trap & Dividends, Reporting Dividends to HMRC, Dividend Tax vs Capital Gains Tax, and Tips to Reduce Your Dividend Tax Bill (full-width with 4-card grid).

## Known Gaps / TODO
- Tax data is duplicated across calculator files (could be centralised)
- No table of contents on long blog posts
- When adding new blog posts, update Related Reading sections on relevant calculator pages
- `/pay-rise` and `/take-home-pay-calculator` have two ad units (top + in-content) — other calculators only have the top ad unit and could benefit from an in-content one too
- Educational content depth varies — `/pay-rise` has ~3,500 words of educational content; other calculators now have ~2,500-3,000 words after adding cards in March 2026, but could still be expanded further to match pay-rise's depth
- `/salary-per-second` has no dedicated supporting blog post yet
- `/dividend-tax` does not calculate income tax or NI on the salary portion — it only calculates dividend tax. A future enhancement could show the combined tax picture.
