export const metadata = {
  title: "Statutory Sick Pay Calculator 2025/26 - Calculate UK SSP Entitlement | SalaryTakeHome.co.uk",
  description: "Free UK Statutory Sick Pay calculator. Calculate your SSP entitlement for 2025/26 and preview the new rules from April 2026. Know your rights when off sick.",
  keywords: "statutory sick pay calculator, SSP calculator UK, sick pay entitlement, SSP 2025, SSP 2026, sick leave pay, UK sick pay rules",
  openGraph: {
    title: "Statutory Sick Pay Calculator - Calculate UK SSP Entitlement",
    description: "Free UK Statutory Sick Pay calculator. Calculate your SSP entitlement and preview the new rules from April 2026.",
    url: "https://salarytakehome.co.uk/sick-pay",
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
    description: "Free UK Statutory Sick Pay calculator. Calculate your SSP entitlement and preview April 2026 rule changes.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/sick-pay",
  },
};

export default function Layout({ children }) {
  return children;
}
