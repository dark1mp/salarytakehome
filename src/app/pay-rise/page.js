"use client";
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import {
  TrendingUp,
  PoundSterling,
  Users,
  Settings,
  ChevronRight,
  Info,
  Calculator,
  Percent,
  Building,
  Award
} from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

// Tax constants (same as take-home-pay-calculator)
const TAX_YEARS = ["2025/26", "2024/25", "2023/24", "2022/23", "2021/22"];

const TAX_BANDS = {
  "2021/22": {
    personalAllowance: 12570,
    bands: [
      { threshold: 50270, rate: 0.2 },
      { threshold: 150000, rate: 0.4 },
      { threshold: Infinity, rate: 0.45 }
    ],
    scottishBands: [
      { threshold: 2162, rate: 0.19 },
      { threshold: 13118, rate: 0.20 },
      { threshold: 31392, rate: 0.21 },
      { threshold: 150000, rate: 0.41 },
      { threshold: Infinity, rate: 0.46 }
    ]
  },
  "2022/23": {
    personalAllowance: 12570,
    bands: [
      { threshold: 50270, rate: 0.2 },
      { threshold: 150000, rate: 0.4 },
      { threshold: Infinity, rate: 0.45 }
    ],
    scottishBands: [
      { threshold: 2162, rate: 0.19 },
      { threshold: 13118, rate: 0.20 },
      { threshold: 31392, rate: 0.21 },
      { threshold: 150000, rate: 0.41 },
      { threshold: Infinity, rate: 0.46 }
    ]
  },
  "2023/24": {
    personalAllowance: 12570,
    bands: [
      { threshold: 50270, rate: 0.2 },
      { threshold: 125140, rate: 0.4 },
      { threshold: Infinity, rate: 0.45 }
    ],
    scottishBands: [
      { threshold: 2162, rate: 0.19 },
      { threshold: 13118, rate: 0.20 },
      { threshold: 31392, rate: 0.21 },
      { threshold: 125140, rate: 0.42 },
      { threshold: Infinity, rate: 0.47 }
    ]
  },
  "2024/25": {
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
  },
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
  "2021/22": { primaryThreshold: 9568, upperEarnings: 50270, rate: 0.12, upperRate: 0.02 },
  "2022/23": { primaryThreshold: 9880, upperEarnings: 50270, rate: 0.1325, upperRate: 0.0325 },
  "2023/24": { primaryThreshold: 12570, upperEarnings: 50270, rate: 0.12, upperRate: 0.02 },
  "2024/25": { primaryThreshold: 12570, upperEarnings: 50270, rate: 0.12, upperRate: 0.02 },
  "2025/26": { primaryThreshold: 12570, upperEarnings: 50270, rate: 0.08, upperRate: 0.02 }
};

const STUDENT_LOAN = {
  plan1: { threshold: 26065, rate: 0.09 },
  plan2: { threshold: 28470, rate: 0.09 },
  plan4: { threshold: 32745, rate: 0.09 },
  plan5: { threshold: 25000, rate: 0.09 },
  postgrad: { threshold: 21000, rate: 0.06 }
};

// CountUp animation component
const CountUp = React.memo(({ end, duration = 800, prefix = "£" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (end === 0) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{prefix}{count.toLocaleString()}</span>;
});

CountUp.displayName = 'CountUp';

// Validates UK tax codes
const validateTaxCode = (code) => {
  if (!code || code.trim() === '') {
    return { valid: true, normalized: '' };
  }
  const trimmed = code.trim().toUpperCase();
  const taxCodeRegex = /^([SC]?)((\d{1,4}[LMNTY]?)|BR|D0|D1|NT|0T|K\d{1,4}[LMNTY]?)(\s?(W1|M1|X))?$/;
  const isValid = taxCodeRegex.test(trimmed);
  return { valid: isValid, normalized: isValid ? trimmed : code };
};

// Parses UK tax code
const parseTaxCode = (taxCode, taxYear) => {
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
    return { type: 'flat-rate', personalAllowance: 0, applyHighEarnerReduction: false, isScottish, flatRate: 0.20 };
  }
  if (codeWithoutPrefix === 'D0') {
    return { type: 'flat-rate', personalAllowance: 0, applyHighEarnerReduction: false, isScottish, flatRate: 0.40 };
  }
  if (codeWithoutPrefix === 'D1') {
    return { type: 'flat-rate', personalAllowance: 0, applyHighEarnerReduction: false, isScottish, flatRate: 0.45 };
  }
  if (codeWithoutPrefix === 'NT') {
    return { type: 'no-tax', personalAllowance: Infinity, applyHighEarnerReduction: false, isScottish, flatRate: null };
  }
  if (codeWithoutPrefix === '0T') {
    return { type: 'zero-allowance', personalAllowance: 0, applyHighEarnerReduction: false, isScottish, flatRate: null };
  }

  // Handle K codes
  const kCodeMatch = codeWithoutPrefix.match(/^K(\d{1,4})([LMNTY]?)$/);
  if (kCodeMatch) {
    const kValue = parseInt(kCodeMatch[1], 10);
    return { type: 'k-code', personalAllowance: -(kValue * 10), applyHighEarnerReduction: false, isScottish, flatRate: null };
  }

  // Handle standard numeric codes
  const standardCodeMatch = codeWithoutPrefix.match(/^(\d{1,4})([LMNTY]?)$/);
  if (standardCodeMatch) {
    const digits = parseInt(standardCodeMatch[1], 10);
    return { type: 'standard', personalAllowance: digits * 10, applyHighEarnerReduction: false, isScottish, flatRate: null };
  }

  return { type: 'default', personalAllowance: null, applyHighEarnerReduction: true, isScottish: false, flatRate: null };
};

// Format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount || 0);
};

// Format number input with commas
const formatNumberInput = (value) => {
  if (!value) return '';
  const numericValue = value.toString().replace(/[^\d]/g, '');
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default function PayRiseCalculator() {
  const [formData, setFormData] = useState({
    currentSalary: '',
    raiseType: 'percentage',
    raisePercentage: '',
    raiseAmount: '',
    taxYear: '2025/26',
    scottish: false,
    taxCode: '1257L',
    studentLoan: '',
    pension: { type: 'percentage', value: '' }
  });

  const [showAdvanced, setShowAdvanced] = useState(false);
  const [taxCodeError, setTaxCodeError] = useState('');

  // Update form data helper
  const updateFormData = useCallback((field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  // Handle number input
  const handleNumberInput = useCallback((field, value) => {
    const formatted = formatNumberInput(value);
    setFormData(prev => ({ ...prev, [field]: formatted }));
  }, []);

  // Validate tax code on change
  const handleTaxCodeChange = useCallback((value) => {
    const validation = validateTaxCode(value);
    setTaxCodeError(validation.valid ? '' : 'Invalid tax code format');
    updateFormData('taxCode', value.toUpperCase());
  }, [updateFormData]);

  // Calculate take-home pay for a given salary
  const calculateTakeHome = useCallback((grossSalary, options) => {
    const { taxYear, scottish, taxCode, studentLoan, pension } = options;
    const taxYearData = TAX_BANDS[taxYear];
    const niBands = NI_BANDS[taxYear];

    // Parse tax code
    const taxCodeInfo = parseTaxCode(taxCode, taxYear);

    // Calculate pension deduction
    let pensionDeduct = 0;
    if (pension.value) {
      if (pension.type === 'percentage') {
        pensionDeduct = grossSalary * (parseFloat(pension.value) / 100);
      } else {
        pensionDeduct = parseFloat(pension.value.replace(/,/g, '')) || 0;
      }
    }

    // Calculate personal allowance
    let personalAllowance = taxCodeInfo.personalAllowance ?? taxYearData.personalAllowance;
    const adjustedNetIncome = grossSalary - pensionDeduct;

    // Apply high-earner reduction if applicable
    if (taxCodeInfo.applyHighEarnerReduction &&
        taxYearData.personalAllowanceReductionThreshold &&
        adjustedNetIncome > taxYearData.personalAllowanceReductionThreshold) {
      const excess = adjustedNetIncome - taxYearData.personalAllowanceReductionThreshold;
      const reduction = excess * taxYearData.personalAllowanceReductionRate;
      personalAllowance = Math.max(0, personalAllowance - reduction);
    }

    // Calculate income tax
    let tax = 0;
    const taxableIncome = Math.max(0, adjustedNetIncome - personalAllowance);

    if (taxCodeInfo.flatRate) {
      // Flat rate tax (BR, D0, D1)
      tax = adjustedNetIncome * taxCodeInfo.flatRate;
    } else if (taxCodeInfo.type !== 'no-tax') {
      // Progressive tax calculation
      const bands = (scottish || taxCodeInfo.isScottish) ? taxYearData.scottishBands : taxYearData.bands;
      let remainingIncome = taxableIncome;
      let previousThreshold = personalAllowance;

      for (const band of bands) {
        const bandTop = band.threshold;
        const bandSize = bandTop - previousThreshold;
        const incomeInBand = Math.min(remainingIncome, bandSize);

        if (incomeInBand > 0) {
          tax += incomeInBand * band.rate;
          remainingIncome -= incomeInBand;
        }

        if (remainingIncome <= 0) break;
        previousThreshold = bandTop;
      }
    }

    // Calculate National Insurance
    let ni = 0;
    if (grossSalary > niBands.primaryThreshold) {
      const basicNI = Math.min(grossSalary, niBands.upperEarnings) - niBands.primaryThreshold;
      ni += Math.max(0, basicNI) * niBands.rate;

      if (grossSalary > niBands.upperEarnings) {
        ni += (grossSalary - niBands.upperEarnings) * niBands.upperRate;
      }
    }

    // Calculate student loan repayments
    let sl = 0;
    if (studentLoan && STUDENT_LOAN[studentLoan]) {
      const slPlan = STUDENT_LOAN[studentLoan];
      sl = Math.max(0, grossSalary - slPlan.threshold) * slPlan.rate;
    }

    // Calculate take-home
    const takeHome = grossSalary - tax - ni - sl - pensionDeduct;

    return {
      gross: grossSalary,
      tax: Math.max(0, tax),
      ni: Math.max(0, ni),
      studentLoan: Math.max(0, sl),
      pension: pensionDeduct,
      takeHome: Math.max(0, takeHome),
      personalAllowance
    };
  }, []);

  // Main results calculation
  const results = useMemo(() => {
    const currentSalary = parseFloat(formData.currentSalary.replace(/,/g, '')) || 0;
    if (currentSalary <= 0) return null;

    // Calculate new salary based on raise type
    let newSalary;
    if (formData.raiseType === 'percentage') {
      const percentage = parseFloat(formData.raisePercentage) || 0;
      if (percentage <= 0) return null;
      newSalary = currentSalary * (1 + percentage / 100);
    } else {
      const raiseAmount = parseFloat(formData.raiseAmount.replace(/,/g, '')) || 0;
      if (raiseAmount <= 0) return null;
      newSalary = currentSalary + raiseAmount;
    }

    const options = {
      taxYear: formData.taxYear,
      scottish: formData.scottish,
      taxCode: formData.taxCode,
      studentLoan: formData.studentLoan,
      pension: formData.pension
    };

    const beforeResults = calculateTakeHome(currentSalary, options);
    const afterResults = calculateTakeHome(newSalary, options);

    // Calculate deltas
    const grossDelta = afterResults.gross - beforeResults.gross;
    const takeHomeDelta = afterResults.takeHome - beforeResults.takeHome;
    const taxDelta = afterResults.tax - beforeResults.tax;
    const niDelta = afterResults.ni - beforeResults.ni;
    const studentLoanDelta = afterResults.studentLoan - beforeResults.studentLoan;
    const pensionDelta = afterResults.pension - beforeResults.pension;

    // Calculate effective tax rate on raise
    const effectiveTaxRate = grossDelta > 0 ? ((grossDelta - takeHomeDelta) / grossDelta) * 100 : 0;
    const raisePercentage = ((newSalary - currentSalary) / currentSalary) * 100;

    return {
      before: beforeResults,
      after: afterResults,
      delta: {
        gross: grossDelta,
        takeHome: takeHomeDelta,
        tax: taxDelta,
        ni: niDelta,
        studentLoan: studentLoanDelta,
        pension: pensionDelta
      },
      effectiveTaxRate,
      raisePercentage
    };
  }, [formData, calculateTakeHome]);

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        {/* Main Content */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-4 md:px-8 py-10">
          <div className="flex-1 max-w-6xl">

            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                Pay Rise Calculator
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                See exactly how much extra money hits your bank account after a pay rise
              </p>
            </div>

            {/* Input Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">

              {/* Current Salary Card */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <PoundSterling className="w-5 h-5 text-white" />
                  </div>
                  Your Current Salary
                </h2>

                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Annual salary before the raise
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.currentSalary}
                    onChange={(e) => handleNumberInput('currentSalary', e.target.value)}
                    placeholder="50,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Pay Rise Card */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  Your Pay Rise
                </h2>

                {/* Toggle Buttons */}
                <div className="flex gap-3 mb-4">
                  <button
                    onClick={() => updateFormData('raiseType', 'percentage')}
                    className={`flex-1 px-4 py-3 rounded-2xl border-2 transition-all duration-200 font-semibold flex items-center justify-center gap-2 ${
                      formData.raiseType === 'percentage'
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-emerald-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-emerald-200 hover:bg-white/95'
                    }`}
                  >
                    <Percent className="w-4 h-4" />
                    Percentage
                  </button>
                  <button
                    onClick={() => updateFormData('raiseType', 'amount')}
                    className={`flex-1 px-4 py-3 rounded-2xl border-2 transition-all duration-200 font-semibold flex items-center justify-center gap-2 ${
                      formData.raiseType === 'amount'
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white border-emerald-500 shadow-medium'
                        : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-emerald-200 hover:bg-white/95'
                    }`}
                  >
                    <PoundSterling className="w-4 h-4" />
                    Fixed Amount
                  </button>
                </div>

                {/* Conditional Input */}
                {formData.raiseType === 'percentage' ? (
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.raisePercentage}
                      onChange={(e) => updateFormData('raisePercentage', e.target.value.replace(/[^\d.]/g, ''))}
                      placeholder="5"
                      className="w-full pr-10 pl-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">%</span>
                  </div>
                ) : (
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                    <input
                      type="text"
                      value={formData.raiseAmount}
                      onChange={(e) => handleNumberInput('raiseAmount', e.target.value)}
                      placeholder="5,000"
                      className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                    />
                  </div>
                )}

                <p className="text-xs text-gray-500 mt-2">
                  {formData.raiseType === 'percentage'
                    ? 'Enter the percentage increase (e.g., 5 for a 5% raise)'
                    : 'Enter the annual increase amount (e.g., 5,000 for £5,000 more per year)'}
                </p>
              </div>

              {/* Tax Settings Card */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  Tax Settings
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tax Year</label>
                    <select
                      value={formData.taxYear}
                      onChange={(e) => updateFormData('taxYear', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 font-semibold bg-white/80 transition-all duration-200"
                    >
                      {TAX_YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Tax Code (optional)</label>
                    <input
                      type="text"
                      value={formData.taxCode}
                      onChange={(e) => handleTaxCodeChange(e.target.value)}
                      placeholder="1257L"
                      className={`w-full px-4 py-3 border-2 rounded-2xl focus:ring-2 font-semibold bg-white/80 transition-all duration-200 ${
                        taxCodeError ? 'border-red-300 focus:ring-red-500 focus:border-red-400' : 'border-gray-200/50 focus:ring-purple-500 focus:border-purple-400'
                      }`}
                    />
                    {taxCodeError && (
                      <p className="text-xs text-red-500 mt-1">{taxCodeError}</p>
                    )}
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.scottish}
                      onChange={(e) => updateFormData('scottish', e.target.checked)}
                      className="w-5 h-5 text-purple-600 border-gray-300 rounded-lg focus:ring-purple-500 focus:ring-2 transition-all duration-200"
                    />
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-700 transition-colors duration-200">
                      I&apos;m a Scottish taxpayer
                    </span>
                  </label>
                </div>
              </div>

              {/* Advanced Options Card */}
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                {/* Mobile: Collapsible header */}
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="w-full flex items-center justify-between text-left group md:hidden"
                >
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3 group-hover:text-purple-700 transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    Advanced Options
                  </h2>
                  <ChevronRight className={`w-6 h-6 text-gray-400 transition-all duration-200 group-hover:text-purple-500 ${showAdvanced ? 'rotate-90' : ''}`} />
                </button>

                {/* Desktop: Static header */}
                <h2 className="hidden md:flex text-xl font-bold text-gray-900 items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  Advanced Options
                </h2>

                {/* Mobile: Collapsible content / Desktop: Always visible */}
                <div className={`space-y-4 ${showAdvanced ? 'mt-6 animate-fade-in-slide' : 'hidden'} md:block md:mt-0`}>
                    {/* Student Loan */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Student Loan Plan</label>
                      <select
                        value={formData.studentLoan}
                        onChange={(e) => updateFormData('studentLoan', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 font-semibold bg-white/80 transition-all duration-200"
                      >
                        <option value="">No student loan</option>
                        <option value="plan1">Plan 1 (Pre-2012)</option>
                        <option value="plan2">Plan 2 (Post-2012)</option>
                        <option value="plan4">Plan 4 (Scotland)</option>
                        <option value="plan5">Plan 5 (Post-2023)</option>
                        <option value="postgrad">Postgraduate Loan</option>
                      </select>
                    </div>

                    {/* Pension Contributions */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Pension Contributions</label>
                      <div className="flex gap-2 mb-2">
                        <button
                          onClick={() => setFormData(prev => ({ ...prev, pension: { ...prev.pension, type: 'percentage' } }))}
                          className={`flex-1 px-3 py-2 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                            formData.pension.type === 'percentage'
                              ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-500'
                              : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-purple-200'
                          }`}
                        >
                          %
                        </button>
                        <button
                          onClick={() => setFormData(prev => ({ ...prev, pension: { ...prev.pension, type: 'amount' } }))}
                          className={`flex-1 px-3 py-2 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                            formData.pension.type === 'amount'
                              ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-500'
                              : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-purple-200'
                          }`}
                        >
                          £
                        </button>
                      </div>
                      <div className="relative">
                        {formData.pension.type === 'amount' && (
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">£</span>
                        )}
                        <input
                          type="text"
                          value={formData.pension.value}
                          onChange={(e) => {
                            const value = formData.pension.type === 'amount'
                              ? formatNumberInput(e.target.value)
                              : e.target.value.replace(/[^\d.]/g, '');
                            setFormData(prev => ({ ...prev, pension: { ...prev.pension, value } }));
                          }}
                          placeholder={formData.pension.type === 'percentage' ? '5' : '200'}
                          className={`w-full py-3 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 font-semibold bg-white/80 transition-all duration-200 ${
                            formData.pension.type === 'amount' ? 'pl-10 pr-4' : 'px-4'
                          }`}
                        />
                        {formData.pension.type === 'percentage' && (
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">%</span>
                        )}
                      </div>
                    </div>
                  </div>
              </div>
            </div>

            {/* Results Section */}
            {results ? (
              <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6 md:p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Pay Rise Breakdown</h3>

                {/* Hero Delta Card */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-6 text-white mb-6 shadow-medium relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-sm opacity-90 mb-2 font-medium">Extra Take-Home Pay Per Year</div>
                    <div className="text-4xl md:text-5xl font-bold mb-3">
                      +<CountUp end={Math.round(results.delta.takeHome)} />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-lg opacity-90">
                        +£{Math.round(results.delta.takeHome / 12).toLocaleString()} per month
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>

                {/* Effective Tax Rate Info Box */}
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 mb-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold text-gray-900">Effective tax rate on your raise:</span>
                      <span className="ml-2 text-gray-700 font-semibold">{results.effectiveTaxRate.toFixed(1)}%</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Of your {formatCurrency(results.delta.gross)} raise, {formatCurrency(results.delta.gross - results.delta.takeHome)} goes to taxes and deductions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Side-by-Side Comparison Table */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {/* Before Column */}
                  <div className="bg-blue-50 rounded-2xl p-4 md:p-5 border-2 border-blue-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Before</h4>
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Annual Take-Home</div>
                        <div className="text-xl md:text-2xl font-bold text-gray-900">
                          {formatCurrency(results.before.takeHome)}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Gross Salary</span>
                        <span className="font-semibold">{formatCurrency(results.before.gross)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-blue-200">
                        <span className="text-gray-600">Income Tax</span>
                        <span className="text-red-600">-{formatCurrency(results.before.tax)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-blue-200">
                        <span className="text-gray-600">National Insurance</span>
                        <span className="text-red-600">-{formatCurrency(results.before.ni)}</span>
                      </div>
                      {results.before.studentLoan > 0 && (
                        <div className="flex justify-between py-2 border-t border-blue-200">
                          <span className="text-gray-600">Student Loan</span>
                          <span className="text-red-600">-{formatCurrency(results.before.studentLoan)}</span>
                        </div>
                      )}
                      {results.before.pension > 0 && (
                        <div className="flex justify-between py-2 border-t border-blue-200">
                          <span className="text-gray-600">Pension</span>
                          <span className="text-red-600">-{formatCurrency(results.before.pension)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Delta Column */}
                  <div className="bg-emerald-50 rounded-2xl p-4 md:p-5 border-2 border-emerald-300">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Difference</h4>
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Extra Take-Home</div>
                        <div className="text-xl md:text-2xl font-bold text-emerald-600">
                          +{formatCurrency(results.delta.takeHome)}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Gross Increase</span>
                        <span className="font-semibold text-emerald-600">+{formatCurrency(results.delta.gross)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-emerald-200">
                        <span className="text-gray-600">Extra Tax</span>
                        <span className="text-red-600">-{formatCurrency(results.delta.tax)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-emerald-200">
                        <span className="text-gray-600">Extra NI</span>
                        <span className="text-red-600">-{formatCurrency(results.delta.ni)}</span>
                      </div>
                      {results.delta.studentLoan > 0 && (
                        <div className="flex justify-between py-2 border-t border-emerald-200">
                          <span className="text-gray-600">Extra Student Loan</span>
                          <span className="text-red-600">-{formatCurrency(results.delta.studentLoan)}</span>
                        </div>
                      )}
                      {results.delta.pension > 0 && (
                        <div className="flex justify-between py-2 border-t border-emerald-200">
                          <span className="text-gray-600">Extra Pension</span>
                          <span className="text-red-600">-{formatCurrency(results.delta.pension)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* After Column */}
                  <div className="bg-green-50 rounded-2xl p-4 md:p-5 border-2 border-green-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">After</h4>
                    <div className="bg-white rounded-xl p-4 mb-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 mb-1">Annual Take-Home</div>
                        <div className="text-xl md:text-2xl font-bold text-green-600">
                          {formatCurrency(results.after.takeHome)}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Gross Salary</span>
                        <span className="font-semibold">{formatCurrency(results.after.gross)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-green-200">
                        <span className="text-gray-600">Income Tax</span>
                        <span className="text-red-600">-{formatCurrency(results.after.tax)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-t border-green-200">
                        <span className="text-gray-600">National Insurance</span>
                        <span className="text-red-600">-{formatCurrency(results.after.ni)}</span>
                      </div>
                      {results.after.studentLoan > 0 && (
                        <div className="flex justify-between py-2 border-t border-green-200">
                          <span className="text-gray-600">Student Loan</span>
                          <span className="text-red-600">-{formatCurrency(results.after.studentLoan)}</span>
                        </div>
                      )}
                      {results.after.pension > 0 && (
                        <div className="flex justify-between py-2 border-t border-green-200">
                          <span className="text-gray-600">Pension</span>
                          <span className="text-red-600">-{formatCurrency(results.after.pension)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Monthly Breakdown Card */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Monthly Breakdown</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm text-gray-600">Before</div>
                      <div className="font-bold text-gray-900">{formatCurrency(results.before.takeHome / 12)}/mo</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Increase</div>
                      <div className="font-bold text-emerald-600">+{formatCurrency(results.delta.takeHome / 12)}/mo</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">After</div>
                      <div className="font-bold text-green-600">{formatCurrency(results.after.takeHome / 12)}/mo</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-12 text-center mb-8">
                <TrendingUp className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                <p className="text-gray-600 text-lg">See how much of your pay rise you&apos;ll actually keep</p>
              </div>
            )}

            {/* Information Cards */}
            <div className="space-y-6">
              {/* How This Calculator Works */}
              <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl md:text-2xl">How This Pay Rise Calculator Works</h3>
                </div>
                <ol className="list-decimal list-outside ml-6 space-y-3 text-gray-700">
                  <li>Calculates your current take-home pay after all deductions</li>
                  <li>Applies your pay rise (percentage or fixed amount)</li>
                  <li>Recalculates take-home pay with the new salary</li>
                  <li>Shows exactly how much extra money you&apos;ll receive</li>
                  <li>Displays the effective tax rate on your raise</li>
                </ol>
              </div>

              {/* Why You Don't Keep 100% */}
              <div className="bg-white rounded-2xl border border-amber-100 shadow-medium p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Info className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl md:text-2xl">Why You Don&apos;t Keep 100% of Your Pay Rise</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    When you receive a pay rise, the additional income is taxed at your <strong>marginal tax rate</strong> - the highest rate you pay. This means:
                  </p>
                  <ul className="list-disc list-outside ml-6 space-y-2">
                    <li><strong>Basic rate taxpayers</strong> keep around 68% of their raise (after 20% tax + 8% NI)</li>
                    <li><strong>Higher rate taxpayers</strong> keep around 58% of their raise (after 40% tax + 2% NI)</li>
                    <li><strong>Additional rate taxpayers</strong> keep around 53% of their raise (after 45% tax + 2% NI)</li>
                    <li><strong>£100k+ earners</strong> may face an effective 60% rate due to personal allowance reduction</li>
                  </ul>
                  <p>
                    Student loan repayments and pension contributions can reduce your take-home even further.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-white rounded-2xl border border-purple-100 shadow-medium p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl md:text-2xl">Disclaimer</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  This calculator provides estimates based on standard UK tax rules for the selected tax year.
                  Individual circumstances may vary. For complex tax situations, please consult a qualified
                  accountant or tax advisor. This tool is for informational purposes only and should not be
                  considered financial advice.
                </p>
              </div>
            </div>

          </div>

          {/* Ad Space Sidebar */}
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
