import React from "react";

export const metadata = {
  title: "FAQ – UK Tax Calculator | SalaryTakeHome.co.uk",
  description: "Frequently asked questions about UK tax, take-home pay, and how our calculator works.",
};

const faqs = [
  {
    q: "How is UK income tax calculated?",
    a: "UK income tax is calculated based on your total income, tax code, and applicable tax bands for the year. Our calculator uses the latest HMRC rates for England, Wales, and Scotland."
  },
  {
    q: "What is National Insurance?",
    a: "National Insurance (NI) is a tax on earnings that helps fund state benefits. The amount you pay depends on your income and employment status."
  },
  {
    q: "Is my data stored or shared?",
    a: "No. This calculator does not collect or store any personal data. All calculations are done anonymously in your browser."
  },
  {
    q: "Can I use this calculator for self-employment income?",
    a: "Yes! Select 'Self-employed' to estimate your take-home pay as a sole trader."
  },
  {
    q: "How accurate is the calculator?",
    a: "We use the latest tax rates and rules, but your actual take-home pay may vary based on your specific situation. Always consult a qualified advisor for major decisions."
  }
];

export default function FAQ() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-5">
            <h2 className="text-lg font-semibold mb-2">{faq.q}</h2>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
      {/* FAQ Schema Markup for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })
      }} />
    </main>
  );
} 