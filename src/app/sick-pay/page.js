"use client";
import React, { useState, useMemo } from 'react';
import { HeartPulse, AlertCircle, Info, Lightbulb, HelpCircle } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

export default function SickPay() {
  const [formData, setFormData] = useState({
    averageWeeklyEarnings: '',
    numberOfDays: '7',
    qualifyingDaysPerWeek: '5', // Days normally worked per week
    useNewRules: true, // Default: 2026/27 rules (in effect from 6 April 2026). Toggle to view historical 2025/26 rules.
  });

  // Helper function to format number inputs with commas
  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Helper function to format currency for display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount || 0);
  };

  // Calculate SSP based on current or new rules
  const results = useMemo(() => {
    const avgEarnings = parseFloat(formData.averageWeeklyEarnings.replace(/,/g, '')) || 0;
    const days = parseInt(formData.numberOfDays) || 0;
    const qualifyingDays = parseInt(formData.qualifyingDaysPerWeek) || 5;

    if (avgEarnings <= 0 || days <= 0 || qualifyingDays <= 0) return null;

    // Constants
    const MAX_WEEKS = 28;
    const MAX_DAYS = MAX_WEEKS * 7;

    if (formData.useNewRules) {
      // New rules from April 2026
      const SSP_FLAT_RATE_2026 = 123.25;

      // No earnings limit - all employees qualify
      const isEligible = true;

      // Calculate rate: 80% of earnings or flat rate, whichever is lower
      const weeklyRate80Percent = avgEarnings * 0.80;
      const weeklyRate = Math.min(weeklyRate80Percent, SSP_FLAT_RATE_2026);
      const dailyRate = weeklyRate / qualifyingDays;

      // All days qualify (no waiting days)
      const cappedDays = Math.min(days, MAX_DAYS);
      const actualQualifyingDays = cappedDays;
      const waitingDays = 0;

      // Calculate total
      const totalSSP = dailyRate * actualQualifyingDays;
      const weeks = actualQualifyingDays / qualifyingDays;

      return {
        isEligible,
        totalSSP,
        weeklyRate,
        dailyRate,
        qualifyingDays: actualQualifyingDays,
        waitingDays,
        weeks: weeks.toFixed(1),
        ruleType: 'new',
        rateExplanation: weeklyRate === SSP_FLAT_RATE_2026
          ? `Capped at statutory maximum of £${SSP_FLAT_RATE_2026}/week`
          : `80% of your average weekly earnings (£${weeklyRate.toFixed(2)}/week)`,
      };
    } else {
      // Current rules 2025/26
      const SSP_RATE_2025 = 118.75;
      const LOWER_EARNINGS_LIMIT = 125.00;
      const WAITING_DAYS = 3;

      // Check eligibility
      const isEligible = avgEarnings >= LOWER_EARNINGS_LIMIT;

      if (!isEligible) {
        return {
          isEligible: false,
          avgEarnings,
          requiredEarnings: LOWER_EARNINGS_LIMIT,
          ruleType: 'current',
        };
      }

      // Calculate qualifying days (after waiting period)
      const cappedDays = Math.min(days, MAX_DAYS);
      const actualQualifyingDays = Math.max(0, cappedDays - WAITING_DAYS);
      const waitingDays = Math.min(cappedDays, WAITING_DAYS);

      // Calculate total
      const weeklyRate = SSP_RATE_2025;
      const dailyRate = weeklyRate / qualifyingDays;
      const totalSSP = dailyRate * actualQualifyingDays;
      const weeks = actualQualifyingDays / qualifyingDays;

      return {
        isEligible: true,
        totalSSP,
        weeklyRate,
        dailyRate,
        qualifyingDays: actualQualifyingDays,
        waitingDays,
        weeks: weeks.toFixed(1),
        ruleType: 'current',
        rateExplanation: `Statutory rate of £${SSP_RATE_2025}/week (2025/26)`,
      };
    }
  }, [formData]);

  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Sick Pay Calculator" }]} fullWidth>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [{
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much is SSP per week in 2026/27?",
                  "acceptedAnswer": { "@type": "Answer", "text": "SSP is £123.25 per week in 2026/27, or 80% of your average weekly earnings if that is lower. This works out to a daily rate of £24.65 based on a 5-day working week. In the previous tax year (2025/26), SSP was a flat £118.75 per week. SSP is paid by your employer for up to 28 weeks." }
                },
                {
                  "@type": "Question",
                  "name": "How long can I receive Statutory Sick Pay?",
                  "acceptedAnswer": { "@type": "Answer", "text": "You can receive SSP for up to 28 weeks (approximately 6.5 months). From 6 April 2026, SSP is payable from day one of sickness — the 3 waiting days have been removed. If you are still unwell after 28 weeks, you may be able to claim Employment and Support Allowance (ESA) instead." }
                },
                {
                  "@type": "Question",
                  "name": "Do I pay tax on Statutory Sick Pay?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, SSP is treated as earnings and is subject to income tax and National Insurance contributions, just like your regular wages. Your employer deducts tax through PAYE as normal. However, because SSP is relatively low at £123.25 per week, many recipients stay within their personal allowance." }
                },
                {
                  "@type": "Question",
                  "name": "When does Statutory Sick Pay start?",
                  "acceptedAnswer": { "@type": "Answer", "text": "From 6 April 2026, SSP starts from the very first qualifying day of your sickness absence — the old 3 waiting days have been abolished. Under the previous rules (up to April 2026), the first 3 days were unpaid waiting days. Qualifying days are the days you would normally work. Many employers also offer enhanced sick pay schemes paying more than SSP." }
                },
                {
                  "@type": "Question",
                  "name": "Can my employer pay more than Statutory Sick Pay?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, many employers offer contractual or occupational sick pay schemes that pay more than SSP. Some pay full salary for a set period, then reduced pay. Your employment contract or staff handbook will detail your employer's sick pay policy. Contractual sick pay must be at least equal to SSP." }
                },
                {
                  "@type": "Question",
                  "name": "What happens to my sick pay if I earn below the Lower Earnings Limit?",
                  "acceptedAnswer": { "@type": "Answer", "text": "From 6 April 2026, there is no Lower Earnings Limit for SSP — all employees qualify regardless of how much they earn. Lower earners will instead receive 80% of their average weekly earnings if that is below the statutory rate of £123.25. Under the previous 2025/26 rules, you needed to earn at least £125 per week to qualify." }
                },
                {
                  "@type": "Question",
                  "name": "Can I claim SSP if I am pregnant?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can receive SSP during pregnancy if you're off sick for a pregnancy-related illness and meet the eligibility criteria. However, once your maternity leave begins (or from the 4th week before your due date if you're off sick at that point), SSP stops and you switch to Statutory Maternity Pay (SMP) instead." }
                }
              ]
            }, {
              "@type": "WebApplication",
              "name": "Statutory Sick Pay Calculator UK",
              "url": "https://www.salarytakehome.co.uk/sick-pay",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP"
              },
              "description": "Free UK Statutory Sick Pay calculator. Calculate your SSP entitlement under the new 2026/27 rules (from 6 April 2026) including the £123.25 weekly rate, day-1 payment, and abolition of the Lower Earnings Limit."
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
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>
                Statutory Sick Pay Calculator
              </h1>
              <p className="text-base text-gray-700">
                Calculate your UK Statutory Sick Pay (SSP) entitlement for the current tax year and preview the new rules coming into effect from April 2026.
              </p>
              <p className="text-base text-gray-700 mt-3">
                Know your rights when you're off work sick and understand how much SSP you're entitled to receive from your employer.
              </p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: April 2026 · Reflects 2026/27 tax year
              </p>
            </div>

            {/* Two-column grid: Form and Results */}
            <div className="grid xl:grid-cols-2 gap-4 lg:gap-3 lg:scale-[0.92] lg:origin-top 2xl:scale-100">
              {/* Left Column: Form Inputs */}
              <div className="space-y-5">
                {/* Tax Year Toggle */}
                <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Select Tax Year Rules</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFormData({ ...formData, useNewRules: false })}
                      className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 ${
                        !formData.useNewRules
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium'
                          : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xl font-bold">2025/26</span>
                        <span className="text-sm font-normal">(Old Rules)</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, useNewRules: true })}
                      className={`px-6 py-4 rounded-2xl border-2 transition-all duration-200 ${
                        formData.useNewRules
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white border-green-500 shadow-medium'
                          : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-green-200'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xl font-bold">2026/27</span>
                        <span className="text-sm font-normal">(Current)</span>
                      </div>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {formData.useNewRules
                      ? 'Current SSP rules — in force from 6 April 2026'
                      : 'Historical 2025/26 rules (up to 5 April 2026)'}
                  </p>
                </div>

                {/* Average Weekly Earnings */}
                <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Average Weekly Earnings</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                    <input
                      type="text"
                      value={formData.averageWeeklyEarnings}
                      onChange={(e) => setFormData({ ...formData, averageWeeklyEarnings: formatNumber(e.target.value) })}
                      placeholder="300"
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Your average weekly earnings over the past 8 weeks</p>
                </div>

                {/* Number of Sick Days */}
                <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Number of Sick Days</label>
                  <input
                    type="number"
                    value={formData.numberOfDays}
                    onChange={(e) => setFormData({ ...formData, numberOfDays: e.target.value })}
                    min="1"
                    max="196"
                    className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                  <p className="text-xs text-gray-500 mt-2">Total consecutive days of sickness (maximum 196 days / 28 weeks)</p>
                </div>

                {/* Qualifying Days Per Week */}
                <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
                  <label className="block text-sm font-bold text-gray-700 mb-3">Qualifying Days Per Week</label>
                  <select
                    value={formData.qualifyingDaysPerWeek}
                    onChange={(e) => setFormData({ ...formData, qualifyingDaysPerWeek: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200"
                  >
                    <option value="1">1 day</option>
                    <option value="2">2 days</option>
                    <option value="3">3 days</option>
                    <option value="4">4 days</option>
                    <option value="5">5 days (typical full-time)</option>
                    <option value="6">6 days</option>
                    <option value="7">7 days</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">How many days per week you normally work (used to calculate daily rate)</p>
                </div>
              </div>

              {/* Right Column: Results Display */}
              <div className="xl:col-span-1">
                <div className="sticky top-8">
                  {results ? (
                    results.isEligible ? (
                      <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Your SSP Entitlement</h3>

                        {/* Total SSP Card */}
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-5 shadow-medium">
                          <div className="text-sm opacity-90 mb-2">Total SSP Entitlement</div>
                          <div className="text-4xl font-bold">{formatCurrency(results.totalSSP)}</div>
                          <div className="text-sm opacity-90 mt-2">over {results.weeks} weeks ({results.qualifyingDays} days)</div>
                        </div>

                        {/* Breakdown */}
                        <div className="space-y-4 mb-6">
                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-700 font-medium">Weekly Rate</span>
                            <span className="font-bold text-lg text-gray-900">{formatCurrency(results.weeklyRate)}</span>
                          </div>

                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-700 font-medium">Daily Rate</span>
                            <span className="font-bold text-lg text-gray-900">{formatCurrency(results.dailyRate)}</span>
                          </div>

                          <div className="flex justify-between items-center py-3 border-b border-gray-100">
                            <span className="text-gray-700 font-medium">Qualifying Days</span>
                            <span className="font-bold text-lg text-gray-900">{results.qualifyingDays}</span>
                          </div>

                          {results.waitingDays > 0 && (
                            <div className="flex justify-between items-center py-3 border-b border-gray-100">
                              <span className="text-gray-700 font-medium">Waiting Days (unpaid)</span>
                              <span className="font-bold text-lg text-orange-600">{results.waitingDays}</span>
                            </div>
                          )}
                        </div>

                        {/* Rate Explanation */}
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                          <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-gray-700">
                              <strong>Rate Applied:</strong> {results.rateExplanation}
                              {results.waitingDays > 0 && (
                                <div className="mt-2">
                                  <strong>Note:</strong> The first {results.waitingDays} days are "waiting days" and are not paid under current rules.
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Not Eligible Message */
                      <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-orange-200 p-6">
                        <div className="text-center">
                          <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Not Eligible for SSP</h3>
                          <p className="text-gray-600 mb-4">
                            Based on the old 2025/26 rules, your average weekly earnings of {formatCurrency(results.avgEarnings)} are below the minimum threshold of {formatCurrency(results.requiredEarnings)}/week. Note: from 6 April 2026 the Lower Earnings Limit has been abolished and all employees qualify regardless of income.
                          </p>
                          <div className="bg-green-50 rounded-xl p-4 border border-green-200 text-left">
                            <div className="flex items-start gap-3">
                              <Info className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <div className="text-sm text-gray-700">
                                <strong className="text-green-700">Good News:</strong> From April 2026, the earnings limit will be removed. Toggle to "2026/27 (New Rules)" above to see what you would receive under the new system.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    /* Empty State */
                    <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                      <HeartPulse className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                      <p className="text-gray-600">Fill in your earnings and sick days to calculate your SSP entitlement</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Information Card */}
        <div className="flex gap-6 mx-auto px-8 mt-6">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Info className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Understanding Statutory Sick Pay</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Statutory Sick Pay (SSP) is the minimum amount employers must pay to eligible employees who are off work due to illness. Here's what you need to know:
                </p>

                <h4 className="font-bold text-gray-900 text-lg mb-4">Current SSP Rules (2026/27 — from 6 April 2026)</h4>
                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2"><strong>Weekly Rate:</strong> £123.25 per week, OR 80% of your average weekly earnings if lower</li>
                  <li className="pl-2"><strong>No Earnings Limit:</strong> All employees qualify regardless of income — the Lower Earnings Limit has been abolished</li>
                  <li className="pl-2"><strong>Paid from Day 1:</strong> Waiting days abolished — you are paid from your first day of sickness</li>
                  <li className="pl-2"><strong>Duration:</strong> Up to 28 weeks for any single period of sickness</li>
                  <li className="pl-2"><strong>Qualifying Days:</strong> SSP is paid for days you would normally work</li>
                </ul>

                <h4 className="font-bold text-gray-900 text-lg mb-4">Previous SSP Rules (2025/26 — up to 5 April 2026)</h4>
                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2"><strong>Weekly Rate:</strong> £118.75 per week flat rate</li>
                  <li className="pl-2"><strong>Minimum Earnings:</strong> You had to earn at least £125/week on average to qualify</li>
                  <li className="pl-2"><strong>Waiting Period:</strong> First 3 days were "waiting days" (unpaid)</li>
                  <li className="pl-2"><strong>Duration:</strong> Up to 28 weeks maximum</li>
                </ul>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Important:</strong> SSP is the minimum your employer must pay. Many employers offer more generous sick pay schemes. Check your employment contract for details. SSP payments are subject to tax and National Insurance deductions.
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-gray-700 text-base leading-relaxed">
                    <strong>Official Resources:</strong> For full eligibility criteria and official guidance, visit{' '}
                    <a href="https://www.gov.uk/statutory-sick-pay" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                      GOV.UK Statutory Sick Pay
                    </a>. To understand how SSP fits into your overall income, use our <a href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</a> or read about the <a href="/blog/uk-tax-changes-2026-27" className="text-blue-600 hover:text-blue-800 underline font-semibold">latest UK tax changes for 2026/27</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why SSP Matters Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Why Knowing Your SSP Rights Matters</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">Understanding your Statutory Sick Pay entitlement is important because it helps you:</p>

                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2">Know your rights when you're unable to work due to illness</li>
                  <li className="pl-2">Budget for periods of sickness and understand your income</li>
                  <li className="pl-2">Check your employer is paying you correctly</li>
                  <li className="pl-2">Plan your finances if you have a long-term illness</li>
                  <li className="pl-2">Understand when you might be eligible for other benefits after SSP ends</li>
                  <li className="pl-2">Compare employer sick pay schemes when evaluating job offers</li>
                </ul>

                <p className="text-gray-700 text-base leading-relaxed">
                  The April 2026 changes will significantly improve support for low-income workers, ensuring that being sick doesn't mean zero income for anyone in employment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SSP vs Employer Sick Pay Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HeartPulse className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">SSP vs Employer Sick Pay</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Many employers offer sick pay schemes that are more generous than SSP. Here&apos;s how statutory and typical employer schemes compare:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">Feature</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">SSP</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">NHS</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">Typical Private</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Rate</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">Up to £123.25/wk</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">Full pay</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">Varies</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Full pay duration</td>
                        <td className="py-3 px-4 text-red-600 font-semibold text-base">None</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">1-6 months</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">1-13 weeks</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Waiting days</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">None (from Apr 2026)</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">Usually 0</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">0-3 days</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Max duration</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">28 weeks</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">12 months</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">4-26 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Check your employment contract for your employer&apos;s sick pay policy. When comparing job offers, employer sick pay can be a significant benefit worth considering. Read our <a href="/blog/ssp-changes-2026" className="text-blue-600 hover:text-blue-800 underline font-semibold">guide to SSP changes in 2026</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New SSP Rules 2026 Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">SSP 2026/27: What's Changed</h3>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  From 6 April 2026, Statutory Sick Pay received a major overhaul. Here&apos;s a side-by-side comparison of the old and new rules:
                </p>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">Feature</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">Old (2025/26)</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 text-base">Current (2026/27)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Waiting period</td>
                        <td className="py-3 px-4 text-red-600 font-semibold text-base">3 days unpaid</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">Paid from day 1</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Earnings limit</td>
                        <td className="py-3 px-4 text-red-600 font-semibold text-base">Must earn £125+/wk</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">No minimum</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Weekly rate</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">Flat £118.75</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">80% of pay (max £123.25)</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Low earners</td>
                        <td className="py-3 px-4 text-red-600 font-semibold text-base">Not eligible</td>
                        <td className="py-3 px-4 text-green-600 font-semibold text-base">80% of earnings</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-700 text-base">Max duration</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">28 weeks</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold text-base">28 weeks</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Toggle between the old 2025/26 rules and the current 2026/27 rules using the calculator above to see how the changes affect your entitlement. For the full breakdown, read our <a href="/blog/ssp-changes-2026" className="text-blue-600 hover:text-blue-800 underline font-semibold">complete guide to SSP changes in 2026</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Statutory Sick Pay FAQs</h3>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How much is Statutory Sick Pay in the UK?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      For 2026/27 (from 6 April 2026), SSP is 80% of your average weekly earnings or £123.25 per week, whichever is lower. The old flat rate of £118.75/week (2025/26) no longer applies, and the Lower Earnings Limit has been abolished so all employees qualify.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Who qualifies for Statutory Sick Pay?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      From 6 April 2026, all employees qualify for SSP regardless of earnings, and you are paid from day 1. Under the old 2025/26 rules you had to earn at least £125/week and wait 3 days before SSP started.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How long does SSP last?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      SSP can be paid for up to 28 weeks (196 days) for any single period of sickness. If you're still off sick after 28 weeks, you may be eligible for Employment and Support Allowance (ESA).
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Do I get SSP from day 1 of being sick?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes. From 6 April 2026, SSP is paid from your first day of sickness — the old 3 "waiting days" rule has been abolished. Under the previous 2025/26 rules, the first 3 days were unpaid waiting days.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How is SSP calculated for part-time workers?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      SSP is paid for "qualifying days" - the days you would normally work. If you work part-time, you only receive SSP for the days you would have worked. The weekly rate is divided across your qualifying days.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Is SSP taxable?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, Statutory Sick Pay is treated as earnings and is subject to Income Tax and National Insurance contributions in the usual way. Your employer will deduct these before paying you. See <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">current income tax rates</a> on GOV.UK.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What if I earn more than the SSP rate?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      From 6 April 2026, the rate is 80% of your average weekly earnings up to a maximum of £123.25/week, so higher earners receive the full cap. Under the old 2025/26 rules, everyone received the same flat rate of £118.75/week regardless of salary.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Can I get SSP from two jobs?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, if you're off sick and unable to work at both jobs, and you meet the eligibility criteria separately for each job, you can claim SSP from both employers.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What happens after 28 weeks of SSP?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      If you're still unable to work after 28 weeks, SSP ends. You may then be eligible to claim Employment and Support Allowance (ESA) from the Department for Work and Pensions. Your employer should provide you with form SSP1 to help with your ESA claim.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does my employer have to pay SSP?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, if you're an employee (not self-employed) and meet the eligibility criteria, your employer is legally required to pay you at least SSP. Many employers offer more generous company sick pay schemes on top of the statutory minimum. Self-employed individuals do not qualify for SSP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Related Reading */}
        <div className="mx-auto px-8 mt-6 mb-8 xl:pr-[192px]">
          <div className="max-w-6xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Related Reading</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              <a href="/blog/how-much-is-ssp" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Salary Guide</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How Much Is SSP Per Week?</p>
              </a>
              <a href="/blog/ssp-changes-2026" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Updates</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">SSP Changes 2026: New Sick Pay Rules</p>
              </a>
              <a href="/blog/uk-tax-changes-2026-27" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">UK Tax Changes 2026/27</p>
              </a>
              <a href="/blog/salary-sacrifice-complete-guide" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Salary Sacrifice: Complete Guide</p>
              </a>
            </div>
          </div>
        </div>

    </LayoutWrapper>
  );
}
