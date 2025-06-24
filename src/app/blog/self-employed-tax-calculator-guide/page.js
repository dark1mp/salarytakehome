import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Self-Employed Tax Calculator: How to Estimate Your Tax Bill",
  description: "Calculate your income tax, National Insurance, and take-home profit as a sole trader or freelancer. Complete guide to self-employed tax in the UK.",
  keywords: "self-employed tax calculator, sole trader tax, freelancer tax, National Insurance self-employed",
  openGraph: {
    title: "Self-Employed Tax Calculator: How to Estimate Your Tax Bill",
    description: "Calculate your income tax, National Insurance, and take-home profit as a sole trader or freelancer.",
    type: "article",
    publishedTime: "2024-02-05T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
};

export default function SelfEmployedTaxGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-medium rounded-full">
              Self-Employment
            </span>
            <time className="text-gray-500 text-sm" dateTime="2024-02-05">
              February 5, 2024
            </time>
            <span className="text-gray-500 text-sm">9 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Self-Employed Tax Calculator: How to Estimate Your Tax Bill
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Calculate your income tax, National Insurance, and take-home profit as a sole trader or freelancer.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💼 Self-Employed Tax Overview</h2>
            <p className="text-lg text-gray-700 mb-4">
              As a self-employed person, you pay tax on your profits (income minus expenses) rather than your total income. This guide explains how to calculate your tax liability.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Income Tax</h3>
                <p className="text-blue-700 text-sm">Same rates as employed</p>
                <p className="text-blue-700 text-sm font-semibold">20%, 40%, 45%</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Class 2 NI</h3>
                <p className="text-green-700 text-sm">Fixed weekly amount</p>
                <p className="text-green-700 text-sm font-semibold">£3.45/week</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Class 4 NI</h3>
                <p className="text-purple-700 text-sm">Percentage of profits</p>
                <p className="text-purple-700 text-sm font-semibold">9% + 2%</p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Self-Employed Tax is Calculated</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Calculate Your Profits</h3>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-green-800 font-semibold mb-2">Formula:</p>
                <p className="text-green-700 text-lg">Profits = Total Income - Allowable Expenses</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Income Tax Calculation</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tax Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Profit Range</th>
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
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: National Insurance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Class 2 National Insurance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• £3.45 per week (£179.40 per year)</li>
                    <li>• Only if profits exceed £6,515</li>
                    <li>• Can be paid voluntarily if below threshold</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Class 4 National Insurance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 9% on profits £12,570 - £50,270</li>
                    <li>• 2% on profits above £50,270</li>
                    <li>• No NI on first £12,570 of profits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Calculation</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Freelancer with £40,000 Annual Profits</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Income Tax Calculation:</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <p>• Personal Allowance: £12,570 (0% tax)</p>
                    <p>• Basic Rate: £27,430 × 20% = £5,486</p>
                    <p>• <strong>Total Income Tax: £5,486</strong></p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">National Insurance:</h4>
                  <div className="text-sm text-green-700 space-y-1">
                    <p>• Class 2: £179.40 per year</p>
                    <p>• Class 4: £27,430 × 9% = £2,468.70</p>
                    <p>• <strong>Total NI: £2,648.10</strong></p>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Summary:</h4>
                  <div className="text-sm text-purple-700 space-y-1">
                    <p>• Gross Profits: £40,000</p>
                    <p>• Income Tax: £5,486</p>
                    <p>• National Insurance: £2,648</p>
                    <p>• <strong>Take-home: £31,866</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Allowable Expenses</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">✅ Deductible Expenses</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Office costs (stationery, phone bills)</li>
                  <li>• Travel costs (fuel, parking, public transport)</li>
                  <li>• Clothing (uniforms, safety equipment)</li>
                  <li>• Staff costs (wages, salaries, subcontractors)</li>
                  <li>• Premises costs (rent, rates, utilities)</li>
                  <li>• Reselling goods (stock, materials)</li>
                  <li>• Financial costs (insurance, bank charges)</li>
                  <li>• Professional fees (accountants, legal)</li>
                  <li>• Marketing and advertising</li>
                  <li>• Training and development</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">❌ Non-Deductible Expenses</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Personal expenses</li>
                  <li>• Entertainment (unless client entertainment)</li>
                  <li>• Fines and penalties</li>
                  <li>• Personal clothing</li>
                  <li>• Commuting costs (home to permanent workplace)</li>
                  <li>• Personal phone calls</li>
                  <li>• Personal use of business assets</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Home Office Expenses</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Simplified Expenses</h3>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-green-800 font-semibold mb-2">Flat Rate Method:</p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• 25-50 hours/month: £10/month</li>
                      <li>• 51-100 hours/month: £18/month</li>
                      <li>• 101+ hours/month: £26/month</li>
                    </ul>
                    <p className="text-green-700 text-sm mt-2">
                      <strong>No receipts needed!</strong>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Actual Costs Method</h3>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-blue-800 font-semibold mb-2">Calculate proportion of:</p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Rent or mortgage interest</li>
                      <li>• Council tax</li>
                      <li>• Utilities (gas, electricity, water)</li>
                      <li>• Internet and phone</li>
                      <li>• Insurance</li>
                    </ul>
                    <p className="text-blue-700 text-sm mt-2">
                      <strong>Receipts required!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Deadlines & Payments</h2>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Self Assessment Deadlines</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Paper Returns:</h4>
                    <p className="text-red-600 font-semibold">31 October (following tax year)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Online Returns:</h4>
                    <p className="text-red-600 font-semibold">31 January (following tax year)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Deadlines</h3>
                <div className="space-y-3">
                  <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-1">31 January:</h4>
                    <p className="text-amber-700 text-sm">Balance of tax due for previous year + First payment on account</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-1">31 July:</h4>
                    <p className="text-blue-700 text-sm">Second payment on account</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Planning Tips</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">💡 Maximize Your Deductions</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Keep detailed records of all business expenses</li>
                  <li>• Use simplified expenses for home office if eligible</li>
                  <li>• Claim for training and professional development</li>
                  <li>• Consider timing of large purchases</li>
                  <li>• Use annual investment allowance for equipment</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📊 Planning for Payments</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Set aside 25-30% of profits for tax</li>
                  <li>• Use a separate business bank account</li>
                  <li>• Plan for payments on account</li>
                  <li>• Consider making voluntary Class 2 NI payments</li>
                  <li>• Use tax-efficient savings accounts</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Self-Employed Tax</h2>
            <p className="text-gray-600 mb-6">
              Use our free calculator to estimate your tax liability and take-home profit
            </p>
            <Link 
              href="/"
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
            "headline": "Self-Employed Tax Calculator: How to Estimate Your Tax Bill",
            "description": "Calculate your income tax, National Insurance, and take-home profit as a sole trader or freelancer.",
            "datePublished": "2024-02-05T00:00:00.000Z",
            "dateModified": "2024-02-05T00:00:00.000Z",
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
              "@id": "https://salarytakehome.co.uk/blog/self-employed-tax-calculator-guide"
            }
          })
        }} />
      </article>
    </div>
  );
} 