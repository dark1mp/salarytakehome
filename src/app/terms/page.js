import Link from 'next/link';
import { Shield } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';

export const metadata = {
  title: "Terms of Service | SalaryTakeHome.co.uk",
  description: "Terms of Service for SalaryTakeHome.co.uk - Free UK tax calculators. Read our terms and conditions for using our salary and tax calculation tools.",
  openGraph: {
    title: "Terms of Service | SalaryTakeHome.co.uk",
    description: "Terms of Service for SalaryTakeHome.co.uk - Free UK tax calculators. Read our terms and conditions.",
    url: "https://www.salarytakehome.co.uk/terms",
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
    title: "Terms of Service | SalaryTakeHome.co.uk",
    description: "Terms of Service for SalaryTakeHome.co.uk - Free UK tax calculators.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/terms",
  },
};

export default function TermsOfService() {
  return (
    <LayoutWrapper breadcrumbs={[{ name: "Home", href: "/" }, { name: "Terms" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-2">
          <div className="max-w-4xl">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                Terms of Service
              </h1>
              <p className="text-sm text-gray-500">Last updated: 8 March 2026</p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 pb-8">
          <div className="max-w-4xl space-y-4">

            {/* Introduction */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                Welcome to SalaryTakeHome.co.uk. By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                SalaryTakeHome.co.uk provides free online tax and salary calculators for informational purposes. These tools are designed to help UK residents estimate their take-home pay and understand their tax obligations.
              </p>
            </div>

            {/* Use of Service */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                Our calculators and tools are provided free of charge for personal, non-commercial use. You may use our website to:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed mb-3">
                <li>Estimate your take-home pay and tax deductions</li>
                <li>Compare salary offers and calculate hourly wages</li>
                <li>Calculate statutory benefits such as sick pay and maternity pay</li>
                <li>Estimate mortgage repayments and debt calculations</li>
                <li>Read our educational blog articles about UK tax and finance</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                You agree not to misuse the service, including but not limited to: attempting to gain unauthorised access, using automated tools to scrape content, or using the service for any unlawful purpose.
              </p>
            </div>

            {/* Disclaimer & Accuracy */}
            <div className="bg-white rounded-2xl border border-rose-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer & Accuracy</h2>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-200 mb-4">
                <p className="text-gray-700 text-base leading-relaxed font-semibold mb-3">
                  Important: Our calculators provide estimates only and should not be relied upon as financial or tax advice.
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  While we strive to ensure our calculations are accurate and based on official HMRC rates and thresholds, the results are approximations. Your actual tax liability may differ due to individual circumstances including but not limited to benefits in kind, multiple income sources, tax code adjustments, and other HMRC factors.
                </p>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                SalaryTakeHome.co.uk does not provide financial, tax, or legal advice. The information on this website is for general informational and educational purposes only.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Always consult a qualified accountant, tax advisor, or HMRC directly for advice specific to your personal circumstances. We are not responsible for any decisions made based on the information provided by our calculators or blog content.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                All content on this website, including but not limited to text, graphics, logos, calculator tools, blog articles, and software, is the property of SalaryTakeHome.co.uk and is protected by UK copyright and intellectual property laws.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written permission. You may share links to our pages and reference our content with appropriate attribution.
              </p>
            </div>

            {/* Privacy */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy & Data</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                Your privacy is important to us. All calculations are performed locally in your browser - we do not collect, store, or transmit your salary or personal financial data to our servers.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                For full details on how we handle data, cookies, and analytics, please refer to our <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline font-semibold">Privacy Policy</Link>.
              </p>
            </div>

            {/* Third-Party Content */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Content & Advertising</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                Our website may display advertisements provided by third-party advertising networks, including Google AdSense. These advertisements are clearly distinguishable from our editorial content.
              </p>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                We are not responsible for the content, accuracy, or practices of any third-party websites or advertisements. Clicking on advertisements or external links is at your own risk.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                Our blog content may reference external sources such as HMRC, the Office for National Statistics, and other authoritative bodies. We are not affiliated with these organisations unless explicitly stated.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                To the fullest extent permitted by law, SalaryTakeHome.co.uk shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, this website or any information provided herein.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                This includes, without limitation, any errors or inaccuracies in calculations, loss of data, loss of profits, or any financial decisions made based on information obtained from this website.
              </p>
            </div>

            {/* Availability */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                We aim to keep SalaryTakeHome.co.uk available at all times, but we do not guarantee uninterrupted access. We may temporarily suspend, withdraw, or restrict access to the website for maintenance, updates, or other operational reasons without prior notice.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to These Terms</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. The "Last updated" date at the top of this page indicates when these terms were last revised. Your continued use of the website after any changes constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                These Terms of Service are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl border border-blue-100 shadow-medium p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-3">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li>Email: <a href="mailto:contact@salarytakehome.co.uk" className="text-blue-600 hover:text-blue-800 underline font-semibold">contact@salarytakehome.co.uk</a></li>
                <li>Visit our <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline font-semibold">Contact Page</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
