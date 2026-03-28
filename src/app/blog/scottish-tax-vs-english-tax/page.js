import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Scottish Tax vs English Tax 2025/26: Who Pays More and By How Much?",
  description: "Scotland has 6 income tax bands compared to England's 3. See exactly how much more or less you'd pay depending on your salary, and at what point Scottish taxpayers start paying more.",
  keywords: "Scottish tax rates 2025/26, Scotland vs England tax, Scottish income tax, Scottish tax bands, rest of UK tax comparison, Scottish taxpayer, S tax code",
  openGraph: {
    title: "Scottish Tax vs English Tax 2025/26: Who Pays More?",
    description: "Scotland has 6 tax bands compared to England's 3. Here's exactly how much more (or less) you'd pay depending on your salary.",
    type: "article",
    publishedTime: "2026-03-19T00:00:00.000Z",
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
    title: "Scottish Tax vs English Tax 2025/26: Who Pays More?",
    description: "Scotland has 6 tax bands compared to England's 3. See exactly how much more or less you'd pay.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/scottish-tax-vs-english-tax",
  },
};

export default function ScottishTaxVsEnglishTax() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Scottish Tax vs English Tax 2025/26" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                Tax Planning
              </span>
              <time className="text-gray-500 text-sm" dateTime="2026-03-19">
                March 19, 2026
              </time>
              <span className="text-gray-500 text-sm">12 min read</span>
            </div>
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
            <AdUnit slot="1586479879" hideOnMobile />
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Scottish Tax vs English Tax 2025/26: Who Pays More and By How Much?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Scotland has 6 tax bands compared to England&apos;s 3. Here&apos;s exactly how much more (or less) you&apos;d pay depending on your salary &mdash; and at what point Scottish taxpayers start paying more.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">

            {/* Introduction */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Scottish and English Tax Bills Are Different</h2>
              <p className="text-gray-700 mb-4">
                Since April 2017, the Scottish Parliament has had the power to set its own income tax rates and bands. While the personal allowance (&pound;12,570) remains the same across the UK and National Insurance rates are identical everywhere, Scotland has chosen a very different income tax structure. You can see the full list of Scottish rates on the <a href="https://www.gov.scot/publications/scottish-income-tax-rates-and-bands/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Scottish Government</a> website.
              </p>
              <p className="text-gray-700 mb-4">
                The rest of the UK (England, Wales, and Northern Ireland) uses 3 tax bands: Basic (20%), Higher (40%), and Additional (45%) &mdash; see the current rates on <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a>. Scotland uses 6 bands ranging from 19% to 48%, creating a more progressive system where lower earners pay slightly less and higher earners pay noticeably more.
              </p>
              <p className="text-gray-700">
                Below, we break down every band side by side, show you the exact crossover point where Scottish tax overtakes English tax, and give you pound-for-pound comparisons at common salary levels.
              </p>
            </div>

            {/* Side-by-Side Comparison Table */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Side-by-Side: Scottish vs Rest of UK Tax Bands 2025/26</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Band</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Scotland Rate</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Scotland Threshold</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rest of UK Rate</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Rest of UK Threshold</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Personal Allowance</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                      <td className="border border-gray-200 px-4 py-3">Up to &pound;12,570</td>
                      <td className="border border-gray-200 px-4 py-3 text-green-600 font-semibold">0%</td>
                      <td className="border border-gray-200 px-4 py-3">Up to &pound;12,570</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Starter</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">19%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;12,571 &ndash; &pound;16,537</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-400">&mdash;</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-400">&mdash;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Basic</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">20%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;16,538 &ndash; &pound;29,526</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">20%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;12,571 &ndash; &pound;50,270</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Intermediate</td>
                      <td className="border border-gray-200 px-4 py-3 text-blue-600 font-semibold">21%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;29,527 &ndash; &pound;43,662</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-400">&mdash;</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-400">&mdash;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Higher</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">42%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;43,663 &ndash; &pound;75,000</td>
                      <td className="border border-gray-200 px-4 py-3 text-orange-600 font-semibold">40%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;50,271 &ndash; &pound;125,140</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">Advanced</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                      <td className="border border-gray-200 px-4 py-3">&pound;75,001 &ndash; &pound;125,140</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-400">&mdash;</td>
                      <td className="border border-gray-200 px-4 py-3 text-gray-400">&mdash;</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-3 font-medium">Top / Additional</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">48%</td>
                      <td className="border border-gray-200 px-4 py-3">Over &pound;125,140</td>
                      <td className="border border-gray-200 px-4 py-3 text-red-600 font-semibold">45%</td>
                      <td className="border border-gray-200 px-4 py-3">Over &pound;125,140</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Key difference:</strong> Scotland&apos;s 19% starter rate saves lower earners a small amount, but the higher rates (42%, 45%, 48%) kick in much earlier and are steeper than rest of the UK equivalents. Source: <a href="https://www.mygov.scot/scottish-income-tax/current-income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">mygov.scot</a>.
                </p>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* The Crossover Point */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Crossover Point: Where Scottish Tax Overtakes English Tax</h2>
              <p className="text-gray-700 mb-4">
                Thanks to Scotland&apos;s 19% starter rate (1% lower than the rest of the UK basic rate), Scottish taxpayers earning below approximately <strong>&pound;30,318</strong> actually pay slightly <em>less</em> income tax than they would in England &mdash; up to about &pound;28 per year less.
              </p>
              <p className="text-gray-700 mb-4">
                Above &pound;30,318, the combination of the 21% intermediate rate and the earlier jump to 42% means Scottish taxpayers start paying <em>more</em>. The gap widens significantly at higher salaries, reaching thousands of pounds per year for higher earners.
              </p>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-2">Why &pound;30,318?</h3>
                <p className="text-amber-700 text-sm">
                  At this salary, the saving from the 19% starter band (&pound;39.67) is exactly offset by the extra 1% paid on the intermediate band. Above this point, the intermediate rate pulls further ahead, and Scottish taxpayers pay more overall.
                </p>
              </div>
            </div>

            {/* Salary Comparison Examples */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Salary-by-Salary Comparison: Scotland vs England</h2>
              <p className="text-gray-700 mb-6">
                Here&apos;s how much more (or less) a Scottish taxpayer pays in income tax compared to someone in England, Wales, or Northern Ireland at the same gross salary. National Insurance is the same in both cases.
              </p>

              <div className="grid lg:grid-cols-2 gap-4">
                {/* £25,000 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;25,000</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                      Scotland pays ~&pound;22 less
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The 19% starter rate saves more than the intermediate rate costs at this level.
                  </p>
                </div>

                {/* £35,000 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;35,000</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                      Scotland pays ~&pound;130 more
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The intermediate rate at 21% starts to outweigh the starter rate saving.
                  </p>
                </div>

                {/* £50,000 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;50,000</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                      Scotland pays ~&pound;1,540 more
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Scotland&apos;s 42% higher rate kicks in at &pound;43,663 vs &pound;50,271 in the rest of the UK.
                  </p>
                </div>

                {/* £75,000 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;75,000</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                      Scotland pays ~&pound;3,040 more
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The 42% rate applies to a much wider band in Scotland, and the advanced rate begins here.
                  </p>
                </div>

                {/* £100,000 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;100,000</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                      Scotland pays ~&pound;2,543 more
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The 60% effective marginal rate from <Link href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">the &pound;100k tax trap</Link> (&pound;100k&ndash;&pound;125,140) applies equally in both systems, narrowing the gap slightly.
                  </p>
                </div>

                {/* £150,000 */}
                <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-gray-900">&pound;150,000</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                      Scotland pays ~&pound;6,293 more
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Scotland&apos;s 48% top rate vs 45% additional rate creates the widest gap at the highest incomes.
                  </p>
                </div>
              </div>
            </div>

            {/* What Stays the Same */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Stays the Same Across the UK</h2>
              <p className="text-gray-700 mb-4">
                Income tax bands are the <em>only</em> thing that differs between Scotland and the rest of the UK. Everything else is set by Westminster and applies UK-wide:
              </p>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Personal Allowance</h3>
                  <p className="text-gray-600 text-sm">&pound;12,570 &mdash; identical in Scotland and the rest of the UK. Tapers above &pound;100k in both systems.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">National Insurance</h3>
                  <p className="text-gray-600 text-sm">8% between &pound;12,570 and &pound;50,270, then 2% above. Same thresholds and rates everywhere.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Student Loan Repayments</h3>
                  <p className="text-gray-600 text-sm">Same thresholds and 9% rate (or 6% for postgrad) regardless of where you live in the UK.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-2">Pension Tax Relief</h3>
                  <p className="text-gray-600 text-sm">Relief at your marginal rate. Scottish taxpayers at 21% get 21% relief; at 42% they get 42% relief. See our guide to <Link href="/blog/salary-sacrifice-vs-personal-pension" className="text-blue-600 hover:text-blue-800 underline font-semibold">salary sacrifice vs personal pension</Link> for the most tax-efficient way to contribute.</p>
                </div>
              </div>
            </div>

            <AdUnit slot="3520564956" layout="in-article" format="fluid" />

            {/* How to Check Which Rate Applies */}
            <div className="glass-light rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Check Which Tax Rate Applies to You</h2>
              <p className="text-gray-700 mb-4">
                Your tax rate is determined by where you <strong>live</strong>, not where you work. If you live in Scotland but commute to England for work, you pay Scottish rates. If you live in England but work remotely for a Scottish company, you pay English rates.
              </p>
              <p className="text-gray-700 mb-4">
                The easiest way to check is your tax code. Scottish taxpayers have a tax code starting with the letter <strong>S</strong> (for example, S1257L). If your tax code doesn&apos;t start with S, you&apos;re on rest of UK rates. For more details, see <a href="https://www.gov.uk/scottish-income-tax" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK&apos;s Scottish Income Tax page</a>.
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">What if my tax code is wrong?</h3>
                <p className="text-blue-700 text-sm">
                  If you&apos;ve recently moved between Scotland and England, HMRC may not have updated your tax code yet. Contact HMRC or check your Personal Tax Account on GOV.UK to make sure the correct rate is being applied.
                </p>
              </div>
            </div>

            {/* CTA Box */}
            <div className="glass-light rounded-2xl p-8 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">See Your Exact Take-Home Pay</h2>
              <p className="text-gray-700 mb-6">
                Use our free calculator to see your take-home pay under Scottish or English tax rates. Just tick the &quot;Scottish Taxpayer&quot; checkbox to compare both systems instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/take-home-pay-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Take-Home Pay Calculator &rarr;
                </Link>
                <Link
                  href="/compare-salaries"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-200"
                >
                  Compare Two Salaries &rarr;
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="glass-light rounded-2xl p-8 bg-gray-50">
              <p className="text-sm text-gray-500">
                <strong>Disclaimer:</strong> This guide is for informational purposes only and should not be considered financial advice.
                Always consult with a qualified tax professional for personalised guidance. Tax rates and thresholds are for the 2025/26 tax year and are subject to change. Information accurate as of March 2026.
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
                  "headline": "Scottish Tax vs English Tax 2025/26: Who Pays More and By How Much?",
                  "description": "Scotland has 6 income tax bands compared to England's 3. See exactly how much more or less you'd pay depending on your salary, and at what point Scottish taxpayers start paying more.",
                  "datePublished": "2026-03-19T00:00:00.000Z",
                  "dateModified": "2026-03-19T00:00:00.000Z",
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
                    "@id": "https://www.salarytakehome.co.uk/blog/scottish-tax-vs-english-tax"
                  }
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Do Scottish taxpayers pay more tax than English taxpayers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on your salary. Below approximately £30,318, Scottish taxpayers pay slightly less income tax (up to £28/year less) thanks to the 19% starter rate. Above that threshold, Scottish taxpayers pay more due to higher rates of 21%, 42%, 45%, and 48%. At £75,000 the difference is around £3,040 more per year in Scotland."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What determines if I pay Scottish or English tax?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your income tax rate is determined by where you live, not where you work. If you live in Scotland, you pay Scottish rates regardless of your employer's location. Your tax code will start with the letter S (e.g. S1257L) if you are a Scottish taxpayer."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is National Insurance different in Scotland?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. National Insurance rates and thresholds are the same across the entire UK. Only income tax rates and bands differ in Scotland. The personal allowance, student loan repayment thresholds, and pension tax relief rules are also the same UK-wide."
                      }
                    }
                  ]
                }
              ]
            })
          }} />

          <RelatedArticles articles={[
            { href: "/blog/uk-tax-changes-2025-26", title: "UK Tax Changes 2025/26", category: "Tax Planning", description: "Complete guide to rates and thresholds this tax year." },
            { href: "/blog/100k-tax-trap", title: "The £100k Tax Trap", category: "Tax Planning", description: "How the personal allowance taper creates a 60% rate." },
            { href: "/blog/50k-salary-take-home", title: "£50k Salary Take Home Pay", category: "Salary Guide", description: "Detailed breakdown of a £50,000 salary." },
            { href: "/blog/maximize-take-home-pay-2024", title: "How to Maximise Your Take Home Pay", category: "Money Tips", description: "Practical strategies to keep more of your earnings." },
          ]} />
        </article>
      </div>
    </LayoutWrapper>
  );
}
