export const metadata = {
  title: "UK Tax Code Checker 2026/27 | What Does My Tax Code Mean?",
  description: "Free UK tax code checker. Enter your tax code to find out what it means, your Personal Allowance, which tax rates apply, and whether it's correct. Updated for 2026/27.",
  keywords: "tax code checker, what does my tax code mean, UK tax code, tax code explained, 1257L, tax code lookup, HMRC tax code, emergency tax code, Scottish tax code, tax code letters meaning",
  openGraph: {
    title: "UK Tax Code Checker 2026/27 | What Does My Tax Code Mean?",
    description: "Free UK tax code checker. Enter your tax code to find out what it means, your Personal Allowance, and which tax rates apply.",
    url: "https://www.salarytakehome.co.uk/tax-code",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "SalaryTakeHome UK Tax Code Checker"
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Tax Code Checker 2026/27",
    description: "Free UK tax code checker. Find out what your tax code means and if it's correct.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/tax-code",
  },
};

export default function Layout({ children }) {
  return children;
}
