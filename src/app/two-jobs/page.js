"use client";
import React, { useState, useMemo } from 'react';
import { Briefcase, TrendingUp, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function TwoJobs() {
  const [formData, setFormData] = useState({
    job1Salary: '',
    job2Salary: '',
    job1TaxCode: '1257L',
    job2TaxCode: 'BR', // BR = Basic Rate (20% on all)
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const results = useMemo(() => {
    const salary1 = parseFloat(formData.job1Salary.replace(/,/g, '')) || 0;
    const salary2 = parseFloat(formData.job2Salary.replace(/,/g, '')) || 0;

    if (salary1 <= 0 || salary2 <= 0) return null;

    const totalSalary = salary1 + salary2;
    const personalAllowance = 12570; // Standard personal allowance

    // Job 1 uses personal allowance (tax code 1257L)
    let tax1 = 0;
    let taxable1 = Math.max(0, salary1 - personalAllowance);
    if (taxable1 > 0) {
      const basicRate = Math.min(taxable1, 37700) * 0.2;
      const higherRate = Math.max(0, Math.min(taxable1 - 37700, 125140 - 37700 - (salary1 - personalAllowance))) * 0.4;
      const additionalRate = Math.max(0, taxable1 - 125140) * 0.45;
      tax1 = basicRate + higherRate + additionalRate;
    }

    // Job 2 uses BR tax code (20% on all income)
    const tax2 = salary2 * 0.2;

    // NI calculations
    const niThreshold = 12570;
    const niUpperThreshold = 50270;
    const niRate = 0.08;
    const niUpperRate = 0.02;

    // NI for Job 1
    let ni1 = 0;
    const niIncome1 = Math.max(0, salary1 - niThreshold);
    if (niIncome1 > 0) {
      const upper1 = Math.min(niIncome1, niUpperThreshold - niThreshold);
      ni1 = upper1 * niRate;
      if (salary1 > niUpperThreshold) {
        ni1 += (salary1 - niUpperThreshold) * niUpperRate;
      }
    }

    // NI for Job 2 (calculated separately, but both jobs count towards thresholds)
    let ni2 = 0;
    const combinedIncome = salary1 + salary2;
    const niIncome2 = Math.max(0, salary2 - Math.max(0, niThreshold - salary1));
    if (niIncome2 > 0 && combinedIncome > niThreshold) {
      // Job 2 NI is calculated on its portion above threshold
      const job2NiThreshold = Math.max(0, niThreshold - salary1);
      const job2NiIncome = Math.max(0, salary2 - job2NiThreshold);
      if (job2NiIncome > 0) {
        const upper2 = Math.min(job2NiIncome, Math.max(0, niUpperThreshold - salary1));
        ni2 = upper2 * niRate;
        if (combinedIncome > niUpperThreshold && salary1 < niUpperThreshold) {
          ni2 += (combinedIncome - niUpperThreshold) * niUpperRate;
        } else if (salary1 >= niUpperThreshold) {
          ni2 = job2NiIncome * niUpperRate;
        }
      }
    }

    const takeHome1 = salary1 - tax1 - ni1;
    const takeHome2 = salary2 - tax2 - ni2;
    const totalTax = tax1 + tax2;
    const totalNI = ni1 + ni2;
    const totalTakeHome = takeHome1 + takeHome2;
    const effectiveTaxRate = (totalTax / totalSalary) * 100;

    return {
      job1: { salary: salary1, tax: tax1, ni: ni1, takeHome: takeHome1 },
      job2: { salary: salary2, tax: tax2, ni: ni2, takeHome: takeHome2 },
      total: { salary: totalSalary, tax: totalTax, ni: totalNI, takeHome: totalTakeHome },
      effectiveTaxRate,
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
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              Two Jobs Calculator
            </h1>
            <p className="text-xl text-gray-600">Calculate your tax and take-home pay when working two jobs</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-800">
                <strong className="font-bold text-blue-900">Note:</strong> When working two jobs, your first job usually uses your personal allowance (tax code 1257L). 
                Your second job is typically taxed at 20% on all earnings (tax code BR). National Insurance is calculated separately for each job, 
                but both count towards the annual thresholds.
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job 1 Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Job 1 (Primary)</h2>
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Annual Salary</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.job1Salary}
                    onChange={(e) => setFormData({ ...formData, job1Salary: formatNumber(e.target.value) })}
                    placeholder="30,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Uses personal allowance (1257L)</p>
              </div>
            </div>

            {/* Job 2 Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Job 2 (Secondary)</h2>
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Annual Salary</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.job2Salary}
                    onChange={(e) => setFormData({ ...formData, job2Salary: formatNumber(e.target.value) })}
                    placeholder="20,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Taxed at 20% (BR code)</p>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>
                    
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Total Take-Home Pay</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.total.takeHome)}</div>
                      <div className="text-sm opacity-90 mt-2">per year from both jobs</div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-xs text-gray-600 mb-2">Job 1 Take-Home</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.job1.takeHome)}</div>
                        <div className="text-xs text-gray-500 mt-1">Tax: {formatCurrency(results.job1.tax)} | NI: {formatCurrency(results.job1.ni)}</div>
                      </div>
                      
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="text-xs text-gray-600 mb-2">Job 2 Take-Home</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.job2.takeHome)}</div>
                        <div className="text-xs text-gray-500 mt-1">Tax: {formatCurrency(results.job2.tax)} | NI: {formatCurrency(results.job2.ni)}</div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gray-100">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Tax</span>
                        <span className="font-semibold text-red-600">{formatCurrency(results.total.tax)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total NI</span>
                        <span className="font-semibold text-orange-600">{formatCurrency(results.total.ni)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Effective Tax Rate</span>
                        <span className="font-semibold text-gray-900">{results.effectiveTaxRate.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-8 text-center">
                    <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Both Salaries</h3>
                    <p className="text-gray-600">See your combined take-home pay</p>
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
