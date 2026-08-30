import { socialLinks } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            Built with focus, consistency, and code by Abhishek Tomar.
          </p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Abhishek Tomar. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-google-blue dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-800 dark:hover:bg-blue-950/40"
              aria-label={label}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
