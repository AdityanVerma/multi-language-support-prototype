import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Navbar from '@/components/layout/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <section id="features" className="container mx-auto px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-5xl space-y-8 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">Built for real localization demos</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need for a clean multilingual landing page.
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600">
              This prototype uses a lightweight Google Translate browser widget with a custom selector. It is built to be responsive, production-ready, and easy to extend.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">Smooth global experience</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Translate the UI instantly with a minimal language selector and no API keys required.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">Responsive layout</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Designed for desktop and mobile screens, with strong typography and stable spacing after translation.
              </p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-slate-900">Modern styling</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                A polished UI built with Tailwind CSS and Next.js App Router for a fast prototype experience.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
