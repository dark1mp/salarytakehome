import Link from "next/link";

const BASE_URL = "https://www.salarytakehome.co.uk";

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => {
      const entry = {
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
      };
      if (item.href) {
        entry.item = `${BASE_URL}${item.href}`;
      }
      return entry;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Breadcrumb" className="max-w-[1400px] mx-auto px-8 pt-4 pb-0">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              )}
              {item.href ? (
                <Link href={item.href} className="text-blue-600 hover:text-blue-800 transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-500 truncate max-w-[250px] sm:max-w-none">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
