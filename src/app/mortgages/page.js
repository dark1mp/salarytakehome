"use client";
import React, { useState, useMemo, useCallback } from 'react';
import { Home, Calculator, TrendingUp, Info, Lightbulb, HelpCircle, Shield } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

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
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Mortgage Calculator" }]} fullWidth>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [{
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much can I borrow for a mortgage on my salary?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most UK lenders offer 4 to 4.5 times your annual salary. On a £40,000 salary, you could typically borrow £160,000-£180,000. Some lenders offer up to 5.5 times salary for higher earners or certain professionals. Your deposit size, credit history, and existing debts also affect how much you can borrow." }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between a fixed and variable rate mortgage?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A fixed rate mortgage locks your interest rate for a set period (typically 2-5 years), giving predictable monthly payments. A variable rate mortgage can change with the Bank of England base rate or your lender's standard variable rate (SVR). Fixed rates offer stability; variable rates may be cheaper initially but carry the risk of rate increases." }
                },
                {
                  "@type": "Question",
                  "name": "How does deposit size affect my mortgage repayments?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A larger deposit reduces the amount you borrow and usually secures a lower interest rate. With a 10% deposit (90% LTV), you might pay 5.5% interest. With a 25% deposit (75% LTV), you might pay 4.5%. On a £200,000 property, increasing your deposit from 10% to 25% could save over £150 per month." }
                },
                {
                  "@type": "Question",
                  "name": "What is a mortgage affordability check?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Lenders assess whether you can afford mortgage repayments by examining your income, regular outgoings, existing debts, and living costs. They also stress-test your ability to pay if interest rates rise by 3% or more. Having large debts, multiple credit commitments, or irregular income may reduce how much you can borrow." }
                },
                {
                  "@type": "Question",
                  "name": "How do interest rates affect my monthly mortgage payments?",
                  "acceptedAnswer": { "@type": "Answer", "text": "A 1% increase in interest rate on a £200,000 repayment mortgage over 25 years adds approximately £100-£110 to your monthly payment. At 4% interest, you pay around £1,056 per month. At 5%, this rises to approximately £1,170. Over the full term, a 1% difference costs over £30,000 in additional interest." }
                },
                {
                  "@type": "Question",
                  "name": "What is stamp duty and how much will I pay?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Stamp Duty Land Tax (SDLT) is a tax on property purchases in England and Northern Ireland. First-time buyers pay no stamp duty on properties up to £425,000. For other buyers, the first £250,000 is tax-free, then 5% applies up to £925,000, 10% up to £1.5 million, and 12% above that. Scotland and Wales have their own equivalents (LBTT and LTT)." }
                },
                {
                  "@type": "Question",
                  "name": "Can I overpay my mortgage to save money?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most mortgage lenders allow you to overpay by up to 10% of your outstanding balance per year without early repayment charges. Overpaying reduces your total interest and shortens the mortgage term. For example, overpaying £200 per month on a £200,000 mortgage at 5% could save over £30,000 in interest and pay off the mortgage 7 years early." }
                }
              ]
            }, {
              "@type": "WebApplication",
              "name": "UK Mortgage Calculator",
              "url": "https://www.salarytakehome.co.uk/mortgages",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP"
              },
              "description": "Free UK mortgage calculator. Calculate your monthly repayments for repayment and interest-only mortgages based on property value, deposit, and interest rate."
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
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: January 2026 · Reflects 2025/26 tax year
              </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-4 lg:gap-3 lg:scale-[0.92] lg:origin-top 2xl:scale-100">
            {/* Form Section */}
            <div className="space-y-5">
              {/* Property Value */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
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
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
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
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
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
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
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
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
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
            <div className="xl:col-span-1">
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
                    <p>
                      For official guidance on buying a home, visit <a href="https://www.gov.uk/government/collections/stamp-duty-land-tax" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Stamp Duty</a> and <a href="https://www.gov.uk/affordable-home-ownership-schemes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">government home ownership schemes</a>. Use our <a href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</a> to understand how much of your salary is available for mortgage payments, and read our <a href="/blog/maximize-take-home-pay-2024" className="text-blue-600 hover:text-blue-800 underline font-semibold">guide to maximising take-home pay</a> to boost your affordability.
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

              {/* UK Mortgage Rates by LTV */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-green-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">UK Mortgage Rates by LTV</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Your loan-to-value (LTV) ratio is one of the biggest factors that determines your mortgage interest rate. A lower LTV means less risk for the lender, which typically translates to a cheaper rate for you. Here's how typical rates compare across different deposit sizes.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">LTV</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">Typical 2-Year Fixed</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">Typical 5-Year Fixed</th>
                            <th className="text-right py-3 px-4 font-semibold text-gray-900">Monthly Payment (£250k, 25yr)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-900">60%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~4.2%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~4.0%</td>
                            <td className="py-3 px-4 text-right font-semibold text-green-700">~£1,357</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50/50">
                            <td className="py-3 px-4 font-medium text-gray-900">75%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~4.5%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~4.3%</td>
                            <td className="py-3 px-4 text-right font-semibold text-green-700">~£1,389</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-900">85%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~4.9%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~4.7%</td>
                            <td className="py-3 px-4 text-right font-semibold text-green-700">~£1,433</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50/50">
                            <td className="py-3 px-4 font-medium text-gray-900">90%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~5.3%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~5.1%</td>
                            <td className="py-3 px-4 text-right font-semibold text-green-700">~£1,477</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-900">95%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~5.8%</td>
                            <td className="py-3 px-4 text-right text-gray-700">~5.5%</td>
                            <td className="py-3 px-4 text-right font-semibold text-green-700">~£1,533</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500">
                      Rates are indicative only and change regularly. Compare actual rates from lenders. Read our <a href="/blog/first-time-buyer-mortgage-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">first-time buyer mortgage guide</a> for more details on how LTV affects your mortgage options.
                    </p>
                  </div>
                </div>
              </div>

              {/* First-Time Buyer Schemes */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-sky-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Home className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">First-Time Buyer Schemes</h3>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      The UK government offers several schemes to help first-time buyers get on the property ladder. These can make a real difference to your deposit, borrowing power, and overall costs.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Scheme</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">How It Works</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Key Benefit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-900">Lifetime ISA</td>
                            <td className="py-3 px-4 text-gray-700">Save up to £4,000/yr, govt adds 25%</td>
                            <td className="py-3 px-4 text-sky-700 font-semibold">Up to £1,000 free per year</td>
                          </tr>
                          <tr className="border-b border-gray-100 bg-gray-50/50">
                            <td className="py-3 px-4 font-medium text-gray-900">Shared Ownership</td>
                            <td className="py-3 px-4 text-gray-700">Buy 25-75% of property, rent the rest</td>
                            <td className="py-3 px-4 text-sky-700 font-semibold">Lower deposit needed</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-900">First Homes</td>
                            <td className="py-3 px-4 text-gray-700">30% discount on new-build homes</td>
                            <td className="py-3 px-4 text-sky-700 font-semibold">Permanently discounted price</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-900">Stamp Duty Relief</td>
                            <td className="py-3 px-4 text-gray-700">No stamp duty on first £425,000</td>
                            <td className="py-3 px-4 text-sky-700 font-semibold">Save up to £6,250</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500">
                      For full eligibility details, visit <a href="https://www.gov.uk/affordable-home-ownership-schemes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK affordable home ownership schemes</a>. See our <a href="/blog/first-time-buyer-mortgage-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">first-time buyer mortgage guide</a> for a complete walkthrough of the home-buying process.
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
              <a href="/blog/first-time-buyer-mortgage-guide" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">First-Time Buyer Mortgage Guide 2026</p>
              </a>
              <a href="/blog/cash-isa-limit-2027" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Savings</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Cash ISA Limit Changes 2027</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
