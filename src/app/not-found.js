import Link from 'next/link';
import { Calculator, Home, BookOpen, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "Page Not Found | SalaryTakeHome.co.uk",
  description: "The page you're looking for doesn't exist. Use our free UK tax calculators or browse our resources.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1566a0] to-[#1e90c6] mb-4">
            404
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <Link
            href="/"
            className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">Home</span>
          </Link>

          <Link
            href="/take-home-pay-calculator"
            className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">Tax Calculator</span>
          </Link>

          <Link
            href="/blog"
            className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">Blog</span>
          </Link>

          <Link
            href="/faq"
            className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">FAQ</span>
          </Link>
        </div>

        <p className="text-sm text-gray-500">
          If you believe this is an error, please <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline font-medium">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
