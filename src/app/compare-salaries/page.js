"use client";
import React, { useState, useMemo } from 'react';
import { Scale, TrendingUp, TrendingDown, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

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
      'plan1': 26900,
      'plan2': 29385,
      'plan4': 33795,
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
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Compare Salaries" }]} fullWidth>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [{
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I compare two salaries after tax in the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To compare salaries fairly, calculate the take-home pay for each after income tax, National Insurance, student loans, and pension contributions. A £5,000 gross salary difference may only be £2,900-£3,400 after deductions, depending on which tax bands the salaries fall in."
                }
              },
              {
                "@type": "Question",
                "name": "Does living in Scotland affect my take-home pay compared to England?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Scotland has five income tax bands (19%-47%) compared to England's three (20%-45%). On a £40,000 salary, you would take home roughly the same in both countries, but above £43,663 Scottish taxpayers pay more due to the 42% higher rate kicking in earlier than England's 40% rate at £50,271."
                }
              },
              {
                "@type": "Question",
                "name": "How do pension contributions affect a salary comparison?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pension contributions reduce your taxable income, so they lower your income tax. A 5% pension contribution on a £40,000 salary saves £400 in tax for a basic rate taxpayer and £800 for a higher rate taxpayer, making the net cost of pension saving less than the gross amount."
                }
              },
              {
                "@type": "Question",
                "name": "How do student loan repayments affect my salary?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Student loan repayments are 9% of earnings above the threshold (Plan 1: £26,065, Plan 2: £28,470, Plan 4: £32,745, Plan 5: £25,000). Postgraduate loans are 6% above £21,000. On a £35,000 salary with Plan 2, you repay £588 per year, reducing monthly take-home pay by about £49."
                }
              },
              {
                "@type": "Question",
                "name": "Is a £5,000 pay rise worth changing jobs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A £5,000 gross pay rise typically adds £2,900-£3,400 to your annual take-home pay after tax and NI, depending on your current salary. At the basic rate, you keep about 68% of the increase. At the higher rate, you keep about 58%. Use our calculator to compare the exact take-home figures for both salaries."
                }
              },
              {
                "@type": "Question",
                "name": "How does the £100,000 tax trap affect salary comparisons?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If one salary is below £100,000 and the other is above, the comparison becomes more complex. Above £100,000, your personal allowance is reduced by £1 for every £2 earned, creating an effective 60% tax rate between £100,000 and £125,140. A £110,000 salary only gives you about £4,500 more take-home pay than a £100,000 salary."
                }
              },
              {
                "@type": "Question",
                "name": "Should I factor in benefits when comparing two salary offers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Benefits like employer pension contributions, private healthcare, company car, and annual bonus can add 10-30% to the total value of a compensation package. A £45,000 salary with a 10% employer pension match and private healthcare could be worth more than a £50,000 salary with only the minimum 3% pension contribution."
                }
              }
            ]
          },
          {
            "@type": "WebApplication",
            "name": "Compare Salaries Calculator UK",
            "url": "https://www.salarytakehome.co.uk/compare-salaries",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "GBP"
            },
            "description": "Free UK salary comparison calculator. Compare two salary offers side-by-side to see which gives you more take-home pay."
          }]
        }) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="relative mx-auto px-8 py-10">
          <div className="hidden xl:block absolute right-8 top-8 w-[160px]">
            <div className="sticky top-8">
              <AdUnit slot="4603525459" hideOnMobile />
              <AdUnit slot="9534353704" hideOnMobile />
            </div>
          </div>
          <div className="flex-1 xl:pr-[192px]">
            <AdUnit slot="1586479879" hideOnMobile />
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                Compare Two Salaries
            </h1>
            <p className="text-xl text-gray-600">Compare two salary offers to see which gives you more take-home pay after tax, National Insurance, and student loan deductions</p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: April 2026 · Reflects 2026/27 tax year
              </p>
          </div>

          {/* Input Card */}
          <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6 mb-6 lg:scale-[0.92] lg:origin-top 2xl:scale-100">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-3 mb-6">
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
                <option value="plan1">Plan 1 (£26,900 threshold)</option>
                <option value="plan2">Plan 2 (£29,385 threshold)</option>
                <option value="plan4">Plan 4 - Scotland (£33,795 threshold)</option>
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
              <div className="grid lg:grid-cols-2 gap-6">
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
                    <strong>Note:</strong> Calculations are estimates based on standard 2026/27 tax rates. Actual amounts may vary based on your tax code and other deductions.
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
        </div>

        {/* Information Cards */}
        <div className="flex gap-6 mx-auto px-8 mt-10">
          <div className="flex-1 xl:pr-[192px]">
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
                    The comparison uses the same student loan plan for both salaries to give you an accurate like-for-like comparison. For the latest tax band information, visit <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Income Tax Rates</a>.
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
                  <div className="grid lg:grid-cols-2 gap-6">
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
                  <p className="text-gray-700 text-base leading-relaxed mt-6">
                    Understanding your <a href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">effective tax rate at different salary levels</a> is key to making good career decisions. If you're negotiating a raise, our <a href="/blog/pay-rise-negotiation-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">pay rise negotiation guide</a> can help you understand what a salary increase is really worth. For details on <a href="https://www.gov.uk/national-insurance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">National Insurance contributions</a>, visit GOV.UK.
                  </p>
                </div>
              </div>

              {/* UK Tax Brackets Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-indigo-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Scale className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">UK Tax Brackets &amp; Your Salary Comparison</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Understanding which tax bracket each salary falls into is essential for comparing offers. Here is what you keep from every extra pound earned in each band for 2026/27:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Salary Band</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">Tax Rate</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">NI Rate</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">You Keep Per £1</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">Up to £12,570</td>
                          <td className="py-3 px-4 text-right text-gray-900">0%</td>
                          <td className="py-3 px-4 text-right text-gray-900">0%</td>
                          <td className="py-3 px-4 text-right text-green-600 font-bold">£1.00</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">£12,571 – £50,270</td>
                          <td className="py-3 px-4 text-right text-gray-900">20%</td>
                          <td className="py-3 px-4 text-right text-gray-900">8%</td>
                          <td className="py-3 px-4 text-right text-green-600 font-bold">£0.72</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">£50,271 – £125,140</td>
                          <td className="py-3 px-4 text-right text-gray-900">40%</td>
                          <td className="py-3 px-4 text-right text-gray-900">2%</td>
                          <td className="py-3 px-4 text-right text-amber-600 font-bold">£0.58</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50 bg-red-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">£100,001 – £125,140*</td>
                          <td className="py-3 px-4 text-right text-gray-900">60%†</td>
                          <td className="py-3 px-4 text-right text-gray-900">2%</td>
                          <td className="py-3 px-4 text-right text-red-600 font-bold">£0.38</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">Over £125,140</td>
                          <td className="py-3 px-4 text-right text-gray-900">45%</td>
                          <td className="py-3 px-4 text-right text-gray-900">2%</td>
                          <td className="py-3 px-4 text-right text-amber-600 font-bold">£0.53</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">
                    *£100k–£125,140 has an effective 60% rate due to personal allowance tapering — you lose £1 of personal allowance for every £2 earned above £100,000.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Learn more about the <a href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">£100k tax trap</a> and how to <a href="/blog/how-to-compare-job-offers" className="text-blue-600 hover:text-blue-800 underline font-semibold">compare job offers beyond salary</a>.
                  </p>
                </div>
              </div>

              {/* Hidden Value of Benefits Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-teal-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">The Hidden Value of Benefits</h3>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Salary is only part of the picture. Benefits can add 10-30% to the total value of a compensation package. Here is what common workplace benefits are typically worth:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Benefit</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-900">Typical Annual Value</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">How to Compare</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">Employer pension (5% match)</td>
                          <td className="py-3 px-4 text-right text-gray-900">£2,000–£3,000</td>
                          <td className="py-3 px-4 text-gray-600">Check % match above minimum 3%</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">Private healthcare</td>
                          <td className="py-3 px-4 text-right text-gray-900">£500–£2,000</td>
                          <td className="py-3 px-4 text-gray-600">Compare excess and coverage</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">Annual bonus</td>
                          <td className="py-3 px-4 text-right text-gray-900">5–20% of salary</td>
                          <td className="py-3 px-4 text-gray-600">Factor in likelihood of payout</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">Extra holidays (5 days)</td>
                          <td className="py-3 px-4 text-right text-gray-900">£800–£1,500</td>
                          <td className="py-3 px-4 text-gray-600">Calculate at your daily rate</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700 font-medium">Company car/allowance</td>
                          <td className="py-3 px-4 text-right text-gray-900">£3,000–£6,000</td>
                          <td className="py-3 px-4 text-gray-600">Consider BIK tax implications</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Read our guide on <a href="/blog/how-to-compare-job-offers" className="text-blue-600 hover:text-blue-800 underline font-semibold">how to compare job offers</a> for a step-by-step approach, or learn how <a href="/blog/salary-sacrifice-complete-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">salary sacrifice</a> can maximise the tax efficiency of your benefits.
                  </p>
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
                      <p className="text-gray-700 text-base leading-relaxed">If a salary increase pushes you into a higher tax bracket, you'll pay more tax and National Insurance on the additional income. Combined with <a href="/blog/student-loan-repayment-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">student loan repayments</a>, the net increase may be smaller than expected. Read about the <a href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">£100k tax trap</a> if your salaries are near that threshold.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Should I always choose the higher gross salary?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">Not necessarily. Consider other factors like <a href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">pension contributions</a>, benefits, commute costs, work-life balance, and career progression opportunities. A slightly lower salary with better benefits — especially <a href="/blog/salary-sacrifice-complete-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">salary sacrifice arrangements</a> — might be worth more overall.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Does this include pension contributions?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">No, this comparison focuses on tax, National Insurance, and student loan deductions. Pension contributions vary by employer and employee choices, so it's best to compare those separately.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">How accurate is this comparison?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">This calculator uses standard 2026/27 UK tax rates and provides accurate estimates for most employees. Actual deductions may vary based on your specific tax code, pension scheme, and other personal circumstances.</p>
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
                    This salary comparison tool provides estimates for informational purposes only. Calculations are based on standard UK tax rates and assumptions for the 2026/27 tax year. Actual take-home pay may vary depending on your specific tax code, pension contributions, benefits-in-kind, and other personal circumstances. This tool should not be used as a substitute for professional financial advice. Always verify salary details with your employer and consult HMRC or a qualified tax advisor for personalized guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Reading */}
        <div className="mx-auto px-8 mt-6 mb-8 xl:pr-[192px]">
          <div className="max-w-6xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Related Reading</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <a href="/blog/pay-rise-negotiation-guide" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How to Negotiate a Pay Rise in 2026</p>
              </a>
              <a href="/blog/100k-tax-trap" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">The £100k Tax Trap Explained</p>
              </a>
              <a href="/blog/how-to-compare-job-offers" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Salary Guide</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How to Compare Job Offers: Total Compensation</p>
              </a>
            </div>
          </div>
        </div>
      </div>

    </LayoutWrapper>
  );
}
