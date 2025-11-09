import React from 'react';
import { Star } from 'lucide-react';

const mockProducts = [
  { id: 'p1', name: 'Mobile Legends Diamonds', price: 15000, rating: 4.8 },
  { id: 'p2', name: 'PUBG UC', price: 22000, rating: 4.7 },
  { id: 'p3', name: 'Genshin Genesis Crystals', price: 30000, rating: 4.9 },
  { id: 'p4', name: 'Pulsa Telkomsel 25K', price: 26000, rating: 4.6 },
  { id: 'p5', name: 'Voucher Spotify', price: 49000, rating: 4.5 },
  { id: 'p6', name: 'Voucher Google Play', price: 50000, rating: 4.6 },
];

export default function ProductGrid() {
  return (
    <section id="catalog" aria-label="Katalog produk" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Populer minggu ini</h2>
        <div className="flex flex-wrap gap-2">
          {['Semua', 'Game', 'Pulsa', 'Voucher'].map((c) => (
            <button
              key={c}
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {mockProducts.map((p) => (
          <a
            key={p.id}
            href={`#/product/${p.id}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 transition-all group-hover:scale-[1.02] dark:from-slate-800 dark:to-slate-900" />
            <div className="mt-3 space-y-1">
              <h3 className="line-clamp-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{p.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Rp{p.price.toLocaleString('id-ID')}</span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" aria-hidden="true" />
                  {p.rating}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">Tampilkan 2–3 mock varian di home & product untuk perbandingan.</p>
    </section>
  );
}
