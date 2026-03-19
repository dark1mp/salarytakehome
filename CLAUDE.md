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
- **Ads:** Google AdSense (ca-pub-3447670244921264)
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
│   ├── CookieConsent.js
│   ├── Footer.js                # 4-column footer with all nav links
│   ├── LayoutWrapper.js
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

17 blog posts across categories: Salary Guide, Tax Planning, Pensions, Student Loans, Savings & ISAs.

### Adding a New Blog Post

1. Create `src/app/blog/[slug]/page.js`
2. Add the post to the blog index in `src/app/blog/page.js`
3. Add the URL to `src/app/sitemap.js` (update blog lastModified date too)
4. Cross-link to relevant calculators (hourly-wage, take-home-pay-calculator, pay-rise)
5. Include structured data: Article schema + BreadcrumbList + FAQPage (if applicable)
6. Add RelatedArticles component at the bottom
7. After deploy, IndexNow submission happens automatically via postbuild script

## SEO Checklist

- Every page needs: title, description, canonical URL, Open Graph tags, Twitter card
- Structured data: WebApplication (root), Article (blog posts), FAQPage (where relevant)
- Sitemap: dynamic at `/sitemap.js` — must be updated when adding/removing pages
- Robots.txt: blocks `/api/`, `/_next/`, `/admin/`
- IndexNow: auto-submits all sitemap URLs post-build to Bing, Yandex, Seznam, Naver
- Google Search Console verified, Bing Webmaster verified
- Non-www redirects to www

## Styling Conventions

- **Primary colour:** #1566a0 (blue)
- **Gradients:** blue-to-indigo for headers/CTAs (`from-blue-600 to-indigo-700`)
- **Cards:** white background, rounded-2xl, shadow-lg, hover lift effects
- **Layout:** sidebar navigation on desktop, hamburger menu on mobile
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

## Known Gaps / TODO

- No proper breadcrumb component with BreadcrumbList schema across all pages
- No author/E-E-A-T signals on blog posts
- Salary breakdown pages only cover £30k-£60k (could expand £20k-£100k)
- Tax data is duplicated across calculator files (could be centralised)
- No RSS feed
- No hreflang tags
- FAQ schema only on FAQ page (could be added to calculator pages)
