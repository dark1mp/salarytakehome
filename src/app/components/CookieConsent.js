"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setVisible(false);
    // Disable Google Analytics if cookies rejected
    window['ga-disable-G-LFKMMNJBFJ'] = true;
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:pl-[246px]">
      <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-700 p-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm leading-relaxed">
              We use cookies for analytics (Google Analytics) and advertising (Google AdSense) to improve your experience.
              Essential cookies are always active.{' '}
              <Link href="/privacy-policy" className="text-blue-400 hover:text-blue-300 underline">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
