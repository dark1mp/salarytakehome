import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Maternity Pay Guide: SMP, Maternity Allowance & Shared Parental Leave UK",
  description: "Complete UK maternity pay guide. Understand Statutory Maternity Pay (SMP), Maternity Allowance, Shared Parental Leave, and how to plan your finances.",
  keywords: "maternity pay uk, statutory maternity pay, smp calculator, maternity allowance, shared parental leave, maternity leave pay, smp rates 2025",
  openGraph: {
    title: "Maternity Pay Guide: SMP, Maternity Allowance & Shared Leave",
    description: "Everything you need to know about maternity pay in the UK.",
    type: "article",
    publishedTime: "2026-03-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SalaryTakeHome Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maternity Pay Guide UK",
    description: "SMP, Maternity Allowance, and Shared Parental Leave explained.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/maternity-pay-guide",
  },
};

export default function MaternityPayGuide() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Maternity Pay Guide" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium rounded-full">
                Salary Guide
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-03-27">
                March 27, 2026
              </time>
              <span className="text-gray-500 text-sm">12 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: April 2026 &middot; Reflects 2026/27 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Maternity Pay Guide: SMP, Maternity Allowance &amp; Shared Parental Leave UK
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about maternity pay in the UK &mdash; from eligibility and rates to financial planning for your leave.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Key Maternity Pay Facts (2026/27)</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white/15 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">39 weeks</p>
                <p className="text-pink-100 text-sm mt-1">Total paid maternity leave (SMP)</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">90%</p>
                <p className="text-pink-100 text-sm mt-1">Of your pay for the first 6 weeks</p>
              </div>
              <div className="bg-white/15 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">&pound;194.32/wk</p>
                <p className="text-pink-100 text-sm mt-1">Flat rate for remaining 33 weeks</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* What Is SMP? */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is Statutory Maternity Pay (SMP)?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Statutory Maternity Pay is a weekly payment from your employer while you&apos;re on maternity leave. It&apos;s the legal minimum your employer must pay if you meet the eligibility criteria &mdash; though many employers offer enhanced packages on top of SMP.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility Requirements</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To qualify for SMP in 2026/27, you must meet all of the following conditions:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
                <li><strong>26 weeks continuous employment</strong> &mdash; you must have worked for your employer continuously for at least 26 weeks by the 15th week before your expected due date (known as the &ldquo;qualifying week&rdquo;)</li>
                <li><strong>Minimum earnings of &pound;123 per week</strong> &mdash; your average weekly earnings in the 8 weeks before the qualifying week must be at least &pound;123 (the Lower Earnings Limit for 2026/27)</li>
                <li><strong>Proper notice</strong> &mdash; you must give your employer at least 28 days&apos; notice before you want your SMP to start</li>
                <li><strong>Proof of pregnancy</strong> &mdash; usually a MATB1 certificate from your midwife or doctor, issued after 20 weeks of pregnancy</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                For full eligibility details, see the official <a href="https://www.gov.uk/maternity-pay-leave" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK maternity pay and leave</a> guidance.
              </p>
            </div>

            {/* SMP Rates and Duration */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SMP Rates and Duration</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                SMP is paid for a maximum of 39 weeks and is split into two payment periods. Here&apos;s how it breaks down for someone earning &pound;35,000 per year (&pound;673.08 per week):
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Period</th>
                      <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Duration</th>
                      <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Rate</th>
                      <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Example (&pound;35k salary)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 text-gray-700">First 6 weeks</td>
                      <td className="p-3 text-gray-700">6 weeks</td>
                      <td className="p-3 text-gray-700">90% of average earnings</td>
                      <td className="p-3 text-right font-semibold text-gray-900">&pound;605.77/wk</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 text-gray-700">Weeks 7&ndash;39</td>
                      <td className="p-3 text-gray-700">33 weeks</td>
                      <td className="p-3 text-gray-700">&pound;194.32/wk or 90% (lower)</td>
                      <td className="p-3 text-right font-semibold text-gray-900">&pound;194.32/wk</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="p-3 font-semibold text-gray-900">Total</td>
                      <td className="p-3 font-semibold text-gray-900">39 weeks</td>
                      <td className="p-3 text-gray-700">&mdash;</td>
                      <td className="p-3 text-right font-bold text-green-700 text-lg">&pound;9,706.61</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Note:</strong> SMP is subject to income tax and National Insurance deductions, just like your normal salary. Your employer deducts these before paying you.
                </p>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* SMP at Different Salary Levels */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SMP at Different Salary Levels</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The total amount of SMP you receive depends heavily on your salary, particularly during the first 6 weeks when you get 90% of your earnings. Here&apos;s what to expect at different income levels:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Annual Salary</th>
                      <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Weekly Earnings</th>
                      <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">First 6 Weeks Total</th>
                      <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Remaining 33 Weeks</th>
                      <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Total SMP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 text-gray-700">&pound;20,000</td>
                      <td className="p-3 text-right text-gray-700">&pound;384.62</td>
                      <td className="p-3 text-right text-gray-700">&pound;2,076.92</td>
                      <td className="p-3 text-right text-gray-700">&pound;6,072.99</td>
                      <td className="p-3 text-right font-semibold text-gray-900">&pound;8,149.91</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 text-gray-700">&pound;25,000</td>
                      <td className="p-3 text-right text-gray-700">&pound;480.77</td>
                      <td className="p-3 text-right text-gray-700">&pound;2,596.15</td>
                      <td className="p-3 text-right text-gray-700">&pound;6,072.99</td>
                      <td className="p-3 text-right font-semibold text-gray-900">&pound;8,669.14</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 text-gray-700">&pound;30,000</td>
                      <td className="p-3 text-right text-gray-700">&pound;576.92</td>
                      <td className="p-3 text-right text-gray-700">&pound;3,115.38</td>
                      <td className="p-3 text-right text-gray-700">&pound;6,072.99</td>
                      <td className="p-3 text-right font-semibold text-gray-900">&pound;9,188.37</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 text-gray-700">&pound;40,000</td>
                      <td className="p-3 text-right text-gray-700">&pound;769.23</td>
                      <td className="p-3 text-right text-gray-700">&pound;4,153.85</td>
                      <td className="p-3 text-right text-gray-700">&pound;6,072.99</td>
                      <td className="p-3 text-right font-semibold text-gray-900">&pound;10,226.84</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 text-gray-700">&pound;50,000</td>
                      <td className="p-3 text-right text-gray-700">&pound;961.54</td>
                      <td className="p-3 text-right text-gray-700">&pound;5,192.31</td>
                      <td className="p-3 text-right text-gray-700">&pound;6,072.99</td>
                      <td className="p-3 text-right font-semibold text-gray-900">&pound;11,265.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Notice how the &ldquo;Remaining 33 Weeks&rdquo; column is the same for all salaries above around &pound;11,200. That&apos;s because once your 90% rate exceeds &pound;194.32 per week, you receive the flat statutory rate instead. The real difference in total SMP comes entirely from the first 6 weeks.
              </p>
            </div>

            {/* Maternity Allowance */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Maternity Allowance: The Alternative</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you don&apos;t qualify for SMP &mdash; perhaps because you&apos;re self-employed, you changed jobs recently, or your earnings are below the threshold &mdash; you may be eligible for Maternity Allowance (MA) instead. This is paid directly by the Department for Work and Pensions (DWP).
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Feature</th>
                      <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">SMP</th>
                      <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Maternity Allowance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium text-gray-900">Eligibility</td>
                      <td className="p-3 text-gray-700">26 weeks service + &pound;123/wk earnings</td>
                      <td className="p-3 text-gray-700">26 of 66 weeks employed or self-employed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium text-gray-900">First 6 weeks</td>
                      <td className="p-3 text-gray-700">90% of average earnings</td>
                      <td className="p-3 text-gray-700">&pound;194.32/wk or 90% (lower)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium text-gray-900">Weeks 7&ndash;39</td>
                      <td className="p-3 text-gray-700">&pound;194.32/wk or 90% (lower)</td>
                      <td className="p-3 text-gray-700">Same rate throughout</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium text-gray-900">Paid by</td>
                      <td className="p-3 text-gray-700">Your employer</td>
                      <td className="p-3 text-gray-700">DWP (government)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium text-gray-900">Taxable?</td>
                      <td className="p-3 text-gray-700">Yes</td>
                      <td className="p-3 text-gray-700">No</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-3 font-medium text-gray-900">Duration</td>
                      <td className="p-3 text-gray-700">39 weeks</td>
                      <td className="p-3 text-gray-700">39 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed">
                One important distinction: Maternity Allowance is <strong>not taxable</strong>, whereas SMP is. This can make MA slightly more favourable for some lower earners in practice. For full details on eligibility and how to claim, visit <a href="https://www.gov.uk/maternity-allowance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Maternity Allowance</a>.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* Shared Parental Leave */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Shared Parental Leave (SPL)</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Shared Parental Leave gives parents more flexibility in how they divide time off after a baby is born. Instead of the mother taking all 52 weeks, parents can share up to 50 weeks of leave and 37 weeks of pay between them.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">How SPL Works</h3>
              <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 leading-relaxed">
                <li>The mother must end her maternity leave early (she must take at least 2 weeks after birth as compulsory maternity leave)</li>
                <li>The remaining weeks are converted into a shared pool that either parent can take</li>
                <li>Parents can take leave at the same time, in turns, or in blocks</li>
                <li>Shared Parental Pay (ShPP) is &pound;194.32 per week or 90% of average earnings, whichever is lower</li>
                <li>Both parents must give their employers at least 8 weeks&apos; notice</li>
              </ul>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200 mb-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Example:</strong> If a mother takes 20 weeks of maternity leave, the remaining 30 weeks of leave (and up to 17 weeks of pay) can be shared. Her partner could take 15 weeks off while she returns to work, then she could take another 15 weeks later.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                SPL can be particularly beneficial for higher-earning mothers who want to return to work sooner while their partner takes over childcare. For full details, see <a href="https://www.gov.uk/shared-parental-leave-and-pay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Shared Parental Leave and Pay</a>.
              </p>
            </div>

            {/* Planning Your Finances */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Planning Your Finances During Maternity Leave</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Maternity leave typically means a significant drop in income, especially after the first 6 weeks. Here are practical steps to prepare financially:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Budget for reduced income</h3>
                    <p className="text-gray-600 text-sm">Map out your income month by month for the full 39 weeks. After week 6, your pay drops significantly. Use our <Link href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</Link> to understand your current take-home, then plan around the reduced SMP amount.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Check your enhanced maternity pay</h3>
                    <p className="text-gray-600 text-sm">Many employers offer maternity pay above the statutory minimum. Check your contract or speak to HR &mdash; some companies pay full salary for 3&ndash;6 months, which makes a huge difference to your finances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Consider the pension impact</h3>
                    <p className="text-gray-600 text-sm">Your employer must continue pension contributions based on your normal salary during SMP, but your own contributions will be based on your actual pay. Check whether you can maintain higher contributions to protect your retirement savings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Apply for Child Benefit</h3>
                    <p className="text-gray-600 text-sm">Child Benefit is worth &pound;26.05 per week for your first child (&pound;1,354.60 per year). Even if you or your partner earns over &pound;60,000, it&apos;s worth claiming to protect your State Pension record through National Insurance credits.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Build a buffer before leave</h3>
                    <p className="text-gray-600 text-sm">If possible, save 2&ndash;3 months&apos; worth of essential expenses before your maternity leave starts. This cushion helps cover the gap between your normal salary and SMP, especially during the &pound;194.32/week period.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Start Maternity Leave */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Start Maternity Leave</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You can start maternity leave any time from 11 weeks before your due date. The timing has financial implications worth considering:
              </p>

              <div className="grid lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Starting later (1&ndash;2 weeks before due date)</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>+ More weeks of full salary before baby arrives</li>
                    <li>+ More paid weeks available after birth</li>
                    <li>- Less time to prepare and rest before the birth</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">Starting earlier (4&ndash;6 weeks before due date)</h3>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>+ More time to rest and prepare</li>
                    <li>+ Less stress in late pregnancy</li>
                    <li>- Fewer paid weeks remaining after birth</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Remember, if your baby arrives before your planned start date, your maternity leave and SMP begin automatically on the day after the birth. Many women find starting 1&ndash;2 weeks before their due date strikes the right balance between financial and personal wellbeing.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* CTA */}
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-4">Calculate Your Maternity Pay</h2>
              <p className="text-pink-100 mb-6">
                Use our free calculator to see exactly how much SMP you&apos;ll receive based on your earnings.
              </p>
              <Link
                href="/maternity-sick-pay"
                className="inline-flex items-center px-8 py-3 bg-white text-pink-600 font-semibold rounded-xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Try Maternity Pay Calculator &rarr;
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
                  "headline": "Maternity Pay Guide: SMP, Maternity Allowance & Shared Parental Leave UK",
                  "description": "Complete UK maternity pay guide. Understand Statutory Maternity Pay (SMP), Maternity Allowance, Shared Parental Leave, and how to plan your finances.",
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
                    "@id": "https://www.salarytakehome.co.uk/blog/maternity-pay-guide"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How much is Statutory Maternity Pay in 2026/27?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SMP is paid for 39 weeks. The first 6 weeks are at 90% of your average weekly earnings (no cap). The remaining 33 weeks are at £194.32 per week (2026/27 rate) or 90% of your earnings, whichever is lower. You must earn at least £129 per week on average to qualify (up from £125 in 2025/26)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the difference between SMP and Maternity Allowance?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SMP is paid by your employer and requires 26 weeks of continuous employment, while Maternity Allowance is paid by the DWP for those who don't qualify for SMP. SMP pays 90% of earnings for the first 6 weeks then £194.32/week, whereas MA pays the flat rate throughout. SMP is taxable but MA is not."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I share my maternity leave with my partner?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, through Shared Parental Leave (SPL) you can share up to 50 weeks of leave and 37 weeks of pay with your partner. The mother must end her maternity leave early and both parents must notify their employers at least 8 weeks in advance."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "When should I start my maternity leave?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can start maternity leave from 11 weeks before your due date. Starting later means more full-salary weeks before the birth and more paid weeks after. Starting earlier gives you more time to rest. Most women start 1-2 weeks before their due date."
                      }
                    }
                  ]
                }
              ]
            })
          }} />

          <RelatedArticles articles={[
            { href: "/blog/maximize-take-home-pay-2024", title: "10 Ways to Maximize Your Take-Home Pay", category: "Money Tips", description: "Proven strategies to keep more of your hard-earned money." },
            { href: "/blog/uk-tax-changes-2026-27", title: "UK Tax Changes 2026/27", category: "Tax Updates", description: "Everything changing in the new tax year and how it affects you." },
            { href: "/blog/pension-contributions-tax-relief", title: "Pension Contributions & Tax Relief", category: "Pensions", description: "How pension contributions reduce your tax bill." },
            { href: "/blog/40k-salary-take-home", title: "£40k Salary Take Home Pay", category: "Salary Guide", description: "Complete breakdown of a £40,000 salary after tax." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
