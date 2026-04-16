export const metadata = {
  title: "Pro Rata Salary Calculator UK 2026/27 — Work Out Part-Time Pay",
  description: "Free pro rata salary calculator for the UK. Instantly work out part-time pay from a full-time equivalent salary, plus tax and take-home estimates for 2026/27.",
  keywords: "pro rata calculator, calculate pro rata salary, how to work out pro rata, part time salary calculator, pro rata salary uk, pro rata pay calculator, FTE salary, pro rata 2026/27",
  openGraph: {
    title: "Pro Rata Salary Calculator UK 2026/27 — Work Out Part-Time Pay",
    description: "Free pro rata salary calculator. Work out part-time pay from a full-time equivalent salary, with tax and take-home estimates for 2026/27.",
    url: "https://www.salarytakehome.co.uk/pro-rata-furlough",
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
    title: "Pro Rata Salary Calculator UK 2026/27",
    description: "Free pro rata calculator — work out part-time pay from any full-time salary.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/pro-rata-furlough",
  },
};

export default function Layout({ children }) {
  return children;
}
