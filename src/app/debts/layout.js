export const metadata = {
  title: "Debt Repayment Calculator - Plan Your Debt Payoff | SalaryTakeHome.co.uk",
  description: "Free UK debt repayment calculator. Calculate how long it will take to pay off your credit card debt, personal loans, or overdraft. See total interest costs and create a clear repayment plan.",
  keywords: "debt calculator UK, debt repayment calculator, debt payoff plan, credit card debt calculator, loan repayment calculator, interest calculator",
  openGraph: {
    title: "Debt Repayment Calculator - Plan Your Debt Payoff",
    description: "Free UK debt repayment calculator. Calculate how long it will take to pay off your debts and see total interest costs.",
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
    description: "Free UK debt repayment calculator. Calculate how long it will take to pay off your debts and see total interest costs.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/debts",
  },
};

export default function Layout({ children }) {
  return children;
}
