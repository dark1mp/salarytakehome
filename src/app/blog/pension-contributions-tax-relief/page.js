import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Pension Contributions and Tax Relief: Maximize Your Retirement Savings",
  description: "Understanding annual allowances, tax relief rates, and how pension contributions reduce your tax bill. Complete guide to UK pension tax relief.",
  keywords: "pension contributions, tax relief, annual allowance, pension calculator, retirement savings",
  openGraph: {
    title: "Pension Contributions and Tax Relief: Maximize Your Retirement Savings",
    description: "Understanding annual allowances, tax relief rates, and how pension contributions reduce your tax bill.",
    type: "article",
    publishedTime: "2024-01-25T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
};

export default function PensionContributionsGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-sm font-medium rounded-full">
              Pensions
            </span>
            <time className="text-gray-500 text-sm" dateTime="2024-01-25">
              January 25, 2024
            </time>
            <span className="text-gray-500 text-sm">11 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Pension Contributions and Tax Relief: Maximize Your Retirement Savings
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding annual allowances, tax relief rates, and how pension contributions reduce your tax bill.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Pension Tax Relief Overview</h2>
            <p className="text-lg text-gray-700 mb-4">
              Pension tax relief is one of the most valuable tax breaks available in the UK. For every £100 you contribute, the government adds £20, £40, or £45 depending on your tax rate.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">Basic Rate</h3>
                <p className="text-blue-700 text-sm">20% tax relief</p>
                <p className="text-blue-700 text-sm font-semibold">£100 → £125</p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-2">Higher Rate</h3>
                <p className="text-orange-700 text-sm">40% tax relief</p>
                <p className="text-orange-700 text-sm font-semibold">£100 → £166.67</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Additional Rate</h3>
                <p className="text-red-700 text-sm">45% tax relief</p>
                <p className="text-red-700 text-sm font-semibold">£100 → £181.82</p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Pension Tax Relief Works</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Basic Rate Taxpayers (20%)</h3>
                <p className="text-gray-700 mb-3">
                  You contribute £80 from your take-home pay, and the government adds £20 in tax relief, giving you £100 in your pension.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Example:</h4>
                  <p className="text-blue-700 text-sm">
                    You want £1,000 in your pension. You pay £800 from your salary, and the government adds £200 in tax relief.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Higher Rate Taxpayers (40%)</h3>
                <p className="text-gray-700 mb-3">
                  You get 20% relief automatically, then claim the additional 20% through self-assessment or by contacting HMRC.
                </p>
                <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-2">Example:</h4>
                  <p className="text-orange-700 text-sm">
                    You contribute £1,000 to your pension. You get £200 relief automatically, and can claim an additional £200 through your tax return.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Additional Rate Taxpayers (45%)</h3>
                <p className="text-gray-700 mb-3">
                  Similar to higher rate taxpayers, but you can claim an additional 25% relief (45% - 20% = 25%).
                </p>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Example:</h4>
                  <p className="text-red-700 text-sm">
                    You contribute £1,000 to your pension. You get £200 relief automatically, and can claim an additional £250 through your tax return.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Annual Allowance</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Standard Annual Allowance</h3>
              <p className="text-gray-700 mb-4">
                The annual allowance is the maximum amount you can contribute to your pension each year while still receiving tax relief.
              </p>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">2024/25 Annual Allowance:</h4>
                <p className="text-green-700 text-2xl font-bold">£60,000</p>
                <p className="text-green-700 text-sm mt-2">
                  This includes both your contributions and any employer contributions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tapered Annual Allowance</h3>
              <p className="text-gray-700 mb-4">
                High earners may have their annual allowance reduced. For every £2 of income above £260,000, your allowance reduces by £1.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-2">Income £260,000-£360,000:</h4>
                  <p className="text-amber-700 text-sm">
                    Annual allowance reduces from £60,000 to £10,000
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Income above £360,000:</h4>
                  <p className="text-red-700 text-sm">
                    Annual allowance is £10,000
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Carry Forward</h2>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 mb-4">
                If you haven't used your full annual allowance in the previous three tax years, you can carry forward the unused amount.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Rules:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• You must have been a member of a pension scheme</li>
                    <li>• You can carry forward unused allowance from the previous 3 years</li>
                    <li>• You must use current year's allowance first</li>
                    <li>• You must have sufficient earnings to cover the contribution</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Example:</h3>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>2021/22:</strong> Used £40,000 (unused £20,000)<br/>
                      <strong>2022/23:</strong> Used £30,000 (unused £30,000)<br/>
                      <strong>2023/24:</strong> Used £50,000 (unused £10,000)<br/>
                      <strong>2024/25:</strong> Can contribute up to £120,000<br/>
                      (£60,000 + £20,000 + £30,000 + £10,000)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Pension Schemes</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Workplace Pensions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Defined Contribution:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• You and your employer contribute</li>
                      <li>• Investment performance affects final value</li>
                      <li>• You choose how to take your pension</li>
                      <li>• Most common type today</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Defined Benefit:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Based on salary and years of service</li>
                      <li>• Guaranteed income in retirement</li>
                      <li>• Becoming less common</li>
                      <li>• Usually public sector</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Personal Pensions</h3>
                <p className="text-gray-700 mb-3">
                  Individual pension plans that you set up yourself, often with a pension provider or financial advisor.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Benefits:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Full control over investments</li>
                    <li>• Can consolidate multiple pensions</li>
                    <li>• Often lower charges than workplace schemes</li>
                    <li>• Flexible contribution amounts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Self-Invested Personal Pensions (SIPPs)</h3>
                <p className="text-gray-700 mb-3">
                  More flexible pension plans that allow you to invest in a wider range of assets.
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Investment Options:</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• Stocks and shares</li>
                    <li>• Commercial property</li>
                    <li>• Investment trusts</li>
                    <li>• Exchange-traded funds (ETFs)</li>
                    <li>• Bonds and gilts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Salary Sacrifice vs Personal Contributions</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Salary Sacrifice</h3>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Advantages:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Saves National Insurance (12% or 2%)</li>
                    <li>• Often employer adds their NI savings</li>
                    <li>• Automatic tax relief</li>
                    <li>• No need to claim relief</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 mt-3 border border-amber-200">
                  <h4 className="font-semibold text-amber-800 mb-1">Considerations:</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Reduces salary for mortgage applications</li>
                    <li>• May affect other benefits</li>
                    <li>• Not all employers offer it</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Contributions</h3>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Advantages:</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Full salary for mortgage applications</li>
                    <li>• More control over timing</li>
                    <li>• Can make lump sum contributions</li>
                    <li>• Available to everyone</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-lg p-3 mt-3 border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-1">Considerations:</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• No National Insurance savings</li>
                    <li>• May need to claim higher rate relief</li>
                    <li>• Requires more administration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pension Planning Tips</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-3">💡 Maximize Your Tax Relief</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Contribute enough to get maximum employer match</li>
                  <li>• Use salary sacrifice if available</li>
                  <li>• Claim higher rate relief through self-assessment</li>
                  <li>• Consider carry forward for large contributions</li>
                  <li>• Plan contributions around tax year end</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📊 Long-term Planning</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Start early to benefit from compound growth</li>
                  <li>• Review your pension regularly</li>
                  <li>• Consider consolidating multiple pensions</li>
                  <li>• Plan for retirement income needs</li>
                  <li>• Seek professional advice for complex situations</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">⚠️ Common Mistakes to Avoid</h3>
                <ul className="text-purple-700 space-y-2">
                  <li>• Not claiming higher rate tax relief</li>
                  <li>• Exceeding annual allowance</li>
                  <li>• Not considering lifetime allowance</li>
                  <li>• Ignoring employer contributions</li>
                  <li>• Not reviewing investment choices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Pension Tax Relief</h2>
            <p className="text-gray-600 mb-6">
              Use our free calculator to see how pension contributions affect your take-home pay
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
            "headline": "Pension Contributions and Tax Relief: Maximize Your Retirement Savings",
            "description": "Understanding annual allowances, tax relief rates, and how pension contributions reduce your tax bill.",
            "datePublished": "2024-01-25T00:00:00.000Z",
            "dateModified": "2024-01-25T00:00:00.000Z",
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
              "@id": "https://salarytakehome.co.uk/blog/pension-contributions-tax-relief"
            }
          })
        }} />
      </article>
    </div>
  );
} 