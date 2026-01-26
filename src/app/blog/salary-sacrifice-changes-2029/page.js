import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Salary Sacrifice Pension Changes from April 2029: What You Need to Know",
  description: "From April 2029, salary sacrifice for pensions will change. Only the first £2,000 of employee pension contributions through salary sacrifice will be exempt from National Insurance.",
  keywords: "salary sacrifice changes 2029, pension salary sacrifice, NIC changes, pension contributions, tax relief, National Insurance",
  openGraph: {
    title: "Salary Sacrifice Pension Changes from April 2029",
    description: "Major changes to salary sacrifice for pensions coming in April 2029. Find out how the £2,000 NIC exemption limit will affect your pension savings.",
    type: "article",
    publishedTime: "2025-11-26T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Sacrifice Pension Changes from April 2029",
    description: "Major changes to salary sacrifice for pensions coming in April 2029. Only £2,000 will be NIC-exempt.",
  },
};

export default function SalarySacrificeChanges2029() {
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
              Pensions
            </span>
            <time className="text-gray-500 text-sm" dateTime="2025-11-26">
              November 26, 2025
            </time>
            <span className="text-gray-500 text-sm">7 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Salary Sacrifice Pension Changes from April 2029: What You Need to Know
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The government has announced significant changes to salary sacrifice arrangements for pensions. From April 2029, only the first £2,000 of employee pension contributions through salary sacrifice will be exempt from National Insurance.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Changes at a Glance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">What's Changing</h3>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Only first £2,000 of salary sacrifice pension contributions exempt from NICs</li>
                  <li>• Contributions over £2,000 subject to both employer and employee NICs</li>
                  <li>• Income Tax relief on pension contributions remains unchanged</li>
                  <li>• Changes take effect from April 2029</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">What's Not Changing</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Salary sacrifice arrangements can continue</li>
                  <li>• Income Tax relief on all pension contributions</li>
                  <li>• Standard pension contribution tax treatment</li>
                  <li>• First £2,000 still fully NIC-exempt</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Changes</h2>

            <p className="text-gray-700 mb-4">
              Currently, when employees contribute to their pension through salary sacrifice, both the employee and employer save on National Insurance Contributions (NICs) on the entire sacrificed amount. This makes salary sacrifice an attractive option for pension savings, particularly for higher earners.
            </p>

            <p className="text-gray-700 mb-4">
              From April 2029, this benefit will be capped. Only the first £2,000 of employee pension contributions through salary sacrifice each year will be exempt from NICs. Any contributions above this threshold will be treated like standard pension contributions - still eligible for Income Tax relief, but now subject to both employer and employee National Insurance.
            </p>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Important:</strong> This change only affects pension contributions made through salary sacrifice arrangements. Standard pension contributions (where you pay from your net salary) and employer-only contributions are not affected by these changes.
              </p>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Will Be Affected?</h2>

            <p className="text-gray-700 mb-4">
              The government states that <strong>most employees will not be impacted</strong> by these changes. The typical employee contributing through salary sacrifice often contributes less than £2,000 per year.
            </p>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">Those Most Affected</h3>
              <p className="text-amber-700 mb-3">
                The changes primarily affect those making larger pension contributions through salary sacrifice, particularly:
              </p>
              <ul className="list-disc list-inside text-amber-700 space-y-2">
                <li>Higher earners maximizing pension tax relief</li>
                <li>Those making substantial additional voluntary contributions (AVCs)</li>
                <li>Employees using salary sacrifice to reduce taxable income</li>
                <li>Those approaching retirement making catch-up contributions</li>
              </ul>
            </div>

            <p className="text-gray-700">
              The government notes that "costs of relief through salary sacrifice relate disproportionately to pension contributions from those on higher incomes." This change aims to create a fairer system by aligning the treatment of larger salary-sacrificed contributions with standard pension contributions.
            </p>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Much Could This Cost You?</h2>

            <p className="text-gray-700 mb-4">
              Let's look at some examples to understand the financial impact:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Annual Salary Sacrifice</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Amount Subject to NICs</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Extra Employee NIC (8%)</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Extra Employer NIC (13.8%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">£2,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">£0</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">£0</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-600">£0</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">£5,000</td>
                    <td className="border border-gray-200 px-4 py-3">£3,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£240</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£414</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">£10,000</td>
                    <td className="border border-gray-200 px-4 py-3">£8,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£640</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£1,104</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3">£20,000</td>
                    <td className="border border-gray-200 px-4 py-3">£18,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£1,440</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£2,484</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3">£60,000</td>
                    <td className="border border-gray-200 px-4 py-3">£58,000</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£4,640</td>
                    <td className="border border-gray-200 px-4 py-3 text-red-600">£8,004</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> These calculations assume the standard employee NIC rate of 8% and employer NIC rate of 13.8%. Actual rates may vary. Income Tax relief on pension contributions is not affected - you still receive tax relief at your marginal rate.
              </p>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What This Means for Employers</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📋</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Salary Sacrifice Can Continue</h3>
                  <p className="text-gray-600">
                    Employers can continue to offer salary sacrifice arrangements. The first £2,000 per employee remains fully NIC-exempt as before.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Payroll Changes Required</h3>
                  <p className="text-gray-600">
                    Employers will need to report total salary sacrifice amounts through their payroll software. HMRC will provide guidance on reporting requirements before April 2029.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Increased Employer Costs</h3>
                  <p className="text-gray-600">
                    Employers will pay NICs on salary sacrifice amounts exceeding £2,000 per employee. This may affect the attractiveness of offering generous salary sacrifice schemes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What This Means for Employees</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h3 className="font-semibold text-gray-800">No Action Required Now</h3>
                  <p className="text-gray-600">
                    Employees don't need to take any immediate action. Your employer will handle the necessary payroll adjustments when the changes come into effect.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Review Your Pension Strategy</h3>
                  <p className="text-gray-600">
                    If you're making substantial salary sacrifice contributions, you may want to review your pension strategy closer to April 2029 to understand the impact on your take-home pay.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h3 className="font-semibold text-gray-800">Pension Savings Still Tax-Efficient</h3>
                  <p className="text-gray-600">
                    Pension contributions remain tax-efficient. You still receive Income Tax relief on all contributions, and the first £2,000 through salary sacrifice remains NIC-free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Timeline</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">2025</span>
                </div>
                <div className="flex-1 pb-4 border-l-2 border-blue-200 pl-4">
                  <h3 className="font-semibold text-gray-800">Announcement</h3>
                  <p className="text-gray-600">Government publishes guidance on the upcoming changes to salary sacrifice for pensions.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full">2026-28</span>
                </div>
                <div className="flex-1 pb-4 border-l-2 border-gray-200 pl-4">
                  <h3 className="font-semibold text-gray-800">Preparation Period</h3>
                  <p className="text-gray-600">Additional guidance published. Employers and payroll providers prepare for implementation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full">Apr 2029</span>
                </div>
                <div className="flex-1 pl-4">
                  <h3 className="font-semibold text-gray-800">Changes Take Effect</h3>
                  <p className="text-gray-600">New rules apply. Only first £2,000 of salary sacrifice pension contributions exempt from NICs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Will I still get tax relief on my pension contributions?</h3>
                <p className="text-gray-600">
                  Yes. Income Tax relief on pension contributions is not affected by these changes. You'll continue to receive tax relief at your marginal rate on all eligible pension contributions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Is this per employer or per person?</h3>
                <p className="text-gray-600">
                  The £2,000 threshold applies per tax year to your total salary sacrifice pension contributions. Further guidance from HMRC is expected to clarify how this works for those with multiple employments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Does this affect employer pension contributions?</h3>
                <p className="text-gray-600">
                  Employer contributions that are not part of a salary sacrifice arrangement are not affected. Only employee contributions made through salary sacrifice above £2,000 will be subject to NICs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Should I stop contributing to my pension through salary sacrifice?</h3>
                <p className="text-gray-600">
                  Not necessarily. Salary sacrifice still offers benefits: the first £2,000 remains NIC-free, and all contributions receive Income Tax relief. Speak to a financial adviser about your specific circumstances.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">What about other salary sacrifice benefits?</h3>
                <p className="text-gray-600">
                  These changes specifically target pension contributions. Other salary sacrifice benefits (cycle to work, electric vehicles, childcare vouchers where still available) are not affected by this announcement.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Calculate Your Take-Home Pay</h2>
            <p className="text-gray-700 mb-6">
              Use our free UK tax calculator to understand how salary sacrifice and pension contributions affect your take-home pay today.
            </p>
            <Link
              href="/take-home-pay-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Try Calculator →
            </Link>
          </div>

          <div className="glass-light rounded-2xl p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-gray-700 mb-4">
              The government has stated that additional guidance will be published on GOV.UK before the April 2029 implementation date. Bookmark this page and check back for updates.
            </p>
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> This guide is for informational purposes only and should not be considered financial advice.
              Always consult with a qualified financial adviser for personalized guidance. Information based on{" "}
              <a
                href="https://www.gov.uk/government/publications/changes-to-salary-sacrifice-for-pensions-from-april-2029/changes-to-salary-sacrifice-for-pensions-from-april-2029"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                GOV.UK guidance
              </a>{" "}
              published 26 November 2025.
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
