import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Supermarket Pay Rises 2026: Tesco, Aldi, M&S, Lidl, Sainsbury's & Morrisons Compared",
  description: "Compare 2026 hourly pay rates at Tesco, Aldi, M&S, Lidl, Sainsbury's and Morrisons. See who pays the most and what you'll actually take home after tax.",
  keywords: "supermarket pay 2026, tesco pay rise, aldi pay rise, lidl pay rise, sainsburys pay rise, morrisons pay, marks and spencer pay, national living wage 2026, supermarket hourly rate",
  openGraph: {
    title: "Supermarket Pay Rises 2026: How All 6 Major Chains Compare",
    description: "Aldi, Lidl, M&S, Tesco, Sainsbury's and Morrisons pay compared — plus what you'll actually take home after tax.",
    type: "article",
    publishedTime: "2026-03-18T00:00:00.000Z",
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
    title: "Supermarket Pay Rises 2026: How All 6 Major Chains Compare",
    description: "Aldi, Lidl, M&S, Tesco, Sainsbury's and Morrisons — who pays the most in 2026?",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/supermarket-pay-rises-2026",
  },
};

export default function SupermarketPayRises2026() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Supermarket Pay Rises 2026: How Tesco, Aldi, M&S, Lidl, Sainsbury's & Morrisons Compare" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium rounded-full">
              Salary Guide
            </span>
            <time className="text-gray-500 text-sm" dateTime="2026-03-18">
              March 18, 2026
            </time>
            <span className="text-gray-500 text-sm">8 min read</span>
          </div>
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
          <AdUnit slot="1586479879" hideOnMobile />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Supermarket Pay Rises 2026: How Tesco, Aldi, M&amp;S, Lidl, Sainsbury&apos;s &amp; Morrisons Compare
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Every major UK supermarket has announced new pay rates for 2026. Here&apos;s how they stack up against each other and the National Living Wage &mdash; and what you&apos;ll actually take home after tax.
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Summary: Supermarket Pay 2026</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Highest Paying</p>
              <p className="text-2xl lg:text-3xl font-bold">Aldi</p>
              <p className="text-green-100 text-sm">£13.50/hr</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">Lowest Paying</p>
              <p className="text-2xl lg:text-3xl font-bold">Morrisons</p>
              <p className="text-green-100 text-sm">£12.71/hr</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-green-100 text-sm mb-1">National Living Wage</p>
              <p className="text-2xl lg:text-3xl font-bold">£12.71/hr</p>
              <p className="text-green-100 text-sm">From April 2026</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              2026 has seen a wave of pay rises across the UK&apos;s biggest supermarkets. With the National Living Wage rising to £12.71 from April and inflation still fresh in workers&apos; minds, retailers have been competing to attract and retain staff with above-inflation wage increases.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every major chain except Morrisons has announced increases well above the legal minimum. But how do they actually compare? And more importantly, what will you <strong>take home</strong> after tax and National Insurance?
            </p>
          </div>

          {/* Full Comparison Table */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2026 Supermarket Pay: The Full Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-gray-600 font-semibold">Supermarket</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Hourly Rate</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">London Rate</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Pay Rise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-green-50">
                    <td className="py-3 text-gray-900 font-medium">Aldi</td>
                    <td className="py-3 text-green-700 font-bold text-right">£13.50</td>
                    <td className="py-3 text-gray-700 text-right">£14.88</td>
                    <td className="py-3 text-gray-700 text-right">£42m investment</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Lidl</td>
                    <td className="py-3 text-gray-900 font-bold text-right">£13.45</td>
                    <td className="py-3 text-gray-700 text-right">£14.80</td>
                    <td className="py-3 text-gray-700 text-right">£29m investment</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">M&amp;S</td>
                    <td className="py-3 text-gray-900 font-bold text-right">£13.41</td>
                    <td className="py-3 text-gray-700 text-right">£14.74</td>
                    <td className="py-3 text-gray-700 text-right">6.4%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Tesco</td>
                    <td className="py-3 text-gray-900 font-bold text-right">£13.28</td>
                    <td className="py-3 text-gray-700 text-right">£14.55</td>
                    <td className="py-3 text-gray-700 text-right">5.1%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Sainsbury&apos;s</td>
                    <td className="py-3 text-gray-900 font-bold text-right">£13.23</td>
                    <td className="py-3 text-gray-700 text-right">£14.54</td>
                    <td className="py-3 text-gray-700 text-right">5%</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-red-50">
                    <td className="py-3 text-gray-900 font-medium">Morrisons</td>
                    <td className="py-3 text-red-700 font-bold text-right">£12.71</td>
                    <td className="py-3 text-gray-700 text-right">£13.06</td>
                    <td className="py-3 text-red-600 text-right">NLW only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 text-gray-600 font-medium">National Living Wage</td>
                    <td className="py-3 text-gray-600 font-bold text-right">£12.71</td>
                    <td className="py-3 text-gray-500 text-right">&mdash;</td>
                    <td className="py-3 text-gray-600 text-right">4.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mt-6 border border-blue-200">
              <p className="text-blue-700 text-sm">
                <strong>Note:</strong> Rates shown are base entry-level hourly pay. Several supermarkets offer higher rates based on length of service. London rates apply to stores within the M25.
              </p>
            </div>
          </div>

          {/* Aldi */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Aldi &mdash; £13.50/hr</h2>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Highest Paying</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Aldi continues to lead the supermarket pay league. From 1 April 2026, store assistants earn <strong>£13.50 per hour</strong> nationally and <strong>£14.88 inside the M25</strong>. With length of service, rates rise to £14.47 nationally and £15.20 in London.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The discounter has invested £42 million in colleague pay for 2026 alone, and this marks yet another increase in what has been a sustained push to be the sector&apos;s pay leader.
            </p>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-600 text-sm">Starting Rate</p>
                <p className="text-green-800 text-xl font-bold">£13.50/hr</p>
                <p className="text-green-600 text-sm">£14.88 in London</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-600 text-sm">With Tenure</p>
                <p className="text-green-800 text-xl font-bold">£14.47/hr</p>
                <p className="text-green-600 text-sm">£15.20 in London</p>
              </div>
            </div>
          </div>

          {/* Lidl */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Lidl &mdash; £13.45/hr</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Lidl sits just behind Aldi at <strong>£13.45 per hour</strong> nationally and <strong>£14.80 in London</strong>, effective from 1 March 2026. With length of service, these rise to £14.45 and £15.30 respectively.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This is Lidl&apos;s seventh pay rise since 2023, backed by a £29 million investment. The discounter has also doubled paid paternity leave from two to four weeks at full pay.
            </p>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-blue-600 text-sm">Starting Rate</p>
                <p className="text-blue-800 text-xl font-bold">£13.45/hr</p>
                <p className="text-blue-600 text-sm">£14.80 in London</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-blue-600 text-sm">With Tenure</p>
                <p className="text-blue-800 text-xl font-bold">£14.45/hr</p>
                <p className="text-blue-600 text-sm">£15.30 in London</p>
              </div>
            </div>
          </div>

          {/* M&S */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Marks &amp; Spencer &mdash; £13.41/hr</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              M&amp;S is investing over £70 million to give retail colleagues a <strong>6.4% pay rise</strong> &mdash; more than double the current rate of inflation. From 1 April 2026, customer assistants earn <strong>£13.41 per hour</strong> nationally and <strong>£14.74 in London</strong>.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For full-time staff, this works out to roughly £1,587 more per year. M&amp;S also highlights its wider benefits package &mdash; including a 20% staff discount, Sharesave scheme, and pension contributions of up to 12% &mdash; which it says brings total compensation to the equivalent of £16.33 per hour.
            </p>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <p className="text-amber-700 text-sm leading-relaxed">
                <strong>Worth noting:</strong> M&amp;S has dropped its previous commitment to the real Living Wage (£13.45 nationally), with its new rate falling just 4p short. However, the benefits package may make up the difference for many workers.
              </p>
            </div>
          </div>

          {/* Tesco */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tesco &mdash; £13.28/hr</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Tesco has invested over <strong>£200 million</strong> &mdash; the largest sum of any supermarket &mdash; to deliver a <strong>5.1% pay rise</strong> for hourly-paid colleagues. From 29 March 2026, the hourly rate rises to <strong>£13.28</strong> in stores and online fulfilment centres.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Inside the M25, the London location allowance brings the rate to <strong>£14.55 per hour</strong>. Over the past five years, Tesco has increased hourly pay by 43%.
            </p>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <p className="text-blue-700 text-sm leading-relaxed">
                <strong>Context:</strong> As the UK&apos;s largest private employer with over 300,000 colleagues, Tesco&apos;s £200m investment is the biggest in absolute terms, even though its percentage increase is lower than M&amp;S.
              </p>
            </div>
          </div>

          {/* Sainsbury's */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sainsbury&apos;s &mdash; £13.23/hr</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sainsbury&apos;s has announced an above-inflation <strong>5% pay rise</strong> for hourly-paid colleagues, taking the rate to <strong>£13.23 per hour</strong> nationally and <strong>£14.54 in London</strong> from March 2026.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For full-time colleagues, this means over £1,200 more per year. Like Tesco, Sainsbury&apos;s has raised hourly pay by more than 40% over the past five years. The package also includes a pension scheme, free food during shifts, and colleague discounts worth over £600 a year on a typical weekly shop.
            </p>
          </div>

          {/* Morrisons */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Morrisons &mdash; £12.71/hr</h2>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Lowest Paying</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Morrisons is the only major supermarket not to announce an above-inflation pay rise for 2026. Hourly-paid staff will see their rate rise to <strong>£12.71 per hour</strong> &mdash; the bare minimum required by the National Living Wage &mdash; with London colleagues on <strong>£13.06</strong>.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The supermarket has cited increased costs from the National Living Wage itself, plus rising employer National Insurance contributions, as reasons for not going further.
            </p>
            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <p className="text-red-700 text-sm leading-relaxed">
                <strong>Pay dispute:</strong> Usdaw, representing 45,000 Morrisons workers, has called on members to reject the current offer. A ballot for potential industrial action has been raised, making Morrisons the only major chain facing a pay dispute in 2026.
              </p>
            </div>
          </div>

          {/* National Living Wage */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The National Living Wage in 2026</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              From 1 April 2026, the National Living Wage rises by <strong>4.1%</strong> to <strong>£12.71 per hour</strong> for workers aged 21 and over, up from £12.21. This is the legal minimum that employers must pay. For a full breakdown of all UK minimum wage bands by age group, see our <Link href="/blog/uk-minimum-wage-2025-26" className="text-blue-600 hover:text-blue-800 underline font-semibold">UK minimum wage 2025/26 guide</Link>.
            </p>
            <div className="grid lg:grid-cols-2 gap-4 mb-4">
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-purple-600 text-sm">National Living Wage (21+)</p>
                <p className="text-purple-800 text-xl font-bold">£12.71/hr</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-purple-600 text-sm">18&ndash;20 Year Olds</p>
                <p className="text-purple-800 text-xl font-bold">£10.85/hr</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="text-green-700 text-sm leading-relaxed">
                <strong>Good news:</strong> Five of the six major supermarkets now pay between 4% and 6% above the National Living Wage. Only Morrisons sits at the legal floor.
              </p>
            </div>
          </div>

          {/* Annual Salary Conversion */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What These Hourly Rates Mean as an Annual Salary</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you work a typical 37.5-hour week, here&apos;s what each supermarket&apos;s hourly rate works out to per year:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-gray-600 font-semibold">Supermarket</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Hourly Rate</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Annual Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Aldi</td>
                    <td className="py-3 text-gray-700 text-right">£13.50</td>
                    <td className="py-3 text-gray-900 font-semibold text-right">£26,325</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Lidl</td>
                    <td className="py-3 text-gray-700 text-right">£13.45</td>
                    <td className="py-3 text-gray-900 font-semibold text-right">£26,228</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">M&amp;S</td>
                    <td className="py-3 text-gray-700 text-right">£13.41</td>
                    <td className="py-3 text-gray-900 font-semibold text-right">£26,149</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Tesco</td>
                    <td className="py-3 text-gray-700 text-right">£13.28</td>
                    <td className="py-3 text-gray-900 font-semibold text-right">£25,896</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Sainsbury&apos;s</td>
                    <td className="py-3 text-gray-700 text-right">£13.23</td>
                    <td className="py-3 text-gray-900 font-semibold text-right">£25,799</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Morrisons</td>
                    <td className="py-3 text-gray-700 text-right">£12.71</td>
                    <td className="py-3 text-gray-900 font-semibold text-right">£24,784</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 text-gray-600 font-medium">National Living Wage</td>
                    <td className="py-3 text-gray-500 text-right">£12.71</td>
                    <td className="py-3 text-gray-600 font-semibold text-right">£24,784</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              Based on a 37.5-hour week, 52 weeks per year. Your actual hours may vary.
            </p>

            <div className="bg-blue-50 rounded-xl p-4 mt-4 border border-blue-200">
              <p className="text-blue-700 text-sm leading-relaxed">
                Want to convert a different hourly rate?{" "}
                <Link href="/hourly-wage" className="text-blue-600 underline font-semibold hover:text-blue-800">
                  Use our Hourly Wage Calculator
                </Link>{" "}
                to see your annual salary based on any hourly rate and hours per week.
              </p>
            </div>
          </div>

          {/* Take-Home Pay */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What You&apos;ll Actually Take Home</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your gross salary is one thing, but what actually lands in your bank account is another. After income tax and National Insurance, here&apos;s roughly what a full-time supermarket worker takes home at each chain:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-gray-600 font-semibold">Supermarket</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Gross Annual</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Take-Home (Annual)</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Take-Home (Monthly)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Aldi</td>
                    <td className="py-3 text-gray-700 text-right">£26,325</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£22,381</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£1,865</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Lidl</td>
                    <td className="py-3 text-gray-700 text-right">£26,228</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£22,309</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£1,859</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">M&amp;S</td>
                    <td className="py-3 text-gray-700 text-right">£26,149</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£22,250</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£1,854</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Tesco</td>
                    <td className="py-3 text-gray-700 text-right">£25,896</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£22,061</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£1,838</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Sainsbury&apos;s</td>
                    <td className="py-3 text-gray-700 text-right">£25,799</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£21,989</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£1,832</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Morrisons</td>
                    <td className="py-3 text-gray-700 text-right">£24,784</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£21,232</td>
                    <td className="py-3 text-green-700 font-semibold text-right">£1,769</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              Estimates based on 2025/26 tax year rates. Assumes no student loan, pension contributions, or other deductions. Your actual take-home will depend on your personal circumstances.
            </p>

            <div className="bg-green-50 rounded-xl p-4 mt-4 border border-green-200">
              <p className="text-green-700 text-sm leading-relaxed">
                <strong>The gap in real terms:</strong> An Aldi worker takes home roughly <strong>£96 per month more</strong> than a Morrisons worker &mdash; that&apos;s over <strong>£1,100 a year</strong> extra in your pocket.
              </p>
            </div>
          </div>

          {/* Pay Rise Impact */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Thinking of Switching Supermarkets?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you&apos;re considering a move to a higher-paying chain, use our calculators to see exactly what the difference would mean for your take-home pay:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/hourly-wage" className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:bg-blue-100 transition-colors block">
                <p className="text-blue-800 font-semibold mb-1">Hourly Wage Calculator</p>
                <p className="text-blue-600 text-sm">Convert any hourly rate to an annual salary</p>
              </Link>
              <Link href="/take-home-pay-calculator" className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 hover:bg-indigo-100 transition-colors block">
                <p className="text-indigo-800 font-semibold mb-1">Take-Home Pay Calculator</p>
                <p className="text-indigo-600 text-sm">See your pay after tax, NI, and deductions</p>
              </Link>
              <Link href="/pay-rise" className="bg-green-50 rounded-xl p-4 border border-green-200 hover:bg-green-100 transition-colors block">
                <p className="text-green-800 font-semibold mb-1">Pay Rise Calculator</p>
                <p className="text-green-600 text-sm">Calculate the real impact of a pay rise</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Exact Take-Home Pay</h2>
            <p className="text-blue-100 mb-6">
              Enter your hourly rate, hours per week, and see exactly what you&apos;ll take home after tax and National Insurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hourly-wage"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Hourly Wage Calculator &rarr;
              </Link>
              <Link
                href="/take-home-pay-calculator"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transform hover:scale-105 transition-all duration-200 border border-white/30"
              >
                Take-Home Pay Calculator &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "Supermarket Pay Rises 2026: How Tesco, Aldi, M&S, Lidl, Sainsbury's & Morrisons Compare",
                "description": "Compare 2026 hourly pay rates at the UK's six biggest supermarkets and see what you'll actually take home after tax.",
                "datePublished": "2026-03-18T00:00:00.000Z",
                "dateModified": "2026-03-18T00:00:00.000Z",
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
                  "@id": "https://www.salarytakehome.co.uk/blog/supermarket-pay-rises-2026"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Which UK supermarket pays the most in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Aldi is the highest-paying UK supermarket in 2026, with a starting rate of £13.50 per hour nationally and £14.88 inside the M25. With length of service, rates can rise to £14.47 nationally."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does Tesco pay per hour in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "From 29 March 2026, Tesco pays £13.28 per hour for store and fulfilment centre colleagues. Inside the M25, the rate is £14.55 per hour including the London location allowance."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the National Living Wage in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The National Living Wage rises to £12.71 per hour from 1 April 2026 for workers aged 21 and over, an increase of 4.1% from £12.21. All major UK supermarkets pay at or above this rate."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does a supermarket worker take home after tax in 2026?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "On a typical 37.5-hour week, a supermarket worker at Aldi (the highest payer) takes home approximately £1,865 per month after tax and National Insurance. At Morrisons (the lowest), it's around £1,769 per month."
                    }
                  }
                ]
              }
            ]
          })
        }} />
        <RelatedArticles articles={[
          { href: "/blog/pay-rise-negotiation-guide", title: "How to Negotiate a Pay Rise", category: "Salary Guide", description: "Proven strategies to negotiate a higher salary in the UK." },
          { href: "/blog/30k-salary-take-home", title: "£30k Salary Take Home Pay", category: "Salary Guide", description: "Full breakdown of take-home pay on a £30,000 salary." },
          { href: "/blog/salary-sacrifice-complete-guide", title: "Salary Sacrifice Guide", category: "Tax Planning", description: "How salary sacrifice can boost your take-home pay." },
          { href: "/blog/uk-tax-changes-2025-26", title: "UK Tax Changes 2025/26", category: "Tax Updates", description: "Latest tax rates and thresholds affecting your pay." },
        ]} />
      </article>
    </div>
    </LayoutWrapper>
  );
}
