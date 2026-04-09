import React from "react";
import Link from "next/link";
import LayoutWrapper from "../components/LayoutWrapper";
import AdUnit from "../components/AdUnit";

const SALARIES = [
  { amount: 20000, label: "\u00a320k", takeHome: 17920, monthly: 1493, rate: "10.4%", band: "basic" },
  { amount: 25000, label: "\u00a325k", takeHome: 21520, monthly: 1793, rate: "13.9%", band: "basic" },
  { amount: 30000, label: "\u00a330k", takeHome: 25120, monthly: 2093, rate: "16.3%", band: "basic" },
  { amount: 35000, label: "\u00a335k", takeHome: 28720, monthly: 2393, rate: "18.0%", band: "basic" },
  { amount: 40000, label: "\u00a340k", takeHome: 32320, monthly: 2693, rate: "19.2%", band: "basic" },
  { amount: 45000, label: "\u00a345k", takeHome: 35920, monthly: 2993, rate: "20.2%", band: "basic" },
  { amount: 50000, label: "\u00a350k", takeHome: 39520, monthly: 3293, rate: "20.9%", band: "basic" },
  { amount: 55000, label: "\u00a355k", takeHome: 42457, monthly: 3538, rate: "22.8%", band: "higher" },
  { amount: 60000, label: "\u00a360k", takeHome: 45358, monthly: 3780, rate: "24.4%", band: "higher" },
  { amount: 65000, label: "\u00a365k", takeHome: 48257, monthly: 4021, rate: "25.8%", band: "higher" },
  { amount: 70000, label: "\u00a370k", takeHome: 51157, monthly: 4263, rate: "26.9%", band: "higher" },
  { amount: 75000, label: "\u00a375k", takeHome: 54057, monthly: 4505, rate: "27.9%", band: "higher" },
  { amount: 80000, label: "\u00a380k", takeHome: 56957, monthly: 4746, rate: "28.8%", band: "higher" },
  { amount: 85000, label: "\u00a385k", takeHome: 59857, monthly: 4988, rate: "29.6%", band: "higher" },
  { amount: 90000, label: "\u00a390k", takeHome: 62757, monthly: 5230, rate: "30.3%", band: "higher" },
  { amount: 95000, label: "\u00a395k", takeHome: 65657, monthly: 5471, rate: "30.9%", band: "higher" },
  { amount: 100000, label: "\u00a3100k", takeHome: 68557, monthly: 5713, rate: "31.4%", band: "trap" },
];

function getBandStyles(band) {
  switch (band) {
    case "basic":
      return { border: "border-green-500", text: "text-green-700", bg: "bg-green-50" };
    case "higher":
      return { border: "border-amber-500", text: "text-amber-700", bg: "bg-amber-50" };
    case "trap":
      return { border: "border-red-500", text: "text-red-700", bg: "bg-red-50" };
    default:
      return { border: "border-gray-300", text: "text-gray-700", bg: "bg-gray-50" };
  }
}

export default function SalaryBreakdownHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "UK Salary After Tax Breakdown 2026/27",
        description: "Take-home pay for UK salaries from \u00a320,000 to \u00a3100,000 in 2026/27.",
        numberOfItems: SALARIES.length,
        itemListElement: SALARIES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${s.label} Salary After Tax UK`,
          url: `https://www.salarytakehome.co.uk/blog/${s.amount / 1000}k-salary-take-home`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much is \u00a330,000 after tax in the UK?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On a \u00a330,000 salary in 2026/27, you take home approximately \u00a325,120 per year (\u00a32,093 per month) after income tax and National Insurance. Your effective tax rate is around 16.3%.",
            },
          },
          {
            "@type": "Question",
            name: "What is the UK higher rate tax threshold?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For 2026/27, the higher rate (40%) tax threshold is \u00a350,270. This means you pay 20% on earnings between \u00a312,570 and \u00a350,270, and 40% on earnings above \u00a350,270 up to \u00a3125,140.",
            },
          },
          {
            "@type": "Question",
            name: "How much tax do I pay on \u00a350,000?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On a \u00a350,000 salary in 2026/27, you take home approximately \u00a339,520 per year (\u00a33,293 per month). Your effective tax rate is around 20.9%, covering both income tax and National Insurance contributions.",
            },
          },
          {
            "@type": "Question",
            name: "What is the \u00a3100k tax trap?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The \u00a3100k tax trap occurs because your Personal Allowance (\u00a312,570) is reduced by \u00a31 for every \u00a32 you earn above \u00a3100,000. This creates an effective marginal tax rate of around 60% on earnings between \u00a3100,000 and \u00a3125,140, making each additional pound worth only 40p after tax and NI.",
            },
          },
          {
            "@type": "Question",
            name: "How much is \u00a340,000 after tax?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On a \u00a340,000 salary in 2026/27, you take home approximately \u00a332,320 per year (\u00a32,693 per month) after income tax and National Insurance. Your effective tax rate is around 19.2%.",
            },
          },
          {
            "@type": "Question",
            name: "What is the effective tax rate on \u00a375,000?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "On a \u00a375,000 salary in 2026/27, your effective tax rate is approximately 27.9%. You take home around \u00a354,057 per year (\u00a34,505 per month) after income tax and National Insurance deductions.",
            },
          },
          {
            "@type": "Question",
            name: "How is National Insurance calculated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For 2026/27, employees pay 8% NI on earnings between \u00a312,570 and \u00a350,270 per year, and 2% on earnings above \u00a350,270. There is no NI on earnings below the Primary Threshold of \u00a312,570. Employer NI is a separate 15% charge above \u00a35,000.",
            },
          },
        ],
      },
    ],
  };

  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Salary Breakdown" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-12">

          <AdUnit slot="1586479879" hideOnMobile />

          {/* Header */}
          <div className="mb-8">
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">
              Last updated: April 2026 &middot; Reflects 2026/27 tax year
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              UK Salary After Tax 2026/27: Take-Home Pay by Salary Level
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              How much of your salary do you actually keep? Below you&apos;ll find take-home pay figures for every
              {" "}<strong>&pound;5,000 step from &pound;20,000 to &pound;100,000</strong>, reflecting 2026/27 income tax and National Insurance
              rates. Click any salary card to see a full breakdown including tax bands, NI contributions,
              and monthly take-home pay.
            </p>
          </div>

          {/* Band legend */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-green-500" />
              <span className="text-gray-600">Basic rate only</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-amber-500" />
              <span className="text-gray-600">Into higher rate (40%)</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-red-500" />
              <span className="text-gray-600">PA taper zone</span>
            </span>
          </div>

          {/* Salary cards grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {SALARIES.map((s) => {
              const styles = getBandStyles(s.band);
              return (
                <Link
                  key={s.amount}
                  href={`/blog/${s.amount / 1000}k-salary-take-home`}
                  className={`block bg-white rounded-2xl shadow-md border-l-4 ${styles.border} p-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-200`}
                >
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    &pound;{s.amount.toLocaleString("en-GB")}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      Take-home: <span className="font-semibold text-gray-800">&pound;{s.takeHome.toLocaleString("en-GB")}</span>
                    </p>
                    <p>
                      Monthly: <span className="font-semibold text-gray-800">&pound;{s.monthly.toLocaleString("en-GB")}</span>
                    </p>
                    <p className={`font-semibold ${styles.text}`}>
                      {s.rate} effective rate
                    </p>
                    {s.band === "trap" && (
                      <p className="text-xs text-red-600 font-medium mt-1">
                        &#9888; PA taper
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* In-article ad */}
          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Educational cards */}
          <div className="space-y-6 mt-10 mb-10">

            {/* Card 1: How UK Income Tax Works */}
            <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shrink-0">
                  &#163;
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">How UK Income Tax Works</h2>
                  <p className="text-gray-600 mb-4">
                    Everyone in the UK gets a tax-free Personal Allowance of &pound;12,570. After that, income tax
                    is charged in bands. The more you earn, the higher the rate on each additional pound &mdash;
                    but only the portion within each band is taxed at that rate.
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Band</th>
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Taxable income</th>
                          <th className="text-left py-2 font-semibold text-gray-700">Rate</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-600">
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4">Personal Allowance</td>
                          <td className="py-2 pr-4">Up to &pound;12,570</td>
                          <td className="py-2">0%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4">Basic rate</td>
                          <td className="py-2 pr-4">&pound;12,571 &ndash; &pound;50,270</td>
                          <td className="py-2">20%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4">Higher rate</td>
                          <td className="py-2 pr-4">&pound;50,271 &ndash; &pound;125,140</td>
                          <td className="py-2">40%</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">Additional rate</td>
                          <td className="py-2 pr-4">Over &pound;125,140</td>
                          <td className="py-2">45%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    These thresholds are frozen until April 2031. Use our{" "}
                    <Link href="/take-home-pay-calculator" className="text-blue-600 hover:underline font-medium">
                      Take-Home Pay Calculator
                    </Link>{" "}
                    for a personalised breakdown including student loans, pensions, and Scottish tax rates.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: The £100k Tax Trap */}
            <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-red-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xl shrink-0">
                  &#9888;
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">The &pound;100k Tax Trap</h2>
                  <p className="text-gray-600 mb-4">
                    Once your income exceeds &pound;100,000, your Personal Allowance is reduced by &pound;1 for every
                    &pound;2 earned above the threshold. This creates a hidden 60% effective marginal rate on income
                    between &pound;100,000 and &pound;125,140. For example, a &pound;1,000 pay rise from &pound;100,000
                    to &pound;101,000 only puts around &pound;400 in your pocket.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Common strategies to avoid the trap include pension contributions and salary sacrifice.
                    Read our full guide:{" "}
                    <Link href="/blog/100k-tax-trap" className="text-blue-600 hover:underline font-medium">
                      The &pound;100k Tax Trap Explained
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white mb-10">
            <h2 className="text-2xl font-bold mb-3">Want a personalised calculation?</h2>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Our full calculator handles any salary amount, Scottish tax, student loans,
              pension contributions, and multiple tax years.
            </p>
            <Link
              href="/take-home-pay-calculator"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Open Take-Home Pay Calculator
            </Link>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 text-center">
            Figures are estimates for the 2026/27 tax year assuming a standard tax code (1257L),
            no student loan, no pension, and employment income only.
            Use the full calculator for a personalised result.
          </p>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </LayoutWrapper>
  );
}
