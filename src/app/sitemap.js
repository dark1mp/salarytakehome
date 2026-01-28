export default function sitemap() {
  const baseUrl = 'https://www.salarytakehome.co.uk'

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date('2026-01-26'), // Landing page creation date
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-01-25'), // Most recent blog post date
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Calculator pages
  const calculatorPages = [
    {
      url: `${baseUrl}/take-home-pay-calculator`, // NEW ENTRY
      lastModified: new Date('2026-01-26'),
      changeFrequency: 'monthly',
      priority: 1.0, // Highest priority calculator
    },
    {
      url: `${baseUrl}/pay-rise`,
      lastModified: new Date('2026-01-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hourly-wage`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compare-salaries`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/two-jobs`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/mortgages`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/debts`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/maternity-sick-pay`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sick-pay`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pro-rata-furlough`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/sitemap-page`,
      lastModified: new Date('2026-01-27'),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  // Blog posts with their specific URLs and actual publication dates
  const blogPosts = [
    // Salary guide posts
    {
      url: `${baseUrl}/blog/30k-salary-take-home`,
      lastModified: new Date('2026-01-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/40k-salary-take-home`,
      lastModified: new Date('2026-01-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/50k-salary-take-home`,
      lastModified: new Date('2026-01-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/60k-salary-take-home`,
      lastModified: new Date('2026-01-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Other posts
    {
      url: `${baseUrl}/blog/student-loan-refund`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/cash-isa-limit-2027`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/100k-tax-trap`,
      lastModified: new Date('2026-01-25'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Existing posts with corrected dates
    {
      url: `${baseUrl}/blog/salary-sacrifice-changes-2029`,
      lastModified: new Date('2025-11-26'), // Actual publication date
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/uk-tax-changes-2025-26`,
      lastModified: new Date('2025-04-06'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/uk-tax-changes-2024-25`,
      lastModified: new Date('2024-04-06'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/maximize-take-home-pay-2024`,
      lastModified: new Date('2024-03-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/student-loan-repayment-guide`,
      lastModified: new Date('2024-03-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/salary-sacrifice-complete-guide`,
      lastModified: new Date('2024-02-20'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/self-employed-tax-calculator-guide`,
      lastModified: new Date('2024-02-05'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/pension-contributions-tax-relief`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  return [...mainPages, ...calculatorPages, ...blogPosts]
}
