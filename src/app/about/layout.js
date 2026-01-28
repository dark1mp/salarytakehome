export const metadata = {
  title: "About Us - UK's Most Accurate Salary Calculator | SalaryTakeHome.co.uk",
  description: "Learn about SalaryTakeHome.co.uk, the UK's most accurate and comprehensive tax calculator. Free tools for calculating take-home pay since 2024.",
  keywords: "about salary calculator, UK tax calculator, free salary tools, take home pay calculator",
  openGraph: {
    title: "About Us - UK's Most Accurate Salary Calculator",
    description: "Learn about SalaryTakeHome.co.uk, the UK's most accurate and comprehensive tax calculator.",
    url: "https://www.salarytakehome.co.uk/about",
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
    title: "About Us - UK's Most Accurate Salary Calculator",
    description: "Learn about SalaryTakeHome.co.uk, the UK's most accurate and comprehensive tax calculator.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/about",
  },
};

export default function Layout({ children }) {
  return children;
}
