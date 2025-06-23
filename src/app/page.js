"use client";
import React, { useState, useEffect } from 'react';
import { Calculator, PoundSterling, Users, Building, Award, Settings, ChevronRight, Info, CheckCircle } from 'lucide-react';
import Chatbot from "./Chatbot";

const TAX_YEARS = ["2021/22", "2022/23", "2023/24", "2024/25", "2025/26"];

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
    bands: [
      { threshold: 50270, rate: 0.2 },
      { threshold: 125140, rate: 0.4 },
      { threshold: Infinity, rate: 0.45 }
    ],
    scottishBands: [
      { threshold: 2162, rate: 0.19 },
      { threshold: 13118, rate: 0.20 },
      { threshold: 31392, rate: 0.21 },
      { threshold: 75000, rate: 0.42 },
      { threshold: 125140, rate: 0.45 },
      { threshold: Infinity, rate: 0.48 }
    ]
  },
  "2025/26": {
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
  "2025/26": { primaryThreshold: 12570, upperEarnings: 50270, rate: 0.12, upperRate: 0.02 }
};

const STUDENT_LOAN = {
  plan1: { threshold: 22015, rate: 0.09 },
  plan2: { threshold: 27295, rate: 0.09 },
  plan4: { threshold: 27660, rate: 0.09 },
  postgrad: { threshold: 21000, rate: 0.06 }
};

export default function TaxCalculator() {
  const [formData, setFormData] = useState({
    income: '',
    period: 'yearly',
    taxYear: '2024/25',
    situation: 'employed', // employed, self-employed
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

  const calculateTax = () => {
    if (!formData.income) return;

    let gross = parseFloat(formData.income.replace(/,/g, '')) || 0;
    let bonus = parseFloat(formData.bonus.replace(/,/g, '')) || 0;
    let benefits = parseFloat(formData.taxableBenefits.replace(/,/g, '')) || 0;
    let childcare = parseFloat(formData.childcare.replace(/,/g, '')) || 0;
    let salarySac = parseFloat(formData.salarySacrifice.replace(/,/g, '')) || 0;
    
    gross += bonus + benefits - childcare - salarySac;

    // Pension calculation
    let pensionDeduct = 0;
    if (formData.pension.value) {
      if (formData.pension.type === 'percentage') {
        let pct = parseFloat(formData.pension.value.replace("%", "")) || 0;
        pensionDeduct = gross * (pct / 100);
      } else {
        pensionDeduct = parseFloat(formData.pension.value.replace(/,/g, '')) || 0;
      }
    }
    gross -= pensionDeduct;

    // Tax calculation
    let pa = TAX_BANDS[formData.taxYear].personalAllowance;
    let taxable = Math.max(0, gross - pa);
    let tax = 0;
    
    let bands = formData.scottish ? TAX_BANDS[formData.taxYear].scottishBands : TAX_BANDS[formData.taxYear].bands;
    let prev = 0;
    
    for (let i = 0; i < bands.length; i++) {
      let band = bands[i];
      let bandAmount = Math.min(taxable, band.threshold - prev);
      if (bandAmount > 0) tax += bandAmount * band.rate;
      taxable -= bandAmount;
      prev = band.threshold;
      if (taxable <= 0) break;
    }

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

    let takeHome = gross - tax - ni - sl;

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
  };

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

  const formatNumberInput = (value) => {
    // Remove non-digits and format with commas
    const numericValue = value.replace(/[^\d]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleNumberInput = (field, value) => {
    const formatted = formatNumberInput(value);
    updateFormData(field, formatted);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">UK Tax Calculator</h1>
              <p className="text-gray-600">Calculate your income tax and take-home pay</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Your Situation */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Your Situation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => updateFormData('situation', 'employed')}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.situation === 'employed' 
                      ? 'border-blue-500 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Employed</div>
                      <div className="text-sm text-gray-600">I work for a company</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => updateFormData('situation', 'self-employed')}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.situation === 'self-employed' 
                      ? 'border-blue-500 bg-blue-50 text-blue-900' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5" />
                    <div>
                      <div className="font-medium">Self-employed</div>
                      <div className="text-sm text-gray-600">I run my own business</div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.scottish}
                    onChange={(e) => updateFormData('scottish', e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-gray-700">I'm a Scottish taxpayer</span>
                </label>
              </div>
            </div>

            {/* Income */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <PoundSterling className="w-5 h-5 text-green-600" />
                Your Income
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {formData.situation === 'employed' ? 'Annual salary' : 'Annual income'}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                    <input
                      type="text"
                      value={formData.income}
                      onChange={(e) => handleNumberInput('income', e.target.value)}
                      placeholder="50,000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                    <select
                      value={formData.period}
                      onChange={(e) => updateFormData('period', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="yearly">Yearly</option>
                      <option value="monthly">Monthly</option>
                      <option value="weekly">Weekly</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tax year</label>
                    <select
                      value={formData.taxYear}
                      onChange={(e) => updateFormData('taxYear', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {TAX_YEARS.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bonus (optional)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                      <input
                        type="text"
                        value={formData.bonus}
                        onChange={(e) => handleNumberInput('bonus', e.target.value)}
                        placeholder="5,000"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Options */}
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gray-600" />
                  Advanced Options
                </h2>
                <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${showAdvanced ? 'rotate-90' : ''}`} />
              </button>
              
              {showAdvanced && (
                <div className="mt-6 space-y-6">
                  {/* Student Loan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student loan plan</label>
                    <select
                      value={formData.studentLoan}
                      onChange={(e) => updateFormData('studentLoan', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">No student loan</option>
                      <option value="plan1">Plan 1</option>
                      <option value="plan2">Plan 2</option>
                      <option value="plan4">Plan 4 (Scotland)</option>
                      <option value="postgrad">Postgraduate loan</option>
                    </select>
                  </div>

                  {/* Pension */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pension contributions</label>
                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={() => updateFormData('pension', { ...formData.pension, type: 'percentage' })}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          formData.pension.type === 'percentage' 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        Percentage
                      </button>
                      <button
                        onClick={() => updateFormData('pension', { ...formData.pension, type: 'amount' })}
                        className={`px-4 py-2 rounded-lg border transition-colors ${
                          formData.pension.type === 'amount' 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Additional fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Salary sacrifice</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                        <input
                          type="text"
                          value={formData.salarySacrifice}
                          onChange={(e) => handleNumberInput('salarySacrifice', e.target.value)}
                          placeholder="1,000"
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Childcare vouchers</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                        <input
                          type="text"
                          value={formData.childcare}
                          onChange={(e) => handleNumberInput('childcare', e.target.value)}
                          placeholder="500"
                          className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Taxable benefits</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">£</span>
                      <input
                        type="text"
                        value={formData.taxableBenefits}
                        onChange={(e) => handleNumberInput('taxableBenefits', e.target.value)}
                        placeholder="2,000"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {results ? (
                <div className="bg-white rounded-2xl shadow-lg border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Your results</h3>
                  
                  {/* Take Home Pay - Highlighted */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-6">
                    <div className="text-sm opacity-90 mb-1">Take-home pay</div>
                    <div className="text-3xl font-bold">{formatCurrency(results.takeHome)}</div>
                    <div className="text-sm opacity-90 mt-1">per {formData.period.replace('ly', '')}</div>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-600">Gross income</span>
                      <span className="font-medium">{formatCurrency(results.gross)}</span>
                    </div>
                    
                    <div className="border-t pt-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">Deductions</div>
                      
                      {results.tax > 0 && (
                        <div className="flex justify-between items-center py-1 text-sm">
                          <span className="text-gray-600">Income tax</span>
                          <span className="text-red-600">-{formatCurrency(results.tax)}</span>
                        </div>
                      )}
                      
                      {results.ni > 0 && (
                        <div className="flex justify-between items-center py-1 text-sm">
                          <span className="text-gray-600">National Insurance</span>
                          <span className="text-red-600">-{formatCurrency(results.ni)}</span>
                        </div>
                      )}
                      
                      {results.studentLoan > 0 && (
                        <div className="flex justify-between items-center py-1 text-sm">
                          <span className="text-gray-600">Student loan</span>
                          <span className="text-red-600">-{formatCurrency(results.studentLoan)}</span>
                        </div>
                      )}
                      
                      {results.pension > 0 && (
                        <div className="flex justify-between items-center py-1 text-sm">
                          <span className="text-gray-600">Pension</span>
                          <span className="text-blue-600">-{formatCurrency(results.pension)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg border p-6">
                  <div className="text-center py-8">
                    <Calculator className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Enter your income</h3>
                    <p className="text-gray-600">Fill in your details to see your tax calculation</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Info className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">How it works</h3>
            <p className="text-gray-600 text-sm">Disclaimer: Information provided on this site is for illustrative purposes only.<br/><br/>
            Don&apos;t make any major financial decisions without consulting a qualified specialist.</p>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Free to use</h3>
            <p className="text-gray-600 text-sm">Calculate your tax liability and take-home pay completely free, with no hidden costs.</p>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Expert support</h3>
          </div>
        </div>
      </div>
      <Chatbot context={{ formData, results }} />
    </div>
  );
}
