import React from "react";
import Link from "next/link";

export const metadata = {
  title: "£50,000 Salary Take-Home Pay 2025/26 | After Tax Calculator",
  description: "Find out exactly how much you take home from a £50,000 salary in 2025/26. Full breakdown of income tax, National Insurance, and monthly take-home pay.",
  keywords: "50000 salary, 50k salary, take home pay 50000, 50k after tax, salary calculator 50000",
  openGraph: {
    title: "£50,000 Salary Take-Home Pay 2025/26",
    description: "Complete breakdown of take-home pay on a £50k salary including tax and NI deductions.",
    type: "article",
    publishedTime: "2026-01-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "£50,000 Salary Take-Home Pay 2025/26",
    description: "How much do you take home from a £50k salary? Full breakdown inside.",
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/blog/50k-salary-take-home",
  },
};

export default function Salary50k() {
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
            <span className="text-gray-500 text-sm">5 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            £50,000 Salary Take-Home Pay in 2025/26
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete breakdown of what you&apos;ll actually receive from a £50k salary after income tax and National Insurance
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: £50,000 Salary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Annual Take-Home</p>
              <p className="text-3xl font-bold">£39,520</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-3xl font-bold">£3,293</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Weekly Take-Home</p>
              <p className="text-3xl font-bold">£760</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              A £50,000 salary is a significant milestone—you&apos;re in the top 25% of UK earners. It&apos;s also right at the edge of the basic rate tax band, which has important implications for any future pay rises.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After income tax and National Insurance, you&apos;ll take home approximately <strong>£39,520 per year</strong>, or <strong>£3,293 per month</strong>. That means you&apos;re keeping about 79% of your gross salary.
            </p>
          </div>

          {/* Full Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Tax Breakdown for £50,000</h2>

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
                    <td className="py-3 text-gray-900 text-right">£50,000</td>
                    <td className="py-3 text-gray-900 text-right">£4,167</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Personal Allowance</td>
                    <td className="py-3 text-gray-700 text-right">£12,570</td>
                    <td className="py-3 text-gray-700 text-right">£1,048</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Taxable Income</td>
                    <td className="py-3 text-gray-700 text-right">£37,430</td>
                    <td className="py-3 text-gray-700 text-right">£3,119</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-red-700">Income Tax (20%)</td>
                    <td className="py-3 text-red-700 text-right">-£7,486</td>
                    <td className="py-3 text-red-700 text-right">-£624</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (8%)</td>
                    <td className="py-3 text-orange-700 text-right">-£2,994</td>
                    <td className="py-3 text-orange-700 text-right">-£250</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 text-green-700 font-bold">Take-Home Pay</td>
                    <td className="py-3 text-green-700 font-bold text-right">£39,520</td>
                    <td className="py-3 text-green-700 font-bold text-right">£3,293</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tax Band Warning */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">Important: You&apos;re at the Higher Rate Threshold</h2>
            <p className="text-amber-800 leading-relaxed mb-4">
              At £50,000, you&apos;re just £270 below the higher rate threshold (£50,270). This is a critical point in the UK tax system:
            </p>
            <ul className="text-amber-800 space-y-2">
              <li>• Any income above £50,270 is taxed at <strong>40%</strong> instead of 20%</li>
              <li>• National Insurance drops to <strong>2%</strong> above this threshold</li>
              <li>• Your marginal rate jumps from 28% to 42% on the next pound earned</li>
            </ul>
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
                <h3 className="font-semibold text-amber-800 mb-3">Step 2: Income Tax</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-2">
                  All your taxable income falls in the basic rate band (20%).
                </p>
                <p className="text-amber-700 text-sm">
                  £50,000 - £12,570 = £37,430 taxable<br />
                  £37,430 × 20% = <strong>£7,486 income tax</strong>
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">Step 3: National Insurance</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  You pay 8% National Insurance on earnings between £12,570 and £50,270.
                </p>
                <p className="text-orange-700 text-sm">
                  £37,430 × 8% = <strong>£2,994 National Insurance</strong>
                </p>
              </div>
            </div>
          </div>

          {/* With Student Loan */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">£50k with Student Loan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have a student loan, your take-home pay will be lower. Here&apos;s how much you&apos;d repay on each plan:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 1 (Pre-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £26,065</p>
                <p className="text-purple-700 text-sm">Annual repayment: £2,154</p>
                <p className="text-purple-900 font-semibold">Take-home: £37,366/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2 (Post-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £28,470</p>
                <p className="text-purple-700 text-sm">Annual repayment: £1,938</p>
                <p className="text-purple-900 font-semibold">Take-home: £37,582/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 4 (Scotland)</h3>
                <p className="text-purple-700 text-sm">Threshold: £31,395</p>
                <p className="text-purple-700 text-sm">Annual repayment: £1,674</p>
                <p className="text-purple-900 font-semibold">Take-home: £37,846/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 5 (Post-2023)</h3>
                <p className="text-purple-700 text-sm">Threshold: £25,000</p>
                <p className="text-purple-700 text-sm">Annual repayment: £2,250</p>
                <p className="text-purple-900 font-semibold">Take-home: £37,270/year</p>
              </div>
            </div>
          </div>

          {/* Pay Rise Impact */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Would a Pay Rise Get You?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £50k, you&apos;re at a tax cliff edge. Here&apos;s what pay rises actually net you:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <p className="text-amber-700 text-sm">£5,000 pay rise (to £55k)</p>
                <p className="text-amber-900 font-semibold">Extra £2,900/year in your pocket</p>
                <p className="text-amber-600 text-xs">58% effective rate on the rise</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <p className="text-amber-700 text-sm">£10,000 pay rise (to £60k)</p>
                <p className="text-amber-900 font-semibold">Extra £5,838/year in your pocket</p>
                <p className="text-amber-600 text-xs">58% effective rate on the rise</p>
              </div>
            </div>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200 mt-4">
              <p className="text-red-800 text-sm leading-relaxed">
                <strong>Important:</strong> Once you cross £50,270, every extra £1 costs you 42p in tax and NI (40% tax + 2% NI), compared to 28p below the threshold.
              </p>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does £50k Compare?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £50,000, you&apos;re earning:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>In the top 25% of UK earners</strong></li>
              <li>• About 72% above the UK median salary</li>
              <li>• An effective tax rate of 21%</li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Salary Comparisons</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-600">£45,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£35,720/year</p>
                </div>
                <div>
                  <p className="text-blue-600">£55,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£42,420/year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Planning Tips for £50k Earners</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Maximise pension contributions</h3>
                  <p className="text-gray-600 text-sm">If you get a pay rise that pushes you into the higher rate band, consider increasing pension contributions. You&apos;ll get 40% tax relief on contributions that bring you back below £50,270.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salary sacrifice</h3>
                  <p className="text-gray-600 text-sm">Salary sacrifice for pension, electric car, or cycle to work can keep you below the higher rate threshold while still getting the benefit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Child benefit warning</h3>
                  <p className="text-gray-600 text-sm">At £50k, you&apos;re already losing some child benefit (clawback starts at £50,000). Check if you&apos;re being charged the High Income Child Benefit Charge.</p>
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
            "@type": "Article",
            "headline": "£50,000 Salary Take-Home Pay in 2025/26",
            "description": "Complete breakdown of what you'll actually receive from a £50k salary after income tax and National Insurance.",
            "datePublished": "2026-01-27T00:00:00.000Z",
            "dateModified": "2026-01-27T00:00:00.000Z",
            "author": {
              "@type": "Organization",
              "name": "SalaryTakeHome"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SalaryTakeHome",
              "url": "https://salarytakehome.co.uk"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://salarytakehome.co.uk/blog/50k-salary-take-home"
            }
          })
        }} />
      </article>
    </div>
  );
}
