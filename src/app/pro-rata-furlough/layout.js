export const metadata = {
  title: "Pro-Rata & Furlough Calculator - Part-Time Salary Calculator | SalaryTakeHome.co.uk",
  description: "Calculate pro-rata salary for part-time work and furlough pay. Convert full-time salaries to part-time equivalents and see your adjusted pay.",
  keywords: "pro rata calculator, furlough calculator, part time salary calculator, furlough pay, pro rata salary UK",
  openGraph: {
    title: "Pro-Rata & Furlough Calculator - Part-Time Salary Calculator",
    description: "Calculate pro-rata salary for part-time work and furlough pay. Convert full-time to part-time equivalents.",
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
    title: "Pro-Rata & Furlough Calculator - Part-Time Salary Calculator",
    description: "Calculate pro-rata salary for part-time work and furlough pay.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/pro-rata-furlough",
  },
};

export default function Layout({ children }) {
  return children;
}
