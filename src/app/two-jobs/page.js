"use client";
import React, { useState, useMemo } from 'react';
import { Briefcase, TrendingUp, Info, HelpCircle } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

const TAX_BANDS = {
  "2025/26": {
    personalAllowance: 12570,
    personalAllowanceReductionThreshold: 100000,
    personalAllowanceReductionRate: 0.5,
    bands: [
      { threshold: 50270, rate: 0.2 },
      { threshold: 125140, rate: 0.4 },
      { threshold: Infinity, rate: 0.45 }
    ],
    scottishBands: [
      { threshold: 15397, rate: 0.19 },
      { threshold: 27491, rate: 0.20 },
      { threshold: 43662, rate: 0.21 },
      { threshold: 75000, rate: 0.42 },
      { threshold: 125140, rate: 0.45 },
      { threshold: Infinity, rate: 0.48 }
    ]
  }
};

const NI_BANDS = {
  "2025/26": { primaryThreshold: 12570, upperEarnings: 50270, rate: 0.08, upperRate: 0.02 }
};

// Parses UK tax code and returns tax treatment instructions
const parseTaxCode = (taxCode) => {
  if (!taxCode || taxCode.trim() === '') {
    return {
      type: 'default',
      personalAllowance: null,
      applyHighEarnerReduction: true,
      isScottish: false,
      flatRate: null
    };
  }

  const code = taxCode.trim().toUpperCase();
  const cleanCode = code.replace(/\s?(W1|M1|X)$/, '');
  const isScottish = cleanCode.startsWith('S');
  const codeWithoutPrefix = cleanCode.replace(/^[SC]/, '');

  // Handle special flat-rate codes
  if (codeWithoutPrefix === 'BR') {
    return {
      type: 'flat-rate',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      flatRate: 0.20
    };
  }

  if (codeWithoutPrefix === 'D0') {
    return {
      type: 'flat-rate',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      flatRate: 0.40
    };
  }

  if (codeWithoutPrefix === 'D1') {
    return {
      type: 'flat-rate',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      flatRate: 0.45
    };
  }

  if (codeWithoutPrefix === 'NT') {
    return {
      type: 'no-tax',
      personalAllowance: Infinity,
      applyHighEarnerReduction: false,
      isScottish,
      flatRate: null
    };
  }

  if (codeWithoutPrefix === '0T') {
    return {
      type: 'zero-allowance',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      flatRate: null
    };
  }

  // Handle K codes (negative allowance)
  const kCodeMatch = codeWithoutPrefix.match(/^K(\d{1,4})([LMNTY]?)$/);
  if (kCodeMatch) {
    const kValue = parseInt(kCodeMatch[1], 10);
    return {
      type: 'k-code',
      personalAllowance: -(kValue * 10),
      applyHighEarnerReduction: false,
      isScottish,
      flatRate: null,
      kValue: kValue * 10
    };
  }

  // Handle standard numeric codes (e.g., 1257L)
  const standardCodeMatch = codeWithoutPrefix.match(/^(\d{1,4})([LMNTY]?)$/);
  if (standardCodeMatch) {
    const digits = parseInt(standardCodeMatch[1], 10);
    return {
      type: 'standard',
      personalAllowance: digits * 10,
      applyHighEarnerReduction: false,
      isScottish,
      flatRate: null
    };
  }

  // Default fallback
  return {
    type: 'default',
    personalAllowance: null,
    applyHighEarnerReduction: true,
    isScottish: false,
    flatRate: null
  };
};

export default function TwoJobs() {
  const [formData, setFormData] = useState({
    job1Salary: '',
    job2Salary: '',
    job1TaxCode: '1257L',
    job2TaxCode: 'BR',
    scottish: false,
    taxYear: '2025/26'
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
    const taxYearData = TAX_BANDS[formData.taxYear];
    const niBands = NI_BANDS[formData.taxYear];

    // Calculate correct annual tax based on TOTAL income
    // Personal allowance applies to total income
    let personalAllowance = taxYearData.personalAllowance;

    // Apply high-earner reduction based on total income
    if (taxYearData.personalAllowanceReductionThreshold &&
        totalSalary > taxYearData.personalAllowanceReductionThreshold) {
      const excess = totalSalary - taxYearData.personalAllowanceReductionThreshold;
      const reduction = excess * taxYearData.personalAllowanceReductionRate;
      personalAllowance = Math.max(0, personalAllowance - reduction);
    }

    // Calculate total tax based on total income
    const useScottish = formData.scottish;
    const bands = useScottish ? taxYearData.scottishBands : taxYearData.bands;

    let totalTaxDue = 0;
    const taxableIncome = Math.max(0, totalSalary - personalAllowance);
    const standardPA = taxYearData.personalAllowance;
    let prevThreshold = 0;

    for (let band of bands) {
      if (taxableIncome <= prevThreshold) break;

      let bandStart = prevThreshold;
      let bandEnd = band.threshold - standardPA;
      let incomeInBand = Math.max(0, Math.min(taxableIncome, bandEnd) - bandStart);

      if (incomeInBand > 0) {
        totalTaxDue += incomeInBand * band.rate;
      }

      prevThreshold = bandEnd;
      if (taxableIncome <= bandEnd) break;
    }

    // Calculate in-year deductions (what's actually deducted from payslips)
    const taxCodeInfo1 = parseTaxCode(formData.job1TaxCode);
    const taxCodeInfo2 = parseTaxCode(formData.job2TaxCode);

    let inYearTax1 = 0;
    let inYearTax2 = 0;

    // In-year tax for Job 1 (usually with personal allowance via 1257L)
    if (taxCodeInfo1.type === 'flat-rate' && taxCodeInfo1.flatRate !== null) {
      inYearTax1 = salary1 * taxCodeInfo1.flatRate;
    } else {
      const pa1 = taxCodeInfo1.personalAllowance !== null ? taxCodeInfo1.personalAllowance : taxYearData.personalAllowance;
      const taxable1 = Math.max(0, salary1 - pa1);
      let prevThreshold1 = 0;

      for (let band of bands) {
        if (taxable1 <= prevThreshold1) break;
        let bandStart = prevThreshold1;
        let bandEnd = band.threshold - standardPA;
        let incomeInBand = Math.max(0, Math.min(taxable1, bandEnd) - bandStart);
        if (incomeInBand > 0) {
          inYearTax1 += incomeInBand * band.rate;
        }
        prevThreshold1 = bandEnd;
        if (taxable1 <= bandEnd) break;
      }
    }

    // In-year tax for Job 2 (usually BR code - 20% on all)
    if (taxCodeInfo2.type === 'flat-rate' && taxCodeInfo2.flatRate !== null) {
      inYearTax2 = salary2 * taxCodeInfo2.flatRate;
    } else {
      const pa2 = taxCodeInfo2.personalAllowance !== null ? taxCodeInfo2.personalAllowance : 0;
      const taxable2 = Math.max(0, salary2 - pa2);
      let prevThreshold2 = 0;

      for (let band of bands) {
        if (taxable2 <= prevThreshold2) break;
        let bandStart = prevThreshold2;
        let bandEnd = band.threshold - standardPA;
        let incomeInBand = Math.max(0, Math.min(taxable2, bandEnd) - bandStart);
        if (incomeInBand > 0) {
          inYearTax2 += incomeInBand * band.rate;
        }
        prevThreshold2 = bandEnd;
        if (taxable2 <= bandEnd) break;
      }
    }

    const inYearTaxTotal = inYearTax1 + inYearTax2;
    const taxOverpayment = inYearTaxTotal - totalTaxDue;

    // NI is calculated separately for each job
    let ni1 = 0;
    if (niBands) {
      const niIncome1 = Math.max(0, salary1 - niBands.primaryThreshold);
      if (niIncome1 > 0) {
        const upper1 = Math.max(0, Math.min(salary1, niBands.upperEarnings) - niBands.primaryThreshold);
        ni1 += upper1 * niBands.rate;
        if (salary1 > niBands.upperEarnings) {
          ni1 += (salary1 - niBands.upperEarnings) * niBands.upperRate;
        }
      }
    }

    let ni2 = 0;
    if (niBands) {
      const niIncome2 = Math.max(0, salary2 - niBands.primaryThreshold);
      if (niIncome2 > 0) {
        const upper2 = Math.max(0, Math.min(salary2, niBands.upperEarnings) - niBands.primaryThreshold);
        ni2 += upper2 * niBands.rate;
        if (salary2 > niBands.upperEarnings) {
          ni2 += (salary2 - niBands.upperEarnings) * niBands.upperRate;
        }
      }
    }

    const totalNI = ni1 + ni2;

    // Calculate actual annual take-home (after reconciliation)
    const actualTakeHome = totalSalary - totalTaxDue - totalNI;

    // Calculate in-year take-home (before reconciliation)
    const inYearTakeHome1 = salary1 - inYearTax1 - ni1;
    const inYearTakeHome2 = salary2 - inYearTax2 - ni2;
    const inYearTakeHome = inYearTakeHome1 + inYearTakeHome2;

    const effectiveTaxRate = (totalTaxDue / totalSalary) * 100;

    return {
      job1: {
        salary: salary1,
        inYearTax: inYearTax1,
        ni: ni1,
        inYearTakeHome: inYearTakeHome1
      },
      job2: {
        salary: salary2,
        inYearTax: inYearTax2,
        ni: ni2,
        inYearTakeHome: inYearTakeHome2
      },
      total: {
        salary: totalSalary,
        correctTax: totalTaxDue,
        inYearTax: inYearTaxTotal,
        taxOverpayment: taxOverpayment,
        ni: totalNI,
        actualTakeHome: actualTakeHome,
        inYearTakeHome: inYearTakeHome
      },
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
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                Two Jobs Calculator
              </h1>
              <p className="text-xl text-gray-600">Calculate your tax and take-home pay when working two jobs</p>
            </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Job 1 and Job 2 Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Forms Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Job 1 Form */}
                <div className="space-y-5">
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
                  </div>
                </div>

                {/* Job 2 Form */}
                <div className="space-y-5">
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
                  </div>
                </div>
              </div>

              {/* Important Notice - Below Job Forms */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-800">
                    <strong className="font-bold text-amber-900">Important:</strong> Your total income tax is based on your <strong>combined earnings from all jobs</strong>, not how many jobs you have.
                    During the year, your tax codes split the calculations, but HMRC reconciles everything at year-end via a P800 form.
                    The results show both your in-year deductions and your actual annual tax liability after reconciliation.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Results</h3>

                    {/* Final Annual Take-Home (After Reconciliation) */}
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Final Annual Take-Home</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.total.actualTakeHome)}</div>
                      <div className="text-sm opacity-90 mt-2">after HMRC reconciliation</div>
                    </div>

                    {/* Tax Overpayment Notice */}
                    {results.total.taxOverpayment > 0 && (
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                        <div className="flex items-start gap-2">
                          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="text-sm font-bold text-blue-900 mb-1">Tax Refund Expected</div>
                            <div className="text-xs text-gray-700 mb-2">
                              You'll overpay <strong className="text-blue-700">{formatCurrency(results.total.taxOverpayment)}</strong> during the year.
                              HMRC will refund this via P800 after reconciliation.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Breakdown by Job */}
                    <div className="space-y-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-xs text-gray-600 mb-2">Job 1 (In-Year)</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.job1.inYearTakeHome)}</div>
                        <div className="text-xs text-gray-500 mt-1">Tax: {formatCurrency(results.job1.inYearTax)} | NI: {formatCurrency(results.job1.ni)}</div>
                      </div>

                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="text-xs text-gray-600 mb-2">Job 2 (In-Year)</div>
                        <div className="text-xl font-bold text-gray-900">{formatCurrency(results.job2.inYearTakeHome)}</div>
                        <div className="text-xs text-gray-500 mt-1">Tax: {formatCurrency(results.job2.inYearTax)} | NI: {formatCurrency(results.job2.ni)}</div>
                      </div>
                    </div>

                    {/* Tax Breakdown */}
                    <div className="space-y-3 pt-6 border-t border-gray-100">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Annual Tax Due</span>
                        <span className="font-semibold text-red-600">{formatCurrency(results.total.correctTax)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">In-Year Tax Deducted</span>
                        <span className="font-semibold text-orange-600">{formatCurrency(results.total.inYearTax)}</span>
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
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Both Salaries</h3>
                    <p className="text-gray-600">See your combined take-home pay</p>
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

        {/* Two Jobs FAQs Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-6">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Two Jobs Tax FAQs</h3>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does having two jobs mean I pay more tax in the UK?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      No. Income tax in the UK is based on your total earnings across all jobs, not the number of jobs you have. If you earn £80,000 from one job or £40,000 from two jobs, your total income tax bill is the same once HMRC reconciles your PAYE records.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Why does it feel like I pay more tax when I have two jobs?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      This usually happens because your personal allowance is only applied once, your second job may use a BR or D0 tax code, and PAYE deductions during the year are estimates. HMRC corrects this automatically after the tax year ends and any overpaid tax is refunded.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Do I pay more National Insurance if I have two jobs?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Often, yes. National Insurance is calculated separately for each job. With two jobs, you pay NI above the threshold in both jobs and may never reach the lower 2% NI rate that applies to higher earnings in a single job.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Is two £40k jobs worse than one £80k job?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      From a take-home pay perspective, usually yes. Income tax is the same overall, but National Insurance is typically higher with two jobs. In most cases, two £40k jobs result in £700–£900 less net income per year compared to one £80k job.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Can I split my personal allowance between two jobs?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes. You can ask HMRC to divide your personal allowance between jobs so tax deductions are more even during the year. This does not change your total tax bill but can improve monthly cash flow.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Will HMRC refund tax if I overpay with two jobs?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes. If you've paid too much tax, HMRC issues a P800 tax calculation and you'll receive a refund automatically or can claim it online.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does having two jobs push me into a higher tax band?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Only if your total income crosses a tax threshold. It's the combined income, not the second job alone, that matters.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Is tax calculated differently if one job is part-time?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      No. Part-time and full-time jobs are treated the same for tax purposes. HMRC looks only at total earnings, tax codes applied, and NI per employment.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What tax code should I have if I have two jobs?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Usually one job gets your personal allowance and the second job uses BR, D0, or D1. If your tax code looks wrong, you can update it through HMRC Online Services.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does this change if I'm self-employed as well?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes. If you have one PAYE job and self-employment income, PAYE tax is deducted at source and self-employed tax and NI are calculated via Self Assessment. Your total income still determines your tax bands.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What's the best way to reduce tax if I have two jobs?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Legal ways include pension contributions, adjusting tax codes, claiming allowable expenses, and using personal allowance efficiently.
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
