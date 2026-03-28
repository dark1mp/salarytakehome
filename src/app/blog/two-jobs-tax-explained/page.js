import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Two Jobs Tax Explained: How PAYE Works With Multiple Employers in the UK",
  description: "Understand how tax works when you have two jobs in the UK. Learn about tax codes, NI on multiple jobs, HMRC reconciliation, and how to avoid overpaying tax.",
  keywords: "two jobs tax uk, second job tax, multiple employment tax, tax code two jobs, BR tax code, second job NI, two jobs take home pay",
  openGraph: {
    title: "Two Jobs Tax Explained: How PAYE Works With Multiple Employers",
    description: "Everything you need to know about tax when working two jobs in the UK.",
    type: "article",
    publishedTime: "2026-03-27T00:00:00.000Z",
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
    title: "Two Jobs Tax Explained: UK Guide",
    description: "How PAYE, tax codes, and National Insurance work with two jobs.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/two-jobs-tax-explained",
  },
};

export default function TwoJobsTaxExplained() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Two Jobs Tax Explained" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                Tax Planning
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-03-27">
                March 27, 2026
              </time>
              <span className="text-gray-500 text-sm">12 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Two Jobs Tax Explained: How PAYE Works With Multiple Employers in the UK
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Working two jobs in the UK? Here&apos;s how income tax, National Insurance, and tax codes actually work when you have multiple employers &mdash; and how to make sure you&apos;re not overpaying.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* Quick Summary */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Summary</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-white/15 rounded-xl p-5 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">Same</div>
                  <p className="text-white/90 text-sm">Income tax is the same total whether you earn it from one job or two</p>
                </div>
                <div className="bg-white/15 rounded-xl p-5 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">Per Job</div>
                  <p className="text-white/90 text-sm">NI is calculated separately per job &mdash; which may cost you more (or less)</p>
                </div>
                <div className="bg-white/15 rounded-xl p-5 backdrop-blur-sm">
                  <div className="text-3xl font-bold mb-2">P800</div>
                  <p className="text-white/90 text-sm">HMRC reconciles everything after year-end and issues refunds if you overpaid</p>
                </div>
              </div>
            </div>

            {/* How Income Tax Works With Two Jobs */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Income Tax Works With Two Jobs</h2>
              <p className="text-gray-700 mb-4">
                The most important thing to understand is that your total income tax bill is based on your <strong>combined earnings</strong> from all jobs. Having two jobs does not mean you pay more income tax overall.
              </p>
              <p className="text-gray-700 mb-4">
                Your personal allowance of &pound;12,570 applies once across all your employment. It is not doubled or split automatically. In most cases, HMRC assigns your full personal allowance to your primary job (the one earning the most) and your second job is taxed from the first pound.
              </p>
              <p className="text-gray-700 mb-4">
                During the year, PAYE deductions on each payslip are estimates. Your primary employer uses tax code 1257L (which includes your personal allowance), while your second employer typically uses a BR code (basic rate, 20% on everything). This means you may temporarily overpay or underpay tax month to month, but HMRC corrects the total after the tax year ends.
              </p>
              <p className="text-gray-700">
                See the current income tax rates on <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a>, or read our <Link href="/blog/uk-tax-changes-2025-26" className="text-blue-600 hover:text-blue-800 underline font-semibold">UK tax changes 2025/26 guide</Link> for a full summary of this year&apos;s rates and thresholds.
              </p>
            </div>

            {/* Understanding Tax Codes for Two Jobs */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Tax Codes for Two Jobs</h2>
              <p className="text-gray-700 mb-6">
                Your tax code tells your employer how much tax-free pay to give you. When you have two jobs, HMRC assigns different codes to each one. Here are the most common scenarios:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="px-4 py-3 text-left font-semibold text-sm">Scenario</th>
                      <th className="px-4 py-3 text-center font-semibold text-sm">Job 1 Code</th>
                      <th className="px-4 py-3 text-center font-semibold text-sm">Job 2 Code</th>
                      <th className="px-4 py-3 text-left font-semibold text-sm">What It Means</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-blue-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Standard setup</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">1257L</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">BR</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Full allowance on job 1, 20% flat on job 2</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 bg-gray-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Higher earner</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">1257L</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">D0</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Full allowance on job 1, 40% flat on job 2</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Split allowance</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">625L</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">625L</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Half allowance on each job</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 bg-gray-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Scottish taxpayer</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">S1257L</td>
                      <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">SBR</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Scottish rates apply to both jobs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4">
                You can check and update your tax codes through the <a href="https://www.gov.uk/tax-codes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK tax codes guide</a>.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* Why National Insurance Is Different */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why National Insurance Is Different</h2>
              <p className="text-gray-700 mb-4">
                Unlike income tax, National Insurance is calculated <strong>separately for each job</strong>. Each employer treats your earnings independently. This means the NI threshold (&pound;12,570 in 2025/26) applies separately to each employment.
              </p>
              <p className="text-gray-700 mb-6">
                This can actually work in your favour if your earnings are split in certain ways, because each job gets its own NI-free threshold. Here is a comparison:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-500 to-rose-600 text-white">
                      <th className="px-4 py-3 text-left font-semibold text-sm">Scenario</th>
                      <th className="px-4 py-3 text-right font-semibold text-sm">Job 1 NI</th>
                      <th className="px-4 py-3 text-right font-semibold text-sm">Job 2 NI</th>
                      <th className="px-4 py-3 text-right font-semibold text-sm">Total NI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-red-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">One &pound;60k job</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;3,210</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-500">&mdash;</td>
                      <td className="px-4 py-3 text-right text-sm font-mono font-bold text-gray-900">&pound;4,194</td>
                    </tr>
                    <tr className="hover:bg-red-50/50 bg-gray-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Two &pound;30k jobs</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;1,394</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;1,394</td>
                      <td className="px-4 py-3 text-right text-sm font-mono font-bold text-green-700">&pound;2,788</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4">
                In this example, two &pound;30k jobs actually result in <strong>lower NI</strong> because each job gets its own &pound;12,570 threshold before NI kicks in. With one &pound;60k job, you only get the threshold once and also pay the 2% upper rate on earnings above &pound;50,270.
              </p>
              <p className="text-gray-700 mt-3">
                See the current NI rates on <a href="https://www.gov.uk/national-insurance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a>.
              </p>
            </div>

            {/* Worked Example */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Worked Example: Two Jobs vs One Job</h2>
              <p className="text-gray-700 mb-6">
                Let&apos;s compare someone earning &pound;50,000 from one job versus &pound;30,000 + &pound;20,000 from two jobs in the 2025/26 tax year:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="px-4 py-3 text-left font-semibold text-sm">Item</th>
                      <th className="px-4 py-3 text-right font-semibold text-sm">One &pound;50k Job</th>
                      <th className="px-4 py-3 text-right font-semibold text-sm">&pound;30k + &pound;20k Jobs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-blue-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Gross Income</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;50,000</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;50,000</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 bg-gray-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Personal Allowance</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;12,570</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;12,570</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Income Tax</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;7,486</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;7,486</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 bg-gray-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">National Insurance</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;2,994</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-green-700">&pound;2,788</td>
                    </tr>
                    <tr className="hover:bg-blue-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">Total Deductions</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;10,480</td>
                      <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;10,274</td>
                    </tr>
                    <tr className="bg-blue-50 font-bold">
                      <td className="px-4 py-3 text-sm font-bold text-gray-900">Take-Home Pay</td>
                      <td className="px-4 py-3 text-right text-sm font-mono font-bold text-gray-900">&pound;39,520</td>
                      <td className="px-4 py-3 text-right text-sm font-mono font-bold text-green-700">&pound;39,726</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4">
                In this case, having two jobs actually saves &pound;206 per year because of the NI threshold reset. The income tax is identical &mdash; only the NI calculation differs. Use our <Link href="/two-jobs" className="text-blue-600 hover:text-blue-800 underline font-semibold">Two Jobs Calculator</Link> to run your own numbers.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* How to Check Your Tax Codes */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Check Your Tax Codes Are Correct</h2>
              <p className="text-gray-700 mb-4">
                Incorrect tax codes are the main reason people with two jobs overpay tax during the year. Here is how to check:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
                <li><strong>Log into your Personal Tax Account</strong> at <a href="https://www.gov.uk/personal-tax-account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a></li>
                <li><strong>Check each employment</strong> &mdash; make sure both jobs appear and the tax codes match what is on your payslips</li>
                <li><strong>Verify your personal allowance</strong> &mdash; confirm it is allocated to the right job (usually your highest-paying one)</li>
                <li><strong>Contact HMRC if codes look wrong</strong> &mdash; you can update them online or call 0300 200 3300</li>
              </ol>
              <p className="text-gray-700">
                Getting your tax codes right means you pay the correct amount each month and avoid waiting for a refund after the tax year ends.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* What Is a P800? */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a P800?</h2>
              <p className="text-gray-700 mb-4">
                A P800 is HMRC&apos;s end-of-year tax calculation. After the tax year ends on 5 April, HMRC checks whether you paid the right amount of tax across all your employments. If you overpaid, they send you a P800 and you receive a refund. If you underpaid, they adjust your tax code for the following year to collect the difference.
              </p>
              <p className="text-gray-700 mb-4">
                P800s are very common for people with two jobs because PAYE deductions during the year are based on estimates. You can usually claim your refund online and receive it within 5 working days.
              </p>
              <p className="text-gray-700">
                Learn more about <a href="https://www.gov.uk/tax-overpayments-and-underpayments" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">tax overpayments and underpayments</a> on GOV.UK.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-8 text-center text-white">
              <h2 className="text-2xl font-bold text-white mb-4">Calculate Your Two Jobs Take-Home Pay</h2>
              <p className="text-white/90 mb-6">
                Enter both job salaries and see exactly how much you&apos;ll take home after tax, NI, student loans, and pension contributions.
              </p>
              <Link
                href="/two-jobs"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Use the Two Jobs Calculator &rarr;
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="bg-white/90 rounded-2xl p-8 bg-gray-50 border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for informational purposes only and should not be considered financial advice.
                Always consult with a qualified tax professional for personalised guidance. Tax rates and thresholds are for the 2025/26 tax year and are subject to change. Information accurate as of March 2026.
              </p>
            </div>

          </div>

          {/* Structured Data */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Article",
                  "headline": "Two Jobs Tax Explained: How PAYE Works With Multiple Employers in the UK",
                  "description": "Understand how tax works when you have two jobs in the UK. Learn about tax codes, NI on multiple jobs, HMRC reconciliation, and how to avoid overpaying tax.",
                  "datePublished": "2026-03-27T00:00:00.000Z",
                  "dateModified": "2026-03-27T00:00:00.000Z",
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
                    "@id": "https://www.salarytakehome.co.uk/blog/two-jobs-tax-explained"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Do I pay more tax if I have two jobs in the UK?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Income tax is based on your total earnings across all jobs. Whether you earn from one job or two, the total income tax is the same once HMRC reconciles your PAYE records at year end. However, National Insurance is calculated per job and may differ."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What tax code should my second job have?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most commonly your second job uses a BR tax code, meaning 20% tax is deducted on all earnings with no personal allowance. If your combined income exceeds £50,270, HMRC may assign D0 (40%) to the second job. You can also ask HMRC to split your personal allowance between jobs."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is National Insurance more expensive with two jobs?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Not always. NI is calculated separately per employment, so each job gets its own NI-free threshold of £12,570. If your earnings are split evenly, you may actually pay less NI with two jobs than with one job at the same total salary, because you benefit from the threshold twice."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is a P800 and will I get a tax refund?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A P800 is HMRC's end-of-year tax calculation. After April 5, HMRC checks whether you paid the correct amount of tax across all employments. If you overpaid, you receive a P800 and can claim a refund online, usually within 5 working days."
                      }
                    }
                  ]
                }
              ]
            })
          }} />

          <RelatedArticles articles={[
            { href: "/blog/maximize-take-home-pay-2024", title: "How to Maximise Your Take Home Pay", category: "Money Tips", description: "Practical strategies to keep more of your earnings." },
            { href: "/blog/salary-sacrifice-complete-guide", title: "Salary Sacrifice Complete Guide", category: "Pensions", description: "How salary sacrifice works and how much you could save." },
            { href: "/blog/uk-tax-changes-2025-26", title: "UK Tax Changes 2025/26", category: "Tax Planning", description: "Complete guide to rates and thresholds this tax year." },
            { href: "/blog/40k-salary-take-home", title: "\u00a340k Salary Take Home Pay", category: "Salary Guide", description: "Detailed breakdown of a \u00a340,000 salary after tax." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
