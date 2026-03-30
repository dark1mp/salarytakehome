export const metadata = {
  title: "UK Dividend Tax Calculator 2025/26 | How Much Tax on Dividends?",
  description: "Free UK dividend tax calculator. Enter your salary and dividends to see exactly how much tax you'll pay. Covers dividend allowance, basic, higher and additional rates. Updated for 2025/26.",
  keywords: "dividend tax calculator, UK dividend tax, tax on dividends, dividend allowance, dividend tax rates 2025/26, how much tax on dividends, Ltd company dividends, director dividend tax",
  openGraph: {
    title: "UK Dividend Tax Calculator 2025/26 | How Much Tax on Dividends?",
    description: "Free UK dividend tax calculator. Enter your salary and dividends to see how much tax you'll pay after the dividend allowance.",
    url: "https://www.salarytakehome.co.uk/dividend-tax",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome UK Dividend Tax Calculator"
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Dividend Tax Calculator 2025/26",
    description: "Free UK dividend tax calculator. See how much tax you'll pay on your dividends.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/dividend-tax",
  },
};

export default function Layout({ children }) {
  return children;
}
