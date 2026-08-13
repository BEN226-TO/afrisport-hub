'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sun, Moon, Globe, Clock, PlayCircle, Mail, Menu, X } from 'lucide-react';
import { HERO_ARTICLE, SECONDARY_HERO, GPL_STANDINGS, LIVE_MATCHES } from '@/lib/data';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scoreFilter, setScoreFilter] = useState<'ALL' | 'GPL' | 'EPL' | 'La Liga'>('ALL');

  const filteredMatches = scoreFilter === 'ALL' 
    ? LIVE_MATCHES 
    : LIVE_MATCHES.filter(m => m.league === scoreFilter);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} font-sans antialiased`}>
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 text-white">
        {/* Ticker Banner */}
        <div className="bg-gradient-to-r from-[#DC143C] to-red-800 text-white text-xs font-semibold py-1.5 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-[#FFD700] text-black font-extrabold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
              BREAKING
            </span>
            <p className="truncate text-slate-100">
              Black Stars name final squad for AFCON Qualifiers • GPL Week 13 Match Officials Confirmed • Kudus scores 10th league goal
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-200 shrink-0">
            <span className="flex items-center gap-1"><Globe size={12} /> GMT Standard</span>
            <span>Accra, GH</span>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tight text-white">
                AFRISPORT<span className="text-[#FFD700]">HUB</span>
              </span>
              <span className="bg-[#DC143C] text-[10px] font-bold px-1.5 py-0.5 rounded text-white uppercase tracking-widest">
                GH
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-6 font-semibold text-sm text-slate-300">
              <a href="#" className="text-[#FFD700] hover:text-yellow-400 transition">Home</a>
              <a href="#" className="hover:text-white transition">Ghana Football</a>
              <a href="#" className="hover:text-[#FFD700] transition flex items-center gap-1">
                Players Abroad <span className="h-2 w-2 rounded-full bg-[#DC143C]"></span>
              </a>
              <a href="#" className="hover:text-white transition">Global Football</a>
              <a href="#" className="hover:text-white transition">Boxing & More</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition"
              >
                {darkMode ? <Sun size={18} className="text-[#FFD700]" /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-800 text-slate-300"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Option 2: Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-3 space-y-2 font-semibold text-sm text-slate-200">
            <a href="#" className="block py-1 text-[#FFD700]">Home</a>
            <a href="#" className="block py-1 hover:text-white transition">Ghana Football</a>
            <a href="#" className="block py-1 hover:text-white transition">Players Abroad</a>
            <a href="#" className="block py-1 hover:text-white transition">Global Football</a>
            <a href="#" className="block py-1 hover:text-white transition">Boxing & More</a>
          </div>
        )}
      </header>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Leaderboard Ad */}
        <div className="w-full my-4 flex flex-col items-center justify-center">
          <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-widest mb-1">Advertisement</span>
          <div className="w-full max-w-[728px] h-[75px] bg-slate-900 border border-dashed border-slate-800 rounded flex items-center justify-center text-slate-500 font-mono text-xs">
            Sponsor Banner Zone (728x90)
          </div>
        </div>

        {/* Hero Grid with Clickable Article Links */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6">
          <Link 
            href={`/article/${HERO_ARTICLE.id}`} 
            className="lg:col-span-8 group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col justify-end min-h-[380px] lg:min-h-[480px]"
          >
            <img
              src={HERO_ARTICLE.imageUrl}
              alt={HERO_ARTICLE.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500 brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            <div className="relative p-6 space-y-3">
              <span className="bg-[#DC143C] text-white text-xs font-black uppercase px-3 py-1 rounded tracking-wider">
                {HERO_ARTICLE.category}
              </span>
              <h1 className="text-2xl sm:text-4xl font-black leading-tight text-white group-hover:text-[#FFD700] transition">
                {HERO_ARTICLE.title}
              </h1>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-300 pt-1">
                <span>By {HERO_ARTICLE.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {HERO_ARTICLE.timestamp}</span>
              </div>
            </div>
          </Link>

          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            {SECONDARY_HERO.map((article) => (
              <Link 
                key={article.id} 
                href={`/article/${article.id}`} 
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-4 hover:border-slate-700 transition cursor-pointer"
              >
                <img src={article.imageUrl} alt={article.title} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                <div className="flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-[#FFD700] uppercase">{article.category}</span>
                  <h3 className="text-xs font-bold text-white leading-snug line-clamp-2">{article.title}</h3>
                  <span className="text-[10px] text-slate-400">{article.timestamp}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Live Scores & Standings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-black text-white uppercase tracking-wide flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#DC143C] animate-ping"></span> Live Match Center
              </h2>
              <div className="flex gap-1 text-xs">
                {(['ALL', 'GPL', 'EPL', 'La Liga'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setScoreFilter(tab)}
                    className={`px-2.5 py-1 rounded transition ${scoreFilter === tab ? 'bg-[#FFD700] text-black font-bold' : 'bg-slate-800 text-slate-400'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredMatches.map(match => (
                <div key={match.id} className="bg-slate-800/60 border border-slate-700/50 rounded-lg p-3 flex flex-col justify-between">
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2">
                    <span>{match.league}</span>
                    <span className={match.status === 'LIVE' ? 'text-[#DC143C] font-extrabold' : ''}>{match.status} {match.minute}</span>
                  </div>
                  <div className="space-y-1 text-xs font-semibold text-white">
                    <div className="flex justify-between"><span>{match.homeTeam}</span><span className="text-[#FFD700]">{match.homeScore}</span></div>
                    <div className="flex justify-between"><span>{match.awayTeam}</span><span className="text-[#FFD700]">{match.awayScore}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h2 className="text-base font-black text-white uppercase tracking-wide mb-3">GPL Standings</h2>
            <table className="w-full text-xs text-left text-slate-300">
              <thead className="text-[10px] uppercase bg-slate-800 text-slate-400">
                <tr>
                  <th className="p-1.5">#</th>
                  <th className="p-1.5">Team</th>
                  <th className="p-1.5 text-center">MP</th>
                  <th className="p-1.5 text-right">Pts</th>
                </tr>
              </thead>
              <tbody>
                {GPL_STANDINGS.map((row) => (
                  <tr key={row.team} className="border-b border-slate-800/80">
                    <td className="p-1.5 font-bold text-slate-400">{row.pos}</td>
                    <td className="p-1.5 font-semibold text-white">{row.team}</td>
                    <td className="p-1.5 text-center text-slate-400">{row.mp}</td>
                    <td className="p-1.5 text-right font-bold text-[#FFD700]">{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}