import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200/60 bg-white py-8 dark:border-slate-800/60 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Belanjamu X Lanzz</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Storefront top-up & produk digital. Modern, minimal, mobile-first.</p>
          </div>
          <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Kebijakan</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Syarat</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200">Bantuan</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} Belanjamu X Lanzz. All rights reserved.</p>
      </div>
    </footer>
  );
}
