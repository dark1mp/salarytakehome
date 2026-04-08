import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "UK Minimum Wage 2026/27: £12.71 NLW, Rates & Take-Home Pay",
  description: "Complete guide to UK minimum wage and National Living Wage rates from 1 April 2026. See the new £12.71 NLW, rates by age, take-home pay after tax, and your employment rights.",
  keywords: "uk minimum wage 2026, national living wage 2026/27, £12.71, minimum wage rates uk, hourly wage uk, national minimum wage, real living wage, minimum wage take home pay 2026",
  openGraph: {
    title: "UK Minimum Wage 2026/27: £12.71 NLW, Hourly Rates & Take-Home Pay",
    description: "Complete guide to the new 2026/27 minimum wage rates effective from 1 April 2026.",
    type: "article",
    publishedTime: "2026-04-06T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SalaryTakeHome Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Minimum Wage 2026/27: £12.71 NLW",
    description: "Every UK minimum wage rate from April 2026, with take-home pay at each age band.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/uk-minimum-wage-2026-27",
  },
};

export default function UKMinimumWage202627() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "UK Minimum Wage 2026/27: £12.71 NLW, Rates & Take-Home Pay" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "UK Minimum Wage 2026/27: £12.71 NLW, Rates & Take-Home Pay",
              "description": "Complete guide to UK minimum wage and National Living Wage rates from 1 April 2026. See the new £12.71 NLW, rates by age, and take-home pay after tax.",
              "datePublished": "2026-04-06T00:00:00.000Z",
              "dateModified": "2026-04-08T00:00:00.000Z",
              "author": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "publisher": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "mainEntityOfPage": "https://www.salarytakehome.co.uk/blog/uk-minimum-wage-2026-27",
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the National Living Wage from April 2026?",
                  "acceptedAnswer": { "@type": "Answer", "text": "From 1 April 2026, the National Living Wage for workers aged 21 and over is £12.71 per hour, a 4.1% increase from the £12.21 rate in force from April 2025. This equates to around £24,785 per year for a full-time worker on a 37.5-hour week." }
                },
                {
                  "@type": "Question",
                  "name": "What are the new UK minimum wage rates for 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "From 1 April 2026: workers aged 21+ get £12.71/hour (the National Living Wage), 18-20 year olds get £10.85/hour (up 8.5%), and under-18s and apprentices get £8.00/hour (up 6.0%). The Accommodation Offset is £11.10/day." }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between the National Minimum Wage and the National Living Wage?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The National Living Wage (NLW) is the highest band of the National Minimum Wage, applying to workers aged 21 and over. The National Minimum Wage (NMW) covers younger workers and apprentices at lower rates. Both are statutory minimums enforced by HMRC." }
                },
                {
                  "@type": "Question",
                  "name": "How much is the 2026 minimum wage per year?",
                  "acceptedAnswer": { "@type": "Answer", "text": "On a 37.5-hour week × 52 weeks, the 2026/27 National Living Wage of £12.71/hour equates to £24,784.50 per year gross. After income tax and NI (standard tax code, no pension, no student loan), take-home is roughly £21,745/year or about £1,812/month." }
                },
                {
                  "@type": "Question",
                  "name": "What is the Real Living Wage and how is it different from the NLW?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The Real Living Wage is a voluntary, higher hourly rate set by the Living Wage Foundation based on the actual cost of living. The National Living Wage is the legal minimum set by the UK government. Employers can choose to sign up as accredited Living Wage employers and pay the higher voluntary rate." }
                },
                {
                  "@type": "Question",
                  "name": "What should I do if I'm not being paid the minimum wage?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Check your payslip and calculate your hourly rate (gross pay ÷ hours worked). If you're below the legal minimum for your age, raise it with your employer in writing. If that doesn't work, contact ACAS or report the employer to HMRC's National Minimum Wage enforcement team on 0300 123 1100. You can claim back up to 6 years of underpayment and employers can be fined up to 200% of the arrears." }
                }
              ]
            }
          ]
        }) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                Salary Guide
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-04-06">
                April 6, 2026
              </time>
              <span className="text-gray-500 text-sm">9 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: April 2026 &middot; Reflects 2026/27 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              UK Minimum Wage 2026/27: £12.71 NLW, Rates &amp; Take-Home Pay
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every new hourly rate that came into force on 1 April 2026, with take-home pay at each age band and your rights if you're being underpaid.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The headline numbers</h2>
              <p className="text-gray-700 mb-4">
                On 1 April 2026, the National Living Wage for workers aged 21 and over rose by 4.1% to <strong>£12.71 per hour</strong>, up from £12.21. Around 2.7 million workers are expected to benefit directly. Younger workers and apprentices received above-inflation rises too — the 18–20 band is up 8.5% to £10.85 as part of a gradual policy move to align it with the adult rate.
              </p>
              <div className="grid lg:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">What it means</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Full-time NLW salary: ~£24,785/year gross</li>
                    <li>• Take-home: ~£21,745/year or £1,812/month</li>
                    <li>• NLW earners stay well below the £12,570 tax-free allowance on NI? No — they pay NI on the slice above £12,570</li>
                    <li>• Roughly £975/year more than the 2025/26 NLW</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Who sets the rates</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Recommended by the independent Low Pay Commission</li>
                    <li>• Set by UK Government via Parliament</li>
                    <li>• Enforced by HMRC's National Minimum Wage team</li>
                    <li>• Uprated every April</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Full rates table (from 1 April 2026)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">From April 2025</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">From April 2026</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Increase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">National Living Wage (21+)</td>
                      <td className="border border-gray-200 px-4 py-3">£12.21</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£12.71</td>
                      <td className="border border-gray-200 px-4 py-3">+4.1%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-semibold">18–20 year old rate</td>
                      <td className="border border-gray-200 px-4 py-3">£10.00</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£10.85</td>
                      <td className="border border-gray-200 px-4 py-3">+8.5%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">16–17 year old rate</td>
                      <td className="border border-gray-200 px-4 py-3">£7.55</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£8.00</td>
                      <td className="border border-gray-200 px-4 py-3">+6.0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-semibold">Apprentice rate</td>
                      <td className="border border-gray-200 px-4 py-3">£7.55</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£8.00</td>
                      <td className="border border-gray-200 px-4 py-3">+6.0%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">Accommodation Offset (per day)</td>
                      <td className="border border-gray-200 px-4 py-3">£10.66</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">£11.10</td>
                      <td className="border border-gray-200 px-4 py-3">+4.1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                The Apprentice Rate applies to apprentices aged under 19, and to apprentices aged 19 or over who are in the first year of their apprenticeship. All other apprentices must be paid the rate for their age band. The Accommodation Offset is the maximum daily amount an employer can deduct from wages for provided accommodation while still meeting minimum wage rules.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What the new NLW looks like in annual terms</h2>
              <p className="text-gray-700 mb-4">
                Here's what each new rate works out to over a year, and what a full-time worker actually takes home after income tax and National Insurance. We assume a 37.5-hour week × 52 weeks, standard 1257L tax code, no pension and no student loan.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Hourly</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Weekly (37.5h)</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Annual gross</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Annual take-home</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">NLW (21+)</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">£12.71</td>
                      <td className="border border-gray-200 px-4 py-3">£476.63</td>
                      <td className="border border-gray-200 px-4 py-3">£24,784.50</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">~£21,745</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">18–20</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">£10.85</td>
                      <td className="border border-gray-200 px-4 py-3">£406.88</td>
                      <td className="border border-gray-200 px-4 py-3">£21,157.50</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">~£18,827</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">16–17 / Apprentice</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">£8.00</td>
                      <td className="border border-gray-200 px-4 py-3">£300.00</td>
                      <td className="border border-gray-200 px-4 py-3">£15,600.00</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-700 font-semibold">~£14,372</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  Want your exact figures? Use the <Link href="/hourly-wage" className="text-blue-700 hover:underline font-semibold">hourly wage calculator</Link> to enter your actual hours per week, or the <Link href="/take-home-pay-calculator" className="text-blue-700 hover:underline font-semibold">take-home pay calculator</Link> for full tax, NI, pension and student loan breakdowns.
                </p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How tax hits a minimum wage salary</h2>
              <p className="text-gray-700 mb-4">
                A full-time worker on the 2026/27 National Living Wage earns £24,784.50 gross. Here's where that money goes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Deduction</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">How it's calculated</th>
                      <th className="border border-gray-200 px-4 py-3 text-right font-semibold">Annual</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Gross salary</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">£12.71 × 37.5 × 52</td>
                      <td className="border border-gray-200 px-4 py-3 text-right font-semibold">£24,784.50</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Income tax (20%)</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">(£24,784.50 – £12,570) × 20%</td>
                      <td className="border border-gray-200 px-4 py-3 text-right">£2,442.90</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Employee NI (8%)</td>
                      <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">(£24,784.50 – £12,570) × 8%</td>
                      <td className="border border-gray-200 px-4 py-3 text-right">£977.16</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-semibold">Take-home</td>
                      <td className="border border-gray-200 px-4 py-3"></td>
                      <td className="border border-gray-200 px-4 py-3 text-right font-semibold text-green-700">£21,364.44</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-4 text-sm">
                That works out to about £1,780/month net (before any workplace pension opt-in). Because the Personal Allowance is frozen at £12,570, every future NLW rise creates slightly more tax liability — a form of fiscal drag even at the bottom of the pay scale. For a breakdown of all the 2026/27 tax changes see our <Link href="/blog/uk-tax-changes-2026-27" className="text-blue-600 hover:text-blue-800 underline font-semibold">UK Tax Changes 2026/27 guide</Link>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">National Living Wage vs Real Living Wage</h2>
              <p className="text-gray-700 mb-4">
                The <strong>National Living Wage</strong> is the legal minimum for workers aged 21+, set by Parliament and enforced by HMRC. The <strong>Real Living Wage</strong> is a voluntary higher rate calculated by the Living Wage Foundation based on the actual cost of living, with separate rates for London and the rest of the UK. Over 14,000 UK employers choose to pay the Real Living Wage as an accredited Living Wage Employer.
              </p>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <p className="text-sm text-blue-900">
                  Checking if your employer is accredited is easy — search the Living Wage Foundation's register at <a href="https://www.livingwage.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">livingwage.org.uk</a>. Many employers advertise it as a benefit when hiring.
                </p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What counts as working time (and what doesn't)</h2>
              <p className="text-gray-700 mb-4">
                One of the most common causes of minimum wage underpayment is employers failing to pay for time that legally counts as work. All of the following must be paid at least at minimum wage rates:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Time spent travelling between job sites during the working day (not your commute to and from home)</li>
                <li>Mandatory training during working hours</li>
                <li>Time spent opening up or closing down (cashing up, locking up, restocking)</li>
                <li>Compulsory meetings or briefings</li>
                <li>Time "on call" at the workplace, even if you're not actively working</li>
                <li>Uniform changing time if it's compulsory to change on-site</li>
              </ul>
              <p className="text-gray-700 mt-4 text-sm">
                Unpaid trial shifts beyond a short observation period are almost always unlawful under minimum wage rules. If you're asked to do more than a brief observation unpaid, that's a red flag.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to check you're being paid correctly</h2>
              <ol className="list-decimal list-inside text-gray-700 space-y-3">
                <li><strong>Work out your effective hourly rate.</strong> Divide your gross pay for the period by the total hours you actually worked in that period (including any unpaid overtime and legally-counted working time).</li>
                <li><strong>Compare to the rate for your age.</strong> Use the table above. If you turn 21 mid-pay-period, you move to the NLW from your next pay reference period.</li>
                <li><strong>Check deductions.</strong> Employers can't deduct money for tools, uniforms, training or till shortages if it would take your pay below the legal minimum. The Accommodation Offset is the only deduction allowed to count towards minimum wage.</li>
                <li><strong>Raise it in writing.</strong> If you think you're being underpaid, write to your employer asking them to explain and correct the underpayment, including any arrears.</li>
                <li><strong>Escalate if needed.</strong> Contact ACAS on 0300 123 1100 for confidential advice, or report your employer to HMRC using the online form at <a href="https://www.gov.uk/government/publications/pay-and-work-rights-complaints" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">gov.uk/pay-and-work-rights-complaints</a>. You can claim up to 6 years of underpayment back.</li>
              </ol>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Work out your exact take-home pay</h2>
              <p className="text-gray-700 mb-6">
                Use our free hourly wage calculator to convert your hourly rate into annual, weekly, and take-home pay — with full support for 2026/27 tax rates, pension contributions, and student loans.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hourly-wage"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Hourly Wage Calculator →
                </Link>
                <Link
                  href="/take-home-pay-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  Take-Home Pay Calculator →
                </Link>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What is the UK minimum wage from April 2026?</h3>
                  <p className="text-gray-600">
                    From 1 April 2026: £12.71/hour for workers aged 21 and over (the National Living Wage), £10.85/hour for 18–20 year olds, and £8.00/hour for 16–17 year olds and apprentices in the first year of their apprenticeship.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">When did the new rates start?</h3>
                  <p className="text-gray-600">
                    The new rates came into force on 1 April 2026. Any hours worked on or after that date must be paid at the new rate. Pay reference periods that straddle 1 April are split between the two rates.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How much tax do I pay on minimum wage?</h3>
                  <p className="text-gray-600">
                    A full-time NLW worker (£24,784.50/year) pays around £2,443 in income tax and £977 in National Insurance, taking home roughly £21,365/year or £1,780/month. Part-time workers earning under £12,570 pay no income tax.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Is the minimum wage higher in London?</h3>
                  <p className="text-gray-600">
                    No. The statutory National Living Wage and National Minimum Wage are the same across the UK. However, the voluntary Real Living Wage does have a separate (higher) rate for London.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What if I'm self-employed?</h3>
                  <p className="text-gray-600">
                    The minimum wage only applies to workers and employees, not to genuinely self-employed people. However, if you're labelled "self-employed" but your working arrangements look more like employment (set hours, set location, lack of control), you may actually be a "worker" for minimum wage purposes. ACAS and Citizens Advice can help you check your employment status.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Can my employer deduct money for uniform or tools?</h3>
                  <p className="text-gray-600">
                    Not if it would take your pay below the legal minimum wage. Deductions for uniforms, tools, training, or till shortages must not breach the NMW. The only exception is the Accommodation Offset (£11.10/day from April 2026) for employer-provided housing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What should I do if my employer isn't paying the minimum wage?</h3>
                  <p className="text-gray-600">
                    First raise it with your employer in writing. If nothing changes, contact ACAS on 0300 123 1100 or make a complaint to HMRC's NMW enforcement team. You can claim back up to 6 years of arrears, and employers can be fined up to 200% of the underpayment plus public naming.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay informed</h2>
              <p className="text-gray-700 mb-4">
                All calculators on this site use the new 2026/27 rates. For official rate tables and eligibility rules, see <a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">GOV.UK — National Minimum Wage rates</a>.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for general information only and is not employment or legal advice. Take-home figures assume standard 1257L tax code, no pension, and no student loan. Your exact figures will vary based on your personal circumstances. Information accurate as of April 2026.
              </p>
            </div>
          </div>

          <RelatedArticles articles={[
            { href: "/blog/uk-minimum-wage-2025-26", title: "UK Minimum Wage 2025/26", category: "Salary Guide", description: "Last year's rates for comparison." },
            { href: "/blog/uk-tax-changes-2026-27", title: "UK Tax Changes 2026/27", category: "Tax Updates", description: "Every tax change taking effect this year." },
            { href: "/blog/supermarket-pay-rises-2026", title: "Supermarket Pay Rises 2026", category: "Salary Guide", description: "Compare Tesco, Aldi, Lidl, M&S, Sainsbury's and Morrisons." },
            { href: "/blog/30k-salary-take-home", title: "£30k Salary Take-Home Pay", category: "Salary Guide", description: "Full breakdown of a £30,000 salary." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
