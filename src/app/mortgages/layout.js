export const metadata = {
  title: "Mortgage Affordability Calculator - UK Mortgage Calculator | SalaryTakeHome.co.uk",
  description: "Calculate how much you can borrow for a UK mortgage based on your salary and expenses. See monthly repayments and affordability for your income.",
  keywords: "mortgage calculator UK, mortgage affordability, how much can I borrow, mortgage repayments, UK property calculator",
  openGraph: {
    title: "Mortgage Affordability Calculator - UK Mortgage Calculator",
    description: "Calculate how much you can borrow for a UK mortgage based on your salary and expenses.",
    url: "https://www.salarytakehome.co.uk/mortgages",
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
    title: "Mortgage Affordability Calculator - UK Mortgage Calculator",
    description: "Calculate how much you can borrow for a UK mortgage based on your salary and expenses.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/mortgages",
  },
};

export default function Layout({ children }) {
  return children;
}
