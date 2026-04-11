"use client";
import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  PieChart,
  Calculator,
  Info,
  BarChart3,
  AlertTriangle,
  ChevronRight,
  Share2
} from 'lucide-react';
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

function DividendTaxCalculatorContent() {
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

  return (
    <>
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
    </>
  );
}

// Wrap in Suspense for useSearchParams
export default function DividendTaxClient() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600">Loading calculator...</p>
        </div>
      </div>
    }>
      <DividendTaxCalculatorContent />
    </Suspense>
  );
}
