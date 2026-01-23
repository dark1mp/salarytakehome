"use client";
import React, { useState, useMemo } from 'react';
import { FileText, AlertCircle, Info, Calculator, Lightbulb, HelpCircle, Shield } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

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
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
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
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-4">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-5">
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

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-5">
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

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-5">
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
            <div className="lg:col-span-1">
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

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8 h-[600px]">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* Info Cards Section */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-10">
          <div className="flex-1 max-w-6xl">
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

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Ad Space */}
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t pt-8 pb-6 text-center text-gray-500 text-sm">
          <div>© 2025 SalaryTakeHome.co.uk. All rights reserved.</div>
          <div className="mt-2">
            Privacy: This site does not collect or store any personal data. All calculations are done anonymously in your browser.
          </div>
        </footer>
      </div>
    </LayoutWrapper>
  );
}
