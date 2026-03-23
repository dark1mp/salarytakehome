"use client";
import { useEffect, useRef } from 'react';

export default function AdUnit({ className = "" }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (adRef.current && !pushed.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      } catch (e) {
        // AdSense not loaded yet or ad blocked
      }
    }
  }, []);

  return (
    <div className={`my-4 min-h-[250px] flex items-center justify-center ${className}`}>
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
