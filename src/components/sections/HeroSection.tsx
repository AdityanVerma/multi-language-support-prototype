export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
              Multilingual Prototype
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Launch a modern localization demo with built-in translation support.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              A clean landing page with responsive design, a minimal language switcher, and Google Translate browser widget integration to move your locale demo forward.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                View features
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
              >
                Start prototype
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-soft">
            <div className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">Live translation</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Translate content dynamically</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The prototype uses the official Google Translate browser widget and a hidden integration container so the page stays clean.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 text-sm shadow-sm">
                  <p className="font-semibold text-slate-900">Works on desktop</p>
                  <p className="mt-2 text-slate-600">No layout breakage after translation.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 text-sm shadow-sm">
                  <p className="font-semibold text-slate-900">Minimal dropdown</p>
                  <p className="mt-2 text-slate-600">A clean language selector for six target locales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
