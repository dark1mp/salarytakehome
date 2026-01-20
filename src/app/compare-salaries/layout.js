export const metadata = {
  title: "Compare Salaries - Side-by-Side UK Salary Comparison | SalaryTakeHome.co.uk",
  description: "Compare two UK salaries side-by-side. See take-home pay, tax, National Insurance, and net income differences to make informed career decisions.",
  keywords: "compare salaries UK, salary comparison, job offer comparison, take home pay comparison, salary vs salary",
  openGraph: {
    title: "Compare Salaries - Side-by-Side UK Salary Comparison",
    description: "Compare two UK salaries side-by-side. See take-home pay, tax, National Insurance, and net income differences.",
    url: "https://salarytakehome.co.uk/compare-salaries",
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
    title: "Compare Salaries - Side-by-Side UK Salary Comparison",
    description: "Compare two UK salaries side-by-side. See take-home pay, tax, and National Insurance differences.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/compare-salaries",
  },
};

export default function Layout({ children }) {
  return children;
}
