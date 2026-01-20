export const metadata = {
  title: "Useful Links - UK Tax & Salary Resources | SalaryTakeHome.co.uk",
  description: "Curated collection of official UK government resources for tax, National Insurance, pensions, student loans, and salary information.",
  keywords: "UK tax resources, HMRC links, salary resources, tax information UK, government tax links",
  openGraph: {
    title: "Useful Links - UK Tax & Salary Resources",
    description: "Curated collection of official UK government resources for tax, National Insurance, pensions, and salary information.",
    url: "https://salarytakehome.co.uk/links",
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
    title: "Useful Links - UK Tax & Salary Resources",
    description: "Curated collection of official UK government resources for tax and salary information.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/links",
  },
};

export default function Layout({ children }) {
  return children;
}
