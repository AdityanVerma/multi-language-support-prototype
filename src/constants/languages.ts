export const LANGUAGE_OPTIONS = [
  { code: 'en', label: '🇺🇸 English' },
  { code: 'id', label: '🇮🇩 Bahasa Indonesia' },
  { code: 'ms', label: '🇲🇾 Bahasa Melayu' },
  { code: 'tl', label: '🇵🇭 Filipino' },
] as const;

export type LanguageCode = (typeof LANGUAGE_OPTIONS)[number]['code'];
