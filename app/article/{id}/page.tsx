'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';
import { HERO_ARTICLE, SECONDARY_HERO } from '@/lib/data';

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  
  // Find article by ID or fallback to Hero
  const allArticles = [HERO_ARTICLE, ...SECONDARY_HERO];
  const article = allArticles.find(a => a.id === resolvedParams.id) || HERO_ARTICLE;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition font-semibold text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span className="text-xl font-black text-white">
            AFRISPORT<span className="text-[#FFD700]">HUB</span>
          </span>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        <span className="bg-[#DC143C] text-white text-xs font-black uppercase px-3 py-1 rounded tracking-wider">
          {article.category}
        </span>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-between border-y border-slate-800 py-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-200">By {article.author}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {article.timestamp}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="hover:text-[#FFD700] transition"><Share2 size={16} /></button>
            <button className="hover:text-[#FFD700] transition"><Bookmark size={16} /></button>
          </div>
        </div>

        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl border border-slate-800"
        />

        <article className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed pt-4">
          <p className="font-semibold text-white text-xl">
            Match preparation reached a new level today as key tactical adjustments were revealed ahead of the high-stakes clash.
          </p>
          <p>
            Supporters across the country have been anticipating this fixture for weeks. Tactical analysts highlight the midfield battle as the decisive arena where control of the game will be won or lost.
          </p>
          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic text-slate-200 bg-slate-900/50 py-2 rounded-r">
            "We are approaching this match with maximum concentration and respect for the opposition, but our objective remains securing all three points."
          </blockquote>
          <p>
            With official team lineups scheduled to be released one hour prior to kickoff, excitement continues to build among local and international fans following the league.
          </p>
        </article>
      </main>
    </div>
  );
}