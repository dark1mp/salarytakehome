import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "UK Minimum Wage 2025/26: Hourly Rates, Take-Home Pay & Your Rights",
  description: "Complete guide to UK minimum wage and National Living Wage rates for 2025/26 and 2026/27. See hourly rates by age, what you'll take home after tax, and your employment rights.",
  keywords: "uk minimum wage 2025, national living wage 2026, minimum wage rates uk, hourly wage uk, national minimum wage, real living wage, minimum wage take home pay",
  openGraph: {
    title: "UK Minimum Wage 2025/26: Hourly Rates, Take-Home Pay & Your Rights",
    description: "Complete guide to UK minimum wage and National Living Wage rates for 2025/26 and 2026/27.",
    type: "article",
    publishedTime: "2026-03-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SalaryTakeHome Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Minimum Wage 2025/26: Hourly Rates & Take-Home Pay",
    description: "Complete guide to UK minimum wage rates and what you'll actually take home after tax.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/uk-minimum-wage-2025-26",
  },
};

export default function UKMinimumWage202526() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "UK Minimum Wage 2025/26: Hourly Rates, Take-Home Pay & Your Rights" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "UK Minimum Wage 2025/26: Hourly Rates, Take-Home Pay & Your Rights",
              "description": "Complete guide to UK minimum wage and National Living Wage rates for 2025/26 and 2026/27. See hourly rates by age, what you'll take home after tax, and your employment rights.",
              "author": {
                "@type": "Organization",
                "name": "SalaryTakeHome",
                "url": "https://www.salarytakehome.co.uk"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SalaryTakeHome",
                "url": "https://www.salarytakehome.co.uk",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.salarytakehome.co.uk/opengraph-image.png"
                }
              },
              "datePublished": "2026-03-27T00:00:00.000Z",
              "dateModified": "2026-03-27T00:00:00.000Z",
              "mainEntityOfPage": "https://www.salarytakehome.co.uk/blog/uk-minimum-wage-2025-26",
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the National Living Wage from April 2026?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "From April 2026, the National Living Wage for workers aged 21 and over rises to £12.71 per hour, up from £12.21 in 2025/26. This equates to approximately £24,785 per year for a full-time worker on a 37.5-hour week."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between the National Minimum Wage and the National Living Wage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The National Living Wage (NLW) is the highest band of the National Minimum Wage, applying to workers aged 21 and over. The National Minimum Wage (NMW) covers younger workers aged 16-20 and apprentices at lower rates. Both are statutory minimums set by the UK government."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much will I take home on minimum wage after tax?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On the 2025/26 National Living Wage of £12.21/hour working 37.5 hours per week, your annual gross salary is £23,810. After income tax and National Insurance, your take-home pay is approximately £21,063 per year, or £1,755 per month."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the Real Living Wage and how does it differ from the National Living Wage?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Real Living Wage is a voluntary higher rate set by the Living Wage Foundation based on actual living costs. It is currently £12.60 per hour nationwide and £13.85 in London. Unlike the National Living Wage (£12.21 in 2025/26), employers are not legally required to pay it, but over 14,000 UK employers choose to do so."
                  }
                }
              ]
            }
          ]
        }) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
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
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              UK Minimum Wage 2025/26: Hourly Rates, Take-Home Pay &amp; Your Rights
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about the National Minimum Wage and National Living Wage in the UK &mdash; current rates, upcoming changes from April 2026, what you&apos;ll actually take home after tax, and your rights as a worker.
            </p>
          </div>

          {/* Quick Summary Box */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Quick Summary: UK Minimum Wage Rates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
                <p className="text-green-100 text-sm mb-1">NLW 2025/26 (21+)</p>
                <p className="text-2xl lg:text-3xl font-bold">&pound;12.21/hr</p>
                <p className="text-green-100 text-sm">From April 2025</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
                <p className="text-green-100 text-sm mb-1">NLW from Apr 2026</p>
                <p className="text-2xl lg:text-3xl font-bold">&pound;12.71/hr</p>
                <p className="text-green-100 text-sm">50p increase</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
                <p className="text-green-100 text-sm mb-1">Real Living Wage</p>
                <p className="text-2xl lg:text-3xl font-bold">&pound;12.60/hr</p>
                <p className="text-green-100 text-sm">&pound;13.85 London</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                The UK minimum wage affects millions of workers across the country. Whether you&apos;re starting your first job, returning to work, or simply checking that your employer is paying you correctly, understanding the current rates and how they translate into real take-home pay is essential.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this guide, we break down every minimum wage rate for 2025/26, show you what&apos;s changing from April 2026, explain the difference between the statutory minimum and the voluntary Real Living Wage, and calculate exactly what you&apos;ll take home after tax and National Insurance.
              </p>
            </div>

            {/* National Living Wage & Minimum Wage Rates */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">National Living Wage &amp; Minimum Wage Rates</h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The UK government sets statutory minimum hourly pay rates each April. The <strong>National Living Wage (NLW)</strong> applies to workers aged 21 and over, while the <strong>National Minimum Wage (NMW)</strong> covers younger workers and apprentices at lower rates.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Age / Status</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">2025/26 Rate</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">2026/27 Rate</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Increase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">21 and over (NLW)</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;12.21</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;12.71</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+&pound;0.50 (4.1%)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">18&ndash;20</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;10.00</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;10.85</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+&pound;0.85 (8.5%)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">16&ndash;17</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;7.55</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;8.00</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+&pound;0.45 (6.0%)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Apprentice&dagger;</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;7.55</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;8.00</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+&pound;0.45 (6.0%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm italic mb-4">
                &dagger;Apprentice rate applies if under 19 or in the first year of their apprenticeship. After the first year, apprentices aged 19+ receive the age-based rate.
              </p>

              <p className="text-gray-700 leading-relaxed">
                These rates are set by the government based on recommendations from the Low Pay Commission. For the latest official rates, visit <a href="https://www.gov.uk/national-minimum-wage-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK National Minimum Wage Rates</a>.
              </p>
            </div>

            {/* What Is the Real Living Wage? */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is the Real Living Wage?</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The <strong>Real Living Wage</strong> is a separate, voluntary rate calculated by the <a href="https://www.livingwage.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Living Wage Foundation</a> based on what people actually need to meet everyday living costs like housing, food, and transport. It is independently calculated each year and is higher than the government&apos;s National Living Wage.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6 border border-green-200">
                <h3 className="font-bold text-gray-900 text-lg mb-3">Real Living Wage rates (2024/25)</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 text-sm">UK (outside London)</p>
                    <p className="text-2xl font-bold text-green-700">&pound;12.60/hour</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">London</p>
                    <p className="text-2xl font-bold text-green-700">&pound;13.85/hour</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Over 14,000 UK employers have chosen to become accredited Living Wage employers, including many household names. The key differences between the two wages are:
              </p>

              <ul className="list-disc list-outside ml-6 space-y-2 mb-4 text-gray-700 leading-relaxed">
                <li><strong>National Living Wage</strong> &mdash; set by the government, legally required, applies to workers aged 21+</li>
                <li><strong>Real Living Wage</strong> &mdash; set by the Living Wage Foundation, voluntary, based on actual cost of living, includes a London weighting</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                If your employer pays the Real Living Wage, you&apos;ll earn &pound;0.39 more per hour than the statutory minimum in 2025/26 &mdash; that&apos;s an extra &pound;760 a year for a full-time worker. In London, the difference is even larger at &pound;1.64 per hour, or over &pound;3,198 per year.
              </p>
            </div>

            {/* Take-Home Pay at Minimum Wage */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Take-Home Pay at Minimum Wage</h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Knowing your hourly rate is one thing &mdash; knowing what you actually take home after income tax and National Insurance is what really matters. The table below shows approximate annual take-home pay for a full-time worker on a 37.5-hour week with a standard 1257L tax code, no pension, and no student loan.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Rate</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Annual Gross</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Income Tax</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">National Insurance</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Annual Take-Home</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Monthly Take-Home</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">NLW 2025/26 (&pound;12.21)</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;23,810</td>
                      <td className="py-3 px-4 text-red-600">&pound;2,248</td>
                      <td className="py-3 px-4 text-red-600">&pound;1,347</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;20,215</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">&pound;1,685</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">NLW 2026/27 (&pound;12.71)</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;24,785</td>
                      <td className="py-3 px-4 text-red-600">&pound;2,443</td>
                      <td className="py-3 px-4 text-red-600">&pound;1,425</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;20,917</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">&pound;1,743</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">Real Living Wage (&pound;12.60)</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;24,570</td>
                      <td className="py-3 px-4 text-red-600">&pound;2,400</td>
                      <td className="py-3 px-4 text-red-600">&pound;1,408</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;20,762</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">&pound;1,730</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">London Living Wage (&pound;13.85)</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;27,008</td>
                      <td className="py-3 px-4 text-red-600">&pound;2,888</td>
                      <td className="py-3 px-4 text-red-600">&pound;1,603</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;22,517</td>
                      <td className="py-3 px-4 text-green-700 font-semibold">&pound;1,876</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm italic mb-4">
                Figures based on 37.5 hours/week, 52 weeks/year, 2025/26 tax rates (20% basic rate, 8% employee NI above threshold). Assumes standard 1257L tax code.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Want to see the exact breakdown for your own situation? Use our <Link href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</Link> for a detailed figure, or try the <Link href="/hourly-wage" className="text-blue-600 hover:text-blue-800 underline font-semibold">hourly wage calculator</Link> to convert between annual salary and hourly rates.
              </p>
            </div>

            {/* Historical Minimum Wage Rates */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Historical Minimum Wage Rates</h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The National Living Wage was introduced in April 2016 at &pound;7.20 per hour. It has risen significantly over the past six years, reflecting the government&apos;s target to reach two-thirds of median earnings.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Tax Year</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">NLW (21+)</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">18&ndash;20 Rate</th>
                      <th className="text-left py-3 px-4 font-bold text-gray-900">Annual Increase</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">2026/27</td>
                      <td className="py-3 px-4 text-green-700 font-bold">&pound;12.71</td>
                      <td className="py-3 px-4 text-gray-900">&pound;10.85</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+4.1%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">2025/26</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;12.21</td>
                      <td className="py-3 px-4 text-gray-900">&pound;10.00</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+6.7%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">2024/25</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;11.44</td>
                      <td className="py-3 px-4 text-gray-900">&pound;8.60</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+9.8%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">2023/24</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;10.42</td>
                      <td className="py-3 px-4 text-gray-900">&pound;7.49</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+9.7%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">2022/23</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;9.50</td>
                      <td className="py-3 px-4 text-gray-900">&pound;6.83</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+6.6%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">2021/22</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;8.91</td>
                      <td className="py-3 px-4 text-gray-900">&pound;6.56</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+2.2%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-700">2020/21</td>
                      <td className="py-3 px-4 text-gray-900 font-semibold">&pound;8.72</td>
                      <td className="py-3 px-4 text-gray-900">&pound;6.45</td>
                      <td className="py-3 px-4 text-green-600 font-semibold">+6.2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Over the past six years, the NLW has increased by nearly &pound;4 per hour &mdash; a rise of over 45%. The largest single increase came in 2024/25 at 9.8%, when the government brought the age threshold down from 23 to 21.
              </p>
            </div>

            {/* Your Rights as a Minimum Wage Worker */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights as a Minimum Wage Worker</h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                The National Minimum Wage is the law. Every employer in the UK must pay at least the minimum rate for your age group. Here are your key rights:
              </p>

              <ul className="list-disc list-outside ml-6 space-y-3 mb-6 text-gray-700 leading-relaxed">
                <li><strong>Right to an itemised payslip</strong> &mdash; all workers are entitled to a payslip showing gross pay, deductions, and net pay. This helps you verify your hourly rate.</li>
                <li><strong>No deductions below the minimum</strong> &mdash; your employer cannot make deductions (for uniforms, cash shortages, etc.) that would bring your pay below the NMW. This is a common area where employers fall foul of the law.</li>
                <li><strong>Tips and service charges don&apos;t count</strong> &mdash; tips, gratuities, and service charges cannot be used to make up minimum wage pay. Your base hourly rate must meet the legal minimum before tips are added.</li>
                <li><strong>Travel time may count as working time</strong> &mdash; if you travel between work assignments (not commuting), this time should be paid at least at the NMW rate.</li>
                <li><strong>HMRC enforcement</strong> &mdash; HM Revenue &amp; Customs enforces minimum wage law. Employers who underpay can face fines of up to 200% of the underpayment (capped at &pound;20,000 per worker) and be publicly named.</li>
                <li><strong>No retaliation</strong> &mdash; it is illegal for your employer to dismiss you or treat you unfairly for asserting your right to the minimum wage.</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                For full details on your rights, visit <a href="https://www.gov.uk/national-minimum-wage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK National Minimum Wage</a> or contact the <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">ACAS helpline</a> for free, confidential advice.
              </p>
            </div>

            {/* What to Do If You're Being Underpaid */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Do If You&apos;re Being Underpaid</h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                If you suspect your employer is paying you less than the minimum wage, here&apos;s what to do:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Check your payslip carefully</h3>
                    <p className="text-gray-700 leading-relaxed">Divide your gross pay by the total hours you worked that pay period. Remember to include any time spent on mandatory training, opening and closing, or travelling between sites. If the resulting hourly rate is below the minimum for your age, you may be underpaid.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Raise it with your employer</h3>
                    <p className="text-gray-700 leading-relaxed">Sometimes underpayment is a genuine payroll error. Speak to your manager or HR department first. Keep a record of any conversations in writing.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Contact HMRC</h3>
                    <p className="text-gray-700 leading-relaxed">If your employer doesn&apos;t resolve the issue, you can report them to HMRC&apos;s National Minimum Wage helpline on <strong>0800 917 2368</strong>. You can make a complaint anonymously. HMRC investigates all complaints and can order employers to pay back wages.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-700 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Get free advice from ACAS</h3>
                    <p className="text-gray-700 leading-relaxed">The <a href="https://www.acas.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Advisory, Conciliation and Arbitration Service (ACAS)</a> provides free, impartial advice on workplace disputes. Call their helpline on <strong>0300 123 1100</strong>.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                For more information on reporting underpayment, visit <a href="https://www.gov.uk/pay-and-work-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Pay and Work Rights</a>.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mb-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Calculate Your Hourly Rate</h2>
              <p className="text-green-100 mb-6 text-lg">
                Whether you&apos;re on minimum wage or earning more, find out exactly what your hourly rate works out to after tax.
              </p>
              <Link href="/hourly-wage" className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors text-lg shadow-lg">
                Use the Hourly Wage Calculator
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <RelatedArticles
            articles={[
              {
                href: "/blog/supermarket-pay-rises-2026",
                category: "Salary Guide",
                title: "Supermarket Pay Rises 2026: How All 6 Major Chains Compare",
              },
              {
                href: "/blog/30k-salary-take-home",
                category: "Salary Guide",
                title: "\u00a330k Salary Take Home Pay Breakdown",
              },
              {
                href: "/blog/pay-rise-negotiation-guide",
                category: "Money Tips",
                title: "How to Negotiate a Pay Rise in 2026",
              },
              {
                href: "/blog/uk-tax-changes-2025-26",
                category: "Tax Planning",
                title: "UK Tax Changes 2025/26: What You Need to Know",
              },
            ]}
          />
        </article>
      </div>
    </LayoutWrapper>
  );
}