export const metadata = {
  title: "Salary Per Second Calculator | How Much Do You Earn Per Second?",
  description: "Convert any salary into per year, month, week, day, hour, minute, and second. Watch your earnings tick up in real-time. Fun tool for comparing salaries — from average UK wages to footballer pay.",
  keywords: "salary per second, salary per minute, salary per hour, how much do I earn per second, footballer salary per second, earnings calculator, salary breakdown, salary converter",
  openGraph: {
    title: "Salary Per Second Calculator | How Much Do You Earn Per Second?",
    description: "Convert any salary into per second, per minute, per hour, and more. Watch your earnings tick up in real-time.",
    url: "https://www.salarytakehome.co.uk/salary-per-second",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome Salary Per Second Calculator"
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salary Per Second Calculator",
    description: "How much do you earn per second? Convert any salary and watch it tick up in real-time.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/salary-per-second",
  },
};

export default function Layout({ children }) {
  return children;
}
