"use client";
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import LayoutWrapper from '../components/LayoutWrapper';

export default function Links() {
  const usefulLinks = [
    { name: 'HMRC', url: 'https://www.gov.uk/government/organisations/hm-revenue-customs', description: 'HM Revenue & Customs official website' },
    { name: 'Gov.uk Tax', url: 'https://www.gov.uk/browse/tax', description: 'UK government tax information' },
    { name: 'Student Loans Company', url: 'https://www.gov.uk/repaying-your-student-loan', description: 'Student loan repayment information' },
    { name: 'Money Advice Service', url: 'https://www.moneyadviceservice.org.uk', description: 'Free money advice' },
  ];

  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="flex gap-6 max-w-[1400px] mx-auto px-8 py-10">
          <div className="flex-1 max-w-6xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <ExternalLink className="w-12 h-12 text-[#1566a0]" />
              Useful Links
            </h1>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
          {usefulLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 rounded-3xl shadow-medium border border-white/30 p-6 hover:shadow-lg transition-all duration-200 hover:border-blue-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <ExternalLink className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">{link.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{link.description}</p>
            </a>
          ))}
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
