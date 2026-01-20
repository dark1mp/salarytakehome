"use client";
import React, { useState, useMemo } from 'react';
import { FileText, AlertCircle, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function Debts() {
  const [formData, setFormData] = useState({
    debtAmount: '',
    interestRate: '',
    monthlyPayment: '',
    debtType: 'credit-card', // credit-card, loan, overdraft
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
                Debt Calculator
            </h1>
            <p className="text-xl text-gray-600">Calculate debt repayment schedules and total interest</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-5">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Debt Type</label>
                <select
                  value={formData.debtType}
                  onChange={(e) => setFormData({ ...formData, debtType: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200"
                >
                  <option value="credit-card">Credit Card</option>
                  <option value="loan">Personal Loan</option>
                  <option value="overdraft">Overdraft</option>
                </select>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Total Debt Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.debtAmount}
                    onChange={(e) => setFormData({ ...formData, debtAmount: formatNumber(e.target.value) })}
                    placeholder="5,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  value={formData.interestRate}
                  onChange={(e) => setFormData({ ...formData, interestRate: e.target.value })}
                  placeholder="18.9"
                  step="0.1"
                  min="0"
                  max="100"
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                />
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Monthly Payment</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.monthlyPayment}
                    onChange={(e) => setFormData({ ...formData, monthlyPayment: formatNumber(e.target.value) })}
                    placeholder="200"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Repayment Summary</h3>
                    
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Total Repayment Time</div>
                      <div className="text-4xl font-bold">{results.years} years</div>
                      <div className="text-sm opacity-90 mt-2">({results.months} months)</div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Original Debt</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.principal)}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Total Interest</span>
                        <span className="font-bold text-lg text-red-600">{formatCurrency(results.totalInterest)}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Total Amount Paid</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.totalPaid)}</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-700 font-medium">Monthly Payment</span>
                        <span className="font-bold text-lg text-blue-600">{formatCurrency(results.monthlyPayment)}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Tip:</strong> Paying more than the minimum reduces total interest paid. 
                          Consider consolidating high-interest debt if possible.
                        </div>
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
      </div>
    </LayoutWrapper>
  );
}
