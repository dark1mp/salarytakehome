import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import LayoutWrapper from './components/LayoutWrapper';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://salarytakehome.co.uk'),
  title: "UK Tax & Salary Calculators 2025/26 | SalaryTakeHome.co.uk",
  description: "Free UK tax calculators for take-home pay, mortgages, sick pay, student loans, and pensions. Calculate your finances with accurate 2025/26 tax rates. No registration required.",
  keywords: "UK tax calculator, take home pay, salary calculator, income tax, National Insurance, student loan, pension calculator, mortgage calculator, sick pay",
  authors: [{ name: "SalaryTakeHome" }],
  creator: "SalaryTakeHome",
  publisher: "SalaryTakeHome",
  robots: "index, follow",
  openGraph: {
    title: "UK Tax Calculator - Calculate Your Take-Home Pay",
    description: "Free UK tax calculator for 2024/25. Calculate income tax, National Insurance, and student loan deductions instantly.",
    url: "https://salarytakehome.co.uk",
    siteName: "SalaryTakeHome",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "UK Tax Calculator - SalaryTakeHome.co.uk",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Tax Calculator - Calculate Your Take-Home Pay",
    description: "Free UK tax calculator for 2024/25. Calculate your exact take-home pay instantly.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk",
  },
  other: {
    "msapplication-TileColor": "#1566a0",
    "theme-color": "#1566a0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google3b93564eda4debf4.html" />

        {/* Microsoft Bing Verification */}
        <meta name="msvalidate.01" content="BCD133B3A883D7A788E231EC0986C415" />

        {/* Google AdSense Account */}
        <meta name="google-adsense-account" content="ca-pub-3447670244921264" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LFKMMNJBFJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LFKMMNJBFJ');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3447670244921264"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "UK Tax Calculator",
              "description": "Free UK tax calculator to calculate your take-home pay, income tax, National Insurance, and student loan repayments for 2024/25.",
              "url": "https://salarytakehome.co.uk",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "GBP"
              },
              "author": {
                "@type": "Organization",
                "name": "SalaryTakeHome.co.uk"
              },
              "publisher": {
                "@type": "Organization",
                "name": "SalaryTakeHome.co.uk",
                "url": "https://salarytakehome.co.uk"
              },
              "mainEntity": {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do I calculate my UK take-home pay?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Use our free UK tax calculator to input your salary, tax code, pension contributions, and other details to get your accurate take-home pay calculation."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "What tax rates apply in the UK for 2024/25?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "UK tax rates for 2024/25: 0% on first £12,570 (Personal Allowance), 20% on £12,571-£50,270, 40% on £50,271-£125,140, and 45% above £125,140."
                    }
                  }
                ]
              }
            })
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
