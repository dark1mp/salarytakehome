export const metadata = {
  title: "Hourly Wage Calculator - Convert Annual Salary to Hourly Rate | SalaryTakeHome.co.uk",
  description: "Free hourly wage calculator. Convert your annual salary to hourly, daily, weekly, or monthly rates. Calculate your true hourly earnings after tax and deductions.",
  keywords: "hourly wage calculator, annual salary to hourly, hourly rate, wage conversion, salary breakdown",
  openGraph: {
    title: "Hourly Wage Calculator - Convert Annual Salary to Hourly Rate",
    description: "Free hourly wage calculator. Convert your annual salary to hourly, daily, weekly, or monthly rates.",
    url: "https://www.salarytakehome.co.uk/hourly-wage",
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
    title: "Hourly Wage Calculator - Convert Annual Salary to Hourly Rate",
    description: "Free hourly wage calculator. Convert your annual salary to hourly, daily, weekly, or monthly rates.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/hourly-wage",
  },
};

export default function Layout({ children }) {
  return children;
}
