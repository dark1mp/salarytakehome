import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "First-Time Buyer Mortgage Guide 2026: Deposits, Schemes & Steps",
  description: "Complete first-time buyer mortgage guide for the UK. Learn about deposits, government schemes, stamp duty relief, affordability checks, and how to get your first mortgage.",
  keywords: "first time buyer mortgage uk, first time buyer guide 2026, mortgage deposit, help to buy, stamp duty first time buyer, lifetime isa, shared ownership",
  openGraph: {
    title: "First-Time Buyer Mortgage Guide 2026",
    description: "Everything first-time buyers need to know about getting a mortgage in the UK.",
    type: "article",
    publishedTime: "2026-03-27T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SalaryTakeHome Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "First-Time Buyer Mortgage Guide 2026",
    description: "Deposits, schemes, and steps to buy your first home in the UK.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/first-time-buyer-mortgage-guide",
  },
};

export default function FirstTimeBuyerMortgageGuide() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "First-Time Buyer Mortgage Guide" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-medium rounded-full">
                Money Tips
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-03-27">
                March 27, 2026
              </time>
              <span className="text-gray-500 text-sm">14 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              First-Time Buyer Mortgage Guide 2026: Deposits, Schemes & Steps
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about getting on the property ladder in the UK, from saving a deposit to picking up the keys.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Quick Summary */}
            <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 mb-8 text-white">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Summary</h2>
              <div className="grid lg:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">5-20%</div>
                  <div className="text-sm opacity-90">Deposit typically needed</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">4-4.5x</div>
                  <div className="text-sm opacity-90">Salary borrowing limit</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold mb-1">No stamp duty</div>
                  <div className="text-sm opacity-90">Up to £425k for first-time buyers</div>
                </div>
              </div>
            </div>

            {/* How Much Can I Borrow? */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Can I Borrow?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Most UK mortgage lenders will let you borrow between 4 and 4.5 times your annual gross salary. Some specialist lenders may stretch to 5 or even 5.5 times for higher earners or certain professionals like doctors, solicitors, and accountants. If you are buying with a partner, lenders typically combine both incomes.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                However, the amount you can actually borrow depends on more than just your salary. Lenders run affordability assessments that factor in your regular outgoings, existing debts, childcare costs, and living expenses. They also stress-test your ability to keep up payments if interest rates were to rise by several percentage points.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Annual Salary</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Max Mortgage (4x)</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Max Mortgage (4.5x)</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Property Budget (10% deposit)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">£30,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£120,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£135,000</td>
                      <td className="py-3 px-4 text-right font-semibold text-emerald-700">£133,333 - £150,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">£40,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£160,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£180,000</td>
                      <td className="py-3 px-4 text-right font-semibold text-emerald-700">£177,778 - £200,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">£50,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£200,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£225,000</td>
                      <td className="py-3 px-4 text-right font-semibold text-emerald-700">£222,222 - £250,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">£60,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£240,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£270,000</td>
                      <td className="py-3 px-4 text-right font-semibold text-emerald-700">£266,667 - £300,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">£80,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£320,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£360,000</td>
                      <td className="py-3 px-4 text-right font-semibold text-emerald-700">£355,556 - £400,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                Want to see exactly how much of your salary goes towards tax, NI, and pension? Use our <Link href="/mortgages" className="text-blue-600 hover:text-blue-800 underline font-semibold">mortgage calculator</Link> to estimate monthly repayments, and our <Link href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</Link> to understand your disposable income.
              </p>
            </div>

            {/* How Much Deposit Do I Need? */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much Deposit Do I Need?</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You will typically need at least a 5% deposit to buy a home in the UK, though putting down 10% or more opens up significantly better mortgage rates. The more you can save, the lower your loan-to-value (LTV) ratio will be, and lenders reward lower LTV with cheaper interest rates.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For example, a buyer with a 25% deposit (75% LTV) might get an interest rate a full percentage point lower than someone with a 5% deposit (95% LTV). Over a 25-year term, that difference can add up to tens of thousands of pounds in saved interest.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Property Value</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">5% Deposit</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">10% Deposit</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">15% Deposit</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">20% Deposit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">£200,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£10,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£20,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£30,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£40,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">£250,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£12,500</td>
                      <td className="py-3 px-4 text-right text-gray-700">£25,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£37,500</td>
                      <td className="py-3 px-4 text-right text-gray-700">£50,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">£300,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£15,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£30,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£45,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£60,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">£350,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£17,500</td>
                      <td className="py-3 px-4 text-right text-gray-700">£35,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£52,500</td>
                      <td className="py-3 px-4 text-right text-gray-700">£70,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">£400,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£20,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£40,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£60,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£80,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                A larger deposit not only reduces your monthly payments but also gives you access to more competitive rates. Aim for at least 10% if possible, and 15-20% to unlock the best deals on the market.
              </p>
            </div>

            {/* Government Schemes */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Government Schemes for First-Time Buyers</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The UK government runs several schemes to help first-time buyers get on the property ladder. These can make a significant difference, particularly if you are struggling to save a large deposit or facing high property prices in your area. Here is a summary of the main options available in 2026.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Scheme</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">How It Works</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Max Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">Lifetime ISA</td>
                      <td className="py-3 px-4 text-gray-700">Save up to £4,000/yr, government adds 25% bonus</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Up to £1,000 free per year</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Shared Ownership</td>
                      <td className="py-3 px-4 text-gray-700">Buy 25-75% of a property, rent the rest</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Lower deposit needed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">First Homes</td>
                      <td className="py-3 px-4 text-gray-700">30% discount on new-build homes for local first-time buyers</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Permanently discounted price</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Mortgage Guarantee Scheme</td>
                      <td className="py-3 px-4 text-gray-700">Government backs 95% LTV mortgages from participating lenders</td>
                      <td className="py-3 px-4 text-emerald-700 font-semibold">Buy with just 5% deposit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                For full details and eligibility criteria, visit the <a href="https://www.gov.uk/affordable-home-ownership-schemes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK affordable home ownership schemes</a> page. The Lifetime ISA is particularly popular because you can open one from age 18 and build up a substantial deposit over several years with the government bonus.
              </p>
            </div>

            {/* Stamp Duty */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stamp Duty for First-Time Buyers</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                First-time buyers in England and Northern Ireland benefit from generous stamp duty relief. Under current rules, you pay no stamp duty at all on the first £425,000 of a property purchase, as long as the total purchase price does not exceed £625,000. This temporary relief threshold was raised from £300,000 and is a significant saving compared to what other buyers pay.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you are buying a property between £425,001 and £625,000, you pay 5% stamp duty only on the portion above £425,000. If the property costs more than £625,000, you lose the first-time buyer relief entirely and pay standard rates instead.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Property Price</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">First-Time Buyer Stamp Duty</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Standard Stamp Duty</th>
                      <th className="text-right py-3 px-4 font-semibold text-emerald-700">You Save</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">£250,000</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£0</td>
                      <td className="py-3 px-4 text-right text-gray-700">£0</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£0</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">£350,000</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£0</td>
                      <td className="py-3 px-4 text-right text-gray-700">£5,000</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£5,000</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">£425,000</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£0</td>
                      <td className="py-3 px-4 text-right text-gray-700">£8,750</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£8,750</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">£500,000</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£3,750</td>
                      <td className="py-3 px-4 text-right text-gray-700">£12,500</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£8,750</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">£625,000</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£10,000</td>
                      <td className="py-3 px-4 text-right text-gray-700">£18,750</td>
                      <td className="py-3 px-4 text-right text-emerald-700 font-semibold">£8,750</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                Scotland uses Land and Buildings Transaction Tax (LBTT) and Wales uses Land Transaction Tax (LTT) with their own rates and thresholds. For the latest rates, check <a href="https://www.gov.uk/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK stamp duty land tax</a>.
              </p>
            </div>

            {/* Step by Step */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step: Buying Your First Home</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The process of buying your first property can feel overwhelming, but breaking it down into clear steps makes it much more manageable. Here is the typical timeline from start to finish, which usually takes around three to six months once you have your deposit saved.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Check your affordability</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">Work out how much you can borrow based on your salary (4-4.5x) and how much deposit you have. Use our <Link href="/mortgages" className="text-blue-600 hover:text-blue-800 underline font-semibold">mortgage calculator</Link> to estimate monthly payments and make sure they fit comfortably within your budget after tax, bills, and other outgoings.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Save your deposit</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">Aim for at least 10% of the property value. Consider a Lifetime ISA for the 25% government bonus. Cut unnecessary expenses and direct any pay rises or bonuses straight into your deposit fund.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Get an Agreement in Principle (AIP)</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">An AIP is a conditional offer from a lender confirming how much they would be willing to lend you. It is based on a soft credit check and shows estate agents you are a serious buyer. Most AIPs are valid for 60 to 90 days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Find your property</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">Search on Rightmove, Zoopla, and OnTheMarket. Visit properties in person, check the local area at different times of day, and research council tax bands, broadband speeds, and flood risk before committing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Make an offer</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">Research comparable sold prices in the area to determine a fair offer. Your estate agent will negotiate on the seller's behalf. In England and Wales, offers are not legally binding until contracts are exchanged.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Instruct a solicitor or conveyancer</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">Your solicitor handles the legal side of the purchase, including property searches, reviewing the title deeds, and managing the transfer of funds. Get quotes from several firms and check they are on your lender's approved panel.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">7</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Full mortgage application</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">Submit your full application with payslips, bank statements, ID, and proof of deposit. The lender will carry out a valuation survey on the property. This stage typically takes two to four weeks.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">8</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Exchange and complete</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">At exchange, you pay your deposit (usually 10%) and the sale becomes legally binding. Completion typically follows one to four weeks later, when the remaining funds transfer and you get the keys to your new home.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden Costs */}
            <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hidden Costs to Budget For</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your deposit and monthly mortgage payments are just the beginning. There are several additional costs that catch many first-time buyers off guard. Make sure you budget for these on top of your deposit so you are not left short at the crucial moment.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Cost</th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-900">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">Solicitor / conveyancer fees</td>
                      <td className="py-3 px-4 text-right text-gray-700">£1,000 - £2,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Property survey</td>
                      <td className="py-3 px-4 text-right text-gray-700">£300 - £1,500</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">Mortgage arrangement fee</td>
                      <td className="py-3 px-4 text-right text-gray-700">£0 - £2,000</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">Moving costs</td>
                      <td className="py-3 px-4 text-right text-gray-700">£500 - £1,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">Buildings insurance</td>
                      <td className="py-3 px-4 text-right text-gray-700">£200 - £500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-600 text-sm mt-4">
                In total, you should budget an extra £3,000 to £7,000 on top of your deposit. Some of these costs, like the mortgage arrangement fee, can sometimes be added to the loan, but this means you pay interest on them over the full mortgage term.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 mb-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Calculate Your Mortgage Repayments</h2>
              <p className="text-white/90 mb-6">
                Ready to see what your monthly payments could look like? Try our free mortgage calculator and work out exactly what you can afford.
              </p>
              <Link
                href="/mortgages"
                className="inline-block bg-white text-emerald-700 font-bold py-3 px-8 rounded-xl hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Open Mortgage Calculator
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <RelatedArticles articles={[
            { href: "/blog/maximize-take-home-pay-2024", category: "Money Tips", title: "10 Legal Ways to Maximise Your Take-Home Pay", description: "Proven strategies to keep more of your hard-earned money through tax-efficient benefits." },
            { href: "/blog/50k-salary-take-home", category: "Salary Guide", title: "£50k Salary Take Home Pay Breakdown", description: "See exactly how much you keep from a £50,000 salary after tax, NI, and pension." },
            { href: "/blog/cash-isa-limit-2027", category: "Savings & ISAs", title: "The £12,000 Cash ISA Limit: What You Need to Know", description: "Your tax-free savings allowance is about to change. Here's what it means." },
            { href: "/blog/salary-sacrifice-complete-guide", category: "Tax Planning", title: "Salary Sacrifice: The Complete Guide", description: "How salary sacrifice works and whether it could save you thousands each year." },
          ]} />
        </article>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "First-Time Buyer Mortgage Guide 2026: Deposits, Schemes & Steps",
              "description": "Complete first-time buyer mortgage guide for the UK. Learn about deposits, government schemes, stamp duty relief, affordability checks, and how to get your first mortgage.",
              "datePublished": "2026-03-27T00:00:00.000Z",
              "dateModified": "2026-03-27T00:00:00.000Z",
              "author": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "publisher": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "mainEntityOfPage": "https://www.salarytakehome.co.uk/blog/first-time-buyer-mortgage-guide",
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much deposit do I need as a first-time buyer in the UK?",
                  "acceptedAnswer": { "@type": "Answer", "text": "You typically need at least 5% of the property value as a deposit, though 10-20% will give you access to better mortgage rates. On a £250,000 property, that means saving between £12,500 (5%) and £50,000 (20%). Government schemes like the Lifetime ISA can help boost your savings with a 25% bonus." }
                },
                {
                  "@type": "Question",
                  "name": "How much can a first-time buyer borrow for a mortgage?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most UK lenders offer 4 to 4.5 times your annual salary. On a £40,000 salary you could borrow £160,000-£180,000. Some specialist lenders offer up to 5.5 times salary for higher earners or certain professions. Joint applications combine both incomes." }
                },
                {
                  "@type": "Question",
                  "name": "Do first-time buyers pay stamp duty?",
                  "acceptedAnswer": { "@type": "Answer", "text": "First-time buyers in England and Northern Ireland pay no stamp duty on the first £425,000 of a property purchase, provided the total price is under £625,000. This can save up to £8,750 compared to standard rates. Scotland and Wales have their own tax systems with different thresholds." }
                },
                {
                  "@type": "Question",
                  "name": "What government schemes help first-time buyers in 2026?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Key schemes include the Lifetime ISA (25% government bonus on savings up to £4,000/year), Shared Ownership (buy 25-75% of a property), First Homes (30% discount on new builds), and the Mortgage Guarantee Scheme (government-backed 95% LTV mortgages). Eligibility criteria vary by scheme." }
                }
              ]
            }
          ]
        }) }}
      />
    </LayoutWrapper>
  );
}
