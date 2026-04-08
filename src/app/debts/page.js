"use client";
import React, { useState, useMemo } from 'react';
import { FileText, AlertCircle, Info, Calculator, Lightbulb, HelpCircle, Shield } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

export default function Debts() {
  const [formData, setFormData] = useState({
    debtAmount: '',
    interestRate: '',
    monthlyPayment: '',
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const results = useMemo(() => {
    const principal = parseFloat(formData.debtAmount.replace(/,/g, '')) || 0;
    const interestRate = parseFloat(formData.interestRate) || 0;
    const monthlyPayment = parseFloat(formData.monthlyPayment.replace(/,/g, '')) || 0;

    if (principal <= 0 || interestRate < 0 || monthlyPayment <= 0) return null;

    const monthlyRate = (interestRate / 100) / 12;
    let balance = principal;
    let totalInterest = 0;
    let months = 0;
    const payments = [];

    // Calculate payment schedule
    while (balance > 0.01 && months < 600) { // Max 50 years
      const interestPayment = balance * monthlyRate;
      const principalPayment = Math.min(monthlyPayment - interestPayment, balance);
      balance = balance - principalPayment;
      totalInterest += interestPayment;
      months++;
      
      if (months <= 12 || months % 12 === 0 || balance <= 0.01) {
        payments.push({
          month: months,
          balance: balance,
          interestPaid: totalInterest,
        });
      }
    }

    const totalPaid = principal + totalInterest;
    const years = months / 12;

    return {
      principal,
      totalInterest,
      totalPaid,
      months,
      years: years.toFixed(1),
      monthlyPayment,
      payments: payments.slice(-12), // Last 12 payment records
      completed: balance <= 0.01,
    };
  }, [formData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Debt Calculator" }]} fullWidth>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [{
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the difference between snowball and avalanche debt repayment?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The snowball method pays off the smallest debt first for quick psychological wins, then rolls that payment into the next smallest. The avalanche method targets the highest interest rate debt first, saving more money overall. Mathematically, avalanche is cheaper, but snowball can be more motivating for staying on track." }
                },
                {
                  "@type": "Question",
                  "name": "How long will it take to pay off my debt?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Repayment time depends on your total debt, interest rates, and monthly payments. For example, a £5,000 credit card debt at 20% APR with £150 monthly payments takes about 44 months to clear, costing around £1,500 in interest. Increasing payments to £250 per month reduces this to 24 months and £840 in interest." }
                },
                {
                  "@type": "Question",
                  "name": "Should I pay off my highest interest debt first?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Generally yes. Paying off the highest interest debt first (the avalanche method) minimises the total interest you pay. If you have a credit card at 20% APR and a personal loan at 6%, prioritising the credit card saves significantly more money over time, even if the loan balance is larger." }
                },
                {
                  "@type": "Question",
                  "name": "How do minimum payments affect the total cost of debt?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Minimum payments are designed to keep debt manageable but can dramatically extend repayment time and increase total cost. A £3,000 credit card debt at 19.9% APR with only minimum payments (typically 2.5% of balance or £5, whichever is higher) could take over 25 years to repay and cost more than £4,000 in interest alone." }
                },
                {
                  "@type": "Question",
                  "name": "Does debt consolidation save money?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Debt consolidation can save money if you secure a lower interest rate than your existing debts. Combining multiple debts at 20-30% APR into a single loan at 6-8% significantly reduces interest costs. However, extending the repayment term can increase total interest paid even at a lower rate. Always compare the total cost, not just monthly payments." }
                },
                {
                  "@type": "Question",
                  "name": "What free debt advice services are available in the UK?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Several UK organisations offer free, confidential debt advice: StepChange (0800 138 1111), Citizens Advice, National Debtline (0808 808 4000), and MoneyHelper. These services can help you create a budget, negotiate with creditors, and explore options like Debt Management Plans (DMPs), Individual Voluntary Arrangements (IVAs), or bankruptcy if needed." }
                },
                {
                  "@type": "Question",
                  "name": "How does debt affect my credit score?",
                  "acceptedAnswer": { "@type": "Answer", "text": "High levels of debt relative to your credit limits (known as credit utilisation) can lower your credit score. Missing payments, defaults, and CCJs have a significant negative impact. Regularly making payments on time and keeping credit utilisation below 30% helps maintain a good score. Paying off debt completely improves your score over time." }
                }
              ]
            }, {
              "@type": "WebApplication",
              "name": "Debt Repayment Calculator UK",
              "url": "https://www.salarytakehome.co.uk/debts",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP"
              },
              "description": "Free UK debt repayment calculator. Calculate how long it will take to pay off your debt and how much interest you will pay."
            }]
          }) }}
        />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="relative mx-auto px-8 py-10">
          <div className="hidden xl:block absolute right-8 top-8 w-[160px]">
            <div className="sticky top-8">
              <AdUnit slot="4603525459" hideOnMobile />
              <AdUnit slot="9534353704" hideOnMobile />
            </div>
          </div>
          <div className="flex-1 xl:pr-[192px]">
            <AdUnit slot="1586479879" hideOnMobile />
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                Debt Repayment Calculator
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Use our free UK debt repayment calculator to understand how long it will take to pay off your debts and how much interest you'll pay.
              Whether you have credit card debt, a personal loan, or an overdraft, this calculator helps you create a clear repayment plan.
              Simply enter your total debt amount, annual interest rate, and monthly payment to see your complete repayment schedule including total interest costs.
            </p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: April 2026 · Reflects 2026/27 tax year
              </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-4 lg:gap-3 lg:scale-[0.92] lg:origin-top 2xl:scale-100">
            {/* Form */}
            <div className="space-y-4">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-5 lg:p-4 xl:p-5">
                <label className="block text-sm font-bold text-gray-700 mb-2">Total Debt Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-base">£</span>
                  <input
                    type="text"
                    value={formData.debtAmount}
                    onChange={(e) => setFormData({ ...formData, debtAmount: formatNumber(e.target.value) })}
                    placeholder="5,000"
                    className="w-full pl-9 pr-3 py-3 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-base font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-5 lg:p-4 xl:p-5">
                <label className="block text-sm font-bold text-gray-700 mb-2">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  value={formData.interestRate}
                  onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
                  placeholder="18.9"
                  step="0.1"
                  min="0"
                  max="100"
                  className="w-full px-3 py-3 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-base font-semibold bg-white/80 transition-all duration-200"
                />
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-5 lg:p-4 xl:p-5">
                <label className="block text-sm font-bold text-gray-700 mb-2">Monthly Payment</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-base">£</span>
                  <input
                    type="text"
                    value={formData.monthlyPayment}
                    onChange={(e) => setFormData({ ...formData, monthlyPayment: formatNumber(e.target.value) })}
                    placeholder="200"
                    className="w-full pl-9 pr-3 py-3 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-base font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Minimum payment must cover interest</p>
              </div>
            </div>

            {/* Results */}
            <div className="xl:col-span-1">
              <div className="sticky top-8">
                {results && results.completed ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Repayment Summary</h3>

                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 text-white mb-4 shadow-medium">
                      <div className="text-xs opacity-90 mb-1">Total Repayment Time</div>
                      <div className="text-3xl font-bold">{results.years} years</div>
                      <div className="text-xs opacity-90 mt-1">({results.months} months)</div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700 font-medium text-sm">Original Debt</span>
                        <span className="font-bold text-base text-gray-900">{formatCurrency(results.principal)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700 font-medium text-sm">Total Interest</span>
                        <span className="font-bold text-base text-red-600">{formatCurrency(results.totalInterest)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700 font-medium text-sm">Total Amount Paid</span>
                        <span className="font-bold text-base text-gray-900">{formatCurrency(results.totalPaid)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700 font-medium text-sm">Monthly Payment</span>
                        <span className="font-bold text-base text-blue-600">{formatCurrency(results.monthlyPayment)}</span>
                      </div>
                    </div>
                  </div>
                ) : results && !results.completed ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 mb-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-gray-800">
                          <strong>Warning:</strong> Your monthly payment is too low. It doesn&apos;t cover the interest. 
                          You need to pay at least {formatCurrency((parseFloat(formData.debtAmount.replace(/,/g, '')) || 0) * (parseFloat(formData.interestRate) || 0) / 100 / 12)} per month to make progress.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Debt Details</h3>
                    <p className="text-gray-600">Calculate your repayment schedule and total interest</p>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Info Cards Section */}
        <div className="flex gap-6 mx-auto px-8 mt-10">
          <div className="flex-1 xl:pr-[192px]">
            <div className="space-y-8">
              {/* How This Debt Repayment Calculator Works */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">How This Debt Repayment Calculator Works</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Our UK debt repayment calculator helps you understand exactly how long it will take to pay off your debts
                      and how much interest you'll pay over time. Whether you have credit card debt, a personal loan, store card,
                      or overdraft, this calculator provides a clear picture of your debt repayment journey.
                    </p>
                    <p>
                      The calculator uses compound interest calculations to show you the real cost of your debt. Each month,
                      interest is charged on your remaining balance, and your payment is split between paying off interest
                      and reducing the principal (the original amount you borrowed).
                    </p>
                    <p>
                      You'll see exactly how many months and years it will take to become debt-free, the total interest you'll
                      pay, and your total repayment amount. This information helps you make informed decisions about whether
                      to increase your monthly payments or consolidate debts at a lower interest rate.
                    </p>
                    <p>
                      For free debt advice, visit <a href="https://www.gov.uk/debt-advice" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Debt Advice</a> or contact <a href="https://www.stepchange.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">StepChange</a>. Use our <a href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</a> to understand how much income you have available for debt repayments, and read our <a href="/blog/maximize-take-home-pay-2024" className="text-blue-600 hover:text-blue-800 underline font-semibold">guide to maximising take-home pay</a> to free up more money for clearing your debts faster.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Understanding Your Debt Matters */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Lightbulb className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Why Understanding Your Debt Matters</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Debt can be one of the most stressful financial burdens, but understanding exactly how it works gives
                      you power and control. Many people are surprised to learn just how much extra they'll pay in interest
                      over the life of their debt, especially with high-interest credit cards.
                    </p>
                    <p>
                      Making only minimum payments can trap you in a cycle where most of your payment goes toward interest
                      rather than reducing the actual debt. For example, on a £5,000 credit card debt at 18.9% APR with
                      minimum payments, you could end up paying thousands more in interest and take decades to clear the balance.
                    </p>
                    <p>
                      Even small increases to your monthly payment can have a dramatic effect. Paying just £50 or £100 more
                      per month could cut years off your repayment time and save you significant amounts in interest. Use
                      this calculator to see exactly how different payment amounts affect your timeline.
                    </p>
                    <p>
                      Understanding your debt also helps you prioritize which debts to tackle first. Generally, it's best
                      to focus on paying off high-interest debts first (like credit cards) while maintaining minimum payments
                      on lower-interest debts (like personal loans). This strategy, known as the avalanche method, minimizes
                      the total interest you'll pay.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interest Rates by Debt Type */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-red-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <AlertCircle className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Interest Rates by Debt Type</h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Not all debt is created equal. The interest rate you&apos;re paying has a huge impact on how quickly your debt grows and how much it really costs you. Here&apos;s what typical APRs look like across common UK debt types:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Debt Type</th>
                          <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Typical APR</th>
                          <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Monthly Interest on £5,000</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">Credit card</td>
                          <td className="p-3 text-right text-red-600 font-medium">18-25%</td>
                          <td className="p-3 text-right text-gray-700">£75-£104</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">Store card</td>
                          <td className="p-3 text-right text-red-600 font-medium">25-40%</td>
                          <td className="p-3 text-right text-gray-700">£104-£167</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">Overdraft</td>
                          <td className="p-3 text-right text-red-600 font-medium">35-40%</td>
                          <td className="p-3 text-right text-gray-700">£146-£167</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">Personal loan</td>
                          <td className="p-3 text-right text-amber-600 font-medium">5-15%</td>
                          <td className="p-3 text-right text-gray-700">£21-£63</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">Car finance (PCP)</td>
                          <td className="p-3 text-right text-amber-600 font-medium">6-12%</td>
                          <td className="p-3 text-right text-gray-700">£25-£50</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-700">Payday loan</td>
                          <td className="p-3 text-right text-red-700 font-bold">1,000%+</td>
                          <td className="p-3 text-right text-red-700 font-bold">£400+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200 mb-4">
                    <p className="text-red-800 text-sm">
                      <strong>Warning:</strong> Payday loans carry extremely high interest rates and can quickly spiral out of control. If you&apos;re relying on payday loans, seek free debt advice from <a href="https://www.stepchange.org/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-900 underline font-semibold">StepChange</a> or <a href="https://www.citizensadvice.org.uk/debt-and-money/" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-900 underline font-semibold">Citizens Advice</a> as soon as possible.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Always prioritise paying off the highest APR debts first to minimise the total cost. Read our <a href="/blog/how-to-pay-off-debt-faster" className="text-blue-600 hover:text-blue-800 underline font-semibold">guide to paying off debt faster</a> for step-by-step strategies.
                  </p>
                </div>
              </div>

              {/* Snowball vs Avalanche: Worked Example */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-indigo-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Snowball vs Avalanche: Worked Example</h3>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Imagine you have 3 debts and a total budget of £300 per month to put toward repayment:
                  </p>
                  <div className="grid lg:grid-cols-3 gap-3 mb-4">
                    <div className="bg-indigo-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-indigo-600 font-medium">Credit card</div>
                      <div className="text-lg font-bold text-gray-900">£3,000</div>
                      <div className="text-xs text-indigo-500">22% APR</div>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-indigo-600 font-medium">Overdraft</div>
                      <div className="text-lg font-bold text-gray-900">£1,500</div>
                      <div className="text-xs text-indigo-500">35% APR</div>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-indigo-600 font-medium">Personal loan</div>
                      <div className="text-lg font-bold text-gray-900">£5,000</div>
                      <div className="text-xs text-indigo-500">8% APR</div>
                    </div>
                  </div>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Method</th>
                          <th className="text-left p-3 font-semibold text-gray-900 border-b border-gray-200">Payoff Order</th>
                          <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Total Interest</th>
                          <th className="text-right p-3 font-semibold text-gray-900 border-b border-gray-200">Months to Clear</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 bg-green-50">
                          <td className="p-3 font-medium text-green-800">Avalanche</td>
                          <td className="p-3 text-gray-700">Overdraft → Credit card → Loan</td>
                          <td className="p-3 text-right font-medium text-green-700">~£1,450</td>
                          <td className="p-3 text-right text-gray-700">~38 months</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-blue-50">
                          <td className="p-3 font-medium text-blue-800">Snowball</td>
                          <td className="p-3 text-gray-700">Overdraft → Credit card → Loan</td>
                          <td className="p-3 text-right font-medium text-blue-700">~£1,520</td>
                          <td className="p-3 text-right text-gray-700">~38 months</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="p-3 font-medium text-red-800">Minimum only</td>
                          <td className="p-3 text-gray-700">All at minimum</td>
                          <td className="p-3 text-right font-medium text-red-700">~£3,200+</td>
                          <td className="p-3 text-right text-red-700">60+ months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 mb-4">
                    <p className="text-indigo-800 text-sm">
                      <strong>Note:</strong> Both strategies pay debts in the same order here because the smallest balance (overdraft) also has the highest APR. When that&apos;s not the case, the interest savings from the avalanche method are more pronounced.
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Read the full comparison with more examples in our <a href="/blog/how-to-pay-off-debt-faster" className="text-blue-600 hover:text-blue-800 underline font-semibold">guide to paying off debt faster</a>, or visit <a href="https://www.gov.uk/debt-advice" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Debt Advice</a> for free, impartial support.
                  </p>
                </div>
              </div>

              {/* Debt Repayment FAQs */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-emerald-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <HelpCircle className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Debt Repayment FAQs</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">How accurate is this debt calculator?</h4>
                      <p className="text-gray-700">
                        This calculator provides accurate estimates based on standard compound interest calculations. However,
                        actual repayment amounts may vary slightly depending on how your lender calculates interest (daily vs monthly),
                        any fees charged, and whether you make consistent payments. Always check your credit agreement for precise terms.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">What if my monthly payment doesn't cover the interest?</h4>
                      <p className="text-gray-700">
                        If your monthly payment is less than the monthly interest charged, your debt will actually grow over time
                        rather than decrease. The calculator will warn you if this happens. You'll need to increase your monthly
                        payment to at least cover the interest charge to start making progress on reducing your debt.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Should I pay off debt or save money?</h4>
                      <p className="text-gray-700">
                        Generally, paying off high-interest debt (like credit cards) should be a priority over saving, because
                        the interest you're paying on debt is usually much higher than interest you'd earn on savings. However,
                        it's wise to keep a small emergency fund (£500-£1,000) to avoid taking on more debt for unexpected expenses.
                        Read about <a href="/blog/cash-isa-limit-2027" className="text-blue-600 hover:text-blue-800 underline font-semibold">ISA savings options</a> for when you're ready to start saving after clearing high-interest debts.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">What's the best strategy for paying off multiple debts?</h4>
                      <p className="text-gray-700">
                        The avalanche method (paying off highest interest rate debts first) saves the most money on interest.
                        The snowball method (paying off smallest debts first) can provide psychological wins and motivation.
                        Both methods require making minimum payments on all debts while putting extra money toward your chosen priority.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Should I consolidate my debts?</h4>
                      <p className="text-gray-700">
                        Debt consolidation can be beneficial if you can secure a lower interest rate than your current debts.
                        This simplifies payments and can save you money. However, watch out for consolidation fees, longer
                        repayment terms that increase total interest, and the temptation to run up new debts on cleared credit cards.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Can I negotiate my interest rate?</h4>
                      <p className="text-gray-700">
                        Yes, it's often possible to negotiate lower interest rates, especially if you have a good payment history
                        or are struggling financially. Contact your lender to discuss hardship programs, reduced rates, or payment
                        plans. Many lenders prefer to negotiate rather than risk you defaulting on the debt entirely.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">What if I can't afford my minimum payments?</h4>
                      <p className="text-gray-700">
                        If you're struggling with payments, contact your lenders immediately. Many offer hardship programs with
                        reduced payments or payment holidays. You can also seek free debt advice from StepChange, Citizens Advice,
                        or National Debtline. Don't ignore the problem as it will only get worse with late fees and additional interest.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How does paying extra each month help?</h4>
                      <p className="text-gray-700">
                        Extra payments go directly toward reducing your principal balance, which means you'll pay less interest
                        over time. Even small additional payments can significantly reduce your repayment timeline. For example,
                        paying an extra £50/month on a £5,000 debt at 18.9% APR could save you hundreds in interest and cut years
                        off your repayment time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-purple-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Disclaimer</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      This debt repayment calculator is provided for informational and educational purposes only. The results
                      are estimates based on the information you provide and standard compound interest calculations. They
                      should not be considered financial advice.
                    </p>
                    <p>
                      Actual repayment amounts and timelines may vary depending on your lender's specific terms, how interest
                      is calculated (daily vs monthly), any fees or charges, payment processing times, and changes to interest
                      rates over time. Always refer to your credit agreement for exact terms and conditions.
                    </p>
                    <p>
                      If you're struggling with debt or need personalized financial guidance, we strongly recommend speaking
                      with a qualified debt advisor. Free debt advice is available from organizations like StepChange, Citizens
                      Advice, National Debtline, and Money Helper.
                    </p>
                    <p>
                      This calculator does not account for fees, payment protection insurance, or penalties for late or missed
                      payments. It assumes consistent monthly payments and a fixed interest rate. Your actual situation may differ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Reading */}
        <div className="mx-auto px-8 mt-6 mb-8 xl:pr-[192px]">
          <div className="max-w-6xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Related Reading</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <a href="/blog/maximize-take-home-pay-2024" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How to Maximise Your Take Home Pay</p>
              </a>
              <a href="/blog/how-to-pay-off-debt-faster" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How to Pay Off Debt Faster: Snowball vs Avalanche</p>
              </a>
              <a href="/blog/student-loan-repayment-guide" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Student Loans</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Student Loan Repayment Guide</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
