'use client';

import Link from 'next/link';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl notranslate" translate='no'>
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          <span className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-sm font-bold text-white">L</span>
            <span>LangChange</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>


      </div>

      {/* Hidden Google Translate container. The widget runs via the script and is visually hidden, while our custom dropdown controls it. */}
      {/* <div id="google_translate_element" className="hidden" /> */}
    </header>
  );
}
