export const metadata = {
  title: "International Salary Comparison - Compare UK Salaries Worldwide | SalaryTakeHome.co.uk",
  description: "Compare UK salaries with international equivalents. See purchasing power, tax rates, and cost of living differences across countries.",
  keywords: "international salary comparison, UK salary abroad, salary comparison worldwide, global salary calculator, expat salary",
  openGraph: {
    title: "International Salary Comparison - Compare UK Salaries Worldwide",
    description: "Compare UK salaries with international equivalents. See purchasing power and tax rate differences.",
    url: "https://salarytakehome.co.uk/country-comparison",
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
    title: "International Salary Comparison - Compare UK Salaries Worldwide",
    description: "Compare UK salaries with international equivalents across countries.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/country-comparison",
  },
};

export default function Layout({ children }) {
  return children;
}
