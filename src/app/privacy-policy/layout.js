export const metadata = {
  title: "Privacy Policy - UK Tax Calculator | SalaryTakeHome.co.uk",
  description: "Learn how we protect your data and privacy at SalaryTakeHome.co.uk. Our free UK tax calculator processes everything locally in your browser.",
  keywords: "privacy policy, data protection, GDPR, UK tax calculator privacy",
  openGraph: {
    title: "Privacy Policy - SalaryTakeHome.co.uk",
    description: "Learn how we protect your data and privacy at SalaryTakeHome.co.uk.",
    url: "https://salarytakehome.co.uk/privacy-policy",
    siteName: "SalaryTakeHome",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
    }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - SalaryTakeHome.co.uk",
    description: "Learn how we protect your data and privacy at SalaryTakeHome.co.uk.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://salarytakehome.co.uk/privacy-policy",
  },
};

export default function Layout({ children }) {
  return children;
}
