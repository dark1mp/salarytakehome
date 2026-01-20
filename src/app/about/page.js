"use client";
import { HelpCircle, Info } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export default function About() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <HelpCircle className="w-12 h-12 text-[#1566a0]" />
          About
        </h1>
        <div className="bg-white/90 rounded-3xl shadow-medium border border-white/30 p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About UK Tax Calculator</h2>
            <p className="text-gray-700 leading-relaxed">
              The UK Tax Calculator is a free tool to help you calculate your take-home pay, understand your tax obligations, 
              and plan your finances. We provide accurate calculations based on the latest UK tax rules and regulations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Calculate take-home pay based on income tax, National Insurance, and student loans</li>
              <li>Support for all UK student loan plans (Plan 1, 2, 4, 5)</li>
              <li>Scottish tax rates calculation</li>
              <li>Pension contributions and salary sacrifice</li>
              <li>Mortgage calculator with UK rules</li>
              <li>Compare salaries with other countries</li>
            </ul>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-700">
                <strong>Disclaimer:</strong> This calculator provides estimates only. Tax calculations are complex and depend on 
                individual circumstances. Always consult with a qualified tax advisor for personalized advice.
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </LayoutWrapper>
  );
}
