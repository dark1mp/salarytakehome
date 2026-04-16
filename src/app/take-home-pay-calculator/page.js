import { Calculator, PoundSterling, Users, Building, Award, ChevronRight, Info, Home, AlertTriangle, HelpCircle } from 'lucide-react';

import ErrorBoundary from '../ErrorBoundary';
import AdUnit from '../components/AdUnit';
import LayoutWrapper from '../components/LayoutWrapper';
import TaxCalculatorClient from './TaxCalculatorClient';

export default function TaxCalculator() {
  return (
    <ErrorBoundary>
      <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Take Home Pay Calculator" }]} fullWidth>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [{
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much tax do I pay on a £30,000 salary in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "On a £30,000 salary in 2026/27, you pay £3,486 in income tax (20% on earnings above the £12,570 personal allowance) and £1,394.40 in National Insurance (8% on earnings between £12,570 and £50,270). Your total take-home pay is approximately £25,119.60 per year or £2,093.30 per month."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the personal allowance for the 2026/27 tax year?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The personal allowance for 2026/27 is £12,570 — unchanged since April 2021 and frozen until April 2031 (Autumn Budget 2025). This is the amount you can earn before paying any income tax. If you earn over £100,000, your personal allowance is reduced by £1 for every £2 earned above £100,000, meaning it reaches zero at £125,140."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does National Insurance affect my take-home pay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "In 2026/27, you pay 8% National Insurance on earnings between £12,570 and £50,270, and 2% on earnings above £50,270. For example, on a £40,000 salary, you pay £2,194.40 in NI contributions, reducing your monthly take-home pay by about £182.87."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I pay more tax in Scotland than England?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Scotland has different income tax rates with five bands: starter (19%), basic (20%), intermediate (21%), higher (42%), and top (47%). Lower earners may pay slightly less tax in Scotland, while higher earners generally pay more. For example, someone earning £50,000 pays around £600 more in Scotland than in England."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the £100,000 tax trap?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When you earn over £100,000, your £12,570 personal allowance is reduced by £1 for every £2 earned above £100,000. This creates an effective 60% tax rate on income between £100,000 and £125,140. For every additional £100 earned in this range, you lose £50 of personal allowance plus pay 40% tax on the £100, keeping only about £40."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do pension contributions reduce my tax bill?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pension contributions are deducted from your gross salary before tax is calculated, reducing your taxable income. A 5% pension contribution on a £40,000 salary saves £400 in tax for a basic rate taxpayer. Higher rate taxpayers save even more — a £2,000 contribution at 40% saves £800 in tax. Salary sacrifice pension contributions also reduce National Insurance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What changed for the 2026/27 tax year?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For 2026/27, the Personal Allowance (£12,570), higher-rate threshold (£50,270) and additional-rate threshold (£125,140) remain frozen — the Autumn Budget 2025 extended the freeze until April 2031. Employee National Insurance stays at 8% (main rate) and 2% (above the upper earnings limit). In Scotland, the Starter and Basic rate band limits were extended (to £16,537 and £29,526), slightly reducing tax for most Scottish taxpayers."
                  }
                }
              ]
            },
            {
              "@type": "WebApplication",
              "name": "Take Home Pay Calculator UK",
              "url": "https://www.salarytakehome.co.uk/take-home-pay-calculator",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP"
              },
              "description": "Free UK take home pay calculator. Calculate your net salary after income tax, National Insurance, student loans, and pension contributions for 2026/27."
            }]
          }) }}
        />

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
          {/* Skip to main content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-72 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
          >
            Skip to main content
          </a>

          <main id="main-content">
            <div className="relative mx-auto px-4 md:px-8 py-8">
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
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    Take Home Pay Calculator
                  </h1>
                  <p className="text-base text-gray-600">
                    Take home pay (also called net pay) is the amount of money you receive after all mandatory deductions taken from your salary. In the UK, this typically includes income tax, National Insurance, and may also include pension contributions and student loan repayments.
                  </p>
                  <p className="text-sm text-gray-400 mt-3 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    Last updated: April 2026 · Reflects 2026/27 tax year
                  </p>
                </div>

                <TaxCalculatorClient />
              </div>
            </div>

            {/* Optimized Information Cards */}
            <div className="flex gap-6 mx-auto px-4 md:px-8 mt-10">
              <div className="flex-1 xl:pr-[192px]">
                {/* Topic Information Cards */}
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Your Deductions</h2>
                <div className="grid lg:grid-cols-2 gap-6 mb-6">

                  {/* Income Tax Card */}
                  <div className="relative group overflow-hidden bg-white rounded-2xl border border-red-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                          <PoundSterling className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl">Income Tax</h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        UK income tax is charged on earnings above your Personal Allowance (£12,570 for 2026/27, frozen until April 2031). Tax rates range from 20% (basic rate) to 45% (additional rate). Scottish taxpayers have different rates and bands.
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Learn More</p>
                        <div className="flex flex-wrap gap-2">
                          <a href="/blog/100k-tax-trap" className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium">
                            <ChevronRight className="w-4 h-4" />£100k Tax Trap
                          </a>
                          <a href="/blog/uk-tax-changes-2026-27" className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium">
                            <ChevronRight className="w-4 h-4" />2026/27 Tax Changes
                          </a>
                          <a href="/blog/75k-salary-take-home" className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium">
                            <ChevronRight className="w-4 h-4" />£75k Salary Breakdown
                          </a>
                          <a href="/blog/100k-salary-take-home" className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 font-medium">
                            <ChevronRight className="w-4 h-4" />£100k Salary Breakdown
                          </a>
                        </div>
                        <div className="pt-2 border-t border-gray-100 mt-3">
                          <a href="https://www.gov.uk/income-tax-rates" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd"/><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd"/></svg>
                            GOV.UK - Income Tax Rates
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* National Insurance Card */}
                  <div className="relative group overflow-hidden bg-white rounded-2xl border border-orange-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl">National Insurance</h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        National Insurance contributions fund state benefits including the State Pension and NHS. For 2026/27, employees pay 8% on earnings between £12,570 and £50,270, then 2% above that threshold.
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Learn More</p>
                        <div className="flex flex-wrap gap-2">
                          <a href="/blog/maximize-take-home-pay-2024" className="inline-flex items-center gap-1 text-sm text-orange-600 hover:text-orange-700 font-medium">
                            <ChevronRight className="w-4 h-4" />Maximise Take-Home Pay
                          </a>
                        </div>
                        <div className="pt-2 border-t border-gray-100 mt-3">
                          <a href="https://www.gov.uk/national-insurance" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd"/><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd"/></svg>
                            GOV.UK - National Insurance
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pensions Card */}
                  <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl">Pension Contributions</h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Workplace pension contributions reduce your taxable income, providing tax relief at your marginal rate. Auto-enrolment requires minimum 5% employee and 3% employer contributions. Salary sacrifice pensions offer additional NI savings.
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Learn More</p>
                        <div className="flex flex-wrap gap-2">
                          <a href="/blog/pension-contributions-tax-relief" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
                            <ChevronRight className="w-4 h-4" />Pension Tax Relief
                          </a>
                          <a href="/blog/salary-sacrifice-complete-guide" className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium">
                            <ChevronRight className="w-4 h-4" />Salary Sacrifice Guide
                          </a>
                        </div>
                        <div className="pt-2 border-t border-gray-100 mt-3">
                          <a href="https://www.gov.uk/workplace-pensions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd"/><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd"/></svg>
                            GOV.UK - Workplace Pensions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Student Loans Card */}
                  <div className="relative group overflow-hidden bg-white rounded-2xl border border-purple-100 shadow-medium p-6 hover:shadow-lg transition-all duration-200">
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-xl">Student Loans</h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Student loan repayments are deducted at 9% of earnings above your plan threshold. Plan 1 threshold is £26,065, Plan 2 is £28,470, and Plan 5 (post-2023) is £25,000. Postgraduate loans are repaid at 6% above £21,000.
                      </p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Learn More</p>
                        <div className="flex flex-wrap gap-2">
                          <a href="/blog/student-loan-repayment-guide" className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 font-medium">
                            <ChevronRight className="w-4 h-4" />Repayment Guide
                          </a>
                          <a href="/blog/student-loan-refund" className="inline-flex items-center gap-1 text-sm text-purple-600 hover:text-purple-700 font-medium">
                            <ChevronRight className="w-4 h-4" />Getting a Refund
                          </a>
                        </div>
                        <div className="pt-2 border-t border-gray-100 mt-3">
                          <a href="https://www.gov.uk/repaying-your-student-loan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd"/><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd"/></svg>
                            GOV.UK - Repaying Student Loans
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="grid md:grid-cols-1 gap-6">
              {/* How This UK Salary Calculator Works Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <Calculator className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-2xl">How This UK Salary Calculator Works</h2>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    This calculator estimates your take home pay by applying current UK tax rules to your gross salary. It uses the following steps:
                  </p>
                  <ol className="text-gray-700 text-base leading-relaxed space-y-3 mb-6 list-decimal list-outside ml-6">
                    <li className="pl-2">Apply the UK Personal Allowance</li>
                    <li className="pl-2">Calculate income tax based on tax bands</li>
                    <li className="pl-2">Deduct National Insurance contributions</li>
                    <li className="pl-2">Subtract pension contributions (if selected)</li>
                    <li className="pl-2">Subtract student loan repayments (if applicable)</li>
                  </ol>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Your results are shown as annual and monthly figures.
                  </p>
                </div>
              </div>

              {/* Take Home Pay FAQs Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-emerald-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <HelpCircle className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-2xl">Take Home Pay FAQs</h2>
                  </div>

                  <div className="space-y-5">
                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Is take home pay the same as net pay?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">Yes, take home pay and net pay generally mean the same thing in the UK.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">How accurate is this calculator?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">This calculator provides an estimate based on current tax rules. Actual take home pay may vary slightly depending on your employer and circumstances.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Does this include pension contributions?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">Yes, you can include pension contributions and choose a contribution percentage.</p>
                    </div>

                    <div className="pb-5 border-b border-gray-200 last:border-b-0 last:pb-0 hover:bg-gray-50/50 -mx-2 px-2 py-2 rounded-lg transition-colors">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Is this calculator updated every year?</h4>
                      <p className="text-gray-700 text-base leading-relaxed">Yes, this calculator is updated for the latest UK tax year.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer Card */}
              <div className="relative group overflow-hidden bg-white rounded-2xl border border-purple-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                      <AlertTriangle className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="font-bold text-gray-900 text-2xl">Disclaimer</h2>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    This calculator provides an estimated tax breakdown based on standard assumptions and is intended for general information purposes only. Results may vary depending on individual circumstances and tax codes, and should not be relied upon as financial advice. For accurate and official information, please refer to your tax code or contact HMRC directly.
                  </p>
                </div>
              </div>
                </div>
              </div>

            </div>

            {/* Beautiful Navigation Buttons - Aligned with cards section */}
            <div className="flex gap-6 mx-auto px-4 md:px-8 mt-8">
              <div className="flex-1 xl:pr-[192px]">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
              </div>

            </div>
          </main>

          {/* Related Reading */}
          <div className="mx-auto px-8 mt-6 mb-8 xl:pr-[192px]">
            <div className="max-w-6xl">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Related Reading</h3>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3">
                <a href="/blog/30k-salary-take-home" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-blue-600">Salary Guide</span>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">£30k Salary Take Home Pay Breakdown</p>
                </a>
                <a href="/blog/50k-salary-take-home" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-blue-600">Salary Guide</span>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">£50k Salary Take Home Pay Breakdown</p>
                </a>
                <a href="/blog/100k-tax-trap" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-red-600">Tax Planning</span>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">The £100k Tax Trap Explained</p>
                </a>
                <a href="/blog/uk-tax-changes-2026-27" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-blue-600">Tax Planning</span>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">UK Tax Changes 2026/27</p>
                </a>
                <a href="/mortgages" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-emerald-600">Calculator</span>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Mortgage Repayment Calculator</p>
                </a>
                <a href="/tax-code" className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group">
                  <span className="text-xs font-semibold text-emerald-600">Tool</span>
                  <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm mt-1">Check Your UK Tax Code</p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </LayoutWrapper>
    </ErrorBoundary>
  );
}
