import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Cash ISA vs Lifetime ISA (LISA): Which Is Right for You in 2025/26?",
  description: "Cash ISAs and Lifetime ISAs both offer tax-free savings, but they work very differently. Compare contribution limits, bonuses, penalties, and find out which is right for your situation.",
  keywords: "cash ISA vs LISA, lifetime ISA, cash ISA, LISA bonus, ISA comparison, first-time buyer ISA, LISA penalty, tax-free savings 2025/26",
  openGraph: {
    title: "Cash ISA vs Lifetime ISA (LISA): Which Is Right for You in 2025/26?",
    description: "Cash ISAs and Lifetime ISAs both offer tax-free savings, but they work very differently. Compare limits, bonuses, penalties, and find the right one for you.",
    type: "article",
    publishedTime: "2026-03-28T00:00:00.000Z",
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
    title: "Cash ISA vs Lifetime ISA (LISA): Which Is Right for You?",
    description: "Compare Cash ISAs and LISAs side by side — contribution limits, bonuses, penalties, and which suits your goals.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/isa-vs-lisa",
  },
};

export default function ISAvsLISA() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Cash ISA vs Lifetime ISA" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium rounded-full">
                Savings &amp; ISAs
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-03-28">
                March 28, 2026
              </time>
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Cash ISA vs Lifetime ISA (LISA): Which Is Right for You in 2025/26?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Both Cash ISAs and Lifetime ISAs let you save tax-free, but they serve very different purposes. Here&apos;s how they compare and which one makes sense for your goals.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Two ISAs, Two Very Different Deals</h2>
              <p className="text-gray-700 mb-4">
                A Cash ISA is the straightforward one: put money in, earn tax-free interest, take it out whenever you like. No strings attached.
              </p>
              <p className="text-gray-700 mb-4">
                A Lifetime ISA (LISA) is more generous but more restrictive. The government tops up your savings with a 25% bonus &mdash; up to &pound;1,000 free money every year &mdash; but you can only use it for buying your first home or for retirement after age 60. Withdraw for any other reason and you&apos;ll lose more than just the bonus.
              </p>
              <p className="text-gray-700">
                The good news? You don&apos;t have to pick just one. You can hold both a Cash ISA and a LISA at the same time. The question is how much to put into each. Full details on both products are available on <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK&apos;s ISA page</a>.
              </p>
            </div>

            {/* Quick Summary */}
            <div className="rounded-2xl p-8 mb-8 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Summary: Key Differences</h2>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-emerald-700 mb-2">Cash ISA</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&bull; Up to &pound;20,000/year (dropping to &pound;12,000 for under-65s from April 2027)</li>
                    <li>&bull; Tax-free interest, no government bonus</li>
                    <li>&bull; Withdraw any time, no penalties</li>
                    <li>&bull; Must be 18+ to open</li>
                    <li>&bull; No restrictions on what you use the money for</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-teal-700 mb-2">Lifetime ISA (LISA)</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&bull; Up to &pound;4,000/year (counts towards &pound;20,000 ISA total)</li>
                    <li>&bull; 25% government bonus (up to &pound;1,000/year)</li>
                    <li>&bull; 25% penalty on non-qualifying withdrawals</li>
                    <li>&bull; Must be 18&ndash;39 to open</li>
                    <li>&bull; First home (up to &pound;450,000) or retirement (age 60+) only</li>
                  </ul>
                </div>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* Side-by-Side Comparison Table */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Side-by-Side: Cash ISA vs Lifetime ISA</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Feature</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Cash ISA</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Lifetime ISA (LISA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Annual contribution limit</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;20,000 (dropping to &pound;12,000 from April 2027 for under-65s)</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;4,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Government bonus</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-400">None</td>
                      <td className="border border-gray-200 px-4 py-3 text-emerald-600 font-semibold">25% (up to &pound;1,000/year)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Tax on interest/growth</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">Tax-free</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">Tax-free</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Age to open</td>
                      <td className="border border-gray-200 px-4 py-3">18+</td>
                      <td className="border border-gray-200 px-4 py-3">18&ndash;39</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Age to contribute</td>
                      <td className="border border-gray-200 px-4 py-3">No upper limit</td>
                      <td className="border border-gray-200 px-4 py-3">Until age 50</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Access to funds</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">Any time, no penalty</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">25% penalty on non-qualifying withdrawals</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Qualifying uses</td>
                      <td className="border border-gray-200 px-4 py-3">Anything</td>
                      <td className="border border-gray-200 px-4 py-3">First home (up to &pound;450,000) or retirement (age 60+)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Counts towards ISA allowance?</td>
                      <td className="border border-gray-200 px-4 py-3">Yes</td>
                      <td className="border border-gray-200 px-4 py-3">Yes (part of &pound;20,000 total)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Can hold both?</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold" colSpan={2}>Yes &mdash; you can hold a Cash ISA and a LISA at the same time</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> Your LISA contribution counts towards your overall &pound;20,000 ISA allowance. So if you put &pound;4,000 into a LISA, you can put up to &pound;16,000 into a Cash ISA (or &pound;8,000 from April 2027 if under 65). See full LISA rules on <a href="https://www.gov.uk/lifetime-isa" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a>.
                </p>
              </div>
            </div>

            {/* The 25% LISA Bonus Explained */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The 25% LISA Bonus: How It Works</h2>
              <p className="text-gray-700 mb-4">
                The headline feature of the LISA is the government bonus. For every &pound;1 you deposit (up to &pound;4,000 per year), the government adds 25p. That&apos;s up to &pound;1,000 per year in free money, paid directly into your LISA within 4&ndash;9 weeks of each deposit.
              </p>
              <p className="text-gray-700 mb-4">
                If you open a LISA at 18 and contribute &pound;4,000 every year until you turn 50, you&apos;ll receive &pound;32,000 in bonuses alone &mdash; on top of any interest or investment growth.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm mt-4">
                  <thead>
                    <tr className="bg-emerald-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-emerald-800">You deposit</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-emerald-800">Government adds</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-emerald-800">Total in LISA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">&pound;1,000</td>
                      <td className="border border-gray-200 px-4 py-3 text-emerald-600 font-semibold">&pound;250</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">&pound;1,250</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">&pound;2,000</td>
                      <td className="border border-gray-200 px-4 py-3 text-emerald-600 font-semibold">&pound;500</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">&pound;2,500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">&pound;4,000 (max)</td>
                      <td className="border border-gray-200 px-4 py-3 text-emerald-600 font-semibold">&pound;1,000</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">&pound;5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <p className="text-sm text-emerald-800">
                  <strong>Note:</strong> The bonus is paid on deposits, not on interest earned. You earn interest or investment growth on top of the bonus &mdash; effectively earning returns on the government&apos;s money too.
                </p>
              </div>
            </div>

            {/* The 25% Withdrawal Penalty */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The 25% Withdrawal Penalty: Why It&apos;s Worse Than It Sounds</h2>
              <p className="text-gray-700 mb-4">
                If you withdraw from a LISA for anything other than buying your first home or after turning 60, you&apos;ll face a 25% penalty on the amount withdrawn. This isn&apos;t just clawing back the bonus &mdash; it actually takes some of your own money too.
              </p>
              <p className="text-gray-700 mb-4">
                Here&apos;s why: the 25% penalty is calculated on the <em>total</em> withdrawal (your money plus the bonus). Since the bonus was 25% of what <em>you</em> put in, the maths works out so that you lose more than just the bonus.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm mt-4">
                  <thead>
                    <tr className="bg-red-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-red-800">Step</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-red-800">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">You deposit</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;1,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Government bonus (25%)</td>
                      <td className="border border-gray-200 px-4 py-3 text-emerald-600 font-semibold">+ &pound;250</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">LISA balance</td>
                      <td className="border border-gray-200 px-4 py-3 font-semibold">&pound;1,250</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Withdrawal penalty (25% of &pound;1,250)</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">&minus; &pound;312.50</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">You receive</td>
                      <td className="border border-gray-200 px-4 py-3 font-bold">&pound;937.50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>That&apos;s a &pound;62.50 net loss on your own money.</strong> You deposited &pound;1,000 and only got &pound;937.50 back. The penalty was temporarily reduced to 20% during COVID (meaning you&apos;d only lose the bonus, not your own cash), but it&apos;s back to 25% now. Only withdraw early if you truly have no other option.
                </p>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* First-Time Buyer Rules */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Using a LISA to Buy Your First Home</h2>
              <p className="text-gray-700 mb-4">
                The LISA is one of the most generous savings tools for first-time buyers, but it comes with strict rules:
              </p>
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">You must:</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&bull; Be a first-time buyer (never owned property before)</li>
                    <li>&bull; Buy a property worth &pound;450,000 or less</li>
                    <li>&bull; Have had the LISA open for at least 12 months</li>
                    <li>&bull; Use a conveyancer or solicitor to complete the purchase</li>
                    <li>&bull; Intend to live in the property (not buy-to-let)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">You cannot:</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&bull; Use it for a property over &pound;450,000 (the penalty applies instead)</li>
                    <li>&bull; Use it if you&apos;ve previously owned a home, even abroad</li>
                    <li>&bull; Use the funds before the 12-month waiting period is up</li>
                    <li>&bull; Withdraw the money yourself &mdash; it goes directly to the conveyancer</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">The 12-month rule catches people out</h3>
                <p className="text-amber-700 text-sm">
                  You must have your LISA open for a full 12 months before you can use it for a property purchase. If you think you might buy in the next couple of years, open a LISA now &mdash; even with just &pound;1 &mdash; to start the clock. The 12 months runs from the date you open the account, not from when you first deposit.
                </p>
              </div>
            </div>

            {/* Retirement Access at 60 */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Using a LISA for Retirement</h2>
              <p className="text-gray-700 mb-4">
                If you don&apos;t use your LISA for a first home, you can withdraw the full balance penalty-free from age 60. This makes the LISA a potential complement to your workplace pension, with one significant advantage: no income tax on withdrawals.
              </p>
              <p className="text-gray-700 mb-4">
                With a pension, you get tax relief on the way in but pay income tax when you withdraw (apart from the 25% tax-free lump sum). With a LISA, you get the 25% bonus on the way in <em>and</em> pay no tax on the way out. For basic-rate taxpayers, the effect is roughly equivalent. For higher-rate taxpayers expecting to be basic-rate in retirement, a pension usually wins because you get 40% relief going in and only pay 20% coming out.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>LISA vs pension for retirement?</strong> Read our detailed comparison in <Link href="/blog/salary-sacrifice-vs-personal-pension" className="text-blue-600 hover:text-blue-800 underline font-semibold">Salary Sacrifice vs Personal Pension</Link> and <Link href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">Pension Contributions &amp; Tax Relief</Link> to understand which is more tax-efficient for your situation.
                </p>
              </div>
            </div>

            {/* Which Should You Choose */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Should You Choose? Common Scenarios</h2>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                      LISA wins
                    </span>
                    <span className="text-lg font-bold text-gray-900">Saving for your first home</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    If the property will be &pound;450,000 or less and you&apos;re under 40, the LISA&apos;s 25% bonus is unbeatable. A &pound;4,000 deposit becomes &pound;5,000 before interest. No Cash ISA can match that return.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      Cash ISA wins
                    </span>
                    <span className="text-lg font-bold text-gray-900">Emergency fund or short-term savings</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    If you need flexible access to your money, the Cash ISA is the clear choice. No penalties, no restrictions, no waiting periods. The LISA&apos;s 25% withdrawal penalty makes it unsuitable for an emergency fund.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
                      LISA wins
                    </span>
                    <span className="text-lg font-bold text-gray-900">Long-term retirement savings (basic-rate taxpayer)</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    For basic-rate taxpayers, the LISA&apos;s 25% bonus is effectively equivalent to the 20% pension tax relief &mdash; but LISA withdrawals at 60 are completely tax-free, making it slightly better in practice. The &pound;4,000 annual cap is the main limitation.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      Cash ISA wins
                    </span>
                    <span className="text-lg font-bold text-gray-900">Saving more than &pound;4,000 per year</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The LISA caps contributions at &pound;4,000/year. If you can save more, you&apos;ll need a Cash ISA (or stocks and shares ISA) for the rest. Max out the LISA first for the bonus, then put the remainder elsewhere.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      Cash ISA wins
                    </span>
                    <span className="text-lg font-bold text-gray-900">You&apos;re 40 or older</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    You can&apos;t open a new LISA after your 40th birthday. If you already have one, you can contribute until age 50, but if you&apos;ve never opened one and you&apos;re 40+, the Cash ISA is your only option.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      Use both
                    </span>
                    <span className="text-lg font-bold text-gray-900">Saving for a house deposit + keeping an emergency fund</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Put &pound;4,000 into your LISA for the house deposit bonus, then put your emergency fund into a Cash ISA where you can access it freely. This is the optimal strategy for most first-time buyers.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Maximise Both */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Maximise Both: Allocation Strategy</h2>
              <p className="text-gray-700 mb-4">
                Since your LISA allowance counts towards your overall &pound;20,000 ISA limit, you need to think about how to split your savings. Here&apos;s a practical approach:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Max out the LISA first (&pound;4,000)</h3>
                    <p className="text-gray-600 text-sm">If you qualify, always prioritise the LISA. The 25% bonus is an instant, guaranteed return you won&apos;t find anywhere else. That&apos;s &pound;1,000 of free money.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Keep 3&ndash;6 months of expenses in a Cash ISA</h3>
                    <p className="text-gray-600 text-sm">Your emergency fund should be easily accessible. A Cash ISA gives you penalty-free withdrawals and tax-free interest &mdash; the best of both worlds for money you might need quickly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Put remaining savings into a Cash ISA or S&amp;S ISA</h3>
                    <p className="text-gray-600 text-sm">After LISA and emergency fund, use your remaining allowance for medium-term goals. From April 2027, under-65s will be limited to &pound;12,000 in cash ISAs total, so consider stocks and shares ISAs for longer-term savings.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>2027 planning:</strong> From April 2027, the Cash ISA limit for under-65s drops to &pound;12,000. If you put &pound;4,000 in a LISA, you&apos;ll only have &pound;8,000 left for Cash ISAs. Read more about the upcoming changes in our <Link href="/blog/cash-isa-limit-2027" className="text-amber-700 hover:text-amber-900 underline font-semibold">Cash ISA Limit 2027 guide</Link>.
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">See How Much You Could Save</h2>
              <p className="text-gray-700 mb-6">
                Use our free calculators to work out your take-home pay and see how much you could realistically put into ISAs each month. If you&apos;re juggling debt repayments alongside savings, our debt calculator can help you find the right balance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/take-home-pay-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Take-Home Pay Calculator &rarr;
                </Link>
                <Link
                  href="/debts"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-200"
                >
                  Debt Repayment Calculator &rarr;
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="glass-light rounded-2xl p-8 bg-gray-50">
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for informational purposes only and should not be considered financial advice.
                Always consult with a qualified financial adviser for personalised guidance. ISA rules and limits are for the 2025/26 tax year and are subject to change. The Cash ISA limit reduction to &pound;12,000 for under-65s takes effect from April 2027. Information accurate as of March 2026.
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
                  "headline": "Cash ISA vs Lifetime ISA (LISA): Which Is Right for You in 2025/26?",
                  "description": "Cash ISAs and Lifetime ISAs both offer tax-free savings, but they work very differently. Compare contribution limits, bonuses, penalties, and find out which is right for your situation.",
                  "datePublished": "2026-03-28T00:00:00.000Z",
                  "dateModified": "2026-03-28T00:00:00.000Z",
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
                    "@id": "https://www.salarytakehome.co.uk/blog/isa-vs-lisa"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Can I have both a Cash ISA and a Lifetime ISA?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. You can hold a Cash ISA and a LISA at the same time. Your LISA contributions (up to £4,000) count towards your overall £20,000 annual ISA allowance, so you can put the remaining £16,000 (or £8,000 from April 2027 if under 65) into a Cash ISA."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the LISA withdrawal penalty?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you withdraw from a LISA for anything other than buying your first home (up to £450,000) or after turning 60, you'll face a 25% penalty on the total amount withdrawn. This means you lose not only the government bonus but also a portion of your own deposits — roughly 6.25% of what you put in."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is a LISA better than a Cash ISA for first-time buyers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For most first-time buyers, yes. The LISA's 25% government bonus (up to £1,000/year) gives you an instant return no Cash ISA can match. However, the property must cost £450,000 or less, you must be 18-39 to open one, and you must wait 12 months before using it for a purchase. A Cash ISA is still useful alongside a LISA for your emergency fund or savings above £4,000."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What happens to my LISA if I don't buy a house?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "If you don't use your LISA for a first home, you can withdraw the full balance penalty-free from age 60. The money (including all government bonuses and any growth) comes out completely tax-free. If you need the money before 60 and aren't buying a first home, you'll face the 25% withdrawal penalty."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much is the LISA government bonus?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The government adds 25% on top of whatever you deposit into your LISA, up to a maximum bonus of £1,000 per year (on £4,000 of deposits). The bonus is usually paid within 4-9 weeks of each deposit. If you contribute the maximum £4,000 every year from age 18 to 50, you'd receive £32,000 in bonuses."
                      }
                    }
                  ]
                }
              ]
            })
          }} />

          <RelatedArticles articles={[
            { href: "/blog/cash-isa-limit-2027", title: "The £12,000 Cash ISA Limit 2027", category: "Savings & ISAs", description: "What the new limit means for your savings strategy." },
            { href: "/blog/salary-sacrifice-vs-personal-pension", title: "Salary Sacrifice vs Personal Pension", category: "Pensions", description: "Which pension route saves you the most tax?" },
            { href: "/blog/pension-contributions-tax-relief", title: "Pension Contributions & Tax Relief", category: "Pensions", description: "How pension tax relief works and how to claim it." },
            { href: "/blog/maximize-take-home-pay-2024", title: "How to Maximise Your Take Home Pay", category: "Money Tips", description: "Practical strategies to keep more of your earnings." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
