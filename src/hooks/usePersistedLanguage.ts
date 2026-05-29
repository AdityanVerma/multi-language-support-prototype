import { useState, useEffect } from 'react';
import { LanguageCode } from '@/constants/languages';

export function usePersistedLanguage(defaultLang: LanguageCode = 'en') {
  const [activeLang, setActiveLang] = useState<LanguageCode>(defaultLang);
  const [pendingApply, setPendingApply] = useState<LanguageCode | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('preferred-language') as LanguageCode;
    if (saved && saved !== 'en') {
      setActiveLang(saved);
      setPendingApply(saved); // signal to component to re-apply on ready
    }
  }, []);

  const setLang = (lang: LanguageCode) => {
    setActiveLang(lang);
    localStorage.setItem('preferred-language', lang);
  };

  return { activeLang, setLang, pendingApply };
}
