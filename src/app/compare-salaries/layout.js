export const metadata = {
  title: "Compare Salaries 2026/27 - Side-by-Side UK Salary Comparison | SalaryTakeHome.co.uk",
  description: "Compare two UK salaries side-by-side for 2026/27. See take-home pay, tax, National Insurance, and net income differences to make informed career decisions.",
  keywords: "compare salaries UK, salary comparison, job offer comparison, take home pay comparison, salary vs salary, compare salaries 2026/27",
  openGraph: {
    title: "Compare Salaries 2026/27 - Side-by-Side UK Salary Comparison",
    description: "Compare two UK salaries side-by-side for 2026/27. See take-home pay, tax, National Insurance, and net income differences.",
    url: "https://www.salarytakehome.co.uk/compare-salaries",
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
    title: "Compare Salaries 2026/27 - Side-by-Side UK Salary Comparison",
    description: "Compare two UK salaries side-by-side for 2026/27. See take-home pay, tax, and National Insurance differences.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/compare-salaries",
  },
};

export default function Layout({ children }) {
  return children;
}
