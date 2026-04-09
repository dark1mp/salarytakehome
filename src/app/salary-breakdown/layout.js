export const metadata = {
  title: "UK Salary After Tax 2026/27 — Take-Home Pay £20k to £100k | SalaryTakeHome",
  description: "See how much you take home from £20,000 to £100,000 in the UK for 2026/27. Quick-reference salary cards with tax, NI, and take-home pay at every £5k step.",
  keywords: "salary after tax UK, take home pay UK, UK salary breakdown, salary after tax 2026/27, how much tax on salary",
  openGraph: {
    title: "UK Salary After Tax 2026/27 — Take-Home Pay £20k to £100k",
    description: "See how much you take home from £20,000 to £100,000 in the UK for 2026/27. Quick-reference salary cards with tax, NI, and take-home pay at every £5k step.",
    url: "https://www.salarytakehome.co.uk/salary-breakdown",
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
    title: "UK Salary After Tax 2026/27 — Take-Home Pay £20k to £100k",
    description: "See how much you take home from £20,000 to £100,000 in the UK for 2026/27. Quick-reference salary cards with tax, NI, and take-home pay at every £5k step.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/salary-breakdown",
  },
};

export default function Layout({ children }) {
  return children;
}
