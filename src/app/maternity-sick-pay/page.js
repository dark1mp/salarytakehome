"use client";
import React, { useState } from 'react';
import { Heart, AlertCircle, Info, Lightbulb, HelpCircle } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function MaternitySickPay() {
  const [formData, setFormData] = useState({
    averageWeeklyEarnings: '',
  });

  // UK Statutory Rates 2024/25
  // Statutory Maternity Pay: 90% of average weekly earnings for first 6 weeks, then £187.18/week or 90% of earnings (whichever is lower) for up to 33 weeks
  
  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const calculatePay = () => {
    const avgWeeklyEarnings = parseFloat(formData.averageWeeklyEarnings.replace(/,/g, '')) || 0;
    if (avgWeeklyEarnings <= 0) return null;

    // First 6 weeks: 90% of average weekly earnings (no cap)
    // Next 33 weeks: £187.18 or 90% of average weekly earnings, whichever is lower
    const weeklyRate90Percent = avgWeeklyEarnings * 0.9;
    const statutoryRate = 187.18;
    const firstSixWeeks = weeklyRate90Percent * 6;
    const remaining33WeeksRate = Math.min(statutoryRate, weeklyRate90Percent);
    const remainingWeeks = remaining33WeeksRate * 33;
    const totalPay = firstSixWeeks + remainingWeeks;
    const weeklyAverage = totalPay / 39;

    return {
      type: 'Maternity',
      weeks: 39,
      firstSixWeeks: firstSixWeeks,
      remainingWeeks: remainingWeeks,
      totalPay,
      weeklyAverage,
      rate: remaining33WeeksRate === statutoryRate ? '£187.18/week' : '90% of earnings'
    };
  };

  const results = calculatePay();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount || 0);
  };

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 scale-[0.8] md:scale-100 origin-top-left">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                Maternity Pay Calculator
              </h1>
              <p className="text-xl text-gray-600">Calculate your statutory maternity pay entitlement</p>
            </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-5">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">Average Weekly Earnings (Before Tax)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={formData.averageWeeklyEarnings}
                    onChange={(e) => setFormData({ ...formData, averageWeeklyEarnings: formatNumber(e.target.value) })}
                    placeholder="500"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Average weekly earnings in the 8 weeks before your 15th week before the baby is due</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-800">
                    <strong className="font-bold text-yellow-900">Eligibility Note:</strong> Statutory Maternity Pay requires 26 weeks continuous employment and average weekly earnings of at least £125/week. Check gov.uk for full eligibility criteria.
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {results ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Your {results.type} Pay</h3>
                    
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white mb-6 shadow-medium">
                      <div className="text-sm opacity-90 mb-2">Total Entitlement</div>
                      <div className="text-4xl font-bold">{formatCurrency(results.totalPay)}</div>
                      <div className="text-sm opacity-90 mt-2">over {results.weeks} weeks</div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">First 6 weeks</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.firstSixWeeks)}</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Remaining 33 weeks</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.remainingWeeks)}</span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Weekly Rate</span>
                        <span className="font-bold text-lg text-gray-900">{formatCurrency(results.weeklyAverage)}</span>
                      </div>

                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-700 font-medium">Rate Applied</span>
                        <span className="font-bold text-lg text-blue-600">{results.rate}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-700">
                          <strong>Note:</strong> These are statutory rates. Your employer may offer more generous terms. 
                          Payments are subject to tax and National Insurance.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Fill in your information to see your entitlements</p>
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

        {/* Understanding Maternity Pay Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-6">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Info className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Understanding Statutory Maternity Pay</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Statutory Maternity Pay (SMP) is paid for up to 39 weeks. The amount you get depends on your average weekly earnings in the qualifying period.
                </p>

                <h4 className="font-bold text-gray-900 text-lg mb-4">How SMP is Calculated (2024/25)</h4>
                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2"><strong>First 6 weeks:</strong> You receive 90% of your average weekly earnings (before tax)</li>
                  <li className="pl-2"><strong>Remaining 33 weeks:</strong> You receive £187.18 per week or 90% of your average weekly earnings, whichever is lower</li>
                  <li className="pl-2"><strong>Total duration:</strong> 39 weeks (approximately 9 months)</li>
                </ul>

                <h4 className="font-bold text-gray-900 text-lg mb-4">Eligibility Requirements</h4>
                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2">You must have worked for your employer continuously for at least 26 weeks by the end of the 15th week before your due date</li>
                  <li className="pl-2">You must earn at least £125 per week (gross) on average</li>
                  <li className="pl-2">You must give your employer correct notice and proof of pregnancy</li>
                </ul>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Important:</strong> SMP is the minimum your employer must pay. Many employers offer enhanced maternity pay as part of their benefits package. Check your employment contract or speak to HR to see if you're entitled to more. SMP is subject to tax and National Insurance deductions.
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

        {/* Why Maternity Pay Matters Card */}
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 mt-4">
          <div className="flex-1 max-w-6xl">
            <div className="relative group overflow-hidden bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-2xl">Why Planning for Maternity Pay Matters</h3>
                </div>

                <p className="text-gray-700 text-base leading-relaxed mb-4">Understanding your maternity pay entitlement helps you:</p>

                <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700 text-base leading-relaxed">
                  <li className="pl-2">Budget effectively during your maternity leave</li>
                  <li className="pl-2">Plan your finances before your baby arrives</li>
                  <li className="pl-2">Understand your income for the full 39 weeks</li>
                  <li className="pl-2">Know when to apply for additional benefits if needed</li>
                  <li className="pl-2">Decide how long you can afford to take off work</li>
                  <li className="pl-2">Compare job offers with different maternity packages</li>
                </ul>

                <p className="text-gray-700 text-base leading-relaxed">
                  Knowing your SMP entitlement in advance allows you to make informed decisions about your maternity leave and helps you prepare financially for welcoming your new baby.
                </p>
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
                  <h3 className="font-bold text-gray-900 text-2xl">Maternity Pay FAQs</h3>
                </div>

                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How much is Statutory Maternity Pay?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      For the first 6 weeks, you receive 90% of your average weekly earnings. For the remaining 33 weeks, you get £187.18 per week or 90% of your average weekly earnings, whichever is lower.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">How long does Statutory Maternity Pay last?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      SMP is paid for up to 39 weeks. You're entitled to 52 weeks of maternity leave in total, but only 39 weeks are paid through SMP. The remaining 13 weeks are unpaid, though your employer may offer additional company maternity pay.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">When does Statutory Maternity Pay start?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      SMP can start from the 11th week before your baby is due. The earliest it can start is when you give birth. You choose when to start your maternity leave, but must give your employer at least 28 days' notice.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Is Statutory Maternity Pay taxable?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, SMP is treated as earnings and is subject to Income Tax and National Insurance contributions. Your employer will deduct these in the usual way when they pay you.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What if I don't qualify for SMP?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      If you don't qualify for SMP (for example, if you're self-employed or your earnings are too low), you may be eligible for Maternity Allowance instead. This is paid by the government at up to £184.03 per week for up to 39 weeks.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Can I work during maternity leave?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      You can work up to 10 "Keeping in Touch" (KIT) days during your maternity leave without losing your SMP. These days allow you to do some work, attend meetings, or training. Any work beyond 10 days may affect your SMP entitlement.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Does my employer pay SMP or the government?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Your employer pays SMP, but they can usually reclaim most or all of it from the government through HMRC. Small employers (with total National Insurance contributions of £45,000 or less per year) can reclaim 103% of SMP paid.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What happens if I have twins or multiples?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      The SMP rate stays the same whether you're having one baby or multiples. However, you're entitled to the same 39 weeks of SMP and 52 weeks of maternity leave. Some employers may offer enhanced maternity pay for multiple births.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Can I return to work early and stop receiving SMP?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Yes, SMP stops when you return to work. You must give your employer at least 8 weeks' notice if you want to return to work earlier than originally planned. Any unused SMP entitlement is lost when you return to work.
                    </p>
                  </div>

                  <div className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">What is enhanced maternity pay?</h4>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Enhanced maternity pay is additional pay offered by some employers on top of SMP. This varies by company and might include full pay for a certain number of weeks, or a higher percentage of your salary. Check your employment contract or company handbook for details of your employer's maternity policy.
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
      </div>

      <footer className="mt-12 border-t pt-8 pb-6 text-center text-gray-500 text-sm">
        <div>© 2025 SalaryTakeHome.co.uk. All rights reserved.</div>
        <div className="mt-2">
          Privacy: This site does not collect or store any personal data. All calculations are done anonymously in your browser.
        </div>
      </footer>
    </LayoutWrapper>
  );
}
