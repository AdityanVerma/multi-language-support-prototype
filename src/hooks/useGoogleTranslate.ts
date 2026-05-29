import { useEffect, useState, useRef } from 'react';
import { LANGUAGE_OPTIONS } from '@/constants/languages';

export function useGoogleTranslate() {
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (document.getElementById('google-translate-script')) {
      // Script already loaded — wait for dropdown to exist
      waitForDropdown(() => setIsReady(true));
      return;
    }

    window.googleTranslateElementInit = () => {
      const GT = window.google?.translate?.TranslateElement;
      if (!GT) {
        setHasError(true);
        return;
      }
      new GT(
        {
          pageLanguage: 'en',
          includedLanguages: LANGUAGE_OPTIONS.map((l) => l.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element',
      );
      // Don't setIsReady here — dropdown not in DOM yet
      waitForDropdown(() => setIsReady(true));
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = () => setHasError(true);
    document.body.appendChild(script);
  }, []);

  // --> Translate Func()
  // const translate = (lang: string) => { // BUGGED
  //   const select = document.querySelector(
  //     '.goog-te-combo',
  //   ) as HTMLSelectElement | null;
  //   if (!select) return;

  //   if (lang === 'en') {
  //     select.value = 'en';
  //     select.dispatchEvent(new Event('change', { bubbles: true }));
  //     return;
  //   }

  //   // Google Translate ignores same-value changes;
  //   // reset to 'en' first to force re-translate
  //   select.value = 'en';
  //   select.dispatchEvent(new Event('change', { bubbles: true }));

  //   setTimeout(() => {
  //     select.value = lang;
  //     select.dispatchEvent(new Event('change', { bubbles: true }));
  //   }, 200);
  // };

  // --> Translate Func()
  const currentLangRef = useRef('en');

  const translate = (lang: string) => {
    const select = document.querySelector(
      '.goog-te-combo',
    ) as HTMLSelectElement | null;

    if (!select) return;

    // Different language → translate directly
    if (lang !== currentLangRef.current) {
      select.value = lang;
      select.dispatchEvent(new Event('change', { bubbles: true }));

      currentLangRef.current = lang;
      return;
    }

    // Same language selected again → force re-trigger
    select.value = 'en';
    select.dispatchEvent(new Event('change', { bubbles: true }));

    setTimeout(() => {
      select.value = lang;
      select.dispatchEvent(new Event('change', { bubbles: true }));

      currentLangRef.current = lang;
    }, 200);
  };

  return { isReady, hasError, translate };
}

// Polls until .goog-te-combo exists, then calls callback
function waitForDropdown(callback: () => void, attempts = 0) {
  if (attempts > 20) return; // give up after ~2s
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    callback();
  } else {
    setTimeout(() => waitForDropdown(callback, attempts + 1), 100);
  }
}
