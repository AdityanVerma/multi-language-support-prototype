import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Language Change Prototype',
  description: 'A modern multilingual landing page prototype using Next.js and Google Translate browser widget.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
