import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Salary Sacrifice: Complete Guide to Tax-Free Benefits",
  description: "How salary sacrifice works, available schemes, and how much you could save on tax and National Insurance. Complete guide to UK salary sacrifice benefits.",
  keywords: "salary sacrifice, tax-free benefits, pension salary sacrifice, cycle to work, electric car scheme",
  openGraph: {
    title: "Salary Sacrifice: Complete Guide to Tax-Free Benefits",
    description: "How salary sacrifice works, available schemes, and how much you could save on tax and National Insurance.",
    type: "article",
    publishedTime: "2024-02-20T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/blog/salary-sacrifice-complete-guide",
  },
};

export default function SalarySacrificeGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
              Tax Planning
            </span>
            <time className="text-gray-500 text-sm" dateTime="2024-02-20">
              February 20, 2024
            </time>
            <span className="text-gray-500 text-sm">15 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Salary Sacrifice: Complete Guide to Tax-Free Benefits
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How salary sacrifice works, available schemes, and how much you could save on tax and National Insurance.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 What is Salary Sacrifice?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Salary sacrifice is a tax-efficient way to receive benefits by giving up part of your salary in exchange for non-cash benefits. This reduces both your income tax and National Insurance contributions.
            </p>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">Key Benefits:</h3>
              <ul className="text-green-700 space-y-2">
                <li>• Save income tax (20%, 40%, or 45%)</li>
                <li>• Save National Insurance (12% or 2%)</li>
                <li>• Often save employer NI too (13.8%)</li>
                <li>• Access to benefits you might not otherwise afford</li>
              </ul>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Salary Sacrifice Works</h2>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Before Salary Sacrifice</h3>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <strong>Gross Salary:</strong> £50,000<br/>
                      <strong>Income Tax:</strong> £7,486<br/>
                      <strong>National Insurance:</strong> £4,492<br/>
                      <strong>Take-home:</strong> £38,022
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">After £5,000 Pension Sacrifice</h3>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-700">
                      <strong>Gross Salary:</strong> £45,000<br/>
                      <strong>Income Tax:</strong> £6,486<br/>
                      <strong>National Insurance:</strong> £3,892<br/>
                      <strong>Take-home:</strong> £34,622<br/>
                      <strong>Pension:</strong> £5,000<br/>
                      <strong>Total benefit:</strong> £39,622
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Net gain:</strong> £1,600 more in your pocket + £5,000 in pension = £6,600 total benefit
                </p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Salary Sacrifice Schemes</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Pension Contributions</h3>
                <p className="text-gray-700 mb-3">
                  The most common and valuable salary sacrifice scheme. Your employer reduces your salary and pays the difference into your pension.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 mb-1">Tax Savings:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Basic rate: 32% (20% tax + 12% NI)</li>
                      <li>• Higher rate: 42% (40% tax + 2% NI)</li>
                      <li>• Additional rate: 47% (45% tax + 2% NI)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 mb-1">Example:</h4>
                    <p className="text-green-700 text-sm">
                      £5,000 pension contribution costs only £2,900-£3,400 after tax savings, depending on your tax rate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Cycle-to-Work Scheme</h3>
                <p className="text-gray-700 mb-3">
                  Save 32-42% on bikes and cycling equipment through salary sacrifice over 12-18 months.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 mb-1">What&apos;s Included:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Bikes and e-bikes</li>
                      <li>• Helmets and safety gear</li>
                      <li>• Lights and accessories</li>
                      <li>• Maintenance packages</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 mb-1">Example:</h4>
                    <p className="text-blue-700 text-sm">
                      A £1,000 bike costs only £580-£680 after tax savings, spread over 12-18 months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Electric Car Scheme</h3>
                <p className="text-gray-700 mb-3">
                  Access electric vehicles through salary sacrifice with very low Benefit-in-Kind tax rates.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <h4 className="font-semibold text-emerald-800 mb-1">Benefits:</h4>
                    <ul className="text-emerald-700 text-sm space-y-1">
                      <li>• 2% BiK rate until 2025</li>
                      <li>• Insurance and maintenance included</li>
                      <li>• No upfront costs</li>
                      <li>• Environmental benefits</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <h4 className="font-semibold text-purple-800 mb-1">Example:</h4>
                    <p className="text-purple-700 text-sm">
                      A £40,000 electric car might cost £300-£500/month including all running costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Childcare Vouchers</h3>
                <p className="text-gray-700 mb-3">
                  Save on childcare costs through salary sacrifice (though Tax-Free Childcare is often better).
                </p>
                <div className="bg-amber-50 rounded-lg p-3">
                  <h4 className="font-semibold text-amber-800 mb-1">Important Note:</h4>
                  <p className="text-amber-700 text-sm">
                    Childcare vouchers are closed to new applicants. Tax-Free Childcare is usually the better option for new parents.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Technology & Equipment</h3>
                <p className="text-gray-700 mb-3">
                  Access laptops, phones, and other equipment through salary sacrifice schemes.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <h4 className="font-semibold text-blue-800 mb-1">Available Items:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Laptops and computers</li>
                      <li>• Mobile phones and tablets</li>
                      <li>• Software and subscriptions</li>
                      <li>• Office equipment</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 mb-1">Benefits:</h4>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Regular upgrades</li>
                      <li>• Insurance included</li>
                      <li>• Tax and NI savings</li>
                      <li>• No upfront costs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Considerations</h2>
            
            <div className="space-y-6">
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">⚠️ Potential Drawbacks</h3>
                <ul className="text-amber-700 space-y-2">
                  <li>• Reduced salary affects mortgage applications</li>
                  <li>• May impact other benefits based on salary</li>
                  <li>• Some schemes have minimum contract periods</li>
                  <li>• Not all employers offer these schemes</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 Tips for Maximizing Benefits</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Start with pension contributions (highest savings)</li>
                  <li>• Combine multiple schemes for maximum tax efficiency</li>
                  <li>• Consider your long-term financial goals</li>
                  <li>• Review schemes annually to ensure they still suit your needs</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">✅ How to Get Started</h3>
                <ol className="text-green-700 space-y-2">
                  <li>1. Check what schemes your employer offers</li>
                  <li>2. Calculate potential savings using our calculator</li>
                  <li>3. Speak to your HR department about joining</li>
                  <li>4. Consider the impact on your overall finances</li>
                  <li>5. Start with small amounts and increase gradually</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Salary Sacrifice Savings</h2>
            <p className="text-gray-600 mb-6">
              Use our free calculator to see exactly how much you could save
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
            "headline": "Salary Sacrifice: Complete Guide to Tax-Free Benefits",
            "description": "How salary sacrifice works, available schemes, and how much you could save on tax and National Insurance.",
            "datePublished": "2024-02-20T00:00:00.000Z",
            "dateModified": "2024-02-20T00:00:00.000Z",
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
              "@id": "https://salarytakehome.co.uk/blog/salary-sacrifice-complete-guide"
            }
          })
        }} />
      </article>
    </div>
  );
} 