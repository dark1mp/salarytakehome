"use client";
import Link from 'next/link';
import { HelpCircle, Info, Lightbulb, Shield, Users, CheckCircle } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function About() {
  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-2">
          <div className="max-w-6xl">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                About SalaryTakeHome.co.uk
              </h1>
              <p className="text-base text-gray-700">
                SalaryTakeHome.co.uk is a free, comprehensive UK tax calculator that helps you understand your take-home pay, plan your finances, and make informed decisions about your money.
              </p>
              <p className="text-base text-gray-700 mt-3">
                We provide accurate, up-to-date calculations based on the latest UK tax rules and regulations, including Income Tax, National Insurance, student loan repayments, pension contributions, and more.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Info className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">What We Offer</h2>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Our suite of free calculators covers all aspects of UK tax and financial planning:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <Link href="/take-home-pay-calculator" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Take Home Pay Calculator</span>
                    </Link>
                    <Link href="/hourly-wage" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Hourly Wage Calculator</span>
                    </Link>
                    <Link href="/maternity-sick-pay" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Maternity Pay Calculator</span>
                    </Link>
                    <Link href="/sick-pay" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Sick Pay Calculator</span>
                    </Link>
                    <Link href="/two-jobs" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Two Jobs Tax Calculator</span>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <Link href="/pro-rata-furlough" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Pro-Rata Salary Calculator</span>
                    </Link>
                    <Link href="/compare-salaries" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Compare Two Salaries</span>
                    </Link>
                    <Link href="/mortgages" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Mortgage Calculator</span>
                    </Link>
                    <Link href="/debts" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span className="font-medium">Debt Calculator</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* Why SalaryTakeHome Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Why Choose SalaryTakeHome?</h2>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">Here's what makes us different:</p>

                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2"><strong>100% Free</strong> - No hidden costs, no premium features, everything is free</li>
                  <li className="pl-2"><strong>No Registration Required</strong> - Start calculating immediately without creating an account</li>
                  <li className="pl-2"><strong>Privacy-Focused</strong> - All calculations happen in your browser. We don't store your salary or personal data</li>
                  <li className="pl-2"><strong>Up-to-Date</strong> - We update our calculators with the latest UK tax rates and thresholds each tax year</li>
                  <li className="pl-2"><strong>Mobile-Friendly</strong> - Works perfectly on phones, tablets, and desktop computers</li>
                  <li className="pl-2"><strong>Accurate Calculations</strong> - Based on official HMRC rules and rates</li>
                  <li className="pl-2"><strong>Scottish Tax Support</strong> - Full support for Scottish income tax rates</li>
                  <li className="pl-2"><strong>Student Loan Plans</strong> - All UK student loan plans supported (Plan 1, 2, 4, 5, and Postgraduate)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* Our Approach Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Our Approach</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">How We Keep Things Accurate</h3>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed">
                      <li className="pl-2">All calculators use official HMRC tax rates, thresholds, and rules</li>
                      <li className="pl-2">Updated every April for the new tax year, and whenever mid-year changes are announced</li>
                      <li className="pl-2">Calculations run entirely in your browser — we cross-reference results against HMRC&apos;s own PAYE tools</li>
                      <li className="pl-2">Our blog content is researched using official government sources, employer announcements, and verified news reports</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Why We Built This</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Tax shouldn&apos;t be confusing. We built SalaryTakeHome because existing calculators were either outdated, locked behind paywalls, or buried in jargon. Every UK worker deserves to understand exactly where their money goes — for free.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Editorial Standards</h3>
                    <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed">
                      <li className="pl-2">We only publish information we can verify against official sources (HMRC, GOV.UK, employer press releases)</li>
                      <li className="pl-2">Calculators are tested against known HMRC examples each tax year</li>
                      <li className="pl-2">We clearly label estimates and always recommend consulting a qualified advisor for major financial decisions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* Who We Help Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Who We Help</h2>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">Our calculators are used by thousands of people every day, including:</p>

                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2"><strong>Employees</strong> - Check your payslip and understand your take-home pay</li>
                  <li className="pl-2"><strong>Job Seekers</strong> - Compare job offers and understand what you'll actually earn</li>
                  <li className="pl-2"><strong>HR Professionals</strong> - Quick reference for employee salary queries</li>
                  <li className="pl-2"><strong>Accountants & Advisors</strong> - Fast estimates for client discussions</li>
                  <li className="pl-2"><strong>Freelancers & Contractors</strong> - Plan your income and understand IR35 implications</li>
                  <li className="pl-2"><strong>Students & Graduates</strong> - Understand how student loan repayments affect your pay</li>
                  <li className="pl-2"><strong>Anyone Planning Finances</strong> - Budget effectively with accurate take-home pay figures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>

        {/* FAQ Section */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <HelpCircle className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">How accurate are the calculations?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Our calculations are based on official HMRC tax rates and thresholds. While we strive for accuracy, the results are estimates and may differ slightly from your actual payslip due to employer-specific deductions, benefits in kind, or other factors.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Is my data stored or shared?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      No. All calculations are performed locally in your browser. We don't send your salary information to our servers or store any personal data. Your privacy is our priority.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">How often are tax rates updated?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      We update our calculators each April when the new tax year begins, and whenever there are mid-year changes announced by the government. We also update statutory rates (like maternity pay and sick pay) when they change.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Can I use this for Scottish tax rates?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes! Our main take-home pay calculator includes an option to select Scottish tax rates, which have different income tax bands and rates compared to the rest of the UK.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Do you support all student loan plans?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, we support all UK student loan repayment plans: Plan 1, Plan 2, Plan 4 (Scotland), Plan 5, and Postgraduate loans. You can select your plan in the calculator to see accurate deductions.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Is this site really free?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, completely free! We're supported by advertising, which allows us to keep all features available to everyone without charge.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Can I calculate pension contributions?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, our take-home pay calculator includes options for pension contributions, including workplace pensions and salary sacrifice arrangements. You can see how different contribution levels affect your take-home pay.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">What if I have two jobs?</h3>
                    <p className="text-gray-700 text-base leading-relaxed">
                      We have a dedicated <Link href="/two-jobs" className="text-blue-600 hover:text-blue-800 underline font-semibold">Two Jobs Tax Calculator</Link> that shows how tax works when you have multiple employments, including how your personal allowance is typically allocated to your main job.
                    </p>
                  </div>
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

        {/* Disclaimer Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-rose-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-red-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-2xl">Important Disclaimer</h2>
                </div>

                <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    <strong>This calculator provides estimates only.</strong> Tax calculations are complex and depend on individual circumstances that may not be captured by this tool.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    The results should be used as a guide only and should not be relied upon for making financial decisions. Actual tax liability may vary based on factors including:
                  </p>
                  <ul className="list-disc list-outside ml-6 space-y-1 mb-4 text-gray-700 text-base">
                    <li>Benefits in kind and taxable benefits</li>
                    <li>Multiple income sources</li>
                    <li>Self-employment income</li>
                    <li>Tax code adjustments</li>
                    <li>Marriage allowance transfers</li>
                    <li>Other HMRC adjustments</li>
                  </ul>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    Always consult with a qualified tax advisor, accountant, or HMRC directly for personalised advice about your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>
      </div>

    </LayoutWrapper>
  );
}
