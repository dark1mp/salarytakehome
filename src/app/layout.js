import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SalaryTakeHome.co.uk – UK Tax Calculator & Take-Home Pay Estimator",
  description: "Calculate your UK income tax, National Insurance, and take-home pay for 2024/25 and 2025/26. Fast, free, and privacy-friendly.",
  openGraph: {
    title: "SalaryTakeHome.co.uk – UK Tax Calculator & Take-Home Pay Estimator",
    description: "Calculate your UK income tax, National Insurance, and take-home pay for 2024/25 and 2025/26. Fast, free, and privacy-friendly.",
    url: "https://salarytakehome.co.uk",
    siteName: "SalaryTakeHome.co.uk",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "SalaryTakeHome.co.uk – UK Tax Calculator & Take-Home Pay Estimator"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SalaryTakeHome.co.uk – UK Tax Calculator & Take-Home Pay Estimator",
    description: "Calculate your UK income tax, National Insurance, and take-home pay for 2024/25 and 2025/26. Fast, free, and privacy-friendly.",
    site: "@salarytakehome",
    images: [
      "/opengraph-image.png"
    ]
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
