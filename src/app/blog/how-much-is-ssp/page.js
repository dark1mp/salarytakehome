import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "How Much Is SSP Per Week? UK Statutory Sick Pay Rates 2026/27",
  description: "How much is SSP? £123.25 per week in 2026/27 (or 80% of earnings if lower). See SSP rates by tax year, daily rates, worked examples at every income level, and who qualifies.",
  keywords: "how much is ssp, ssp per week, ssp rate 2026/27, ssp rate 2025/26, how much is ssp per week, statutory sick pay rate, ssp weekly rate, ssp calculator, sick pay per week, ssp rate",
  openGraph: {
    title: "How Much Is SSP Per Week? UK Statutory Sick Pay Rates 2026/27",
    description: "SSP is £123.25/week in 2026/27 (or 80% of earnings if lower). Full rate history, daily breakdowns, and worked examples.",
    type: "article",
    publishedTime: "2026-04-16T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SalaryTakeHome Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Much Is SSP Per Week? UK Rates 2026/27",
    description: "SSP is £123.25/week in 2026/27. See rates by year, daily breakdowns, and who qualifies.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/how-much-is-ssp",
  },
};

export default function HowMuchIsSSP() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "How Much Is SSP?" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                Salary Guide
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-04-16">
                April 16, 2026
              </time>
              <span className="text-gray-500 text-sm">8 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: April 2026 &middot; Reflects 2026/27 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How Much Is SSP? UK Statutory Sick Pay Rates Per Week
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A complete guide to how much Statutory Sick Pay you&apos;ll receive per week, how the daily rate is calculated, and how SSP rates have changed over the last four tax years.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* Quick Answer */}
            <div className="rounded-2xl p-8 mb-8 bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Answer: How Much Is SSP Per Week?</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold mb-2">&pound;123.25</div>
                  <p className="text-white/90 text-sm">Maximum SSP per week (2026/27)</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold mb-2">&pound;24.65</div>
                  <p className="text-white/90 text-sm">Maximum SSP per day (5-day week)</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold mb-2">28 weeks</div>
                  <p className="text-white/90 text-sm">Maximum duration of SSP</p>
                </div>
              </div>
              <p className="text-white/90 text-sm mt-4 text-center">
                From April 2026, SSP is 80% of your average weekly earnings or &pound;123.25 &mdash; whichever is lower.
              </p>
            </div>

            {/* SSP Rates by Tax Year */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SSP Rates by Tax Year</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                SSP rates are updated each April. Before 2026/27, SSP was a simple flat rate &mdash; every eligible employee received the same amount regardless of earnings. From April 2026, it became percentage-based (80% of earnings, capped).
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Tax Year</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">SSP Per Week</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">SSP Per Day (5-day)</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Rate Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 bg-green-50">
                      <td className="py-3 px-4 text-gray-900 font-semibold">2026/27</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;123.25 (max)</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;24.65 (max)</td>
                      <td className="py-3 px-4 text-gray-700">80% of earnings or cap</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900 font-semibold">2025/26</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;118.75</td>
                      <td className="py-3 px-4 text-gray-900">&pound;23.75</td>
                      <td className="py-3 px-4 text-gray-700">Flat rate</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900 font-semibold">2024/25</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;116.75</td>
                      <td className="py-3 px-4 text-gray-900">&pound;23.35</td>
                      <td className="py-3 px-4 text-gray-700">Flat rate</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900 font-semibold">2023/24</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;109.40</td>
                      <td className="py-3 px-4 text-gray-900">&pound;21.88</td>
                      <td className="py-3 px-4 text-gray-700">Flat rate</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-900 font-semibold">2022/23</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;99.35</td>
                      <td className="py-3 px-4 text-gray-900">&pound;19.87</td>
                      <td className="py-3 px-4 text-gray-700">Flat rate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                The 2026/27 rate is the first year SSP uses a percentage-based formula. For workers earning above roughly &pound;154/week, the cap of &pound;123.25 applies. For full details on the rule changes, see our guide to{' '}
                <Link href="/blog/ssp-changes-2026" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  SSP changes from April 2026
                </Link>.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* How SSP Is Calculated Per Day */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How SSP Is Calculated Per Day</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                SSP is paid for &ldquo;qualifying days&rdquo; &mdash; the days you would normally work. Your employer divides the weekly SSP rate by the number of qualifying days in a week to get your daily rate.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Working Pattern</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Qualifying Days</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Daily SSP Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Full-time (5 days)</td>
                      <td className="py-3 px-4 text-gray-900">5</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;24.65</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">4 days per week</td>
                      <td className="py-3 px-4 text-gray-900">4</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;30.81</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">3 days per week</td>
                      <td className="py-3 px-4 text-gray-900">3</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;41.08</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">6 days per week</td>
                      <td className="py-3 px-4 text-gray-900">6</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;20.54</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Regardless of how many days you work, the total SSP you receive over a full week is the same (&pound;123.25 maximum). Part-time workers get a higher daily rate but fewer qualifying days. From April 2026, SSP is paid from your first qualifying day of absence &mdash; the old 3-day waiting period has been removed.
              </p>
            </div>

            {/* SSP at Different Earnings */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much SSP at Different Earnings Levels</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                From April 2026, your SSP rate depends on your average weekly earnings. If 80% of your earnings is less than &pound;123.25, you receive the lower amount. Here&apos;s what SSP looks like at different income levels:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Weekly Earnings</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Approx. Annual Salary</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">80% of Earnings</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">SSP Per Week</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">% of Normal Pay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;80</td>
                      <td className="py-3 px-4 text-gray-500">&pound;4,160</td>
                      <td className="py-3 px-4 text-gray-900">&pound;64.00</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">&pound;64.00</td>
                      <td className="py-3 px-4 text-gray-700">80%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;125</td>
                      <td className="py-3 px-4 text-gray-500">&pound;6,500</td>
                      <td className="py-3 px-4 text-gray-900">&pound;100.00</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">&pound;100.00</td>
                      <td className="py-3 px-4 text-gray-700">80%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;154</td>
                      <td className="py-3 px-4 text-gray-500">&pound;8,008</td>
                      <td className="py-3 px-4 text-gray-900">&pound;123.20</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">&pound;123.20</td>
                      <td className="py-3 px-4 text-gray-700">80%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;200</td>
                      <td className="py-3 px-4 text-gray-500">&pound;10,400</td>
                      <td className="py-3 px-4 text-gray-900">&pound;160.00</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">&pound;123.25 (capped)</td>
                      <td className="py-3 px-4 text-gray-700">62%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;400</td>
                      <td className="py-3 px-4 text-gray-500">&pound;20,800</td>
                      <td className="py-3 px-4 text-gray-900">&pound;320.00</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">&pound;123.25 (capped)</td>
                      <td className="py-3 px-4 text-gray-700">31%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;577</td>
                      <td className="py-3 px-4 text-gray-500">&pound;30,000</td>
                      <td className="py-3 px-4 text-gray-900">&pound;461.60</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">&pound;123.25 (capped)</td>
                      <td className="py-3 px-4 text-gray-700">21%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;962</td>
                      <td className="py-3 px-4 text-gray-500">&pound;50,000</td>
                      <td className="py-3 px-4 text-gray-900">&pound;769.60</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">&pound;123.25 (capped)</td>
                      <td className="py-3 px-4 text-gray-700">13%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                For most full-time workers, SSP replaces only a fraction of normal income. If your employer offers a contractual sick pay scheme, check whether it tops up SSP to your full salary. Use our{' '}
                <Link href="/sick-pay" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  SSP calculator
                </Link>{' '}
                to see your exact entitlement.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* SSP vs Employer Sick Pay */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SSP vs Employer Sick Pay: What&apos;s the Difference?</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                SSP is the legal minimum your employer must pay. Many employers offer enhanced sick pay schemes that are significantly more generous:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Feature</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Statutory Sick Pay</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Typical Employer Scheme</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Weekly rate</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;123.25 (max)</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">Full salary (often 3&ndash;6 months)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Duration</td>
                      <td className="py-3 px-4 text-gray-900">28 weeks</td>
                      <td className="py-3 px-4 text-gray-900">Varies (often full pay then half pay)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Starts</td>
                      <td className="py-3 px-4 text-gray-900">Day 1 (from April 2026)</td>
                      <td className="py-3 px-4 text-gray-900">Usually day 1</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Who provides</td>
                      <td className="py-3 px-4 text-gray-900">Required by law</td>
                      <td className="py-3 px-4 text-gray-900">Discretionary benefit</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">NHS example</td>
                      <td className="py-3 px-4 text-gray-900">&pound;123.25/wk</td>
                      <td className="py-3 px-4 text-gray-900">Full pay 6 months, half pay 6 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your employment contract or staff handbook will detail your employer&apos;s sick pay policy. Contractual sick pay must be at least equal to SSP &mdash; your employer cannot pay you less than the statutory rate.
              </p>
            </div>

            {/* Who Qualifies */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Qualifies for SSP?</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                From April 2026, SSP eligibility has been expanded significantly. To qualify you must:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 text-base leading-relaxed mb-4">
                <li className="pl-2"><strong>Be an employee</strong> (not self-employed)</li>
                <li className="pl-2"><strong>Be off sick for at least 1 qualifying day</strong> (previously had to be 4+ days including 3 waiting days)</li>
                <li className="pl-2"><strong>Notify your employer</strong> within their specified timeframe</li>
                <li className="pl-2"><strong>Provide a fit note</strong> from your GP after 7 calendar days of absence</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong>What changed in 2026/27:</strong> The Lower Earnings Limit (&pound;125/week) was abolished, so all employees now qualify regardless of income. The 3-day waiting period was also removed, meaning SSP is payable from day one. For full details, see our{' '}
                <Link href="/blog/ssp-changes-2026" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  SSP changes 2026 guide
                </Link>.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                For the official eligibility criteria, see{' '}
                <a href="https://www.gov.uk/statutory-sick-pay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  GOV.UK Statutory Sick Pay
                </a>.
              </p>
            </div>

            {/* What Happens When SSP Runs Out */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens When SSP Runs Out?</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                SSP is paid for a maximum of 28 weeks (approximately 6.5 months). If you&apos;re still too unwell to work after that, your options include:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 text-base leading-relaxed mb-4">
                <li className="pl-2"><strong>Employment and Support Allowance (ESA):</strong> You may qualify for contributory ESA based on your National Insurance record</li>
                <li className="pl-2"><strong>Universal Credit:</strong> If your income and savings are below the thresholds</li>
                <li className="pl-2"><strong>Employer sick pay:</strong> Some employers continue paying beyond 28 weeks under their own scheme</li>
                <li className="pl-2"><strong>Income protection insurance:</strong> If you have a policy, it may cover long-term sickness</li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your employer must give you form SSP1 before your SSP ends, which you can use to apply for ESA. For more about what you&apos;re entitled to, see the{' '}
                <a href="https://www.gov.uk/employment-support-allowance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  GOV.UK ESA guidance
                </a>.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* Is SSP Taxable */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Is SSP Taxable?</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Yes. SSP is treated as earnings and is subject to income tax and National Insurance, just like your normal wages. Your employer deducts tax through PAYE as usual.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                However, at &pound;123.25 per week (&pound;6,409 annualised), SSP alone is well below the &pound;12,570 Personal Allowance. So if SSP is your only income during sickness, you&apos;re unlikely to pay any income tax on it. You can check what you&apos;d take home using our{' '}
                <Link href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  take-home pay calculator
                </Link>.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-8 mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-3">Calculate Your SSP Entitlement</h2>
              <p className="text-white/90 mb-6 text-lg">
                Enter your average weekly earnings and days off sick to see exactly how much SSP you&apos;ll receive.
              </p>
              <Link
                href="/sick-pay"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-md"
              >
                Open SSP Calculator
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute financial or legal advice. SSP rules can change &mdash; always check the{' '}
                <a href="https://www.gov.uk/statutory-sick-pay" target="_blank" rel="noopener noreferrer" className="text-amber-900 underline font-semibold">
                  official GOV.UK guidance
                </a>{' '}
                for the most up-to-date information. If you believe your employer is not paying SSP correctly, contact{' '}
                <a href="https://www.gov.uk/government/organisations/hm-revenue-customs/contact/statutory-payment-dispute-team" target="_blank" rel="noopener noreferrer" className="text-amber-900 underline font-semibold">
                  HMRC&apos;s Statutory Payment Dispute Team
                </a>.
              </p>
            </div>

          </div>

          {/* Related Articles */}
          <RelatedArticles articles={[
            { href: "/blog/ssp-changes-2026", category: "Tax Updates", title: "SSP Changes 2026: New Sick Pay Rules", description: "Everything changing about Statutory Sick Pay from April 2026." },
            { href: "/blog/uk-tax-changes-2026-27", category: "Tax Updates", title: "UK Tax Changes 2026/27", description: "Complete guide to tax rates, thresholds, and changes this year." },
            { href: "/blog/maternity-pay-guide", category: "Salary Guide", title: "Maternity Pay Guide 2026", description: "SMP rates, eligibility, and how to plan your finances." },
            { href: "/blog/maximize-take-home-pay-2024", category: "Money Tips", title: "Maximise Your Take-Home Pay", description: "Proven strategies to keep more of your salary." },
          ]} />

        </article>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "How Much Is SSP? UK Statutory Sick Pay Rates Per Week",
              "description": "How much is SSP? £123.25 per week in 2026/27 (or 80% of earnings if lower). See SSP rates by tax year, daily rates, worked examples at every income level, and who qualifies.",
              "datePublished": "2026-04-16T00:00:00.000Z",
              "dateModified": "2026-04-16T00:00:00.000Z",
              "author": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "publisher": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "mainEntityOfPage": "https://www.salarytakehome.co.uk/blog/how-much-is-ssp",
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much is SSP per week in 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "SSP is £123.25 per week in 2026/27, or 80% of your average weekly earnings if that is lower. This is the maximum — if you earn less than approximately £154 per week, you'll receive 80% of your earnings instead. The daily rate for a 5-day worker is £24.65." }
                },
                {
                  "@type": "Question",
                  "name": "What was the SSP rate in 2025/26?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The SSP rate in 2025/26 was £118.75 per week (a flat rate for all eligible employees). To qualify, you needed to earn at least £125 per week (the Lower Earnings Limit) and the first 3 days were unpaid waiting days. Both of these restrictions were removed from April 2026." }
                },
                {
                  "@type": "Question",
                  "name": "How much is SSP per day?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The SSP daily rate depends on how many qualifying days (days you normally work) you have per week. For a 5-day worker, the maximum is £24.65 per day (£123.25 ÷ 5). For a 3-day worker, it's £41.08 per day. The total weekly amount is the same regardless of working pattern." }
                },
                {
                  "@type": "Question",
                  "name": "Do I pay tax on SSP?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, SSP is subject to income tax and National Insurance just like normal wages. However, at £123.25 per week (£6,409 annualised), SSP alone is well below the £12,570 Personal Allowance, so if it's your only income you're unlikely to pay any tax on it." }
                },
                {
                  "@type": "Question",
                  "name": "How long can you get SSP for?",
                  "acceptedAnswer": { "@type": "Answer", "text": "You can receive SSP for up to 28 weeks (approximately 6.5 months). From April 2026, SSP is payable from day one of sickness — there are no waiting days. After 28 weeks, you may be able to claim Employment and Support Allowance (ESA) or Universal Credit instead." }
                }
              ]
            }
          ]
        }) }}
      />
    </LayoutWrapper>
  );
}
