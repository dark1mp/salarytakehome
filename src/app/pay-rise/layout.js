export const metadata = {
  title: "Pay Rise Calculator UK 2025/26 | See Your Take Home After a Raise",
  description: "Free UK pay rise calculator for 2025/26. See exactly how much extra money you'll take home after a salary increase, accounting for income tax, National Insurance, and other deductions.",
  keywords: "pay rise calculator, salary increase calculator, tax on pay rise, take home pay after raise, UK pay rise calculator, wage increase calculator, salary bump calculator",
  openGraph: {
    title: "Pay Rise Calculator UK 2025/26 | See Your Take Home After a Raise",
    description: "Free UK pay rise calculator. See exactly how much extra money you'll take home after a salary increase.",
    url: "https://www.salarytakehome.co.uk/pay-rise",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome Pay Rise Calculator"
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Rise Calculator UK 2025/26",
    description: "Free UK pay rise calculator. See how much of your raise you'll actually keep after tax.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/pay-rise",
  },
};

export default function Layout({ children }) {
  return children;
}
