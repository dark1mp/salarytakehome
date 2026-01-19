"use client";
import React, { useState, useMemo } from 'react';
import { Scale, TrendingUp, TrendingDown, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function CompareSalaries() {
  const [formData, setFormData] = useState({
    salary1: '',
    salary2: '',
    period: 'yearly', // yearly, monthly, weekly
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const results = useMemo(() => {
    const sal1 = parseFloat(formData.salary1.replace(/,/g, '')) || 0;
    const sal2 = parseFloat(formData.salary2.replace(/,/g, '')) || 0;

    if (sal1 <= 0 || sal2 <= 0) return null;

    // Convert to annual for calculations
    let annual1 = sal1;
    let annual2 = sal2;

    if (formData.period === 'monthly') {
      annual1 = sal1 * 12;
      annual2 = sal2 * 12;
    } else if (formData.period === 'weekly') {
      annual1 = sal1 * 52;
      annual2 = sal2 * 52;
    }

    // Calculate tax for both (simplified)
    const personalAllowance = 12570;
    
    const calcTakeHome = (annual) => {
      const taxable = Math.max(0, annual - personalAllowance);
      const tax = Math.min(taxable, 37700) * 0.2 + Math.max(0, Math.min(taxable - 37700, 125140 - 37700 - (annual - personalAllowance))) * 0.4 + Math.max(0, taxable - 125140) * 0.45;
      const niThreshold = 12570;
      const niIncome = Math.max(0, annual - niThreshold);
      const ni = Math.min(niIncome, 50270 - niThreshold) * 0.08 + Math.max(0, niIncome - (50270 - niThreshold)) * 0.02;
      return { gross: annual, tax, ni, takeHome: annual - tax - ni };
    };

    const result1 = calcTakeHome(annual1);
    const result2 = calcTakeHome(annual2);

    const difference = result2.takeHome - result1.takeHome;
    const differencePercent = ((result2.takeHome / result1.takeHome) - 1) * 100;

    // Convert back to selected period
    const divisor = formData.period === 'yearly' ? 1 : formData.period === 'monthly' ? 12 : 52;

    return {
      salary1: {
        gross: result1.gross / divisor,
        tax: result1.tax / divisor,
        ni: result1.ni / divisor,
        takeHome: result1.takeHome / divisor,
      },
      salary2: {
        gross: result2.gross / divisor,
        tax: result2.tax / divisor,
        ni: result2.ni / divisor,
        takeHome: result2.takeHome / divisor,
      },
      difference: difference / divisor,
      differencePercent,
      better: difference > 0 ? 'Salary 2' : 'Salary 1',
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
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              Compare Two Salaries
            </h1>
            <p className="text-xl text-gray-600">Compare two salary offers to see which gives you more take-home pay</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Salary 1 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Salary 1</h2>
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.salary1}
                    onChange={(e) => setFormData({ ...formData, salary1: formatNumber(e.target.value) })}
                    placeholder="50,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Period</label>
                <select
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200"
                >
                  <option value="yearly">Yearly</option>
                  <option value="monthly">Monthly</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>

            {/* Salary 2 */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Salary 2</h2>
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.salary2}
                    onChange={(e) => setFormData({ ...formData, salary2: formatNumber(e.target.value) })}
                    placeholder="55,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison</h3>
                    
                    <div className={`rounded-2xl p-8 text-white mb-6 shadow-medium ${
                      results.difference > 0 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                    }`}>
                      <div className="text-sm opacity-90 mb-2">Take-Home Difference</div>
                      <div className="text-4xl font-bold">{formatCurrency(Math.abs(results.difference))}</div>
                      <div className="flex items-center gap-2 mt-4">
                        {results.difference > 0 ? (
                          <>
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-sm opacity-90">Salary 2 is better by {Math.abs(results.differencePercent).toFixed(1)}%</span>
                          </>
                        ) : (
                          <>
                            <TrendingDown className="w-5 h-5" />
                            <span className="text-sm opacity-90">Salary 1 is better by {Math.abs(results.differencePercent).toFixed(1)}%</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-xs text-gray-600 mb-1">Salary 1</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.salary1.takeHome)}</div>
                        <div className="text-xs text-gray-500 mt-1">Take-home</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="text-xs text-gray-600 mb-1">Salary 2</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.salary2.takeHome)}</div>
                        <div className="text-xs text-gray-500 mt-1">Take-home</div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gray-100 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Salary 1 Tax</span>
                        <span className="font-semibold text-red-600">{formatCurrency(results.salary1.tax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Salary 2 Tax</span>
                        <span className="font-semibold text-red-600">{formatCurrency(results.salary2.tax)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-8 text-center">
                    <Scale className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Both Salaries</h3>
                    <p className="text-gray-600">See which one gives you more take-home pay</p>
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
