'use client';

import { useState, useEffect } from 'react';
import { usePersistedLanguage } from '../../hooks/usePersistedLanguage';
import { useGoogleTranslate } from '../../hooks/useGoogleTranslate';
import { LANGUAGE_OPTIONS } from '../../constants/languages';
import { GlobeIcon } from '../ui/icons/GlobeIcon';


export default function LanguageSwitcher() {
  const { activeLang, setLang, pendingApply } = usePersistedLanguage();
  const { isReady, hasError, translate } = useGoogleTranslate();
  const [isTranslating, setIsTranslating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as typeof activeLang;
    setLang(lang);
    setIsTranslating(true);
    translate(lang);
    setTimeout(() => setIsTranslating(false), 400);
  };


  // Restore saved language once dropdown is actually ready
  useEffect(() => {
    if (isReady && pendingApply) {
      translate(pendingApply);
    }
  }, [isReady, pendingApply, translate]);

  if (hasError) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-500">
        <GlobeIcon className="h-4 w-4" />
        <span>Translation unavailable</span>
      </div>
    );
  }

  return (
    <>
      <div id="google_translate_element" style={{ position: 'absolute', left: '-9999px' }} />

      <div className="relative notranslate" translate='no'>
        <GlobeIcon
          className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 transition-opacity duration-200 ${isTranslating ? 'opacity-40' : 'opacity-100'
            }`}
        />

        {!isReady && (
          <span className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-500" />
        )}

        <select
          value={activeLang}
          onChange={handleChange}
          disabled={!isReady || isTranslating}
          aria-label="Select language"
          aria-busy={isTranslating}
          className="appearance-none rounded-full border border-slate-200 bg-white/90 py-2.5 pl-10 pr-10 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all duration-200 hover:border-indigo-300 hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {LANGUAGE_OPTIONS.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </>
  );
}
