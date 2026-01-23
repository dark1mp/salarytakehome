"use client";
import React, { useState, useMemo } from 'react';
import { Scale, TrendingUp, TrendingDown, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function CompareSalaries() {
  const [formData, setFormData] = useState({
    salary1: '',
    salary2: '',
    studentLoan: 'none',
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const calculateStudentLoan = (annual, plan) => {
    if (plan === 'none') return 0;

    const thresholds = {
      'plan1': 24990,
      'plan2': 27295,
      'plan4': 31395,
      'plan5': 25000,
      'postgrad': 21000,
    };

    const rates = {
      'plan1': 0.09,
      'plan2': 0.09,
      'plan4': 0.09,
      'plan5': 0.09,
      'postgrad': 0.06,
    };

    const threshold = thresholds[plan] || 0;
    const rate = rates[plan] || 0;

    return Math.max(0, annual - threshold) * rate;
  };

  const results = useMemo(() => {
    const sal1 = parseFloat(formData.salary1.replace(/,/g, '')) || 0;
    const sal2 = parseFloat(formData.salary2.replace(/,/g, '')) || 0;

    if (sal1 <= 0 || sal2 <= 0) return null;

    // Calculate tax for both
    const personalAllowance = 12570;

    const calcBreakdown = (annual, studentLoanPlan) => {
      // Income Tax
      const taxable = Math.max(0, annual - personalAllowance);
      const basicRate = Math.min(taxable, 37700) * 0.2;
      const higherRate = Math.max(0, Math.min(taxable - 37700, 87440)) * 0.4;
      const additionalRate = Math.max(0, taxable - 125140) * 0.45;
      const tax = basicRate + higherRate + additionalRate;

      // National Insurance
      const niThreshold = 12570;
      const niIncome = Math.max(0, annual - niThreshold);
      const niBasic = Math.min(niIncome, 50270 - niThreshold) * 0.08;
      const niAdditional = Math.max(0, niIncome - (50270 - niThreshold)) * 0.02;
      const ni = niBasic + niAdditional;

      // Student Loan
      const studentLoan = calculateStudentLoan(annual, studentLoanPlan);

      const takeHome = annual - tax - ni - studentLoan;

      return {
        gross: annual,
        tax,
        ni,
        studentLoan,
        takeHome
      };
    };

    const result1 = calcBreakdown(sal1, formData.studentLoan);
    const result2 = calcBreakdown(sal2, formData.studentLoan);

    const difference = result2.takeHome - result1.takeHome;
    const differencePercent = ((result2.takeHome / result1.takeHome) - 1) * 100;

    return {
      salary1: result1,
      salary2: result2,
      difference,
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
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                Compare Two Salaries
            </h1>
            <p className="text-xl text-gray-600">Compare two salary offers to see which gives you more take-home pay after tax, National Insurance, and student loan deductions</p>
          </div>

          {/* Input Card */}
          <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Salary 1 (Annual)</label>
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

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Salary 2 (Annual)</label>
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

            <div className="pt-6 border-t border-gray-200">
              <label className="block text-sm font-bold text-gray-700 mb-3">Student Loan Plan</label>
              <select
                value={formData.studentLoan}
                onChange={(e) => setFormData({ ...formData, studentLoan: e.target.value })}
                className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200"
              >
                <option value="none">No Student Loan</option>
                <option value="plan1">Plan 1 (£24,990 threshold)</option>
                <option value="plan2">Plan 2 (£27,295 threshold)</option>
                <option value="plan4">Plan 4 - Scotland (£31,395 threshold)</option>
                <option value="plan5">Plan 5 - Post-2023 (£25,000 threshold)</option>
                <option value="postgrad">Postgraduate Loan (£21,000 threshold)</option>
              </select>
              <p className="text-xs text-gray-500 mt-2">Select your student loan plan (applies to both salaries)</p>
            </div>
          </div>

          {/* Results */}
          {results ? (
            <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison Results</h3>

              {/* Difference Banner */}
              <div className={`rounded-2xl p-6 text-white mb-8 shadow-medium ${
                results.difference > 0 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-blue-500 to-indigo-600'
              }`}>
                <div className="text-center">
                  <div className="text-sm opacity-90 mb-2">Annual Take-Home Difference</div>
                  <div className="text-5xl font-bold mb-3">{formatCurrency(Math.abs(results.difference))}</div>
                  <div className="flex items-center justify-center gap-2">
                    {results.difference > 0 ? (
                      <>
                        <TrendingUp className="w-6 h-6" />
                        <span className="text-lg opacity-90">Salary 2 is better by {Math.abs(results.differencePercent).toFixed(1)}%</span>
                      </>
                    ) : (
                      <>
                        <TrendingDown className="w-6 h-6" />
                        <span className="text-lg opacity-90">Salary 1 is better by {Math.abs(results.differencePercent).toFixed(1)}%</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Side by Side Comparison */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Salary 1 */}
                <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Salary 1</h4>
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Annual Take-Home</div>
                      <div className="text-3xl font-bold text-green-600">{formatCurrency(results.salary1.takeHome)}</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-700 font-medium">Gross Salary</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.salary1.gross)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-blue-200">
                      <span className="text-gray-700">Income Tax</span>
                      <span className="font-semibold text-red-600">-{formatCurrency(results.salary1.tax)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-blue-200">
                      <span className="text-gray-700">National Insurance</span>
                      <span className="font-semibold text-red-600">-{formatCurrency(results.salary1.ni)}</span>
                    </div>
                    {results.salary1.studentLoan > 0 && (
                      <div className="flex justify-between py-2 border-t border-blue-200">
                        <span className="text-gray-700">Student Loan</span>
                        <span className="font-semibold text-red-600">-{formatCurrency(results.salary1.studentLoan)}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-3 border-t-2 border-blue-300 mt-2">
                      <span className="text-gray-900 font-bold">Take-Home Pay</span>
                      <span className="font-bold text-xl text-green-600">{formatCurrency(results.salary1.takeHome)}</span>
                    </div>
                  </div>
                </div>

                {/* Salary 2 */}
                <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Salary 2</h4>
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-1">Annual Take-Home</div>
                      <div className="text-3xl font-bold text-green-600">{formatCurrency(results.salary2.takeHome)}</div>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2">
                      <span className="text-gray-700 font-medium">Gross Salary</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(results.salary2.gross)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-green-200">
                      <span className="text-gray-700">Income Tax</span>
                      <span className="font-semibold text-red-600">-{formatCurrency(results.salary2.tax)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-t border-green-200">
                      <span className="text-gray-700">National Insurance</span>
                      <span className="font-semibold text-red-600">-{formatCurrency(results.salary2.ni)}</span>
                    </div>
                    {results.salary2.studentLoan > 0 && (
                      <div className="flex justify-between py-2 border-t border-green-200">
                        <span className="text-gray-700">Student Loan</span>
                        <span className="font-semibold text-red-600">-{formatCurrency(results.salary2.studentLoan)}</span>
                      </div>
                    )}
                    <div className="flex justify-between py-3 border-t-2 border-green-300 mt-2">
                      <span className="text-gray-900 font-bold">Take-Home Pay</span>
                      <span className="font-bold text-xl text-green-600">{formatCurrency(results.salary2.takeHome)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <strong>Note:</strong> Calculations are estimates based on standard 2025/26 tax rates. Actual amounts may vary based on your tax code and other deductions.
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-12 text-center">
              <Scale className="w-20 h-20 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter Both Salaries</h3>
              <p className="text-gray-600 text-lg">See which one gives you more take-home pay</p>
            </div>
          )}
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8 h-[600px]">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* Information Cards */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-10">
          <div className="flex-1 max-w-6xl">
            <div className="grid md:grid-cols-1 gap-6">
              {/* How This Comparison Works Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Scale className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">How This Salary Comparison Works</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    This calculator helps you compare two salary offers by calculating the actual take-home pay for each, accounting for all deductions:
                  </p>
                  <ol className="text-gray-700 text-base leading-relaxed space-y-3 mb-6 list-decimal list-outside ml-6">
                    <li className="pl-2">Applies UK Income Tax based on current tax bands (20%, 40%, 45%)</li>
                    <li className="pl-2">Deducts National Insurance contributions (8% basic rate, 2% above £50,270)</li>
                    <li className="pl-2">Calculates student loan repayments if applicable (9% above threshold for most plans)</li>
                    <li className="pl-2">Shows side-by-side comparison of net take-home pay</li>
                    <li className="pl-2">Displays the exact difference in pounds and percentage</li>
                  </ol>
                  <p className="text-gray-700 text-base leading-relaxed">
                    The comparison uses the same student loan plan for both salaries to give you an accurate like-for-like comparison.
                  </p>
                </div>
              </div>

              {/* Why Comparing Salaries Matters Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Why Comparing Salaries Matters</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Making Better Decisions</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>A higher gross salary doesn't always mean more take-home pay</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>Tax bands and student loans can significantly affect the difference</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>Small salary increases may push you into higher tax brackets</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Real-World Impact</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>Understand the true value of job offers and pay rises</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>Make informed career decisions based on actual earnings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-amber-500 mt-1">•</span>
                          <span>Budget accurately based on your real take-home pay</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Salary Comparison FAQs Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-emerald-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Info className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Salary Comparison FAQs</h3>
                  </div>

                  <div className="space-y-5">
                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Why might a higher salary result in less take-home pay?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">If a salary increase pushes you into a higher tax bracket, you'll pay more tax and National Insurance on the additional income. Combined with student loan repayments, the net increase may be smaller than expected.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Should I always choose the higher gross salary?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">Not necessarily. Consider other factors like pension contributions, benefits, commute costs, work-life balance, and career progression opportunities. A slightly lower salary with better benefits might be worth more overall.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Does this include pension contributions?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">No, this comparison focuses on tax, National Insurance, and student loan deductions. Pension contributions vary by employer and employee choices, so it's best to compare those separately.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">How accurate is this comparison?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">This calculator uses standard 2025/26 UK tax rates and provides accurate estimates for most employees. Actual deductions may vary based on your specific tax code, pension scheme, and other personal circumstances.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">What if I have different student loan plans for each salary?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">This calculator uses one student loan plan for both salaries to provide a fair comparison. Your student loan plan follows you between jobs, so this gives an accurate like-for-like comparison.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-purple-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Info className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Disclaimer</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    This salary comparison tool provides estimates for informational purposes only. Calculations are based on standard UK tax rates and assumptions for the 2025/26 tax year. Actual take-home pay may vary depending on your specific tax code, pension contributions, benefits-in-kind, and other personal circumstances. This tool should not be used as a substitute for professional financial advice. Always verify salary details with your employer and consult HMRC or a qualified tax advisor for personalized guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Ad Space */}
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
