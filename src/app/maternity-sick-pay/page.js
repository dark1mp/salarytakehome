"use client";
import React, { useState } from 'react';
import { Heart, AlertCircle, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function MaternitySickPay() {
  const [formData, setFormData] = useState({
    averageWeeklyEarnings: '',
    type: 'maternity', // maternity or sick
    startDate: '',
  });

  // UK Statutory Rates 2024/25
  // Statutory Maternity Pay: 90% of average weekly earnings for first 6 weeks, then £184.03/week for up to 33 weeks
  // Statutory Sick Pay: £116.75/week for up to 28 weeks
  
  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const calculatePay = () => {
    const avgWeeklyEarnings = parseFloat(formData.averageWeeklyEarnings.replace(/,/g, '')) || 0;
    if (avgWeeklyEarnings <= 0) return null;

    if (formData.type === 'maternity') {
      // 90% of earnings for first 6 weeks, then £184.03/week for remaining 33 weeks (39 weeks total)
      const firstSixWeeks = Math.min(avgWeeklyEarnings * 0.9, 184.03) * 6;
      const remainingWeeks = 184.03 * 33;
      const totalPay = firstSixWeeks + remainingWeeks;
      const weeklyAverage = totalPay / 39;
      
      return {
        type: 'Maternity',
        weeks: 39,
        firstSixWeeks: firstSixWeeks,
        remainingWeeks: remainingWeeks,
        totalPay,
        weeklyAverage,
        rate: avgWeeklyEarnings * 0.9 > 184.03 ? '90% of earnings' : '£184.03/week'
      };
    } else {
      // Statutory Sick Pay: £116.75/week for up to 28 weeks
      const weeks = 28;
      const weeklyRate = 116.75;
      const totalPay = weeklyRate * weeks;
      
      return {
        type: 'Sick',
        weeks,
        weeklyRate,
        totalPay,
        weeklyAverage: weeklyRate,
        rate: '£116.75/week'
      };
    }
  };

  const results = calculatePay();

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
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              Maternity / Sick Pay Calculator
            </h1>
            <p className="text-xl text-gray-600">Calculate your statutory maternity pay and sick pay entitlements</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-800">
                <strong className="font-bold text-yellow-900">Eligibility Note:</strong> Statutory Maternity Pay requires 26 weeks continuous employment and average weekly earnings above the lower earnings limit (£123/week for 2024/25). 
                Statutory Sick Pay requires average weekly earnings of at least £123/week. Check gov.uk for full eligibility criteria.
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Type of Pay</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setFormData({ ...formData, type: 'maternity' })}
                    className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 font-semibold ${
                      formData.type === 'maternity'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200'
                    }`}
                  >
                    Maternity Pay
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, type: 'sick' })}
                    className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 font-semibold ${
                      formData.type === 'sick'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200'
                    }`}
                  >
                    Sick Pay
                  </button>
                </div>
              </div>

              {formData.type === 'maternity' && (
                <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Average Weekly Earnings (Before Tax)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                    <input
                      type="text"
                      value={formData.averageWeeklyEarnings}
                      onChange={(e) => setFormData({ ...formData, averageWeeklyEarnings: formatNumber(e.target.value) })}
                      placeholder="500"
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Average weekly earnings in the 8 weeks before your 15th week before the baby is due</p>
                </div>
              )}

              {formData.type === 'sick' && (
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-700">
                      Statutory Sick Pay is fixed at <strong>£116.75 per week</strong> (2024/25 rate) for up to 28 weeks, 
                      provided your average weekly earnings are at least £123/week.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your {results.type} Pay</h3>
                    
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Total Entitlement</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.totalPay)}</div>
                      <div className="text-sm opacity-90 mt-2">over {results.weeks} weeks</div>
                    </div>

                    <div className="space-y-4">
                      {formData.type === 'maternity' && (
                        <>
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-700 font-medium">First 6 weeks</span>
                            <span className="font-bold text-lg text-gray-900">{formatCurrency(results.firstSixWeeks)}</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-700 font-medium">Remaining 33 weeks</span>
                            <span className="font-bold text-lg text-gray-900">{formatCurrency(results.remainingWeeks)}</span>
                          </div>
                        </>
                      )}
                      
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Weekly Rate</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.weeklyAverage)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-700 font-medium">Rate Applied</span>
                        <span className="font-bold text-lg text-blue-600">{results.rate}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Note:</strong> These are statutory rates. Your employer may offer more generous terms. 
                          Payments are subject to tax and National Insurance.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-8 text-center">
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Fill in your information to see your entitlements</p>
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
