"use client";
import React, { useState, useMemo } from 'react';
import { Calculator, TrendingDown, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function ProRataFurlough() {
  const [formData, setFormData] = useState({
    fullTimeSalary: '',
    hoursPerWeek: '37.5',
    type: 'pro-rata', // pro-rata or furlough
    furloughPercentage: '80',
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const results = useMemo(() => {
    const fullSalary = parseFloat(formData.fullTimeSalary.replace(/,/g, '')) || 0;
    const hoursPerWeek = parseFloat(formData.hoursPerWeek) || 37.5;
    const furloughPct = parseFloat(formData.furloughPercentage) || 80;

    if (fullSalary <= 0 || hoursPerWeek <= 0) return null;

    if (formData.type === 'pro-rata') {
      // Pro-rata calculation: (part-time hours / full-time hours) * full-time salary
      const fullTimeHours = 37.5; // Standard full-time hours
      const ratio = hoursPerWeek / fullTimeHours;
      const proRataSalary = fullSalary * ratio;
      
      // Estimate tax (simplified)
      const personalAllowance = 12570;
      const taxable = Math.max(0, proRataSalary - personalAllowance);
      const tax = Math.min(taxable, 37700) * 0.2 + Math.max(0, taxable - 37700) * 0.4;
      const niThreshold = 12570;
      const ni = Math.max(0, proRataSalary - niThreshold) * 0.08;
      const takeHome = proRataSalary - tax - ni;

      return {
        type: 'Pro-Rata',
        ratio: (ratio * 100).toFixed(1),
        salary: proRataSalary,
        tax,
        ni,
        takeHome,
        hoursPerWeek,
        fullTimeHours,
      };
    } else {
      // Furlough calculation (80% of salary, capped at £2,500/month during COVID scheme)
      // This is a simplified version - actual furlough schemes varied
      const furloughSalary = fullSalary * (furloughPct / 100);
      const monthlyFurlough = furloughSalary / 12;
      const cappedMonthly = Math.min(monthlyFurlough, 2500); // COVID furlough cap
      const cappedAnnual = cappedMonthly * 12;
      
      const personalAllowance = 12570;
      const taxable = Math.max(0, cappedAnnual - personalAllowance);
      const tax = Math.min(taxable, 37700) * 0.2 + Math.max(0, taxable - 37700) * 0.4;
      const niThreshold = 12570;
      const ni = Math.max(0, cappedAnnual - niThreshold) * 0.08;
      const takeHome = cappedAnnual - tax - ni;

      return {
        type: 'Furlough',
        percentage: furloughPct,
        originalSalary: fullSalary,
        furloughSalary: cappedAnnual,
        tax,
        ni,
        takeHome,
        monthly: cappedMonthly,
        capped: monthlyFurlough > 2500,
      };
    }
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 scale-[0.8] md:scale-100 origin-top-left">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                Pro-Rata / Furlough Calculator
            </h1>
            <p className="text-xl text-gray-600">Calculate pro-rata salaries and furlough payments</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-5">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Calculation Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFormData({ ...formData, type: 'pro-rata' })}
                    className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 font-semibold ${
                      formData.type === 'pro-rata'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200'
                    }`}
                  >
                    Pro-Rata
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, type: 'furlough' })}
                    className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 font-semibold ${
                      formData.type === 'furlough'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200'
                    }`}
                  >
                    Furlough
                  </button>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Full-Time Annual Salary</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.fullTimeSalary}
                    onChange={(e) => setFormData({ ...formData, fullTimeSalary: formatNumber(e.target.value) })}
                    placeholder="30,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              {formData.type === 'pro-rata' && (
                <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Hours Per Week (Part-Time)</label>
                  <input
                    type="number"
                    value={formData.hoursPerWeek}
                    onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                    min="1"
                    max="37.5"
                    step="0.5"
                    className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">Standard full-time is 37.5 hours per week</p>
                </div>
              )}

              {formData.type === 'furlough' && (
                <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Furlough Percentage (%)</label>
                  <input
                    type="number"
                    value={formData.furloughPercentage}
                    onChange={(e) => setFormData({ ...formData, furloughPercentage: e.target.value })}
                    min="0"
                    max="100"
                    step="5"
                    className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">COVID furlough was typically 80% (capped at £2,500/month)</p>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>
                    
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">{results.type} Salary</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.salary)}</div>
                      <div className="text-sm opacity-90 mt-2">per year</div>
                    </div>

                    <div className="space-y-4">
                      {results.type === 'Pro-Rata' && (
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                          <div className="text-xs text-gray-600 mb-1">Pro-Rata Percentage</div>
                          <div className="text-xl font-bold text-gray-900">{results.ratio}%</div>
                          <div className="text-xs text-gray-500 mt-1">{results.hoursPerWeek}h/week vs {results.fullTimeHours}h/week full-time</div>
                        </div>
                      )}

                      {results.type === 'Furlough' && (
                        <>
                          <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                            <div className="text-xs text-gray-600 mb-1">Monthly Furlough Pay</div>
                            <div className="text-xl font-bold text-gray-900">{formatCurrency(results.monthly)}</div>
                            {results.capped && (
                              <div className="text-xs text-orange-600 mt-1">*Capped at £2,500/month</div>
                            )}
                          </div>
                          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                            <div className="text-xs text-gray-600 mb-1">Original Salary</div>
                            <div className="text-lg font-bold text-gray-900">{formatCurrency(results.originalSalary)}</div>
                            <div className="text-xs text-gray-500 mt-1">Reduction: {formatCurrency(results.originalSalary - results.furloughSalary)}</div>
                          </div>
                        </>
                      )}

                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <span className="text-gray-700 font-medium">Take-Home Pay</span>
                        <span className="font-bold text-lg text-green-600">{formatCurrency(results.takeHome)}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Note:</strong> These are estimates. Actual calculations may vary based on your tax code, 
                          pension contributions, and other factors. Furlough schemes had specific eligibility criteria.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Calculate your pro-rata or furlough salary</p>
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
