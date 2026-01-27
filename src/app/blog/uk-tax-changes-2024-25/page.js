import React from "react";
import Link from "next/link";

export const metadata = {
  title: "UK Tax Changes 2024/25: Complete Guide to New Rates & Thresholds",
  description: "Comprehensive guide to UK tax changes for 2024/25 including income tax rates, National Insurance updates, and how they affect your take-home pay.",
  keywords: "UK tax changes 2024/25, income tax rates, National Insurance 2024, tax thresholds, HMRC updates",
  openGraph: {
    title: "UK Tax Changes 2024/25: What You Need to Know",
    description: "Complete guide to the latest tax rates, thresholds, and changes affecting your take-home pay this tax year.",
    type: "article",
    publishedTime: "2024-04-06T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Tax Changes 2024/25: Complete Guide",
    description: "Latest tax rates, thresholds, and changes affecting your take-home pay this tax year.",
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/blog/uk-tax-changes-2024-25",
  },
};

export default function UKTaxChanges2024() {
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
            <time className="text-gray-500 text-sm" dateTime="2024-04-06">
              April 6, 2024
            </time>
            <span className="text-gray-500 text-sm">8 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            UK Tax Changes 2024/25: What You Need to Know
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
                  <li>• National Insurance rates reduced</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">⚠️ Watch Out</h3>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Thresholds frozen until 2028</li>
                  <li>• More people in higher rate tax</li>
                  <li>• Student loan threshold changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Income Tax Rates 2024/25</h2>
            
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
                    <td className="border border-gray-200 px-4 py-3">£125,140+</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-blue-800 text-sm">
                <strong>Note:</strong> Scotland has different rates and bands. The personal allowance also reduces by £1 for every £2 of income above £100,000.
              </p>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">National Insurance Changes</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Employee Rates (Class 1)</h3>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">2024/25 Rates</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 12% on earnings £12,570 - £50,270</li>
                      <li>• 2% on earnings above £50,270</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Previous Year</h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• 12% on earnings £12,570 - £50,270</li>
                      <li>• 2% on earnings above £50,270</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Self-Employed Rates</h3>
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Class 2:</strong> £3.45 per week (if profits exceed £6,515)</li>
                  <li><strong>Class 4:</strong> 9% on profits £12,570 - £50,270, then 2% above</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Loan Changes</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Plan 1 (Pre-2012 students)</h3>
                <p className="text-sm text-gray-700">Repayment threshold: <strong>£22,015</strong> (increased from £20,195)</p>
                <p className="text-sm text-gray-700">Rate: <strong>9%</strong> on income above threshold</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Plan 2 (2012-2023 students)</h3>
                <p className="text-sm text-gray-700">Repayment threshold: <strong>£27,295</strong></p>
                <p className="text-sm text-gray-700">Rate: <strong>9%</strong> on income above threshold</p>
              </div>
              
              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Plan 5 (Post-2023 students)</h3>
                <p className="text-sm text-gray-700">Repayment threshold: <strong>£25,000</strong></p>
                <p className="text-sm text-gray-700">Rate: <strong>9%</strong> on income above threshold</p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What This Means for You</h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">💰 Salary Examples</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-blue-800">£30,000 salary:</p>
                    <p className="text-blue-700">Take-home pay: ~£24,422 per year</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">£60,000 salary:</p>
                    <p className="text-blue-700">Take-home pay: ~£44,910 per year</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">📈 Planning Tips</h3>
                <ul className="text-sm text-green-800 space-y-2">
                  <li>• Consider salary sacrifice schemes to reduce taxable income</li>
                  <li>• Maximize pension contributions for tax relief</li>
                  <li>• Review your tax code with HMRC if circumstances change</li>
                  <li>• Plan for potential tax bracket changes with salary increases</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Take-Home Pay</h2>
            <p className="text-gray-600 mb-6">
              Use our free calculator to see exactly how these changes affect your salary
            </p>
            <Link 
              href="/take-home-pay-calculator"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Calculating →
            </Link>
          </div>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "UK Tax Changes 2024/25: What You Need to Know",
            "description": "Complete guide to the latest tax rates, thresholds, and changes affecting your take-home pay this tax year.",
            "datePublished": "2024-04-06T00:00:00.000Z",
            "dateModified": "2024-04-06T00:00:00.000Z",
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
              "@id": "https://salarytakehome.co.uk/blog/uk-tax-changes-2024-25"
            }
          })
        }} />
      </article>
    </div>
  );
} 