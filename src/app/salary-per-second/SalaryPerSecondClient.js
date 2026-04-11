"use client";
import React, { useState, useMemo, useEffect, useRef, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Timer,
  Clock,
  Calendar,
  CalendarDays,
  Banknote,
  Coffee,
  Moon,
  Tv,
  UtensilsCrossed,
  Palmtree,
  Zap,
  ChevronRight,
  Share2
} from 'lucide-react';
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

function SalaryPerSecondInner() {
  const searchParams = useSearchParams();
  const [salaryInput, setSalaryInput] = useState('');
  const [copied, setCopied] = useState(false);

  // Read salary from URL params on mount
  useEffect(() => {
    const s = searchParams.get('salary');
    if (s) setSalaryInput(formatNumberInput(s));
  }, [searchParams]);

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

  const shareUrl = typeof window !== 'undefined' && salary > 0
    ? `${window.location.origin}/salary-per-second?salary=${salary}`
    : '';

  const handleShare = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

  return (
    <>
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

          {/* Share Button */}
          {shareUrl && (
            <div className="flex justify-end">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
              >
                <Share2 className="w-4 h-4" />
                {copied ? 'Link copied!' : 'Share these results'}
              </button>
            </div>
          )}

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
    </>
  );
}

export default function SalaryPerSecondClient() {
  return (
    <Suspense fallback={
      <div className="bg-white/80 backdrop-blur-light rounded-3xl border-2 border-dashed border-gray-200 p-8 md:p-12 text-center mb-10">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Timer className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-lg font-bold text-gray-700 mb-2">Loading calculator...</h3>
      </div>
    }>
      <SalaryPerSecondInner />
    </Suspense>
  );
}
