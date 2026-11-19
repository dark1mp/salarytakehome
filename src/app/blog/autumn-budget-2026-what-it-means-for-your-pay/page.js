import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Autumn Budget 2026: What It Means for Your Take-Home Pay",
  description: "The Autumn Budget was delivered on 28 October 2026. Income tax and National Insurance are unchanged for 2027/28, but savings and rental income rates jump to 24%, 44% and 49%. Here is what actually changes on your payslip.",
  keywords: "Autumn Budget 2026, Budget 2026 take home pay, 2027/28 tax year, savings income tax 24%, property income tax rates 2027, National Insurance 2027/28, income tax thresholds frozen 2031, fiscal drag",
  openGraph: {
    title: "Autumn Budget 2026: What It Means for Your Take-Home Pay",
    description: "Income tax and NI unchanged for 2027/28, savings and rental rates up to 24/44/49, and thresholds frozen to 2031. What it means for your payslip.",
    type: "article",
    publishedTime: "2026-11-19T00:00:00.000Z",
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
    title: "Autumn Budget 2026: What It Means for Your Pay",
    description: "Income tax and NI unchanged for 2027/28. Savings and rental income rates rise to 24/44/49. Thresholds frozen to 2031.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/autumn-budget-2026-what-it-means-for-your-pay",
  },
};

export default function AutumnBudget2026() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Autumn Budget 2026: What It Means for Your Take-Home Pay" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Autumn Budget 2026: What It Means for Your Take-Home Pay",
              "description": "A plain-English guide to the Autumn Budget delivered on 28 October 2026 and what it changes for PAYE employees from April 2027.",
              "datePublished": "2026-11-19T00:00:00.000Z",
              "dateModified": "2026-11-19T00:00:00.000Z",
              "author": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "publisher": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.salarytakehome.co.uk/blog/autumn-budget-2026-what-it-means-for-your-pay" },
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "When was the Autumn Budget 2026?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The Autumn Budget was delivered on Wednesday 28 October 2026. Most of the personal tax measures it announced take effect from 6 April 2027, the start of the 2027/28 tax year." }
                },
                {
                  "@type": "Question",
                  "name": "Did income tax rates change in the Autumn Budget 2026?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Not for earned income. The basic, higher and additional rates on employment income stay at 20%, 40% and 45% in England, Wales and Northern Ireland for 2027/28. What did change is savings and property income, which move to separate rates of 24%, 44% and 49% from 6 April 2027." }
                },
                {
                  "@type": "Question",
                  "name": "Has the Personal Allowance changed for 2027/28?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. The Personal Allowance stays at £12,570 and the higher-rate threshold stays at £50,270 for 2027/28. These thresholds are maintained at their current levels through to the end of the 2030/31 tax year, so they rise with neither inflation nor wages." }
                },
                {
                  "@type": "Question",
                  "name": "Did National Insurance change for 2027/28?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Employee Class 1 National Insurance is unchanged at 8% between £12,570 and £50,270 and 2% above that. The one change is the Lower Earnings Limit, which rises from £129 to £133 a week. That limit decides whether a year counts towards your State Pension record — it does not change how much NI you pay." }
                },
                {
                  "@type": "Question",
                  "name": "Will my take-home pay change in April 2027?",
                  "acceptedAnswer": { "@type": "Answer", "text": "If your salary stays the same and you have no savings, rental or dividend income, your take-home pay in 2027/28 will be the same as in 2026/27. Income tax rates, thresholds and employee National Insurance are all unchanged. If you get a pay rise, frozen thresholds mean a larger share of it is taxed at your top rate." }
                },
                {
                  "@type": "Question",
                  "name": "What are the new savings and rental income tax rates?",
                  "acceptedAnswer": { "@type": "Answer", "text": "From 6 April 2027 the savings rates become 24% basic, 44% higher and 49% additional, and they apply across the whole UK. Property income gets its own matching set of rates — 24%, 44% and 49% — in England, Wales and Northern Ireland. Both are four percentage points above the equivalent rates on earned income." }
                },
                {
                  "@type": "Question",
                  "name": "What are the Scottish income tax rates for 2027/28?",
                  "acceptedAnswer": { "@type": "Answer", "text": "They had not been announced at the time of writing. Scottish rates and bands on earned income are set by the Scottish Parliament, not by the UK Budget. The Scottish Budget is due on 3 December 2026, with the rates confirmed by a Scottish Rate Resolution early in 2027." }
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
                Tax Updates
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-11-19">
                November 19, 2026
              </time>
              <span className="text-gray-500 text-sm">11 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: November 2026 &middot; Covers the 28 October 2026 Budget and the 2027/28 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Autumn Budget 2026: What It Means for Your Take-Home Pay
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The Chancellor delivered the Autumn Budget on 28 October 2026. For most PAYE employees the headline is that nothing changes — and that is exactly the point.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Budget in 30 Seconds</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Unchanged for 2027/28</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Personal Allowance still £12,570</li>
                    <li>• Higher-rate threshold still £50,270</li>
                    <li>• Additional-rate threshold still £125,140</li>
                    <li>• Income tax on earnings still 20% / 40% / 45%</li>
                    <li>• Employee NI still 8% / 2%</li>
                    <li>• Dividend rates still 10.75% / 35.75% / 39.35%</li>
                    <li>• £500 dividend allowance unchanged</li>
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">Changing from 6 April 2027</h3>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Savings income taxed at 24% / 44% / 49%</li>
                    <li>• Rental income taxed at 24% / 44% / 49%</li>
                    <li>• Property income split from the main rates</li>
                    <li>• NI Lower Earnings Limit £129 → £133/week</li>
                    <li>• Benefits in kind must be payrolled</li>
                    <li>• Company car percentages rise for most bands</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>The short version for employees:</strong> if your salary does not change, your take-home pay in 2027/28 will be identical to 2026/27. Every rate and threshold that touches a normal payslip was left alone. The tax rises in this Budget land on savings interest and rental profit, not on wages.
                </p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Income Tax on Earnings 2027/28 (England, Wales &amp; Northern Ireland)</h2>
              <p className="text-gray-700 mb-4">
                These are the rates that apply to salary, wages and pension income. They are identical to 2026/27.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Taxable income</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Personal Allowance</td>
                      <td className="border border-gray-200 px-4 py-3">Up to £12,570</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Basic rate</td>
                      <td className="border border-gray-200 px-4 py-3">£12,571 – £50,270</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">20%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Higher rate</td>
                      <td className="border border-gray-200 px-4 py-3">£50,271 – £125,140</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">40%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Additional rate</td>
                      <td className="border border-gray-200 px-4 py-3">£125,141+</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>Frozen, not static.</strong> These thresholds are held at today&apos;s levels through to the end of the 2030/31 tax year. A freeze is a tax rise in slow motion: as wages climb, more of your income crosses into the next band even though nothing about the rules changed. Our guide to the <Link href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">£100k tax trap</Link> shows how brutal this gets once the Personal Allowance starts tapering.
                </p>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Real Change: Savings and Rental Income</h2>
              <p className="text-gray-700 mb-4">
                This is where the Budget actually raises money from individuals. From 6 April 2027, savings income and property income are taxed at their own rates, four percentage points above the equivalent rates on earned income.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Earned income</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Savings &amp; property</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Basic rate</td>
                      <td className="border border-gray-200 px-4 py-3">20%</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">24%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Higher rate</td>
                      <td className="border border-gray-200 px-4 py-3">40%</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">44%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Additional rate</td>
                      <td className="border border-gray-200 px-4 py-3">45%</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">49%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li><strong>Savings rates apply across the whole UK</strong>, including Scotland. Savings income has never been devolved.</li>
                <li><strong>Property rates apply in England, Wales and Northern Ireland.</strong> From 2027/28 property income is separated from the main rates for the first time, and Scotland and Wales gain the power to set their own.</li>
                <li><strong>The 0% starting rate for savings survives</strong>, with the £5,000 starting rate limit unchanged.</li>
                <li><strong>Your Personal Savings Allowance still comes first.</strong> Only interest above it is taxed, and then at the new rates.</li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Who feels this?</strong> Landlords, and anyone holding meaningful savings outside an ISA. A higher-rate taxpayer with £5,000 of taxable interest pays £2,200 instead of £2,000 — an extra £200 a year for doing nothing differently. Wrapping savings in an ISA avoids the increase entirely, which is covered in our <Link href="/blog/isa-vs-lisa" className="text-blue-600 hover:text-blue-800 underline font-semibold">ISA vs LISA comparison</Link>.
                </p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">National Insurance: One Small Change</h2>
              <p className="text-gray-700 mb-4">
                Employee National Insurance is untouched. The rates and the thresholds that determine what you pay are the same in 2027/28 as they are now.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Threshold</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2026/27</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2027/28</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Lower Earnings Limit</td>
                      <td className="border border-gray-200 px-4 py-3">£129/week</td>
                      <td className="border border-gray-200 px-4 py-3 text-amber-600 font-semibold">£133/week</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Primary Threshold</td>
                      <td className="border border-gray-200 px-4 py-3">£242/week</td>
                      <td className="border border-gray-200 px-4 py-3">£242/week</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Upper Earnings Limit</td>
                      <td className="border border-gray-200 px-4 py-3">£967/week</td>
                      <td className="border border-gray-200 px-4 py-3">£967/week</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Employee rate</td>
                      <td className="border border-gray-200 px-4 py-3">8% / 2%</td>
                      <td className="border border-gray-200 px-4 py-3">8% / 2%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-6">
                The Lower Earnings Limit is widely misread. It is not a point at which you start paying National Insurance — that is the Primary Threshold, at £242 a week. The LEL decides whether a year counts as a qualifying year towards your State Pension. Earn above £133 a week in 2027/28 and the year counts, even though you pay nothing until £242.
              </p>
              <p className="text-gray-700 mt-4">
                Employer National Insurance stays at 15% above a £96-a-week secondary threshold.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dividends: No Change This Year</h2>
              <p className="text-gray-700 mb-4">
                Dividend tax rose sharply in April 2026, when the basic and higher rates each went up by two percentage points. This Budget left them alone. For 2027/28 the rates stay at 10.75% (ordinary), 35.75% (upper) and 39.35% (additional), and the dividend allowance stays at £500.
              </p>
              <p className="text-gray-700">
                That matters most to company directors paying themselves a small salary plus dividends. The arithmetic of that strategy is unchanged from this year — work it through with the <Link href="/dividend-tax" className="text-blue-600 hover:text-blue-800 underline font-semibold">dividend tax calculator</Link>, or read the longer explanation in <Link href="/blog/uk-dividend-tax-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">UK dividend tax explained</Link>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits in Kind Move onto the Payroll</h2>
              <p className="text-gray-700 mb-4">
                From 6 April 2027, employers must payroll benefits in kind rather than reporting them after the year end on a P11D. The first wave covers company cars and vans, car and van fuel, and medical benefits. The remaining benefits follow from April 2028.
              </p>
              <p className="text-gray-700 mb-4">
                This does not change how much tax you owe on a benefit. It changes <em>when</em> you pay it. Instead of a tax code adjustment that chases the benefit a year late, the tax comes out of each payslip as the benefit is provided. For anyone who has ever been hit with an unexpected underpayment through their tax code, this is a genuine improvement.
              </p>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>Watch your tax code in April 2027.</strong> As benefits move onto the payroll, the adjustments that used to sit in your code should come out of it. If both happen you would be taxed twice on the same benefit. Our <Link href="/tax-code" className="text-blue-600 hover:text-blue-800 underline font-semibold">tax code checker</Link> will decode what yours actually means.
                </p>
              </div>
              <p className="text-gray-700 mt-4">
                Separately, the appropriate percentages used to value company cars rise for most CO₂ bands in 2027/28 — a zero-emission car moves from 4% to 5%. If you run a company car, your benefit charge will be slightly higher.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Scotland: Still Waiting</h2>
              <p className="text-gray-700 mb-4">
                Scottish income tax rates and bands on earned income are set by the Scottish Parliament, not by the UK Budget. They had not been announced when this guide was published. The Scottish Budget is due on <strong>3 December 2026</strong>, and the rates are formally confirmed by a Scottish Rate Resolution early in 2027.
              </p>
              <p className="text-gray-700 mb-4">
                Until then, our calculators carry the 2026/27 Scottish bands forward when you select 2027/28, and flag them as provisional. Figures for the rest of the UK are confirmed. We will update as soon as the Scottish Budget lands.
              </p>
              <p className="text-gray-700">
                Three things are already settled for Scottish taxpayers: savings income follows the new UK-wide 24/44/49 rates, dividend income follows UK-wide rates as always, and the Personal Allowance stays at £12,570 because it is reserved to Westminster. For how the two systems diverge, see <Link href="/blog/scottish-tax-vs-english-tax" className="text-blue-600 hover:text-blue-800 underline font-semibold">Scottish tax vs English tax</Link>.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Loans in 2027/28</h2>
              <p className="text-gray-700 mb-4">
                Student loan thresholds are set separately from the Budget, by the Department for Education and the Student Loans Company. Two are confirmed for 2027/28:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• <strong>Plan 1</strong> rises to £28,005, up from £26,900.</li>
                <li>• <strong>Plan 2</strong> stays frozen at £29,385, and remains frozen through to 2029/30.</li>
              </ul>
              <p className="text-gray-700">
                Plan 4, Plan 5 and postgraduate thresholds had not been confirmed when this guide was published; our calculators carry the current figures forward until they are. The repayment rate is unchanged at 9% above the threshold for Plans 1, 2, 4 and 5, and 6% for postgraduate loans. More detail in our <Link href="/blog/student-loan-repayment-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">student loan repayment guide</Link>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Can Actually Do About It</h2>
              <p className="text-gray-700 mb-4">
                When rates are frozen rather than cut, the levers that still work are the ones that reduce your taxable income rather than your tax rate.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Move savings into an ISA before April 2027.</strong> With savings rates going to 24/44/49, the gap between sheltered and unsheltered interest widens for every taxpayer.</li>
                <li><strong>Check your pension contributions.</strong> Pension contributions reduce taxable income pound for pound, which is the most reliable way to stay under a threshold. See <Link href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">how pension tax relief works</Link>.</li>
                <li><strong>Watch the £100,000 line.</strong> The Personal Allowance taper still creates an effective 60% marginal rate between £100,000 and £125,140, and the threshold has not moved since 2010.</li>
                <li><strong>Review salary sacrifice while it is uncapped.</strong> The £2,000 NI cap on sacrificed pension contributions starts in April 2029 — see <Link href="/blog/salary-sacrifice-changes-2029" className="text-blue-600 hover:text-blue-800 underline font-semibold">salary sacrifice changes 2029</Link>.</li>
              </ul>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-4 text-white">See Your 2027/28 Take-Home Pay</h2>
              <p className="mb-6 text-blue-50">
                Our calculators now include 2027/28 alongside every year back to 2021/22. Put your salary in once and compare the two years side by side.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/take-home-pay-calculator" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                  Take-Home Pay Calculator
                </Link>
                <Link href="/pay-rise" className="inline-block bg-blue-500/30 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500/50 transition-colors duration-200">
                  Pay Rise Calculator
                </Link>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">When was the Autumn Budget 2026?</h3>
                  <p className="text-gray-600">Wednesday 28 October 2026. Most of the personal tax measures take effect from 6 April 2027.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Will my take-home pay change in April 2027?</h3>
                  <p className="text-gray-600">
                    If your salary is unchanged and you have no savings, rental or dividend income, no. Income tax rates, thresholds and employee National Insurance are all the same in 2027/28 as in 2026/27.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Why does it feel like I am paying more tax every year then?</h3>
                  <p className="text-gray-600">
                    Because the thresholds are frozen. When your pay rises and the bands do not, a larger slice of your income is taxed at your highest rate. That is fiscal drag, and it runs until at least April 2031.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How much more will I pay on my savings?</h3>
                  <p className="text-gray-600">
                    Four percentage points more on any interest above your Personal Savings Allowance, from 6 April 2027. On £5,000 of taxable interest that is an extra £200 for a basic-rate or higher-rate taxpayer.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What about Scottish rates for 2027/28?</h3>
                  <p className="text-gray-600">
                    Not yet announced. The Scottish Budget is due on 3 December 2026. Savings and dividend income follow UK-wide rates regardless, and the Personal Allowance is the same across the UK.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Did the cash ISA limit get cut?</h3>
                  <p className="text-gray-600">
                    The £12,000 cash ISA limit for under-65s that had been planned for April 2027 was dropped at this Budget, leaving the £20,000 allowance in place. Check <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a> for the current position before acting on it.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
              <p className="text-gray-700 mb-4">
                Figures in this guide are taken from HMRC&apos;s <a href="https://www.gov.uk/government/publications/budget-2026-overview-of-tax-legislation-and-rates-ootlar/budget-2026-overview-of-tax-legislation-and-rates-ootlar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Budget 2026 Overview of Tax Legislation and Rates</a> and its Annex A rates tables. See also <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Income Tax rates and allowances</a> and <a href="https://www.gov.uk/national-insurance-rates-letters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">National Insurance rates</a> on GOV.UK.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for general information only and is not financial or tax advice. Announced measures can change before they take effect, and Scottish rates for 2027/28 are still to be set. Always check GOV.UK or speak to a qualified adviser for decisions that depend on accuracy. Information accurate as of 19 November 2026.
              </p>
            </div>
          </div>

          <RelatedArticles articles={[
            { href: "/blog/uk-tax-changes-2026-27", title: "UK Tax Changes 2026/27", category: "Tax Updates", description: "The rates that apply right now, for the current tax year." },
            { href: "/blog/100k-tax-trap", title: "The £100k Tax Trap", category: "Tax Planning", description: "How frozen thresholds create a 60% marginal rate." },
            { href: "/blog/scottish-tax-vs-english-tax", title: "Scottish Tax vs English Tax", category: "Tax Planning", description: "Where the two systems diverge, and by how much." },
            { href: "/blog/salary-sacrifice-changes-2029", title: "Salary Sacrifice Changes 2029", category: "Pensions", description: "The £2,000 NI cap on sacrificed pension contributions." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
