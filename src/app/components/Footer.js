import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-6 mb-4">
          {/* Calculators Column */}
          <div>
            <h3 className="text-base font-bold mb-2">Calculators</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="/take-home-pay-calculator" className="hover:text-white transition-colors">Take Home Pay</Link></li>
              <li><Link href="/pay-rise" className="hover:text-white transition-colors">Pay Rise</Link></li>
              <li><Link href="/hourly-wage" className="hover:text-white transition-colors">Hourly Wage</Link></li>
              <li><Link href="/compare-salaries" className="hover:text-white transition-colors">Compare Salaries</Link></li>
              <li><Link href="/two-jobs" className="hover:text-white transition-colors">Two Jobs</Link></li>
              <li><Link href="/pro-rata-furlough" className="hover:text-white transition-colors">Pro-Rata</Link></li>
            </ul>
          </div>

          {/* Benefits Column */}
          <div>
            <h3 className="text-base font-bold mb-2">Benefits</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="/sick-pay" className="hover:text-white transition-colors">Sick Pay</Link></li>
              <li><Link href="/maternity-sick-pay" className="hover:text-white transition-colors">Maternity Pay</Link></li>
              <li><Link href="/mortgages" className="hover:text-white transition-colors">Mortgages</Link></li>
              <li><Link href="/debts" className="hover:text-white transition-colors">Debt Repayment</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-base font-bold mb-2">Resources</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/links" className="hover:text-white transition-colors">Useful Links</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-base font-bold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">
              This site provides estimates only and does not constitute financial advice.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 mt-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} SalaryTakeHome.co.uk. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              UK tax rates for 2025/26 tax year
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
