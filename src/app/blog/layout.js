export const metadata = {
  title: "Blog - UK Tax Tips & Salary Advice | SalaryTakeHome.co.uk",
  description: "Expert guides on UK tax, salary optimization, pension contributions, student loans, and maximizing your take-home pay. Updated for 2024/25 tax year.",
  keywords: "UK tax blog, salary advice, tax tips UK, take home pay tips, salary optimization",
  openGraph: {
    title: "Blog - UK Tax Tips & Salary Advice",
    description: "Expert guides on UK tax, salary optimization, pension contributions, and maximizing your take-home pay.",
    url: "https://www.salarytakehome.co.uk/blog",
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
    title: "Blog - UK Tax Tips & Salary Advice",
    description: "Expert guides on UK tax, salary optimization, and maximizing your take-home pay.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/blog",
  },
};

export default function Layout({ children }) {
  return children;
}
