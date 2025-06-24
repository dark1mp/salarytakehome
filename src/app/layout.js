import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UK Tax Calculator - Calculate Your Take-Home Pay | SalaryTakeHome.co.uk",
  description: "Free UK tax calculator for 2024/25. Calculate income tax, National Insurance, and student loan deductions. Get your exact take-home pay instantly.",
  keywords: "UK tax calculator, take home pay, salary calculator, income tax, National Insurance, student loan, pension calculator",
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
