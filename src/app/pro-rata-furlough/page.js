"use client";
import React, { useState, useMemo } from 'react';
import { Calculator, Info, Lightbulb, HelpCircle } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function ProRata() {
  const [formData, setFormData] = useState({
    fullTimeSalary: '',
    hoursPerWeek: '37.5',
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const results = useMemo(() => {
    const fullSalary = parseFloat(formData.fullTimeSalary.replace(/,/g, '')) || 0;
    const hoursPerWeek = parseFloat(formData.hoursPerWeek) || 37.5;

    if (fullSalary <= 0 || hoursPerWeek <= 0) return null;

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
      ratio: (ratio * 100).toFixed(1),
      salary: proRataSalary,
      tax,
      ni,
      takeHome,
      hoursPerWeek,
      fullTimeHours,
      monthly: proRataSalary / 12,
      weekly: proRataSalary / 52,
      daily: proRataSalary / 260,
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
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                Pro-Rata Salary Calculator
            </h1>
            <p className="text-base text-gray-700">
              Calculate your pro-rata salary when working part-time hours. Enter the full-time equivalent salary and your working hours to see your actual annual salary.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-5">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Full-Time Equivalent (FTE) Salary</label>
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
                <p className="text-xs text-gray-500 mt-2">The salary you would earn if working full-time (37.5 hours/week)</p>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Your Working Hours Per Week</label>
                <input
                  type="number"
                  value={formData.hoursPerWeek}
                  onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                  min="1"
                  max="60"
                  step="0.5"
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                />
                <p className="text-xs text-gray-500 mt-2">Standard full-time is 37.5 hours per week</p>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Pro-Rata Salary</h3>

                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Annual Pro-Rata Salary</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.salary)}</div>
                      <div className="text-sm opacity-90 mt-2">per year</div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-xs text-gray-600 mb-1">Pro-Rata Percentage</div>
                        <div className="text-xl font-bold text-gray-900">{results.ratio}%</div>
                        <div className="text-xs text-gray-500 mt-1">{results.hoursPerWeek}h/week vs {results.fullTimeHours}h/week full-time</div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <div className="text-xs text-gray-600 mb-1">Monthly</div>
                          <div className="text-sm font-bold text-gray-900">{formatCurrency(results.monthly)}</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <div className="text-xs text-gray-600 mb-1">Weekly</div>
                          <div className="text-sm font-bold text-gray-900">{formatCurrency(results.weekly)}</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <div className="text-xs text-gray-600 mb-1">Daily</div>
                          <div className="text-sm font-bold text-gray-900">{formatCurrency(results.daily)}</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <span className="text-gray-700 font-medium">Estimated Take-Home Pay</span>
                        <span className="font-bold text-lg text-green-600">{formatCurrency(results.takeHome)}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Note:</strong> Take-home pay is an estimate based on standard tax rates. Actual amounts may vary based on your tax code, pension contributions, and other deductions.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Calculate your pro-rata salary based on your working hours</p>
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

        {/* Understanding Pro-Rata Salary Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Info className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Understanding Pro-Rata Salary</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Pro-rata</strong> is a Latin term meaning "in proportion." When applied to salary, it refers to the proportional payment you receive based on the hours you work compared to a full-time equivalent position.
                  </p>
                  <p>
                    For example, if a full-time position offers £40,000 per year for 37.5 hours per week, and you work 30 hours per week, your pro-rata salary would be calculated as:
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="font-mono text-center text-lg">
                      (30 ÷ 37.5) × £40,000 = <strong>£32,000</strong> per year
                    </p>
                  </div>
                  <p>
                    Pro-rata calculations are commonly used for part-time workers, job sharers, and those transitioning between full-time and part-time roles. Understanding your pro-rata salary helps you compare job offers accurately and understand your true earning potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">{/* Ad Space */}</div>
          </aside>
        </div>

        {/* Why Pro-Rata Matters Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Why Knowing Your Pro-Rata Salary Matters</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Part-Time Workers</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Compare job offers accurately by looking at FTE salaries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Understand your hourly rate compared to full-time colleagues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Calculate holiday entitlement and other benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Plan for changes in working hours</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Employers</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Ensure fair and consistent pay across different contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Calculate accurate pension contributions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Budget for part-time positions accurately</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Comply with part-time workers' regulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">{/* Ad Space */}</div>
          </aside>
        </div>

        {/* FAQ Section */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Pro-Rata Salary FAQs</h3>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What does pro-rata salary mean?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Pro-rata salary means your pay is proportional to the hours you work compared to a full-time equivalent. If a full-time role pays £40,000 for 37.5 hours per week and you work 30 hours, your pro-rata salary would be £32,000 (30/37.5 × £40,000).
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How is pro-rata salary calculated?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Pro-rata salary is calculated using this formula: (Your working hours ÷ Full-time hours) × Full-time salary. For example, working 22.5 hours when full-time is 37.5 hours at a £30,000 salary: (22.5 ÷ 37.5) × £30,000 = £18,000 pro-rata salary.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What is considered full-time hours in the UK?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      In the UK, full-time hours are typically 35-40 hours per week, with 37.5 hours being the most common standard. However, this can vary by industry and employer. Some sectors consider 35 hours full-time, while others may use 40 hours.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Do pro-rata workers get the same benefits?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Part-time workers have the legal right to be treated no less favourably than full-time colleagues. Benefits like holiday entitlement, sick pay, and pension contributions are usually calculated on a pro-rata basis, meaning you receive a proportional amount.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How is holiday entitlement calculated for part-time workers?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Holiday entitlement is calculated pro-rata based on your working hours. If full-time workers get 28 days and you work 3 days a week (vs 5), you'd receive 16.8 days (28 × 3/5). This is often rounded up to 17 days.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does pro-rata affect my pension contributions?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, pension contributions are typically based on your actual pro-rata salary, not the full-time equivalent. Both your contributions and your employer's contributions will be calculated on your reduced salary.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Can I negotiate a higher pro-rata salary?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      You can negotiate the full-time equivalent salary that your pro-rata is based on. When job hunting, compare the FTE salary to similar full-time roles to ensure you're being paid fairly. Your pro-rata percentage should match your working hours exactly.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How does pro-rata work for term-time only contracts?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Term-time contracts work differently - your annual salary is spread across 12 months but you only work during term time. The calculation includes weeks worked, not just hours per week. For example, working 39 weeks instead of 52 affects your pro-rata calculation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">{/* Ad Space */}</div>
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
