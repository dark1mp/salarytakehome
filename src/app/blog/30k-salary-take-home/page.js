import React from "react";
import Link from "next/link";

export const metadata = {
  title: "£30,000 Salary Take-Home Pay 2025/26 | After Tax Calculator",
  description: "Find out exactly how much you take home from a £30,000 salary in 2025/26. Full breakdown of income tax, National Insurance, and monthly take-home pay.",
  keywords: "30000 salary, 30k salary, take home pay 30000, 30k after tax, salary calculator 30000",
  openGraph: {
    title: "£30,000 Salary Take-Home Pay 2025/26",
    description: "Complete breakdown of take-home pay on a £30k salary including tax and NI deductions.",
    type: "article",
    publishedTime: "2026-01-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "£30,000 Salary Take-Home Pay 2025/26",
    description: "How much do you take home from a £30k salary? Full breakdown inside.",
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/blog/30k-salary-take-home",
  },
};

export default function Salary30k() {
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
            £30,000 Salary Take-Home Pay in 2025/26
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete breakdown of what you&apos;ll actually receive from a £30k salary after income tax and National Insurance
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: £30,000 Salary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Annual Take-Home</p>
              <p className="text-3xl font-bold">£25,120</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-3xl font-bold">£2,093</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Weekly Take-Home</p>
              <p className="text-3xl font-bold">£483</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              If you&apos;re earning £30,000 a year in the UK, you&apos;re earning slightly above the national median salary. But how much of that actually ends up in your bank account?
            </p>
            <p className="text-gray-700 leading-relaxed">
              After income tax and National Insurance, you&apos;ll take home approximately <strong>£25,120 per year</strong>, or <strong>£2,093 per month</strong>. That means you&apos;re keeping about 83.7% of your gross salary.
            </p>
          </div>

          {/* Full Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Tax Breakdown for £30,000</h2>

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
                    <td className="py-3 text-gray-900 text-right">£30,000</td>
                    <td className="py-3 text-gray-900 text-right">£2,500</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Personal Allowance</td>
                    <td className="py-3 text-gray-700 text-right">£12,570</td>
                    <td className="py-3 text-gray-700 text-right">£1,048</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Taxable Income</td>
                    <td className="py-3 text-gray-700 text-right">£17,430</td>
                    <td className="py-3 text-gray-700 text-right">£1,453</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-red-700">Income Tax (20%)</td>
                    <td className="py-3 text-red-700 text-right">-£3,486</td>
                    <td className="py-3 text-red-700 text-right">-£291</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (8%)</td>
                    <td className="py-3 text-orange-700 text-right">-£1,394</td>
                    <td className="py-3 text-orange-700 text-right">-£116</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 text-green-700 font-bold">Take-Home Pay</td>
                    <td className="py-3 text-green-700 font-bold text-right">£25,120</td>
                    <td className="py-3 text-green-700 font-bold text-right">£2,093</td>
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
                <h3 className="font-semibold text-amber-800 mb-3">Step 2: Income Tax</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-2">
                  Everything above your Personal Allowance is taxed at 20% (the basic rate).
                </p>
                <p className="text-amber-700 text-sm">
                  £30,000 - £12,570 = £17,430 taxable<br />
                  £17,430 × 20% = <strong>£3,486 income tax</strong>
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">Step 3: National Insurance</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  You pay 8% National Insurance on earnings between £12,570 and £50,270.
                </p>
                <p className="text-orange-700 text-sm">
                  £17,430 × 8% = <strong>£1,394 National Insurance</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Tax Band */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Tax Band Are You In?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £30,000, you&apos;re a <strong>basic rate taxpayer</strong>. Your entire taxable income falls within the 20% tax band.
            </p>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <p className="text-green-800 text-sm leading-relaxed">
                <strong>Good news:</strong> You&apos;re well below the higher rate threshold of £50,270. You&apos;d need a pay rise of over £20,000 before any of your income gets taxed at 40%.
              </p>
            </div>
          </div>

          {/* With Student Loan */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">£30k with Student Loan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have a student loan, your take-home pay will be lower. Here&apos;s how much you&apos;d repay on each plan:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 1 (Pre-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £26,065</p>
                <p className="text-purple-700 text-sm">Annual repayment: £354</p>
                <p className="text-purple-900 font-semibold">Take-home: £24,766/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2 (Post-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £28,470</p>
                <p className="text-purple-700 text-sm">Annual repayment: £138</p>
                <p className="text-purple-900 font-semibold">Take-home: £24,982/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 4 (Scotland)</h3>
                <p className="text-purple-700 text-sm">Threshold: £31,395</p>
                <p className="text-purple-700 text-sm">Annual repayment: £0</p>
                <p className="text-purple-900 font-semibold">Take-home: £25,120/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 5 (Post-2023)</h3>
                <p className="text-purple-700 text-sm">Threshold: £25,000</p>
                <p className="text-purple-700 text-sm">Annual repayment: £450</p>
                <p className="text-purple-900 font-semibold">Take-home: £24,670/year</p>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does £30k Compare?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £30,000, you&apos;re earning:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>About the UK median salary</strong> (around £29,000)</li>
              <li>• More than 50% of UK workers</li>
              <li>• An effective tax rate of just 16.3%</li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Salary Comparisons</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-600">£25,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£21,330/year</p>
                </div>
                <div>
                  <p className="text-blue-600">£35,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£28,910/year</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tips to Maximise Your Take-Home Pay</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Check your tax code</h3>
                  <p className="text-gray-600 text-sm">Make sure you&apos;re on 1257L. A wrong tax code could mean you&apos;re overpaying.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salary sacrifice schemes</h3>
                  <p className="text-gray-600 text-sm">Cycle to work, electric car schemes, or extra pension contributions can reduce your tax bill.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Marriage Allowance</h3>
                  <p className="text-gray-600 text-sm">If your partner earns under £12,570, they can transfer £1,260 of their allowance to you, saving up to £252 per year.</p>
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
            "headline": "£30,000 Salary Take-Home Pay in 2025/26",
            "description": "Complete breakdown of what you'll actually receive from a £30k salary after income tax and National Insurance.",
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
              "@id": "https://salarytakehome.co.uk/blog/30k-salary-take-home"
            }
          })
        }} />
      </article>
    </div>
  );
}
