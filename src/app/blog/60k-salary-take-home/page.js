import React from "react";
import Link from "next/link";

export const metadata = {
  title: "£60,000 Salary Take-Home Pay 2025/26 | After Tax Calculator",
  description: "Find out exactly how much you take home from a £60,000 salary in 2025/26. Full breakdown of income tax at basic and higher rates, National Insurance, and monthly take-home pay.",
  keywords: "60000 salary, 60k salary, take home pay 60000, 60k after tax, salary calculator 60000, higher rate tax",
  openGraph: {
    title: "£60,000 Salary Take-Home Pay 2025/26",
    description: "Complete breakdown of take-home pay on a £60k salary including basic and higher rate tax deductions.",
    type: "article",
    publishedTime: "2026-01-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "£60,000 Salary Take-Home Pay 2025/26",
    description: "How much do you take home from a £60k salary? Full breakdown including higher rate tax.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/60k-salary-take-home",
  },
};

export default function Salary60k() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            &larr; Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium rounded-full">
              Salary Guide
            </span>
            <time className="text-gray-500 text-sm" dateTime="2026-01-27">
              January 27, 2026
            </time>
            <span className="text-gray-500 text-sm">6 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            £60,000 Salary Take-Home Pay in 2025/26
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete breakdown of what you&apos;ll actually receive from a £60k salary, including higher rate tax calculations
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: £60,000 Salary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Annual Take-Home</p>
              <p className="text-3xl font-bold">£45,358</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-3xl font-bold">£3,780</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Weekly Take-Home</p>
              <p className="text-3xl font-bold">£872</p>
            </div>
          </div>
        </div>

        {/* Higher Rate Alert */}
        <div className="bg-amber-50 rounded-2xl p-6 mb-8 border border-amber-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-xl">!</span>
            </div>
            <div>
              <h3 className="font-bold text-amber-900 mb-1">You&apos;re a Higher Rate Taxpayer</h3>
              <p className="text-amber-800 text-sm">At £60,000, part of your income is taxed at 40%. Understanding how this works can help you plan effectively.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Congratulations—at £60,000 you&apos;re in the top 15% of UK earners. But crossing the higher rate threshold means part of your income faces 40% tax. Let&apos;s break down exactly what you&apos;ll take home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After income tax and National Insurance, you&apos;ll take home approximately <strong>£45,358 per year</strong>, or <strong>£3,780 per month</strong>. That means you&apos;re keeping about 75.6% of your gross salary.
            </p>
          </div>

          {/* Full Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Tax Breakdown for £60,000</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-gray-600 font-semibold">Description</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Annual</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Gross Salary</td>
                    <td className="py-3 text-gray-900 text-right">£60,000</td>
                    <td className="py-3 text-gray-900 text-right">£5,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Personal Allowance</td>
                    <td className="py-3 text-gray-700 text-right">£12,570</td>
                    <td className="py-3 text-gray-700 text-right">£1,048</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Taxable Income</td>
                    <td className="py-3 text-gray-700 text-right">£47,430</td>
                    <td className="py-3 text-gray-700 text-right">£3,953</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-red-700">Income Tax (Basic Rate 20%)</td>
                    <td className="py-3 text-red-700 text-right">-£7,540</td>
                    <td className="py-3 text-red-700 text-right">-£628</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-100">
                    <td className="py-3 text-red-800">Income Tax (Higher Rate 40%)</td>
                    <td className="py-3 text-red-800 text-right">-£3,892</td>
                    <td className="py-3 text-red-800 text-right">-£324</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (8%)</td>
                    <td className="py-3 text-orange-700 text-right">-£3,016</td>
                    <td className="py-3 text-orange-700 text-right">-£251</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (2% above threshold)</td>
                    <td className="py-3 text-orange-700 text-right">-£195</td>
                    <td className="py-3 text-orange-700 text-right">-£16</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 text-green-700 font-bold">Take-Home Pay</td>
                    <td className="py-3 text-green-700 font-bold text-right">£45,358</td>
                    <td className="py-3 text-green-700 font-bold text-right">£3,780</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How Tax is Calculated */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Your Tax is Calculated</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">Step 1: Personal Allowance</h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  The first £12,570 of your income is tax-free. This is your Personal Allowance for 2025/26.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-3">Step 2: Basic Rate Income Tax (20%)</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-2">
                  Income from £12,571 to £50,270 is taxed at 20%.
                </p>
                <p className="text-amber-700 text-sm">
                  £50,270 - £12,570 = £37,700<br />
                  £37,700 × 20% = <strong>£7,540 basic rate tax</strong>
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">Step 3: Higher Rate Income Tax (40%)</h3>
                <p className="text-red-700 text-sm leading-relaxed mb-2">
                  Income above £50,270 is taxed at 40%.
                </p>
                <p className="text-red-700 text-sm">
                  £60,000 - £50,270 = £9,730<br />
                  £9,730 × 40% = <strong>£3,892 higher rate tax</strong>
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">Step 4: National Insurance</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  NI is 8% up to £50,270, then 2% above that.
                </p>
                <p className="text-orange-700 text-sm">
                  £37,700 × 8% = £3,016<br />
                  £9,730 × 2% = £195<br />
                  <strong>Total NI: £3,211</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Tax Band Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Income by Tax Band</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600">Tax-Free</div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                  <div className="bg-green-500 h-8 rounded-full" style={{width: '21%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£12,570 (21%)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600">Basic (20%)</div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                  <div className="bg-amber-500 h-8 rounded-full" style={{width: '63%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£37,700 (63%)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600">Higher (40%)</div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                  <div className="bg-red-500 h-8 rounded-full" style={{width: '16%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£9,730 (16%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Child Benefit Warning */}
          <div className="bg-red-50 rounded-2xl p-8 mb-8 border border-red-200">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Child Benefit Warning</h2>
            <p className="text-red-800 leading-relaxed mb-4">
              At £60,000, you&apos;re subject to the <strong>High Income Child Benefit Charge (HICBC)</strong>. If you or your partner claim child benefit:
            </p>
            <ul className="text-red-800 space-y-2 mb-4">
              <li>• You lose 1% of your child benefit for every £200 earned between £60,000 and £80,000</li>
              <li>• At exactly £60,000, you&apos;re at the threshold—no clawback yet</li>
              <li>• But any pay rise will trigger the charge</li>
            </ul>
            <div className="bg-red-100 rounded-xl p-4">
              <p className="text-red-900 text-sm">
                <strong>Example:</strong> With 2 children, child benefit is worth about £2,212/year. A £5,000 pay rise would trigger a £553 clawback.
              </p>
            </div>
          </div>

          {/* With Student Loan */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">£60k with Student Loan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have a student loan, your take-home pay will be lower. Here&apos;s how much you&apos;d repay on each plan:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 1 (Pre-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £26,065</p>
                <p className="text-purple-700 text-sm">Annual repayment: £3,054</p>
                <p className="text-purple-900 font-semibold">Take-home: £42,304/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2 (Post-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £28,470</p>
                <p className="text-purple-700 text-sm">Annual repayment: £2,838</p>
                <p className="text-purple-900 font-semibold">Take-home: £42,520/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 4 (Scotland)</h3>
                <p className="text-purple-700 text-sm">Threshold: £31,395</p>
                <p className="text-purple-700 text-sm">Annual repayment: £2,574</p>
                <p className="text-purple-900 font-semibold">Take-home: £42,784/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 5 (Post-2023)</h3>
                <p className="text-purple-700 text-sm">Threshold: £25,000</p>
                <p className="text-purple-700 text-sm">Annual repayment: £3,150</p>
                <p className="text-purple-900 font-semibold">Take-home: £42,208/year</p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does £60k Compare?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £60,000, you&apos;re earning:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>In the top 15% of UK earners</strong></li>
              <li>• More than double the UK median salary</li>
              <li>• An effective tax rate of 24.4%</li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Salary Comparisons</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-600">£55,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£42,420/year</p>
                </div>
                <div>
                  <p className="text-blue-600">£70,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£51,128/year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Planning Tips for £60k Earners</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Pension contributions = 40% tax relief</h3>
                  <p className="text-gray-600 text-sm">As a higher rate taxpayer, you get 40% tax relief on pension contributions. Every £100 you put in only costs you £60 net.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Claim your full tax relief</h3>
                  <p className="text-gray-600 text-sm">If you contribute to a workplace pension via relief-at-source, you need to claim the extra 20% through your tax return.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Consider salary sacrifice</h3>
                  <p className="text-gray-600 text-sm">Sacrificing salary for pension saves you NI too. At this level, that&apos;s an extra 2% on top of 40% tax relief.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Watch the child benefit trap</h3>
                  <p className="text-gray-600 text-sm">If you have children, any income above £60k triggers child benefit clawback. Consider pension contributions to stay below the threshold.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Exact Take-Home Pay</h2>
            <p className="text-blue-100 mb-6">
              Get a personalised breakdown including pension, student loans, and more.
            </p>
            <Link
              href="/take-home-pay-calculator"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Try Take Home Pay Calculator &rarr;
            </Link>
          </div>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.salarytakehome.co.uk"},
                  {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.salarytakehome.co.uk/blog"},
                  {"@type": "ListItem", "position": 3, "name": "£60,000 Salary Take-Home Pay"}
                ]
              },
              {
                "@type": "Article",
                "headline": "£60,000 Salary Take-Home Pay in 2025/26",
                "description": "Complete breakdown of what you'll actually receive from a £60k salary after income tax and National Insurance, including higher rate tax calculations.",
                "datePublished": "2026-01-27T00:00:00.000Z",
                "dateModified": "2026-01-27T00:00:00.000Z",
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
                  "@id": "https://www.salarytakehome.co.uk/blog/60k-salary-take-home"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much is £60,000 after tax in the UK?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On a £60,000 salary in 2025/26, you'll take home approximately £45,358 per year or £3,780 per month after income tax and National Insurance deductions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Am I a higher rate taxpayer on £60k?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. At £60,000, you pay 40% tax on £9,730 of your income (the amount above the £50,270 threshold). The rest is taxed at 20%."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I lose child benefit on £60k salary?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, at £60,000 you lose 100% of child benefit through the High Income Child Benefit Charge. Consider pension contributions to reduce your adjusted net income below £60k."
                    }
                  }
                ]
              }
            ]
          })
        }} />
      </article>
    </div>
  );
}
