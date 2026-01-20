export const metadata = {
  title: "Two Jobs Tax Calculator - Calculate Tax on Multiple Jobs | SalaryTakeHome.co.uk",
  description: "Calculate your combined tax when working two jobs in the UK. See how PAYE tax codes split across multiple employments and your total take-home pay.",
  keywords: "two jobs tax calculator, multiple jobs UK, second job tax, combined income tax, dual employment calculator",
  openGraph: {
    title: "Two Jobs Tax Calculator - Calculate Tax on Multiple Jobs",
    description: "Calculate your combined tax when working two jobs in the UK. See how PAYE tax codes split across employments.",
    url: "https://salarytakehome.co.uk/two-jobs",
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
    title: "Two Jobs Tax Calculator - Calculate Tax on Multiple Jobs",
    description: "Calculate your combined tax when working two jobs in the UK. See your total take-home pay.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/two-jobs",
  },
};

export default function Layout({ children }) {
  return children;
}
