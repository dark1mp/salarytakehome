"use client";
import React, { useState, useMemo } from 'react';
import { Briefcase, TrendingUp, Info, HelpCircle, FileText, Calculator, ClipboardList, AlertTriangle } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

const TAX_BANDS = {
  "2026/27": {
    personalAllowance: 12570,
    personalAllowanceReductionThreshold: 100000,
    personalAllowanceReductionRate: 0.5,
    bands: [
      { threshold: 50270, rate: 0.2 },
      { threshold: 125140, rate: 0.4 },
      { threshold: Infinity, rate: 0.45 }
    ],
    scottishBands: [
      { threshold: 16537, rate: 0.19 },
      { threshold: 29526, rate: 0.20 },
      { threshold: 43662, rate: 0.21 },
      { threshold: 75000, rate: 0.42 },
      { threshold: 125140, rate: 0.45 },
      { threshold: Infinity, rate: 0.48 }
    ]
  }
};

const NI_BANDS = {
  "2026/27": { primaryThreshold: 12570, upperEarnings: 50270, rate: 0.08, upperRate: 0.02 }
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
    taxYear: '2026/27'
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
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Two Jobs Calculator" }]} fullWidth>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [{
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is tax calculated when I have two jobs in the UK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your personal allowance (£12,570) is usually applied to your main job via your tax code (typically 1257L). Your second job is taxed from the first pound earned, usually on a BR (basic rate) tax code at 20%. If your combined income exceeds £50,270, some earnings are taxed at 40%."
                }
              },
              {
                "@type": "Question",
                "name": "Do I get a personal allowance on both jobs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, you only receive one personal allowance of £12,570 across all employment. HMRC assigns it to your primary job via a 1257L tax code. Your second job typically receives a BR code, meaning all earnings are taxed at 20%. You can ask HMRC to split your allowance between jobs if you prefer."
                }
              },
              {
                "@type": "Question",
                "name": "What tax code should I use for my second job?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most second jobs use a BR (basic rate) tax code, which taxes all earnings at 20%. If your combined income might exceed £50,270, HMRC may issue a D0 code (40%) for the second job. You can contact HMRC to request a different split of your personal allowance between jobs."
                }
              },
              {
                "@type": "Question",
                "name": "Will I pay more National Insurance with two jobs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You pay National Insurance separately on each job. The 8% NI rate applies to earnings between £12,570 and £50,270 per job. This means if you earn £20,000 from each job, you pay NI on £7,430 from each, rather than on £27,430 from a single £40,000 job. In some cases, this can mean paying slightly less NI with two jobs."
                }
              },
              {
                "@type": "Question",
                "name": "Can I split my personal allowance between two jobs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can ask HMRC to split your £12,570 personal allowance between two jobs. For example, if you earn similar amounts from each, you could request £6,285 of allowance on each job. Contact HMRC by phone or through your Personal Tax Account to request a tax code adjustment."
                }
              },
              {
                "@type": "Question",
                "name": "How do student loans work with two jobs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Student loan repayments are only deducted from jobs where you earn above the repayment threshold. If neither job exceeds the threshold individually but your combined income does, you may need to make repayments through Self Assessment. HMRC will reconcile this after the tax year ends."
                }
              },
              {
                "@type": "Question",
                "name": "Should I tell HMRC I have two jobs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "HMRC is usually notified automatically through your employers' PAYE submissions. However, you should check your tax codes are correct using your Personal Tax Account at GOV.UK. If your codes are wrong, you could overpay or underpay tax throughout the year."
                }
              }
            ]
          }, {
            "@type": "WebApplication",
            "name": "Two Jobs Tax Calculator UK",
            "url": "https://www.salarytakehome.co.uk/two-jobs",
            "applicationCategory": "FinanceApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "GBP"
            },
            "description": "Free UK two jobs tax calculator. Calculate your combined take-home pay, tax, and National Insurance when working two jobs."
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
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                Two Jobs Calculator
              </h1>
              <p className="text-xl text-gray-600">Calculate your tax and take-home pay when working two jobs</p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: April 2026 · Reflects 2026/27 tax year
              </p>
            </div>

          <div className="grid xl:grid-cols-3 gap-4 lg:gap-3 lg:scale-[0.92] lg:origin-top 2xl:scale-100">
            {/* Left Column - Job 1 and Job 2 Forms */}
            <div className="xl:col-span-2 space-y-6">
              {/* Job Forms Grid */}
              <div className="grid lg:grid-cols-2 gap-4 lg:gap-3">
                {/* Job 1 Form */}
                <div className="space-y-5">
                  <h2 className="text-2xl font-bold text-gray-900">Job 1 (Primary)</h2>
                  <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
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
                  <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
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
            <div className="xl:col-span-1">
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
        </div>

        {/* How Tax Codes Work With Two Jobs Card */}
        <div className="flex gap-6 mx-auto px-8 mt-6">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">How Tax Codes Work With Two Jobs</h3>
                </div>

                <p className="text-gray-700 mb-4">Your tax code tells each employer how much tax-free pay to give you. With two jobs, HMRC assigns different codes to ensure your personal allowance is only used once.</p>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                        <th className="px-4 py-3 text-left font-semibold text-sm">Scenario</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Job 1 Code</th>
                        <th className="px-4 py-3 text-center font-semibold text-sm">Job 2 Code</th>
                        <th className="px-4 py-3 text-left font-semibold text-sm">Effect</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-blue-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Standard setup</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">1257L</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">BR</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Full allowance on job 1, 20% flat on job 2</td>
                      </tr>
                      <tr className="hover:bg-blue-50/50 bg-gray-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Combined over &pound;50,270</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">1257L</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">D0</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Full allowance on job 1, 40% flat on job 2</td>
                      </tr>
                      <tr className="hover:bg-blue-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Split allowance</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">625L</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">625L</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Half allowance on each job</td>
                      </tr>
                      <tr className="hover:bg-blue-50/50 bg-gray-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Scottish taxpayer</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">S1257L</td>
                        <td className="px-4 py-3 text-center text-sm font-mono font-bold text-blue-700">SBR</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Scottish rates apply to both</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-600 text-sm">
                  Read our full guide: <a href="/blog/two-jobs-tax-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">Two Jobs Tax Explained</a> | Check your codes on <a href="https://www.gov.uk/tax-codes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* NI Differences: One Job vs Two Jobs Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-red-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">NI Differences: One Job vs Two Jobs</h3>
                </div>

                <p className="text-gray-700 mb-4">National Insurance is calculated separately per job. This means the NI threshold applies independently to each employment, which can change your total take-home pay.</p>

                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-red-500 to-rose-600 text-white">
                        <th className="px-4 py-3 text-left font-semibold text-sm">Item</th>
                        <th className="px-4 py-3 text-right font-semibold text-sm">One &pound;60k Job</th>
                        <th className="px-4 py-3 text-right font-semibold text-sm">Two &pound;30k Jobs</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-red-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Gross Income</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;60,000</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;60,000</td>
                      </tr>
                      <tr className="hover:bg-red-50/50 bg-gray-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Income Tax</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;9,432</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;9,432</td>
                      </tr>
                      <tr className="hover:bg-red-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">National Insurance</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;4,194</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-green-700">&pound;2,794*</td>
                      </tr>
                      <tr className="hover:bg-red-50/50 bg-gray-50/50">
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">Total Deductions</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;13,626</td>
                        <td className="px-4 py-3 text-right text-sm font-mono text-gray-900">&pound;12,226</td>
                      </tr>
                      <tr className="bg-red-50 font-bold">
                        <td className="px-4 py-3 text-sm font-bold text-gray-900">Take-Home</td>
                        <td className="px-4 py-3 text-right text-sm font-mono font-bold text-gray-900">&pound;46,374</td>
                        <td className="px-4 py-3 text-right text-sm font-mono font-bold text-green-700">&pound;47,774</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-600 text-sm">
                  *NI is actually lower with two jobs because each job gets its own &pound;12,570 threshold. Read more: <a href="/blog/two-jobs-tax-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">Two Jobs Tax Explained</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Declaring a Second Job to HMRC Card */}
        <div className="flex gap-6 mx-auto px-8 mt-6">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-green-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <ClipboardList className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Declaring a Second Job to HMRC</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  When you start a second job, your new employer will ask you to complete a Starter Checklist (which replaced the P46). The statement you choose determines your initial tax code. Here&apos;s what typically happens:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-green-200">Scenario</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-green-200">Starter Checklist Statement</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-green-200">Likely Tax Code</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-green-200">What It Means</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 text-gray-800">First job uses your full allowance</td>
                        <td className="p-3 text-gray-800">Statement B</td>
                        <td className="p-3 font-semibold text-gray-900">BR</td>
                        <td className="p-3 text-gray-700">All earnings taxed at 20%</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="p-3 text-gray-800">First job only uses part of allowance</td>
                        <td className="p-3 text-gray-800">Statement A</td>
                        <td className="p-3 font-semibold text-gray-900">Split code (e.g. 600L)</td>
                        <td className="p-3 text-gray-700">Remaining allowance applied here</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 text-gray-800">Combined income over &pound;50,270</td>
                        <td className="p-3 text-gray-800">Statement B</td>
                        <td className="p-3 font-semibold text-gray-900">D0</td>
                        <td className="p-3 text-gray-700">All earnings taxed at 40%</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="p-3 text-gray-800">No P45 and unsure</td>
                        <td className="p-3 text-gray-800">Statement C</td>
                        <td className="p-3 font-semibold text-gray-900">Emergency (e.g. 1257L M1)</td>
                        <td className="p-3 text-gray-700">Temporary — HMRC will correct it</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  <strong>Tip:</strong> You can move your personal allowance to whichever job you prefer by contacting HMRC or using your <a href="https://www.gov.uk/check-income-tax-current-year" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">Personal Tax Account on GOV.UK</a>. This doesn&apos;t change your total tax — it just adjusts how much is deducted from each payslip during the year.
                </p>

                <p className="text-gray-600 text-sm">
                  Learn more about how PAYE works across multiple employers: <a href="/blog/two-jobs-tax-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">Two Jobs Tax Explained</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* When Two Jobs Cost You More Tax Card */}
        <div className="flex gap-6 mx-auto px-8 mt-6">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <AlertTriangle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">When Two Jobs Cost You More Tax</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Having two jobs doesn&apos;t automatically mean more tax, but there are income thresholds where your combined earnings can trigger higher effective tax rates. Watch out for these traps:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-amber-50">
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-amber-200">Combined Income</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-amber-200">Example (Job 1 + Job 2)</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-amber-200">Tax Trap</th>
                        <th className="text-left p-3 font-semibold text-gray-900 border-b border-amber-200">Effective Rate on Extra &pound;1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 text-gray-800">Over &pound;50,270</td>
                        <td className="p-3 text-gray-800">&pound;35k + &pound;20k</td>
                        <td className="p-3 text-gray-700">Higher rate band — earnings above &pound;50,270 taxed at 40% + 2% NI</td>
                        <td className="p-3 font-semibold text-amber-700">42%</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="p-3 text-gray-800">Over &pound;50,000</td>
                        <td className="p-3 text-gray-800">&pound;40k + &pound;15k</td>
                        <td className="p-3 text-gray-700">High Income Child Benefit Charge — lose 1% of Child Benefit per &pound;200 over &pound;50k</td>
                        <td className="p-3 font-semibold text-amber-700">Up to 55%+</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 text-gray-800">Over &pound;100,000</td>
                        <td className="p-3 text-gray-800">&pound;70k + &pound;35k</td>
                        <td className="p-3 text-gray-700">Personal allowance tapered — lose &pound;1 of allowance per &pound;2 over &pound;100k</td>
                        <td className="p-3 font-semibold text-red-700">60%</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="p-3 text-gray-800">Over &pound;125,140</td>
                        <td className="p-3 text-gray-800">&pound;80k + &pound;50k</td>
                        <td className="p-3 text-gray-700">No personal allowance — all income taxed, plus NI on each job separately</td>
                        <td className="p-3 font-semibold text-red-700">47%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
                  <p className="text-amber-900 text-base leading-relaxed">
                    <strong>The &pound;100k trap is the biggest surprise.</strong> If one job pays &pound;70k and your second pays &pound;35k, you&apos;d lose your entire personal allowance — costing an extra &pound;5,028 in tax compared to earning &pound;100k from one source. This is because the taper applies to combined income, but many people don&apos;t realise their second job pushes them over the threshold.
                  </p>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  <strong>How to mitigate it:</strong> Consider pension salary sacrifice on one or both jobs to reduce your combined adjusted net income below these thresholds. Even small pension contributions can save thousands in marginal tax.
                </p>

                <p className="text-gray-600 text-sm">
                  Read more about the &pound;100k trap: <a href="/blog/100k-tax-trap" className="text-blue-600 hover:text-blue-800 underline font-semibold">The &pound;100k Tax Trap Explained</a> · See also: <a href="/blog/two-jobs-tax-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">Two Jobs Tax Explained</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two Jobs FAQs Card */}
        <div className="flex gap-6 mx-auto px-8 mt-6">
          <div className="flex-1 xl:pr-[192px]">
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
                      No. Income tax in the UK is based on your total earnings across all jobs, not the number of jobs you have. If you earn £80,000 from one job or £40,000 from two jobs, your total income tax bill is the same once HMRC reconciles your PAYE records. See the <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK income tax rates</a> for current thresholds.
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
                      Yes. If you've paid too much tax, HMRC issues a <a href="https://www.gov.uk/tax-overpayments-and-underpayments" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">P800 tax calculation</a> and you'll receive a refund automatically or can claim it online.
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
                      Legal ways include <a href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">pension contributions</a>, adjusting tax codes, claiming allowable expenses, and using your personal allowance efficiently. <a href="/blog/salary-sacrifice-complete-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">Salary sacrifice</a> on your main job can also reduce your overall tax bill. Read our guide on <a href="/blog/maximize-take-home-pay-2024" className="text-blue-600 hover:text-blue-800 underline font-semibold">maximising take-home pay</a> for more tips.
                    </p>
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
            <div className="grid md:grid-cols-3 gap-3">
              <a href="/blog/maximize-take-home-pay-2024" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How to Maximise Your Take Home Pay</p>
              </a>
              <a href="/blog/salary-sacrifice-complete-guide" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Pensions</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Salary Sacrifice Complete Guide</p>
              </a>
              <a href="/blog/two-jobs-tax-explained" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Two Jobs Tax Explained: PAYE With Multiple Employers</p>
              </a>
            </div>
          </div>
        </div>
      </div>

    </LayoutWrapper>
  );
}
