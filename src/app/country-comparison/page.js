"use client";
import React, { useState, useMemo } from 'react';
import { Globe, TrendingUp, TrendingDown, AlertCircle, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

// Top 15 popular countries for work (including Australia)
// Note: These are approximate conversion factors and cost of living adjustments
// Actual tax rates and deductions vary significantly by country
const COUNTRIES = [
  { 
    code: 'US', 
    name: 'United States', 
    currency: 'USD', 
    symbol: '$',
    taxRate: 0.22, // Average effective federal + state tax (varies by state)
    conversionRate: 1.27, // GBP to USD
    costOfLivingIndex: 71.05, // vs UK = 100
    note: 'Tax rates vary significantly by state. Federal + State taxes apply.'
  },
  { 
    code: 'AU', 
    name: 'Australia', 
    currency: 'AUD', 
    symbol: '$',
    taxRate: 0.25, // Progressive: 19% up to $45k, 32.5% up to $120k, 37% up to $180k, 45% above
    conversionRate: 1.92, // GBP to AUD
    costOfLivingIndex: 72.23,
    note: 'Progressive tax system. Medicare levy of 2% applies.'
  },
  { 
    code: 'CA', 
    name: 'Canada', 
    currency: 'CAD', 
    symbol: '$',
    taxRate: 0.26, // Federal + Provincial (varies by province)
    conversionRate: 1.71, // GBP to CAD
    costOfLivingIndex: 68.57,
    note: 'Federal + Provincial taxes. Rates vary significantly by province.'
  },
  { 
    code: 'DE', 
    name: 'Germany', 
    currency: 'EUR', 
    symbol: '€',
    taxRate: 0.30, // Progressive: 14-42% income tax + 5.5% solidarity surcharge
    conversionRate: 1.17, // GBP to EUR
    costOfLivingIndex: 62.84,
    note: 'Progressive tax 14-42% + solidarity surcharge. Social security contributions high.'
  },
  { 
    code: 'FR', 
    name: 'France', 
    currency: 'EUR', 
    symbol: '€',
    taxRate: 0.28, // Progressive: 0-45% income tax
    conversionRate: 1.17,
    costOfLivingIndex: 63.03,
    note: 'Progressive tax 0-45%. High social security contributions.'
  },
  { 
    code: 'NL', 
    name: 'Netherlands', 
    currency: 'EUR', 
    symbol: '€',
    taxRate: 0.31, // Progressive: 9-52% income tax
    conversionRate: 1.17,
    costOfLivingIndex: 71.84,
    note: '30% ruling possible for expats. Progressive tax system.'
  },
  { 
    code: 'CH', 
    name: 'Switzerland', 
    currency: 'CHF', 
    symbol: 'CHF',
    taxRate: 0.22, // Varies significantly by canton
    conversionRate: 1.11, // GBP to CHF
    costOfLivingIndex: 122.67,
    note: 'Low income tax but very high cost of living. Varies by canton.'
  },
  { 
    code: 'SG', 
    name: 'Singapore', 
    currency: 'SGD', 
    symbol: 'S$',
    taxRate: 0.12, // Progressive: 0-22% (very low)
    conversionRate: 1.69, // GBP to SGD
    costOfLivingIndex: 83.08,
    note: 'Very low income tax (0-22%). High cost of living. CPF contributions.'
  },
  { 
    code: 'UAE', 
    name: 'United Arab Emirates', 
    currency: 'AED', 
    symbol: 'AED',
    taxRate: 0.00, // No income tax
    conversionRate: 4.65, // GBP to AED
    costOfLivingIndex: 59.06,
    note: 'No income tax. Higher cost of living in Dubai/Abu Dhabi. VAT applies to goods/services.'
  },
  { 
    code: 'IE', 
    name: 'Ireland', 
    currency: 'EUR', 
    symbol: '€',
    taxRate: 0.35, // Progressive: 20% up to €40k, 40% above + USC + PRSI
    conversionRate: 1.17,
    costOfLivingIndex: 83.85,
    note: 'Progressive tax + USC (Universal Social Charge) + PRSI. High in Dublin.'
  },
  { 
    code: 'NZ', 
    name: 'New Zealand', 
    currency: 'NZD', 
    symbol: '$',
    taxRate: 0.28, // Progressive: 10.5-39%
    conversionRate: 2.07, // GBP to NZD
    costOfLivingIndex: 70.77,
    note: 'Progressive tax 10.5-39%. GST (15%) on purchases. ACC levies.'
  },
  { 
    code: 'SE', 
    name: 'Sweden', 
    currency: 'SEK', 
    symbol: 'kr',
    taxRate: 0.30, // Municipal + National (varies by municipality)
    conversionRate: 13.16, // GBP to SEK
    costOfLivingIndex: 66.85,
    note: 'Municipal tax (varies 28-35%) + national tax. High social security.'
  },
  { 
    code: 'DK', 
    name: 'Denmark', 
    currency: 'DKK', 
    symbol: 'kr',
    taxRate: 0.36, // Progressive: 12-52% (high but includes social security)
    conversionRate: 8.71, // GBP to DKK
    costOfLivingIndex: 83.68,
    note: 'Very high tax (includes comprehensive social security). Progressive system.'
  },
  { 
    code: 'NO', 
    name: 'Norway', 
    currency: 'NOK', 
    symbol: 'kr',
    taxRate: 0.31, // Progressive: 0-47.2%
    conversionRate: 13.34, // GBP to NOK
    costOfLivingIndex: 104.05,
    note: 'Progressive tax + high cost of living. National Insurance contributions.'
  },
  { 
    code: 'JP', 
    name: 'Japan', 
    currency: 'JPY', 
    symbol: '¥',
    taxRate: 0.26, // Progressive: 5-45% + residence tax + social insurance
    conversionRate: 188.5, // GBP to JPY
    costOfLivingIndex: 80.28,
    note: 'Progressive income tax 5-45% + residence tax + social insurance. High in Tokyo.'
  },
];

export default function CountryComparison() {
  const [ukSalary, setUkSalary] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('US');

  const formatCurrency = (amount, country) => {
    const countryData = COUNTRIES.find(c => c.code === selectedCountry) || COUNTRIES[0];
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: countryData.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  const formatNumber = (value) => {
    const num = value.replace(/[^\d]/g, '');
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const comparison = useMemo(() => {
    const salary = parseFloat(ukSalary.replace(/,/g, '')) || 0;
    if (salary <= 0) return null;

    const country = COUNTRIES.find(c => c.code === selectedCountry) || COUNTRIES[0];
    
    // Convert UK salary to local currency
    const convertedSalary = salary * country.conversionRate;
    
    // Apply estimated tax rate (this is very approximate)
    const estimatedTax = convertedSalary * country.taxRate;
    const estimatedTakeHome = convertedSalary - estimatedTax;
    
    // Convert back to GBP for comparison
    const takeHomeInGBP = estimatedTakeHome / country.conversionRate;
    
    // Adjust for cost of living (UK = 100)
    const costOfLivingAdjustment = 100 / country.costOfLivingIndex;
    const adjustedTakeHome = takeHomeInGBP * costOfLivingAdjustment;
    
    // Compare with UK (assuming UK tax ~25% average)
    const ukTaxRate = 0.25;
    const ukTakeHome = salary * (1 - ukTaxRate);
    const difference = adjustedTakeHome - ukTakeHome;
    const differencePercent = ((adjustedTakeHome / ukTakeHome) - 1) * 100;

    return {
      country,
      convertedSalary,
      estimatedTax,
      estimatedTakeHome,
      takeHomeInGBP,
      adjustedTakeHome,
      ukTakeHome,
      difference,
      differencePercent,
    };
  }, [ukSalary, selectedCountry]);

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-8 py-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              Compare UK Salary with Other Countries
            </h1>
            <p className="text-xl text-gray-600">
              See how your UK salary compares internationally (adjusted for taxes and cost of living)
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-800">
                <strong className="font-bold text-yellow-900">Important Disclaimer:</strong> This calculator provides estimates only. 
                Tax systems, rates, and deductions vary significantly between countries and depend on many factors including residency status, 
                state/province, marital status, and income level. Cost of living also varies by city and region within each country. 
                These calculations are for illustrative purposes only and should not be used for financial planning. 
                Always consult with a qualified tax advisor familiar with the specific country&apos;s tax rules.
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-5">
              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Your UK Annual Salary
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">£</span>
                  <input
                    type="text"
                    value={ukSalary}
                    onChange={(e) => setUkSalary(formatNumber(e.target.value))}
                    placeholder="50,000"
                    className="w-full pl-10 pr-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 text-lg font-semibold bg-white/80 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-light rounded-3xl shadow-medium border border-white/30 p-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Select Country to Compare
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200/50 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 font-semibold bg-white/80 transition-all duration-200"
                >
                  {COUNTRIES.map(country => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country Info */}
              {comparison && (
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-gray-700">
                      <strong>{comparison.country.name}:</strong> {comparison.country.note}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Results Section */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {comparison ? (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/20 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Comparison Results</h3>
                    
                    {/* Main Comparison */}
                    <div className={`rounded-2xl p-6 text-white mb-6 shadow-medium ${
                      comparison.differencePercent > 0 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                        : 'bg-gradient-to-r from-red-500 to-pink-600'
                    }`}>
                      <div className="text-sm opacity-90 mb-2">Equivalent Take-Home (Cost of Living Adjusted)</div>
                      <div className="text-4xl font-bold mb-2">
                        {formatCurrency(comparison.adjustedTakeHome, 'GBP')}
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        {comparison.differencePercent > 0 ? (
                          <>
                            <TrendingUp className="w-5 h-5" />
                            <span className="text-sm opacity-90">
                              {comparison.differencePercent.toFixed(1)}% better than UK
                            </span>
                          </>
                        ) : (
                          <>
                            <TrendingDown className="w-5 h-5" />
                            <span className="text-sm opacity-90">
                              {Math.abs(comparison.differencePercent).toFixed(1)}% less than UK
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Detailed Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Salary in {comparison.country.name}</span>
                        <span className="font-bold text-lg text-gray-900">
                          {formatCurrency(comparison.convertedSalary, comparison.country.code)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Estimated Tax</span>
                        <span className="font-bold text-lg text-red-600">
                          {formatCurrency(comparison.estimatedTax, comparison.country.code)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Estimated Take-Home</span>
                        <span className="font-bold text-lg text-gray-900">
                          {formatCurrency(comparison.estimatedTakeHome, comparison.country.code)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">Take-Home in GBP</span>
                        <span className="font-bold text-lg text-gray-900">
                          £{Math.round(comparison.takeHomeInGBP).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-700 font-medium">UK Take-Home (Estimated)</span>
                        <span className="font-bold text-lg text-blue-600">
                          £{Math.round(comparison.ukTakeHome).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-700 font-medium">Cost of Living Index</span>
                        <span className="font-bold text-lg text-gray-900">
                          {comparison.country.costOfLivingIndex} (UK = 100)
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-medium rounded-3xl shadow-large border border-white/30 p-6 text-center">
                    <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your UK Salary</h3>
                    <p className="text-gray-600">See how your salary compares internationally</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
