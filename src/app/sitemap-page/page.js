"use client";
import React from 'react';
import Link from 'next/link';
import LayoutWrapper from '../components/LayoutWrapper';
import { Calculator, Clock, TrendingUp, GitCompare, Users, Heart, Baby, Home, CreditCard, FileText, HelpCircle, ExternalLink, Shield, BookOpen } from 'lucide-react';

export default function SitemapPage() {
  const sections = [
    {
      title: "Salary & Income Calculators",
      links: [
        { href: "/take-home-pay-calculator", label: "Take Home Pay Calculator", icon: Calculator },
        { href: "/pay-rise", label: "Pay Rise Calculator", icon: TrendingUp },
        { href: "/hourly-wage", label: "Hourly Wage Calculator", icon: Clock },
        { href: "/compare-salaries", label: "Compare Salaries", icon: GitCompare },
        { href: "/two-jobs", label: "Two Jobs Calculator", icon: Users },
        { href: "/pro-rata-furlough", label: "Pro-Rata Calculator", icon: Calculator },
      ]
    },
    {
      title: "Benefits & Statutory Pay",
      links: [
        { href: "/sick-pay", label: "Sick Pay Calculator", icon: Heart },
        { href: "/maternity-sick-pay", label: "Maternity Pay Calculator", icon: Baby },
      ]
    },
    {
      title: "Financial Planning",
      links: [
        { href: "/mortgages", label: "Mortgage Calculator", icon: Home },
        { href: "/debts", label: "Debt Repayment Calculator", icon: CreditCard },
      ]
    },
    {
      title: "Blog Articles",
      links: [
        { href: "/blog", label: "All Blog Posts", icon: BookOpen },
        { href: "/blog/100k-tax-trap", label: "The £100k Tax Trap" },
        { href: "/blog/student-loan-refund", label: "Student Loan Refund Guide" },
        { href: "/blog/cash-isa-limit-2027", label: "Cash ISA Limit 2027" },
        { href: "/blog/salary-sacrifice-changes-2029", label: "Salary Sacrifice Changes 2029" },
        { href: "/blog/uk-tax-changes-2025-26", label: "UK Tax Changes 2025/26" },
        { href: "/blog/uk-tax-changes-2024-25", label: "UK Tax Changes 2024/25" },
        { href: "/blog/maximize-take-home-pay-2024", label: "Maximize Take Home Pay" },
        { href: "/blog/student-loan-repayment-guide", label: "Student Loan Repayment Guide" },
        { href: "/blog/salary-sacrifice-complete-guide", label: "Salary Sacrifice Complete Guide" },
        { href: "/blog/self-employed-tax-calculator-guide", label: "Self-Employed Tax Guide" },
        { href: "/blog/pension-contributions-tax-relief", label: "Pension Contributions Tax Relief" },
      ]
    },
    {
      title: "Resources & Information",
      links: [
        { href: "/faq", label: "Frequently Asked Questions", icon: HelpCircle },
        { href: "/about", label: "About Us", icon: FileText },
        { href: "/links", label: "Useful Links", icon: ExternalLink },
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
      ]
    },
  ];

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-lg text-gray-600">
              A complete list of all pages on SalaryTakeHome.co.uk
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200 group"
                      >
                        {link.icon && (
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <link.icon className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* XML Sitemap Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Looking for the XML sitemap for search engines?{' '}
              <Link href="/sitemap.xml" className="text-blue-600 hover:underline">
                View sitemap.xml
              </Link>
            </p>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
