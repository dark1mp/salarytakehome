"use client";
import React, { useState, useMemo, useCallback } from 'react';
import { Home, Calculator, TrendingUp, Info } from 'lucide-react';
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
        <div className="max-w-6xl mx-auto px-8 py-10">
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
        </div>
      </div>
    </LayoutWrapper>
  );
}
