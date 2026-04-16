"use client";
import React, { useState, useMemo } from 'react';
import {
  Search,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
  ChevronRight,
  Calculator,
  Building,
  Info,
  BookOpen,
  FileText,
  MapPin,
  Lightbulb,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

// Tax code reference data
const TAX_CODE_LETTERS = {
  L: {
    name: "Standard Personal Allowance",
    description: "You're entitled to the standard tax-free Personal Allowance. This is the most common tax code suffix.",
    common: true
  },
  M: {
    name: "Marriage Allowance — Recipient",
    description: "You've received a transfer of 10% of your partner's Personal Allowance through the Marriage Allowance scheme. This increases your tax-free amount by £1,260.",
    common: false
  },
  N: {
    name: "Marriage Allowance — Transferor",
    description: "You've transferred 10% of your Personal Allowance to your partner. Your tax-free amount is reduced by £1,260.",
    common: false
  },
  T: {
    name: "HMRC Review Required",
    description: "HMRC needs to review some items in your tax code. This is often used when your circumstances are complex or when other calculations are needed to work out your Personal Allowance.",
    common: false
  },
  Y: {
    name: "Born Before 6 April 1938",
    description: "You were born before 6 April 1938 and may be entitled to a higher Personal Allowance. This is now very rare.",
    common: false
  }
};

const SPECIAL_CODES = {
  BR: {
    name: "Basic Rate",
    description: "All your income from this job is taxed at the basic rate of 20%. This usually means your Personal Allowance is being used against another source of income (e.g. a second job or pension).",
    taxRate: "20%",
    allowance: "£0",
    warning: "You're getting no Personal Allowance from this employer. If this is your only job, your tax code may be wrong."
  },
  D0: {
    name: "Higher Rate",
    description: "All your income from this job is taxed at the higher rate of 40%. This is typically used for a second job where your first job already uses your Personal Allowance and basic rate band.",
    taxRate: "40%",
    allowance: "£0",
    warning: "All income from this source is taxed at 40%. Check this is correct if this is your only or main job."
  },
  D1: {
    name: "Additional Rate",
    description: "All your income from this job is taxed at the additional rate of 45%. This is rare and usually applies to a second income source for very high earners.",
    taxRate: "45%",
    allowance: "£0",
    warning: "All income from this source is taxed at 45%. This is unusual — verify with HMRC if unsure."
  },
  NT: {
    name: "No Tax",
    description: "No tax is deducted from this income. This can apply to certain non-taxable income sources, diplomats, or specific HMRC arrangements.",
    taxRate: "0%",
    allowance: "N/A",
    warning: null
  },
  "0T": {
    name: "Zero Personal Allowance",
    description: "Your Personal Allowance has been fully used up, but you're still taxed using the standard progressive bands. This can happen if HMRC doesn't have enough information or if your allowance has been reduced to zero.",
    taxRate: "Progressive (20%/40%/45%)",
    allowance: "£0",
    warning: "You have no tax-free allowance. If you think this is wrong, contact HMRC."
  }
};

const ENGLISH_BANDS = [
  { name: "Personal Allowance", range: "Up to £12,570", rate: "0%" },
  { name: "Basic rate", range: "£12,571 – £50,270", rate: "20%" },
  { name: "Higher rate", range: "£50,271 – £125,140", rate: "40%" },
  { name: "Additional rate", range: "Over £125,140", rate: "45%" }
];

const SCOTTISH_BANDS = [
  { name: "Personal Allowance", range: "Up to £12,570", rate: "0%" },
  { name: "Starter rate", range: "£12,571 – £15,397", rate: "19%" },
  { name: "Basic rate", range: "£15,398 – £27,491", rate: "20%" },
  { name: "Intermediate rate", range: "£27,492 – £43,662", rate: "21%" },
  { name: "Higher rate", range: "£43,663 – £75,000", rate: "42%" },
  { name: "Advanced rate", range: "£75,001 – £125,140", rate: "45%" },
  { name: "Top rate", range: "Over £125,140", rate: "48%" }
];

const WELSH_BANDS = ENGLISH_BANDS; // Wales uses same rates as England for 2026/27

// Validate tax code format
const validateTaxCode = (code) => {
  if (!code || code.trim() === '') return { valid: false, normalized: '' };
  const trimmed = code.trim().toUpperCase();
  const taxCodeRegex = /^([SC]?)((\d{1,4}[LMNTY]?)|BR|D0|D1|NT|0T|K\d{1,4}[LMNTY]?)(\s?(W1|M1|X))?$/;
  const isValid = taxCodeRegex.test(trimmed);
  return { valid: isValid, normalized: isValid ? trimmed : code };
};

// Parse and decode a tax code
const parseTaxCode = (code) => {
  if (!code) return null;
  const trimmed = code.trim().toUpperCase();
  const validation = validateTaxCode(trimmed);
  if (!validation.valid) return null;

  const normalized = validation.normalized;

  // Check for emergency/non-cumulative suffix
  const emergencyMatch = normalized.match(/\s?(W1|M1|X)$/);
  const isEmergency = !!emergencyMatch;
  const emergencySuffix = emergencyMatch ? emergencyMatch[1] : null;
  const cleanCode = normalized.replace(/\s?(W1|M1|X)$/, '');

  // Check for country prefix
  const isScottish = cleanCode.startsWith('S');
  const isWelsh = cleanCode.startsWith('C');
  const codeWithoutPrefix = cleanCode.replace(/^[SC]/, '');

  // Check for special codes
  if (SPECIAL_CODES[codeWithoutPrefix]) {
    const special = SPECIAL_CODES[codeWithoutPrefix];
    return {
      original: normalized,
      type: 'special',
      prefix: isScottish ? 'S' : isWelsh ? 'C' : null,
      isScottish,
      isWelsh,
      isEmergency,
      emergencySuffix,
      specialCode: codeWithoutPrefix,
      name: special.name,
      description: special.description,
      taxRate: special.taxRate,
      personalAllowance: 0,
      personalAllowanceFormatted: special.allowance,
      warning: special.warning,
      letterSuffix: null,
      letterInfo: null,
      isKCode: false,
      number: null
    };
  }

  // Check for K codes
  const kCodeMatch = codeWithoutPrefix.match(/^K(\d{1,4})([LMNTY]?)$/);
  if (kCodeMatch) {
    const kNumber = parseInt(kCodeMatch[1], 10);
    const kValue = kNumber * 10;
    const letterSuffix = kCodeMatch[2] || null;
    return {
      original: normalized,
      type: 'k-code',
      prefix: isScottish ? 'S' : isWelsh ? 'C' : null,
      isScottish,
      isWelsh,
      isEmergency,
      emergencySuffix,
      specialCode: null,
      name: "K Code — Extra Tax Owed",
      description: `Your tax-free allowance has been reduced below zero. HMRC is collecting an extra £${kValue.toLocaleString()} in tax through your pay. This is often because you owe tax from previous years, have taxable benefits (company car, medical insurance), or have untaxed income.`,
      taxRate: "Progressive (with negative allowance)",
      personalAllowance: -kValue,
      personalAllowanceFormatted: `-£${kValue.toLocaleString()}`,
      warning: `HMRC is deducting extra tax equivalent to £${kValue.toLocaleString()} through your wages. If you don't recognise why, contact HMRC.`,
      letterSuffix,
      letterInfo: letterSuffix ? TAX_CODE_LETTERS[letterSuffix] : null,
      isKCode: true,
      number: kNumber
    };
  }

  // Standard numeric codes
  const standardMatch = codeWithoutPrefix.match(/^(\d{1,4})([LMNTY]?)$/);
  if (standardMatch) {
    const number = parseInt(standardMatch[1], 10);
    const allowance = number * 10;
    const letterSuffix = standardMatch[2] || null;
    const letterInfo = letterSuffix ? TAX_CODE_LETTERS[letterSuffix] : null;

    let description = `Your tax-free Personal Allowance is £${allowance.toLocaleString()}. `;
    if (allowance === 12570) {
      description += "This is the standard Personal Allowance for 2026/27 — the most common amount.";
    } else if (allowance > 12570) {
      description += "This is higher than the standard £12,570, which may be due to Marriage Allowance transfer, blind person's allowance, or other adjustments.";
    } else if (allowance < 12570 && allowance > 0) {
      description += "This is lower than the standard £12,570. Common reasons include: taxable benefits in kind (company car, medical insurance), underpaid tax from a previous year, or state pension adjustments.";
    } else if (allowance === 0) {
      description += "You have no tax-free allowance. All your income is taxed using progressive bands.";
    }

    let warning = null;
    if (allowance < 12570 && allowance > 0) {
      warning = `Your allowance is £${(12570 - allowance).toLocaleString()} less than the standard £12,570. Check your P2 coding notice from HMRC to see why.`;
    }

    return {
      original: normalized,
      type: 'standard',
      prefix: isScottish ? 'S' : isWelsh ? 'C' : null,
      isScottish,
      isWelsh,
      isEmergency,
      emergencySuffix,
      specialCode: null,
      name: letterInfo ? letterInfo.name : "Standard Tax Code",
      description,
      taxRate: "Progressive",
      personalAllowance: allowance,
      personalAllowanceFormatted: `£${allowance.toLocaleString()}`,
      warning,
      letterSuffix,
      letterInfo,
      isKCode: false,
      number
    };
  }

  return null;
};

// Format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Math.abs(amount || 0));
};

export default function TaxCodeChecker() {
  const [taxCodeInput, setTaxCodeInput] = useState('');
  const [submittedCode, setSubmittedCode] = useState('');

  const result = useMemo(() => {
    if (!submittedCode) return null;
    return parseTaxCode(submittedCode);
  }, [submittedCode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taxCodeInput.trim()) {
      setSubmittedCode(taxCodeInput.trim().toUpperCase());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    setTaxCodeInput(value);
  };

  const isValidInput = taxCodeInput.trim() !== '' && validateTaxCode(taxCodeInput).valid;
  const showError = taxCodeInput.trim() !== '' && !validateTaxCode(taxCodeInput).valid;

  const taxBands = result?.isScottish ? SCOTTISH_BANDS : (result?.isWelsh ? WELSH_BANDS : ENGLISH_BANDS);
  const regionLabel = result?.isScottish ? "Scottish" : result?.isWelsh ? "Welsh" : "English/Welsh";

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does my tax code mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your tax code tells your employer how much tax to deduct from your pay. The numbers represent your tax-free Personal Allowance (multiply by 10), and the letters indicate your circumstances. For example, 1257L means you have the standard £12,570 Personal Allowance."
            }
          },
          {
            "@type": "Question",
            "name": "What is the most common UK tax code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most common tax code for 2026/27 is 1257L — unchanged from 2025/26 because the Personal Allowance remains frozen at £12,570. If you're in Scotland, the equivalent is S1257L."
            }
          },
          {
            "@type": "Question",
            "name": "What does the L in my tax code mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The letter L means you're entitled to the standard tax-free Personal Allowance. It's the most common suffix. Other letters include M (Marriage Allowance recipient), N (Marriage Allowance transferor), and T (items HMRC needs to review)."
            }
          },
          {
            "@type": "Question",
            "name": "What is an emergency tax code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An emergency tax code (shown with W1, M1, or X suffix) means your tax is calculated on a non-cumulative basis — each pay period is treated independently. This often happens when starting a new job without a P45. You may overpay tax and need to claim a refund from HMRC."
            }
          },
          {
            "@type": "Question",
            "name": "What does a K tax code mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A K code means your tax-free allowance has been reduced below zero, so HMRC is collecting extra tax through your wages. The number after K, multiplied by 10, shows the extra amount being taxed. Common reasons include taxable benefits (company car, medical insurance) or underpaid tax from previous years."
            }
          },
          {
            "@type": "Question",
            "name": "How do I check if my tax code is correct?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check your P2 coding notice from HMRC which explains how your code was calculated. You can also check online via your HMRC Personal Tax Account at gov.uk. If your allowance seems wrong, contact HMRC on 0300 200 3300 to query it."
            }
          },
          {
            "@type": "Question",
            "name": "What is a Scottish tax code?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Scottish tax codes start with an S prefix (e.g. S1257L). This means you pay Scottish income tax rates, which have different bands from the rest of the UK. Scotland has six tax bands: Starter (19%), Basic (20%), Intermediate (21%), Higher (42%), Advanced (45%), and Top (48%) for 2026/27. The Starter and Basic band limits were extended for 2026/27 (Scottish Budget 2026), slightly reducing tax for most Scottish taxpayers."
            }
          }
        ]
      },
      {
        "@type": "WebApplication",
        "name": "UK Tax Code Checker",
        "url": "https://www.salarytakehome.co.uk/tax-code",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        },
        "description": "Free UK tax code checker. Enter your tax code to find out what it means, your Personal Allowance, and which tax rates apply."
      }
    ]
  };

  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Tax Code Checker" }]} fullWidth>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Main Content */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium">
                  <Search className="w-6 h-6 text-white" />
                </div>
                UK Tax Code Checker
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Enter your tax code to find out what it means and check if it&apos;s correct
              </p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: April 2026 · Reflects 2026/27 tax year
              </p>
            </div>

            {/* Input Card */}
            <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 md:p-8 mb-8 max-w-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                Enter Your Tax Code
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Find your tax code on your payslip, P45, P60, or HMRC coding notice (P2). It looks like <strong>1257L</strong>, <strong>S1257L</strong>, <strong>BR</strong>, or <strong>K475</strong>.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={taxCodeInput}
                      onChange={handleInputChange}
                      placeholder="e.g. 1257L"
                      maxLength={12}
                      className={`w-full px-5 py-4 border-2 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 text-lg font-semibold bg-white/80 transition-all duration-200 uppercase tracking-wider ${
                        showError ? 'border-red-300 focus:ring-red-500 focus:border-red-400' : 'border-gray-200/50'
                      }`}
                    />
                    {showError && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                        <XCircle className="w-4 h-4" />
                        Not a valid UK tax code format
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!isValidInput}
                    className={`px-6 py-4 rounded-2xl font-bold text-white transition-all duration-200 flex items-center gap-2 ${
                      isValidInput
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-medium hover:shadow-lg'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                  >
                    <Search className="w-5 h-5" />
                    <span className="hidden sm:inline">Check</span>
                  </button>
                </div>
              </form>
            </div>

            <AdUnit showScrollHint />

            {/* Results Section */}
            {result && (
              <div className="space-y-6 mb-10">
                {/* Hero Result Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-xl p-6 md:p-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-sm font-medium">Your Tax Code</p>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-wider">{result.original}</h2>
                    </div>
                  </div>
                  <p className="text-lg text-indigo-100 leading-relaxed">{result.description}</p>
                </div>

                {/* Breakdown Cards */}
                <div className="grid lg:grid-cols-2 gap-4">
                  {/* Personal Allowance Card */}
                  <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Tax-Free Allowance</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{result.personalAllowanceFormatted}</p>
                    {result.type === 'standard' && result.personalAllowance === 12570 && (
                      <p className="text-sm text-green-600 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        Standard Personal Allowance for 2026/27
                      </p>
                    )}
                    {result.type === 'standard' && result.personalAllowance !== 12570 && result.personalAllowance > 0 && (
                      <p className="text-sm text-amber-600 flex items-center gap-1">
                        <Info className="w-4 h-4" />
                        {result.personalAllowance > 12570 ? 'Above' : 'Below'} the standard £12,570
                      </p>
                    )}
                    {result.isKCode && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" />
                        Negative allowance — extra tax deducted
                      </p>
                    )}
                    {result.type === 'special' && (
                      <p className="text-sm text-gray-500">{result.name}</p>
                    )}
                  </div>

                  {/* Tax Region Card */}
                  <div className="bg-white rounded-2xl border border-purple-100 shadow-medium p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg">Tax Region</h3>
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-2">
                      {result.isScottish ? "Scotland" : result.isWelsh ? "Wales" : "England & Northern Ireland"}
                    </p>
                    <p className="text-sm text-gray-600">
                      {result.isScottish
                        ? "You pay Scottish income tax rates, which have 6 bands from 19% to 48%."
                        : result.isWelsh
                        ? "Welsh tax rates currently match England & NI rates."
                        : "Standard UK income tax rates apply: 20%, 40%, and 45%."}
                    </p>
                    {result.prefix && (
                      <p className="text-sm text-purple-600 mt-2 font-semibold">
                        Prefix &quot;{result.prefix}&quot; = {result.isScottish ? 'Scottish' : 'Welsh'} taxpayer
                      </p>
                    )}
                  </div>

                  {/* Letter Suffix Card */}
                  {result.letterInfo && (
                    <div className="bg-white rounded-2xl border border-teal-100 shadow-medium p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Letter &quot;{result.letterSuffix}&quot; Meaning</h3>
                      </div>
                      <p className="text-lg font-semibold text-gray-900 mb-1">{result.letterInfo.name}</p>
                      <p className="text-sm text-gray-600">{result.letterInfo.description}</p>
                    </div>
                  )}

                  {/* Emergency Tax Card */}
                  {result.isEmergency && (
                    <div className="bg-white rounded-2xl border border-amber-100 shadow-medium p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                          <AlertTriangle className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">Emergency Tax Code</h3>
                      </div>
                      <p className="text-lg font-semibold text-amber-700 mb-1">Non-Cumulative ({result.emergencySuffix})</p>
                      <p className="text-sm text-gray-600">
                        Your tax is calculated on each pay period independently, not cumulatively over the year. This often happens when starting a new job without a P45. You may overpay tax and can claim a refund from HMRC once your code is corrected.
                      </p>
                    </div>
                  )}
                </div>

                {/* Warning Card */}
                {result.warning && (
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-800 mb-1">Check This</p>
                      <p className="text-sm text-amber-700">{result.warning}</p>
                    </div>
                  </div>
                )}

                {/* Tax Bands Table */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-medium p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">{regionLabel} Income Tax Bands 2026/27</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Band</th>
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Taxable Income</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {taxBands.map((band, i) => (
                          <tr key={i} className="border-b border-gray-100 last:border-0">
                            <td className="py-2.5 pr-4 text-gray-900">{band.name}</td>
                            <td className="py-2.5 pr-4 text-gray-600">{band.range}</td>
                            <td className="py-2.5 text-right font-semibold text-gray-900">{band.rate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CTA Card */}
                <a
                  href="/take-home-pay-calculator"
                  className="block bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg mb-1">See How This Affects Your Take-Home Pay</p>
                      <p className="text-blue-100 text-sm">Use our take-home pay calculator with your tax code to see your exact monthly and annual breakdown.</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            )}

            {/* Empty State */}
            {!result && (
              <div className="bg-white/80 backdrop-blur-light rounded-3xl border-2 border-dashed border-gray-200 p-8 md:p-12 text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Enter your tax code above</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Type your tax code from your payslip, P45, P60, or HMRC coding notice and click &quot;Check&quot; to see what it means.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {['1257L', 'S1257L', 'BR', 'K475', '1257L W1', 'D0'].map(code => (
                    <button
                      key={code}
                      onClick={() => { setTaxCodeInput(code); setSubmittedCode(code); }}
                      className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-mono font-semibold hover:bg-indigo-100 transition-colors"
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Information Cards Section */}
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-6">

                {/* How HMRC Calculates Your Tax Code */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-xl">How HMRC Calculates Your Tax Code</h2>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    HMRC starts with the standard Personal Allowance (£12,570 for 2026/27, frozen until April 2031) and adjusts it based on your circumstances:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Adjustment</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Effect</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Company car / fuel benefit</td>
                          <td className="py-2 text-right text-red-600 font-medium">Reduces allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Private medical insurance</td>
                          <td className="py-2 text-right text-red-600 font-medium">Reduces allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Underpaid tax from prior year</td>
                          <td className="py-2 text-right text-red-600 font-medium">Reduces allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">State pension income</td>
                          <td className="py-2 text-right text-red-600 font-medium">Reduces allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Marriage Allowance (recipient)</td>
                          <td className="py-2 text-right text-green-600 font-medium">Increases allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Blind Person&apos;s Allowance</td>
                          <td className="py-2 text-right text-green-600 font-medium">Increases allowance</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Your P2 coding notice from HMRC lists every adjustment. Check it at{' '}
                    <a href="https://www.gov.uk/check-income-tax-current-year" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK</a>.
                  </p>
                </div>

                {/* Common Tax Code Mistakes */}
                <div className="bg-white rounded-2xl border border-red-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-xl">Common Tax Code Mistakes</h2>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Wrong code after changing jobs</strong> — your new employer may put you on an emergency code (W1/M1) until they receive your P45</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Marriage Allowance not applied</strong> — if eligible, you could be missing out on up to £252/year in tax savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Old benefit still coded</strong> — if you no longer have a company car or medical insurance, your code may still reflect the old benefit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Double-counted income</strong> — HMRC may overestimate your other income sources (savings interest, rental income), reducing your allowance too much</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>BR on your only job</strong> — if this is your only employment, you should have a numeric code, not BR</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4">
                    If your tax code seems wrong, call HMRC on <strong>0300 200 3300</strong> or check online via your{' '}
                    <a href="https://www.gov.uk/personal-tax-account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Personal Tax Account</a>.
                  </p>
                </div>

                {/* Emergency Tax Codes */}
                <div className="bg-white rounded-2xl border border-amber-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-xl">Emergency Tax Codes Explained</h2>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    Emergency tax codes have a <strong>W1</strong>, <strong>M1</strong>, or <strong>X</strong> suffix. They mean your tax is calculated on a <em>non-cumulative</em> basis — each pay period is treated independently instead of spreading your allowance over the year.
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Suffix</th>
                          <th className="text-left py-2 font-semibold text-gray-700">Meaning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">W1</td>
                          <td className="py-2 text-gray-700">Week 1 basis (weekly paid)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">M1</td>
                          <td className="py-2 text-gray-700">Month 1 basis (monthly paid)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">X</td>
                          <td className="py-2 text-gray-700">Non-cumulative (any frequency)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 text-sm mb-3"><strong>Common causes:</strong></p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-4">
                    <li>Starting a new job without a P45</li>
                    <li>Starting your first job ever</li>
                    <li>Receiving a new taxable benefit</li>
                    <li>HMRC hasn&apos;t finished processing your details</li>
                  </ul>
                  <p className="text-gray-600 text-sm">
                    You may overpay tax on an emergency code. Once HMRC issues your correct code, any overpaid tax is usually refunded through your payroll automatically. If not, you can{' '}
                    <a href="https://www.gov.uk/claim-tax-refund" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">claim a tax refund from HMRC</a>.
                  </p>
                </div>

                {/* Scottish & Welsh Tax Codes */}
                <div className="bg-white rounded-2xl border border-purple-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-xl">Scottish &amp; Welsh Tax Codes</h2>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    If you live in Scotland, your tax code starts with <strong>S</strong> (e.g. S1257L). If you live in Wales, it starts with <strong>C</strong> (e.g. C1257L). Your employer uses the prefix to apply the correct tax rates.
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Scottish Band</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Starter rate (£12,571–£15,397)</td>
                          <td className="py-2 text-right font-semibold text-gray-900">19%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Basic rate (£15,398–£27,491)</td>
                          <td className="py-2 text-right font-semibold text-gray-900">20%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Intermediate (£27,492–£43,662)</td>
                          <td className="py-2 text-right font-semibold text-gray-900">21%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Higher rate (£43,663–£75,000)</td>
                          <td className="py-2 text-right font-semibold text-gray-900">42%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Advanced rate (£75,001–£125,140)</td>
                          <td className="py-2 text-right font-semibold text-gray-900">45%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Top rate (over £125,140)</td>
                          <td className="py-2 text-right font-semibold text-gray-900">48%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Welsh rates currently match England &amp; NI rates. See the full comparison in our{' '}
                    <a href="/blog/scottish-tax-vs-english-tax" className="text-blue-600 hover:underline">Scottish Tax vs English Tax</a> blog post, or calculate your take-home pay with our{' '}
                    <a href="/take-home-pay-calculator" className="text-blue-600 hover:underline">Take-Home Pay Calculator</a>.
                  </p>
                </div>

                {/* How This Tool Works */}
                <div className="bg-white rounded-2xl border border-emerald-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-xl">How This Tool Works</h2>
                  </div>
                  <ol className="list-decimal list-outside ml-6 space-y-2 text-gray-700 text-sm">
                    <li>Parses your tax code to identify the prefix (S for Scotland, C for Wales), number, and letter suffix</li>
                    <li>Multiplies the number by 10 to calculate your Personal Allowance (e.g. 1257 × 10 = £12,570)</li>
                    <li>Decodes the letter suffix to explain your tax situation (L = standard, M/N = Marriage Allowance, etc.)</li>
                    <li>Identifies special codes (BR, D0, D1, NT, K codes) and explains what they mean</li>
                    <li>Detects emergency tax suffixes (W1, M1, X) and warns if you may be overpaying</li>
                    <li>Shows the applicable tax bands for your region (English, Scottish, or Welsh rates)</li>
                  </ol>
                </div>

                {/* Tax Code Reference Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-xl">Full Tax Code Reference</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Code/Letter</th>
                          <th className="text-left py-2 font-semibold text-gray-700">Meaning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">1257L</td>
                          <td className="py-2 text-gray-700">Standard code — £12,570 tax-free allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">L</td>
                          <td className="py-2 text-gray-700">Standard Personal Allowance</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">M</td>
                          <td className="py-2 text-gray-700">Marriage Allowance — you received a transfer</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">N</td>
                          <td className="py-2 text-gray-700">Marriage Allowance — you transferred yours</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">T</td>
                          <td className="py-2 text-gray-700">HMRC reviewing your tax situation</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">S</td>
                          <td className="py-2 text-gray-700">Scottish tax rates apply</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">C</td>
                          <td className="py-2 text-gray-700">Welsh tax rates apply</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">K</td>
                          <td className="py-2 text-gray-700">Negative allowance — extra tax owed</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">BR</td>
                          <td className="py-2 text-gray-700">All income taxed at 20% (basic rate)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">D0</td>
                          <td className="py-2 text-gray-700">All income taxed at 40% (higher rate)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">D1</td>
                          <td className="py-2 text-gray-700">All income taxed at 45% (additional rate)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">NT</td>
                          <td className="py-2 text-gray-700">No tax deducted</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">0T</td>
                          <td className="py-2 text-gray-700">No Personal Allowance, progressive bands</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono font-semibold text-gray-900">W1/M1/X</td>
                          <td className="py-2 text-gray-700">Emergency — non-cumulative basis</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">
                    For the full official list, see{' '}
                    <a href="https://www.gov.uk/tax-codes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GOV.UK — Tax codes</a>.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl border border-teal-100 shadow-medium p-6 md:p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-xl md:text-2xl">Tax Code FAQs</h2>
                </div>
                <div className="space-y-5">
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What does my tax code mean?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Your tax code tells your employer how much tax to deduct from your pay. The numbers represent your tax-free Personal Allowance (multiply by 10), and the letters indicate your circumstances. For example, 1257L means you have the standard £12,570 Personal Allowance.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What is the most common tax code?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The most common tax code for 2026/27 is <strong>1257L</strong>. It means you have the standard Personal Allowance of £12,570 (unchanged since 2021 and frozen until April 2031). If you live in Scotland, the equivalent is <strong>S1257L</strong>, and in Wales it&apos;s <strong>C1257L</strong>.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What does the L in my tax code mean?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The letter L means you&apos;re entitled to the standard tax-free Personal Allowance. It&apos;s the most common suffix. Other letters include M (Marriage Allowance recipient), N (Marriage Allowance transferor), and T (items HMRC needs to review).
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What is an emergency tax code?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      An emergency tax code (shown with W1, M1, or X suffix) means your tax is calculated on a non-cumulative basis — each pay period is treated independently. This often happens when starting a new job without a P45. You may overpay tax and can claim a refund from HMRC.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What does a K tax code mean?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A K code means your tax-free allowance has been reduced below zero, so HMRC is collecting extra tax through your wages. The number after K, multiplied by 10, shows the extra amount being taxed. Common reasons include company car benefits, medical insurance, or underpaid tax from previous years.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">How do I check if my tax code is correct?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Check your P2 coding notice from HMRC, which explains how your code was calculated. You can also check online via your{' '}
                      <a href="https://www.gov.uk/personal-tax-account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HMRC Personal Tax Account</a> at GOV.UK. If your allowance seems wrong, contact HMRC on 0300 200 3300.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">What is a Scottish tax code?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Scottish tax codes start with an S prefix (e.g. S1257L). This means you pay Scottish income tax rates, which have six bands from 19% to 48% for 2026/27. Your tax code is based on where you live, not where you work.
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
                  <h2 className="font-bold text-gray-900 text-xl md:text-2xl">Disclaimer</h2>
                </div>
                <p className="text-gray-600 text-sm">
                  This tool decodes UK tax codes based on standard HMRC rules for the 2026/27 tax year. The Personal Allowance remains £12,570 (frozen until April 2031), so the standard tax code for most employees is unchanged at 1257L.
                  Individual circumstances may vary and HMRC may have specific reasons for your tax code that aren&apos;t captured here.
                  For complex tax situations, please consult a qualified accountant or contact HMRC directly.
                  This tool is for informational purposes only and should not be considered tax advice.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Related Reading */}
        <div className="mx-auto px-8 mt-6 mb-8 xl:pr-[192px]">
          <div className="max-w-6xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Related Reading</h3>
            <div className="grid md:grid-cols-3 gap-3">
              <a href="/blog/understanding-uk-tax-code" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Understanding Your UK Tax Code</p>
              </a>
              <a href="/blog/scottish-tax-vs-english-tax" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Scottish Tax vs English Tax: Full Comparison</p>
              </a>
              <a href="/blog/maximize-take-home-pay-2024" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How to Maximise Your Take Home Pay</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
