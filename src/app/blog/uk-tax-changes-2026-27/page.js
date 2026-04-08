import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "UK Tax Changes 2026/27: Complete Guide to New Rates & Thresholds",
  description: "Comprehensive guide to UK tax changes for 2026/27: frozen thresholds extended to 2031, Scottish band changes, dividend tax rise, SSP reform, new student loan thresholds, and the £12.71 National Living Wage.",
  keywords: "UK tax changes 2026/27, income tax rates 2026, National Insurance 2026/27, Scottish tax 2026/27, dividend tax rise 2026, SSP reform 2026, Autumn Budget 2025, HMRC updates",
  openGraph: {
    title: "UK Tax Changes 2026/27: What You Need to Know",
    description: "Complete guide to the latest tax rates, thresholds, and changes affecting your take-home pay from 6 April 2026.",
    type: "article",
    publishedTime: "2026-04-06T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome Calculator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Tax Changes 2026/27: Complete Guide",
    description: "Frozen thresholds, Scottish band tweaks, dividend rate rise, SSP reform and the new £12.71 NLW — everything changing for 2026/27.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/uk-tax-changes-2026-27",
  },
};

export default function UKTaxChanges202627() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "UK Tax Changes 2026/27: What You Need to Know" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "UK Tax Changes 2026/27: Complete Guide to New Rates & Thresholds",
              "description": "Comprehensive guide to UK tax changes for 2026/27: frozen thresholds extended to 2031, Scottish band changes, dividend tax rise, SSP reform, and new student loan thresholds.",
              "datePublished": "2026-04-06T00:00:00.000Z",
              "dateModified": "2026-04-08T00:00:00.000Z",
              "author": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "publisher": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.salarytakehome.co.uk/blog/uk-tax-changes-2026-27" },
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "When does the 2026/27 tax year start?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The UK tax year runs from 6 April 2026 to 5 April 2027." }
                },
                {
                  "@type": "Question",
                  "name": "Has the Personal Allowance increased for 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. The Personal Allowance remains £12,570 and is now frozen until April 2031 — the Autumn Budget 2025 extended the existing freeze by three more years. The higher-rate threshold (£50,270) and additional-rate threshold (£125,140) are also frozen to April 2031." }
                },
                {
                  "@type": "Question",
                  "name": "Did National Insurance change for 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. Employee Class 1 NI remains at 8% on earnings between £12,570 and £50,270, and 2% above £50,270. Employer NI stays at 15% above the £5,000 secondary threshold. Employer thresholds are frozen until 2030/31." }
                },
                {
                  "@type": "Question",
                  "name": "What changed for Scottish taxpayers in 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The Scottish Budget (January 2026) extended the Starter rate band limit to £16,537 (from £15,397) and the Basic rate band limit to £29,526 (from £27,491). Rates are unchanged — Starter 19%, Basic 20%, Intermediate 21%, Higher 42%, Advanced 45%, Top 48%. The Higher, Advanced and Top thresholds remain frozen." }
                },
                {
                  "@type": "Question",
                  "name": "Did dividend tax rates go up in 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Autumn Budget 2025 increased the basic and higher dividend rates by 2 percentage points from 6 April 2026. Basic rate is now 10.75% (was 8.75%), higher rate is 35.75% (was 33.75%), and the additional rate remains 39.35%. The £500 dividend allowance is unchanged." }
                },
                {
                  "@type": "Question",
                  "name": "What's new for Statutory Sick Pay in 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Three major changes came into force on 6 April 2026: (1) the weekly rate increased to £123.25, or 80% of average weekly earnings if lower; (2) the Lower Earnings Limit was abolished so every employee qualifies regardless of income; and (3) the 3-day waiting period was removed so SSP is paid from day 1 of sickness." }
                },
                {
                  "@type": "Question",
                  "name": "What are the new student loan thresholds for 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Plan 1: £26,900 (up from £26,065). Plan 2: £29,385 (up from £28,470). Plan 4 (Scotland): £33,795 (up from £32,745). Plan 5: £25,000 (unchanged — repayments began from April 2026). Postgraduate: £21,000 (unchanged). Repayment rates are 9% for Plans 1-5 and 6% for postgrad loans." }
                }
              ]
            }
          ]
        }) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                Tax Updates
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-04-06">
                April 6, 2026
              </time>
              <span className="text-gray-500 text-sm">11 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: April 2026 &middot; Reflects 2026/27 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              UK Tax Changes 2026/27: What You Need to Know
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A plain-English guide to every change taking effect from 6 April 2026, and how each one affects your take-home pay.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Changes at a Glance</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">What's staying the same</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Personal Allowance still £12,570</li>
                    <li>• Higher-rate threshold still £50,270</li>
                    <li>• Additional-rate threshold still £125,140</li>
                    <li>• Employee NI still 8% / 2%</li>
                    <li>• £500 dividend allowance unchanged</li>
                    <li>• £20,000 ISA allowance unchanged</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">What's changed</h3>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Freeze extended another 3 years to April 2031</li>
                    <li>• Scottish Starter &amp; Basic bands extended</li>
                    <li>• Dividend basic &amp; higher rates +2pp</li>
                    <li>• SSP reform: day-1 pay, no LEL, £123.25/wk</li>
                    <li>• SMP up to £194.32/week</li>
                    <li>• Student loan thresholds raised (Plans 1, 2, 4)</li>
                    <li>• National Living Wage £12.71/hour (+4.1%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Income Tax Rates 2026/27 (England, Wales &amp; Northern Ireland)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Taxable income</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Personal Allowance</td>
                      <td className="border border-gray-200 px-4 py-3">Up to £12,570</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Basic rate</td>
                      <td className="border border-gray-200 px-4 py-3">£12,571 – £50,270</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">20%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Higher rate</td>
                      <td className="border border-gray-200 px-4 py-3">£50,271 – £125,140</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">40%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Additional rate</td>
                      <td className="border border-gray-200 px-4 py-3">£125,141+</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>The big headline:</strong> the Autumn Budget 2025 extended the freeze on these thresholds for a further three years — they will now stay frozen until April 2031. With wages rising each year, more workers get dragged into higher bands without any change in real earnings. Read our breakdown of the <Link href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">£100k tax trap</Link> for how this hits six-figure earners especially hard.
                </p>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Scottish Income Tax 2026/27</h2>
              <p className="text-gray-700 mb-4">
                The Scottish Budget in January 2026 made modest but welcome changes: the Starter rate band limit was extended by 7.4% and the Basic rate band limit by 7.4% as well, meaning most Scottish taxpayers pay slightly less tax on the affected slice of income. Rates were held flat, and the Higher, Advanced and Top thresholds remain frozen.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Taxable income</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Personal Allowance</td>
                      <td className="border border-gray-200 px-4 py-3">Up to £12,570</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Starter rate</td>
                      <td className="border border-gray-200 px-4 py-3">£12,571 – £16,537</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">19%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Basic rate</td>
                      <td className="border border-gray-200 px-4 py-3">£16,538 – £29,526</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">20%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Intermediate rate</td>
                      <td className="border border-gray-200 px-4 py-3">£29,527 – £43,662</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">21%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Higher rate</td>
                      <td className="border border-gray-200 px-4 py-3">£43,663 – £75,000</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">42%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Advanced rate</td>
                      <td className="border border-gray-200 px-4 py-3">£75,001 – £125,140</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Top rate</td>
                      <td className="border border-gray-200 px-4 py-3">£125,141+</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">48%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                For a side-by-side comparison of Scottish and rest-of-UK tax bills at common salaries, see our <Link href="/blog/scottish-tax-vs-english-tax" className="text-blue-600 hover:text-blue-800 underline font-semibold">Scottish tax vs English tax breakdown</Link>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">National Insurance 2026/27</h2>
              <p className="text-gray-700 mb-4">
                Employee National Insurance rates and thresholds are unchanged from 2025/26. The main rate stays at 8% and the upper rate at 2%, with thresholds of £12,570 and £50,270.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Employee NI (Class 1)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Earnings</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Up to £12,570</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">£12,571 – £50,270</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">8%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">£50,271+</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm">
                Employer NI also stays put: 15% above the £5,000 secondary threshold, with the £10,500 Employment Allowance unchanged. Employer thresholds are frozen until 2030/31. For the full rates tables, see <a href="https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK: Rates and thresholds for employers 2026 to 2027</a>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dividend Tax: The 2pp Rate Rise</h2>
              <p className="text-gray-700 mb-4">
                The Autumn Budget 2025 announced an increase to the basic and higher rates of dividend tax from 6 April 2026. The additional rate and the £500 dividend allowance are unchanged. This change was primarily aimed at owner-managed companies where directors take a low salary plus dividends.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2025/26</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2026/27</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Dividend allowance</td>
                      <td className="border border-gray-200 px-4 py-3">£500 @ 0%</td>
                      <td className="border border-gray-200 px-4 py-3">£500 @ 0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Basic rate</td>
                      <td className="border border-gray-200 px-4 py-3">8.75%</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">10.75%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Higher rate</td>
                      <td className="border border-gray-200 px-4 py-3">33.75%</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">35.75%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Additional rate</td>
                      <td className="border border-gray-200 px-4 py-3">39.35%</td>
                      <td className="border border-gray-200 px-4 py-3">39.35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                <p className="text-sm text-red-900">
                  <strong>Worked example:</strong> A higher-rate taxpayer receiving £10,000 of dividends now pays an extra £195 compared with 2025/26 (£9,500 taxable × 2pp). Ltd company directors taking £40,000 of dividends on top of a £12,570 salary see roughly £790 more tax. Model your own figures with our <Link href="/dividend-tax" className="text-red-700 hover:underline font-semibold">dividend tax calculator</Link> or read our <Link href="/blog/uk-dividend-tax-explained" className="text-red-700 hover:underline font-semibold">full dividend tax guide</Link>.
                </p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Statutory Sick Pay: A Major Overhaul</h2>
              <p className="text-gray-700 mb-4">
                2026/27 is the year SSP changes for real. Three reforms came into force on 6 April 2026 and, together, they give millions more workers access to sick pay.
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">1. Paid from day 1</h3>
                  <p className="text-green-800 text-sm">
                    The 3-day waiting period has been abolished. SSP now starts from your first qualifying day of sickness rather than the fourth. If you only need a day or two off, you still get paid.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">2. No Lower Earnings Limit</h3>
                  <p className="text-green-800 text-sm">
                    Previously you had to earn at least £125/week to qualify at all. That threshold has been scrapped — every employee qualifies for SSP regardless of how much they earn, so part-time and low-paid workers are finally covered.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                  <h3 className="font-semibold text-green-900 mb-2">3. New rate: 80% of earnings or £123.25/week</h3>
                  <p className="text-green-800 text-sm">
                    The weekly rate is now the lower of £123.25 or 80% of your average weekly earnings. Higher earners get the cap, while low earners get 80% of their normal pay. The old flat-rate £118.75 is gone.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                Work out what you'd receive with our <Link href="/sick-pay" className="text-blue-600 hover:text-blue-800 underline font-semibold">SSP calculator</Link>, which supports both the old and new rules so you can compare. For a deeper dive into the policy change, see our <Link href="/blog/ssp-changes-2026" className="text-blue-600 hover:text-blue-800 underline font-semibold">SSP Changes 2026 guide</Link>.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Statutory Payments</h2>
              <p className="text-gray-700 mb-4">
                Family-related statutory payments rose in line with annual upratings:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Statutory Maternity Pay (SMP):</strong> 90% of average weekly earnings for 6 weeks, then £194.32/week (up from £187.18) or 90% of earnings, whichever is lower, for up to 33 more weeks.</li>
                <li><strong>Statutory Paternity Pay, Shared Parental Pay, Adoption Pay, Parental Bereavement Pay:</strong> £194.32/week or 90% of earnings, whichever is lower.</li>
                <li><strong>Qualifying earnings threshold:</strong> £129/week (up from £125/week) for SMP/SPP/ShPP/SAP.</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm">
                Full details and eligibility in our <Link href="/blog/maternity-pay-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">Maternity Pay Guide</Link>, and run your numbers with the <Link href="/maternity-sick-pay" className="text-blue-600 hover:text-blue-800 underline font-semibold">SMP calculator</Link>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Loan Thresholds 2026/27</h2>
              <p className="text-gray-700 mb-4">
                Repayment thresholds for most plans rose in line with RPI, but the Plan 2 threshold is due to be frozen at its new level for three years from April 2027.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Plan</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2025/26</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2026/27</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Plan 1 (pre-2012 Eng/Wal/NI)</td>
                      <td className="border border-gray-200 px-4 py-3">£26,065</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£26,900</td>
                      <td className="border border-gray-200 px-4 py-3">9%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Plan 2 (2012-2023 Eng/Wal)</td>
                      <td className="border border-gray-200 px-4 py-3">£28,470</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£29,385</td>
                      <td className="border border-gray-200 px-4 py-3">9%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Plan 4 (Scotland)</td>
                      <td className="border border-gray-200 px-4 py-3">£32,745</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£33,795</td>
                      <td className="border border-gray-200 px-4 py-3">9%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Plan 5 (post-2023 Eng/Wal)</td>
                      <td className="border border-gray-200 px-4 py-3">£25,000</td>
                      <td className="border border-gray-200 px-4 py-3">£25,000</td>
                      <td className="border border-gray-200 px-4 py-3">9%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Postgraduate loan</td>
                      <td className="border border-gray-200 px-4 py-3">£21,000</td>
                      <td className="border border-gray-200 px-4 py-3">£21,000</td>
                      <td className="border border-gray-200 px-4 py-3">6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>Plan 5 repayments have started.</strong> If you took out an undergraduate loan in England or Wales for a course starting on or after 1 August 2023, you're on Plan 5, and repayments began from April 2026 once your income exceeds £25,000. For more detail see our <Link href="/blog/student-loan-repayment-guide" className="text-amber-900 hover:underline font-semibold">Student Loan Repayment Guide</Link>.
                </p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">National Living Wage: £12.71 from April 2026</h2>
              <p className="text-gray-700 mb-4">
                The National Living Wage for workers aged 21+ rose by 4.1% on 1 April 2026 — from £12.21 to £12.71 per hour. Younger workers and apprentices also got above-inflation rises.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Age band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">From April 2025</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">From April 2026</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">21 and over (NLW)</td>
                      <td className="border border-gray-200 px-4 py-3">£12.21</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">£12.71</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700">+4.1%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">18 – 20</td>
                      <td className="border border-gray-200 px-4 py-3">£10.00</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">£10.85</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700">+8.5%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">16 – 17 / Apprentice</td>
                      <td className="border border-gray-200 px-4 py-3">£7.55</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">£8.00</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700">+6.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                A full-time worker (37.5 hours/week) on the new NLW earns around £24,785/year. See our dedicated <Link href="/blog/uk-minimum-wage-2026-27" className="text-blue-600 hover:text-blue-800 underline font-semibold">UK Minimum Wage 2026/27 guide</Link> for take-home breakdowns at every age band.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Fiscal Drag: The Stealth Tax Rise Continues</h2>
              <p className="text-gray-700 mb-4">
                With rUK thresholds now frozen until April 2031, the real-terms tax burden continues to climb each year. Every pay rise that keeps up with inflation now pushes a larger slice of your income into the next band.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-3">Example: a £48,000 earner in 2025/26</h3>
                <ul className="list-disc list-inside text-amber-800 space-y-2 text-sm">
                  <li>A 4% pay rise in April 2026 lifts them to £49,920 — still basic rate, no extra tax band.</li>
                  <li>Another 4% rise in April 2027 pushes them to £51,917 — now £1,647 of their income is taxed at 40% instead of 20%, costing an extra £329/year purely because the threshold didn't move.</li>
                  <li>If the freeze had ended in 2028 as originally planned, that extra tax would have been refunded via a higher threshold. Now it's baked in until 2031.</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                The OBR estimates the extended freeze will create around 1 million new higher-rate taxpayers by 2030/31 on top of those already affected. To model exactly how a pay rise affects you, try the <Link href="/pay-rise" className="text-blue-600 hover:text-blue-800 underline font-semibold">pay rise calculator</Link>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Planning Tips for 2026/27</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Max out your pension</h3>
                    <p className="text-gray-600 text-sm">
                      The annual allowance is still £60,000 (tapered above £260,000 adjusted income). Pension contributions cut your taxable income and are especially powerful for anyone near the £100k Personal Allowance taper. See our <Link href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">pension tax relief guide</Link>.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Use salary sacrifice while you can</h3>
                    <p className="text-gray-600 text-sm">
                      Salary sacrifice still saves both income tax and NI in 2026/27, though <Link href="/blog/salary-sacrifice-changes-2029" className="text-blue-600 hover:text-blue-800 underline font-semibold">changes from April 2029</Link> will cap the NI exemption at £2,000/year of pension contributions. Front-loading makes sense if you can afford it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏦</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Use your £20,000 ISA allowance</h3>
                    <p className="text-gray-600 text-sm">
                      The total ISA allowance is unchanged at £20,000. Note the <Link href="/blog/cash-isa-limit-2027" className="text-blue-600 hover:text-blue-800 underline font-semibold">£12,000 cash ISA limit</Link> takes effect from April 2027, so this is the last full tax year to put the entire £20,000 into a cash ISA if you're under 65.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💼</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Review your dividend strategy</h3>
                    <p className="text-gray-600 text-sm">
                      If you run a limited company, the 2pp dividend rate rise changes the salary-versus-dividend calculation. A slightly higher director's salary can now be more tax-efficient. Model both scenarios before the year-end.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👫</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Marriage Allowance</h3>
                    <p className="text-gray-600 text-sm">
                      If one of you earns below £12,570 and the other is a basic-rate taxpayer, transferring £1,260 of Personal Allowance saves up to £252/year. Claim backdated up to 4 years.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your 2026/27 Take-Home Pay</h2>
              <p className="text-gray-700 mb-6">
                See exactly how these changes hit your payslip with our free, private UK tax calculator — updated the moment the new rates took effect.
              </p>
              <Link
                href="/take-home-pay-calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Try the Calculator →
              </Link>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">When does the 2026/27 tax year start?</h3>
                  <p className="text-gray-600">The UK tax year runs from 6 April 2026 to 5 April 2027.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Has the Personal Allowance changed?</h3>
                  <p className="text-gray-600">
                    No. It stays at £12,570 and is now frozen until April 2031 — the Autumn Budget 2025 extended the existing freeze by a further three years. The higher-rate and additional-rate thresholds are also frozen until 2031.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What changed for Scottish taxpayers?</h3>
                  <p className="text-gray-600">
                    The Starter and Basic rate band limits were extended (to £16,537 and £29,526 respectively), giving most Scottish taxpayers a small cut compared with 2025/26. Rates are unchanged and the Higher, Advanced and Top thresholds remain frozen.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How much more will I pay in dividend tax?</h3>
                  <p className="text-gray-600">
                    A basic-rate shareholder pays an extra 2p in every £1 of dividends above the £500 allowance. A higher-rate shareholder pays the same 2pp increase. Additional-rate taxpayers are unaffected.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">When did the new SSP rules start?</h3>
                  <p className="text-gray-600">
                    6 April 2026 — the start of the 2026/27 tax year. Paid from day 1, no Lower Earnings Limit, and the new rate is the lower of £123.25/week or 80% of average weekly earnings.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Are there still changes coming later?</h3>
                  <p className="text-gray-600">
                    Yes. The <Link href="/blog/cash-isa-limit-2027" className="text-blue-600 hover:text-blue-800 underline font-semibold">£12,000 cash ISA limit</Link> kicks in from April 2027 for under-65s. The <Link href="/blog/salary-sacrifice-changes-2029" className="text-blue-600 hover:text-blue-800 underline font-semibold">£2,000 salary sacrifice NI cap</Link> starts from April 2029.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Staying Up to Date</h2>
              <p className="text-gray-700 mb-4">
                All calculators on this site have been updated to reflect the 2026/27 rates. Historical years back to 2021/22 are still supported via the tax-year selector so you can check old payslips. Bookmark this page for a quick reference.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for general information only and is not financial or tax advice. Rates and rules can change mid-year. Always refer to <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">GOV.UK</a> or a qualified adviser for decisions that depend on accuracy. Information accurate as of April 2026.
              </p>
            </div>
          </div>

          <RelatedArticles articles={[
            { href: "/blog/uk-tax-changes-2025-26", title: "UK Tax Changes 2025/26", category: "Tax Updates", description: "Last year's tax rates for comparison." },
            { href: "/blog/uk-minimum-wage-2026-27", title: "UK Minimum Wage 2026/27", category: "Salary Guide", description: "New NLW rates and take-home pay at every age band." },
            { href: "/blog/100k-tax-trap", title: "The £100k Tax Trap", category: "Tax Planning", description: "How frozen thresholds create a 60% marginal rate." },
            { href: "/blog/ssp-changes-2026", title: "SSP Changes 2026", category: "Tax Updates", description: "The full detail on the sick pay overhaul." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
