export const metadata = {
  title: "Maternity & Sick Pay Calculator - UK Statutory Pay Calculator | SalaryTakeHome.co.uk",
  description: "Calculate UK statutory maternity pay (SMP), paternity pay, and sick pay (SSP). See your entitlement and weekly payment amounts for 2024/25.",
  keywords: "maternity pay calculator, statutory maternity pay, SMP calculator, sick pay calculator, SSP calculator UK",
  openGraph: {
    title: "Maternity & Sick Pay Calculator - UK Statutory Pay Calculator",
    description: "Calculate UK statutory maternity pay (SMP), paternity pay, and sick pay (SSP). See your entitlement for 2024/25.",
    url: "https://salarytakehome.co.uk/maternity-sick-pay",
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
    title: "Maternity & Sick Pay Calculator - UK Statutory Pay Calculator",
    description: "Calculate UK statutory maternity pay (SMP), paternity pay, and sick pay (SSP).",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/maternity-sick-pay",
  },
};

export default function Layout({ children }) {
  return children;
}
