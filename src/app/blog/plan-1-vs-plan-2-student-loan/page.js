import React from "react";
import Link from "next/link";
import RelatedArticles from "../../components/RelatedArticles";
import LayoutWrapper from "../../components/LayoutWrapper";
import AdUnit from "../../components/AdUnit";

export const metadata = {
  title: "Plan 1 vs Plan 2 Student Loan: Key Differences Explained for 2025/26",
  description: "Compare Plan 1 and Plan 2 student loans side by side. See repayment thresholds, interest rates, monthly repayments at different salaries, and when each loan is written off.",
  keywords: "plan 1 vs plan 2 student loan, student loan plan 1, student loan plan 2, student loan repayment threshold, student loan interest rate, student loan comparison, student loan write off",
  openGraph: {
    title: "Plan 1 vs Plan 2 Student Loan: Key Differences Explained for 2025/26",
    description: "Compare Plan 1 and Plan 2 student loans side by side — thresholds, interest rates, monthly repayments, and write-off periods.",
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
    title: "Plan 1 vs Plan 2 Student Loan: Key Differences Explained for 2025/26",
    description: "Compare Plan 1 and Plan 2 student loans — thresholds, interest rates, monthly repayments, and write-off periods.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/plan-1-vs-plan-2-student-loan",
  },
};

export default function Plan1VsPlan2StudentLoan() {
  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: "Plan 1 vs Plan 2 Student Loan" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-medium rounded-full">
              Student Loans
            </span>
            <time className="text-gray-500 text-sm" dateTime="2026-03-19">
              March 19, 2026
            </time>
            <span className="text-gray-500 text-sm">10 min read</span>
          </div>
          <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 inline-block mb-4">Last updated: March 2026 &middot; Reflects 2025/26 tax year</p>
          <AdUnit slot="1586479879" hideOnMobile />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Plan 1 vs Plan 2 Student Loan: Key Differences Explained for 2025/26
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Not sure which plan you&apos;re on or how they compare? Here&apos;s everything you need to know about repayment thresholds, interest rates, and how much you&apos;ll actually repay.
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison: Plan 1 vs Plan 2</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-purple-100 text-sm mb-1">Plan 1 Threshold</p>
              <p className="text-2xl lg:text-3xl font-bold">&pound;26,065</p>
              <p className="text-purple-100 text-sm">~25 year write-off</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-purple-100 text-sm mb-1">Plan 2 Threshold</p>
              <p className="text-2xl lg:text-3xl font-bold">&pound;28,470</p>
              <p className="text-purple-100 text-sm">30 year write-off</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur">
              <p className="text-purple-100 text-sm mb-1">Repayment Rate</p>
              <p className="text-2xl lg:text-3xl font-bold">9%</p>
              <p className="text-purple-100 text-sm">Both plans</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Your student loan plan determines how much you repay each month and what interest you&apos;re charged. The two most common plans in England and Wales are <strong>Plan 1</strong> (for those who started university before September 2012) and <strong>Plan 2</strong> (for those who started between September 2012 and July 2023).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Both plans take 9% of your income above a set threshold, but the thresholds, interest rates, and write-off periods are very different. These differences can mean thousands of pounds more or less in total repayments over your working life. For a broader overview of all plans, see our <Link href="/blog/student-loan-repayment-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">student loan repayment guide</Link>, or check the latest official guidance on{" "}
              <a href="https://www.gov.uk/repaying-your-student-loan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a>.
            </p>
          </div>

          {/* Full Comparison Table */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Comparison: Plan 1 vs Plan 2</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-gray-600 font-semibold">Feature</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Plan 1</th>
                    <th className="py-3 text-gray-600 font-semibold text-right">Plan 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Who</td>
                    <td className="py-3 text-gray-700 text-right">Started before Sept 2012 (England/Wales)</td>
                    <td className="py-3 text-gray-700 text-right">Started Sept 2012 &ndash; July 2023 (England/Wales)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Threshold 2025/26</td>
                    <td className="py-3 text-gray-700 text-right">&pound;26,065/year (&pound;2,172/month)</td>
                    <td className="py-3 text-gray-700 text-right">&pound;28,470/year (&pound;2,372/month)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Repayment rate</td>
                    <td className="py-3 text-gray-700 text-right">9% of income above threshold</td>
                    <td className="py-3 text-gray-700 text-right">9% of income above threshold</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Interest rate</td>
                    <td className="py-3 text-gray-700 text-right">Lower of RPI (3.2%) or Bank Rate + 1%</td>
                    <td className="py-3 text-gray-700 text-right">RPI + up to 3% (max 6.2%) while studying; RPI to RPI+3% after, based on income</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Write-off</td>
                    <td className="py-3 text-gray-700 text-right">25 years or age 65</td>
                    <td className="py-3 text-gray-700 text-right">30 years after first eligible to repay</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 text-gray-900 font-medium">Threshold changes</td>
                    <td className="py-3 text-gray-700 text-right">Rises with RPI each April</td>
                    <td className="py-3 text-gray-700 text-right">Frozen at &pound;29,385 from April 2026 until 2030</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 mt-6 border border-purple-200">
              <p className="text-purple-700 text-sm">
                <strong>Note:</strong> The Plan 2 threshold freeze means that as wages rise, more of your income will be above the threshold each year &mdash; so your monthly repayments will gradually increase even if your salary stays the same in real terms.
              </p>
            </div>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Monthly Repayment Examples */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Repayment Examples</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Here&apos;s what you&apos;d repay each month at different salary levels under each plan. The difference comes down to the threshold &mdash; Plan 2&apos;s higher threshold means you keep more of your earnings before repayments kick in.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <p className="text-purple-600 text-sm mb-1">&pound;30,000 Salary</p>
                <div className="mb-3">
                  <p className="text-purple-800 text-xs font-semibold">Plan 1</p>
                  <p className="text-purple-900 text-xl font-bold">&pound;29.53/month</p>
                </div>
                <div>
                  <p className="text-purple-800 text-xs font-semibold">Plan 2</p>
                  <p className="text-purple-900 text-xl font-bold">&pound;11.48/month</p>
                </div>
                <p className="text-purple-600 text-xs mt-2">Plan 2 saves &pound;18.05/month</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <p className="text-purple-600 text-sm mb-1">&pound;40,000 Salary</p>
                <div className="mb-3">
                  <p className="text-purple-800 text-xs font-semibold">Plan 1</p>
                  <p className="text-purple-900 text-xl font-bold">&pound;104.53/month</p>
                </div>
                <div>
                  <p className="text-purple-800 text-xs font-semibold">Plan 2</p>
                  <p className="text-purple-900 text-xl font-bold">&pound;86.48/month</p>
                </div>
                <p className="text-purple-600 text-xs mt-2">Plan 2 saves &pound;18.05/month</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <p className="text-purple-600 text-sm mb-1">&pound;50,000 Salary</p>
                <div className="mb-3">
                  <p className="text-purple-800 text-xs font-semibold">Plan 1</p>
                  <p className="text-purple-900 text-xl font-bold">&pound;179.53/month</p>
                </div>
                <div>
                  <p className="text-purple-800 text-xs font-semibold">Plan 2</p>
                  <p className="text-purple-900 text-xl font-bold">&pound;161.48/month</p>
                </div>
                <p className="text-purple-600 text-xs mt-2">Plan 2 saves &pound;18.05/month</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 mt-6 border border-blue-200">
              <p className="text-blue-700 text-sm leading-relaxed">
                <strong>How it&apos;s calculated:</strong> Take your annual salary, subtract the threshold, multiply by 9%, then divide by 12. For example, on &pound;40,000 with Plan 1: (&pound;40,000 &minus; &pound;26,065) &times; 9% &divide; 12 = &pound;104.53/month.
              </p>
            </div>
          </div>

          {/* Interest Rates Explained */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Interest Rates Explained</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This is where the two plans differ most significantly. Plan 1 interest is capped and relatively low &mdash; it&apos;s the lower of RPI or the Bank of England base rate plus 1%, which keeps it manageable.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Plan 2 interest is much higher. While you&apos;re studying, you pay RPI + 3%. After graduation, the rate scales with your income: if you earn below the threshold you pay RPI only, but at &pound;50,000 and above you&apos;re paying the maximum rate of RPI + 3%. This means Plan 2 balances grow significantly faster, especially for higher earners. You can review the{" "}
              <a href="https://www.gov.uk/government/publications/student-loans-a-guide-to-terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">official terms and conditions</a>{" "}
              for full details on how interest is applied.
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-3">Plan 1 Interest</h3>
                <ul className="text-green-700 text-sm space-y-2">
                  <li>&bull; Capped at the lower of RPI or base rate + 1%</li>
                  <li>&bull; Currently around 3.2%</li>
                  <li>&bull; Balance grows slowly</li>
                  <li>&bull; More likely to repay in full</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-3">Plan 2 Interest</h3>
                <ul className="text-amber-700 text-sm space-y-2">
                  <li>&bull; RPI + up to 3% (currently up to 6.2%)</li>
                  <li>&bull; Scales with income after graduation</li>
                  <li>&bull; Balance grows significantly faster</li>
                  <li>&bull; Most borrowers won&apos;t repay in full</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Which Plan Am I On? */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Which Plan Am I On?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your plan depends on when and where you started your course:
            </p>

            <div className="space-y-3 mb-6">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-blue-800 font-semibold">Plan 1</p>
                <p className="text-blue-700 text-sm">You started university <strong>before September 2012</strong> in England or Wales, or any time in Northern Ireland.</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <p className="text-purple-800 font-semibold">Plan 2</p>
                <p className="text-purple-700 text-sm">You started university <strong>between September 2012 and July 2023</strong> in England or Wales.</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-green-800 font-semibold">Plan 5</p>
                <p className="text-green-700 text-sm">You started university <strong>after August 2023</strong> in England or Wales.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-gray-800 font-semibold">Plan 4</p>
                <p className="text-gray-700 text-sm">You studied in <strong>Scotland</strong> at any time.</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              If you&apos;re still not sure, check your payslip &mdash; it will show which plan your employer is deducting for. You can also log in to your{" "}
              <a href="https://www.slc.co.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Student Loans Company (SLC)</a>{" "}
              account online to confirm your plan type. More details are available on{" "}
              <a href="https://www.gov.uk/student-finance/repaying-your-loan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK&apos;s student loan repayment page</a>.
            </p>
          </div>

          <AdUnit slot="3520564956" layout="in-article" format="fluid" />

          {/* Should You Overpay? */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Should You Overpay Your Student Loan?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Whether overpaying makes sense depends heavily on which plan you&apos;re on and how much you owe.
            </p>

            <div className="grid lg:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <h3 className="font-semibold text-green-800 mb-3">Plan 1: Maybe Worth It</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  If you have a relatively small balance and you&apos;re close to repaying in full before the write-off date, overpaying could save you money on interest. Plan 1 loans are smaller, so this is more common.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">Plan 2: Usually Not Worth It</h3>
                <p className="text-red-700 text-sm leading-relaxed">
                  With typical balances of &pound;30,000&ndash;&pound;50,000 and high interest rates, most Plan 2 borrowers will never repay in full before the 30-year write-off. Overpaying means paying back money that would otherwise be written off.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <p className="text-amber-700 text-sm leading-relaxed">
                <strong>Overpaid already?</strong> If you&apos;ve continued making repayments after clearing your balance, you may be owed a refund.{" "}
                <Link href="/blog/student-loan-refund" className="text-amber-800 underline font-semibold hover:text-amber-900">
                  Read our student loan refund guide
                </Link>{" "}
                to find out how to claim back what you&apos;re owed.
              </p>
            </div>
          </div>

          {/* Plan 4 and Plan 5 */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Also: Plan 4 and Plan 5</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              While Plan 1 and Plan 2 are the most common, two other plans exist that are worth knowing about:
            </p>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Plan 4 (Scotland)</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>&bull; <strong>Threshold:</strong> &pound;32,745/year (2025/26)</li>
                  <li>&bull; <strong>Repayment rate:</strong> 9% above threshold</li>
                  <li>&bull; <strong>Write-off:</strong> 30 years or age 65</li>
                  <li>&bull; Higher threshold means lower monthly repayments</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">Plan 5 (Post-2023)</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>&bull; <strong>Threshold:</strong> &pound;25,000/year (2025/26)</li>
                  <li>&bull; <strong>Repayment rate:</strong> 9% above threshold</li>
                  <li>&bull; <strong>Write-off:</strong> 40 years after first eligible to repay</li>
                  <li>&bull; Lower threshold and longer write-off than Plan 2</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-4">
              All plans share the same 9% repayment rate. The key differences are the thresholds, interest rates, and how long until the balance is written off.
            </p>
          </div>

          {/* Dual Plans */}
          <div className="bg-white/90 rounded-2xl p-8 mb-8 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What If I Have Both Plan 1 and Plan 2?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you took out loans under both plans (for example, you started studying before 2012 and returned for a postgraduate course after 2012), you&apos;ll repay both simultaneously. Your employer deducts repayments based on the <strong>Plan 1 threshold</strong> (the lower one), and the Student Loans Company allocates the payments between your two loans.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Once the Plan 1 loan is fully repaid, your repayments switch to the Plan 2 threshold. This means your monthly repayments will drop until your salary rises above the higher Plan 2 threshold.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">See How Student Loans Affect Your Take-Home Pay</h2>
            <p className="text-purple-100 mb-6">
              Enter your salary and student loan plan to see exactly what you&apos;ll take home each month after tax, National Insurance, and student loan repayments.
            </p>
            <Link
              href="/take-home-pay-calculator"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Take-Home Pay Calculator &rarr;
            </Link>
          </div>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": "Plan 1 vs Plan 2 Student Loan: Key Differences Explained for 2025/26",
                "description": "Compare Plan 1 and Plan 2 student loans side by side. See repayment thresholds, interest rates, monthly repayments at different salaries, and when each loan is written off.",
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
                  "@id": "https://www.salarytakehome.co.uk/blog/plan-1-vs-plan-2-student-loan"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is the difference between Plan 1 and Plan 2 student loans?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Plan 1 is for students who started university before September 2012 in England or Wales. It has a lower repayment threshold (\u00a326,065 in 2025/26), lower interest rates (capped at RPI or base rate + 1%), and a 25-year write-off period. Plan 2 is for students who started between September 2012 and July 2023. It has a higher threshold (\u00a328,470), higher interest rates (up to RPI + 3%), and a 30-year write-off period."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Which student loan plan do I repay first if I have both?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "If you have both Plan 1 and Plan 2 loans, repayments are based on the Plan 1 threshold (the lower one) and the Student Loans Company splits the payments between both loans. Once your Plan 1 loan is fully repaid, your repayments switch to the higher Plan 2 threshold, which may reduce your monthly payments."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is it worth overpaying my student loan?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For Plan 1 borrowers with a small remaining balance near the write-off date, overpaying can save money on interest. For Plan 2 borrowers with large balances (\u00a330,000-\u00a350,000), overpaying is usually not worth it because most won't repay the full balance before it's written off after 30 years. Overpaying in that case means paying back money that would otherwise be cancelled."
                    }
                  }
                ]
              }
            ]
          })
        }} />
        <RelatedArticles articles={[
          { href: "/blog/student-loan-repayment-guide", title: "Student Loan Repayment Guide", category: "Student Loans", description: "Complete guide to UK student loan repayment plans, thresholds, and interest rates." },
          { href: "/blog/student-loan-refund", title: "Student Loan Refund Guide", category: "Student Loans", description: "Check if you've overpaid your student loan and how to claim a refund." },
          { href: "/blog/30k-salary-take-home", title: "\u00a330k Salary Take Home Pay", category: "Salary Guide", description: "Full breakdown of take-home pay on a \u00a330,000 salary." },
          { href: "/blog/uk-tax-changes-2025-26", title: "UK Tax Changes 2025/26", category: "Tax Planning", description: "Latest tax rates, thresholds, and changes affecting your pay." },
        ]} />
      </article>
    </div>
    </LayoutWrapper>
  );
}
