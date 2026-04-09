import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "£100,000 After Tax UK 2026/27 — Take-Home Pay on a £100k Salary",
  description: "Find out exactly how much you take home from a £100,000 salary in 2026/27. Full breakdown of income tax at basic and higher rates, National Insurance, and the £100k tax trap explained.",
  keywords: "100000 salary, 100k salary, take home pay 100000, 100k after tax, salary calculator 100000, 100k tax trap, personal allowance taper",
  openGraph: {
    title: "£100,000 After Tax UK 2026/27 — £100k Take-Home Pay",
    description: "Complete breakdown of take-home pay on a £100k salary including the Personal Allowance taper trap.",
    type: "article",
    publishedTime: "2026-04-09T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome Calculator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "£100,000 After Tax UK 2026/27 — £100k Take-Home Pay",
    description: "How much do you take home from a £100k salary? Full breakdown including the £100k tax trap.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/100k-salary-take-home",
  },
};

export default function Salary100k() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "£100,000 Salary Take-Home Pay in 2026/27" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium rounded-full">
              Salary Guide
            </span>
            <time className="text-gray-500 text-sm" dateTime="2026-04-09">
              April 9, 2026
            </time>
            <span className="text-gray-500 text-sm">5 min read</span>
          </div>
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: April 2026 &middot; Reflects 2026/27 tax year</p>
          <AdUnit slot="1586479879" hideOnMobile />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            £100,000 Salary Take-Home Pay in 2026/27
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete breakdown of what you&apos;ll actually receive from a £100k salary — and why earning even £1 more triggers the tax trap
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: £100,000 Salary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Annual Take-Home</p>
              <p className="text-3xl font-bold">£68,557</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-3xl font-bold">£5,713</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Weekly Take-Home</p>
              <p className="text-3xl font-bold">£1,318</p>
            </div>
          </div>
        </div>

        {/* £100k Tax Trap Warning */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8 mb-8 border-2 border-red-300">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-red-600 text-2xl font-bold">!</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-red-900 mb-3">The £100k Tax Trap: 60% Effective Marginal Rate</h2>
              <p className="text-red-800 leading-relaxed mb-4">
                At exactly £100,000, your Personal Allowance is still intact. But earning even <strong>£1 over £100,000</strong> triggers the Personal Allowance taper:
              </p>
              <ul className="text-red-800 space-y-2 mb-4">
                <li>• For every <strong>£2 earned over £100,000</strong>, you lose £1 of your £12,570 Personal Allowance</li>
                <li>• This creates an effective <strong>60% marginal tax rate</strong> on income between £100,001 and £125,140</li>
                <li>• At £125,140, your Personal Allowance is completely gone</li>
                <li>• A £5,000 pay rise to £105,000 would only increase take-home by roughly <strong>£1,900</strong> — not £2,900 as you might expect</li>
              </ul>
              <div className="bg-red-100 rounded-xl p-4 mb-4">
                <p className="text-red-900 text-sm font-semibold mb-2">Why 60%?</p>
                <p className="text-red-900 text-sm">
                  40% income tax + 20% effective tax from losing £1 PA for every £2 earned = 60% marginal rate. Add 2% NI and it&apos;s actually 62%.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-900 text-sm font-semibold mb-2">How to Avoid the Trap</p>
                <p className="text-green-800 text-sm">
                  Make pension contributions or use salary sacrifice to keep your <strong>adjusted net income</strong> at or below £100,000. This preserves your full Personal Allowance and avoids the 60% marginal rate. <Link href="/blog/100k-tax-trap" className="text-green-900 underline font-semibold">Read our full guide to the £100k tax trap</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              If you&apos;re earning £100,000 a year in the UK, you&apos;re in the top 2% of earners. At exactly £100,000, you still have your full Personal Allowance — but this is the last salary level where that&apos;s the case. Understanding the tax trap above this threshold is essential.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After income tax and National Insurance, you&apos;ll take home approximately <strong>£68,557 per year</strong>, or <strong>£5,713 per month</strong>. That means you&apos;re keeping about 68.6% of your gross salary, with an effective tax rate of 31.4%.
            </p>
          </div>

          {/* Full Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Tax Breakdown for £100,000</h2>

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
                    <td className="py-3 text-gray-900 text-right">£100,000</td>
                    <td className="py-3 text-gray-900 text-right">£8,333</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Personal Allowance</td>
                    <td className="py-3 text-gray-700 text-right">£12,570</td>
                    <td className="py-3 text-gray-700 text-right">£1,048</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Taxable Income</td>
                    <td className="py-3 text-gray-700 text-right">£87,430</td>
                    <td className="py-3 text-gray-700 text-right">£7,286</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-red-700">Income Tax (Basic Rate 20%)</td>
                    <td className="py-3 text-red-700 text-right">-£7,540</td>
                    <td className="py-3 text-red-700 text-right">-£628</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-100">
                    <td className="py-3 text-red-800">Income Tax (Higher Rate 40%)</td>
                    <td className="py-3 text-red-800 text-right">-£19,892</td>
                    <td className="py-3 text-red-800 text-right">-£1,658</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (8%)</td>
                    <td className="py-3 text-orange-700 text-right">-£3,016</td>
                    <td className="py-3 text-orange-700 text-right">-£251</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (2% above threshold)</td>
                    <td className="py-3 text-orange-700 text-right">-£995</td>
                    <td className="py-3 text-orange-700 text-right">-£83</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 text-green-700 font-bold">Take-Home Pay</td>
                    <td className="py-3 text-green-700 font-bold text-right">£68,557</td>
                    <td className="py-3 text-green-700 font-bold text-right">£5,713</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* How Tax is Calculated */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Your Tax is Calculated</h2>

            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">Step 1: Personal Allowance</h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  The first £12,570 of your income is tax-free. At exactly £100,000, your Personal Allowance is still intact — but earning any more will start to reduce it.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-3">Step 2: Basic Rate Income Tax (20%)</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-2">
                  Income from £12,571 to £50,270 is taxed at 20%.
                </p>
                <p className="text-amber-700 text-sm">
                  £50,270 - £12,570 = £37,700<br />
                  £37,700 × 20% = <strong>£7,540 basic rate tax</strong>
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">Step 3: Higher Rate Income Tax (40%)</h3>
                <p className="text-red-700 text-sm leading-relaxed mb-2">
                  Income above £50,270 is taxed at 40%.
                </p>
                <p className="text-red-700 text-sm">
                  £100,000 - £50,270 = £49,730<br />
                  £49,730 × 40% = <strong>£19,892 higher rate tax</strong>
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">Step 4: National Insurance</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  NI is 8% on earnings between £12,570 and £50,270, then 2% above that.
                </p>
                <p className="text-orange-700 text-sm">
                  £37,700 × 8% = £3,016<br />
                  £49,730 × 2% = £995<br />
                  <strong>Total NI: £4,011</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Tax Band Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Income by Tax Band</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600">Tax-Free</div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                  <div className="bg-green-500 h-8 rounded-full" style={{width: '13%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£12,570 (13%)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600">Basic (20%)</div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                  <div className="bg-amber-500 h-8 rounded-full" style={{width: '38%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£37,700 (38%)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600">Higher (40%)</div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                  <div className="bg-red-500 h-8 rounded-full" style={{width: '50%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£49,730 (50%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* With Student Loan */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">£100k with Student Loan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have a student loan, your take-home pay will be lower. Here&apos;s how much you&apos;d repay on each plan:
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 1 (Pre-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £26,900 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £6,579</p>
                <p className="text-purple-900 font-semibold">Take-home: £61,978/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2 (Post-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £29,385 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £6,355</p>
                <p className="text-purple-900 font-semibold">Take-home: £62,202/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 4 (Scotland)</h3>
                <p className="text-purple-700 text-sm">Threshold: £33,795 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £5,958</p>
                <p className="text-purple-900 font-semibold">Take-home: £62,599/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 5 (Post-2023)</h3>
                <p className="text-purple-700 text-sm">Threshold: £25,000 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £6,750</p>
                <p className="text-purple-900 font-semibold">Take-home: £61,807/year</p>
              </div>
            </div>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Comparison */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does £100k Compare?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £100,000, you&apos;re earning:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>In the top 2% of UK earners</strong></li>
              <li>• Over three times the UK median salary</li>
              <li>• An effective tax rate of 31.4%</li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Salary Comparisons</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-600">£95,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£65,657/year</p>
                </div>
                <div>
                  <p className="text-blue-600">£105,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">~£70,457/year</p>
                  <p className="text-blue-500 text-xs">Only ~£1,900 more due to 60% trap</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              See all salary breakdowns from <Link href="/salary-breakdown" className="text-blue-600 hover:underline">&pound;20k to &pound;100k</Link>.
            </p>
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
                  <h3 className="font-semibold text-gray-900">Pension contributions = 40% tax relief (or 60% above £100k)</h3>
                  <p className="text-gray-600 text-sm">As a higher rate taxpayer, you get 40% tax relief on pension contributions. If your income goes above £100k, pension contributions that bring you back below the threshold effectively get 60% relief because they restore your Personal Allowance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salary sacrifice to stay at or below £100k</h3>
                  <p className="text-gray-600 text-sm">If bonuses or pay rises push you above £100k, salary sacrifice into pension is the most tax-efficient strategy available. It reduces your adjusted net income, preserves your Personal Allowance, and saves NI too.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Charitable giving via Gift Aid</h3>
                  <p className="text-gray-600 text-sm">Gift Aid donations reduce your adjusted net income. As a 40% taxpayer, you can claim back the difference between the higher rate (40%) and basic rate (20%) through Self Assessment. Donations can also help you stay below the £100k taper threshold.</p>
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
            "@graph": [
              {
                "@type": "Article",
                "headline": "£100,000 After Tax UK 2026/27 — Take-Home Pay on a £100k Salary",
                "description": "Complete breakdown of what you'll actually receive from a £100k salary after income tax and National Insurance, including the £100k tax trap explained.",
                "datePublished": "2026-04-09T00:00:00.000Z",
                "dateModified": "2026-04-09T00:00:00.000Z",
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
                  "@id": "https://www.salarytakehome.co.uk/blog/100k-salary-take-home"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much is £100,000 after tax in the UK?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On a £100,000 salary in 2026/27, you'll take home approximately £68,557 per year or £5,713 per month after income tax and National Insurance deductions. At exactly £100,000, your full Personal Allowance is still intact."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What happens if I earn over £100,000?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Once you earn over £100,000, your Personal Allowance is reduced by £1 for every £2 of income above £100,000. This creates an effective 60% marginal tax rate on income between £100,001 and £125,140. At £125,140, your Personal Allowance is completely gone."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I avoid the £100k tax trap?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The most effective strategy is to make pension contributions or use salary sacrifice to keep your adjusted net income at or below £100,000. This preserves your full Personal Allowance and avoids the 60% effective marginal rate. Gift Aid donations also reduce your adjusted net income."
                    }
                  }
                ]
              }
            ]
          })
        }} />
        <RelatedArticles articles={[
          { href: "/blog/95k-salary-take-home", title: "£95k Salary Take Home Pay", category: "Salary Guide", description: "See how much you'd take home on a £95,000 salary." },
          { href: "/blog/100k-tax-trap", title: "The £100k Tax Trap", category: "Tax Planning", description: "Full guide to the 60% effective tax rate above £100k." },
          { href: "/blog/pension-contributions-tax-relief", title: "Pension Contributions & Tax Relief", category: "Pensions", description: "How pension contributions reduce your tax bill." },
          { href: "/blog/salary-sacrifice-complete-guide", title: "Salary Sacrifice Complete Guide", category: "Pensions", description: "Save tax and NI through salary sacrifice arrangements." },
        ]} />
      </article>
    </div>
    </LayoutWrapper>
  );
}
