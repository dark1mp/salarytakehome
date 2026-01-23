"use client";
import React, { useState, useMemo, useCallback } from 'react';
import { Home, Calculator, TrendingUp, Info, Lightbulb, HelpCircle, Shield } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function MortgageCalculator() {
  const [formData, setFormData] = useState({
    propertyValue: '',
    deposit: '',
    interestRate: '',
    loanTerm: '25', // years
    repaymentType: 'repayment', // repayment or interest-only
  });

  const [results, setResults] = useState(null);

  // UK Mortgage Rules:
  // - Typical maximum LTV (Loan-to-Value): 95% for first-time buyers, 90% for others
  // - Standard repayment terms: 25-30 years (up to 35 for some lenders)
  // - Interest calculated monthly
  // - Repayment mortgage: Pays both interest and capital
  // - Interest-only: Pays only interest (capital paid at end or separately)

  const calculateMortgage = useCallback(() => {
    const propertyValue = parseFloat(formData.propertyValue.replace(/,/g, '')) || 0;
    const deposit = parseFloat(formData.deposit.replace(/,/g, '')) || 0;
    const interestRate = parseFloat(formData.interestRate) || 0;
    const loanTerm = parseFloat(formData.loanTerm) || 25;
    const repaymentType = formData.repaymentType;

    if (propertyValue <= 0 || deposit < 0 || interestRate <= 0 || loanTerm <= 0) {
      setResults(null);
      return;
    }

    if (deposit >= propertyValue) {
      setResults(null);
      return;
    }

    const loanAmount = propertyValue - deposit;
    const ltv = (loanAmount / propertyValue) * 100;
    
    // Monthly interest rate
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;

    let monthlyPayment = 0;
    let totalInterest = 0;
    let totalAmount = 0;

    if (repaymentType === 'repayment') {
      // Repayment mortgage: Standard formula M = P * [r(1+r)^n] / [(1+r)^n - 1]
      if (monthlyRate === 0) {
        monthlyPayment = loanAmount / numberOfPayments;
      } else {
        const compoundFactor = Math.pow(1 + monthlyRate, numberOfPayments);
        monthlyPayment = loanAmount * (monthlyRate * compoundFactor) / (compoundFactor - 1);
      }
      totalAmount = monthlyPayment * numberOfPayments;
      totalInterest = totalAmount - loanAmount;
    } else {
      // Interest-only mortgage: Just pays interest each month
      monthlyPayment = loanAmount * monthlyRate;
      totalInterest = monthlyPayment * numberOfPayments;
      totalAmount = loanAmount + totalInterest;
    }

    setResults({
      loanAmount,
      ltv,
      monthlyPayment,
      totalInterest,
      totalAmount,
      numberOfPayments,
      repaymentType,
    });
  }, [formData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNumberInput = (field, value) => {
    const formatted = formatNumber(value);
    updateFormData(field, formatted);
  };

  // Recalculate when form data changes
  React.useEffect(() => {
    calculateMortgage();
  }, [calculateMortgage]);

  // Estimate deposit as percentage
  const depositPercentage = useMemo(() => {
    const propertyValue = parseFloat(formData.propertyValue.replace(/,/g, '')) || 0;
    const deposit = parseFloat(formData.deposit.replace(/,/g, '')) || 0;
    if (propertyValue <= 0) return 0;
    return ((deposit / propertyValue) * 100).toFixed(1);
  }, [formData]);

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                UK Mortgage Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Calculate your monthly mortgage repayments based on UK mortgage rules
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form Section */}
            <div className="space-y-5">
              {/* Property Value */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Property Value
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.propertyValue}
                    onChange={(e) => handleNumberInput('propertyValue', e.target.value)}
                    placeholder="300,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Deposit */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Deposit
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.deposit}
                    onChange={(e) => handleNumberInput('deposit', e.target.value)}
                    placeholder="30,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                {formData.propertyValue && depositPercentage > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    Deposit: {depositPercentage}% (Loan-to-Value: {(100 - parseFloat(depositPercentage)).toFixed(1)}%)
                  </p>
                )}
              </div>

              {/* Interest Rate */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Annual Interest Rate (%)
                </label>
                <input
                  type="number"
                  value={formData.interestRate}
                  onChange={(e) => updateFormData('interestRate', e.target.value)}
                  placeholder="5.5"
                  step="0.1"
                  min="0"
                  max="20"
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                />
              </div>

              {/* Loan Term */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Loan Term (Years)
                </label>
                <select
                  value={formData.loanTerm}
                  onChange={(e) => updateFormData('loanTerm', e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200"
                >
                  {[15, 20, 25, 30, 35, 40].map(term => (
                    <option key={term} value={term}>{term} years</option>
                  ))}
                </select>
              </div>

              {/* Repayment Type */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Repayment Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => updateFormData('repaymentType', 'repayment')}
                    className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 font-semibold ${
                      formData.repaymentType === 'repayment'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200'
                    }`}
                  >
                    Repayment
                  </button>
                  <button
                    onClick={() => updateFormData('repaymentType', 'interest-only')}
                    className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 font-semibold ${
                      formData.repaymentType === 'interest-only'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200'
                    }`}
                  >
                    Interest-Only
                  </button>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>
                    
                    {/* Monthly Payment */}
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Monthly Payment</div>
                      <div className="text-4xl font-bold mb-2">{formatCurrency(results.monthlyPayment)}</div>
                      <div className="text-sm opacity-90">{results.repaymentType === 'repayment' ? 'Repayment Mortgage' : 'Interest-Only Mortgage'}</div>
                    </div>

                    {/* Loan Details */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Loan Amount</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.loanAmount)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Loan-to-Value (LTV)</span>
                        <span className="font-bold text-lg text-gray-900">{results.ltv.toFixed(1)}%</span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Total Interest</span>
                        <span className="font-bold text-lg text-red-600">{formatCurrency(results.totalInterest)}</span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Total Amount Repaid</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.totalAmount)}</span>
                      </div>

                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-700 font-medium">Number of Payments</span>
                        <span className="font-bold text-lg text-gray-900">{results.numberOfPayments}</span>
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Note:</strong> This is an estimate. Actual mortgage rates and terms vary by lender and depend on your credit score, income, and other factors. Always consult a qualified mortgage advisor.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Fill in your mortgage details to see your monthly repayments</p>
                  </div>
                )}
              </div>
            </div>
            </div>

            {/* Info Cards Section */}
            <div className="mt-16 space-y-8">
              {/* How This Mortgage Calculator Works */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">How This Mortgage Calculator Works</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Our UK mortgage calculator helps you estimate your monthly mortgage payments based on the property value,
                      deposit amount, interest rate, and loan term. The calculator uses standard UK mortgage formulas to provide
                      accurate estimates for both repayment and interest-only mortgages.
                    </p>
                    <p>
                      For <strong>repayment mortgages</strong>, your monthly payment covers both the interest and a portion of the
                      capital (loan amount), meaning you'll own the property outright at the end of the term. For <strong>interest-only
                      mortgages</strong>, you only pay the interest each month, and the full loan amount must be repaid at the end
                      of the term through other means.
                    </p>
                    <p>
                      The calculator also shows your Loan-to-Value (LTV) ratio, which is the percentage of the property value you're
                      borrowing. A lower LTV typically means better mortgage rates and more lender options. Most UK lenders offer
                      mortgages up to 95% LTV for first-time buyers and 90% for others.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Understanding Your Mortgage Matters */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Lightbulb className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Why Understanding Your Mortgage Matters</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      A mortgage is typically the largest financial commitment most people make in their lifetime. Understanding
                      your monthly payments helps you budget effectively and ensures you don't overstretch yourself financially.
                    </p>
                    <p>
                      The difference between mortgage types can significantly impact your finances. While interest-only mortgages
                      have lower monthly payments, you'll need a solid plan to repay the capital at the end of the term. Repayment
                      mortgages provide peace of mind as you gradually build equity in your home.
                    </p>
                    <p>
                      Even small differences in interest rates can have a huge impact over the life of a mortgage. For example,
                      on a £300,000 mortgage over 25 years, a 1% difference in interest rate can mean paying tens of thousands
                      of pounds more in interest. That's why it's crucial to shop around for the best rates.
                    </p>
                    <p>
                      Understanding your LTV is also important when remortgaging. As you pay down your mortgage and your property
                      value increases, your LTV decreases, which can give you access to better rates and save you money.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mortgage Calculator FAQs */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-emerald-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <HelpCircle className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Mortgage Calculator FAQs</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">What's the difference between repayment and interest-only mortgages?</h4>
                      <p className="text-gray-700">
                        With a repayment mortgage, your monthly payments cover both the interest and part of the capital, so you'll own
                        the property outright at the end of the term. With an interest-only mortgage, you only pay the interest, and
                        you'll need to repay the full loan amount at the end through savings, investments, or selling the property.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">How accurate is this mortgage calculator?</h4>
                      <p className="text-gray-700">
                        This calculator provides accurate estimates based on the information you enter. However, actual mortgage offers
                        may vary depending on your credit score, income, employment status, and the lender's specific criteria. Always
                        get a formal mortgage quote from a lender or broker.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">What is Loan-to-Value (LTV)?</h4>
                      <p className="text-gray-700">
                        LTV is the percentage of the property value you're borrowing. For example, if you're buying a £300,000 property
                        with a £30,000 deposit, you'll borrow £270,000, giving you an LTV of 90%. Lower LTVs typically get better
                        interest rates.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">What other costs should I consider when buying a property?</h4>
                      <p className="text-gray-700">
                        Beyond the deposit and monthly payments, you'll need to budget for stamp duty (unless you're a first-time buyer
                        buying under the threshold), solicitor fees, survey costs, mortgage arrangement fees, buildings insurance, and
                        potentially ground rent and service charges for leasehold properties.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Can I get a mortgage with a 5% deposit?</h4>
                      <p className="text-gray-700">
                        Yes, 95% LTV mortgages (5% deposit) are available in the UK, particularly for first-time buyers. However,
                        you'll typically face higher interest rates compared to mortgages with larger deposits. Government schemes
                        like the Mortgage Guarantee Scheme can help with 95% LTV mortgages.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">What mortgage term should I choose?</h4>
                      <p className="text-gray-700">
                        The most common mortgage terms in the UK are 25-30 years. Shorter terms mean higher monthly payments but less
                        interest paid overall. Longer terms reduce monthly payments but increase the total interest. Choose a term
                        that balances affordability with your long-term financial goals.
                      </p>
                    </div>
                    <div className="pb-6 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Should I fix my mortgage rate?</h4>
                      <p className="text-gray-700">
                        Fixed-rate mortgages give you certainty over your monthly payments for a set period (typically 2, 3, 5, or 10 years),
                        protecting you from interest rate rises. Variable and tracker mortgages can be cheaper but leave you exposed to
                        rate changes. Consider your risk tolerance and financial situation when choosing.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">How much can I afford to borrow?</h4>
                      <p className="text-gray-700">
                        UK lenders typically lend 4-4.5 times your annual income, though this varies based on your circumstances. They'll
                        assess your affordability by looking at your income, outgoings, credit history, and other financial commitments.
                        Some lenders may lend more for higher earners or those with excellent credit.
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
                      This mortgage calculator is provided for informational and educational purposes only. The results are estimates
                      based on the information you provide and should not be considered financial advice.
                    </p>
                    <p>
                      Actual mortgage offers will depend on your individual circumstances, including your credit score, income,
                      employment status, existing debts, and the lender's specific criteria. Interest rates, fees, and terms vary
                      between lenders and products.
                    </p>
                    <p>
                      We strongly recommend speaking with a qualified mortgage advisor or broker before making any property purchase
                      decisions. They can assess your specific situation and help you find the best mortgage deal for your needs.
                    </p>
                    <p>
                      This calculator does not account for additional costs such as mortgage arrangement fees, early repayment charges,
                      buildings insurance, or changes to interest rates over time. Always read the full terms and conditions of any
                      mortgage offer carefully.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 border-t pt-8 pb-6 text-center text-gray-500 text-sm">
              <div>© 2025 SalaryTakeHome.co.uk. All rights reserved.</div>
              <div className="mt-2">
                Privacy: This site does not collect or store any personal data. All calculations are done anonymously in your browser.
              </div>
            </footer>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8 h-[600px]">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>
      </div>
    </LayoutWrapper>
  );
}
