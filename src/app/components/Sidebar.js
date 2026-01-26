"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Home, Clock, Heart, Briefcase, Calculator, Scale, FileText, DollarSign, HelpCircle, ExternalLink, Menu, X, Shield, HeartPulse } from 'lucide-react';

const menuItems = [
  { href: '/take-home-pay-calculator', label: 'TAKE HOME PAY', icon: Home },
  { href: '/hourly-wage', label: 'HOURLY WAGE', icon: Clock },
  { href: '/maternity-sick-pay', label: 'MATERNITY PAY', icon: Heart },
  { href: '/sick-pay', label: 'SICK PAY', icon: HeartPulse },
  { href: '/two-jobs', label: 'TWO JOBS', icon: Briefcase },
  { href: '/pro-rata-furlough', label: 'PRO-RATA', icon: Calculator },
  { href: '/compare-salaries', label: 'COMPARE TWO SALARIES', icon: Scale },
  { href: '/mortgages', label: 'MORTGAGES', icon: DollarSign },
  { href: '/debts', label: 'DEBT REPAYMENT', icon: FileText },
  { href: '/blog', label: 'BLOG', icon: FileText },
  { href: '/about', label: 'ABOUT', icon: HelpCircle },
  { href: '/links', label: 'USEFUL LINKS', icon: ExternalLink },
  { href: '/privacy-policy', label: 'PRIVACY POLICY', icon: Shield },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Backdrop Overlay (Mobile Only) */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full w-[230px] bg-gradient-to-b from-[#1566a0] via-[#1566a0] to-[#1e90c6] flex flex-col shadow-2xl z-40 border-r border-blue-800/20 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
      {/* Logo Section - Inspired by GOV.UK but with site branding */}
      <div className="p-5 border-b border-white/10">
        <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
          <div className="w-[45px] h-[45px] bg-white/95 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <Image
              src="/opengraph-image.png"
              alt="SalaryTakeHome Logo"
              width={38}
              height={38}
              className="rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[10px] uppercase tracking-widest text-white/80 font-medium mb-0.5">SALARY TAKE HOME</div>
            <div className="text-xl font-bold text-white tracking-tight">CALCULATOR</div>
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-5 px-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <ul className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs uppercase tracking-wide transition-all duration-200 relative overflow-hidden ${
                    isActive
                      ? 'bg-white/20 text-white font-semibold shadow-lg backdrop-blur-sm'
                      : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-md'
                  }`}
                >
                  {/* Active indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                  )}

                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-white/10 text-white/80 group-hover:bg-white/20 group-hover:text-white'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>

                  {item.hasArrow && (
                    <svg
                      className={`w-3 h-3 relative z-10 transition-transform duration-200 ${isActive ? 'translate-x-0' : 'translate-x-1 group-hover:translate-x-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer/Branding */}
      <div className="p-4 border-t border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-[10px] text-white/70 font-medium mb-1.5">UK Tax Calculator</div>
          <div className="text-[8px] text-white/50 uppercase tracking-wider">© 2025 SalaryTakeHome.co.uk</div>
          <div className="mt-2.5 pt-2.5 border-t border-white/10">
            <div className="flex items-center justify-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-[8px] text-white/60">Free & Private</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
    </>
  );
}
