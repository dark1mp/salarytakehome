"use client";
import { useEffect, useRef, useState } from 'react';

export default function AdUnit({ className = "" }) {
  const adRef = useRef(null);
  const containerRef = useRef(null);
  const pushed = useRef(false);
  const [adFilled, setAdFilled] = useState(false);

  useEffect(() => {
    if (adRef.current && !pushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        // AdSense not loaded yet or ad blocked
      }
    }

    // Observe the ad container for size changes to detect when an ad fills
    const observer = new MutationObserver(() => {
      if (containerRef.current) {
        const insEl = containerRef.current.querySelector('ins.adsbygoogle');
        if (insEl && insEl.offsetHeight > 0) {
          setAdFilled(true);
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'data-ad-status'],
      });
    }

    // Also check after a delay in case mutation fires before layout
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const insEl = containerRef.current.querySelector('ins.adsbygoogle');
        if (insEl && insEl.offsetHeight > 0) {
          setAdFilled(true);
        }
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden transition-all duration-300 ${adFilled ? 'my-4' : 'my-0'} ${className}`}
      style={{ maxHeight: adFilled ? '1000px' : '0' }}
    >
      <ins className="adsbygoogle"
        ref={adRef}
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3447670244921264"
        data-ad-slot="7756198179"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
