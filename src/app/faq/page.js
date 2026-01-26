import React from "react";
import Link from "next/link";

export const metadata = {
  title: "FAQ – UK Tax Calculator | SalaryTakeHome.co.uk",
  description: "Comprehensive FAQ about UK tax, National Insurance, student loans, pension contributions, and take-home pay calculations for 2024/25.",
  keywords: "UK tax FAQ, income tax questions, National Insurance FAQ, student loan repayment, pension contributions",
};

const faqCategories = [
  {
    category: "General Tax Questions",
    faqs: [
      {
        q: "How is UK income tax calculated for 2024/25?",
        a: "UK income tax is calculated using progressive tax bands: 0% on income up to £12,570 (personal allowance), 20% on income from £12,571 to £50,270 (basic rate), 40% on income from £50,271 to £125,140 (higher rate), and 45% on income above £125,140 (additional rate). Scotland has different rates and bands."
      },
      {
        q: "What is National Insurance and how much do I pay?",
        a: "National Insurance (NI) funds state benefits like the NHS and state pension. For 2024/25: you pay 12% on earnings between £12,570-£50,270, and 2% on earnings above £50,270. Self-employed pay Class 2 (£3.45/week if profits >£6,515) and Class 4 (9% on profits £12,570-£50,270, 2% above)."
      },
      {
        q: "When does my personal allowance reduce?",
        a: "Your £12,570 personal allowance reduces by £1 for every £2 of income above £100,000. It's completely removed when your income reaches £125,140, creating an effective 60% tax rate between £100,000-£125,140."
      }
    ]
  },
  {
    category: "Student Loans",
    faqs: [
      {
        q: "How are student loan repayments calculated?",
        a: "Repayments depend on your loan plan: Plan 1 (pre-2012): 9% on income above £22,015. Plan 2 (2012-2023): 9% on income above £27,295. Plan 5 (post-2023): 9% on income above £25,000. Postgraduate loans: 6% on income above £21,000. Multiple plans can apply simultaneously."
      },
      {
        q: "Can I pay off my student loan early?",
        a: "Yes, but consider the interest rate vs other investments. Plan 1 loans use RPI or Bank of England base rate +1% (whichever is lower). Plan 2/5 use RPI +3% while studying, then RPI + 0-3% based on income. Many loans are written off after 25-30 years."
      }
    ]
  },
  {
    category: "Pensions & Benefits",
    faqs: [
      {
        q: "How do pension contributions affect my tax?",
        a: "Pension contributions receive tax relief: 20% for basic rate taxpayers, 40% for higher rate, 45% for additional rate. The annual allowance is £60,000 (2024/25), but tapers for high earners. Salary sacrifice schemes can also save National Insurance."
      },
      {
        q: "What are the benefits of salary sacrifice?",
        a: "Salary sacrifice reduces both income tax and National Insurance. Common schemes include pensions, cycle-to-work, electric cars, and childcare vouchers. Your gross salary reduces, but take-home pay often increases due to tax savings."
      }
    ]
  },
  {
    category: "Self-Employment",
    faqs: [
      {
        q: "How is self-employed tax calculated?",
        a: "Self-employed pay income tax on profits (same rates as employed), Class 2 NI (£3.45/week if profits >£6,515), and Class 4 NI (9% on profits £12,570-£50,270, 2% above). You can deduct business expenses and claim allowances like home office costs."
      },
      {
        q: "What expenses can I claim as self-employed?",
        a: "You can claim expenses 'wholly and exclusively' for business: office costs, travel, equipment, professional fees, insurance, marketing, and training. Home office costs can be claimed using simplified flat rates or actual costs method."
      }
    ]
  },
  {
    category: "Calculator & Privacy",
    faqs: [
      {
        q: "How accurate is this tax calculator?",
        a: "Our calculator uses the latest HMRC rates and is updated for 2024/25. It covers most common scenarios but may not account for complex situations like split-year treatment, non-dom status, or specific reliefs. Always consult a qualified advisor for major financial decisions."
      },
      {
        q: "Is my data stored or shared?",
        a: "No. This calculator processes everything in your browser - no data is sent to our servers, stored, or shared. We use privacy-friendly analytics to improve the service but cannot see your personal calculations."
      },
      {
        q: "Can I save my calculations?",
        a: "Currently, calculations aren't saved between sessions for privacy. You can bookmark results or use the share feature. We're considering adding optional account features for users who want to save calculations locally."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/take-home-pay-calculator" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Calculator
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about UK tax, National Insurance, and take-home pay calculations
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-light rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.faqs.map((faq, faqIndex) => (
                  <div key={faqIndex} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 glass-medium rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Calculate Your Take-Home Pay?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our free calculator to get instant, accurate results for your UK salary
          </p>
          <Link
            href="/take-home-pay-calculator"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Calculating →
          </Link>
        </div>

        {/* FAQ Schema Markup for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category => 
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": { "@type": "Answer", "text": faq.a }
              }))
            )
          })
        }} />
      </div>
    </div>
  );
} 