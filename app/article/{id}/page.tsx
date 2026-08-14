'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import * as DataSources from '@/lib/data';

// Define flexible Article interface
interface Article {
  id?: string;
  title?: string;
  category?: string;
  author?: string;
  timestamp?: string;
  imageUrl?: string;
  [key: string]: any;
}

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);

  // Safely collect all articles across exports
  const rawSources = Object.values(DataSources) as any[];
  const allArticles: Article[] = rawSources.flatMap(source => {
    if (Array.isArray(source)) return source;
    if (source && typeof source === 'object' && 'id' in source) return [source];
    return [];
  });

  // Find article by matching ID
  const article: Article = allArticles.find(a => a?.id === resolvedParams.id) || allArticles[0] || {};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="text-slate-400 hover:text-emerald-400 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="space-y-6">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase rounded-full">
              {article.category || 'Sports'}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {article.title || 'Article Content'}
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-400 border-b border-slate-800 pb-6">
              <span>By <strong className="text-slate-200">{article.author || 'AfriSport Staff'}</strong></span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.timestamp || 'Just now'}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {article.imageUrl && (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
              <img 
                src={article.imageUrl} 
                alt={article.title || 'Article Image'} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Body Content */}
          <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-lg leading-relaxed pt-4">
            <p className="font-semibold text-slate-100 text-xl">
              {article.title}
            </p>
            <p>
              Stay tuned to AfriSport Hub for real-time coverage, tactical breakdowns, and full highlights as details unfold.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}