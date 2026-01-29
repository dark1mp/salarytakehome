import React from "react";
import Link from "next/link";

export const metadata = {
  title: "How to Negotiate a Pay Rise in 2026: The Complete UK Guide",
  description: "Learn how to successfully negotiate a pay rise in the UK. Includes average salary increase statistics, best timing, negotiation scripts, and how much you'll actually take home after tax.",
  keywords: "how to negotiate a pay rise, UK salary increase, pay rise negotiation, asking for a raise UK, average pay rise UK 2026, salary negotiation tips, when to ask for a pay rise",
  openGraph: {
    title: "How to Negotiate a Pay Rise in 2026: The Complete UK Guide",
    description: "Learn how to successfully negotiate a pay rise in the UK. Includes average salary increase statistics, best timing, and negotiation scripts.",
    type: "article",
    publishedTime: "2026-01-29T00:00:00.000Z",
    authors: ["SalaryTakeHome"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Negotiate a Pay Rise in 2026: The Complete UK Guide",
    description: "Proven strategies to negotiate a higher salary in the UK, with real statistics and scripts.",
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog/pay-rise-negotiation-guide",
  },
};

export default function PayRiseNegotiationGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Negotiate a Pay Rise in 2026: The Complete UK Guide",
    "description": "Learn how to successfully negotiate a pay rise in the UK. Includes average salary increase statistics, best timing, negotiation scripts, and how much you'll actually take home after tax.",
    "datePublished": "2026-01-29T00:00:00.000Z",
    "dateModified": "2026-01-29T00:00:00.000Z",
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
      "@id": "https://www.salarytakehome.co.uk/blog/pay-rise-negotiation-guide"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            &larr; Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-medium rounded-full">
              Salary Guide
            </span>
            <time className="text-gray-500 text-sm" dateTime="2026-01-29">
              January 29, 2026
            </time>
            <span className="text-gray-500 text-sm">15 min read</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            How to Negotiate a Pay Rise in 2026: The Complete UK Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Proven strategies to get the salary you deserve, backed by UK employment data and real negotiation scripts.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Pay Rise Reality Check</h2>
            <p className="text-lg text-gray-700 mb-4">
              According to the <a href="https://www.cipd.org/uk/knowledge/reports/labour-market-outlook/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">CIPD Labour Market Outlook</a>, UK employers budgeted for an average <strong>4-5% pay increase</strong> in 2024/25. Yet research consistently shows that <strong>over 60% of workers never negotiate their salary</strong> - leaving thousands of pounds on the table.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-700">4-5%</div>
                <div className="text-sm text-blue-600">Average UK pay rise 2024/25</div>
                <div className="text-xs text-blue-500 mt-1">Source: CIPD</div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-700">7.6%</div>
                <div className="text-sm text-green-600">Average earnings growth (Nov 2024)</div>
                <div className="text-xs text-green-500 mt-1">Source: ONS</div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-200">
                <div className="text-3xl font-bold text-amber-700">60%+</div>
                <div className="text-sm text-amber-600">Workers who never negotiate</div>
                <div className="text-xs text-amber-500 mt-1">Various surveys</div>
              </div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-4 mt-6 border border-emerald-200">
              <p className="text-emerald-800 font-medium">
                <strong>Key insight:</strong> If you&apos;re not asking for a pay rise, you&apos;re almost certainly being underpaid compared to new hires and those who do negotiate.
              </p>
            </div>
          </div>

          {/* When to Ask */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Ask for a Pay Rise</h2>
            <p className="text-gray-700 mb-4">
              Timing can make or break your negotiation. Here are the best moments to ask:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">1. After a Major Achievement</h3>
                <p className="text-gray-700 text-sm">
                  Just landed a big client? Completed a successful project? Received great feedback? Strike while your value is visible and fresh in everyone&apos;s mind.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">2. During Your Annual Review</h3>
                <p className="text-gray-700 text-sm">
                  Performance reviews are the natural time to discuss compensation. But don&apos;t wait until the review itself - raise it 2-4 weeks beforehand so budget decisions can be made.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">3. When Taking on New Responsibilities</h3>
                <p className="text-gray-700 text-sm">
                  If your role has expanded significantly, that&apos;s grounds for a pay review. Don&apos;t wait until you&apos;ve been doing the extra work for months - negotiate upfront.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">4. After Your Probation Period</h3>
                <p className="text-gray-700 text-sm">
                  Many companies offer automatic reviews at the end of probation. Use this opportunity to negotiate if you&apos;ve proven your worth.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-4 mt-6 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">When NOT to Ask</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>&bull; During company layoffs or financial difficulties</li>
                <li>&bull; Right after a major mistake or poor performance</li>
                <li>&bull; When your manager is clearly stressed or overwhelmed</li>
                <li>&bull; In a public setting or impromptu conversation</li>
              </ul>
            </div>
          </div>

          {/* How Much to Ask For */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Much Should You Ask For?</h2>
            <p className="text-gray-700 mb-4">
              According to <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">ONS data</a> and industry surveys, here&apos;s what UK workers are receiving:
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-3 font-semibold text-gray-900">Sector</th>
                    <th className="pb-3 font-semibold text-gray-900 text-right">Typical Pay Rise</th>
                    <th className="pb-3 font-semibold text-gray-900 text-right">Top Performers</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Technology & IT</td>
                    <td className="py-3 text-right font-medium">5-8%</td>
                    <td className="py-3 text-right text-green-600">10-15%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Finance & Banking</td>
                    <td className="py-3 text-right font-medium">4-7%</td>
                    <td className="py-3 text-right text-green-600">8-12%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Healthcare & NHS</td>
                    <td className="py-3 text-right font-medium">3-5%</td>
                    <td className="py-3 text-right text-green-600">5-8%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Retail & Hospitality</td>
                    <td className="py-3 text-right font-medium">3-5%</td>
                    <td className="py-3 text-right text-green-600">5-7%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Public Sector</td>
                    <td className="py-3 text-right font-medium">2-4%</td>
                    <td className="py-3 text-right text-green-600">4-6%</td>
                  </tr>
                  <tr>
                    <td className="py-3">UK Average</td>
                    <td className="py-3 text-right font-bold">4-5%</td>
                    <td className="py-3 text-right text-green-600 font-bold">7-10%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-3">Sources: CIPD, Reed Salary Guides, XpertHR Pay Settlements 2024/25</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">The Golden Rule: Ask for More Than You Expect</h3>
              <p className="text-blue-700 text-sm mb-3">
                If you want a 5% raise, ask for 8-10%. This gives room for negotiation and you might be pleasantly surprised. Research from <a href="https://hbr.org/" target="_blank" rel="noopener noreferrer" className="underline">Harvard Business Review</a> shows that people who ask for more consistently get better outcomes.
              </p>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> On a £45,000 salary, asking for a 10% rise (£4,500) might result in a 6-7% offer (£2,700-£3,150) - still better than the standard 4% you&apos;d get without negotiating.
                </p>
              </div>
            </div>
          </div>

          {/* Preparing Your Case */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Preparing Your Case</h2>
            <p className="text-gray-700 mb-4">
              A successful pay rise negotiation requires preparation. Here&apos;s your checklist:
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border-l-4 border-emerald-500">
                <h3 className="font-semibold text-gray-900 mb-2">1. Document Your Achievements</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Create a &quot;brag document&quot; tracking your wins throughout the year. Include:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>&bull; Revenue generated or costs saved (with specific figures)</li>
                  <li>&bull; Projects completed successfully</li>
                  <li>&bull; Positive feedback from clients, colleagues, or managers</li>
                  <li>&bull; New skills acquired or certifications earned</li>
                  <li>&bull; Additional responsibilities taken on</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2">2. Research Market Rates</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Know what others in your role are earning. Use these resources:
                </p>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>&bull; <a href="https://www.glassdoor.co.uk/Salaries" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Glassdoor UK Salary Data</a></li>
                  <li>&bull; <a href="https://www.reed.co.uk/average-salary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Reed Salary Checker</a></li>
                  <li>&bull; <a href="https://www.totaljobs.com/salary-checker" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Totaljobs Salary Checker</a></li>
                  <li>&bull; LinkedIn Salary Insights</li>
                  <li>&bull; Industry-specific salary surveys</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-5 border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 mb-2">3. Understand Your Company&apos;s Position</h3>
                <p className="text-gray-700 text-sm">
                  Research your company&apos;s financial health, recent performance, and typical pay review cycles. If they&apos;ve just had record profits, your case is stronger. If there have been recent layoffs, adjust your expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Negotiation Scripts */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Negotiation Scripts That Work</h2>
            <p className="text-gray-700 mb-6">
              Here are proven scripts you can adapt for your situation:
            </p>

            <div className="space-y-6">
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h3 className="font-semibold text-emerald-800 mb-3">Opening the Conversation</h3>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 italic">
                  &quot;I&apos;d like to schedule some time to discuss my compensation. Over the past year, I&apos;ve [specific achievement], and I&apos;ve taken on [new responsibilities]. Based on my research into market rates and my contributions to the team, I believe a salary adjustment is warranted. When would be a good time to discuss this?&quot;
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-3">Stating Your Case</h3>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 italic">
                  &quot;Based on my contributions this year - including [specific achievement with numbers] - and my research showing the market rate for this role is £X-£Y, I&apos;m requesting a salary increase to £[target amount]. This reflects both my current value to the team and my commitment to growing with the company.&quot;
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-3">If They Say &quot;We Don&apos;t Have the Budget&quot;</h3>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 italic">
                  &quot;I understand budget constraints are real. Could we discuss a timeline for when a review would be possible? In the meantime, are there other benefits we could explore - such as additional annual leave, flexible working arrangements, professional development budget, or a one-time bonus tied to specific goals?&quot;
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
                <h3 className="font-semibold text-purple-800 mb-3">If They Offer Less Than Expected</h3>
                <div className="bg-white rounded-lg p-4 text-sm text-gray-700 italic">
                  &quot;Thank you for the offer of X%. I was hoping for something closer to Y%, given [your key achievements]. Is there flexibility to meet in the middle? Or could we agree on a performance-based review in 6 months with a clear path to reaching that level?&quot;
                </div>
              </div>
            </div>
          </div>

          {/* Tax Impact Section */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Tax Impact</h2>
            <p className="text-gray-700 mb-4">
              Before you negotiate, understand how much of your pay rise you&apos;ll actually take home. Your raise is taxed at your <strong>marginal rate</strong> - the highest tax band your income falls into.
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-3 font-semibold text-gray-900">Tax Band</th>
                    <th className="pb-3 font-semibold text-gray-900 text-right">Rate</th>
                    <th className="pb-3 font-semibold text-gray-900 text-right">You Keep</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Basic rate (£12,571-£50,270)</td>
                    <td className="py-3 text-right">20% tax + 8% NI = 28%</td>
                    <td className="py-3 text-right text-green-600 font-semibold">72%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Higher rate (£50,271-£125,140)</td>
                    <td className="py-3 text-right">40% tax + 2% NI = 42%</td>
                    <td className="py-3 text-right text-amber-600 font-semibold">58%</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">Additional rate (over £125,140)</td>
                    <td className="py-3 text-right">45% tax + 2% NI = 47%</td>
                    <td className="py-3 text-right text-orange-600 font-semibold">53%</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-red-700 font-medium">£100k-£125,140 trap</td>
                    <td className="py-3 text-right text-red-600">Effective 60%+</td>
                    <td className="py-3 text-right text-red-600 font-semibold">~40%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 rounded-xl p-5 border border-red-200 mb-6">
              <h3 className="font-semibold text-red-800 mb-2">Warning: The £100k Tax Trap</h3>
              <p className="text-red-700 text-sm mb-3">
                If your pay rise takes you over £100,000, you&apos;ll start losing your Personal Allowance (£1 for every £2 over £100k). This creates an effective 60% tax rate on income between £100k and £125,140.
              </p>
              <p className="text-red-700 text-sm">
                <strong>Example:</strong> A £5,000 raise from £100k to £105k only puts ~£2,000 in your pocket.
              </p>
              <div className="mt-3">
                <Link href="/blog/100k-tax-trap" className="text-red-600 hover:text-red-800 font-medium text-sm">
                  Read more about the £100k tax trap &rarr;
                </Link>
              </div>
            </div>

            <div className="glass-medium rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Calculate Your Actual Take-Home After a Pay Rise
              </h3>
              <p className="text-gray-600 mb-4">
                See exactly how much extra money you&apos;ll receive each month with our free calculator.
              </p>
              <Link
                href="/pay-rise"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Try Pay Rise Calculator &rarr;
              </Link>
            </div>
          </div>

          {/* Alternative Benefits */}
          <div className="glass-light rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Alternative Benefits to Negotiate</h2>
            <p className="text-gray-700 mb-4">
              If a salary increase isn&apos;t possible, these alternatives can be just as valuable:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Pension Contributions</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Extra employer pension contributions are tax-efficient - you get the full value without income tax or NI deductions.
                </p>
                <Link href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 text-sm">
                  Learn about pension tax relief &rarr;
                </Link>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Salary Sacrifice Schemes</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Electric car schemes, cycle to work, or additional pension via salary sacrifice save tax AND National Insurance.
                </p>
                <Link href="/blog/salary-sacrifice-complete-guide" className="text-blue-600 hover:text-blue-800 text-sm">
                  Read the salary sacrifice guide &rarr;
                </Link>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Additional Annual Leave</h3>
                <p className="text-gray-600 text-sm">
                  Extra holiday days have real value - 5 additional days on a £50k salary is worth ~£1,000.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Working</h3>
                <p className="text-gray-600 text-sm">
                  Working from home saves commuting costs (average £5,000/year in London) and improves work-life balance.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Training & Development</h3>
                <p className="text-gray-600 text-sm">
                  Professional certifications or courses increase your market value for future salary negotiations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Performance Bonus</h3>
                <p className="text-gray-600 text-sm">
                  A one-time bonus tied to specific goals can be easier to approve than a permanent salary increase.
                </p>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="glass-medium rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Takeaways</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-emerald-600 font-bold">1</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Do your research</strong> - know your market value before negotiating
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-emerald-600 font-bold">2</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Time it right</strong> - after achievements, before annual reviews
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Ask for more</strong> - request 8-10% to negotiate down to 5-6%
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-emerald-600 font-bold">4</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Document everything</strong> - track achievements throughout the year
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-emerald-600 font-bold">5</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Understand tax</strong> - know how much you&apos;ll actually take home
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-emerald-600 font-bold">6</span>
                </div>
                <p className="text-gray-700 text-sm">
                  <strong>Have alternatives</strong> - pension, benefits, flexibility if salary is off the table
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="glass-medium rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Calculate Your Pay Rise?
            </h2>
            <p className="text-gray-600 mb-6">
              See exactly how much extra take-home pay you&apos;ll receive - accounting for tax, National Insurance, student loans, and pension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pay-rise"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Pay Rise Calculator &rarr;
              </Link>
              <Link
                href="/take-home-pay-calculator"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Take-Home Pay Calculator &rarr;
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Sources & Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <a href="https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  ONS - Earnings and Working Hours
                </a>
              </li>
              <li>
                <a href="https://www.cipd.org/uk/knowledge/reports/labour-market-outlook/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  CIPD - Labour Market Outlook
                </a>
              </li>
              <li>
                <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  GOV.UK - Income Tax Rates
                </a>
              </li>
              <li>
                <a href="https://www.bankofengland.co.uk/monetary-policy/inflation" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Bank of England - Inflation Data
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
