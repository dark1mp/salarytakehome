export const metadata = {
  title: "UK Take Home Pay Calculator 2025/26 | Income Tax & NI Calculator",
  description: "Free UK take-home pay calculator for 2025/26. Calculate income tax, National Insurance, student loans, and pension deductions. Get your exact take-home salary instantly.",
  keywords: "take home pay calculator, UK tax calculator, income tax calculator, National Insurance calculator, net salary calculator, PAYE calculator",
  openGraph: {
    title: "UK Take Home Pay Calculator 2025/26 | Income Tax & NI Calculator",
    description: "Free UK take-home pay calculator for 2025/26. Calculate income tax, National Insurance, student loans, and pension deductions.",
    url: "https://salarytakehome.co.uk/take-home-pay-calculator",
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
    title: "UK Take Home Pay Calculator 2025/26",
    description: "Free UK take-home pay calculator. Calculate your net salary after tax, NI, and deductions.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/take-home-pay-calculator",
  },
};

export default function Layout({ children }) {
  return children;
}
