"use client";
import React from "react";
import { Shield, FileText, Cookie, Lock, Mail, ExternalLink } from 'lucide-react';
import LayoutWrapper from '../components/LayoutWrapper';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1566a0] to-[#1e90c6] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">How we protect your privacy and handle your data at SalaryTakeHome.co.uk</p>
              <p className="text-sm text-gray-500 mt-2">Last updated: January 2025</p>
            </div>

            {/* Introduction */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-bold text-gray-900 text-2xl">Introduction</h2>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-300 mb-4">
                <p className="text-gray-800 text-base leading-relaxed font-semibold">
                  <strong>Important:</strong> We do not hold, store, or retain any personal data whatsoever. All calculations are performed entirely in your browser, and we have no access to any information you enter.
                </p>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                SalaryTakeHome.co.uk (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our UK tax calculator website.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                We operate in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy applies to all visitors and users of our website.
              </p>
            </div>

            {/* Data Controller */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Data Controller</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                SalaryTakeHome.co.uk is the data controller responsible for your personal data. For any questions about this privacy policy or to exercise your data protection rights, please contact us at:
              </p>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-700">
                    <strong>Email:</strong> <a href="mailto:contact@salarytakehome.co.uk" className="text-blue-600 hover:underline">contact@salarytakehome.co.uk</a><br/>
                    <strong>Website:</strong> <Link href="/" className="text-blue-600 hover:underline">https://www.salarytakehome.co.uk</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-bold text-gray-900 text-2xl">Information We Collect</h2>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-300 mb-6">
                <p className="text-gray-800 text-base leading-relaxed font-semibold mb-2">
                  <strong>We Hold Zero Personal Data</strong>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We do not collect, store, retain, or have access to any personal data whatsoever. All tax calculations are performed entirely in your web browser on your device. We never see, store, transmit, or have any access to your salary, tax details, financial information, or any other data you enter into our calculator.
                </p>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-3">Analytics Information (Third-Party Services Only)</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                <strong>Important:</strong> We do not directly collect or store any information. However, third-party analytics services (Google Analytics, Vercel Analytics) may automatically collect anonymized technical information through cookies when you visit our website. This information is:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed mb-4">
                <li className="pl-2"><strong>Fully anonymized:</strong> Cannot identify you personally</li>
                <li className="pl-2"><strong>Aggregated:</strong> Combined with other users&apos; data for statistical purposes only</li>
                <li className="pl-2"><strong>Managed by third parties:</strong> Google Analytics and Vercel handle this data according to their own privacy policies</li>
                <li className="pl-2"><strong>Not stored by us:</strong> We do not have access to or store this analytics data on our servers</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                This anonymized analytics information may include: pages visited, time spent on pages, general geographic location (country/region level), browser type, and device type. It is used solely to improve our website&apos;s performance and user experience.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We use the automatically collected information for the following purposes:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed mb-4">
                <li className="pl-2"><strong>Website Analytics:</strong> To understand how visitors use our site and improve functionality</li>
                <li className="pl-2"><strong>Performance Monitoring:</strong> To identify and fix technical issues, optimize page load times</li>
                <li className="pl-2"><strong>Advertising:</strong> To display relevant advertisements (Google AdSense) and measure ad performance</li>
                <li className="pl-2"><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legal rights</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                <strong>Legal Basis:</strong> We process this data based on our legitimate interest in operating and improving our website, providing free services, and ensuring website security. For advertising cookies, we will obtain your consent where required by law.
              </p>
            </div>

            {/* Cookies and Tracking Technologies */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                  <Cookie className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-bold text-gray-900 text-2xl">Cookies and Tracking Technologies</h2>
              </div>

              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Our website uses cookies and similar tracking technologies to collect and store information about your visit. Cookies are small text files placed on your device when you visit a website.
              </p>

              <h3 className="font-bold text-gray-900 text-lg mb-4">Types of Cookies We Use</h3>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">1. Essential Cookies</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                  <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700 text-sm">
                    <li className="pl-2">Session management and security</li>
                    <li className="pl-2">Load balancing and website performance</li>
                  </ul>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">2. Analytics Cookies</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-3 mt-2">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Google Analytics Cookies:</p>
                    <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700 text-sm">
                      <li className="pl-2"><strong>_ga:</strong> Distinguishes users (expires after 2 years)</li>
                      <li className="pl-2"><strong>_ga_*:</strong> Stores session state (expires after 2 years)</li>
                      <li className="pl-2"><strong>_gid:</strong> Distinguishes users (expires after 24 hours)</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">Google Analytics is provided by Google LLC. You can opt-out by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mt-2">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Vercel Analytics:</p>
                    <p className="text-sm text-gray-700">Privacy-friendly analytics that does not collect personal data or use cookies that identify individuals. Data is aggregated and anonymized.</p>
                  </div>
                </div>

                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">3. Advertising Cookies (Future Implementation)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    When Google AdSense is fully implemented, we will use advertising cookies to:
                  </p>
                  <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700 text-sm mb-2">
                    <li className="pl-2">Display personalized advertisements based on your interests</li>
                    <li className="pl-2">Measure ad performance and effectiveness</li>
                    <li className="pl-2">Prevent fraud and abuse</li>
                  </ul>
                  <div className="bg-amber-50 rounded-lg p-3 mt-2 border border-amber-200">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Advertising cookies require your consent under UK cookie law. We will implement a cookie consent mechanism before activating advertising cookies. You will be able to accept or reject non-essential cookies.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mt-2">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Google AdSense Cookies (when active):</p>
                    <ul className="list-disc list-outside ml-6 space-y-1 text-gray-700 text-sm">
                      <li className="pl-2">Various cookies for ad personalization and measurement</li>
                      <li className="pl-2">Cookies may persist for up to 2 years</li>
                      <li className="pl-2">You can manage preferences at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ad Settings</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-4">Managing Cookies</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed mb-4">
                <li className="pl-2"><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies. Visit your browser&apos;s help section for instructions</li>
                <li className="pl-2"><strong>Opt-out Tools:</strong> Use Google&apos;s opt-out tools for Analytics and AdSense</li>
                <li className="pl-2"><strong>Cookie Consent:</strong> When our cookie consent mechanism is implemented, you can choose which cookies to accept</li>
              </ul>
              <p className="text-gray-700 text-base leading-relaxed">
                <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Third-Party Services</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We use the following third-party services that may collect information:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-3">
                  <h4 className="font-bold text-gray-900 mb-2">Google Services</h4>
                  <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-sm leading-relaxed mb-2">
                    <li className="pl-2"><strong>Google Analytics:</strong> Website analytics and usage statistics. <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</Link></li>
                    <li className="pl-2"><strong>Google AdSense:</strong> Advertising services (when active). <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy Policy</Link></li>
                  </ul>
                </div>

                <div className="border-l-4 border-emerald-500 pl-4 py-3">
                  <h4 className="font-bold text-gray-900 mb-2">Vercel</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Vercel Analytics & Speed Insights:</strong> Privacy-friendly analytics and performance monitoring. Vercel does not collect personal data. <Link href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vercel Privacy Policy</Link>
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed mt-6">
                These third parties have their own privacy policies. We encourage you to read their policies to understand how they handle your information.
              </p>
            </div>

            {/* Your Rights Under UK GDPR */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Your Rights Under UK GDPR</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018, you have the following rights:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">1. Right to Access</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">You can request a copy of any personal data we hold about you.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">2. Right to Rectification</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">You can request correction of inaccurate or incomplete data.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">3. Right to Erasure (&quot;Right to be Forgotten&quot;)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">You can request deletion of your personal data in certain circumstances.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">4. Right to Restrict Processing</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">You can request that we limit how we use your data.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">5. Right to Data Portability</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">You can request your data in a structured, machine-readable format.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">6. Right to Object</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">You can object to processing based on legitimate interests or for direct marketing.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">7. Rights Related to Automated Decision-Making</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">You have rights regarding automated processing and profiling (not applicable to our services).</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-1">8. Right to Withdraw Consent</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">Where processing is based on consent, you can withdraw it at any time.</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>To exercise these rights:</strong> Please contact us using the contact information provided in the &quot;Data Controller&quot; section above. We will respond within one month of receiving your request.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  <strong>Note:</strong> Since we do not hold any personal data, most data subject rights requests will be straightforward to fulfill as there is no data to access, correct, or delete.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 mt-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Right to Complain:</strong> If you are not satisfied with how we handle your data, you have the right to lodge a complaint with the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Information Commissioner&apos;s Office (ICO)</a>, the UK&apos;s data protection authority.
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Data Security</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700 text-base leading-relaxed">
                <li className="pl-2">All calculations are performed locally in your browser - no financial data is transmitted to our servers</li>
                <li className="pl-2">We use HTTPS encryption for all data transmission</li>
                <li className="pl-2">Analytics data is anonymized and aggregated</li>
                <li className="pl-2">We regularly review and update our security practices</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Data Retention</h2>
              <div className="bg-emerald-50 rounded-xl p-4 border-2 border-emerald-300 mb-4">
                <p className="text-gray-800 text-base leading-relaxed font-semibold">
                  <strong>We Retain Zero Data</strong>
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">
                  Since we do not collect, store, or hold any personal data whatsoever, there is absolutely no data for us to retain. We have no databases, no user accounts, and no storage systems that contain your information.
                </p>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                Any anonymized analytics data collected by third-party services (Google Analytics, Vercel Analytics) is retained according to their own retention policies (typically 14-26 months for Google Analytics). This data is managed entirely by those third parties, not by us.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us and we will delete such information.
              </p>
            </div>

            {/* International Transfers */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">International Data Transfers</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Some of our third-party service providers (Google, Vercel) may transfer data outside the UK/EEA. These transfers are protected by appropriate safeguards, including Standard Contractual Clauses and adequacy decisions. Google and Vercel are certified under appropriate data protection frameworks.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <h2 className="font-bold text-gray-900 text-xl mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-white/90 rounded-2xl border border-blue-100 shadow-medium p-8 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h2 className="font-bold text-gray-900 text-2xl">Contact Us</h2>
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, please contact us:
              </p>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-700 text-base leading-relaxed mb-2">
                  <strong>Email:</strong> <a href="mailto:contact@salarytakehome.co.uk" className="text-blue-600 hover:underline">contact@salarytakehome.co.uk</a>
                </p>
                <p className="text-gray-700 text-base leading-relaxed">
                  <strong>Website:</strong> <Link href="/" className="text-blue-600 hover:underline">https://www.salarytakehome.co.uk</Link>
                </p>
              </div>
            </div>

            {/* Footer Note */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
              <p className="text-gray-600 text-sm">
                This Privacy Policy is effective as of January 2025 and complies with UK GDPR and the Data Protection Act 2018.
              </p>
            </div>
          </div>

          {/* Ad Space */}
          <aside className="hidden lg:block w-40 flex-shrink-0">
            <div className="sticky top-8 h-[600px]">
              {/* Google AdSense code here */}
            </div>
          </aside>
        </div>
      </div>
    </LayoutWrapper>
  );
}
