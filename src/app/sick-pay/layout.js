export const metadata = {
  title: "Statutory Sick Pay Calculator 2026/27 - Calculate UK SSP Entitlement | SalaryTakeHome.co.uk",
  description: "Free UK Statutory Sick Pay calculator under the new 2026/27 rules. £123.25/week, day-1 payment, no Lower Earnings Limit. Know your rights when off sick.",
  keywords: "statutory sick pay calculator, SSP calculator UK, sick pay entitlement, SSP 2026/27, SSP 2026 rules, sick leave pay, UK sick pay rules, day one SSP",
  openGraph: {
    title: "Statutory Sick Pay Calculator 2026/27 - Calculate UK SSP Entitlement",
    description: "Free UK Statutory Sick Pay calculator. Calculate your SSP entitlement under the new 2026/27 rules in force from 6 April 2026.",
    url: "https://www.salarytakehome.co.uk/sick-pay",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome Calculator"
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Statutory Sick Pay Calculator - Calculate UK SSP Entitlement",
    description: "Free UK SSP calculator. Calculate your entitlement under the new 2026/27 rules — £123.25/wk, day-1 payment, no LEL.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/sick-pay",
  },
};

export default function Layout({ children }) {
  return children;
}
