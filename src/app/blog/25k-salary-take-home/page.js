import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "£25,000 Salary Take-Home Pay 2026/27 | After Tax Calculator",
  description: "Find out exactly how much you take home from a £25,000 salary in 2026/27. Full breakdown of income tax, National Insurance, and monthly take-home pay.",
  keywords: "25000 salary, 25k salary, take home pay 25000, 25k after tax, salary calculator 25000",
  openGraph: {
    title: "£25,000 Salary Take-Home Pay 2026/27",
    description: "Complete breakdown of take-home pay on a £25k salary including tax and NI deductions.",
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
    title: "£25,000 Salary Take-Home Pay 2026/27",
    description: "How much do you take home from a £25k salary? Full breakdown inside.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/25k-salary-take-home",
  },
};

export default function Salary25k() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "£25,000 Salary Take-Home Pay in 2026/27" }]}>
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
            £25,000 Salary Take-Home Pay in 2026/27
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete breakdown of what you&apos;ll actually receive from a £25k salary after income tax and National Insurance
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: £25,000 Salary</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Annual Take-Home</p>
              <p className="text-3xl font-bold">£21,520</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Monthly Take-Home</p>
              <p className="text-3xl font-bold">£1,793</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Weekly Take-Home</p>
              <p className="text-3xl font-bold">£414</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              If you&apos;re earning £25,000 a year in the UK, you&apos;re close to the national median salary. Many graduates start their careers around this level. But how much of that actually ends up in your bank account?
            </p>
            <p className="text-gray-700 leading-relaxed">
              After income tax and National Insurance, you&apos;ll take home approximately <strong>£21,520 per year</strong>, or <strong>£1,793 per month</strong>. That means you&apos;re keeping about 86.1% of your gross salary.
            </p>
          </div>

          {/* Full Breakdown */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Tax Breakdown for £25,000</h2>

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
                    <td className="py-3 text-gray-900 text-right">£25,000</td>
                    <td className="py-3 text-gray-900 text-right">£2,083</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Personal Allowance</td>
                    <td className="py-3 text-gray-700 text-right">£12,570</td>
                    <td className="py-3 text-gray-700 text-right">£1,048</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-700">Taxable Income</td>
                    <td className="py-3 text-gray-700 text-right">£12,430</td>
                    <td className="py-3 text-gray-700 text-right">£1,036</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-red-700">Income Tax (20%)</td>
                    <td className="py-3 text-red-700 text-right">-£2,486</td>
                    <td className="py-3 text-red-700 text-right">-£207</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-orange-50">
                    <td className="py-3 text-orange-700">National Insurance (8%)</td>
                    <td className="py-3 text-orange-700 text-right">-£994</td>
                    <td className="py-3 text-orange-700 text-right">-£83</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-3 text-green-700 font-bold">Take-Home Pay</td>
                    <td className="py-3 text-green-700 font-bold text-right">£21,520</td>
                    <td className="py-3 text-green-700 font-bold text-right">£1,793</td>
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
                <h3 className="font-semibold text-amber-800 mb-3">Step 2: Income Tax</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-2">
                  Everything above your Personal Allowance is taxed at 20% (the basic rate).
                </p>
                <p className="text-amber-700 text-sm">
                  £25,000 - £12,570 = £12,430 taxable<br />
                  £12,430 × 20% = <strong>£2,486 income tax</strong>
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="font-semibold text-orange-800 mb-3">Step 3: National Insurance</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  You pay 8% National Insurance on earnings between £12,570 and £50,270.
                </p>
                <p className="text-orange-700 text-sm">
                  £12,430 × 8% = <strong>£994 National Insurance</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Tax Band */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Tax Band Are You In?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £25,000, you&apos;re a <strong>basic rate taxpayer</strong>. Your entire taxable income falls within the 20% tax band.
            </p>
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <p className="text-green-800 text-sm leading-relaxed">
                <strong>Good news:</strong> You&apos;re well below the higher rate threshold of £50,270. You&apos;d need a pay rise of over £25,000 before any of your income gets taxed at 40%.
              </p>
            </div>
          </div>

          {/* With Student Loan */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">£25k with Student Loan</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you have a student loan, here&apos;s how much you&apos;d repay on each plan at £25,000:
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 1 (Pre-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £26,900</p>
                <p className="text-purple-700 text-sm">Below threshold — no repayments</p>
                <p className="text-purple-900 font-semibold">Take-home: £21,520/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 2 (Post-2012)</h3>
                <p className="text-purple-700 text-sm">Threshold: £29,385</p>
                <p className="text-purple-700 text-sm">Below threshold — no repayments</p>
                <p className="text-purple-900 font-semibold">Take-home: £21,520/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 4 (Scotland)</h3>
                <p className="text-purple-700 text-sm">Threshold: £33,795</p>
                <p className="text-purple-700 text-sm">Below threshold — no repayments</p>
                <p className="text-purple-900 font-semibold">Take-home: £21,520/year</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-2">Plan 5 (Post-2023)</h3>
                <p className="text-purple-700 text-sm">Threshold: £25,000</p>
                <p className="text-purple-700 text-sm">Below threshold — no repayments</p>
                <p className="text-purple-900 font-semibold">Take-home: £21,520/year</p>
              </div>
            </div>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Comparison */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Does £25k Compare?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At £25,000, you&apos;re earning:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• <strong>Close to the UK median salary</strong> (around £29,000)</li>
              <li>• A typical starting salary for many graduate roles</li>
              <li>• An effective tax rate of just 13.9%</li>
            </ul>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">Salary Comparisons</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-600">£20,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£17,920/year</p>
                </div>
                <div>
                  <p className="text-blue-600">£30,000 take-home:</p>
                  <p className="text-blue-800 font-semibold">£25,120/year</p>
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
                  <h3 className="font-semibold text-gray-900">Check your tax code</h3>
                  <p className="text-gray-600 text-sm">Make sure you&apos;re on 1257L. A wrong tax code could mean you&apos;re overpaying.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Salary sacrifice schemes</h3>
                  <p className="text-gray-600 text-sm">Cycle to work, electric car schemes, or extra pension contributions can reduce your tax bill.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Marriage Allowance</h3>
                  <p className="text-gray-600 text-sm">If your partner earns under £12,570, they can transfer £1,260 of their allowance to you, saving up to £252 per year.</p>
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
                "headline": "£25,000 Salary Take-Home Pay in 2026/27",
                "description": "Complete breakdown of what you'll actually receive from a £25k salary after income tax and National Insurance.",
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
                  "@id": "https://www.salarytakehome.co.uk/blog/25k-salary-take-home"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much is £25,000 after tax in the UK?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On a £25,000 salary in 2026/27, you'll take home approximately £21,520 per year or £1,793 per month after income tax and National Insurance deductions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What tax band is £25k salary in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A £25,000 salary falls entirely within the basic rate tax band (20%). You're well below the higher rate threshold of £50,270."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much National Insurance do I pay on £25k?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On a £25,000 salary, you pay approximately £994 per year in National Insurance (8% on earnings between £12,570 and £50,270)."
                    }
                  }
                ]
              }
            ]
          })
        }} />
        <RelatedArticles articles={[
          { href: "/blog/20k-salary-take-home", title: "£20k Salary Take Home Pay", category: "Salary Guide", description: "See how much you'd take home on a £20,000 salary." },
          { href: "/blog/30k-salary-take-home", title: "£30k Salary Take Home Pay", category: "Salary Guide", description: "Breakdown of a £30k salary after tax and NI." },
          { href: "/blog/maximize-take-home-pay-2024", title: "How to Maximise Your Take Home Pay", category: "Money Tips", description: "Practical strategies to keep more of your earnings." },
          { href: "/blog/student-loan-repayment-guide", title: "Student Loan Repayment Guide", category: "Student Loans", description: "Understand how student loan repayments affect your pay." },
        ]} />
      </article>
    </div>
    </LayoutWrapper>
  );
}
