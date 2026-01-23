export const metadata = {
  title: "Pro-Rata Salary Calculator - Part-Time Salary Calculator | SalaryTakeHome.co.uk",
  description: "Calculate your pro-rata salary for part-time work. Convert full-time salaries to part-time equivalents based on your working hours.",
  keywords: "pro rata calculator, part time salary calculator, pro rata salary UK, part time pay calculator, FTE salary",
  openGraph: {
    title: "Pro-Rata Salary Calculator - Part-Time Salary Calculator",
    description: "Calculate your pro-rata salary for part-time work. Convert full-time to part-time salary equivalents.",
    url: "https://salarytakehome.co.uk/pro-rata-furlough",
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
    title: "Pro-Rata Salary Calculator - Part-Time Salary Calculator",
    description: "Calculate your pro-rata salary for part-time work.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/pro-rata-furlough",
  },
};

export default function Layout({ children }) {
  return children;
}
