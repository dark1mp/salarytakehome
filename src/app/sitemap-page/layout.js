export const metadata = {
  title: "Site Map | SalaryTakeHome",
  description: "Complete site map for SalaryTakeHome UK tax calculators, salary tools, and financial guides.",
  openGraph: {
    title: "Site Map | SalaryTakeHome",
    description: "Complete site map for SalaryTakeHome UK tax calculators, salary tools, and financial guides.",
    url: "https://www.salarytakehome.co.uk/sitemap-page",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome Calculator",
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Map | SalaryTakeHome",
    description: "Complete site map for SalaryTakeHome UK tax calculators, salary tools, and financial guides.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/sitemap-page",
  },
};

export default function Layout({ children }) {
  return children;
}
