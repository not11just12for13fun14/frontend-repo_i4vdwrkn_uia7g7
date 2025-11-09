import React, { useEffect, useMemo, useState } from 'react';
import { Search, ShoppingCart, User, Sun, Moon } from 'lucide-react';

function useTheme() {
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') === 'dark' ||
        (localStorage.getItem('theme') === null && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      : false
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return { dark, setDark };
}

function AuthModal({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-title"
      className="fixed inset-0 z-50 grid place-items-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-sm rounded-2xl border border-slate-200/70 bg-white shadow-xl ring-1 ring-black/5 transition dark:border-slate-800/60 dark:bg-slate-900">
        <div className="p-6">
          <h2 id="auth-title" className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Masuk / Daftar
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Gunakan email untuk lanjut.</p>
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
            }}
          >
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                aria-label="Email"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">Kata sandi</span>
              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                aria-label="Kata sandi"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-[color:var(--accent,#0ea5e9)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--accent,#0ea5e9)] focus:ring-offset-white dark:focus:ring-offset-slate-900"
            >
              Lanjutkan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ onSearch }) {
  const { dark, setDark } = useTheme();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-slate-800/60 dark:bg-slate-950/60">
        <nav className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2" aria-label="Beranda Belanjamu X Lanzz">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-100 shadow-inner dark:from-slate-700 dark:to-slate-800" />
            <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">Belanjamu X Lanzz</span>
          </a>

          <form onSubmit={handleSubmit} role="search" className="ml-auto hidden min-w-[320px] flex-1 items-center sm:flex">
            <label className="relative flex w-full items-center">
              <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" aria-hidden="true" />
              <input
                className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                placeholder="Cari produk, game, pulsa..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Cari produk"
              />
            </label>
          </form>

          <div className="ml-auto flex items-center gap-2 sm:ml-3">
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              onClick={() => setOpen(true)}
              aria-label="Masuk"
            >
              <User className="h-4 w-4" /> <span className="hidden sm:inline">Masuk</span>
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              aria-label="Keranjang"
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <form onSubmit={handleSubmit} role="search" className="px-4 pb-3 sm:hidden">
          <label className="relative flex w-full items-center">
            <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" aria-hidden="true" />
            <input
              className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-[color:var(--accent,#0ea5e9)] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              placeholder="Cari produk..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Cari produk"
            />
          </label>
        </form>
      </header>

      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
