"use client";
import React, { useState, useEffect, useCallback, lazy, Suspense, useMemo } from 'react';
import { Calculator, PoundSterling, Users, Award, Settings, ChevronRight, Info, CheckCircle, Copy, Share2, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ErrorBoundary from './ErrorBoundary';

// Lazy load the Chatbot component
const Chatbot = lazy(() => import('./Chatbot'));

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
    personalAllowanceReductionThreshold: 100000, // Allowance reduces from this point
    personalAllowanceReductionRate: 0.5, // £1 reduction per £2 earned over threshold
    bands: [
      { threshold: 50270, rate: 0.2 }, // £12,570 + £37,700 = £50,270 (20% on first £37,700 of taxable income)
      { threshold: 125140, rate: 0.4 }, // 40% from £50,271 to £125,140
      { threshold: Infinity, rate: 0.45 } // 45% above £125,140
    ],
    scottishBands: [
      // Scottish bands are calculated as amounts OVER the personal allowance
      { threshold: 15397, rate: 0.19 }, // £12,570 + £2,827 = £15,397 (19% on first £2,827 over PA)
      { threshold: 27491, rate: 0.20 }, // £12,570 + £14,921 = £27,491 (20% from £2,827 to £14,921)
      { threshold: 43662, rate: 0.21 }, // £12,570 + £31,092 = £43,662 (21% from £14,921 to £31,092)
      { threshold: 75000, rate: 0.42 }, // £12,570 + £62,430 = £75,000 (42% from £31,092 to £62,430)
      { threshold: 125140, rate: 0.45 }, // 45% from £62,430 to £125,140
      { threshold: Infinity, rate: 0.48 } // 48% above £125,140
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
  plan1: { threshold: 26065, rate: 0.09 }, // Pre-2012 (England, Wales, Northern Ireland) - 2024/25 threshold
  plan2: { threshold: 28470, rate: 0.09 }, // Post-2012 (England, Wales) - 2024/25 threshold
  plan4: { threshold: 32745, rate: 0.09 }, // Scotland - 2024/25 threshold
  plan5: { threshold: 25000, rate: 0.09 }, // Post-2023 (England, Wales, Northern Ireland) - from Aug 2023, repayments start Apr 2026
  postgrad: { threshold: 21000, rate: 0.06 } // Postgraduate loan - 2024/25 threshold
};

// Optimized CountUp component with memoization
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

// Tax efficiency calculation utility function
const getTaxEfficiency = (takeHome, gross) => {
  const taxRate = ((gross - takeHome) / gross) * 100;
  if (taxRate < 20) return { level: 'excellent', color: 'from-emerald-500 to-green-500', icon: TrendingUp, text: 'Excellent efficiency' };
  if (taxRate < 30) return { level: 'good', color: 'from-blue-500 to-cyan-500', icon: Minus, text: 'Good efficiency' };
  if (taxRate < 40) return { level: 'moderate', color: 'from-amber-500 to-orange-500', icon: Minus, text: 'Moderate efficiency' };
  return { level: 'high', color: 'from-red-500 to-pink-500', icon: TrendingDown, text: 'High tax burden' };
};

// Validates UK tax codes
const validateTaxCode = (code) => {
  if (!code || code.trim() === '') {
    return { valid: true, normalized: '' }; // Empty is valid - use default
  }

  const trimmed = code.trim().toUpperCase();

  // UK tax code regex pattern
  // Supports: Standard (1257L), Flat (BR/D0/D1/NT/0T), K codes, Scottish (S prefix), Welsh (C prefix), Emergency (W1/M1/X suffix)
  const taxCodeRegex = /^([SC]?)((\d{1,4}[LMNTY]?)|BR|D0|D1|NT|0T|K\d{1,4}[LMNTY]?)(\s?(W1|M1|X))?$/;

  const isValid = taxCodeRegex.test(trimmed);

  return {
    valid: isValid,
    normalized: isValid ? trimmed : code
  };
};

// Parses UK tax code and returns tax treatment instructions
const parseTaxCode = (taxCode, taxYear) => {
  // Default: use standard personal allowance with high-earner reduction
  if (!taxCode || taxCode.trim() === '') {
    return {
      type: 'default',
      personalAllowance: null, // Will use TAX_BANDS default
      applyHighEarnerReduction: true,
      isScottish: false,
      isWelsh: false,
      flatRate: null,
      suffix: null
    };
  }

  const code = taxCode.trim().toUpperCase();

  // Remove emergency tax code suffixes (W1, M1, X) - they don't affect annual calculations
  const cleanCode = code.replace(/\s?(W1|M1|X)$/, '');
  const isEmergency = cleanCode !== code;

  // Check for Scottish (S) or Welsh (C) prefix
  const isScottish = cleanCode.startsWith('S');
  const isWelsh = cleanCode.startsWith('C');
  const codeWithoutPrefix = cleanCode.replace(/^[SC]/, '');

  // Handle special flat-rate codes
  if (codeWithoutPrefix === 'BR') {
    return {
      type: 'flat-rate',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      isWelsh,
      flatRate: 0.20, // 20% on all income
      suffix: 'BR'
    };
  }

  if (codeWithoutPrefix === 'D0') {
    return {
      type: 'flat-rate',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      isWelsh,
      flatRate: 0.40, // 40% on all income
      suffix: 'D0'
    };
  }

  if (codeWithoutPrefix === 'D1') {
    return {
      type: 'flat-rate',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      isWelsh,
      flatRate: 0.45, // 45% on all income
      suffix: 'D1'
    };
  }

  if (codeWithoutPrefix === 'NT') {
    return {
      type: 'no-tax',
      personalAllowance: Infinity, // Effectively no tax
      applyHighEarnerReduction: false,
      isScottish,
      isWelsh,
      flatRate: null,
      suffix: 'NT'
    };
  }

  if (codeWithoutPrefix === '0T') {
    return {
      type: 'zero-allowance',
      personalAllowance: 0,
      applyHighEarnerReduction: false,
      isScottish,
      isWelsh,
      flatRate: null,
      suffix: '0T'
    };
  }

  // Handle K codes (negative allowance)
  const kCodeMatch = codeWithoutPrefix.match(/^K(\d{1,4})([LMNTY]?)$/);
  if (kCodeMatch) {
    const kValue = parseInt(kCodeMatch[1], 10);
    const suffix = kCodeMatch[2] || '';
    return {
      type: 'k-code',
      personalAllowance: -(kValue * 10), // Negative allowance adds to taxable income
      applyHighEarnerReduction: false,
      isScottish,
      isWelsh,
      flatRate: null,
      suffix: suffix || 'K',
      kValue: kValue * 10
    };
  }

  // Handle standard numeric codes (e.g., 1257L, 1100T, 1257M, 1257N, etc.)
  const standardCodeMatch = codeWithoutPrefix.match(/^(\d{1,4})([LMNTY]?)$/);
  if (standardCodeMatch) {
    const digits = parseInt(standardCodeMatch[1], 10);
    const suffix = standardCodeMatch[2] || '';

    return {
      type: 'standard',
      personalAllowance: digits * 10,
      applyHighEarnerReduction: false, // Tax code already set by HMRC, don't adjust
      isScottish,
      isWelsh,
      flatRate: null,
      suffix
    };
  }

  // If we can't parse it, fall back to default
  console.warn(`Unable to parse tax code: ${taxCode}, using default`);
  return {
    type: 'default',
    personalAllowance: null,
    applyHighEarnerReduction: true,
    isScottish: false,
    isWelsh: false,
    flatRate: null,
    suffix: null
  };
};

// Tax Calculator component that uses useSearchParams
function TaxCalculatorContent() {
  const [formData, setFormData] = useState({
    income: '',
    period: 'yearly',
    taxYear: '2025/26',
    scottish: false,
    studentLoan: '',
    pension: { type: 'percentage', value: '' },
    bonus: '',
    taxCode: '1257L',
    salarySacrifice: '',
    childcare: '',
    taxableBenefits: ''
  });

  const [results, setResults] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [taxCodeError, setTaxCodeError] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Helper function to format numbers (moved up for URL parsing)
  const formatNumberInput = (value) => {
    if (!value) return '';
    // Remove non-digits and format with commas
    const numericValue = value.toString().replace(/[^\d]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Initialize form data from URL parameters (only once on mount)
  useEffect(() => {
    const income = searchParams.get('income') || '';
    const period = searchParams.get('period') || '';
    const taxYear = searchParams.get('taxYear') || '';
    const scottish = searchParams.get('scottish') === '1';
    const studentLoan = searchParams.get('studentLoan') || '';
    const pensionType = searchParams.get('pensionType') || '';
    const pensionValue = searchParams.get('pensionValue') || '';
    const bonus = searchParams.get('bonus') || '';
    const salarySacrifice = searchParams.get('salarySacrifice') || '';
    const childcare = searchParams.get('childcare') || '';

    // Only update if there are actual URL parameters to avoid overwriting user input
    if (income || bonus || studentLoan || pensionValue || salarySacrifice || childcare || scottish) {
      setFormData(prev => ({
        ...prev,
        ...(income && { income: formatNumberInput(income) }),
        ...(period && { period }),
        ...(taxYear && { taxYear }),
        scottish,
        ...(studentLoan && { studentLoan }),
        ...(pensionType || pensionValue) && { pension: { type: pensionType || prev.pension.type, value: pensionValue } },
        ...(bonus && { bonus: formatNumberInput(bonus) }),
        ...(salarySacrifice && { salarySacrifice: formatNumberInput(salarySacrifice) }),
        ...(childcare && { childcare: formatNumberInput(childcare) }),
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Memoized tax efficiency calculation
  const taxEfficiency = useMemo(() => {
    if (!results) return null;
    const annualTakeHome = results.takeHome * (formData.period === 'yearly' ? 1 : formData.period === 'monthly' ? 12 : 52);
    const annualGross = results.gross * (formData.period === 'yearly' ? 1 : formData.period === 'monthly' ? 12 : 52);
    return getTaxEfficiency(annualTakeHome, annualGross);
  }, [results, formData.period]);

  const calculateTax = useCallback(() => {
    if (!formData.income) {
      setResults(null);
      setIsLoading(false);
      return;
    }

    // Validate income is a positive number
    const incomeValue = parseFloat(formData.income.replace(/,/g, '')) || 0;
    if (incomeValue <= 0) {
      setResults(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    // Use setTimeout to allow UI to update before calculation
    setTimeout(() => {
      let gross = incomeValue;
    let bonus = parseFloat(formData.bonus.replace(/,/g, '')) || 0;
    let benefits = parseFloat(formData.taxableBenefits.replace(/,/g, '')) || 0;
    let childcare = parseFloat(formData.childcare.replace(/,/g, '')) || 0;
    let salarySac = parseFloat(formData.salarySacrifice.replace(/,/g, '')) || 0;
    
    gross += bonus + benefits - childcare - salarySac;

    // Pension calculation (for NI and adjusted net income)
    let pensionDeduct = 0;
    if (formData.pension.value) {
      if (formData.pension.type === 'percentage') {
        let pct = parseFloat(formData.pension.value.replace("%", "")) || 0;
        pensionDeduct = gross * (pct / 100);
      } else {
        pensionDeduct = parseFloat(formData.pension.value.replace(/,/g, '')) || 0;
      }
    }

    // Calculate adjusted net income (gross - pension contributions)
    // This is used for personal allowance reduction calculation
    const adjustedNetIncome = gross - pensionDeduct;

    // Calculate personal allowance (with reduction for high earners)
    // From April 2010: £1 reduction per £2 earned over £100,000
    const taxYearData = TAX_BANDS[formData.taxYear];
    const taxCodeInfo = parseTaxCode(formData.taxCode, formData.taxYear);
    let personalAllowance;

    // Handle different tax code types
    if (taxCodeInfo.type === 'no-tax') {
      // NT code: no tax at all
      personalAllowance = Infinity;
    } else if (taxCodeInfo.personalAllowance !== null) {
      // Tax code specifies exact allowance (can be negative for K codes)
      personalAllowance = taxCodeInfo.personalAllowance;
    } else {
      // Default: use standard allowance
      personalAllowance = taxYearData.personalAllowance;
    }

    // Apply high-earner reduction ONLY if tax code allows it
    if (taxCodeInfo.applyHighEarnerReduction &&
        taxYearData.personalAllowanceReductionThreshold &&
        adjustedNetIncome > taxYearData.personalAllowanceReductionThreshold) {
      const excess = adjustedNetIncome - taxYearData.personalAllowanceReductionThreshold;
      const reduction = excess * taxYearData.personalAllowanceReductionRate;
      personalAllowance = Math.max(0, personalAllowance - reduction);
    }

    // Tax calculation
    // Tax bands represent total income thresholds
    // Tax is calculated on total income above personal allowance
    let tax = 0;

    // Determine which bands to use based on tax code (Scottish prefix overrides checkbox)
    let useScottish = taxCodeInfo.isScottish || (formData.scottish && !taxCodeInfo.isWelsh);
    let bands = useScottish ? TAX_BANDS[formData.taxYear].scottishBands : TAX_BANDS[formData.taxYear].bands;

    // Calculate taxable income (gross minus pension minus personal allowance)
    // Pension contributions reduce taxable income before tax is calculated
    // For K codes, personal allowance is negative, so this adds to gross
    let taxableIncome = Math.max(0, gross - pensionDeduct - personalAllowance);

    // Handle flat-rate tax codes
    if (taxCodeInfo.type === 'flat-rate' && taxCodeInfo.flatRate !== null) {
      // Flat rate codes apply the same rate to ALL income
      tax = gross * taxCodeInfo.flatRate;
    } else if (taxCodeInfo.type === 'no-tax') {
      // NT code: no tax
      tax = 0;
    } else {
      // Progressive tax bands (standard calculation)
      // Tax bands in the data are defined as gross income thresholds (include standard PA of £12,570)
      // We need to convert them to taxable income thresholds by subtracting the standard PA
      const standardPA = taxYearData.personalAllowance; // £12,570
      let prevThreshold = 0;

      for (let i = 0; i < bands.length; i++) {
        let band = bands[i];

        if (taxableIncome <= prevThreshold) break;

        // Convert gross income threshold to taxable income threshold
        let bandStart = prevThreshold;
        let bandEnd = band.threshold - standardPA; // Subtract standard PA to get taxable income threshold
        let incomeInBand = Math.max(0, Math.min(taxableIncome, bandEnd) - bandStart);

        if (incomeInBand > 0) {
          tax += incomeInBand * band.rate;
        }

        prevThreshold = bandEnd;
        if (taxableIncome <= bandEnd) break;
      }
    }
    
    let taxable = Math.max(0, gross - personalAllowance);

    // National Insurance
    let ni = 0;
    let niBands = NI_BANDS[formData.taxYear];
    if (niBands) {
      let niIncome = Math.max(0, gross - niBands.primaryThreshold);
      if (niIncome > 0) {
        let upper = Math.max(0, Math.min(gross, niBands.upperEarnings) - niBands.primaryThreshold);
        ni += upper * niBands.rate;
        if (gross > niBands.upperEarnings) {
          ni += (gross - niBands.upperEarnings) * niBands.upperRate;
        }
      }
    }

    // Student Loan
    let sl = 0;
    if (formData.studentLoan && STUDENT_LOAN[formData.studentLoan]) {
      let slPlan = STUDENT_LOAN[formData.studentLoan];
      let slIncome = Math.max(0, gross - slPlan.threshold);
      sl = slIncome * slPlan.rate;
    }

    let takeHome = gross - tax - ni - sl - pensionDeduct;

    let divisor = 1;
    if (formData.period === "monthly") divisor = 12;
    if (formData.period === "weekly") divisor = 52;
    if (formData.period === "daily") divisor = 260;

      setResults({
        gross: gross / divisor,
        tax: tax / divisor,
        ni: ni / divisor,
        studentLoan: sl / divisor,
        takeHome: takeHome / divisor,
        pension: pensionDeduct / divisor
      });
      setIsLoading(false);
    }, 100);
  }, [formData]);

  useEffect(() => {
    calculateTax();
  }, [formData, calculateTax]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount || 0);
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNumberInput = (field, value) => {
    const formatted = formatNumberInput(value);
    updateFormData(field, formatted);
  };

  const handleTaxCodeChange = (value) => {
    updateFormData('taxCode', value);

    // Validate on blur or when user types
    const validation = validateTaxCode(value);
    if (!validation.valid && value.trim() !== '') {
      setTaxCodeError("This doesn't look like a valid tax code — check your payslip or leave blank.");
    } else {
      setTaxCodeError('');
      // Update with normalized version if valid
      if (validation.valid && value.trim() !== '') {
        updateFormData('taxCode', validation.normalized);
      }
    }
  };

  // Helper to build shareable URL
  const getShareUrl = () => {
    const params = new URLSearchParams({
      income: formData.income,
      period: formData.period,
      taxYear: formData.taxYear,
      bonus: formData.bonus,
      scottish: formData.scottish ? '1' : '',
      studentLoan: formData.studentLoan || '',
      pensionType: formData.pension?.type || '',
      pensionValue: formData.pension?.value || '',
      salarySacrifice: formData.salarySacrifice || '',
      childcare: formData.childcare || ''
    });
    return `${window.location.origin}?${params.toString()}`;
  };

  // Copy link handler
  const handleCopyLink = () => {
    const url = getShareUrl();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-72 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="w-full bg-[#1566a0] bg-gradient-to-r from-[#1566a0] to-[#1e90c6] shadow-lg flex flex-wrap items-center px-4 md:px-8 py-4 md:py-6 gap-4 md:gap-8">
        <Image 
          src="/opengraph-image.png" 
          alt="SalaryTakeHome Logo" 
          width={64} 
          height={64} 
          className="h-12 md:h-16 w-auto rounded-lg shadow-md flex-shrink-0" 
          priority
        />
        <div className="flex-1 min-w-0">
          <h1 className="text-xl md:text-3xl font-bold text-white whitespace-normal break-words">UK Tax Calculator</h1>
          <p className="text-white text-sm md:text-lg whitespace-normal break-words">Calculate your income tax and take-home pay</p>
        </div>
      </header>

      <main id="main-content">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-4 md:px-8 py-8">
          <div className="flex-1 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-5">
            {/* Tax Code and Scottish Taxpayer Card */}
            <div className="relative overflow-hidden bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/15"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  Your Details
                </h2>

                <div className="space-y-5">
                  {/* Tax Code Input */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Your tax code (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.taxCode}
                      onChange={(e) => handleTaxCodeChange(e.target.value)}
                      onBlur={(e) => handleTaxCodeChange(e.target.value)}
                      placeholder="e.g., 1257L"
                      className={`w-full px-4 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-blue-500 text-lg font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95 ${
                        taxCodeError
                          ? 'border-red-300 focus:border-red-400'
                          : 'border-gray-200/50 focus:border-blue-400'
                      }`}
                      aria-label="Tax code"
                      aria-invalid={!!taxCodeError}
                      aria-describedby={taxCodeError ? "tax-code-error" : undefined}
                    />
                    {taxCodeError && (
                      <p id="tax-code-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <Info className="w-4 h-4" />
                        {taxCodeError}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-gray-500">
                      Find this on your payslip. Leave blank to use the standard allowance.
                    </p>
                  </div>

                  {/* Scottish Taxpayer Checkbox */}
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.scottish}
                        onChange={(e) => updateFormData('scottish', e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2 transition-all duration-200"
                      />
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-200">
                        I&apos;m a Scottish taxpayer
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Income Card */}
            <div className="relative overflow-hidden bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-transparent to-emerald-50/15"></div>
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <PoundSterling className="w-5 h-5 text-white" />
                  </div>
                  Your Income
                </h2>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Annual salary
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                      <input
                        type="text"
                        value={formData.income}
                        onChange={(e) => handleNumberInput('income', e.target.value)}
                        placeholder="50,000"
                        className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                        aria-label="Annual salary"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Period</label>
                      <select
                        value={formData.period}
                        onChange={(e) => updateFormData('period', e.target.value)}
                        className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                      >
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                        <option value="weekly">Weekly</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Tax year</label>
                      <select
                        value={formData.taxYear}
                        onChange={(e) => updateFormData('taxYear', e.target.value)}
                        className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                      >
                        {TAX_YEARS.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Bonus (optional)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">£</span>
                        <input
                          type="text"
                          value={formData.bonus}
                          onChange={(e) => handleNumberInput('bonus', e.target.value)}
                          placeholder="5,000"
                          className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Advanced Options Card */}
            <div className="relative overflow-hidden bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-pink-50/15"></div>
              <div className="relative z-10">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3 group-hover:text-blue-700 transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center hover-scale transition-transform duration-200">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    Advanced Options
                  </h2>
                  <ChevronRight className={`w-6 h-6 text-gray-400 transition-all duration-200 group-hover:text-blue-500 ${showAdvanced ? 'rotate-90' : ''}`} />
                </button>
                
                {showAdvanced && (
                  <div className="mt-8 space-y-5 animate-fade-in-slide">
                    {/* Student Loan */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Student loan plan</label>
                      <select
                        value={formData.studentLoan}
                        onChange={(e) => updateFormData('studentLoan', e.target.value)}
                        className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                      >
                        <option value="">No student loan</option>
                        <option value="plan1">Plan 1 (Pre-2012)</option>
                        <option value="plan2">Plan 2 (Post-2012 to 2023)</option>
                        <option value="plan4">Plan 4 (Scotland)</option>
                        <option value="plan5">Plan 5 (Post-2023)</option>
                        <option value="postgrad">Postgraduate loan</option>
                      </select>
                    </div>

                    {/* Pension */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Pension contributions</label>
                      <div className="flex gap-3 mb-4">
                        <button
                          onClick={() => updateFormData('pension', { ...formData.pension, type: 'percentage' })}
                          className={`px-6 py-3 rounded-2xl border-2 transition-all duration-200 font-semibold hover-scale ${
                            formData.pension.type === 'percentage' 
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium' 
                              : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200 hover:bg-white/95'
                          }`}
                        >
                          Percentage
                        </button>
                        <button
                          onClick={() => updateFormData('pension', { ...formData.pension, type: 'amount' })}
                          className={`px-6 py-3 rounded-2xl border-2 transition-all duration-200 font-semibold hover-scale ${
                            formData.pension.type === 'amount' 
                              ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-blue-500 shadow-medium' 
                              : 'bg-white/80 text-gray-700 border-gray-200/50 hover:border-blue-200 hover:bg-white/95'
                          }`}
                        >
                          Amount
                        </button>
                      </div>
                      <input
                        type="text"
                        value={formData.pension.value}
                        onChange={(e) => {
                          if (formData.pension.type === 'percentage') {
                            updateFormData('pension', { ...formData.pension, value: e.target.value });
                          } else {
                            const formatted = formatNumberInput(e.target.value);
                            updateFormData('pension', { ...formData.pension, value: formatted });
                          }
                        }}
                        placeholder={formData.pension.type === 'percentage' ? '5%' : '200'}
                        className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                      />
                    </div>

                    {/* Additional fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Salary sacrifice</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">£</span>
                          <input
                            type="text"
                            value={formData.salarySacrifice}
                            onChange={(e) => handleNumberInput('salarySacrifice', e.target.value)}
                            placeholder="1,000"
                            className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Childcare vouchers</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">£</span>
                          <input
                            type="text"
                            value={formData.childcare}
                            onChange={(e) => handleNumberInput('childcare', e.target.value)}
                            placeholder="500"
                            className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3">Taxable benefits</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">£</span>
                        <input
                          type="text"
                          value={formData.taxableBenefits}
                          onChange={(e) => handleNumberInput('taxableBenefits', e.target.value)}
                          placeholder="2,000"
                          className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200 hover:bg-white/95"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {isLoading ? (
                <div className="relative overflow-hidden bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                  <div className="animate-pulse space-y-5">
                    <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl"></div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/6"></div>
                    </div>
                  </div>
                </div>
              ) : results ? (
                <div
                  className={`relative overflow-hidden bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6 transition-all duration-500 ease-out animate-fade-in-slide`}
                  key={formData.income + formData.period + formData.taxYear + formData.bonus + formData.taxCode}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
                  }}
                >
                  {/* Simplified background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-green-50/20"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-xl font-bold text-gray-900">Your Results</h3>
                      {(() => {
                        const efficiency = taxEfficiency;
                        const IconComponent = efficiency?.icon;
                        return (
                          <div className="flex items-center gap-2 text-sm">
                            <IconComponent className="w-4 h-4" />
                            <span className="font-medium">{efficiency?.text}</span>
                          </div>
                        );
                      })()}
                    </div>
                    
                    {/* Optimized Take Home Pay Card */}
                    {(() => {
                      const efficiency = taxEfficiency;
                      return (
                        <div className={`bg-gradient-to-r ${efficiency?.color} rounded-2xl p-6 text-white mb-6 relative overflow-hidden shadow-medium`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                          <div className="relative z-10">
                            <div className="text-sm opacity-90 mb-2 font-medium">Take-home pay</div>
                            <div className="text-4xl font-bold mb-2">
                              <CountUp end={Math.round(results.takeHome)} />
                            </div>
                            <div className="text-sm opacity-90 mb-1">per {formData.period.replace('ly', '')}</div>
                            {formData.period === 'yearly' && (
                              <div className="text-sm opacity-90">
                                <CountUp end={Math.round(results.takeHome / 12)} /> 
                                <span className="font-normal ml-1">per month</span>
                              </div>
                            )}
                          
                          {/* Simplified sparkles */}
                          <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Optimized Breakdown with Progress Bars */}
                    <div className="space-y-5">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Gross income</span>
                        <span className="font-bold text-lg text-gray-900">
                          <CountUp end={Math.round(results.gross)} />
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="text-sm font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          Deductions Breakdown
                        </div>
                        
                        {results.tax > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 text-sm">Income tax</span>
                              <span className="text-red-600 font-semibold">
                                -<CountUp end={Math.round(results.tax)} />
                              </span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full transition-all duration-800 ease-out progress-bar"
                                style={{ width: `${Math.min((results.tax / results.gross) * 100, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {results.ni > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 text-sm">National Insurance</span>
                              <span className="text-orange-600 font-semibold">
                                -<CountUp end={Math.round(results.ni)} />
                              </span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-800 ease-out progress-bar"
                                style={{ width: `${Math.min((results.ni / results.gross) * 100, 100)}%`, animationDelay: '0.2s' }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {results.studentLoan > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 text-sm">Student loan</span>
                              <span className="text-purple-600 font-semibold">
                                -<CountUp end={Math.round(results.studentLoan)} />
                              </span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full transition-all duration-800 ease-out progress-bar"
                                style={{ width: `${Math.min((results.studentLoan / results.gross) * 100, 100)}%`, animationDelay: '0.4s' }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        {results.pension > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600 text-sm">Pension</span>
                              <span className="text-blue-600 font-semibold">
                                -<CountUp end={Math.round(results.pension)} />
                              </span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-800 ease-out progress-bar"
                                style={{ width: `${Math.min((results.pension / results.gross) * 100, 100)}%`, animationDelay: '0.6s' }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Optimized Social Sharing */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                          {/* Social Icons */}
                          <a
                            href={`https://twitter.com/intent/tweet?text=My%20UK%20take-home%20pay%20is%20${encodeURIComponent(formatCurrency(results.takeHome * (formData.period === 'yearly' ? 1 : formData.period === 'monthly' ? 12 : formData.period === 'weekly' ? 52 : 1)))}%2Fyear%20on%20a%20${encodeURIComponent(formatCurrency(parseFloat(formData.income.replace(/,/g, ''))))}%20salary!%20Calculate%20yours%20at%20https://salarytakehome.co.uk`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center hover:bg-blue-50 text-black w-10 h-10 transition duration-200 ease-in-out hover-scale focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                            aria-label="Share on X"
                            title="Share on X"
                          >
                            <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.89 10.5h2.67l-5.82 6.66 6.86 8.34h-5.41l-4.23-5.13-4.84 5.13H7.35l6.19-7.01-6.56-7.99h5.52l3.77 4.57 4.62-4.57zm-1.01 12.13h1.48l-4.7-5.7-1.67 1.89 4.89 5.81z" fill="black"/>
                            </svg>
                          </a>
                          
                          <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://salarytakehome.co.uk&summary=My%20UK%20take-home%20pay%20is%20${encodeURIComponent(formatCurrency(results.takeHome * (formData.period === 'yearly' ? 1 : formData.period === 'monthly' ? 12 : formData.period === 'weekly' ? 52 : 1)))}%2Fyear%20on%20a%20${encodeURIComponent(formatCurrency(parseFloat(formData.income.replace(/,/g, ''))))}%20salary!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center hover:bg-blue-50 text-[#0077b5] w-10 h-10 transition duration-200 ease-in-out hover-scale focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                            aria-label="Share on LinkedIn"
                            title="Share on LinkedIn"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                          </a>
                          
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=https://salarytakehome.co.uk&quote=My%20UK%20take-home%20pay%20is%20${encodeURIComponent(formatCurrency(results.takeHome * (formData.period === 'yearly' ? 1 : formData.period === 'monthly' ? 12 : formData.period === 'weekly' ? 52 : 1)))}%2Fyear%20on%20a%20${encodeURIComponent(formatCurrency(parseFloat(formData.income.replace(/,/g, ''))))}%20salary!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center hover:bg-blue-50 text-[#4267B2] w-10 h-10 transition duration-200 ease-in-out hover-scale focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                            aria-label="Share on Facebook"
                            title="Share on Facebook"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.592 1.323-1.324v-21.35c0-.733-.593-1.325-1.326-1.325z"/></svg>
                          </a>
                          
                          <div className="w-px h-6 bg-gray-200 mx-2"></div>
                          
                          <button
                            onClick={handleCopyLink}
                            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 relative hover-scale"
                            aria-label="Share results"
                            type="button"
                          >
                            <Share2 className="w-4 h-4" />
                            Share
                            {copied && (
                              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs rounded px-2 py-1 shadow-lg animate-fade-in-slide z-20">Copied!</span>
                            )}
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Share your calculation or copy the link to revisit later</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative overflow-hidden bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
                }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/15 via-transparent to-purple-50/15"></div>
                  <div className="relative z-10 text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                      <Calculator className="w-8 h-8 text-gray-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Enter your income</h3>
                    <p className="text-gray-600 leading-relaxed">Fill in your details to see your tax calculation with beautiful visualizations</p>
                  </div>
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

        {/* Optimized Information Cards */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-4 md:px-8 mt-10">
          <div className="flex-1 max-w-6xl">
            <div className="grid md:grid-cols-1 gap-6">
          <div className="relative group overflow-hidden bg-gradient-to-br from-blue-50/90 to-blue-100/70 backdrop-blur-light rounded-3xl p-6 border border-blue-200/30 hover:border-blue-300/50 transition-all duration-200 hover-scale shadow-medium">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-medium hover-scale transition-transform duration-200">
                <Info className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">How it works</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Disclaimer: Information provided on this site is for illustrative purposes only.<br/><br/>
              Don&apos;t make any major financial decisions without consulting a qualified specialist.</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden bg-gradient-to-br from-emerald-50/90 to-green-100/70 backdrop-blur-light rounded-3xl p-6 border border-emerald-200/30 hover:border-emerald-300/50 transition-all duration-200 hover-scale shadow-medium">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-medium hover-scale transition-transform duration-200">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Free to use</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Calculate your tax liability and take-home pay completely free, with no hidden costs.</p>
            </div>
          </div>
          
          <div className="relative group overflow-hidden bg-gradient-to-br from-purple-50/90 to-purple-100/70 backdrop-blur-light rounded-3xl p-6 border border-purple-200/30 hover:border-purple-300/50 transition-all duration-200 hover-scale shadow-medium">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-medium hover-scale transition-transform duration-200">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Expert support</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Get help from our AI assistant or browse our comprehensive FAQ section.</p>
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

        {/* Beautiful Navigation Buttons - Back at bottom with original layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
          {/* Blog Link */}
          <a 
            href="/blog" 
            className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl font-semibold transition-all duration-200 hover-scale focus:outline-none focus:ring-4 focus:ring-emerald-300/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            <div className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Tax Tips & Guides
            </div>
          </a>
          
          {/* FAQ Link */}
          <a 
            href="/faq" 
            className="group relative overflow-hidden bg-gradient-to-r from-[#1566a0] to-[#1e90c6] hover:from-[#1e90c6] hover:to-[#1566a0] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl font-semibold transition-all duration-200 hover-scale focus:outline-none focus:ring-4 focus:ring-blue-300/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            <div className="relative z-10 flex items-center gap-2">
              <Info className="w-4 h-4" />
              FAQ & Tax Help
            </div>
          </a>
        </div>
      </main>
      
      {/* Lazy loaded Chatbot with fallback */}
      <Suspense fallback={null}>
        <Chatbot context={{ formData, results }} />
      </Suspense>
      
      <footer className="mt-12 border-t pt-8 pb-6 text-center text-gray-500 text-sm">
        <div>© 2025 SalaryTakeHome.co.uk. All rights reserved.</div>
        <div className="mt-2">
          Privacy: This site does not collect or store any personal data. All calculations are done anonymously in your browser.
        </div>
      </footer>
    </div>
  );
}

// Main component wrapped in Suspense and ErrorBoundary
import LayoutWrapper from './components/LayoutWrapper';

export default function TaxCalculator() {
  return (
    <ErrorBoundary>
      <LayoutWrapper>
        <Suspense fallback={
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-600">Loading calculator...</p>
            </div>
          </div>
        }>
          <TaxCalculatorContent />
        </Suspense>
      </LayoutWrapper>
    </ErrorBoundary>
  );
}
