"use client";
import React, { useState, useMemo } from 'react';
import { Calculator, Info, Lightbulb, HelpCircle } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';

export default function ProRata() {
  const [formData, setFormData] = useState({
    fullTimeSalary: '',
    hoursPerWeek: '37.5',
  });

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const results = useMemo(() => {
    const fullSalary = parseFloat(formData.fullTimeSalary.replace(/,/g, '')) || 0;
    const hoursPerWeek = parseFloat(formData.hoursPerWeek) || 37.5;

    if (fullSalary <= 0 || hoursPerWeek <= 0) return null;

    // Pro-rata calculation: (part-time hours / full-time hours) * full-time salary
    const fullTimeHours = 37.5; // Standard full-time hours
    const ratio = hoursPerWeek / fullTimeHours;
    const proRataSalary = fullSalary * ratio;

    // Estimate tax (simplified)
    const personalAllowance = 12570;
    const taxable = Math.max(0, proRataSalary - personalAllowance);
    const tax = Math.min(taxable, 37700) * 0.2 + Math.max(0, taxable - 37700) * 0.4;
    const niThreshold = 12570;
    const ni = Math.max(0, proRataSalary - niThreshold) * 0.08;
    const takeHome = proRataSalary - tax - ni;

    return {
      ratio: (ratio * 100).toFixed(1),
      salary: proRataSalary,
      tax,
      ni,
      takeHome,
      hoursPerWeek,
      fullTimeHours,
      monthly: proRataSalary / 12,
      weekly: proRataSalary / 52,
      daily: proRataSalary / 260,
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
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Pro Rata Calculator" }]} fullWidth>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [{
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I calculate a pro-rata salary?",
                  "acceptedAnswer": { "@type": "Answer", "text": "To calculate a pro-rata salary, divide the full-time salary by the full-time hours, then multiply by your actual working hours. For example, if the full-time salary is £30,000 for 37.5 hours per week, working 3 days (22.5 hours) gives a pro-rata salary of £18,000 per year." }
                },
                {
                  "@type": "Question",
                  "name": "What does pro-rata mean for part-time workers?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Pro-rata means 'in proportion'. For part-time workers, it means your salary, holiday entitlement, and benefits are calculated proportionally based on the hours you work compared to a full-time equivalent. If you work 60% of full-time hours, you receive 60% of the full-time salary." }
                },
                {
                  "@type": "Question",
                  "name": "How is tax calculated on a part-time pro-rata salary?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Tax on a pro-rata salary is calculated the same way as any other salary. You receive the full £12,570 personal allowance regardless of whether you work full-time or part-time. This means part-time workers on lower pro-rata salaries may pay proportionally less tax than their full-time equivalent." }
                },
                {
                  "@type": "Question",
                  "name": "How is pro-rata holiday entitlement calculated?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Full-time workers in the UK are entitled to 28 days of paid holiday (including bank holidays). Part-time workers receive a pro-rata share. If you work 3 days per week, your entitlement is 3/5 × 28 = 16.8 days per year. Employers may round this up to 17 days." }
                },
                {
                  "@type": "Question",
                  "name": "Does working 3 days a week change my tax band?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Working 3 days a week at a pro-rata salary puts you in a lower tax band than the full-time equivalent. For example, a full-time £50,000 salary falls into the higher rate band, but the 3-day pro-rata equivalent of £30,000 stays entirely within the basic rate band, meaning you pay a lower effective tax rate." }
                },
                {
                  "@type": "Question",
                  "name": "Are part-time workers entitled to the same hourly rate as full-time workers?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Yes. Under the Part-Time Workers (Prevention of Less Favourable Treatment) Regulations 2000, part-time workers must receive the same hourly rate as comparable full-time workers. They are also entitled to the same pro-rata benefits including holiday, sick pay, and pension contributions." }
                },
                {
                  "@type": "Question",
                  "name": "How does going part-time affect my pension contributions?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Your pension contributions are calculated on your actual pro-rata salary, not the full-time equivalent. If the full-time salary is £40,000 and you work 3 days (pro-rata £24,000), both your contributions and employer contributions are based on £24,000. However, you still receive tax relief on pension contributions at your marginal rate." }
                }
              ]
            }, {
              "@type": "WebApplication",
              "name": "Pro Rata Salary Calculator UK",
              "url": "https://www.salarytakehome.co.uk/pro-rata-furlough",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP"
              },
              "description": "Free UK pro rata salary calculator. Work out your part-time salary based on full-time equivalent and working hours."
            }, {
              "@type": "HowTo",
              "name": "How to calculate a pro rata salary",
              "description": "Work out your pro rata salary from a full-time equivalent (FTE) salary and the hours you work per week.",
              "totalTime": "PT1M",
              "step": [
                {
                  "@type": "HowToStep",
                  "position": 1,
                  "name": "Find the full-time equivalent (FTE) salary",
                  "text": "Identify the full-time salary for the role — this is usually stated on the job advert as 'pro rata' followed by an FTE figure (e.g. '£40,000 pro rata')."
                },
                {
                  "@type": "HowToStep",
                  "position": 2,
                  "name": "Divide your hours by the full-time hours",
                  "text": "Take your weekly hours and divide by the standard full-time hours (typically 37.5 in the UK). For example, 22.5 ÷ 37.5 = 0.6 (60%)."
                },
                {
                  "@type": "HowToStep",
                  "position": 3,
                  "name": "Multiply by the FTE salary",
                  "text": "Multiply the ratio from step 2 by the FTE salary. For £40,000 at 0.6 FTE: 0.6 × £40,000 = £24,000 pro rata salary."
                },
                {
                  "@type": "HowToStep",
                  "position": 4,
                  "name": "Apply tax, NI, and pension for take-home",
                  "text": "Apply UK income tax, National Insurance, and any pension contributions to the pro rata salary to get your take-home pay. Part-time workers keep the full £12,570 personal allowance."
                }
              ]
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
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                Pro Rata Salary Calculator
            </h1>
            <p className="text-base text-gray-700">
              Work out your pro rata salary in seconds. Enter the full-time equivalent (FTE) salary and your working hours to calculate your annual pay, pro rata percentage, and estimated take-home — updated for 2026/27.
            </p>
              <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                Last updated: April 2026 · Reflects 2026/27 tax year
              </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-4 lg:gap-3 lg:scale-[0.92] lg:origin-top 2xl:scale-100">
            {/* Form */}
            <div className="space-y-5">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Full-Time Equivalent (FTE) Salary</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.fullTimeSalary}
                    onChange={(e) => setFormData({ ...formData, fullTimeSalary: formatNumber(e.target.value) })}
                    placeholder="30,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">The salary you would earn if working full-time (37.5 hours/week)</p>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6 lg:p-4 xl:p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Your Working Hours Per Week</label>
                <input
                  type="number"
                  value={formData.hoursPerWeek}
                  onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                  min="1"
                  max="60"
                  step="0.5"
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                />
                <p className="text-xs text-gray-500 mt-2">Standard full-time is 37.5 hours per week</p>
              </div>
            </div>

            {/* Results */}
            <div className="xl:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Pro-Rata Salary</h3>

                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Annual Pro-Rata Salary</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.salary)}</div>
                      <div className="text-sm opacity-90 mt-2">per year</div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="text-xs text-gray-600 mb-1">Pro-Rata Percentage</div>
                        <div className="text-xl font-bold text-gray-900">{results.ratio}%</div>
                        <div className="text-xs text-gray-500 mt-1">{results.hoursPerWeek}h/week vs {results.fullTimeHours}h/week full-time</div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <div className="text-xs text-gray-600 mb-1">Monthly</div>
                          <div className="text-sm font-bold text-gray-900">{formatCurrency(results.monthly)}</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <div className="text-xs text-gray-600 mb-1">Weekly</div>
                          <div className="text-sm font-bold text-gray-900">{formatCurrency(results.weekly)}</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                          <div className="text-xs text-gray-600 mb-1">Daily</div>
                          <div className="text-sm font-bold text-gray-900">{formatCurrency(results.daily)}</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center py-3 border-t border-gray-100">
                        <span className="text-gray-700 font-medium">Estimated Take-Home Pay</span>
                        <span className="font-bold text-lg text-green-600">{formatCurrency(results.takeHome)}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Note:</strong> Take-home pay is an estimate based on standard tax rates. Actual amounts may vary based on your tax code, pension contributions, and other deductions.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Calculate your pro-rata salary based on your working hours</p>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Understanding Pro-Rata Salary Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Info className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">What is pro rata pay?</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Pro-rata</strong> is a Latin term meaning "in proportion." When applied to salary, it refers to the proportional payment you receive based on the hours you work compared to a full-time equivalent position.
                  </p>
                  <p>
                    For example, if a full-time position offers £40,000 per year for 37.5 hours per week, and you work 30 hours per week, your pro-rata salary would be calculated as:
                  </p>
                  <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <p className="font-mono text-center text-lg">
                      (30 ÷ 37.5) × £40,000 = <strong>£32,000</strong> per year
                    </p>
                  </div>
                  <p>
                    Pro-rata calculations are commonly used for part-time workers, job sharers, and those transitioning between full-time and part-time roles. Understanding your pro-rata salary helps you compare job offers accurately and understand your true earning potential. For a deeper look at the meaning and legal context, read our <a href="/blog/pro-rata-salary-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">pro rata salary guide</a>, or visit <a href="https://www.gov.uk/part-time-worker-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK Part-Time Worker Rights</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How to work out pro rata salary — step-by-step */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-emerald-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">How to work out pro rata salary (4 steps)</h2>
                </div>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm flex items-center justify-center">1</span>
                    <div>
                      <strong className="text-gray-900">Find the full-time equivalent (FTE) salary.</strong> This is the salary shown on the job advert, usually labelled &ldquo;pro rata&rdquo; — e.g. <em>&ldquo;£40,000 pro rata&rdquo;</em>.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm flex items-center justify-center">2</span>
                    <div>
                      <strong className="text-gray-900">Divide your hours by full-time hours.</strong> UK full-time is typically 37.5 hours per week. For 22.5 hours: 22.5 &divide; 37.5 = <strong>0.6</strong> (60%).
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm flex items-center justify-center">3</span>
                    <div>
                      <strong className="text-gray-900">Multiply by the FTE salary.</strong> 0.6 &times; £40,000 = <strong>£24,000</strong> pro rata salary.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm flex items-center justify-center">4</span>
                    <div>
                      <strong className="text-gray-900">Apply tax, NI and pension for take-home.</strong> Part-time workers keep the full £12,570 personal allowance, so take-home is often proportionally higher than a simple scale would suggest. The calculator above does this for you automatically.
                    </div>
                  </li>
                </ol>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 mt-6">
                  <p className="font-mono text-center text-base text-gray-900">
                    (Your hours &divide; Full-time hours) &times; FTE salary = <strong>Pro rata salary</strong>
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  Starting or leaving a job partway through a month? The formula changes slightly — see the <a href="/blog/pro-rata-salary-explained#how-to-calculate-a-part-month-salary-uk" className="text-blue-600 hover:text-blue-800 underline font-semibold">part-month salary calculation</a> in our pro rata guide.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Pro-Rata Matters Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Why knowing your pro rata salary matters</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Part-Time Workers</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Compare job offers accurately by looking at FTE salaries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Understand your hourly rate compared to full-time colleagues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Calculate holiday entitlement and other benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Plan for changes in working hours</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">For Employers</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Ensure fair and consistent pay across different contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Calculate accurate pension contributions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Budget for part-time positions accurately</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span>Comply with part-time workers' regulations</span>
                      </li>
                    </ul>
                  </div>
                </div>
                  <p className="text-gray-700 text-base leading-relaxed mt-6">
                    To understand how your pro-rata salary translates to take-home pay, use our <a href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</a>. You might also want to read about <a href="/blog/pension-contributions-tax-relief" className="text-blue-600 hover:text-blue-800 underline font-semibold">pension contributions and tax relief</a> to maximise the value of your part-time salary, or check the <a href="/blog/uk-tax-changes-2026-27" className="text-blue-600 hover:text-blue-800 underline font-semibold">latest UK tax changes for 2026/27</a>.
                  </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro-Rata Tax Advantages Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-purple-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Pro rata tax advantages</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Part-time workers keep the full <strong>£12,570 personal allowance</strong>, which means a larger proportion of your income is tax-free compared to your full-time equivalent. Working fewer hours can keep you in a lower tax band, significantly reducing your effective tax rate.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-purple-50">
                          <th className="text-left p-3 border-b border-purple-200 font-semibold text-gray-900">FTE Salary</th>
                          <th className="text-left p-3 border-b border-purple-200 font-semibold text-gray-900">Working Pattern</th>
                          <th className="text-left p-3 border-b border-purple-200 font-semibold text-gray-900">Pro-Rata Salary</th>
                          <th className="text-left p-3 border-b border-purple-200 font-semibold text-gray-900">Tax Band</th>
                          <th className="text-left p-3 border-b border-purple-200 font-semibold text-gray-900">Effective Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">£40,000</td>
                          <td className="p-3 text-gray-700">3 days (22.5h)</td>
                          <td className="p-3 font-semibold text-gray-900">£24,000</td>
                          <td className="p-3 text-gray-700">Basic (20%)</td>
                          <td className="p-3 font-semibold text-green-600">~18%</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                          <td className="p-3 text-gray-700">£40,000</td>
                          <td className="p-3 text-gray-700">4 days (30h)</td>
                          <td className="p-3 font-semibold text-gray-900">£32,000</td>
                          <td className="p-3 text-gray-700">Basic (20%)</td>
                          <td className="p-3 font-semibold text-green-600">~22%</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">£50,000</td>
                          <td className="p-3 text-gray-700">3 days (22.5h)</td>
                          <td className="p-3 font-semibold text-gray-900">£30,000</td>
                          <td className="p-3 text-gray-700">Basic (20%)</td>
                          <td className="p-3 font-semibold text-green-600">~22%</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                          <td className="p-3 text-gray-700">£50,000</td>
                          <td className="p-3 text-gray-700">4 days (30h)</td>
                          <td className="p-3 font-semibold text-gray-900">£40,000</td>
                          <td className="p-3 text-gray-700">Basic (20%)</td>
                          <td className="p-3 font-semibold text-green-600">~25%</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-700">£60,000</td>
                          <td className="p-3 text-gray-700">3 days (22.5h)</td>
                          <td className="p-3 font-semibold text-gray-900">£36,000</td>
                          <td className="p-3 text-gray-700">Basic (20%)</td>
                          <td className="p-3 font-semibold text-green-600">~24%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> A full-time £60,000 salary falls into the higher (40%) tax band, but the 3-day pro-rata equivalent of £36,000 stays entirely within the basic rate band — saving you thousands in tax each year.
                    </p>
                  </div>
                  <p>
                    Read more in our <a href="/blog/pro-rata-salary-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">pro-rata salary guide</a>, or use the <a href="/take-home-pay-calculator" className="text-blue-600 hover:text-blue-800 underline font-semibold">take-home pay calculator</a> to see your exact figures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro-Rata Holiday & Benefits Entitlement Card */}
        <div className="flex gap-6 mx-auto px-8 mt-4">
          <div className="flex-1 xl:pr-[192px]">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-teal-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Pro rata holiday &amp; benefits entitlement</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Full-time workers in the UK are entitled to a minimum of <strong>28 days</strong> paid holiday per year (including bank holidays). Part-time workers receive a pro-rata share based on the days or hours they work.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-teal-50">
                          <th className="text-left p-3 border-b border-teal-200 font-semibold text-gray-900">Working Pattern</th>
                          <th className="text-left p-3 border-b border-teal-200 font-semibold text-gray-900">Days/Week</th>
                          <th className="text-left p-3 border-b border-teal-200 font-semibold text-gray-900">Statutory Holiday (Days)</th>
                          <th className="text-left p-3 border-b border-teal-200 font-semibold text-gray-900">Statutory Holiday (Hours)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">Full-time</td>
                          <td className="p-3 text-gray-700">5</td>
                          <td className="p-3 font-semibold text-gray-900">28 days</td>
                          <td className="p-3 text-gray-700">224 hours</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                          <td className="p-3 text-gray-700">4 days/week</td>
                          <td className="p-3 text-gray-700">4</td>
                          <td className="p-3 font-semibold text-gray-900">22.4 days</td>
                          <td className="p-3 text-gray-700">179.2 hours</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-700">3 days/week</td>
                          <td className="p-3 text-gray-700">3</td>
                          <td className="p-3 font-semibold text-gray-900">16.8 days</td>
                          <td className="p-3 text-gray-700">134.4 hours</td>
                        </tr>
                        <tr className="border-b border-gray-100 bg-gray-50/50">
                          <td className="p-3 text-gray-700">2.5 days/week</td>
                          <td className="p-3 text-gray-700">2.5</td>
                          <td className="p-3 font-semibold text-gray-900">14 days</td>
                          <td className="p-3 text-gray-700">112 hours</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-700">2 days/week</td>
                          <td className="p-3 text-gray-700">2</td>
                          <td className="p-3 font-semibold text-gray-900">11.2 days</td>
                          <td className="p-3 text-gray-700">89.6 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    Bank holidays can be handled differently by employers. Some include them in the 28-day total, while others give part-time workers a pro-rata number of bank holidays on top of their base entitlement. Check your contract to see which method your employer uses.
                  </p>
                  <p>
                    For more detail, read our <a href="/blog/pro-rata-salary-explained" className="text-blue-600 hover:text-blue-800 underline font-semibold">complete pro-rata salary guide</a> or check the official <a href="https://www.gov.uk/holiday-entitlement-rights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">GOV.UK holiday entitlement rights</a>.
                  </p>
                </div>
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
                  <h2 className="font-bold text-gray-900 text-2xl">Pro rata salary FAQs</h2>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What does pro-rata salary mean?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Pro-rata salary means your pay is proportional to the hours you work compared to a full-time equivalent. If a full-time role pays £40,000 for 37.5 hours per week and you work 30 hours, your pro-rata salary would be £32,000 (30/37.5 × £40,000). See what a <a href="/blog/40k-salary-take-home" className="text-blue-600 hover:text-blue-800 underline font-semibold">£40k salary looks like after tax</a> to understand the full picture.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How is pro-rata salary calculated?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Pro-rata salary is calculated using this formula: (Your working hours ÷ Full-time hours) × Full-time salary. For example, working 22.5 hours when full-time is 37.5 hours at a £30,000 salary: (22.5 ÷ 37.5) × £30,000 = £18,000 pro-rata salary.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What is considered full-time hours in the UK?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      In the UK, full-time hours are typically 35-40 hours per week, with 37.5 hours being the most common standard. However, this can vary by industry and employer. Some sectors consider 35 hours full-time, while others may use 40 hours.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Do pro-rata workers get the same benefits?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Part-time workers have the legal right to be treated no less favourably than full-time colleagues. Benefits like holiday entitlement, sick pay, and pension contributions are usually calculated on a pro-rata basis, meaning you receive a proportional amount.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How is holiday entitlement calculated for part-time workers?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Holiday entitlement is calculated pro-rata based on your working hours. If full-time workers get 28 days and you work 3 days a week (vs 5), you'd receive 16.8 days (28 × 3/5). This is often rounded up to 17 days.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does pro-rata affect my pension contributions?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, pension contributions are typically based on your actual pro-rata salary, not the full-time equivalent. Both your contributions and your employer's contributions will be calculated on your reduced salary. Learn more about <a href="/blog/salary-sacrifice-complete-guide" className="text-blue-600 hover:text-blue-800 underline font-semibold">salary sacrifice</a> as a tax-efficient way to boost your pension.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Can I negotiate a higher pro-rata salary?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      You can negotiate the full-time equivalent salary that your pro-rata is based on. When job hunting, compare the FTE salary to similar full-time roles to ensure you're being paid fairly. Your pro-rata percentage should match your working hours exactly.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How does pro-rata work for term-time only contracts?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Term-time contracts work differently - your annual salary is spread across 12 months but you only work during term time. The calculation includes weeks worked, not just hours per week. For example, working 39 weeks instead of 52 affects your pro-rata calculation.
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
              <a href="/blog/pro-rata-salary-explained" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Salary Guide</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Pro-Rata Salary Explained: Pay, Holiday & Pension</p>
              </a>
              <a href="/blog/uk-tax-changes-2026-27" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                <span className="text-xs font-semibold text-blue-600">Tax Updates</span>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">UK Tax Changes 2026/27</p>
              </a>
            </div>
          </div>
        </div>
      </div>

    </LayoutWrapper>
  );
}
