import Link from 'next/link';
import { Mail, MessageSquare, HelpCircle, Shield } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export const metadata = {
  title: "Contact Us | SalaryTakeHome.co.uk",
  description: "Get in touch with the SalaryTakeHome.co.uk team. Contact us about our UK tax calculators, report issues, or ask questions about our tools.",
  openGraph: {
    title: "Contact Us | SalaryTakeHome.co.uk",
    description: "Get in touch with the SalaryTakeHome.co.uk team about our UK tax calculators.",
    url: "https://www.salarytakehome.co.uk/contact",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome Calculator",
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | SalaryTakeHome.co.uk",
    description: "Get in touch with the SalaryTakeHome.co.uk team about our UK tax calculators.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/contact",
  },
};

export default function Contact() {
  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-2">
          <div className="max-w-4xl">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                Contact Us
              </h1>
              <p className="text-base text-gray-700">
                Have a question, suggestion, or found an issue with one of our calculators? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 pb-8">
          <div className="max-w-4xl">

            {/* Contact Methods Grid */}
            <div className="grid lg:grid-cols-2 gap-4 mb-4">

              {/* Email Card */}
              <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-xl">Email Us</h2>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  The best way to reach us is by email. We aim to respond within 48 hours.
                </p>
                <a
                  href="mailto:contact@salarytakehome.co.uk"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1566a0] to-[#1e90c6] text-white font-semibold px-5 py-2.5 rounded-xl hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  contact@salarytakehome.co.uk
                </a>
              </div>

              {/* Feedback Card */}
              <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-bold text-gray-900 text-xl">Feedback & Suggestions</h2>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  We're always looking to improve. If you have suggestions for new features, calculators, or improvements to existing tools, please let us know.
                </p>
                <p className="text-gray-600 text-sm">
                  Send your ideas to <a href="mailto:contact@salarytakehome.co.uk" className="text-blue-600 hover:text-blue-800 underline font-semibold">contact@salarytakehome.co.uk</a>
                </p>
              </div>
            </div>

            {/* Common Questions */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8 mb-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                  <HelpCircle className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-bold text-gray-900 text-2xl">Before You Contact Us</h2>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                You might find the answer to your question in these resources:
              </p>
              <div className="grid lg:grid-cols-2 gap-4">
                <Link href="/faq" className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group">
                  <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">FAQ</div>
                    <div className="text-sm text-gray-500">Answers to common questions about tax, NI, and our calculators</div>
                  </div>
                </Link>
                <Link href="/about" className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group">
                  <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">About Us</div>
                    <div className="text-sm text-gray-500">Learn more about SalaryTakeHome.co.uk and how it works</div>
                  </div>
                </Link>
                <Link href="/blog" className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group">
                  <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Blog</div>
                    <div className="text-sm text-gray-500">In-depth guides on UK tax, pensions, and salary topics</div>
                  </div>
                </Link>
                <Link href="/privacy-policy" className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group">
                  <Shield className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Privacy Policy</div>
                    <div className="text-sm text-gray-500">How we handle your data and protect your privacy</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-white rounded-2xl border border-rose-100 shadow-medium p-8">
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Please Note</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-3">
                  SalaryTakeHome.co.uk provides free tax calculators for informational purposes only. We are not financial advisors and cannot provide personalised tax or financial advice.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  For specific questions about your tax situation, we recommend contacting <a href="https://www.gov.uk/contact-hmrc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-semibold">HMRC directly</a> or consulting a qualified accountant.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
