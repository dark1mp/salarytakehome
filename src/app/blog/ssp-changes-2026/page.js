import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "SSP Changes 2026: What the New Sick Pay Rules Mean for You",
  description: "From April 2026, Statutory Sick Pay changes dramatically. SSP from day 1, no earnings limit, and a new percentage-based rate. Here's what it means for your pay.",
  keywords: "ssp changes 2026, statutory sick pay 2026, sick pay from day 1, ssp rate 2026, new sick pay rules, ssp uk changes, lower earnings limit removed",
  openGraph: {
    title: "SSP Changes 2026: What the New Sick Pay Rules Mean for You",
    description: "Major SSP reforms from April 2026 — SSP from day 1, no earnings limit, new rates.",
    type: "article",
    publishedTime: "2026-03-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SalaryTakeHome Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSP Changes 2026: New Sick Pay Rules",
    description: "Everything changing about Statutory Sick Pay from April 2026.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/ssp-changes-2026",
  },
};

export default function SSPChanges2026() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "SSP Changes 2026" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                Tax Updates
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-03-27">
                March 27, 2026
              </time>
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              SSP Changes 2026: What the New Sick Pay Rules Mean for You
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From April 2026, Statutory Sick Pay is getting a major overhaul. Here&apos;s everything you need to know about the new rules and how they affect your entitlement.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* Quick Summary */}
            <div className="rounded-2xl p-8 mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Summary: What&apos;s Changing</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold mb-2">Day 1</div>
                  <p className="text-white/90 text-sm">SSP from day 1 (no waiting days)</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold mb-2">No Limit</div>
                  <p className="text-white/90 text-sm">No earnings limit (all employees qualify)</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold mb-2">80%</div>
                  <p className="text-white/90 text-sm">80% of pay or &pound;123.25/wk cap</p>
                </div>
              </div>
            </div>

            {/* Current SSP Rules */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Current SSP Rules (2025/26)</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Before we look at what&apos;s changing, here&apos;s how Statutory Sick Pay works right now under the 2025/26 rules:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Feature</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Current Rules</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Weekly rate</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;118.75</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Minimum earnings</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;125/wk (Lower Earnings Limit)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Waiting period</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">3 days (unpaid)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Duration</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">Up to 28 weeks</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Who qualifies</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">Employees earning above LEL only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                For full details on current eligibility, see the official{' '}
                <a href="https://www.gov.uk/statutory-sick-pay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  GOV.UK Statutory Sick Pay
                </a>{' '}guidance.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* What's Changing */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Changing from April 2026</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                The Employment Rights Bill introduces the most significant changes to SSP in decades. Here&apos;s a side-by-side comparison of the old and new rules:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Feature</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Current (2025/26)</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">New (2026/27)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Waiting period</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">3 days (unpaid)</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Paid from day 1</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Earnings limit</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">&pound;125/wk minimum</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">Removed (all employees)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Rate</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">Flat &pound;118.75/wk</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">80% of earnings or &pound;123.25 (lower)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Who qualifies</td>
                      <td className="py-3 px-4 text-red-600 font-semibold">Above LEL only</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">All employees</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                These changes mean that around 1.3 million low-paid workers who previously had no access to SSP will now be covered. The shift from a flat rate to a percentage-based system also ensures lower earners receive a payment proportional to their income, rather than potentially more than they would normally earn.
              </p>
            </div>

            {/* Who Benefits Most */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Benefits Most from the Changes?</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                While the new rules are better for almost everyone, certain groups stand to gain the most:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 text-base leading-relaxed">
                <li className="pl-2">
                  <strong>Low earners (below &pound;125/wk):</strong> Previously excluded entirely from SSP, these workers will now qualify and receive 80% of their earnings from day one of sickness.
                </li>
                <li className="pl-2">
                  <strong>Part-time workers:</strong> Many part-time employees fall below the current Lower Earnings Limit. The removal of this threshold brings them into the safety net.
                </li>
                <li className="pl-2">
                  <strong>Zero-hours contract workers:</strong> Workers on variable-hours contracts who sometimes dip below the earnings threshold will now always be covered.
                </li>
                <li className="pl-2">
                  <strong>Those with short illnesses:</strong> Under current rules, the 3-day waiting period means a week off sick only yields 2 days of SSP. From April 2026, you&apos;ll be paid for all 5 qualifying days.
                </li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed mt-4">
                Use our{' '}
                <Link href="/sick-pay" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  SSP calculator
                </Link>{' '}
                to toggle between the current and new rules and see exactly how the changes affect your entitlement.
              </p>
            </div>

            {/* How Much SSP */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much SSP Will You Get Under New Rules?</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Under the new system, your SSP rate is 80% of your average weekly earnings, capped at &pound;123.25 per week. Here&apos;s how it works at different income levels:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Weekly Earnings</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">80% of Earnings</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">SSP Rate (lower of the two)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;100</td>
                      <td className="py-3 px-4 text-gray-900">&pound;80</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">&pound;80.00</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;125</td>
                      <td className="py-3 px-4 text-gray-900">&pound;100</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">&pound;100.00</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;150</td>
                      <td className="py-3 px-4 text-gray-900">&pound;120</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">&pound;120.00</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;200</td>
                      <td className="py-3 px-4 text-gray-900">&pound;160</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">&pound;123.25 (capped)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">&pound;300</td>
                      <td className="py-3 px-4 text-gray-900">&pound;240</td>
                      <td className="py-3 px-4 text-orange-600 font-semibold">&pound;123.25 (capped)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                The cap at &pound;123.25 means that anyone earning more than approximately &pound;154/week will receive the maximum rate. For most full-time workers, the weekly SSP amount will be higher than the current flat rate of &pound;118.75.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* What This Means for Employers */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What This Means for Employers</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Employers will need to adjust their payroll systems and budgets to accommodate the new rules. Key considerations include:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-3 text-gray-700 text-base leading-relaxed mb-4">
                <li className="pl-2">
                  <strong>Higher costs for short absences:</strong> Paying from day 1 instead of day 4 increases the cost of every sickness absence.
                </li>
                <li className="pl-2">
                  <strong>More employees covered:</strong> Workers previously below the LEL will now need to be included in SSP calculations.
                </li>
                <li className="pl-2">
                  <strong>Variable rate calculations:</strong> Payroll systems need to handle the 80% calculation rather than a simple flat rate.
                </li>
                <li className="pl-2">
                  <strong>Existing sick pay schemes:</strong> Employers with enhanced sick pay will need to review whether their schemes already exceed the new SSP rates.
                </li>
              </ul>
              <p className="text-gray-700 text-sm leading-relaxed">
                For official employer guidance, visit{' '}
                <a href="https://www.gov.uk/employers-sick-pay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  GOV.UK Employers and Sick Pay
                </a>.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* What to Do If You're Off Sick */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do If You&apos;re Off Sick</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Whether under current or new rules, here are the steps to make sure you receive the SSP you&apos;re entitled to:
              </p>
              <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-700 text-base leading-relaxed mb-4">
                <li className="pl-2">
                  <strong>Notify your employer promptly:</strong> Most employers require you to report sickness within a set timeframe (often by the end of your first day off). Check your contract or staff handbook for specific rules.
                </li>
                <li className="pl-2">
                  <strong>Get a fit note after 7 days:</strong> For absences longer than 7 calendar days, you&apos;ll need a fit note (previously called a sick note) from your GP or hospital doctor.
                </li>
                <li className="pl-2">
                  <strong>Check your payslip:</strong> Make sure SSP appears on your payslip. It should be clearly shown as a separate line item, and tax and NI will be deducted as normal.
                </li>
              </ol>
              <p className="text-gray-700 text-sm leading-relaxed">
                For more on your rights and the claims process, visit{' '}
                <a href="https://www.gov.uk/statutory-sick-pay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                  GOV.UK Statutory Sick Pay
                </a>.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl p-8 mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-3">Calculate Your SSP Entitlement</h2>
              <p className="text-white/90 mb-6 text-lg">
                Use our free calculator to see exactly how much Statutory Sick Pay you&apos;re entitled to under current and new rules.
              </p>
              <Link
                href="/sick-pay"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-md"
              >
                Open SSP Calculator
              </Link>
            </div>

          </div>

          {/* Related Articles */}
          <RelatedArticles articles={[
            { href: "/blog/how-much-is-ssp", category: "Salary Guide", title: "How Much Is SSP Per Week?", description: "SSP rates by tax year, daily breakdowns, and worked examples at every income level." },
            { href: "/blog/uk-tax-changes-2026-27", category: "Tax Updates", title: "UK Tax Changes 2026/27", description: "Complete guide to the latest tax rates, thresholds, and changes." },
            { href: "/blog/maternity-pay-guide", category: "Salary Guide", title: "Maternity Pay Guide 2026", description: "SMP rates, eligibility, and how to plan your finances." },
            { href: "/blog/maximize-take-home-pay-2024", category: "Money Tips", title: "How to Maximise Your Take-Home Pay", description: "Practical strategies to keep more of your salary." },
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
              "headline": "SSP Changes 2026: What the New Sick Pay Rules Mean for You",
              "description": "From April 2026, Statutory Sick Pay changes dramatically. SSP from day 1, no earnings limit, and a new percentage-based rate.",
              "datePublished": "2026-03-27T00:00:00.000Z",
              "dateModified": "2026-03-27T00:00:00.000Z",
              "author": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "publisher": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "mainEntityOfPage": "https://www.salarytakehome.co.uk/blog/ssp-changes-2026",
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "When do the new SSP rules come into effect?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The new Statutory Sick Pay rules take effect from April 2026 as part of the Employment Rights Bill. The key changes include SSP from day 1 (no waiting days), removal of the Lower Earnings Limit, and a new percentage-based rate of 80% of earnings capped at £123.25 per week." }
                },
                {
                  "@type": "Question",
                  "name": "Will I get more SSP under the new 2026 rules?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most employees will benefit. If you earn above approximately £154/week, you'll receive £123.25/week (up from £118.75). If you earn below £125/week, you'll now qualify for SSP for the first time. Everyone benefits from SSP starting on day 1 instead of day 4." }
                },
                {
                  "@type": "Question",
                  "name": "Do I still need to earn a minimum amount to get SSP from April 2026?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. From April 2026, the Lower Earnings Limit (currently £125/week) is being removed entirely. All employees will qualify for SSP regardless of how much they earn, receiving 80% of their average weekly earnings up to the £123.25 weekly cap." }
                },
                {
                  "@type": "Question",
                  "name": "How is the new SSP rate calculated?",
                  "acceptedAnswer": { "@type": "Answer", "text": "From April 2026, SSP is calculated as 80% of your average weekly earnings, capped at £123.25 per week. You receive whichever is lower: 80% of your earnings or £123.25. For example, if you earn £150/week, 80% is £120, so you'd receive £120/week in SSP." }
                }
              ]
            }
          ]
        }) }}
      />
    </LayoutWrapper>
  );
}
