export const metadata = {
  title: "Maternity Pay Calculator - UK Statutory Maternity Pay Calculator | SalaryTakeHome.co.uk",
  description: "Calculate UK statutory maternity pay (SMP). See your entitlement and weekly payment amounts for 2024/25 tax year.",
  keywords: "maternity pay calculator, statutory maternity pay, SMP calculator, maternity pay UK, pregnancy pay",
  openGraph: {
    title: "Maternity Pay Calculator - UK Statutory Maternity Pay Calculator",
    description: "Calculate UK statutory maternity pay (SMP). See your entitlement and weekly payment amounts for 2024/25.",
    url: "https://www.salarytakehome.co.uk/maternity-sick-pay",
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
    title: "Maternity Pay Calculator - UK Statutory Maternity Pay Calculator",
    description: "Calculate UK statutory maternity pay (SMP) and see your entitlement for 2024/25.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.salarytakehome.co.uk/maternity-sick-pay",
  },
};

export default function Layout({ children }) {
  return children;
}
