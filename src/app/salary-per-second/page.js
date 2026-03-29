"use client";
import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Timer,
  Clock,
  Calendar,
  CalendarDays,
  Banknote,
  TrendingUp,
  Coffee,
  Moon,
  Tv,
  UtensilsCrossed,
  Palmtree,
  Zap,
  HelpCircle,
  Building,
  Info,
  ChevronRight,
  BarChart3,
  Users,
  Briefcase
} from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

// Working year assumptions
const MONTHS_PER_YEAR = 12;
const WEEKS_PER_YEAR = 52;
const WORKING_DAYS_PER_YEAR = 260; // 52 × 5
const WORKING_HOURS_PER_YEAR = 1950; // 52 × 37.5
const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60; // For live counter (earnings don't stop)

// Famous salary presets
const PRESETS = [
  { label: "UK Average", salary: 35000, note: "£35,000" },
  { label: "UK Median", salary: 29669, note: "£29,669" },
  { label: "UK PM", salary: 167000, note: "£167,000" },
  { label: "Haaland", salary: 27300000, note: "~£525k/week" },
  { label: "Salah", salary: 20800000, note: "~£400k/week" },
  { label: "NHS Nurse", salary: 29970, note: "Band 5" },
  { label: "UK Teacher", salary: 31650, note: "Main scale" },
  { label: "Min Wage (21+)", salary: 24064, note: "£12.21/hr" },
];

// Format number input with commas
const formatNumberInput = (value) => {
  if (!value) return '';
  const numericValue = value.toString().replace(/[^\d]/g, '');
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Format currency with appropriate decimal places
const formatAmount = (amount, decimals = 2) => {
  if (amount >= 1000) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }
  if (amount >= 1) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }
  // For very small amounts, show more decimals
  const dp = amount >= 0.01 ? 2 : amount >= 0.001 ? 3 : 4;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: dp,
    maximumFractionDigits: Math.max(dp, decimals)
  }).format(amount);
};

// Live counter component
function LiveCounter({ perSecond }) {
  const [earned, setEarned] = useState(0);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!perSecond || perSecond <= 0) {
      setEarned(0);
      startTimeRef.current = null;
      return;
    }

    startTimeRef.current = performance.now();
    setEarned(0);

    const tick = (now) => {
      if (!startTimeRef.current) return;
      const elapsed = (now - startTimeRef.current) / 1000;
      setEarned(elapsed * perSecond);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [perSecond]);

  if (!perSecond || perSecond <= 0) return null;

  const displayAmount = earned >= 1000
    ? `£${Math.floor(earned).toLocaleString()}`
    : earned >= 1
    ? `£${earned.toFixed(2)}`
    : `£${earned.toFixed(4)}`;

  return (
    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-xl p-6 md:p-8 text-white mb-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <p className="text-emerald-100 text-sm font-medium">Live Earnings Counter</p>
      </div>
      <p className="text-sm text-emerald-200 mb-2">Since you opened this page, you&apos;ve earned:</p>
      <p className="text-4xl md:text-5xl font-bold tracking-tight font-mono">{displayAmount}</p>
      <p className="text-emerald-200 text-xs mt-3">
        Ticking at {formatAmount(perSecond, 4)} per second
      </p>
    </div>
  );
}

export default function SalaryPerSecond() {
  const [salaryInput, setSalaryInput] = useState('');

  const salary = useMemo(() => {
    return parseFloat(salaryInput.replace(/,/g, '')) || 0;
  }, [salaryInput]);

  const breakdown = useMemo(() => {
    if (salary <= 0) return null;
    return {
      yearly: salary,
      monthly: salary / MONTHS_PER_YEAR,
      weekly: salary / WEEKS_PER_YEAR,
      daily: salary / WORKING_DAYS_PER_YEAR,
      hourly: salary / WORKING_HOURS_PER_YEAR,
      perMinute: salary / (WORKING_HOURS_PER_YEAR * 60),
      perSecond: salary / SECONDS_PER_YEAR,
    };
  }, [salary]);

  const funComparisons = useMemo(() => {
    if (!breakdown) return null;
    return [
      { label: "Per toilet break", duration: "5 min", amount: breakdown.perMinute * 5, icon: Coffee },
      { label: "Per lunch break", duration: "1 hour", amount: breakdown.hourly, icon: UtensilsCrossed },
      { label: "Per Netflix episode", duration: "45 min", amount: breakdown.perMinute * 45, icon: Tv },
      { label: "While you sleep", duration: "8 hours", amount: breakdown.hourly * 8, icon: Moon },
      { label: "Per weekend", duration: "2 days", amount: breakdown.daily * 2, icon: Palmtree },
      { label: "Per annual holiday", duration: "25 days", amount: breakdown.daily * 25, icon: Palmtree },
    ];
  }, [breakdown]);

  const handleInput = useCallback((value) => {
    setSalaryInput(formatNumberInput(value));
  }, []);

  const handlePreset = useCallback((amount) => {
    setSalaryInput(formatNumberInput(amount.toString()));
  }, []);

  const timeCards = breakdown ? [
    { label: "Per Year", amount: breakdown.yearly, icon: Calendar, color: "blue" },
    { label: "Per Month", amount: breakdown.monthly, icon: CalendarDays, color: "indigo" },
    { label: "Per Week", amount: breakdown.weekly, icon: Clock, color: "purple" },
    { label: "Per Day", amount: breakdown.daily, icon: Banknote, color: "violet" },
    { label: "Per Hour", amount: breakdown.hourly, icon: Timer, color: "fuchsia" },
    { label: "Per Minute", amount: breakdown.perMinute, icon: Zap, color: "pink" },
    { label: "Per Second", amount: breakdown.perSecond, icon: Zap, color: "rose" },
  ] : [];

  const colorMap = {
    blue: "from-blue-500 to-blue-600 border-blue-100",
    indigo: "from-indigo-500 to-indigo-600 border-indigo-100",
    purple: "from-purple-500 to-purple-600 border-purple-100",
    violet: "from-violet-500 to-violet-600 border-violet-100",
    fuchsia: "from-fuchsia-500 to-fuchsia-600 border-fuchsia-100",
    pink: "from-pink-500 to-pink-600 border-pink-100",
    rose: "from-rose-500 to-rose-600 border-rose-100",
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much is £50,000 a year per second?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A £50,000 annual salary works out to approximately £0.0016 per second, based on a 365.25-day year. That's about £0.10 per minute, £5.85 per hour (based on a 37.5-hour working week), or £192.31 per working day."
            }
          },
          {
            "@type": "Question",
            "name": "How many hours are in a working year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A standard UK working year has 1,950 hours, based on 52 weeks at 37.5 hours per week. This is used to calculate hourly, per-minute, and working-day rates. The per-second live counter uses calendar seconds (365.25 days) since earnings accrue continuously."
            }
          },
          {
            "@type": "Question",
            "name": "What is the average UK salary in 2025?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average (mean) UK salary is approximately £35,000 per year, while the median salary is around £29,669. The median is often considered more representative as it isn't skewed by very high earners. This varies significantly by region, industry, and experience level."
            }
          },
          {
            "@type": "Question",
            "name": "How is salary per second calculated?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Salary per second is calculated by dividing the annual salary by the number of seconds in a year (31,557,600, based on 365.25 days). For working-time calculations like per hour and per day, we use 1,950 working hours (52 weeks × 37.5 hours) and 260 working days (52 weeks × 5 days)."
            }
          },
          {
            "@type": "Question",
            "name": "Do I earn money while I sleep?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you're on an annual salary, your pay is fixed regardless of hours worked, so in a sense your salary accrues continuously — including while you sleep. Our live counter reflects this by ticking 24/7. However, your hourly rate is calculated based on contracted working hours only."
            }
          },
          {
            "@type": "Question",
            "name": "What is the highest salary in the UK?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The highest salaries in the UK are typically in finance (hedge fund managers, investment bankers) and Premier League football. Top footballers like Erling Haaland earn around £525,000 per week (approximately £27.3 million per year), which works out to about £0.87 per second."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a footballer earn per second?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It varies hugely. A top Premier League player earning £300,000/week makes about £0.50 per second. Erling Haaland at ~£525,000/week earns approximately £0.87 per second. Meanwhile, a League Two player on £1,000/week earns about £0.002 per second."
            }
          }
        ]
      },
      {
        "@type": "WebApplication",
        "name": "Salary Per Second Calculator",
        "url": "https://www.salarytakehome.co.uk/salary-per-second",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "GBP"
        },
        "description": "Convert any salary into per year, month, week, day, hour, minute, and second with a live earnings counter."
      }
    ]
  };

  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Salary Per Second" }]} fullWidth>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-medium">
                  <Timer className="w-6 h-6 text-white" />
                </div>
                Salary Per Second
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                How much do you earn per second, per minute, per hour? Enter any salary and find out.
              </p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: March 2026
              </p>
            </div>

            {/* Input Card */}
            <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 md:p-8 mb-8 max-w-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Banknote className="w-5 h-5 text-white" />
                </div>
                Enter a Salary
              </h2>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Annual salary
              </label>
              <div className="relative mb-5">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                <input
                  type="text"
                  value={salaryInput}
                  onChange={(e) => handleInput(e.target.value)}
                  placeholder="50,000"
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                />
              </div>
              <p className="text-sm text-gray-500 mb-3">Or try a famous salary:</p>
              <div className="flex flex-wrap gap-2">
                {PRESETS.map(p => (
                  <button
                    key={p.label}
                    onClick={() => handlePreset(p.salary)}
                    className="px-3 py-2 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-semibold hover:bg-emerald-100 transition-colors border border-emerald-200/50"
                  >
                    {p.label} <span className="text-emerald-500 font-normal">({p.note})</span>
                  </button>
                ))}
              </div>
            </div>

            <AdUnit showScrollHint />

            {/* Results */}
            {breakdown && (
              <div className="space-y-6 mb-10">
                {/* Live Counter */}
                <LiveCounter perSecond={breakdown.perSecond} />

                {/* Time Breakdown Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                  {timeCards.map(card => {
                    const Icon = card.icon;
                    const colors = colorMap[card.color];
                    const [gradient, border] = [
                      colors.split(' ').slice(0, 2).join(' '),
                      colors.split(' ').slice(2).join(' ')
                    ];
                    return (
                      <div key={card.label} className={`bg-white rounded-2xl border ${border} shadow-medium p-4 md:p-5 hover:shadow-lg transition-all duration-200`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-500">{card.label}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-gray-900">{formatAmount(card.amount)}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Fun Comparisons */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-emerald-600" />
                    Fun Comparisons
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {funComparisons.map(comp => {
                      const Icon = comp.icon;
                      return (
                        <div key={comp.label} className="bg-white rounded-2xl border border-gray-100 shadow-medium p-4 hover:shadow-lg transition-all duration-200">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-semibold text-gray-700">{comp.label}</span>
                          </div>
                          <p className="text-xs text-gray-400 mb-2">{comp.duration}</p>
                          <p className="text-lg font-bold text-gray-900">{formatAmount(comp.amount)}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA Card */}
                <a
                  href="/take-home-pay-calculator"
                  className="block bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white hover:from-blue-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg mb-1">Want to Know Your Take-Home Pay?</p>
                      <p className="text-blue-100 text-sm">Use our tax calculator to see what you actually keep after tax, NI, student loans, and pension.</p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            )}

            {/* Empty State */}
            {!breakdown && (
              <div className="bg-white/80 backdrop-blur-light rounded-3xl border-2 border-dashed border-gray-200 p-8 md:p-12 text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Timer className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">Enter a salary to get started</h3>
                <p className="text-gray-500 text-sm max-w-md mx-auto">
                  Type an annual salary or tap one of the preset buttons above to see the full breakdown — from yearly all the way down to per second.
                </p>
              </div>
            )}

            {/* Information Cards */}
            <div className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-6">

                {/* How We Calculate This */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Info className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">How We Calculate This</h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    We use standard UK working assumptions to convert your annual salary:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Period</th>
                          <th className="text-left py-2 font-semibold text-gray-700">Calculation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Monthly</td>
                          <td className="py-2 text-gray-600">Salary ÷ 12</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Weekly</td>
                          <td className="py-2 text-gray-600">Salary ÷ 52</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Daily</td>
                          <td className="py-2 text-gray-600">Salary ÷ 260 working days</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Hourly</td>
                          <td className="py-2 text-gray-600">Salary ÷ 1,950 hours (52 × 37.5)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Per Minute</td>
                          <td className="py-2 text-gray-600">Hourly rate ÷ 60</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Per Second</td>
                          <td className="py-2 text-gray-600">Salary ÷ 31,557,600 (365.25 days)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The live counter uses calendar seconds (24/7) since salaried employees earn continuously. Working-time rates use a 37.5-hour, 5-day week.
                  </p>
                </div>

                {/* Average UK Salaries */}
                <div className="bg-white rounded-2xl border border-emerald-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Average UK Salaries by Sector</h3>
                  </div>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Sector</th>
                          <th className="text-right py-2 pr-4 font-semibold text-gray-700">Average Salary</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Per Second</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Finance &amp; Insurance</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£47,000</td>
                          <td className="py-2 text-right text-emerald-600 font-medium">£0.0015</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">IT &amp; Technology</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£44,000</td>
                          <td className="py-2 text-right text-emerald-600 font-medium">£0.0014</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Construction</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£35,000</td>
                          <td className="py-2 text-right text-emerald-600 font-medium">£0.0011</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Education</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£31,000</td>
                          <td className="py-2 text-right text-emerald-600 font-medium">£0.0010</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Healthcare</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£30,000</td>
                          <td className="py-2 text-right text-emerald-600 font-medium">£0.0010</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Retail &amp; Hospitality</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£22,000</td>
                          <td className="py-2 text-right text-emerald-600 font-medium">£0.0007</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Source: ONS Annual Survey of Hours and Earnings. See how your sector compares using our{' '}
                    <a href="/compare-salaries" className="text-blue-600 hover:underline">Compare Salaries</a> calculator.
                  </p>
                </div>

                {/* Highest-Paid in the UK */}
                <div className="bg-white rounded-2xl border border-purple-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Highest-Paid in the UK</h3>
                  </div>
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-gray-700">Role</th>
                          <th className="text-right py-2 pr-4 font-semibold text-gray-700">~Annual</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Per Second</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Erling Haaland</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£27.3m</td>
                          <td className="py-2 text-right text-purple-600 font-medium">£0.87</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Mo Salah</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£20.8m</td>
                          <td className="py-2 text-right text-purple-600 font-medium">£0.66</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Top FTSE 100 CEO</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£4.5m</td>
                          <td className="py-2 text-right text-purple-600 font-medium">£0.14</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Top surgeon</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£200k</td>
                          <td className="py-2 text-right text-purple-600 font-medium">£0.006</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">UK Prime Minister</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£167k</td>
                          <td className="py-2 text-right text-purple-600 font-medium">£0.005</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 text-gray-700">Top KC (barrister)</td>
                          <td className="py-2 pr-4 text-right text-gray-900 font-medium">£500k</td>
                          <td className="py-2 text-right text-purple-600 font-medium">£0.016</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Footballer wages are approximate and based on reported weekly pay. Click the preset buttons above to see any of these in the live counter.
                  </p>
                </div>

                {/* Fun Salary Facts */}
                <div className="bg-white rounded-2xl border border-amber-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl">Fun Salary Facts</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>Haaland earns more <strong>per minute</strong> (£52) than most UK workers earn <strong>per hour</strong> (£18)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>On the UK median salary (£29,669), you earn about <strong>£0.001 per second</strong> — a penny every 10 seconds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>A minimum wage worker earns about <strong>£0.20 per minute</strong>, while a FTSE 100 CEO earns about <strong>£38 per minute</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>During a 2-hour football match, Haaland earns approximately <strong>£6,233</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>The average UK worker would need to work for <strong>780 years</strong> to earn what Haaland makes in one year</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-4">
                    Want to see how much of these salaries actually ends up in the bank? Try our{' '}
                    <a href="/take-home-pay-calculator" className="text-blue-600 hover:underline">Take-Home Pay Calculator</a>.
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl border border-teal-100 shadow-medium p-6 md:p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl md:text-2xl">Salary Per Second FAQs</h3>
                </div>
                <div className="space-y-5">
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">How much is £50,000 a year per second?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A £50,000 annual salary works out to approximately £0.0016 per second, based on a 365.25-day year. That&apos;s about £0.10 per minute, £25.64 per hour (based on a 37.5-hour working week), or £192.31 per working day.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">How many hours are in a working year?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A standard UK working year has 1,950 hours, based on 52 weeks at 37.5 hours per week. This equates to 260 working days (52 weeks × 5 days). Some employers use different assumptions (e.g. 40-hour weeks or deducting bank holidays), which would change the hourly and daily rates slightly.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What is the average UK salary?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The average (mean) UK salary is approximately £35,000 per year, while the median is around £29,669. The median is usually more representative since it isn&apos;t skewed by very high earners. Both figures vary significantly by region — London salaries are typically 20-30% higher than the national average.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">How is salary per second calculated?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We divide the annual salary by 31,557,600 (the number of seconds in a year, based on 365.25 days to account for leap years). This gives a continuous rate that applies 24/7. For working-time rates (hourly, daily), we use 1,950 working hours and 260 working days per year.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">Do I earn money while I sleep?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      If you&apos;re on an annual salary, your pay is fixed regardless of hours worked — so your salary effectively accrues continuously, including while you sleep. Our live counter reflects this. However, your contracted hourly rate is based on working hours only, which is why the &quot;per hour&quot; figure is higher than simply dividing the annual salary by all hours in a year.
                    </p>
                  </div>
                  <div className="pb-5 border-b border-gray-200">
                    <h4 className="font-bold text-gray-900 text-base mb-2">What is the highest salary in the UK?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      The highest reported salaries in the UK are in Premier League football and finance. Top Premier League footballers earn £200,000-£525,000+ per week. FTSE 100 CEOs average around £4.5 million per year. The highest-paid non-sports roles are typically in hedge fund management and private equity.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">How much does a footballer earn per second?</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      It varies enormously. Erling Haaland at ~£400,000/week earns about £0.66 per second. A solid Premier League starter on £100,000/week earns about £0.16 per second. A League Two player on £1,000/week earns about £0.002 per second — still more than the UK average salary rate.
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
                  This tool provides simple salary conversions for entertainment and informational purposes.
                  It does not account for tax, National Insurance, or other deductions — for after-tax figures,
                  use our <a href="/take-home-pay-calculator" className="text-blue-600 hover:underline">Take-Home Pay Calculator</a>.
                  Celebrity and footballer salary figures are approximate and based on publicly reported numbers.
                  Average salary data is sourced from the ONS and may not reflect current figures exactly.
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
              <a href="/blog/uk-minimum-wage-2025-26" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Salary Guide</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">UK Minimum Wage 2025/26 — Full Guide</p>
              </a>
              <a href="/blog/50k-salary-take-home" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Salary Guide</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">£50k Salary Take Home Pay Breakdown</p>
              </a>
              <a href="/blog/how-to-compare-job-offers" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Money Tips</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">How to Compare Job Offers Beyond Salary</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
