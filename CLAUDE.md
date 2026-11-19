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
npm run lint         # BROKEN — see note below; use `npm run build` as the gate
npm run check:tax    # Tax-fact consistency check (see below) — the one working gate
```

**`npm run lint` does not work.** `next lint` was removed in Next.js 16, so the script resolves "lint" as a directory path and fails. Invoking `eslint` directly also fails with `TypeError: Converting circular structure to JSON` inside `@eslint/eslintrc` config validation. This is pre-existing, not something a recent change introduced. **`npm run build` is the only working gate** — run it before every push, since pushing to `main` deploys to Vercel.

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
- Multiple tax years (2027/28, 2026/27, 2025/26, 2024/25, 2023/24, 2022/23, 2021/22) — but **not every calculator offers every year**; see "Tax year selector coverage" below
- Scottish tax rates (separate bands)
- Student loan plans (1, 2, 4, 5, Postgraduate)
- Pension contributions
- Tax code customisation

## Tax Data

Tax bands, NI thresholds, and student loan thresholds are defined inline in each calculator (no shared constants file). **Watch where:** on the two split pages the data lives in the client component, not `page.js` — `take-home-pay-calculator/TaxCalculatorClient.js` and `dividend-tax/DividendTaxClient.js`. The other calculators keep it in their own `page.js`.

The default is **2026/27** and should stay there until April 2027 — don't flip it early just because a newer year exists in the table. **2027/28 is selectable as a forward year**; historical years go back to 2021/22. For exact figures, always read the source file rather than trusting this doc — values here go stale fast.

### Tax year selector coverage

| Calculator | Years offered | Notes |
|---|---|---|
| `/take-home-pay-calculator` | 2027/28 back to 2021/22 | Full table, in `TaxCalculatorClient.js` |
| `/pay-rise` | 2027/28 back to 2021/22 | Full table |
| `/dividend-tax` | 2027/28 back to 2021/22 | Different shape — one `TAX_DATA` object, not separate `TAX_BANDS`/`NI_BANDS` |
| `/two-jobs` | 2027/28 and 2026/27 only | Had **no** selector at all before November 2026; `TAX_YEARS` was added then |
| everything else | no selector | Statutory-rate and non-tax tools |

Things to remember about the UK tax system when editing:
- rUK income tax thresholds (Personal Allowance, higher-rate, additional-rate) are frozen until April 2031 (Autumn Budget 2025 extended the existing freeze by 3 years). Don't update them year-on-year.
- Scottish bands change more frequently. Starter and Basic rate band limits were extended for 2026/27 while rates and other thresholds stayed flat.
- Dividend basic and higher rates rose by 2pp for 2026/27 (10.75% / 35.75% / 39.35%). The dividend allowance is unchanged at £500.
- SSP was reformed from 6 April 2026: new weekly rate is £123.25 or 80% of AWE if lower, Lower Earnings Limit abolished, 3-day waiting period removed. The sick-pay calculator has a toggle for historical 2025/26 rules.
- SMP and other family statutory payments use £194.32/week for 2026/27 with a £129/week qualifying threshold.
- Employee NI stays at 8% / 2% on the same thresholds as 2025/26. Employer NI is 15% above a £5,000 secondary threshold and is frozen until 2030/31.
- **Self-employed NI is not what most of the site used to say.** Class 4 is **6%** on profits £12,570–£50,270 and 2% above (cut from 9% on 6 April 2024). **Class 2 stopped being a compulsory charge on the same date**: profits of £7,105+ (2026/27) are treated as having paid it, so the NI record builds with no payment, and only below that can you pay voluntary Class 2, at £3.65/week. No calculator models self-employment, so these figures live *only* in prose, with no calculator constant to `verify` against — `check:tax` covers them as prose-only facts (as it already did for employer NI and SSP), so a `verify`-less fact is the normal pattern, not a limitation.

From the **Autumn Budget 2026 (28 October 2026)**, affecting 2027/28:
- rUK income tax rates and thresholds are **unchanged again** and now maintained at these levels to 2030/31. Personal Allowance £12,570, higher rate £50,270, additional rate £125,140.
- Employee and employer NI are **unchanged** for 2027/28.
- Dividend rates and the £500 dividend allowance are **unchanged** for 2027/28 (the 2pp rise already landed in 2026/27).
- **The real change is savings and property income**: from 6 April 2027 those rates rise to **24% / 44% / 49%** (basic / higher / additional). No calculator on the site handles savings or rental income, so nothing needed recalculating — but blog claims about savings interest need checking against these rates.
- Benefits in kind move onto payroll reporting.
- **The trading allowance trebles from £1,000 to £3,000 from 6 April 2027**, and the Self Assessment reporting threshold for trading income rises to match (Finance Bill 2026-27). It stays £1,000 for the whole of 2026/27. Secondary coverage got this wrong in both directions — KPMG reported only the reporting threshold moving — so the OOTLAR is again the source that settles it.
- **Scotland is not settled.** Scottish rates and bands for 2027/28 are set by the Scottish Parliament and were not announced at Budget time (Scottish Budget was due 3 December 2026). See the `scottishProvisional` entry in Key Decisions.
- The planned cut of the cash ISA allowance to £12,000 was **cancelled**. The ISA subscription limit stays £20,000 for both 2026/27 and 2027/28. Source: HMRC OOTLAR Annex A, "Tax free savings accounts".

**Split tax years are modelled with the pre-change values, which overstates NI.** Three years had mid-year NI changes, and a single-rate table cannot express them:

| Year | What actually happened | What `NI_BANDS` holds |
|---|---|---|
| 2022/23 | Rate 13.25% to 5 Nov 2022, then 12%. Primary threshold £9,880 to 5 Jul 2022, then £12,570. HMRC's annual equivalents (published for directors) are £11,908 and 12.73%. | £9,880 and 13.25% — the pre-change values for **both**, so NI at £50,270 reads £5,352 against an annual-equivalent £4,883. **Overstated by ~£468.** |
| 2023/24 | 12% to 5 Jan 2024, then 10%. Threshold flat £12,570. | Flat 12%, so £4,524 against a pro-rata ~11.5% giving £4,336. **Overstated by ~£189.** |
| 2024/25 | 8% from day one (cut landed 6 Apr 2024). | **Was 0.12 until November 2026** — a real bug, overstating by up to £1,508/yr. Now 0.08. |

2021/22 and 2025/26 onwards had no mid-year change and are correct as modelled.

**Decision (November 2026): 2022/23 and 2023/24 are deliberately left as they are.** Unlike 2024/25 — where the cut landed on day one of the year, making a flat 12% simply wrong — choosing one figure for a split year is a judgement call, the amounts are small, and these are low-traffic historical years whose output people may have bookmarked. **Don't "fix" them as if they were typos.** If it is ever revisited, HMRC's published **blended directors' rates** are the right reference — they exist precisely because an annual earnings period needs a single figure for a split year.

When a Budget lands, the authoritative source is **HMRC's OOTLAR and its Annex A**, not press coverage — secondary sources contradicted each other on both the savings rates and the ISA position in November 2026.

## Tax-Fact Consistency Check

`npm run check:tax` (`scripts/check-tax-facts.mjs`) answers one question: **does the site's prose still agree with its calculators?** It exists because the November 2026 audit found the blog and several calculator pages quoting rates one or two tax years out of date — including `/dividend-tax` computing at 10.75% while its own educational cards said 8.75%, and `/compare-salaries` serving 2025/26 student loan thresholds in its FAQPage schema. The interactive parts get updated at the annual refresh; the words around them do not.

`scripts/tax-facts.json` is the input, and doubles as **the quickest reference for current prose-facing figures** — student loan thresholds, NLW, SSP, SMP, dividend, employee/employer NI and self-employed Class 2/Class 4 rates are all in one place there, which this doc deliberately does not duplicate. Each fact carries the current value, `verify` pointers into the real calculator constants, and `stale` regexes matching the superseded value. **The facts file is itself checked against the code**, so it cannot drift silently either — that is the point of `verify`, and it is what caught the 2024/25 NI bug.

Six checks. `drift`, `contradiction`, `badge` and `signal` are **errors**; `superseded` and `future` are **warnings** (`--strict` fails on those too):

| Check | Catches |
|---|---|
| `drift` | The facts file no longer matches the calculator constants |
| `contradiction` | A page quoting a figure that disagrees with the constants it defines itself |
| `superseded` | A previous year's figure presented as current |
| `badge` | A "Last updated" badge naming the wrong tax year |
| `signal` | A post whose schema `dateModified` is after its `date` but has no `lastModified` in `posts.js`, so its sitemap `lastmod` never moves and the correction is never re-crawled |
| `future` | A change that already happened, still written as upcoming ("From April 2026 ... will rise") |

**Suppressing a legitimate historical mention** — comparison tables and "old rules" sections will trip `superseded`. Three escapes, in order of preference:
- Wrap the block: `{/* tax-check-ignore-start: reason */}` … `{/* tax-check-ignore-end */}`. Used on the 2025/26-vs-2026/27 tables in `uk-tax-changes-2026-27` and the "Previous SSP Rules" list in `/sick-pay`.
- One line: put `tax-check-ignore` in a comment on it.
- A whole archival page: add it to `historicalPages` in `tax-facts.json`.

Same-line comparisons ("up from £26,065", "was £118.75") are skipped automatically via `contextExclude` — no pragma needed.

**Known blind spot:** a page in `historicalPages` is skipped entirely, so nothing checks that a historical post is right about its *own* year. `uk-tax-changes-2024-25` claimed 12% employee NI for 2024/25 when the rate was 8% from day one of that year — found by hand, not by the checker. When you add a page to `historicalPages`, read its figures once first.

It is **not** wired into `prebuild`, so it never blocks a deploy. Add `"prebuild": "npm run check:tax"` to `package.json` if you want it to. Run it before every push, and as step 0 of the annual refresh — with `npm run lint` broken, this and `npm run build` are the only gates that work.

## Working in This Repo

- **Pushing to `main` deploys to Vercel.** There is no PR step and no staging environment, so `npm run build` before every push is not optional.
- **More than one agent session may be editing this checkout at once.** It happened in November 2026: a second session was mid-draft on a new blog post, with its own edits to `posts.js`, `llms.txt` and an existing post, while this one was committing. **Read `git status` before you commit and stage paths explicitly — never `git add -A` or `git add .`**, or you will commit someone else's half-finished work. `posts.js` is the likeliest collision, since every new post touches it.
- **`.claude/` is not in `.gitignore`**, so `.claude/launch.json` and `.claude/worktrees/` show as changes permanently, as does a stray `tmp-preview-family-board.html`. That noise is exactly what makes a blanket `git add` dangerous here. `launch.json` in particular tends to accumulate machine-specific absolute paths that should not be committed.

## Verifying Changes

There is no lint, so the gates are `npm run build` and `npm run check:tax`. Neither one proves a calculator still returns the right number — for that you have to drive the page.

Notes from doing it, which cost time to rediscover:
- **`form_input`-style value setting does not reach React.** These are controlled inputs; assigning `.value` leaves state untouched, and the figure silently fails to register (or concatenates with what was there). Use the native setter plus a bubbling `input` event:  `Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el, v); el.dispatchEvent(new Event('input',{bubbles:true}))`.
- **`/pay-rise` needs both fields before it renders anything.** Salary alone leaves the "See how much of your pay rise you'll actually keep" empty state up, which reads like a broken calculator. Set the salary *and* the rise.
- **The cookie consent dialog intercepts clicks** on first load. Dismiss it first (decline non-essential).
- **Don't verify a client-rendered figure with `curl`.** Preset notes and results are not in the server HTML, so grepping the response finds neither the old value nor the new one and looks like a failed deploy. Check the JS chunk, or drive the page.
- **AdSense never fills on localhost**, so ad containers collapse to zero height and sticky side-rail bugs are invisible in dev. See the `inset-y-8` notes in Key Decisions.

A worked check: 2024/25 at £50,270 should give income tax £7,540, NI £3,016 and take-home £39,714, on both `/take-home-pay-calculator` and `/pay-rise`. If NI reads £4,524 the 2024/25 rate has regressed to 12%.

## Annual Tax Year Refresh (April)

When a new UK tax year starts, update these in order. **Run `npm run check:tax` first** — it tells you which pages still quote last year's figures, which is most of the work — and again at the end, when it should come back clean.

1. **Calculator tax data** — Add the new year to `TAX_YEARS`, `TAX_BANDS`, `NI_BANDS` and (if thresholds moved) `STUDENT_LOAN_BY_YEAR`, then set it as the default in `useState`. Affects: `take-home-pay-calculator/TaxCalculatorClient.js`, `pay-rise/page.js`, `two-jobs/page.js`, `dividend-tax/DividendTaxClient.js` — note two of the four are client components, not `page.js`. Keep historical years in place.
2. **Statutory rate calculators** — `sick-pay/page.js` (flip `useNewRules` default and update constants), `maternity-sick-pay/page.js` (SMP rate + qualifying threshold).
3. **SEO surface** — every calculator `layout.js` (title/description/OG/Twitter), root `layout.js`, `blog/layout.js`, `faq/page.js`, homepage `<h1>` in `page.js`, `components/Footer.js` tagline, "Last updated" badges on every calculator and blog page, FAQPage JSON-LD answers that mention specific figures.
4. **llms.txt files** — `public/llms.txt` and `public/llms-full.txt` (AI crawlers).
5. **Build and deploy** — `npm run build` auto-submits the sitemap to IndexNow on postbuild.
6. **Blog** — create two new *dated* posts (`uk-tax-changes-YYYY-YY`, `uk-minimum-wage-YYYY-YY`). Swap "UK Tax Changes" Related Reading links across calculator pages and evergreen blog posts from the old post to the new one. Refresh evergreen blog posts in place (don't duplicate them).

Historical posts (`uk-tax-changes-2025-26`, `uk-minimum-wage-2025-26`, etc.) are deliberately left intact as reference for people searching prior years. The URLs stay live and still appear in the sitemap.

## Blog

51 blog posts across categories: Salary Guide, Tax Planning, Tax Updates, Money Tips, Pensions, Student Loans, Savings & ISAs, Self-Employment. Includes 6 "vs" comparison posts (Scottish tax vs English tax, Plan 1 vs Plan 2, salary sacrifice vs personal pension, ISA vs LISA, PAYE vs self-employed, full-time vs part-time tax) which target high-intent search queries, plus dedicated topic cluster posts for each calculator (e.g. two-jobs-tax-explained supports /two-jobs, maternity-pay-guide supports /maternity-sick-pay, uk-dividend-tax-explained supports /dividend-tax). Every calculator has at least one dedicated blog post linking back to it. Two dated posts are refreshed each tax year (`uk-tax-changes-YYYY-YY`, `uk-minimum-wage-YYYY-YY`) with the old versions kept as historical reference — see the "Dated vs evergreen posts" note in Key Decisions.

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
| Twitch & YouTube Income Tax | `/blog/streamer-content-creator-tax-uk` | /paye-vs-self-employed, /two-jobs (creator & side-hustle tax) |
| UK Tax Changes 2026/27 | `/blog/uk-tax-changes-2026-27` | /take-home-pay-calculator (current year hub) |
| Autumn Budget 2026 | `/blog/autumn-budget-2026-what-it-means-for-your-pay` | /take-home-pay-calculator, /pay-rise, /two-jobs, /dividend-tax (Budget + 2027/28 hub) |
| UK Tax Changes 2025/26 | `/blog/uk-tax-changes-2025-26` | historical reference |

### Adding a New Blog Post

1. Create `src/app/blog/[slug]/page.js`
2. Wrap content in `<LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Post Title" }]} narrow>` — this provides sidebar, footer, breadcrumbs, and narrow layout for side rail ads
3. Add `import AdUnit from "../../components/AdUnit";` and place `<AdUnit slot="1586479879" hideOnMobile />` above the h1
4. Add in-article ads between content sections: `<AdUnit slot="3520564956" layout="in-article" format="fluid" />`. Long posts (10+ min): 3 ads (after 2nd, 4th/5th, and 6th/7th section). Short posts (under 10 min): 2 ads (after 2nd and 4th section). Always keep at least 2 content sections between ads. Place before the CTA/disclaimer, never after.
5. Add the "Last updated" badge below the category/date/readtime row: `<p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: November 2026 &middot; Reflects 2026/27 tax year</p>`. Blog posts use the `&middot;` entity here; **calculator pages use a literal `·` character instead**, so a find-and-replace across both needs two passes. Update the text whenever the post's facts change, not only at the annual refresh.
6. **Add the post to `src/app/blog/posts.js`** — this is the single source of truth. The blog index, RSS feed (`/feed.xml`), and sitemap (`/sitemap.js`) all import from this file automatically. Fields: slug, title, description, date, readTime, category, featured, priority, and the optional **`lastModified`**.
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
- **IndexNow landmine — it fails silently.** Because the default streaming mode only submits URLs with a `lastmod` inside a 7-day window, a site that stops publishing stops submitting. Between April and November 2026 every postbuild printed `0 URLs modified in the last 7 days`, submitted nothing, and **still exited 0** — so nothing in the build log looked wrong while seven months of indexing quietly stopped. If you haven't shipped content in a week, the build is telling search engines nothing. Read the postbuild output, and run `--all` after any gap.
- **Deploy before submitting.** The script (and Google) read `https://www.salarytakehome.co.uk/sitemap.xml`, so running IndexNow against undeployed local changes resubmits the *old* URL set. Order is: `npm run build` → commit → push/deploy → `node scripts/submit-indexnow.mjs --all`.
- Google: does NOT support IndexNow. Google sitemap ping endpoint is deprecated (returns 404). Use Google Search Console for manual URL submission, or rely on Google crawling the sitemap `<lastmod>` dates.
- Breadcrumbs: every page has visual breadcrumbs + BreadcrumbList JSON-LD schema via the Breadcrumbs component
- **Last Updated badge:** every calculator page shows one below the h1 description. `/take-home-pay-calculator`, `/pay-rise`, `/two-jobs` and `/dividend-tax` say "November 2026 · Covers 2026/27 and 2027/28"; the other nine say "April 2026 · Reflects 2026/27 tax year", which is still accurate and deliberately left alone. **Don't bump a badge date without a content change** — the badge is a claim about the content, not a freshness dial.
- **Related Reading:** all calculator pages have a Related Reading section at the bottom linking to relevant blog posts. When adding new blog posts, consider updating these links.
- **Internal linking:** calculators link to blog posts (Related Reading sections), blog posts link back to calculators (inline CTAs). Both directions matter for SEO.
- **Seasonality — plan content ahead of the two peaks.** Traffic for this kind of site is not flat: **January** (new year pay reviews, the 31 January Self Assessment deadline, people checking a new salary) and **April** (tax year start, new rates taking effect) are the two spikes. Publishing in the month itself is late — search needs lead time to index and rank, which is the whole lesson of missing the 28 October 2026 Budget by three weeks. Get tax-year content live in **February/March**, and new-year content live in **December**.
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
- **Manual ad placements** — All 10 calculator pages have: (1) a top ad (`<AdUnit slot="1586479879" hideOnMobile />`) above the h1 (visible on iPad+), and (2) two stacked sticky right sidebar ads (`<AdUnit slot="4603525459" hideOnMobile />` + `<AdUnit slot="9534353704" hideOnMobile />`) visible at xl+ (1280px+). `/pay-rise`, `/take-home-pay-calculator`, and `/dividend-tax` also have an in-content ad (`<AdUnit />`, default slot `7756198179`) after the input card. `/pay-rise` and `/dividend-tax` also have a third sidebar ad (`<AdUnit slot="1315738286" hideOnMobile />`) — it lives inside the side rail as the sticky unit at the bottom of the stack, not in the results section (see "Sidebar ad positioning"). All blog pages (index + every individual post) have a top ad (`<AdUnit slot="1586479879" hideOnMobile />`) above the h1. All individual blog posts also have in-article ads (`<AdUnit slot="3520564956" layout="in-article" format="fluid" />`) placed between content sections — 3 ads on long posts (10+ min), 2 ads on short posts (under 10 min), with at least 2 content sections between ads.
- **Sidebar ads stay at xl+ (1280px)** — We deliberately chose not to show sidebar ads on iPad landscape (1024px) because with the 230px nav sidebar + 192px ad column, only ~602px remains for content. Auto ads handle iPad instead.
- **Sidebar ad positioning** — The side rail is a direct child of the page's outermost `<div className="relative min-h-screen ...">` wrapper, using `absolute right-8 inset-y-8 w-[160px]`. Content columns use `xl:pr-[192px]` to reserve space so cards don't overlap. Card scaling (`lg:scale-[0.92]`) extends to `2xl` to fit on 13" MacBook screens (1440px).
  - **`inset-y-8`, not `top-8`** — the rail must stretch the full height of its positioning context, otherwise the container is only as tall as the ads themselves and the `sticky` child has no scroll range: the ads unpin a few hundred pixels down and the right column is empty for the rest of the page. Same landmine as the blog side rail in `LayoutWrapper`. It is silently invisible locally because AdSense doesn't fill on localhost and the containers collapse to zero height — to check it, temporarily force `ins.adsbygoogle { height: 600px }` and confirm the sticky unit stays pinned at the bottom of the page.
  - **The rail must be page-level, not section-level** — it sits outside the inner `relative mx-auto ...` section wrapper (and outside `<main>` on `/take-home-pay-calculator`). If it's nested inside the first section, its scroll range stops where that section ends, which on multi-section pages is a fraction of the page.
  - **Only the last unit in the stack is sticky** — earlier units are static and scroll away at the top of the page; the final one is wrapped in `<div className="sticky top-8">` and follows the reader down. Don't make the whole stack sticky: two 600px units are taller than most viewports, so the second one would never be fully visible.
  - **Never put a second ad in the same column** — `/pay-rise` and `/dividend-tax` used to place slot `1315738286` absolutely alongside the results card (`right-[-184px] top-0`), which the full-height sticky rail scrolls straight through. Overlapping AdSense units are a policy problem; that slot is now the sticky unit at the bottom of each page's rail instead.
- **Wide side rail on `/pay-rise` at 2xl** — `/pay-rise` widens its right-hand ad column from 160px to 300px at 2xl (1536px+) so AdSense can serve a 300x600 half-page instead of a 160x600 skyscraper. Three classes move together and must stay in sync: the rail (`w-[160px] 2xl:w-[300px]`), the content div (`xl:pr-[192px] 2xl:pr-[332px]`), and the Related Reading block (same padding pair). The gutter is 300 + 32px gap = 332px, which leaves ~910px of content at 1536px. It stays at 160px between 1280–1535px because a 332px gutter there would squeeze the two-column form below usable width. The other calculators still use the 160px column everywhere.
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
- **`date` is the publish date; `lastModified` is the update date** — `posts.js` entries carry `date` (when the post went live, shown on the page and never changed afterwards) and an optional `lastModified`. `sitemap.js` uses `new Date(post.lastModified || post.date)`, and the `/blog` index entry uses the newest of either across all posts. **When you correct or refresh a post, add or bump `lastModified`** — otherwise its sitemap `lastmod` keeps the original publish date, search engines get no signal that anything changed, and IndexNow's 7-day streaming window skips it entirely. This was added in November 2026 after correcting thirteen posts that would otherwise never have been re-crawled. Do **not** edit `date` to fake an update: it changes the visible byline and loses the real publish history.
- **RSS feed** — Available at `/feed.xml` via a Next.js route handler. Auto-discovers via `<link rel="alternate" type="application/rss+xml">` in the root layout. The feed imports from `posts.js` so it stays in sync automatically.
- **"Last updated" badge on blog posts** — Blog posts show a green badge below the category/date/readtime row. The text is **not uniform** and shouldn't be assumed: most say "April 2026 · Reflects 2026/27 tax year", and posts refreshed in November 2026 carry their own wording describing what actually changed. Badge uses `text-green-700 bg-green-50 border-green-200 rounded-full`; blog posts use the `&middot;` entity while calculators use a literal `·`, so a find-and-replace across both needs two passes. Grep before replacing.
- **Historical posts use an amber badge, not green** — `uk-tax-changes-2024-25`, `uk-tax-changes-2025-26` and `uk-minimum-wage-2025-26` carry `text-amber-800 bg-amber-50 border-amber-200` reading "Historical reference · Covers the YYYY/YY tax year · See ... for current rates". Green reads as "fresh" and misled readers on archival pages. Keep new historical posts on amber, and **never update their figures** — the whole point is that they preserve what that year's rates were. **Open edge case:** `uk-tax-changes-2024-25` states Class 2 at £3.45/week above £6,515 **and Class 4 at 9%**, but Class 2 was abolished and Class 4 cut to 6% *in* April 2024 — so both figures were wrong for that post's own year, not merely superseded. `historicalPages` exempts the file, so `check:tax` will never flag either. The rule as written protects it. Preserving a figure that was never right is not preserving history, so decide deliberately rather than letting the rule answer it.
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

- **Student loan thresholds are layered, not flat** — `take-home-pay-calculator/TaxCalculatorClient.js` and `pay-rise/page.js` keep the original flat `STUDENT_LOAN` table **plus** a year-keyed `STUDENT_LOAN_BY_YEAR` override, read through `getStudentLoanPlan(taxYear, plan)`. Anything not listed in the override falls back to the flat table. This exists because only Plan 1 (£28,005) and Plan 2 (£29,385, frozen to 2029/30) were confirmed for 2027/28 — Plan 4, Plan 5 and postgraduate were unannounced and carry forward. When editing thresholds, check **both** structures; changing only the flat table will silently not affect 2027/28.
- **`scottishProvisional` flag — has a removal deadline** — the 2027/28 `TAX_BANDS` entries in `TaxCalculatorClient.js` and `pay-rise/page.js` carry `scottishProvisional: true`, because Scottish rates for 2027/28 weren't set at Budget time (Scottish Budget due 3 December 2026). The `scottishBands` there are **2026/27 figures carried forward** so the calculator still returns a number, and an amber in-page caveat renders when the user has both Scotland and 2027/28 selected. **After the Scottish Rate Resolution: update the bands, delete the flag, and delete the conditional notice.** Grep `scottishProvisional` to find all sites.
- **`/two-jobs` gained a tax year selector in November 2026** — it previously had none; `taxYear: '2026/27'` was effectively hardcoded in state with no UI to change it. It now has a `TAX_YEARS` constant and a selector card above the job forms grid. It deliberately offers **only 2027/28 and 2026/27**, not the full historical range, because the historical band data was never added to this file.
- **`cash-isa-limit-2027` says the opposite of what its slug suggests** — the post originally explained a cut of the cash ISA allowance to £12,000 from April 2027. That policy was **cancelled at the Autumn Budget 2026**; the limit stays £20,000. The post was rewritten to correct the record and **the slug was deliberately kept** so its existing rankings and backlinks land readers on the right answer rather than a 404. Don't "fix" the slug to match the new title. The same £12,000 claim had spread to `isa-vs-lisa` (including an actively wrong LISA planning rule) and `uk-tax-changes-2026-27`; both corrected. **Lesson: when a tax policy is cancelled, grep the whole site for the figure — it is never in only one post.**
- **Don't fake sitemap freshness** — during the November 2026 refresh, `lastModified` in `sitemap.js` was bumped **only** for pages whose content genuinely changed. Bumping every page's date to look fresh is discounted by Google and costs the signal real value on the pages that did change.

## Known Gaps / TODO

- **The historical tax year data has never been audited end to end.** 2024/25's NI rate was simply wrong (12% instead of 8%) and went unnoticed for over two years; checking the rest turned up 2022/23 and 2023/24 both modelled on pre-change values for split years. **Only the NI table was checked** — the income tax bands, Scottish bands and student loan thresholds for 2021/22–2024/25 have not been verified against HMRC for any year. Nothing guards them either: `check:tax` only verifies the facts the facts file pins, which is current-year figures.
- **Dated action: remove `scottishProvisional`** after the Scottish Budget (due 3 December 2026) and replace the carried-forward 2027/28 Scottish bands with the real ones.
- **Rate claims drift across the whole site.** The November 2026 audit started from nine stale badges and found wrong *figures* everywhere: student loan thresholds two updates behind, employee NI as 12% in three places, employer NI as 13.8% in six, `/dividend-tax` stating the old 8.75%/33.75% rates, `/compare-salaries` serving 2025/26 thresholds in its FAQPage schema, `/salary-per-second` on the old NLW, and `NI_BANDS["2024/25"].rate` set to 0.12 when the rate was cut to 8% on 6 April 2024 — a live calculation error, not just prose. **`npm run check:tax` now guards all of this** (see "Tax-Fact Consistency Check"), but it is not in `prebuild`, so it only helps if someone runs it.
- **`check:tax` guards only the facts listed in `tax-facts.json` — a green check is not a clean bill of health.** Until November 2026 all of its facts were employee-side, which is exactly why self-employed NI drift survived both the audit and the checker itself: `self-employed-tax-calculator-guide` quoted Class 2 at £3.45/week and Class 4 at **9%** under an "April 2026 · Reflects 2026/27" badge, `paye-vs-self-employed` carried £179.40 of Class 2 through a worked example *and its FAQPage schema*, and `/faq` had the dead Class 2 charge plus a 9% Class 4 rate in two answers. `check:tax` passed throughout — it was never looking. Now fixed: `class-4-ni-main-rate`, `class-2-ni-status` and `class-2-small-profits-threshold` were added (14 facts). **The lesson generalises — when you correct a figure the checker did not catch, add the fact, or the next person re-earns the same bug.**
- **Static content can contradict the calculator on the same page.** `/dividend-tax` computed at 10.75% while its own cards said 8.75%, and `/compare-salaries` had correct thresholds in its `<select>` and stale ones in its FAQPage schema. The interactive part gets updated during the tax year refresh; the prose, tables, FAQ answers and JSON-LD around it do not. **The schema is the public-facing copy** — it is what Google reads for rich results — so a stale FAQPage answer is worse than stale body text. When changing any rate, grep the page for the old figure rather than only editing the constants.
- **Watch for past changes still written in the future tense.** Several pages described the April 2026 SSP reform, the April 2026 NLW rise and the April 2026 dividend rate rise as upcoming, months after they took effect ("From April 2026 ... are set to rise"). Grep for "from April", "will rise", "is changing" and "set to" alongside a date that has passed.
- **`npm run lint` is broken** (`next lint` removed in Next.js 16; direct eslint hits a circular-structure error in `@eslint/eslintrc`). No working lint gate exists — only `npm run build`.
- **Savings and property income are not modelled anywhere**, even though the 2027/28 rate rise to 24/44/49 is the headline change from the Autumn Budget 2026. A savings-interest tax calculator is the most obvious gap in the tool set and has a live news hook.
- Tax data is duplicated across calculator files (could be centralised) — now across six year-blocks per file, so the duplication costs more than it used to.
- No table of contents on long blog posts
- When adding new blog posts, update Related Reading sections on relevant calculator pages
- `/pay-rise` and `/take-home-pay-calculator` have two ad units (top + in-content) — other calculators only have the top ad unit and could benefit from an in-content one too
- Educational content depth varies — `/pay-rise` has ~3,500 words of educational content; other calculators now have ~2,500-3,000 words after adding cards in March 2026, but could still be expanded further to match pay-rise's depth
- `/salary-per-second` has no dedicated supporting blog post yet
- `/dividend-tax` does not calculate income tax or NI on the salary portion — it only calculates dividend tax. A future enhancement could show the combined tax picture.
