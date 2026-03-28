"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import LayoutWrapper from '../components/LayoutWrapper';
import AdUnit from '../components/AdUnit';
import { blogPosts as posts, blogCategories as categories } from './posts';

// Map description -> excerpt for display compatibility
const blogPosts = posts.map(p => ({ ...p, excerpt: p.description }));

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  const featuredPosts = useMemo(() => {
    return filteredPosts.filter(post => post.featured);
  }, [filteredPosts]);

  return (
    <LayoutWrapper narrow breadcrumbs={[{ name: "Home", href: "/" }, { name: "Blog" }]}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/take-home-pay-calculator" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors">
            ← Back to Calculator
          </Link>
          <AdUnit slot="1586479879" hideOnMobile />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            UK Tax Blog & Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, latest updates, and practical tips to help you understand UK tax and maximize your take-home pay
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-200 font-medium ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-lg'
                  : 'bg-white/60 border-white/20 hover:bg-white/80 text-gray-700 hover:text-blue-600'
              }`}
              aria-label={`Filter by ${category}`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="glass-medium rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span className="text-blue-600 group-hover:text-blue-800 font-medium">
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          ) : (
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="glass-light rounded-xl p-6 h-full hover:shadow-lg transition-all duration-200 hover:bg-white/80">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <time className="text-xs text-gray-500" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-GB', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                </article>
              </Link>
            ))}
          </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 glass-medium rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Calculate Your Tax?
          </h2>
          <p className="text-gray-600 mb-6">
            Put your knowledge into practice with our free UK tax calculator
          </p>
          <Link 
            href="/take-home-pay-calculator"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start Calculating →
          </Link>
        </div>
        </div>
      </div>
    </LayoutWrapper>
  );
} 