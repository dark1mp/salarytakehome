import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "The £12,000 Cash ISA Limit Was Scrapped: What Happens from April 2027",
  description: "The planned £12,000 cash ISA limit for under-65s was cancelled at the Autumn Budget on 28 October 2026. The full £20,000 allowance stays for everyone over 18. Here is what is actually changing from April 2027 — including a savings tax rise that makes ISAs more valuable, not less.",
  keywords: "cash ISA limit 2027, £12,000 cash ISA limit scrapped, cash ISA U-turn, ISA allowance 2027/28, savings tax 24%, First Time Buyer ISA, Lifetime ISA replacement, Autumn Budget 2026 ISA",
  openGraph: {
    title: "The £12,000 Cash ISA Limit Was Scrapped: What Happens from April 2027",
    description: "The cash ISA cut was cancelled at the Autumn Budget 2026. The £20,000 allowance stays — but savings tax is going up, which changes the maths.",
    type: "article",
    publishedTime: "2026-01-25T00:00:00.000Z",
    modifiedTime: "2026-11-19T00:00:00.000Z",
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
    title: "The £12,000 Cash ISA Limit Was Scrapped",
    description: "Cancelled at the Autumn Budget 2026. The £20,000 allowance stays for everyone over 18 — but savings tax is rising.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/cash-isa-limit-2027",
  },
};

export default function CashIsaLimit2027() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "The £12,000 Cash ISA Limit Was Scrapped" }]}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "The £12,000 Cash ISA Limit Was Scrapped: What Happens from April 2027",
              "description": "The planned £12,000 cash ISA limit for under-65s was cancelled at the Autumn Budget on 28 October 2026. The full £20,000 allowance stays for everyone over 18.",
              "datePublished": "2026-01-25T00:00:00.000Z",
              "dateModified": "2026-11-19T00:00:00.000Z",
              "author": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "publisher": { "@type": "Organization", "name": "SalaryTakeHome", "url": "https://www.salarytakehome.co.uk" },
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.salarytakehome.co.uk/blog/cash-isa-limit-2027" },
              "image": "https://www.salarytakehome.co.uk/opengraph-image.png"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the £12,000 cash ISA limit still happening?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No. The planned £12,000 cash ISA subscription limit for under-65s was cancelled at the Autumn Budget on 28 October 2026. The government confirmed it will retain the cash ISA limit at £20,000 for all savers over 18 from April 2027. HMRC's Budget 2026 rates annex lists the ISA subscription limit as £20,000 for both 2026/27 and 2027/28." }
                },
                {
                  "@type": "Question",
                  "name": "How much can I put in a cash ISA in 2027/28?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Up to £20,000, the full annual ISA allowance, if you are over 18. You can put all of it in cash, all of it in stocks and shares, or split it across cash, stocks and shares and innovative finance ISAs in any combination." }
                },
                {
                  "@type": "Question",
                  "name": "Why was the cash ISA cut reversed?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The original aim was to push savers towards investing by restricting how much could sit in cash. The policy attracted sustained criticism from consumer campaigners, banks and building societies, who argued it would not change investing behaviour and would penalise cautious savers. The government dropped it at the Autumn Budget 2026 and said it would instead explore an incentive for first-time stocks and shares investors." }
                },
                {
                  "@type": "Question",
                  "name": "Does this mean nothing is changing for savers?",
                  "acceptedAnswer": { "@type": "Answer", "text": "No — the opposite. From 6 April 2027 the tax rates on savings interest rise to 24% for basic-rate taxpayers, 44% for higher-rate and 49% for additional-rate, four percentage points above the equivalent rates on earned income. The ISA allowance survived, but tax on savings held outside an ISA went up, which makes using the allowance more valuable than before." }
                },
                {
                  "@type": "Question",
                  "name": "What is the First Time Buyer ISA?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A new product announced at the Autumn Budget 2026, due to launch in April 2029, which will replace the Lifetime ISA for new savers. The announced design keeps contributions of up to £4,000 a year with a 25% government bonus and removes the Lifetime ISA's upper age restriction. Existing Lifetime ISA holders will be able to keep contributing under current rules." }
                },
                {
                  "@type": "Question",
                  "name": "Did the Lifetime ISA withdrawal charge change?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. The withdrawal charge that applied when buying a property above the £450,000 Lifetime ISA price cap was reduced from 25% to 20%. A 25% charge clawed back more than the government bonus, so savers lost some of their own money; a 20% charge removes only the bonus. The £450,000 property price cap itself is unchanged." }
                },
                {
                  "@type": "Question",
                  "name": "What is the ISA allowance for 2027/28?",
                  "acceptedAnswer": { "@type": "Answer", "text": "£20,000 for adult ISAs and £9,000 for Junior ISAs, both unchanged from 2026/27 according to HMRC's Budget 2026 rates annex." }
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
                Savings &amp; ISAs
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-11-19">
                Updated November 19, 2026
              </time>
              <span className="text-gray-500 text-sm">10 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: November 2026 &middot; Rewritten after the 28 October 2026 Budget cancelled the cut</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              The £12,000 Cash ISA Limit Was Scrapped: What Happens from April 2027
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The cut is not happening. The full £20,000 allowance stays — but the tax on savings held outside an ISA is going up, which changes the maths more than the cap ever would have.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="glass-light rounded-2xl p-8 mb-8 border-l-4 border-green-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Answer</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                If you landed here because you remember reading that your cash ISA allowance was about to be cut to £12,000: <strong>that policy was cancelled.</strong> At the Autumn Budget on 28 October 2026, the government confirmed it will retain the cash ISA limit at £20,000 for all savers over 18 from April 2027.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                HMRC&apos;s Budget 2026 rates annex now lists the ISA subscription limit as £20,000 for both 2026/27 and 2027/28. There is no reduced limit, and no age distinction. You can still put the entire £20,000 into cash if that is what suits you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This page originally covered the planned cut, which was announced at the Autumn Budget 2025. It has been rewritten to reflect what actually happened. The rest of this guide covers what <em>is</em> changing for savers from April 2027 — because quite a lot is, and some of it matters more than the cap would have.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">ISA Allowances for 2027/28</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Account</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2026/27</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">2027/28</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Adult ISA subscription limit</td>
                      <td className="border border-gray-200 px-4 py-3">£20,000</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">£20,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Of which can be held in cash</td>
                      <td className="border border-gray-200 px-4 py-3">All £20,000</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">All £20,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3">Junior ISA</td>
                      <td className="border border-gray-200 px-4 py-3">£9,000</td>
                      <td className="border border-gray-200 px-4 py-3">£9,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3">Lifetime ISA (within the £20,000)</td>
                      <td className="border border-gray-200 px-4 py-3">£4,000</td>
                      <td className="border border-gray-200 px-4 py-3">£4,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 mt-6">
                The £20,000 is a single pot. Split it across cash, stocks and shares, and innovative finance ISAs however you like, in any proportion, including all of it in one type.
              </p>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8 border-l-4 border-amber-500">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Sting in the Tail: Savings Tax Is Going Up</h2>
              <p className="text-gray-700 mb-4">
                The allowance survived. The tax on savings held <em>outside</em> it did not. From 6 April 2027, savings income gets its own set of rates, four percentage points above the equivalent rates on earned income.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Savings rate now</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">From April 2027</th>
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
              <p className="text-gray-700 mt-6">
                These rates apply across the whole UK, Scotland included — savings income has never been devolved. The 0% starting rate for savings survives, with its £5,000 limit unchanged, and your Personal Savings Allowance still applies before any tax is charged.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Read the two changes together.</strong> The government kept your ability to shelter £20,000 a year from tax, and simultaneously raised the tax you pay on savings you do not shelter. The practical effect is that the ISA allowance is worth more in 2027/28 than it is today. A higher-rate taxpayer with £5,000 of taxable interest outside an ISA pays £2,200 instead of £2,000 — and nothing inside an ISA.
                </p>
              </div>
              <p className="text-gray-700 mt-4">
                The full picture of what the Budget changed is in our <Link href="/blog/autumn-budget-2026-what-it-means-for-your-pay" className="text-blue-600 hover:text-blue-800 underline font-semibold">Autumn Budget 2026 guide</Link>.
              </p>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How the Policy Rose and Fell</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Autumn Budget 2025.</strong> The government announced that from 6 April 2027 the cash ISA subscription limit would fall to £12,000 for savers under 65, inside an unchanged £20,000 overall allowance. The stated aim was to nudge money out of cash and into shares.</li>
                <li><strong>Through 2026.</strong> The policy drew sustained criticism from consumer campaigners, banks and building societies. The central objection was that restricting cash would not turn cautious savers into investors — it would simply leave them with less tax-free shelter.</li>
                <li><strong>Autumn Budget, 28 October 2026.</strong> The cut was dropped. The government confirmed it will retain the £20,000 limit for all savers over 18 from April 2027, and said it would instead explore an incentive for people investing in a stocks and shares ISA for the first time.</li>
              </ul>
              <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>One procedural note.</strong> The reversal is to be given effect by secondary legislation laid before Parliament in November 2026. The policy position is settled, but if you are making a decision that turns on the fine detail, check the current position on <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">GOV.UK</a> before you act.
                </p>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is Actually Changing: The First Time Buyer ISA</h2>
              <p className="text-gray-700 mb-4">
                The real ISA reform in this Budget is at the other end of the product range. The Lifetime ISA is being replaced for new savers by a <strong>First Time Buyer ISA</strong>, due to launch in <strong>April 2029</strong>.
              </p>
              <p className="text-gray-700 mb-4">
                On the design announced so far, it keeps the generosity of the Lifetime ISA — contributions of up to £4,000 a year with a 25% government bonus — and removes the Lifetime ISA&apos;s upper age restriction, which currently blocks anyone over 40 from opening one. Existing Lifetime ISA holders will be able to carry on contributing to and using their accounts under current rules.
              </p>
              <p className="text-gray-700 mb-4">
                Legislation is not expected until closer to launch, so treat the detail as provisional. Three years is a long time in savings policy, as this page demonstrates.
              </p>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>A fix that applies now.</strong> The Lifetime ISA withdrawal charge for buying a property above the £450,000 price cap was cut from 25% to 20%. The distinction matters: a 25% charge on a grown pot clawed back more than the government had put in, so savers lost some of their own money for buying a slightly-too-expensive house. A 20% charge removes only the bonus. The £450,000 cap itself is unchanged. Our <Link href="/blog/isa-vs-lisa" className="text-blue-600 hover:text-blue-800 underline font-semibold">ISA vs LISA comparison</Link> covers how the two products stack up, and the <Link href="/blog/first-time-buyer-mortgage-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">first-time buyer mortgage guide</Link> covers the deposit side.
                </p>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Should Actually Do</h2>
              <p className="text-gray-700 mb-4">
                If you restructured your savings in anticipation of the cut, nothing you did was wasted — but the urgency is gone and the reasoning has changed.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Stop front-loading cash ISA deposits.</strong> There is no deadline to beat. The £20,000 will still be there in April 2027, and in the years after.</li>
                <li><strong>Do still use the allowance.</strong> With savings rates heading to 24/44/49, interest earned outside an ISA is taxed more heavily from April 2027 than it is today. The case for sheltering has strengthened, not weakened.</li>
                <li><strong>Check whether you actually pay tax on savings now.</strong> The Personal Savings Allowance gives basic-rate taxpayers £1,000 of tax-free interest and higher-rate taxpayers £500. Additional-rate taxpayers get nothing. If you are nowhere near your allowance, the rate rise may not touch you at all.</li>
                <li><strong>Do not move money into shares just because a policy told you to.</strong> That nudge has been withdrawn. Cash versus investments should turn on your time horizon and your tolerance for loss — see <Link href="/blog/isa-vs-lisa" className="text-blue-600 hover:text-blue-800 underline font-semibold">ISA vs LISA</Link> for how to think about it.</li>
                <li><strong>If you are over 40 and want a Lifetime ISA, the window still closes.</strong> The age restriction only lifts with the First Time Buyer ISA in 2029, and you cannot open a Lifetime ISA after your 40th birthday today.</li>
                <li><strong>Remember pensions.</strong> For money you will not need before retirement, pension tax relief usually beats an ISA for higher-rate taxpayers — see <Link href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">pension contributions and tax relief</Link>.</li>
              </ul>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Is the £12,000 cash ISA limit still happening?</h3>
                  <p className="text-gray-600">
                    No. It was cancelled at the Autumn Budget on 28 October 2026. The government confirmed it will retain the cash ISA limit at £20,000 for all savers over 18 from April 2027, and HMRC&apos;s Budget 2026 rates annex lists £20,000 for both 2026/27 and 2027/28.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">How much can I put in a cash ISA in 2027/28?</h3>
                  <p className="text-gray-600">
                    Up to £20,000 — the full annual allowance — if you are over 18. All of it can be cash.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Does the age-65 distinction still exist?</h3>
                  <p className="text-gray-600">
                    No. The under-65 / over-65 split only ever existed as part of the cancelled policy. The limit now applies equally to everyone over 18.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">So nothing is changing for savers?</h3>
                  <p className="text-gray-600">
                    Something significant is. Savings interest above your Personal Savings Allowance will be taxed at 24%, 44% or 49% from 6 April 2027 instead of 20%, 40% or 45%. The allowance was kept and the tax on unsheltered savings was raised.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">I moved money out of cash ISAs to prepare. Did I make a mistake?</h3>
                  <p className="text-gray-600">
                    Not necessarily, and nothing has been lost through the ISA wrapper itself — money inside an ISA stays tax-free regardless of which type it sits in. Whether the switch suited you depends on your time horizon, not on the policy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Will the cut come back in a future Budget?</h3>
                  <p className="text-gray-600">
                    No one can rule that out, and this page is evidence that announced policies can be reversed. But the government has now actively abandoned it and signalled a different approach — an incentive for first-time investors rather than a restriction on cash savers.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
              <h2 className="text-2xl font-bold mb-4 text-white">Work Out What You Have Left to Save</h2>
              <p className="mb-6 text-blue-50">
                How much you can realistically put into an ISA starts with what actually reaches your bank account. Our calculator covers 2027/28 alongside every year back to 2021/22.
              </p>
              <Link href="/take-home-pay-calculator" className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                Calculate Your Take-Home Pay
              </Link>
            </div>

            <div className="glass-light rounded-2xl p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources</h2>
              <p className="text-gray-700 mb-4">
                ISA and savings figures are taken from HMRC&apos;s <a href="https://www.gov.uk/government/publications/budget-2026-overview-of-tax-legislation-and-rates-ootlar/budget-2026-overview-of-tax-legislation-and-rates-ootlar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Budget 2026 Overview of Tax Legislation and Rates</a> and its Annex A rates tables. See also <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Individual Savings Accounts</a> and <a href="https://www.gov.uk/apply-tax-free-interest-on-savings" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">tax on savings interest</a> on GOV.UK.
              </p>
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for general information only and is not financial or tax advice. The reversal of the cash ISA cut takes effect through secondary legislation laid in November 2026, and First Time Buyer ISA detail remains subject to legislation. Always check GOV.UK or speak to a qualified adviser for decisions that depend on accuracy. Information accurate as of 19 November 2026.
              </p>
            </div>
          </div>

          <RelatedArticles articles={[
            { href: "/blog/autumn-budget-2026-what-it-means-for-your-pay", title: "Autumn Budget 2026", category: "Tax Updates", description: "Everything the 28 October Budget changed, and when." },
            { href: "/blog/isa-vs-lisa", title: "ISA vs LISA", category: "Savings & ISAs", description: "Which wrapper suits which goal." },
            { href: "/blog/pension-contributions-tax-relief", title: "Pension Contributions & Tax Relief", category: "Pensions", description: "Often a better home for long-term money." },
            { href: "/blog/first-time-buyer-mortgage-guide", title: "First-Time Buyer Mortgage Guide", category: "Money Tips", description: "Turning a deposit into a purchase." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
