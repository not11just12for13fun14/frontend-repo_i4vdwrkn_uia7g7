import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section
      aria-label="Sorotan: top-up & produk digital"
      className="relative overflow-hidden border-b border-slate-200/60 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:py-16 md:grid-cols-2 sm:px-6">
        <div className="relative z-10">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-slate-50">
            Top-up & Produk Digital yang Cepat, Aman, dan Transparan
          </h1>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
            Belanjamu X Lanzz menghadirkan pengalaman modern dengan pembayaran QRIS, sistem otomatis, dan harga kompetitif. Desain minimal fokus pada kemudahan dan aksesibilitas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-xl bg-[color:var(--accent,#0ea5e9)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--accent,#0ea5e9)] focus:ring-offset-white dark:focus:ring-offset-slate-900"
            >
              Jelajahi Katalog
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Cara Kerja
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(148,163,184,0.25),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(30,41,59,0.45),transparent_45%)]" />
        </div>
      </div>
    </section>
  );
}
