import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Student Loan Repayment Calculator Guide: Plans 1, 2 & 5 Explained",
  description: "Everything you need to know about student loan repayments, interest rates, and when loans get written off. Complete guide to UK student finance.",
  keywords: "student loan calculator, student loan repayment, plan 1, plan 2, plan 5, student finance UK",
  openGraph: {
    title: "Student Loan Repayment Calculator Guide: Plans 1, 2 & 5 Explained",
    description: "Everything you need to know about student loan repayments, interest rates, and when loans get written off.",
    type: "article",
    publishedTime: "2024-03-01T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/student-loan-repayment-guide",
  },
};

export default function StudentLoanGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-full">
              Student Loans
            </span>
            <time className="text-gray-500 text-sm" dateTime="2024-03-01">
              March 1, 2024
            </time>
            <span className="text-gray-500 text-sm">10 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Student Loan Repayment Calculator Guide: Plans 1, 2 & 5 Explained
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to know about student loan repayments, interest rates, and when loans get written off.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Quick Overview</h2>
            <p className="text-lg text-gray-700 mb-4">
              Student loans in the UK work differently from other debts. You only repay when you earn above a certain threshold, and the debt is written off after a set period.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Plan 1</h3>
                <p className="text-blue-700 text-sm">Pre-2012 students</p>
                <p className="text-blue-700 text-sm font-semibold">£22,015 threshold</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2</h3>
                <p className="text-purple-700 text-sm">2012-2023 students</p>
                <p className="text-purple-700 text-sm font-semibold">£27,295 threshold</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">Plan 5</h3>
                <p className="text-green-700 text-sm">Post-2023 students</p>
                <p className="text-green-700 text-sm font-semibold">£25,000 threshold</p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Student Loan Repayments Work</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">The Basics</h3>
              <div className="space-y-3 text-gray-700">
                <p>• You only repay when your income is above the threshold for your plan</p>
                <p>• Repayments are 9% of income above the threshold</p>
                <p>• Repayments are taken automatically through PAYE or self-assessment</p>
                <p>• The debt is written off after 25-30 years (depending on your plan)</p>
                <p>• Interest is charged daily but doesn&apos;t affect monthly repayments</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Example Calculation</h3>
              <p className="text-blue-800 mb-3">
                If you earn £35,000 and have a Plan 2 loan (threshold £27,295):
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Income above threshold:</strong> £35,000 - £27,295 = £7,705
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Annual repayment:</strong> £7,705 × 9% = £693.45
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Monthly repayment:</strong> £693.45 ÷ 12 = £57.79
                </p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan 1: Pre-2012 Students</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Details</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Repayment threshold:</strong> £22,015</li>
                    <li><strong>Repayment rate:</strong> 9% of income above threshold</li>
                    <li><strong>Interest rate:</strong> RPI or Bank of England base rate + 1% (whichever is lower)</li>
                    <li><strong>Write-off period:</strong> 25 years</li>
                    <li><strong>Typical loan amount:</strong> £3,000-£15,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Interest Rates 2024/25</h3>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Current rate:</strong> 6.25% (RPI-based)<br/>
                      <strong>Previous rate:</strong> 6.25%<br/>
                      <strong>Rate cap:</strong> RPI or base rate + 1%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Plan 1 Advantages</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Lower threshold means earlier repayments but smaller amounts</li>
                <li>• Lower interest rates compared to Plan 2</li>
                <li>• Shorter write-off period (25 years)</li>
                <li>• Generally smaller loan amounts</li>
              </ul>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan 2: 2012-2023 Students</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Details</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Repayment threshold:</strong> £27,295</li>
                    <li><strong>Repayment rate:</strong> 9% of income above threshold</li>
                    <li><strong>Interest rate:</strong> RPI + 3% while studying, then RPI + 0-3% based on income</li>
                    <li><strong>Write-off period:</strong> 30 years</li>
                    <li><strong>Typical loan amount:</strong> £27,000-£45,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Interest Rates 2024/25</h3>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-purple-800 text-sm">
                      <strong>While studying:</strong> 9.25%<br/>
                      <strong>Income £27,295-£49,130:</strong> 7.25%<br/>
                      <strong>Income £49,131-£69,000:</strong> 8.25%<br/>
                      <strong>Income £69,000+:</strong> 9.25%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Plan 2 Considerations</h3>
              <ul className="text-amber-700 space-y-2">
                <li>• Higher threshold means later repayments but larger amounts</li>
                <li>• Higher interest rates (up to 9.25%)</li>
                <li>• Longer write-off period (30 years)</li>
                <li>• Most graduates won&apos;t fully repay before write-off</li>
              </ul>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan 5: Post-2023 Students</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Details</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Repayment threshold:</strong> £25,000</li>
                    <li><strong>Repayment rate:</strong> 9% of income above threshold</li>
                    <li><strong>Interest rate:</strong> RPI + 3% while studying, then RPI + 0-3% based on income</li>
                    <li><strong>Write-off period:</strong> 40 years</li>
                    <li><strong>Typical loan amount:</strong> £27,000-£45,000</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Interest Rates 2024/25</h3>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-green-800 text-sm">
                      <strong>While studying:</strong> 9.25%<br/>
                      <strong>Income £25,000-£49,130:</strong> 7.25%<br/>
                      <strong>Income £49,131-£69,000:</strong> 8.25%<br/>
                      <strong>Income £69,000+:</strong> 9.25%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">Plan 5 Changes</h3>
              <ul className="text-red-700 space-y-2">
                <li>• Lower threshold than Plan 2 (£25,000 vs £27,295)</li>
                <li>• Longer write-off period (40 years vs 30 years)</li>
                <li>• More graduates will repay in full</li>
                <li>• Higher total repayments for most graduates</li>
              </ul>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Postgraduate Loans</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Details</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li><strong>Repayment threshold:</strong> £21,000</li>
                    <li><strong>Repayment rate:</strong> 6% of income above threshold</li>
                    <li><strong>Interest rate:</strong> RPI + 3%</li>
                    <li><strong>Write-off period:</strong> 30 years</li>
                    <li><strong>Maximum loan:</strong> £12,167 (2024/25)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Multiple loans:</strong> You can have both undergraduate and postgraduate loans<br/>
                      <strong>Separate repayments:</strong> Each loan has its own threshold and rate<br/>
                      <strong>Combined impact:</strong> Total repayments can be 15% (9% + 6%)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Should You Pay Off Your Student Loan Early?</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider These Factors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Arguments FOR Early Repayment:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• High interest rates (up to 9.25%)</li>
                      <li>• Psychological benefit of being debt-free</li>
                      <li>• Better mortgage applications</li>
                      <li>• No risk of policy changes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Arguments AGAINST Early Repayment:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Most graduates won&apos;t repay in full</li>
                      <li>• Better returns from investments</li>
                      <li>• Repayments stop if you lose your job</li>
                      <li>• Debt is written off after 25-40 years</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Our Recommendation</h3>
                <p className="text-green-700 mb-3">
                  For most graduates, it&apos;s better to focus on other financial priorities:
                </p>
                <ul className="text-green-700 space-y-2">
                  <li>• Build an emergency fund (3-6 months&apos; expenses)</li>
                  <li>• Save for a house deposit</li>
                  <li>• Contribute to your pension</li>
                  <li>• Invest in ISAs or other investments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Check Your Student Loan Balance</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Online (Recommended)</h3>
                  <p className="text-gray-700 text-sm">
                    Visit <a href="https://www.gov.uk/repaying-your-student-loan" className="text-blue-600 hover:underline">gov.uk/repaying-your-student-loan</a> and log in with your Government Gateway account.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">By Phone</h3>
                  <p className="text-gray-700 text-sm">
                    Call the Student Loans Company on 0300 100 0611 (Monday to Friday, 8am to 8pm).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What You&apos;ll Need</h3>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Your National Insurance number</li>
                    <li>• Your student loan reference number</li>
                    <li>• Government Gateway account (for online access)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Student Loan Repayments</h2>
            <p className="text-gray-600 mb-6">
              Use our free calculator to see exactly how much you&apos;ll repay each month
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
            "headline": "Student Loan Repayment Calculator Guide: Plans 1, 2 & 5 Explained",
            "description": "Everything you need to know about student loan repayments, interest rates, and when loans get written off.",
            "datePublished": "2024-03-01T00:00:00.000Z",
            "dateModified": "2024-03-01T00:00:00.000Z",
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
              "@id": "https://www.salarytakehome.co.uk/blog/student-loan-repayment-guide"
            }
          })
        }} />
      </article>
    </div>
  );
} 