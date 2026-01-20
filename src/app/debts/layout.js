export const metadata = {
  title: "Debt Repayment Calculator - Plan Your Debt Payoff | SalaryTakeHome.co.uk",
  description: "Calculate how long it will take to pay off your debts. Compare avalanche vs snowball methods and create a personalized debt repayment plan.",
  keywords: "debt calculator UK, debt repayment calculator, debt payoff plan, avalanche method, snowball method",
  openGraph: {
    title: "Debt Repayment Calculator - Plan Your Debt Payoff",
    description: "Calculate how long it will take to pay off your debts. Compare avalanche vs snowball methods.",
    url: "https://salarytakehome.co.uk/debts",
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
    title: "Debt Repayment Calculator - Plan Your Debt Payoff",
    description: "Calculate how long it will take to pay off your debts. Compare repayment methods.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/debts",
  },
};

export default function Layout({ children }) {
  return children;
}
