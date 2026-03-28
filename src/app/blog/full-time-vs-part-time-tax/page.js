import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Full-Time vs Part-Time Tax: How Working Hours Affect Your Take-Home Pay in 2025/26",
  description: "Do part-time workers pay less tax? See exactly how UK income tax, National Insurance, and benefits differ between full-time and part-time workers in 2025/26.",
  keywords: "full time vs part time tax, part time tax UK, do part time workers pay less tax, part time national insurance, part time take home pay, working hours tax 2025/26",
  openGraph: {
    title: "Full-Time vs Part-Time Tax: How Working Hours Affect Your Take-Home Pay",
    description: "UK tax rates are the same for everyone, but working fewer hours usually means lower earnings and lower tax bands. Here's how it works.",
    type: "article",
    publishedTime: "2026-03-28T00:00:00.000Z",
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
    title: "Full-Time vs Part-Time Tax: How Working Hours Affect Your Pay",
    description: "UK tax rates are the same for everyone. But working fewer hours means lower earnings and lower tax bands.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/full-time-vs-part-time-tax",
  },
};

export default function FullTimeVsPartTimeTax() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Full-Time vs Part-Time Tax: How Working Hours Affect Your Take-Home Pay in 2025/26",
        "description": "Do part-time workers pay less tax? See exactly how UK income tax, National Insurance, and benefits differ between full-time and part-time workers in 2025/26.",
        "datePublished": "2026-03-28T00:00:00.000Z",
        "dateModified": "2026-03-28T00:00:00.000Z",
        "author": {
          "@type": "Organization",
          "name": "SalaryTakeHome"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SalaryTakeHome",
          "url": "https://www.salarytakehome.co.uk"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.salarytakehome.co.uk/blog/full-time-vs-part-time-tax"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do part-time workers pay less income tax than full-time workers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Part-time workers pay the same tax rates as full-time workers. However, because part-time earnings are usually lower, more of the income falls within the tax-free personal allowance (£12,570) and the basic rate band. This means part-time workers often have a lower effective tax rate."
            }
          },
          {
            "@type": "Question",
            "name": "Do I still get the full personal allowance if I work part-time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every UK taxpayer receives the full £12,570 personal allowance regardless of how many hours they work. If your part-time earnings are below £12,570 per year, you pay no income tax at all."
            }
          },
          {
            "@type": "Question",
            "name": "Do part-time workers pay National Insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Part-time workers only pay National Insurance if they earn above the primary threshold of £12,570 per year (£242 per week). If your part-time earnings fall below this threshold, you won't pay any NI contributions, though you may want to check whether you're building up qualifying years for State Pension."
            }
          },
          {
            "@type": "Question",
            "name": "Will I lose money by going from full-time to part-time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your total earnings will be lower, but your take-home pay per hour may actually increase. This is because a larger proportion of your reduced salary falls within the tax-free allowance and lower tax bands. For higher earners, dropping from the 40% band to the 20% band means each pound of lost salary only reduces take-home pay by 60p-68p."
            }
          },
          {
            "@type": "Question",
            "name": "Are part-time workers entitled to holiday and pension?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Part-time workers receive 5.6 weeks of paid holiday per year, pro-rated to their working pattern. For pension auto-enrolment, you must earn at least £10,000 per year to qualify. Part-time workers above this threshold receive the same employer contribution rates as full-time colleagues."
            }
          }
        ]
      }
    ]
  };

  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Full-Time vs Part-Time Tax" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-medium rounded-full">
                Tax Planning
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-03-28">
                March 28, 2026
              </time>
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Full-Time vs Part-Time Tax: How Working Hours Affect Your Take-Home Pay in 2025/26
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Thinking about going part-time? UK tax rates are the same whether you work 40 hours a week or 16 &mdash; but working fewer hours usually means lower total earnings and a smaller tax bill. Here&apos;s exactly how it works.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* Quick Summary */}
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 mb-8 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">Same Rates</div>
                  <div className="text-white/90 text-sm">Tax bands are identical for all workers</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">&pound;12,570</div>
                  <div className="text-white/90 text-sm">Full personal allowance regardless of hours</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-3xl font-bold mb-1">Lower Bands</div>
                  <div className="text-white/90 text-sm">Fewer hours = lower earnings = less tax</div>
                </div>
              </div>
            </div>

            {/* Do Part-Time Workers Pay Less Tax? */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Part-Time Workers Pay Less Tax?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In the UK, income tax is based on your <strong>total annual earnings</strong>, not the number of hours you work. The same tax bands and rates apply to everyone, whether you work full-time or part-time. See the current rates on <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a>.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                However, because part-time workers typically earn less in total, their income sits in lower tax bands. A larger proportion of their salary is covered by the &pound;12,570 personal allowance, and they&apos;re less likely to reach the 40% higher rate threshold at &pound;50,270.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tax Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Annual Income</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Personal Allowance</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                      <td className="border border-gray-200 px-4 py-3">Up to &pound;12,570</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Basic rate</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">20%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;12,571 &ndash; &pound;50,270</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Higher rate</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">40%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;50,271 &ndash; &pound;125,140</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Additional rate</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                      <td className="border border-gray-200 px-4 py-3">Over &pound;125,140</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                <p className="text-sm text-purple-800">
                  <strong>Key point:</strong> There is no special &quot;part-time tax rate&quot; in the UK. Everyone uses the same bands. The difference is simply that lower earnings means less of your income reaches the higher bands.
                </p>
              </div>
            </div>

            {/* Worked Example */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Worked Example: Full-Time vs Part-Time at &pound;15/Hour</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Let&apos;s compare two workers earning the same hourly rate of &pound;15/hour &mdash; one working full-time (37.5 hours/week) and one working part-time (20 hours/week). Both work 52 weeks per year.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold"></th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Full-Time (37.5h/wk)</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Part-Time (20h/wk)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Gross annual salary</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;29,250</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;15,600</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Personal allowance used</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;12,570</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;12,570</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Taxable income</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;16,680</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;3,030</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Income tax (20%)</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">&pound;3,336</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&pound;606</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">NI (8% above &pound;12,570)</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">&pound;1,334</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&pound;242</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Total deductions</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">&pound;4,670</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&pound;848</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Annual take-home pay</td>
                      <td className="border border-gray-200 px-4 py-3 font-bold text-gray-900">&pound;24,580</td>
                      <td className="border border-gray-200 px-4 py-3 font-bold text-gray-900">&pound;14,752</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Effective tax rate</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-blue-700">16.0%</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-blue-700">5.4%</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Take-home per hour</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-blue-700">&pound;12.60</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold text-blue-700">&pound;14.18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Notice:</strong> The part-time worker takes home &pound;14.18 per hour compared to &pound;12.60 for the full-time worker &mdash; that&apos;s &pound;1.58 more per hour in the pocket, because a much larger share of earnings falls within the tax-free allowance.
                </p>
              </div>
            </div>

            {/* The Tax-Free Allowance Advantage */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Tax-Free Allowance Advantage</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Every UK worker gets the same &pound;12,570 personal allowance, regardless of whether they work 40 hours a week or 10. This is the single biggest reason why part-time workers often have a lower effective tax rate.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                If you earn less than &pound;12,570 per year, you pay <strong>zero income tax</strong>. At the 2025/26 National Living Wage of &pound;12.21/hour, you could work up to approximately <strong>19.8 hours per week</strong> before paying any income tax at all.
              </p>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;10,000/yr</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      &pound;0 tax
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Below the personal allowance. No income tax, no NI.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;15,000/yr</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      &pound;486 tax
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Only &pound;2,430 is taxable. Effective tax rate just 3.2%.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;20,000/yr</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full">
                      &pound;1,486 tax
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Still entirely in the basic rate band. Effective rate 7.4%.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;30,000/yr</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-semibold rounded-full">
                      &pound;3,486 tax
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    All taxable income still within the basic rate. Effective rate 11.6%.
                  </p>
                </div>
              </div>
            </div>

            {/* National Insurance Thresholds */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">National Insurance: The Part-Time Threshold</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                National Insurance works similarly to income tax &mdash; you only pay it on earnings above the primary threshold of <strong>&pound;12,570 per year</strong> (&pound;242 per week). The rate is 8% on earnings between &pound;12,570 and &pound;50,270, then 2% above that.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Many part-time workers earn below this threshold and pay no NI at all. However, it&apos;s important to be aware that NI contributions build up your entitlement to State Pension and certain benefits. If you earn between &pound;6,396 and &pound;12,570, you get NI credits automatically (known as the Lower Earnings Limit), protecting your State Pension record without actually paying anything.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Weekly Earnings</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Annual Equivalent</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">NI Due</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">State Pension?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Under &pound;123/wk</td>
                      <td className="border border-gray-200 px-4 py-3">Under &pound;6,396</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&pound;0</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600">No qualifying year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">&pound;123 &ndash; &pound;242/wk</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;6,396 &ndash; &pound;12,570</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">&pound;0</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600">Yes (NI credit)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Over &pound;242/wk</td>
                      <td className="border border-gray-200 px-4 py-3">Over &pound;12,570</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">8% on excess</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600">Yes (contributions)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">Watch out if you have two part-time jobs</h3>
                <p className="text-amber-700 text-sm">
                  NI is calculated per job, not on combined earnings. You could earn &pound;12,000 from each of two jobs (&pound;24,000 total) and pay no NI on either, while someone earning &pound;24,000 from one job pays &pound;914 in NI. Read more in our <Link href="/blog/two-jobs-tax-explained" className="text-amber-800 hover:text-amber-900 underline font-semibold">two jobs tax guide</Link>.
                </p>
              </div>
            </div>

            {/* Pro-Rata Benefits */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro-Rata Benefits: Holiday, Pension & Statutory Pay</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Part-time workers have the same employment rights as full-time workers under the <a href="https://www.gov.uk/part-time-worker-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Part-Time Workers Regulations</a>. Many benefits are calculated on a pro-rata basis.
              </p>

              <div className="grid lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Holiday Entitlement</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    The statutory minimum is <strong>5.6 weeks</strong> per year, pro-rated to your working pattern. Working 3 days a week gives you 16.8 days of holiday (3 &times; 5.6).
                  </p>
                  <p className="text-gray-600 text-sm">Full-time (5 days): 28 days &bull; 4 days: 22.4 days &bull; 3 days: 16.8 days</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Pension Auto-Enrolment</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    You must earn at least <strong>&pound;10,000 per year</strong> to be automatically enrolled in a workplace pension. Below this, you can still opt in.
                  </p>
                  <p className="text-gray-600 text-sm">At &pound;12.21/hr, that&apos;s roughly 15.7 hours/week to qualify.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Statutory Sick Pay (SSP)</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    To qualify for SSP, you must earn at least <strong>&pound;123 per week</strong> on average. Part-time workers below this threshold are not eligible for SSP.
                  </p>
                  <p className="text-gray-600 text-sm">Read more in our <Link href="/blog/ssp-changes-2026" className="text-blue-600 hover:text-blue-800 underline font-semibold">SSP changes guide</Link>.</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Statutory Maternity Pay</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    SMP eligibility also requires average weekly earnings of at least <strong>&pound;123</strong>. The 90% of average earnings calculation is based on your actual part-time pay.
                  </p>
                  <p className="text-gray-600 text-sm">See our <Link href="/blog/maternity-pay-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">maternity pay guide</Link> for details.</p>
                </div>
              </div>
            </div>

            {/* Common Misconceptions */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Misconceptions About Part-Time Tax</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">&quot;I&apos;ll lose money by going part-time&quot;</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Your total income will drop, but your <strong>take-home pay per hour</strong> often increases. If you currently earn &pound;55,000 full-time and drop to 3 days (&pound;33,000 pro-rata), you lose &pound;22,000 gross but only around &pound;13,200 net. That&apos;s because the lost income was taxed at your <strong>marginal rate</strong> of 40% income tax plus 2% NI &mdash; meaning you only kept 58p of every pound in that bracket.
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">&quot;Part-time workers get taxed at a higher rate&quot;</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    This myth may come from confusion about emergency tax codes or incorrect tax codes when starting a new part-time job. If your employer uses a BR (basic rate) code rather than 1257L, you&apos;ll pay 20% on all earnings with no personal allowance. Always check your tax code is correct.
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">&quot;My personal allowance is reduced because I work part-time&quot;</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The &pound;12,570 personal allowance is the same for everyone regardless of hours worked. It only reduces if you earn over &pound;100,000 (the <Link href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">&pound;100k tax trap</Link>), which is unlikely for most part-time workers.
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="font-semibold text-gray-800 mb-2">&quot;I&apos;ll be worse off because of lost benefits&quot;</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    In many cases, lower earnings from part-time work can actually <em>increase</em> your eligibility for Universal Credit, Tax-Free Childcare, and other income-based benefits. The taper rate on UC means you keep 45p of every pound earned after the work allowance.
                  </p>
                </div>
              </div>
            </div>

            {/* When Going Part-Time Makes Financial Sense */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">When Going Part-Time Makes Financial Sense</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The financial case for part-time work is strongest when you factor in the <strong>real cost</strong> of working those extra hours. Here are the most common scenarios:
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Childcare costs exceed marginal earnings</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Nursery fees average &pound;1,000&ndash;&pound;1,400 per month for full-time care. If your marginal take-home rate is 58% (higher rate taxpayer) and you earn &pound;2,500 gross for your 4th and 5th working days, you keep only &pound;1,450. After childcare for those two days (&pound;400&ndash;&pound;560), the net gain can be as little as &pound;890 per month.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Dropping out of the higher rate band</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If your full-time salary is between &pound;50,271 and &pound;65,000, going to 4 days could bring your pro-rata salary under &pound;50,270 &mdash; keeping all your income within the 20% basic rate and 8% NI. That&apos;s a combined marginal rate of 28% instead of 42%.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Universal Credit and Tax Credits interaction</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    If you receive Universal Credit, the taper rate is 55% on net earnings above your work allowance. Combined with tax and NI, your effective marginal rate on extra hours can exceed 70%. In these cases, working fewer hours may cost you very little in actual take-home pay.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Commuting and work-related costs</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A &pound;200/month train season ticket spread over 5 working days costs &pound;9.23 per day. If you only work 3 days, your daily commuting cost drops to &pound;5.54 (buying daily tickets) or less. Factor in meals, parking, and clothing, and the true cost of each working day can be significant.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-br from-purple-50 to-violet-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Part-Time Take-Home Pay</h2>
              <p className="text-gray-700 mb-6">
                Use our free calculators to see exactly how going part-time would affect your take-home pay, or convert your salary to an hourly rate to compare working patterns.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/pro-rata-furlough"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-violet-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Pro-Rata Calculator &rarr;
                </Link>
                <Link
                  href="/hourly-wage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border border-purple-200 hover:bg-purple-50 transition-all duration-200"
                >
                  Hourly Wage Calculator &rarr;
                </Link>
                <Link
                  href="/take-home-pay-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg border border-purple-200 hover:bg-purple-50 transition-all duration-200"
                >
                  Take-Home Pay Calculator &rarr;
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="glass-light rounded-2xl p-8 bg-gray-50">
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for informational purposes only and should not be considered financial advice.
                Always consult with a qualified tax professional for personalised guidance. Tax rates and thresholds are for the 2025/26 tax year and are subject to change. Information accurate as of March 2026.
              </p>
            </div>

          </div>

          <RelatedArticles articles={[
            { href: "/blog/pro-rata-salary-explained", title: "Pro-Rata Salary Explained", category: "Salary Guide", description: "Complete guide to how pro-rata pay, holiday, and pension work in the UK." },
            { href: "/blog/two-jobs-tax-explained", title: "Two Jobs Tax Explained", category: "Tax Planning", description: "How tax and NI work when you have multiple employments." },
            { href: "/blog/uk-minimum-wage-2025-26", title: "UK Minimum Wage 2025/26", category: "Salary Guide", description: "Current minimum and living wage rates for all age groups." },
            { href: "/blog/how-to-compare-job-offers", title: "How to Compare Job Offers", category: "Salary Guide", description: "Look beyond the headline salary to compare total compensation." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
