import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md transition-all duration-200"
          >
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{article.category}</span>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mt-1 mb-1">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500">{article.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
