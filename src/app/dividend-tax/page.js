"use client";
import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  PieChart,
  PoundSterling,
  TrendingUp,
  AlertTriangle,
  HelpCircle,
  ChevronRight,
  Calculator,
  Building,
  Info,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  BarChart3,
  Briefcase,
  Shield,
  FileText,
  Scale,
  Share2
} from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

// Tax data per year
const TAX_YEARS = ["2026/27", "2025/26", "2024/25", "2023/24", "2022/23", "2021/22"];

const TAX_DATA = {
  "2021/22": {
    personalAllowance: 12570,
    basicRateLimit: 50270,
    higherRateLimit: 150000,
    dividendAllowance: 2000,
    dividendRates: { basic: 0.075, higher: 0.325, additional: 0.381 },
    paReductionThreshold: 100000,
  },
  "2022/23": {
    personalAllowance: 12570,
    basicRateLimit: 50270,
    higherRateLimit: 150000,
    dividendAllowance: 2000,
    dividendRates: { basic: 0.0875, higher: 0.3375, additional: 0.3935 },
    paReductionThreshold: 100000,
  },
  "2023/24": {
    personalAllowance: 12570,
    basicRateLimit: 50270,
    higherRateLimit: 125140,
    dividendAllowance: 1000,
    dividendRates: { basic: 0.0875, higher: 0.3375, additional: 0.3935 },
    paReductionThreshold: 100000,
  },
  "2024/25": {
    personalAllowance: 12570,
    basicRateLimit: 50270,
    higherRateLimit: 125140,
    dividendAllowance: 500,
    dividendRates: { basic: 0.0875, higher: 0.3375, additional: 0.3935 },
    paReductionThreshold: 100000,
  },
  "2025/26": {
    personalAllowance: 12570,
    basicRateLimit: 50270,
    higherRateLimit: 125140,
    dividendAllowance: 500,
    dividendRates: { basic: 0.0875, higher: 0.3375, additional: 0.3935 },
    paReductionThreshold: 100000,
  },
  "2026/27": {
    personalAllowance: 12570,
    basicRateLimit: 50270,
    higherRateLimit: 125140,
    dividendAllowance: 500,
    // Autumn Budget 2025: basic and higher dividend rates increased by 2pp from April 2026. Additional rate unchanged.
    dividendRates: { basic: 0.1075, higher: 0.3575, additional: 0.3935 },
    paReductionThreshold: 100000,
  },
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const formatCurrencyWhole = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const formatNumberInput = (value) => {
  if (!value) return '';
  const numericValue = value.toString().replace(/[^\d]/g, '');
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const parseNumberInput = (value) => {
  if (!value) return 0;
  return parseInt(value.replace(/[^\d]/g, ''), 10) || 0;
};

// Calculate dividend tax
function calculateDividendTax(salary, dividends, taxYear) {
  const data = TAX_DATA[taxYear];
  if (!data) return null;

  const totalIncome = salary + dividends;

  // Calculate effective personal allowance (tapered above £100k)
  let personalAllowance = data.personalAllowance;
  if (totalIncome > data.paReductionThreshold) {
    const reduction = Math.floor((totalIncome - data.paReductionThreshold) / 2);
    personalAllowance = Math.max(0, personalAllowance - reduction);
  }

  // Salary uses personal allowance first
  const salaryAfterPA = Math.max(0, salary - personalAllowance);
  const unusedPA = Math.max(0, personalAllowance - salary);

  // Dividends sheltered by any remaining PA
  const dividendsAfterPA = Math.max(0, dividends - unusedPA);

  // Dividend allowance applies to dividends after PA
  const dividendAllowanceUsed = Math.min(data.dividendAllowance, dividendsAfterPA);
  const taxableDividends = Math.max(0, dividendsAfterPA - dividendAllowanceUsed);

  // Determine where dividends sit in the tax bands
  // Dividends are the "top slice" — they sit on top of salary
  // But the band position is based on total taxable income before dividends
  const salaryBandPosition = salaryAfterPA; // Where salary ends in the bands
  // Dividend allowance still uses up band space
  const dividendStartPosition = salaryBandPosition + dividendAllowanceUsed;

  const basicBandRemaining = Math.max(0, (data.basicRateLimit - data.personalAllowance) - dividendStartPosition);
  // For tapered PA, adjust the band calculation
  const effectiveBasicLimit = data.basicRateLimit - personalAllowance;
  const effectiveHigherLimit = data.higherRateLimit - personalAllowance;

  const basicBandAvailable = Math.max(0, effectiveBasicLimit - salaryAfterPA - dividendAllowanceUsed);
  const higherBandAvailable = Math.max(0, effectiveHigherLimit - salaryAfterPA - dividendAllowanceUsed - basicBandAvailable);

  const dividendsAtBasic = Math.min(taxableDividends, basicBandAvailable);
  const dividendsAtHigher = Math.min(Math.max(0, taxableDividends - dividendsAtBasic), higherBandAvailable);
  const dividendsAtAdditional = Math.max(0, taxableDividends - dividendsAtBasic - dividendsAtHigher);

  const taxAtBasic = dividendsAtBasic * data.dividendRates.basic;
  const taxAtHigher = dividendsAtHigher * data.dividendRates.higher;
  const taxAtAdditional = dividendsAtAdditional * data.dividendRates.additional;

  const totalDividendTax = taxAtBasic + taxAtHigher + taxAtAdditional;
  const effectiveRate = dividends > 0 ? (totalDividendTax / dividends) * 100 : 0;

  return {
    totalIncome,
    personalAllowance,
    dividendAllowance: data.dividendAllowance,
    dividendAllowanceUsed,
    taxableDividends,
    dividendsAfterPA: dividendsAfterPA,
    dividendsCoveredByPA: Math.min(unusedPA, dividends),
    dividendsAtBasic,
    dividendsAtHigher,
    dividendsAtAdditional,
    taxAtBasic,
    taxAtHigher,
    taxAtAdditional,
    totalDividendTax,
    effectiveRate,
    dividendRates: data.dividendRates,
    netDividends: dividends - totalDividendTax,
  };
}

function DividendTaxCalculatorInner() {
  const searchParams = useSearchParams();
  const [salaryInput, setSalaryInput] = useState('');
  const [dividendInput, setDividendInput] = useState('');
  const [taxYear, setTaxYear] = useState('2026/27');
  const [copied, setCopied] = useState(false);

  // Read URL query params on mount
  useEffect(() => {
    const s = searchParams.get('salary');
    const d = searchParams.get('dividends');
    const y = searchParams.get('year');
    if (s) setSalaryInput(formatNumberInput(s));
    if (d) setDividendInput(formatNumberInput(d));
    if (y && TAX_YEARS.includes(y)) setTaxYear(y);
  }, [searchParams]);

  const salary = parseNumberInput(salaryInput);
  const dividends = parseNumberInput(dividendInput);

  const shareUrl = typeof window !== 'undefined' && salary + dividends > 0
    ? `${window.location.origin}/dividend-tax?salary=${salary}&dividends=${dividends}&year=${encodeURIComponent(taxYear)}`
    : '';

  const handleShare = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
    }
  };

  const result = useMemo(() => {
    if (dividends <= 0) return null;
    return calculateDividendTax(salary, dividends, taxYear);
  }, [salary, dividends, taxYear]);

  const data = TAX_DATA[taxYear];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much tax do I pay on dividends in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For 2026/27, you get a £500 tax-free dividend allowance. After that, dividend tax rates depend on your income tax band: 10.75% (basic rate), 35.75% (higher rate), or 39.35% (additional rate). The basic and higher rates increased by 2 percentage points from 6 April 2026 (announced at Autumn Budget 2025). Dividends are treated as the top slice of your income, sitting above your salary."
            }
          },
          {
            "@type": "Question",
            "name": "What is the dividend allowance for 2026/27?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The dividend allowance for 2026/27 is £500 — unchanged from 2025/26. This means the first £500 of dividend income is tax-free. The allowance was reduced from £1,000 in 2023/24 and £2,000 in 2022/23."
            }
          },
          {
            "@type": "Question",
            "name": "Do dividends count towards my tax band?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Dividends are added on top of your other income to determine which tax band they fall in. For example, if your salary is £45,000, dividends above the £500 allowance that push you past £50,270 are taxed at the higher rate of 33.75%."
            }
          },
          {
            "@type": "Question",
            "name": "How are dividends taxed for Ltd company directors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ltd company directors typically pay themselves a small salary (often around £12,570) and take the rest as dividends to reduce National Insurance costs. Dividends don't attract NI, but are still subject to income tax at 8.75%, 33.75%, or 39.35% depending on total income."
            }
          },
          {
            "@type": "Question",
            "name": "Do Scottish taxpayers pay different dividend tax rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Dividend tax rates are set by the UK government and are the same across the whole UK. Scottish income tax rates only apply to non-savings, non-dividend income (salary, pension, rental income). All UK taxpayers pay 8.75%, 33.75%, or 39.35% on dividends."
            }
          },
          {
            "@type": "Question",
            "name": "What happens to dividend tax if I earn over £100,000?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your total income (salary plus dividends) exceeds £100,000, your Personal Allowance is reduced by £1 for every £2 over £100,000. This means more of your income becomes taxable, and dividends that would otherwise fall in a lower band may be pushed into a higher rate."
            }
          },
          {
            "@type": "Question",
            "name": "How did dividend tax rates change over recent years?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In April 2022, dividend rates rose by 1.25 percentage points (from 7.5% to 8.75% basic, 32.5% to 33.75% higher, 38.1% to 39.35% additional). The dividend allowance was halved from £2,000 to £1,000 in April 2023, then halved again to £500 in April 2024."
            }
          }
        ]
      },
      {
        "@type": "WebApplication",
        "name": "UK Dividend Tax Calculator",
        "url": "https://www.salarytakehome.co.uk/dividend-tax",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        },
        "description": "Free UK dividend tax calculator. Enter your salary and dividend income to see how much tax you'll pay, with full breakdown by tax band."
      }
    ]
  };

  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Dividend Tax Calculator" }]} fullWidth>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="relative mx-auto px-4 md:px-8 py-10">
          <div className="hidden xl:block absolute right-8 top-8 w-[160px]">
            <div className="sticky top-8">
              <AdUnit slot="4603525459" hideOnMobile />
              <AdUnit slot="9534353704" hideOnMobile />
            </div>
          </div>
          <div className="flex-1 xl:pr-[192px]">

            <AdUnit slot="1586479879" hideOnMobile />
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-medium">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                UK Dividend Tax Calculator
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Enter your salary and dividends to see exactly how much dividend tax you&apos;ll pay
              </p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: April 2026 · Reflects 2026/27 tax year
              </p>
            </div>

            {/* Calculator Card */}
            <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 md:p-8 mb-8 max-w-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                Your Income Details
              </h2>

              {/* Tax Year Selector */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tax Year</label>
                <div className="flex flex-wrap gap-2">
                  {TAX_YEARS.map(year => (
                    <button
                      key={year}
                      onClick={() => setTaxYear(year)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        taxYear === year
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Salary Input */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Salary (Employment Income)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">£</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={salaryInput}
                    onChange={(e) => setSalaryInput(formatNumberInput(e.target.value))}
                    placeholder="e.g. 12,570"
                    className="w-full pl-8 pr-4 py-3.5 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Your gross annual salary before tax. Enter 0 if you have no employment income.</p>
              </div>

              {/* Dividend Input */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Dividend Income
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">£</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={dividendInput}
                    onChange={(e) => setDividendInput(formatNumberInput(e.target.value))}
                    placeholder="e.g. 30,000"
                    className="w-full pl-8 pr-4 py-3.5 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Total dividends you expect to receive in the tax year.</p>
              </div>

              {/* Quick Presets */}
              <div className="mb-2">
                <p className="text-xs font-semibold text-gray-500 mb-2">Common scenarios:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Ltd Director (Low Salary)", salary: "12,570", dividends: "30,000" },
                    { label: "Ltd Director (High)", salary: "12,570", dividends: "60,000" },
                    { label: "Employed + Shares", salary: "45,000", dividends: "5,000" },
                    { label: "High Earner + Dividends", salary: "80,000", dividends: "20,000" },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => { setSalaryInput(preset.salary); setDividendInput(preset.dividends); }}
                      className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-semibold hover:bg-emerald-100 transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <AdUnit showScrollHint />

            {/* Results Section */}
            {result && (
              <div className="relative">
                <div className="hidden xl:block absolute right-[-184px] top-0 w-[160px]">
                  <AdUnit slot="1315738286" hideOnMobile />
                </div>
                <div className="space-y-6 mb-10">
                {/* Hero Result Card */}
                <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-xl p-6 md:p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <PieChart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm font-medium">Total Dividend Tax</p>
                      <h2 className="text-3xl md:text-4xl font-bold">{formatCurrency(result.totalDividendTax)}</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white/10 rounded-xl p-3">
                      <p className="text-emerald-200 text-xs font-medium">Net Dividends</p>
                      <p className="text-xl font-bold">{formatCurrency(result.netDividends)}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3">
                      <p className="text-emerald-200 text-xs font-medium">Effective Rate</p>
                      <p className="text-xl font-bold">{result.effectiveRate.toFixed(1)}%</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3">
                      <p className="text-emerald-200 text-xs font-medium">Total Income</p>
                      <p className="text-xl font-bold">{formatCurrencyWhole(result.totalIncome)}</p>
                    </div>
                  </div>
                </div>

                {/* Breakdown Cards */}
                <div className="grid lg:grid-cols-2 gap-4">
                  {/* How Your Dividends Are Taxed */}
                  <div className="bg-white rounded-2xl border border-emerald-100 shadow-medium p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Dividend Tax Breakdown</h3>
                    </div>
                    <div className="space-y-3">
                      {result.dividendsCoveredByPA > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">Covered by Personal Allowance</span>
                          <span className="text-sm font-semibold text-green-600">{formatCurrencyWhole(result.dividendsCoveredByPA)} @ 0%</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Dividend Allowance</span>
                        <span className="text-sm font-semibold text-green-600">{formatCurrencyWhole(result.dividendAllowanceUsed)} @ 0%</span>
                      </div>
                      {result.dividendsAtBasic > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">Basic rate ({(result.dividendRates.basic * 100).toFixed(2)}%)</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold text-gray-900">{formatCurrency(result.taxAtBasic)}</span>
                            <p className="text-xs text-gray-500">on {formatCurrencyWhole(result.dividendsAtBasic)}</p>
                          </div>
                        </div>
                      )}
                      {result.dividendsAtHigher > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">Higher rate ({(result.dividendRates.higher * 100).toFixed(2)}%)</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold text-gray-900">{formatCurrency(result.taxAtHigher)}</span>
                            <p className="text-xs text-gray-500">on {formatCurrencyWhole(result.dividendsAtHigher)}</p>
                          </div>
                        </div>
                      )}
                      {result.dividendsAtAdditional > 0 && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-sm text-gray-600">Additional rate ({(result.dividendRates.additional * 100).toFixed(2)}%)</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold text-gray-900">{formatCurrency(result.taxAtAdditional)}</span>
                            <p className="text-xs text-gray-500">on {formatCurrencyWhole(result.dividendsAtAdditional)}</p>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-2 font-bold">
                        <span className="text-gray-900">Total Dividend Tax</span>
                        <span className="text-emerald-700">{formatCurrency(result.totalDividendTax)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Details Card */}
                  <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <Info className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Key Details</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Personal Allowance</span>
                        <span className="text-sm font-semibold text-gray-900">{formatCurrencyWhole(result.personalAllowance)}</span>
                      </div>
                      {result.personalAllowance < 12570 && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-amber-700">
                            Your Personal Allowance is reduced because your total income exceeds £100,000. You lose £1 of allowance for every £2 over £100,000.
                          </p>
                        </div>
                      )}
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Dividend Allowance ({taxYear})</span>
                        <span className="text-sm font-semibold text-gray-900">{formatCurrencyWhole(result.dividendAllowance)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Taxable Dividends</span>
                        <span className="text-sm font-semibold text-gray-900">{formatCurrencyWhole(result.taxableDividends)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600">Net Dividends (After Tax)</span>
                        <span className="text-sm font-semibold text-emerald-700">{formatCurrency(result.netDividends)}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-600">Effective Dividend Tax Rate</span>
                        <span className="text-sm font-semibold text-gray-900">{result.effectiveRate.toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Button */}
                {shareUrl && (
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                  >
                    <Share2 className="w-4 h-4" />
                    {copied ? 'Link copied!' : 'Share these results'}
                  </button>
                )}

                {/* CTA to Take Home Pay Calculator */}
                <a
                  href="/take-home-pay-calculator"
                  className="block bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg mb-1">Calculate Your Full Take-Home Pay</p>
                      <p className="text-blue-100 text-sm">See your complete salary breakdown including income tax, National Insurance, student loans, and pension deductions.</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!result && (
              <div className="bg-white/80 backdrop-blur-light rounded-3xl border-2 border-dashed border-gray-200 p-8 md:p-12 text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <PieChart className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Enter your dividend income above</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Type your annual salary and expected dividend income to see a full tax breakdown. Your dividends are taxed based on where they fall in your income tax bands.
                </p>
              </div>
            )}

            {/* Educational Cards Section */}
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-6">

                {/* How Dividend Tax Works */}
                <div className="bg-white rounded-2xl border border-emerald-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">How Dividend Tax Works in the UK</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Dividends are taxed differently from salary. They don&apos;t attract National Insurance, which is why many Ltd company directors pay themselves via dividends. Here&apos;s how it works:
                  </p>
                  <ol className="list-decimal list-outside ml-6 space-y-2 text-gray-700 text-sm mb-4">
                    <li><strong>Personal Allowance first</strong> — any unused Personal Allowance shelters your dividends from tax entirely</li>
                    <li><strong>Dividend allowance</strong> — the first {formatCurrencyWhole(data.dividendAllowance)} of dividends above your PA is tax-free</li>
                    <li><strong>Top-slice rule</strong> — dividends sit on top of your salary, so the rate depends on your total income</li>
                    <li><strong>Tax band rates apply</strong> — dividends in the basic band pay {(data.dividendRates.basic * 100).toFixed(2)}%, higher band {(data.dividendRates.higher * 100).toFixed(2)}%, additional {(data.dividendRates.additional * 100).toFixed(2)}%</li>
                  </ol>
                  <p className="text-gray-600 text-sm">
                    See the full rules at{' '}
                    <a href="https://www.gov.uk/tax-on-dividends" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK — Tax on dividends</a>.
                  </p>
                </div>

                {/* Dividend Tax Rates Table */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Dividend Tax Rates {taxYear}</h3>
                  </div>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Band</th>
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Taxable Income</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Dividend Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900">Personal Allowance</td>
                          <td className="py-2.5 pr-4 text-gray-600">Up to £12,570</td>
                          <td className="py-2.5 text-right font-semibold text-green-600">0%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900">Basic rate</td>
                          <td className="py-2.5 pr-4 text-gray-600">£12,571 – £50,270</td>
                          <td className="py-2.5 text-right font-semibold text-gray-900">{(data.dividendRates.basic * 100).toFixed(2)}%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900">Higher rate</td>
                          <td className="py-2.5 pr-4 text-gray-600">£50,271 – {formatCurrencyWhole(data.higherRateLimit)}</td>
                          <td className="py-2.5 text-right font-semibold text-gray-900">{(data.dividendRates.higher * 100).toFixed(2)}%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900">Additional rate</td>
                          <td className="py-2.5 pr-4 text-gray-600">Over {formatCurrencyWhole(data.higherRateLimit)}</td>
                          <td className="py-2.5 text-right font-semibold text-gray-900">{(data.dividendRates.additional * 100).toFixed(2)}%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The dividend allowance ({formatCurrencyWhole(data.dividendAllowance)}) is a 0% rate band — it still uses up space in your tax bands, but no tax is charged on it.
                  </p>
                </div>

                {/* Dividend Allowance History */}
                <div className="bg-white rounded-2xl border border-amber-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Dividend Allowance History</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    The dividend allowance has been cut significantly since its introduction. Here&apos;s how it has changed:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Tax Year</th>
                          <th className="text-right py-2 pr-4 font-semibold text-gray-700">Allowance</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Basic Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-900">2021/22</td>
                          <td className="py-2 pr-4 text-right font-semibold text-gray-900">£2,000</td>
                          <td className="py-2 text-right text-gray-600">7.50%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-900">2022/23</td>
                          <td className="py-2 pr-4 text-right font-semibold text-gray-900">£2,000</td>
                          <td className="py-2 text-right text-gray-600">8.75%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-900">2023/24</td>
                          <td className="py-2 pr-4 text-right font-semibold text-amber-600">£1,000</td>
                          <td className="py-2 text-right text-gray-600">8.75%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-900">2024/25</td>
                          <td className="py-2 pr-4 text-right font-semibold text-red-600">£500</td>
                          <td className="py-2 text-right text-gray-600">8.75%</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-emerald-50/50">
                          <td className="py-2 pr-4 text-gray-900 font-semibold">2025/26</td>
                          <td className="py-2 pr-4 text-right font-semibold text-red-600">£500</td>
                          <td className="py-2 text-right text-gray-600">8.75%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The allowance was originally £5,000 when introduced in 2016/17. From April 2026, the basic and higher dividend rates are set to rise by 2 percentage points (to 10.75% and 35.75%).
                    Read more about upcoming changes in our{' '}
                    <a href="/blog/uk-tax-changes-2025-26" className="text-blue-600 hover:underline">UK Tax Changes 2025/26</a> blog post.
                  </p>
                </div>

                {/* Ltd Company Director Strategy */}
                <div className="bg-white rounded-2xl border border-purple-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Ltd Company Director Strategy</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Most Ltd company directors pay themselves a combination of salary and dividends to minimise their overall tax and National Insurance bill:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Component</th>
                          <th className="text-left py-2 font-semibold text-gray-700">Typical Approach</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-900 font-medium">Salary</td>
                          <td className="py-2 text-gray-700">£12,570 (up to PA to avoid income tax; attracts employer NI at 15% above £5,000 secondary threshold)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-900 font-medium">Dividends</td>
                          <td className="py-2 text-gray-700">Remaining profits — no NI, taxed at lower dividend rates</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-900 font-medium">Corporation Tax</td>
                          <td className="py-2 text-gray-700">19% (small profits) or 25% on profits before dividends are paid</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Remember: dividends are paid from post-Corporation Tax profits, so the company has already paid 19–25% tax before you receive them. The combined tax burden is higher than dividend rates alone suggest. For detailed salary sacrifice strategies, see our{' '}
                    <a href="/blog/salary-sacrifice-vs-personal-pension" className="text-blue-600 hover:underline">Salary Sacrifice vs Personal Pension</a> guide.
                  </p>
                </div>

                {/* Scottish Taxpayers & Dividends */}
                <div className="bg-white rounded-2xl border border-teal-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Scottish Taxpayers &amp; Dividends</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    A common misconception is that Scottish taxpayers pay different dividend tax. <strong>They don&apos;t.</strong> Dividend tax is reserved to the UK Parliament and is the same across the whole UK:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Scottish rates</strong> (19%–48%) apply only to employment income, pensions, and rental income</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span><strong>UK dividend rates</strong> (8.75%/33.75%/39.35%) apply to all UK residents including Scotland</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span><strong>UK band thresholds</strong> (£50,270/£125,140) determine which dividend rate you pay, not the Scottish thresholds</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm">
                    Learn more in our{' '}
                    <a href="/blog/scottish-tax-vs-english-tax" className="text-blue-600 hover:underline">Scottish Tax vs English Tax</a> comparison.
                  </p>
                </div>

                {/* £100k Tax Trap & Dividends */}
                <div className="bg-white rounded-2xl border border-red-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">The £100k Trap &amp; Dividends</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    If your total income (salary + dividends) exceeds £100,000, your Personal Allowance is tapered away at a rate of £1 for every £2 over the threshold. This creates an effective 60%+ marginal tax rate on income between £100,000 and £125,140.
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Total Income</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Personal Allowance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Up to £100,000</td>
                          <td className="py-2 text-right font-semibold text-green-600">£12,570</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">£110,000</td>
                          <td className="py-2 text-right font-semibold text-amber-600">£7,570</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">£120,000</td>
                          <td className="py-2 text-right font-semibold text-red-600">£2,570</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">£125,140+</td>
                          <td className="py-2 text-right font-semibold text-red-600">£0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Pension contributions can bring your income below £100,000 and restore your allowance. Read more in our{' '}
                    <a href="/blog/100k-tax-trap" className="text-blue-600 hover:underline">£100k Tax Trap Explained</a> guide, or check out{' '}
                    <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK — Income Tax rates</a>.
                  </p>
                </div>

                {/* Reporting Dividends to HMRC */}
                <div className="bg-white rounded-2xl border border-indigo-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Reporting Dividends to HMRC</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    How you report and pay dividend tax depends on how much you receive:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Dividend Amount</th>
                          <th className="text-left py-2 font-semibold text-gray-700">What You Need to Do</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">Up to £500</td>
                          <td className="py-2.5 text-gray-700">No tax to pay — covered by dividend allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">£500 – £10,000</td>
                          <td className="py-2.5 text-gray-700">Contact HMRC to have it collected through your tax code, or file Self Assessment</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">Over £10,000</td>
                          <td className="py-2.5 text-gray-700">You must file a Self Assessment tax return</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Self Assessment deadlines: register by 5 October following the tax year, file paper returns by 31 October, online returns by 31 January. Pay any tax owed by 31 January.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Learn more at{' '}
                    <a href="https://www.gov.uk/self-assessment-tax-returns" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK — Self Assessment tax returns</a> and{' '}
                    <a href="https://www.gov.uk/tax-on-dividends" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK — Tax on dividends</a>.
                    For a complete walkthrough, read our{' '}
                    <a href="/blog/uk-dividend-tax-explained" className="text-blue-600 hover:underline">UK Dividend Tax Explained</a> guide.
                  </p>
                </div>

                {/* Dividend Tax vs Capital Gains Tax */}
                <div className="bg-white rounded-2xl border border-cyan-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Dividend Tax vs Capital Gains Tax</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Selling shares and receiving dividends are taxed differently. Here&apos;s how they compare for 2026/27:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Feature</th>
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Dividend Tax</th>
                          <th className="text-left py-2 font-semibold text-gray-700">Capital Gains Tax</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">Annual exemption</td>
                          <td className="py-2.5 pr-4 text-gray-700">£500</td>
                          <td className="py-2.5 text-gray-700">£3,000</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">Basic rate</td>
                          <td className="py-2.5 pr-4 text-gray-700">8.75%</td>
                          <td className="py-2.5 text-gray-700">18%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">Higher rate</td>
                          <td className="py-2.5 pr-4 text-gray-700">33.75%</td>
                          <td className="py-2.5 text-gray-700">24%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">ISA-sheltered?</td>
                          <td className="py-2.5 pr-4 text-green-600 font-semibold">Tax-free</td>
                          <td className="py-2.5 text-green-600 font-semibold">Tax-free</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2.5 pr-4 text-gray-900 font-medium">NI payable?</td>
                          <td className="py-2.5 pr-4 text-green-600 font-semibold">No</td>
                          <td className="py-2.5 text-green-600 font-semibold">No</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Both dividends and capital gains from shares held inside an ISA are completely tax-free. See{' '}
                    <a href="https://www.gov.uk/capital-gains-tax" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK — Capital Gains Tax</a> for more details on CGT rates.
                  </p>
                </div>

                {/* Tips to Reduce Dividend Tax */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-green-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Tips to Reduce Your Dividend Tax Bill</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Use Your ISA Allowance</h4>
                      <p className="text-gray-700 text-xs">Dividends from shares held in a Stocks &amp; Shares ISA are completely tax-free. The 2026/27 ISA allowance is £20,000 — use it to shelter dividend-paying investments.</p>
                    </div>
                    <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Pension Contributions</h4>
                      <p className="text-gray-700 text-xs">Making pension contributions reduces your adjusted net income, which can keep you below the £100k PA tapering threshold or the higher rate band. See our{' '}
                        <a href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:underline">pension tax relief guide</a>.</p>
                    </div>
                    <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Dividend Splitting With Spouse</h4>
                      <p className="text-gray-700 text-xs">If your spouse is a basic rate taxpayer, transferring shares to them means their dividends are taxed at 8.75% instead of 33.75%. Both spouses get their own £500 allowance too.</p>
                    </div>
                    <div className="bg-green-50/50 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">Timing Your Dividends</h4>
                      <p className="text-gray-700 text-xs">As a Ltd company director, you can choose when to declare dividends. Spreading them across two tax years uses two lots of the £500 allowance and may keep you in a lower band.</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    For more strategies, read our{' '}
                    <a href="/blog/salary-sacrifice-vs-personal-pension" className="text-blue-600 hover:underline">Salary Sacrifice vs Personal Pension</a> comparison and{' '}
                    <a href="/blog/uk-dividend-tax-explained" className="text-blue-600 hover:underline">UK Dividend Tax Explained</a> guide. Also see{' '}
                    <a href="https://www.gov.uk/individual-savings-accounts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK — Individual Savings Accounts</a>.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl border border-teal-100 shadow-medium p-6 md:p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl md:text-2xl">Dividend Tax FAQs</h3>
                </div>
                <div className="space-y-5">
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">How much tax do I pay on dividends?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      For 2026/27, the first £500 of dividends is tax-free (the dividend allowance). After that, the rate depends on your income tax band: 10.75% for basic rate taxpayers, 35.75% for higher rate, and 39.35% for additional rate. The basic and higher rates increased by 2 percentage points from 6 April 2026. Dividends are treated as the top slice of your income — they sit above your salary.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What is the dividend allowance for 2026/27?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The dividend allowance for 2026/27 is £500 — unchanged from 2025/26. It was reduced from £1,000 in 2023/24 and £2,000 in 2022/23. It means the first £500 of your dividend income above your Personal Allowance is taxed at 0%, but it still counts towards your tax bands.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">Do dividends count towards my tax band?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Yes. Your dividends are added on top of your other income to determine which tax band they fall in. If your salary is £45,000 and you receive £10,000 in dividends, the dividends that push you past £50,270 will be taxed at the higher rate of 33.75%.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">How are dividends taxed for Ltd company directors?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Most Ltd company directors pay themselves a low salary (often £12,570 to use up the Personal Allowance) and take remaining profits as dividends. This avoids employee and employer National Insurance on the dividend portion. However, Corporation Tax (19–25%) is paid on profits before dividends are distributed.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">Do Scottish taxpayers pay different dividend tax rates?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      No. Dividend tax rates are set by the UK Parliament and apply equally across England, Scotland, Wales, and Northern Ireland. Scottish income tax rates only affect non-savings, non-dividend income. All UK residents pay 10.75%, 35.75%, or 39.35% on dividends for 2026/27.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What happens if I earn over £100,000 with dividends?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      If your total income (including dividends) exceeds £100,000, your Personal Allowance is reduced by £1 for every £2 over £100,000. It reaches zero at £125,140. This effectively creates a 60%+ marginal tax rate in that income band. Pension contributions can help by reducing your adjusted net income.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">How did dividend tax rates change recently?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      In April 2022, rates rose by 1.25 percentage points (basic: 7.5% → 8.75%, higher: 32.5% → 33.75%, additional: 38.1% → 39.35%). The dividend allowance was halved from £2,000 to £1,000 in April 2023, then to £500 in April 2024. From April 2026, basic and higher rates will increase by another 2 percentage points.
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-medium p-6 md:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl md:text-2xl">Disclaimer</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  This calculator provides estimates based on HMRC dividend tax rules for the {taxYear} tax year.
                  It calculates dividend tax only — it does not include income tax or National Insurance on your salary.
                  Individual circumstances may vary. For complex tax situations involving multiple income sources,
                  capital gains, or overseas income, please consult a qualified accountant. This tool is for informational
                  purposes only and should not be considered tax advice.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Related Reading */}
        <div className="mx-auto px-8 mt-6 mb-8 xl:pr-[192px]">
          <div className="max-w-6xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Related Reading</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              <a href="/blog/uk-dividend-tax-explained" className="p-4 bg-white rounded-xl border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-emerald-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors text-sm mt-1">UK Dividend Tax Explained</p>
              </a>
              <a href="/blog/100k-tax-trap" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">The £100k Tax Trap Explained</p>
              </a>
              <a href="/blog/salary-sacrifice-vs-personal-pension" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Salary Sacrifice vs Personal Pension</p>
              </a>
              <a href="/blog/pension-contributions-tax-relief" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Pensions</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Pension Contributions &amp; Tax Relief</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default function DividendTaxCalculator() {
  return (
    <Suspense>
      <DividendTaxCalculatorInner />
    </Suspense>
  );
}
