"use client";
import React, { useState, useMemo } from 'react';
import { Clock, TrendingUp, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function HourlyWage() {
  const [formData, setFormData] = useState({
    annualSalary: '',
    hoursPerWeek: '40',
    weeksPerYear: '52',
    unpaidLeave: '0',
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const results = useMemo(() => {
    const salary = parseFloat(formData.annualSalary.replace(/,/g, '')) || 0;
    const hoursPerWeek = parseFloat(formData.hoursPerWeek) || 40;
    const weeksPerYear = parseFloat(formData.weeksPerYear) || 52;
    const unpaidWeeks = parseFloat(formData.unpaidLeave) || 0;

    if (salary <= 0 || hoursPerWeek <= 0 || weeksPerYear <= 0) return null;

    const paidWeeks = weeksPerYear - unpaidWeeks;
    const totalHours = hoursPerWeek * paidWeeks;
    const hourlyRate = salary / totalHours;
    const monthlyRate = salary / 12;
    const weeklyRate = salary / paidWeeks;
    const dailyRate = hourlyRate * 8;

    return { hourlyRate, monthlyRate, weeklyRate, dailyRate, totalHours, paidWeeks };
  }, [formData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
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
                  <Clock className="w-6 h-6 text-white" />
                </div>
                Hourly Wage Calculator
              </h1>
              <p className="text-xl text-gray-600">Convert your annual salary to hourly, daily, weekly, and monthly rates</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-5">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Annual Salary</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.annualSalary}
                    onChange={(e) => setFormData({ ...formData, annualSalary: formatNumber(e.target.value) })}
                    placeholder="50,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Hours Per Week</label>
                <input
                  type="number"
                  value={formData.hoursPerWeek}
                  onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                  min="1"
                  max="168"
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                />
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Weeks Worked Per Year</label>
                <select
                  value={formData.weeksPerYear}
                  onChange={(e) => setFormData({ ...formData, weeksPerYear: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200"
                >
                  <option value="52">52 weeks (full year)</option>
                  <option value="48">48 weeks (4 weeks holiday)</option>
                  <option value="46">46 weeks (6 weeks holiday)</option>
                  <option value="39">39 weeks (term time only)</option>
                </select>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Unpaid Leave (weeks)</label>
                <input
                  type="number"
                  value={formData.unpaidLeave}
                  onChange={(e) => setFormData({ ...formData, unpaidLeave: e.target.value })}
                  min="0"
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                />
                <p className="text-xs text-gray-500 mt-2">Enter weeks of unpaid leave if applicable</p>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Hourly Rates</h3>
                    
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white mb-5 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Hourly Rate</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.hourlyRate)}</div>
                      <div className="text-sm opacity-90 mt-2">per hour</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-xs text-gray-600 mb-1">Daily (8h)</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.dailyRate)}</div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="text-xs text-gray-600 mb-1">Weekly</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.weeklyRate)}</div>
                      </div>
                      <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                        <div className="text-xs text-gray-600 mb-1">Monthly</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.monthlyRate)}</div>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                        <div className="text-xs text-gray-600 mb-1">Annual</div>
                        <div className="text-xl font-bold text-gray-900">£{formData.annualSalary || '0'}</div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gray-100">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total Hours Per Year</span>
                        <span className="font-semibold text-gray-900">{results.totalHours.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Paid Weeks</span>
                        <span className="font-semibold text-gray-900">{results.paidWeeks}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Fill in your salary and hours to see your hourly rate</p>
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
