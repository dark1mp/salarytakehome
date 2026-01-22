"use client";
import React, { useState, useMemo } from 'react';
import { Clock, TrendingUp, Info, HelpCircle, Lightbulb } from 'lucide-react';
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 scale-[0.8] md:scale-100 origin-top-left">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                Hourly Wage Calculator
              </h1>
              <p className="text-base text-gray-700">
                Use this hourly wage calculator to quickly work out your hourly rate from an annual salary, weekly pay, or monthly income.
              </p>
              <p className="text-base text-gray-700 mt-3">
                Whether you're comparing job offers, checking your pay against the UK minimum wage, or budgeting your earnings, this tool helps you calculate your hourly pay accurately based on your working hours.
              </p>
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

        {/* UK Minimum Wage Information Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-6">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Info className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">UK Minimum Wage Information</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  As of January 2026 in the United Kingdom, the National Minimum Wage (NMW) and National Living Wage (NLW) rates that employers must pay (set by the UK government and usually updated every April) are as follows:
                </p>

                <h4 className="font-bold text-gray-900 text-lg mb-4">Current statutory minimum hourly rates (effective from 1 April 2026):</h4>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">Age / Status</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">Hourly rate (from 1 Apr 2026)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">21 and over (National Living Wage)</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">£12.71</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">18-20</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">£10.85</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">16-17</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">£8.00</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Apprentice†</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">£8.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  †Apprentice rate applies if under 19 or in the first year of their apprenticeship. Older apprentices after first year get the age-based rate.
                </p>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  These are legal minimum pay rates; most workers must be paid at least these amounts per hour.
                </p>

                <h4 className="font-bold text-gray-900 text-lg mb-4">What this means in practice</h4>

                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2">If you're 21 or older, the legal minimum hourly wage you must be paid is £12.71.</li>
                  <li className="pl-2">For younger workers and apprentices, the rates are lower to reflect different labour market considerations.</li>
                </ul>

                <h4 className="font-bold text-gray-900 text-lg mb-4">Note</h4>

                <p className="text-gray-700 text-base leading-relaxed">
                  There's also something called the "Real Living Wage" (set independently by the <a href="https://www.livingwage.org.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Living Wage Foundation</a>) which is higher than the statutory rates — for example, around £13.45 nationwide and £14.80 in London — but this is voluntary for employers to pay.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* Why knowing your hourly wage matters Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Why knowing your hourly wage matters</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">Knowing your hourly pay can help you:</p>

                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2">Compare job offers fairly</li>
                  <li className="pl-2">Check if you are paid minimum wage</li>
                  <li className="pl-2">Understand the value of overtime</li>
                  <li className="pl-2">Budget more accurately</li>
                  <li className="pl-2">Negotiate pay or freelance rates</li>
                  <li className="pl-2">Decide whether extra hours are worth it</li>
                </ul>

                <p className="text-gray-700 text-base leading-relaxed">
                  Even salaried workers benefit from knowing their real hourly rate.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* Hourly wage FAQs Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Hourly wage FAQs</h3>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How do I calculate my hourly wage in the UK?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Divide your annual salary by 52 weeks, then divide by your weekly working hours. Alternatively, use this hourly wage calculator to get an instant result.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does this hourly wage calculator include tax?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      No. This calculator shows gross hourly pay before tax and National Insurance. For net pay, use a <a href="/" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</a>.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How many hours is full-time work in the UK?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Full-time work in the UK is typically 35 to 40 hours per week, with 37.5 hours being very common.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Is holiday pay included in hourly wages?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      For hourly workers, holiday pay is usually calculated based on average earnings. It may be paid when you take leave or added to your hourly rate, depending on your contract.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Can unpaid overtime reduce my hourly wage?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes. If you regularly work unpaid overtime, your effective hourly rate may fall below what you expect — and in some cases below minimum wage.
                    </p>
                  </div>
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

      <footer className="mt-12 border-t pt-8 pb-6 text-center text-gray-500 text-sm">
        <div>© 2025 SalaryTakeHome.co.uk. All rights reserved.</div>
        <div className="mt-2">
          Privacy: This site does not collect or store any personal data. All calculations are done anonymously in your browser.
        </div>
      </footer>
    </LayoutWrapper>
  );
}
