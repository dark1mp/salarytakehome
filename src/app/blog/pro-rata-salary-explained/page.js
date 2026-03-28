import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Pro-Rata Salary Explained: Part-Time Pay, Holiday & Pension in the UK",
  description: "Understand how pro-rata salary works for part-time workers in the UK. Learn to calculate your pay, holiday entitlement, pension, and tax implications.",
  keywords: "pro rata salary meaning, pro rata calculation uk, part time salary calculator, pro rata holiday entitlement, part time worker rights, pro rata pension",
  openGraph: {
    title: "Pro-Rata Salary Explained: Part-Time Pay, Holiday & Pension",
    description: "Complete guide to pro-rata salary calculations for UK part-time workers.",
    type: "article",
    publishedTime: "2026-03-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SalaryTakeHome Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro-Rata Salary Explained: UK Guide",
    description: "How part-time pay, holiday, and pension work on a pro-rata basis.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/pro-rata-salary-explained",
  },
};

export default function ProRataSalaryExplained() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Pro-Rata Salary Explained: Part-Time Pay, Holiday & Pension in the UK",
        "description": "Understand how pro-rata salary works for part-time workers in the UK. Learn to calculate your pay, holiday entitlement, pension, and tax implications.",
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
          "@id": "https://www.salarytakehome.co.uk/blog/pro-rata-salary-explained"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does pro-rata salary mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pro-rata salary means your pay is calculated proportionally based on the hours you work compared to a full-time equivalent. If a full-time role pays £40,000 for 37.5 hours per week and you work 22.5 hours (3 days), your pro-rata salary would be £24,000."
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate my pro-rata holiday entitlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Multiply the full-time holiday entitlement (28 days including bank holidays) by the fraction of full-time hours you work. For example, working 3 days per week: 28 × (3/5) = 16.8 days per year. Employers often round this up."
            }
          },
          {
            "@type": "Question",
            "name": "Do part-time workers get the full personal tax allowance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All UK workers receive the full £12,570 personal allowance regardless of whether they work full-time or part-time. This means part-time workers on lower pro-rata salaries often pay a lower effective tax rate than their full-time equivalents."
            }
          },
          {
            "@type": "Question",
            "name": "How does going part-time affect my pension?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your pension contributions are calculated on your actual pro-rata salary, not the full-time equivalent. Both your contributions and employer contributions are based on the reduced salary. However, you still receive tax relief at your marginal rate on all pension contributions."
            }
          }
        ]
      }
    ]
  };

  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Pro-Rata Salary Explained" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
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
              Pro-Rata Salary Explained: Part-Time Pay, Holiday & Pension in the UK
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about how pro-rata works for part-time employees in the UK, from calculating your salary to understanding your holiday entitlement and pension rights.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Quick Summary</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">Proportional</div>
                <div className="text-white/90 text-sm">Pro-rata = proportional to hours worked</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">£12,570</div>
                <div className="text-white/90 text-sm">Full personal allowance still applies</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">Pro-Rata</div>
                <div className="text-white/90 text-sm">Holiday entitlement is also pro-rata</div>
              </div>
            </div>
          </div>

          {/* How to Calculate Pro-Rata Salary */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Pro-Rata Salary</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The pro-rata salary formula is straightforward. You divide the number of hours you work by the full-time hours, then multiply by the full-time equivalent (FTE) salary.
            </p>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200 mb-6">
              <p className="font-mono text-center text-lg text-gray-900">
                (Your hours &divide; Full-time hours) &times; FTE salary = <strong>Pro-rata salary</strong>
              </p>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Here are some common examples based on a standard 37.5-hour full-time week (5 days of 7.5 hours):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">FTE Salary</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Days/Week</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Hours/Week</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Pro-Rata Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">£30,000</td>
                    <td className="p-3 text-gray-700">3 days</td>
                    <td className="p-3 text-gray-700">22.5h</td>
                    <td className="p-3 font-semibold text-gray-900">£18,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-3 text-gray-700">£30,000</td>
                    <td className="p-3 text-gray-700">4 days</td>
                    <td className="p-3 text-gray-700">30h</td>
                    <td className="p-3 font-semibold text-gray-900">£24,000</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">£40,000</td>
                    <td className="p-3 text-gray-700">3 days</td>
                    <td className="p-3 text-gray-700">22.5h</td>
                    <td className="p-3 font-semibold text-gray-900">£24,000</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-3 text-gray-700">£40,000</td>
                    <td className="p-3 text-gray-700">4 days</td>
                    <td className="p-3 text-gray-700">30h</td>
                    <td className="p-3 font-semibold text-gray-900">£32,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">£50,000</td>
                    <td className="p-3 text-gray-700">3 days</td>
                    <td className="p-3 text-gray-700">22.5h</td>
                    <td className="p-3 font-semibold text-gray-900">£30,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Use our <Link href="/pro-rata-furlough" className="text-blue-600 hover:text-blue-800 underline font-semibold">pro-rata salary calculator</Link> to work out your exact figure based on any combination of hours and salary.
            </p>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Pro-Rata Holiday Entitlement */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro-Rata Holiday Entitlement</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Full-time workers in the UK are entitled to a minimum of 28 days of paid holiday per year (including bank holidays). Part-time workers receive a proportional share based on the days or hours they work.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Working Pattern</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Days/Week</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Holiday Entitlement</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">In Hours (8h days)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">Full-time</td>
                    <td className="p-3 text-gray-700">5 days</td>
                    <td className="p-3 font-semibold text-gray-900">28 days</td>
                    <td className="p-3 text-gray-700">224 hours</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-3 text-gray-700">4 days/week</td>
                    <td className="p-3 text-gray-700">4 days</td>
                    <td className="p-3 font-semibold text-gray-900">22.4 days</td>
                    <td className="p-3 text-gray-700">179.2 hours</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">3 days/week</td>
                    <td className="p-3 text-gray-700">3 days</td>
                    <td className="p-3 font-semibold text-gray-900">16.8 days</td>
                    <td className="p-3 text-gray-700">134.4 hours</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">2.5 days/week</td>
                    <td className="p-3 text-gray-700">2.5 days</td>
                    <td className="p-3 font-semibold text-gray-900">14 days</td>
                    <td className="p-3 text-gray-700">112 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              For detailed guidance on calculating your specific entitlement, see the official <a href="https://www.gov.uk/holiday-entitlement-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK holiday entitlement</a> page.
            </p>
          </div>

          {/* Tax Advantages of Part-Time Work */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tax Advantages of Part-Time Work</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              One of the key financial benefits of part-time work is that you still receive the full £12,570 personal allowance. This means a larger proportion of your income is tax-free compared to your full-time equivalent salary.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">FTE</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Pro-Rata (3 days)</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Tax Band</th>
                    <th className="text-left p-3 border-b border-gray-200 font-semibold text-gray-900">Effective Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">£40,000</td>
                    <td className="p-3 text-gray-700">£24,000</td>
                    <td className="p-3 text-gray-700">Basic only</td>
                    <td className="p-3 font-semibold text-green-600">~18%</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-3 text-gray-700">£50,000</td>
                    <td className="p-3 text-gray-700">£30,000</td>
                    <td className="p-3 text-gray-700">Basic only</td>
                    <td className="p-3 font-semibold text-green-600">~22%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-3 text-gray-700">£60,000</td>
                    <td className="p-3 text-gray-700">£36,000</td>
                    <td className="p-3 text-gray-700">Basic only</td>
                    <td className="p-3 font-semibold text-green-600">~24%</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-700">£80,000</td>
                    <td className="p-3 text-gray-700">£48,000</td>
                    <td className="p-3 text-gray-700">Basic only</td>
                    <td className="p-3 font-semibold text-green-600">~26%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Compare these to the full-time rates: someone earning £60,000 full-time would enter the 40% higher rate band, but working 3 days keeps the pro-rata salary of £36,000 entirely within the basic rate band. Read more about how this affects your pay in our <Link href="/blog/uk-tax-changes-2025-26" className="text-blue-600 hover:text-blue-800 underline font-semibold">UK tax changes 2025/26</Link> guide.
            </p>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Pro-Rata Pension Contributions */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro-Rata Pension Contributions</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you work part-time, your pension contributions are calculated based on your actual pro-rata salary, not the full-time equivalent. Under auto-enrolment, you contribute a minimum of 5% of qualifying earnings and your employer contributes at least 3%.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The good news is that tax relief still applies at your marginal rate. If you are a basic rate taxpayer, you get 20% tax relief on every pound you contribute to your pension. This makes pension contributions particularly efficient for part-time workers who stay within the basic rate band.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For a deeper look at how to make the most of your pension tax relief, read our guide on <Link href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">pension contributions and tax relief</Link>.
            </p>
          </div>

          {/* Your Rights as a Part-Time Worker */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights as a Part-Time Worker</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Part-Time Workers (Prevention of Less Favourable Treatment) Regulations 2000 protect part-time employees from being treated less favourably than comparable full-time workers. This covers several important areas:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1 font-bold">&#10003;</span>
                <span><strong>Equal hourly rate</strong> as full-time colleagues in comparable roles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1 font-bold">&#10003;</span>
                <span><strong>Same access to training</strong> and career development opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1 font-bold">&#10003;</span>
                <span><strong>Equal consideration for promotion</strong> and transfer opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1 font-bold">&#10003;</span>
                <span><strong>Fair redundancy</strong> selection criteria and payments</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              For full details on your legal rights, see the official <a href="https://www.gov.uk/part-time-worker-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK part-time worker rights</a> page.
            </p>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Term-Time Only Contracts */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Term-Time Only Contracts</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Term-time only contracts work differently from standard part-time arrangements. Instead of reducing hours per week, you work full weeks but only during school terms. The calculation accounts for the number of weeks worked rather than just hours per week.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For example, a teaching assistant working 39 weeks per year (out of 52) at a full-time salary of £25,000 would receive a pro-rata salary of approximately £18,750 (39/52 &times; £25,000). This is usually spread across 12 monthly payments for consistency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you are on a term-time contract and want to understand your effective hourly rate, our <Link href="/hourly-wage" className="text-blue-600 hover:text-blue-800 underline font-semibold">hourly wage calculator</Link> can help you work out what you are earning per hour.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mb-8 text-white text-center shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Calculate Your Pro-Rata Salary</h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Use our free calculator to instantly work out your pro-rata salary, estimated tax, and take-home pay based on your working hours.
            </p>
            <Link href="/pro-rata-furlough" className="inline-flex items-center px-8 py-3 bg-white text-green-700 font-semibold rounded-xl hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Calculate Your Pro-Rata Pay &rarr;
            </Link>
          </div>

          {/* Related Articles */}
          <RelatedArticles
            articles={[
              {
                href: "/blog/pay-rise-negotiation-guide",
                title: "How to Negotiate a Pay Rise in 2026",
                description: "Proven strategies to negotiate a higher salary in the UK.",
                category: "Salary Guide",
              },
              {
                href: "/blog/uk-tax-changes-2025-26",
                title: "UK Tax Changes 2025/26",
                description: "Complete guide to the latest tax rates and thresholds.",
                category: "Tax Updates",
              },
              {
                href: "/blog/maximize-take-home-pay-2024",
                title: "10 Ways to Maximize Your Take-Home Pay",
                description: "Proven strategies to keep more of your hard-earned money.",
                category: "Money Tips",
              },
              {
                href: "/blog/pension-contributions-tax-relief",
                title: "Pension Contributions and Tax Relief",
                description: "How pension contributions reduce your tax bill.",
                category: "Pensions",
              },
            ]}
          />
        </article>
      </div>
    </LayoutWrapper>
  );
}
