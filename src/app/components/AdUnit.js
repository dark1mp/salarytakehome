"use client";
import { useEffect, useRef, useState } from 'react';

export default function AdUnit({ className = "", slot = "7756198179", hideOnMobile = false, showScrollHint = false }) {
  const adRef = useRef(null);
  const containerRef = useRef(null);
  const pushed = useRef(false);
  const [adFilled, setAdFilled] = useState(false);

  const checkAdFilled = () => {
    const insEl = adRef.current;
    if (!insEl) return;
    // AdSense sets data-ad-status="filled" when an ad renders
    const status = insEl.getAttribute('data-ad-status');
    if (status === 'filled') {
      setAdFilled(true);
    } else if (status === 'unfilled') {
      setAdFilled(false);
    }
  };

  useEffect(() => {
    if (adRef.current && !pushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        // AdSense not loaded yet or ad blocked
      }
    }

    // Observe the ins element for data-ad-status changes
    const observer = new MutationObserver(checkAdFilled);

    if (adRef.current) {
      observer.observe(adRef.current, {
        attributes: true,
        attributeFilter: ['data-ad-status'],
        childList: true,
        subtree: true,
      });
    }

    // Fallback check after a delay
    const timer = setTimeout(checkAdFilled, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden transition-all duration-300 ${adFilled ? 'my-4' : 'my-0'} ${hideOnMobile ? 'hidden md:block' : ''} ${className}`}
      style={{ maxHeight: adFilled ? '1000px' : '0' }}
    >
      {adFilled && (
        <p className={`${showScrollHint ? '' : 'lg:hidden'} text-center text-sm lg:text-[20px] text-gray-900 mb-2`}>↓ Scroll down to see results ↓</p>
      )}
      <ins className="adsbygoogle"
        ref={adRef}
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3447670244921264"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
