"use client";
import React from 'react';
import Link from 'next/link';
import {
  Calculator, Clock, GitCompare, Users, Heart, Baby,
  Home as HomeIcon, CreditCard, TrendingUp, BookOpen,
  ArrowRight, CheckCircle
} from 'lucide-react';
import LayoutWrapper from './components/LayoutWrapper';

const calculators = [
  {
    category: "Salary & Income Calculators",
    tools: [
      {
        name: "Take Home Pay Calculator",
        description: "Calculate your net salary after income tax, National Insurance, student loans, and pension contributions.",
        href: "/take-home-pay-calculator",
        icon: Calculator,
        gradient: "from-blue-500 to-blue-600",
        featured: true
      },
      {
        name: "Hourly Wage Calculator",
        description: "Convert your annual salary to hourly, daily, weekly, or monthly rates based on your working hours.",
        href: "/hourly-wage",
        icon: Clock,
        gradient: "from-purple-500 to-purple-600"
      },
      {
        name: "Compare Salaries",
        description: "Compare two job offers side-by-side to see which gives you the best take-home pay.",
        href: "/compare-salaries",
        icon: GitCompare,
        gradient: "from-green-500 to-green-600"
      },
      {
        name: "Two Jobs Calculator",
        description: "Calculate your total tax and NI when working two jobs, and check for overpayments.",
        href: "/two-jobs",
        icon: Users,
        gradient: "from-orange-500 to-orange-600"
      }
    ]
  },
  {
    category: "Benefits & Statutory Pay",
    tools: [
      {
        name: "Sick Pay Calculator",
        description: "Calculate your Statutory Sick Pay (SSP) entitlement including waiting days and eligibility.",
        href: "/sick-pay",
        icon: Heart,
        gradient: "from-red-500 to-red-600"
      },
      {
        name: "Maternity Pay Calculator",
        description: "Work out your Statutory Maternity Pay (SMP) for all 39 weeks of your entitlement.",
        href: "/maternity-sick-pay",
        icon: Baby,
        gradient: "from-pink-500 to-pink-600"
      },
      {
        name: "Pro-Rata Calculator",
        description: "Calculate part-time salary and tax when working reduced hours or furlough.",
        href: "/pro-rata-furlough",
        icon: TrendingUp,
        gradient: "from-indigo-500 to-indigo-600"
      }
    ]
  },
  {
    category: "Financial Planning",
    tools: [
      {
        name: "Mortgage Calculator",
        description: "Calculate your monthly mortgage repayments with repayment or interest-only options.",
        href: "/mortgages",
        icon: HomeIcon,
        gradient: "from-teal-500 to-teal-600"
      },
      {
        name: "Debt Repayment Calculator",
        description: "Work out how long it will take to pay off debt and how much interest you'll pay.",
        href: "/debts",
        icon: CreditCard,
        gradient: "from-yellow-500 to-yellow-600"
      }
    ]
  }
];

const features = [
  "100% Free - No registration required",
  "Privacy-focused - All calculations done in your browser",
  "Up-to-date with 2025/26 UK tax rates",
  "Accurate calculations for tax, NI, student loans",
  "Mobile-friendly design",
  "Share results with URL links"
];

const recentBlogPosts = [
  {
    title: "The £100k Tax Trap: Britain's Hidden 60% Tax Rate",
    excerpt: "How half a million more workers will face punitive tax rates by 2029",
    href: "/blog/100k-tax-trap",
    category: "Tax Planning"
  },
  {
    title: "Student Loan Refund Guide",
    excerpt: "Over 1 million student loan overpayments happened last year. Check if you're owed money.",
    href: "/blog/student-loan-refund",
    category: "Student Loans"
  },
  {
    title: "Salary Sacrifice Pension Changes from April 2029",
    excerpt: "Only the first £2,000 of salary sacrifice will be NI-exempt from 2029",
    href: "/blog/salary-sacrifice-changes-2029",
    category: "Pensions"
  }
];

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#1566a0] to-[#1e90c6] text-white py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                UK Tax & Salary Calculators
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-50">
                Free, accurate, privacy-focused financial planning tools for 2025/26
              </p>
              <Link
                href="/take-home-pay-calculator"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Calculate Your Take-Home Pay
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calculators Grid */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          {calculators.map((category) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <tool.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {tool.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Calculate Now
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                    {tool.featured && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Popular
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Recent Articles</h2>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
              >
                View All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {recentBlogPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="text-sm font-semibold text-blue-600 mb-3">{post.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-br from-[#1566a0] to-[#1e90c6] text-white py-16">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Calculate Your Take-Home Pay?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Get accurate results in seconds with our free calculator
            </p>
            <Link
              href="/take-home-pay-calculator"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Start Calculating
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </div>
    </LayoutWrapper>
  );
}
