import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UK Tax Changes 2025/26: Complete Guide to New Rates & Thresholds",
  description: "Comprehensive guide to UK tax changes for 2025/26 including income tax rates, National Insurance updates, and how they affect your take-home pay.",
  keywords: "UK tax changes 2025/26, income tax rates, National Insurance 2025, tax thresholds, HMRC updates",
  openGraph: {
    title: "UK Tax Changes 2025/26: What You Need to Know",
    description: "Complete guide to the latest tax rates, thresholds, and changes affecting your take-home pay this tax year.",
    type: "article",
    publishedTime: "2025-04-06T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Tax Changes 2025/26: Complete Guide",
    description: "Latest tax rates, thresholds, and changes affecting your take-home pay this tax year.",
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/blog/uk-tax-changes-2025-26",
  },
};

export default function UKTaxChanges2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
              Tax Updates
            </span>
            <time className="text-gray-500 text-sm" dateTime="2025-04-06">
              April 6, 2025
            </time>
            <span className="text-gray-500 text-sm">8 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            UK Tax Changes 2025/26: What You Need to Know
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete guide to the latest tax rates, thresholds, and changes affecting your take-home pay this tax year.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Changes Summary</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">✅ Good News</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Personal allowance remains at £12,570</li>
                  <li>• Basic rate threshold frozen at £50,270</li>
                  <li>• National Insurance rates stable</li>
                  <li>• Employment Rights Act 2025 strengthens worker protections</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">⚠️ Watch Out</h3>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Thresholds frozen until 2028 (fiscal drag)</li>
                  <li>• More people pushed into higher tax bands</li>
                  <li>• New SSP rules from April 2026</li>
                  <li>• Student loan repayment threshold adjustments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Income Tax Rates 2025/26</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tax Band</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Income Range</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Personal Allowance</td>
                    <td className="border border-gray-200 px-4 py-3">£0 - £12,570</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Basic Rate</td>
                    <td className="border border-gray-200 px-4 py-3">£12,571 - £50,270</td>
                    <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">20%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Higher Rate</td>
                    <td className="border border-gray-200 px-4 py-3">£50,271 - £125,140</td>
                    <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">40%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Additional Rate</td>
                    <td className="border border-gray-200 px-4 py-3">£125,141+</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> The personal allowance reduces by £1 for every £2 earned over £100,000, resulting in an effective 60% marginal tax rate between £100,000 and £125,140.
              </p>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">National Insurance Rates 2025/26</h2>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Employee National Insurance (Class 1)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Income Band</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">£0 - £12,570</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">£12,571 - £50,270</td>
                    <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">8%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">£50,271+</td>
                    <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">2%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Self-Employed National Insurance (Class 4)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Profit Band</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">£0 - £12,570</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">£12,571 - £50,270</td>
                    <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">6%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">£50,271+</td>
                    <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">2%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">New for 2025/26: Major Changes</h2>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">📋 Employment Rights Act 2025</h3>
                <p className="text-green-700 mb-3">
                  The Employment Rights Act 2025 introduces significant worker protections, effective October 2026:
                </p>
                <ul className="list-disc list-inside text-green-700 space-y-2">
                  <li>Day-one protection against unfair dismissal (replaces 2-year qualifying period)</li>
                  <li>Predictable hours guarantees for zero-hours workers</li>
                  <li>Strengthened collective redundancy protections</li>
                  <li>Ban on exploitative "fire and rehire" practices</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">🏥 Statutory Sick Pay Changes (April 2026)</h3>
                <p className="text-blue-700 mb-3">
                  From April 2026, significant reforms to Statutory Sick Pay:
                </p>
                <ul className="list-disc list-inside text-blue-700 space-y-2">
                  <li>SSP paid from day 1 (currently day 4 - no waiting days)</li>
                  <li>Rate increases to 80% of weekly earnings (capped at £123.25/week)</li>
                  <li>No minimum earnings threshold - all employees eligible</li>
                  <li>Lower earners benefit most from the new rules</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">👶 Maternity Pay Updates</h3>
                <p className="text-purple-700 mb-3">
                  Statutory Maternity Pay rates for 2025/26:
                </p>
                <ul className="list-disc list-inside text-purple-700 space-y-2">
                  <li>First 6 weeks: 90% of average weekly earnings (no cap)</li>
                  <li>Remaining 33 weeks: £187.18/week or 90% of earnings (whichever is lower)</li>
                  <li>Total duration: 39 weeks of paid leave</li>
                  <li>Eligibility: £125/week minimum earnings threshold</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Loan Repayments 2025/26</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Plan Type</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Threshold</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Plan 1</td>
                    <td className="border border-gray-200 px-4 py-3">£24,990/year</td>
                    <td className="border border-gray-200 px-4 py-3">9%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Plan 2</td>
                    <td className="border border-gray-200 px-4 py-3">£27,295/year</td>
                    <td className="border border-gray-200 px-4 py-3">9%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Plan 4 (Scotland)</td>
                    <td className="border border-gray-200 px-4 py-3">£31,395/year</td>
                    <td className="border border-gray-200 px-4 py-3">9%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">Plan 5 (Post-2023)</td>
                    <td className="border border-gray-200 px-4 py-3">£25,000/year</td>
                    <td className="border border-gray-200 px-4 py-3">9%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">Postgraduate Loan</td>
                    <td className="border border-gray-200 px-4 py-3">£21,000/year</td>
                    <td className="border border-gray-200 px-4 py-3">6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Impact of Frozen Thresholds (Fiscal Drag)</h2>

            <p className="text-gray-700 mb-4">
              With thresholds frozen until April 2028 and average earnings rising, more taxpayers are being pushed into higher tax bands - a phenomenon known as "fiscal drag."
            </p>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-3">Example: Impact of Wage Growth</h3>
              <p className="text-amber-700 mb-3">
                If you earn £48,000 in 2025/26 and receive a 4% pay rise:
              </p>
              <ul className="list-disc list-inside text-amber-700 space-y-2">
                <li>New salary: £49,920 (still in basic rate)</li>
                <li>With another 4% rise in 2026/27: £51,917 (now in higher rate band)</li>
                <li>You'll pay 40% tax on income over £50,270 despite real wages barely keeping up with inflation</li>
                <li>This affects approximately 3.2 million additional taxpayers by 2028</li>
              </ul>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Planning Tips for 2025/26</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Maximize Pension Contributions</h3>
                  <p className="text-gray-600">
                    Pension contributions reduce your taxable income and receive tax relief at your marginal rate. Annual allowance: £60,000.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🚗</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Use Salary Sacrifice Schemes</h3>
                  <p className="text-gray-600">
                    Reduce your gross salary for benefits like cycle-to-work, electric vehicles, or additional pension contributions to save on tax and NI.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Utilize Your ISA Allowance</h3>
                  <p className="text-gray-600">
                    Save up to £20,000 tax-free in ISAs for the 2025/26 tax year. Earnings and withdrawals are completely tax-free.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Marriage Allowance</h3>
                  <p className="text-gray-600">
                    Transfer £1,260 of personal allowance to your spouse/civil partner if they earn less than £12,570, saving up to £252/year.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Capital Gains Tax Allowance</h3>
                  <p className="text-gray-600">
                    Annual CGT exemption: £3,000 for 2025/26. Consider timing asset sales to maximize tax-free gains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Take-Home Pay</h2>
            <p className="text-gray-700 mb-6">
              Use our free UK tax calculator to see exactly how these changes affect your take-home pay for 2025/26.
            </p>
            <Link
              href="/take-home-pay-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Try Calculator →
            </Link>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">When does the 2025/26 tax year start?</h3>
                <p className="text-gray-600">
                  The UK tax year runs from April 6, 2025 to April 5, 2026.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Has the personal allowance increased?</h3>
                <p className="text-gray-600">
                  No, the personal allowance remains frozen at £12,570 until April 2028 as part of the government's fiscal policy.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">When do the new SSP rules take effect?</h3>
                <p className="text-gray-600">
                  The new Statutory Sick Pay rules come into effect from April 6, 2026 (the start of the 2026/27 tax year), not during 2025/26.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How does fiscal drag affect me?</h3>
                <p className="text-gray-600">
                  As wages rise with inflation but tax thresholds stay frozen, more of your income gets taxed at higher rates. This means wage increases don't translate fully into increased take-home pay.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Are Scottish tax rates different?</h3>
                <p className="text-gray-600">
                  Yes, Scotland has different income tax rates and bands. Scottish taxpayers should check the Scottish government website for specific rates.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-gray-700 mb-4">
              Tax rules and rates can change throughout the year. Bookmark this page and check back regularly for updates.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> This guide is for informational purposes only and should not be considered financial advice.
              Always consult with a qualified tax professional for personalized guidance. Information accurate as of April 2025.
            </p>
          </div>

        </div>

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to All Articles
          </Link>
        </div>
      </article>
    </div>
  );
}
