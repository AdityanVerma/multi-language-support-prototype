export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">LangChange</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              A lightweight localization prototype that demonstrates integration with the Google Translate browser widget and custom UI.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#pricing" className="transition hover:text-slate-900">Pricing</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© 2026 LangChange. Built with Next.js v16.2.3.</p>
        </div>
      </div>
    </footer>
  );
}
