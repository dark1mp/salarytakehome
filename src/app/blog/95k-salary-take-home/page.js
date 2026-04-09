import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "£95,000 Salary Take-Home Pay 2026/27 | After Tax Calculator",
  description: "Find out exactly how much you take home from a £95,000 salary in 2026/27. Full breakdown of income tax at basic and higher rates, National Insurance, and monthly take-home pay.",
  keywords: "95000 salary, 95k salary, take home pay 95000, 95k after tax, salary calculator 95000, higher rate tax, 100k tax trap",
  openGraph: {
    title: "£95,000 Salary Take-Home Pay 2026/27",
    description: "Complete breakdown of take-home pay on a £95k salary including basic and higher rate tax deductions.",
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
    title: "£95,000 Salary Take-Home Pay 2026/27",
    description: "How much do you take home from a £95k salary? Full breakdown including higher rate tax.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/95k-salary-take-home",
  },
};

export default function Salary95k() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "£95,000 Salary Take-Home Pay in 2026/27" }]}>
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
            £95,000 Salary Take-Home Pay in 2026/27
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete breakdown of what you&apos;ll actually receive from a £95k salary, including higher rate tax calculations
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: £95,000 Salary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Annual Take-Home</p>
              <p className="text-3xl font-bold">£65,657</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-3xl font-bold">£5,471</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Weekly Take-Home</p>
              <p className="text-3xl font-bold">£1,263</p>
            </div>
          </div>
        </div>

        {/* Tax Trap Warning */}
        <div className="bg-red-50 rounded-2xl p-6 mb-8 border border-red-200">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-red-600 text-xl font-bold">!</span>
            </div>
            <div>
              <h3 className="font-bold text-red-900 mb-1">Just £5k Below the £100k Tax Trap</h3>
              <p className="text-red-800 text-sm">At £95,000, you&apos;re dangerously close to the £100k threshold. Any bonus, overtime, or pay rise that pushes you over £100k triggers the Personal Allowance taper — an effective 60% marginal rate. Consider pension sacrifice to stay below the threshold. <Link href="/blog/100k-tax-trap" className="text-red-900 underline font-semibold">Read more about the £100k tax trap</Link>.</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              If you&apos;re earning £95,000 a year in the UK, you&apos;re in the top 2% of earners. You&apos;re deep into the higher rate band and just £5,000 from the Personal Allowance taper zone. This makes pension contributions and salary sacrifice strategies critical for your tax planning.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After income tax and National Insurance, you&apos;ll take home approximately <strong>£65,657 per year</strong>, or <strong>£5,471 per month</strong>. That means you&apos;re keeping about 69.1% of your gross salary, with an effective tax rate of 30.9%.
            </p>
          </div>

          {/* Full Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Tax Breakdown for £95,000</h2>

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
                    <td className="py-3 text-gray-900 text-right">£95,000</td>
                    <td className="py-3 text-gray-900 text-right">£7,917</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Personal Allowance</td>
                    <td className="py-3 text-gray-700 text-right">£12,570</td>
                    <td className="py-3 text-gray-700 text-right">£1,048</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Taxable Income</td>
                    <td className="py-3 text-gray-700 text-right">£82,430</td>
                    <td className="py-3 text-gray-700 text-right">£6,869</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-red-700">Income Tax (Basic Rate 20%)</td>
                    <td className="py-3 text-red-700 text-right">-£7,540</td>
                    <td className="py-3 text-red-700 text-right">-£628</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-100">
                    <td className="py-3 text-red-800">Income Tax (Higher Rate 40%)</td>
                    <td className="py-3 text-red-800 text-right">-£17,892</td>
                    <td className="py-3 text-red-800 text-right">-£1,491</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (8%)</td>
                    <td className="py-3 text-orange-700 text-right">-£3,016</td>
                    <td className="py-3 text-orange-700 text-right">-£251</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (2% above threshold)</td>
                    <td className="py-3 text-orange-700 text-right">-£895</td>
                    <td className="py-3 text-orange-700 text-right">-£75</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 text-green-700 font-bold">Take-Home Pay</td>
                    <td className="py-3 text-green-700 font-bold text-right">£65,657</td>
                    <td className="py-3 text-green-700 font-bold text-right">£5,471</td>
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
                  £95,000 - £50,270 = £44,730<br />
                  £44,730 × 40% = <strong>£17,892 higher rate tax</strong>
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">Step 4: National Insurance</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  NI is 8% on earnings between £12,570 and £50,270, then 2% above that.
                </p>
                <p className="text-orange-700 text-sm">
                  £37,700 × 8% = £3,016<br />
                  £44,730 × 2% = £895<br />
                  <strong>Total NI: £3,911</strong>
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
                  <div className="bg-amber-500 h-8 rounded-full" style={{width: '40%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£37,700 (40%)</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600">Higher (40%)</div>
                <div className="flex-1 bg-gray-100 rounded-full h-8 relative">
                  <div className="bg-red-500 h-8 rounded-full" style={{width: '47%'}}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">£44,730 (47%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* With Student Loan */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">£95k with Student Loan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have a student loan, your take-home pay will be lower. Here&apos;s how much you&apos;d repay on each plan:
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 1 (Pre-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £26,900 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £6,129</p>
                <p className="text-purple-900 font-semibold">Take-home: £59,528/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2 (Post-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £29,385 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £5,905</p>
                <p className="text-purple-900 font-semibold">Take-home: £59,752/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 4 (Scotland)</h3>
                <p className="text-purple-700 text-sm">Threshold: £33,795 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £5,508</p>
                <p className="text-purple-900 font-semibold">Take-home: £60,149/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 5 (Post-2023)</h3>
                <p className="text-purple-700 text-sm">Threshold: £25,000 &middot; Rate: 9%</p>
                <p className="text-purple-700 text-sm">Annual repayment: £6,300</p>
                <p className="text-purple-900 font-semibold">Take-home: £59,357/year</p>
              </div>
            </div>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Comparison */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does £95k Compare?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £95,000, you&apos;re earning:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>In the top 2% of UK earners</strong></li>
              <li>• Over three times the UK median salary</li>
              <li>• An effective tax rate of 30.9%</li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Salary Comparisons</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-600">£90,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£62,757/year</p>
                </div>
                <div>
                  <p className="text-blue-600">£100,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£68,557/year</p>
                </div>
              </div>
            </div>
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
                  <h3 className="font-semibold text-gray-900">Pension contributions = 40% tax relief</h3>
                  <p className="text-gray-600 text-sm">As a higher rate taxpayer, you get 40% tax relief on pension contributions. Every £100 you put into your pension only costs you £60 net. At £95k, pension contributions are especially valuable if a bonus could push you over £100k.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salary sacrifice to avoid the £100k trap</h3>
                  <p className="text-gray-600 text-sm">If bonuses or overtime could push you over £100k, salary sacrifice into pension keeps your adjusted net income below the taper threshold. This avoids the effective 60% marginal rate and saves NI too.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Charitable giving via Gift Aid</h3>
                  <p className="text-gray-600 text-sm">As a 40% taxpayer, you can claim back the difference between the higher rate (40%) and basic rate (20%) on Gift Aid donations through your Self Assessment return.</p>
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
                "headline": "£95,000 Salary Take-Home Pay in 2026/27",
                "description": "Complete breakdown of what you'll actually receive from a £95k salary after income tax and National Insurance, including higher rate tax calculations.",
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
                  "@id": "https://www.salarytakehome.co.uk/blog/95k-salary-take-home"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much is £95,000 after tax in the UK?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On a £95,000 salary in 2026/27, you'll take home approximately £65,657 per year or £5,471 per month after income tax and National Insurance deductions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much higher rate tax do I pay on £95k?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "At £95,000, you pay 40% tax on £44,730 of your income (the amount above the £50,270 higher rate threshold). This comes to £17,892 in higher rate tax, plus £7,540 at the basic rate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Should I sacrifice salary into pension at £95k?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Strongly consider it. At £95,000 you're just £5,000 below the £100k Personal Allowance taper threshold. If bonuses or pay rises push you over £100k, you'll face an effective 60% marginal tax rate. Salary sacrifice into pension reduces your adjusted net income and saves both income tax (40%) and National Insurance (2%)."
                    }
                  }
                ]
              }
            ]
          })
        }} />
        <RelatedArticles articles={[
          { href: "/blog/90k-salary-take-home", title: "£90k Salary Take Home Pay", category: "Salary Guide", description: "See how much you'd take home on a £90,000 salary." },
          { href: "/blog/100k-salary-take-home", title: "£100k Salary Take Home Pay", category: "Salary Guide", description: "Breakdown of a £100k salary — right at the PA taper threshold." },
          { href: "/blog/100k-tax-trap", title: "The £100k Tax Trap", category: "Tax Planning", description: "How higher earners face a hidden 60% effective tax rate." },
          { href: "/blog/salary-sacrifice-complete-guide", title: "Salary Sacrifice Complete Guide", category: "Pensions", description: "Save tax and NI through salary sacrifice arrangements." },
        ]} />
      </article>
    </div>
    </LayoutWrapper>
  );
}
