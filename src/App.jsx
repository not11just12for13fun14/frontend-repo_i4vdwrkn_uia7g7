import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function StyleVariables() {
  // Auto-pick a generic accent at runtime without locking palette.
  const accents = ['#0ea5e9', '#22c55e', '#6366f1', '#f43f5e'];
  const brand = 'currentColor';
  const [accent] = useState(() => accents[Math.floor(Math.random() * accents.length)]);

  return (
    <style>{`:root{--brand:${brand};--accent:${accent}}.dark :root{--brand:${brand};--accent:${accent}}`}</style>
  );
}

export default function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
      <StyleVariables />
      <a href="#catalog" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[color:var(--accent,#0ea5e9)] focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <Navbar onSearch={setQuery} />
      <main>
        <Hero />
        <ProductGrid query={query} />
        {/* Mock variants showcase */}
        <section id="variants" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h2 className="mb-4 text-lg font-semibold">Varian gaya</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <VariantCard title="Minimal Clean">
              <div className="h-40 rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900" />
            </VariantCard>
            <VariantCard title="Soft Glass / Frosted">
              <div className="h-40 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md outline outline-1 outline-slate-200/40 dark:bg-slate-800/30 dark:outline-slate-700/60" />
            </VariantCard>
            <VariantCard title="Neo-Card">
              <div className="h-40 rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.25)] dark:border-slate-800 dark:bg-slate-900" />
            </VariantCard>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function VariantCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">{title}</h3>
        <span className="text-xs text-slate-500">mock</span>
      </div>
      {children}
    </div>
  );
}
