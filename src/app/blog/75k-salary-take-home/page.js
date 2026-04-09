import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "£75,000 After Tax UK 2026/27 — Take-Home Pay on a £75k Salary",
  description: "Find out exactly how much you take home from a £75,000 salary in 2026/27. Full breakdown of income tax at basic and higher rates, National Insurance, and monthly take-home pay.",
  keywords: "75000 salary, 75k salary, take home pay 75000, 75k after tax, salary calculator 75000, higher rate tax",
  openGraph: {
    title: "£75,000 After Tax UK 2026/27 — £75k Take-Home Pay",
    description: "Complete breakdown of take-home pay on a £75k salary including basic and higher rate tax deductions.",
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
    title: "£75,000 After Tax UK 2026/27 — £75k Take-Home Pay",
    description: "How much do you take home from a £75k salary? Full breakdown including higher rate tax.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/75k-salary-take-home",
  },
};

export default function Salary75k() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "£75,000 Salary Take-Home Pay in 2026/27" }]}>
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
            £75,000 Salary Take-Home Pay in 2026/27
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete breakdown of what you&apos;ll actually receive from a £75k salary, including higher rate tax calculations
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: £75,000 Salary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Annual Take-Home</p>
              <p className="text-3xl font-bold">£54,057</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-3xl font-bold">£4,505</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Weekly Take-Home</p>
              <p className="text-3xl font-bold">£1,040</p>
            </div>
          </div>
        </div>

        {/* Higher Rate Alert */}
        <div className="bg-amber-50 rounded-2xl p-6 mb-8 border border-amber-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 text-xl">!</span>
            </div>
            <div>
              <h3 className="font-bold text-amber-900 mb-1">You&apos;re a Higher Rate Taxpayer</h3>
              <p className="text-amber-800 text-sm">At £75,000, £24,730 of your income is taxed at 40%. You&apos;re in the top 10% of UK earners — maximising your pension contributions could save you thousands.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              At £75,000, you&apos;re firmly in the top 10% of UK earners with nearly £25,000 of your income taxed at the higher rate of 40%. This makes tax planning through pension contributions and salary sacrifice particularly rewarding.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After income tax and National Insurance, you&apos;ll take home approximately <strong>£54,057 per year</strong>, or <strong>£4,505 per month</strong>. Your effective tax rate is 27.9%.
            </p>
          </div>

          {/* Full Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Tax Breakdown for £75,000</h2>

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
                    <td className="py-3 text-gray-900 text-right">£75,000</td>
                    <td className="py-3 text-gray-900 text-right">£6,250</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Personal Allowance</td>
                    <td className="py-3 text-gray-700 text-right">£12,570</td>
                    <td className="py-3 text-gray-700 text-right">£1,048</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Taxable Income</td>
                    <td className="py-3 text-gray-700 text-right">£62,430</td>
                    <td className="py-3 text-gray-700 text-right">£5,203</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-red-700">Income Tax (Basic Rate 20%)</td>
                    <td className="py-3 text-red-700 text-right">-£7,540</td>
                    <td className="py-3 text-red-700 text-right">-£628</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-100">
                    <td className="py-3 text-red-800">Income Tax (Higher Rate 40%)</td>
                    <td className="py-3 text-red-800 text-right">-£9,892</td>
                    <td className="py-3 text-red-800 text-right">-£824</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (8%)</td>
                    <td className="py-3 text-orange-700 text-right">-£3,016</td>
                    <td className="py-3 text-orange-700 text-right">-£251</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (2% above threshold)</td>
                    <td className="py-3 text-orange-700 text-right">-£495</td>
                    <td className="py-3 text-orange-700 text-right">-£41</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 text-green-700 font-bold">Take-Home Pay</td>
                    <td className="py-3 text-green-700 font-bold text-right">£54,057</td>
                    <td className="py-3 text-green-700 font-bold text-right">£4,505</td>
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
                  The first £12,570 of your income is tax-free. This is your Personal Allowance for 2026/27.
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
                  £75,000 - £50,270 = £24,730<br />
                  £24,730 × 40% = <strong>£9,892 higher rate tax</strong>
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">Step 4: National Insurance</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  NI is 8% up to £50,270, then 2% above that.
                </p>
                <p className="text-orange-700 text-sm">
                  £37,700 × 8% = £3,016<br />
                  £24,730 × 2% = £495<br />
                  <strong>Total NI: £3,511</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Tax Band */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Tax Band Are You In?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £75,000, you&apos;re a <strong>higher rate taxpayer</strong> with a significant portion of your income (£24,730) in the 40% band — that&apos;s about a third of your taxable income.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>Planning ahead:</strong> You&apos;re £25,000 away from the £100,000 threshold where the Personal Allowance starts to taper. If your salary is rising, read about the <Link href="/blog/100k-tax-trap" className="text-amber-900 underline">£100k tax trap</Link> to prepare. Pension contributions now can help you avoid that trap later.
              </p>
            </div>
          </div>

          {/* With Student Loan */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">£75k with Student Loan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have a student loan, your take-home pay will be lower. Here&apos;s how much you&apos;d repay on each plan:
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 1 (Pre-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £26,900</p>
                <p className="text-purple-700 text-sm">Annual repayment: £4,329</p>
                <p className="text-purple-900 font-semibold">Take-home: £49,728/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2 (Post-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £29,385</p>
                <p className="text-purple-700 text-sm">Annual repayment: £4,105</p>
                <p className="text-purple-900 font-semibold">Take-home: £49,952/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 4 (Scotland)</h3>
                <p className="text-purple-700 text-sm">Threshold: £33,795</p>
                <p className="text-purple-700 text-sm">Annual repayment: £3,708</p>
                <p className="text-purple-900 font-semibold">Take-home: £50,349/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 5 (Post-2023)</h3>
                <p className="text-purple-700 text-sm">Threshold: £25,000</p>
                <p className="text-purple-700 text-sm">Annual repayment: £4,500</p>
                <p className="text-purple-900 font-semibold">Take-home: £49,557/year</p>
              </div>
            </div>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Comparison */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does £75k Compare?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £75,000, you&apos;re earning:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>In the top 10% of UK earners</strong></li>
              <li>• About 2.6 times the UK median salary</li>
              <li>• An effective tax rate of 27.9%</li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Salary Comparisons</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-600">£70,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£51,157/year</p>
                </div>
                <div>
                  <p className="text-blue-600">£80,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£56,957/year</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              See all salary breakdowns from <Link href="/salary-breakdown" className="text-blue-600 hover:underline">£20k to £100k</Link>.
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
                  <h3 className="font-semibold text-gray-900">Maximise pension contributions</h3>
                  <p className="text-gray-600 text-sm">With £24,730 in the higher rate band, pension contributions here get 40% tax relief. Contributing this amount saves you £9,892 in income tax alone. If your employer offers salary sacrifice, you save an additional 2% in NI too. Read about <Link href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:underline">pension contributions and tax relief</Link> for the full picture.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salary sacrifice schemes</h3>
                  <p className="text-gray-600 text-sm">Beyond pensions, salary sacrifice for electric cars, cycle to work, and technology schemes all reduce your taxable income. At the 40% tax band, these schemes offer exceptional value — every £1 sacrificed saves you 42p in tax and NI.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Plan ahead for the £100k trap</h3>
                  <p className="text-gray-600 text-sm">You&apos;re £25,000 away from the <Link href="/blog/100k-tax-trap" className="text-blue-600 hover:underline">£100k tax trap</Link> where the effective tax rate hits 60%. Building pension contribution habits now means you&apos;ll be prepared to mitigate this if your salary continues to grow.</p>
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
                "headline": "£75,000 After Tax UK 2026/27 — Take-Home Pay on a £75k Salary",
                "description": "Complete breakdown of what you'll actually receive from a £75k salary after income tax and National Insurance, including higher rate tax calculations.",
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
                  "@id": "https://www.salarytakehome.co.uk/blog/75k-salary-take-home"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much is £75,000 after tax in the UK?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On a £75,000 salary in 2026/27, you'll take home approximately £54,057 per year or £4,505 per month after income tax and National Insurance deductions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much tax do I pay on a £75k salary?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On £75,000 you pay £17,432 in income tax (£7,540 at the basic rate of 20% plus £9,892 at the higher rate of 40%) and £3,511 in National Insurance, totalling £20,943 in deductions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How can I reduce tax on a £75k salary?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The most effective strategy is pension contributions via salary sacrifice. With £24,730 in the 40% band, contributing this to a pension saves £9,892 in tax plus £495 in NI. You can also use salary sacrifice for electric cars, cycle to work schemes, and charitable giving via Gift Aid."
                    }
                  }
                ]
              }
            ]
          })
        }} />
        <RelatedArticles articles={[
          { href: "/blog/70k-salary-take-home", title: "£70k Salary Take Home Pay", category: "Salary Guide", description: "See how much you'd take home on a £70,000 salary." },
          { href: "/blog/80k-salary-take-home", title: "£80k Salary Take Home Pay", category: "Salary Guide", description: "Breakdown of an £80k salary after tax and NI." },
          { href: "/blog/100k-tax-trap", title: "The £100k Tax Trap", category: "Tax Planning", description: "How higher earners face a hidden 60% effective tax rate." },
          { href: "/blog/pension-contributions-tax-relief", title: "Pension Contributions & Tax Relief", category: "Pensions", description: "How pension contributions reduce your tax bill." },
        ]} />
      </article>
    </div>
    </LayoutWrapper>
  );
}
