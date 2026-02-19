import { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { siteData } from '../data/siteData';

function Navbar() {
  const [open, setOpen] = useState(false);
  const { nav } = siteData;

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-700/80 shadow-sm">
      <nav className="max-w-4xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg font-display font-bold text-slate-800 dark:text-slate-100 hover:text-accent dark:hover:text-accent-light transition-colors"
          onClick={handleLinkClick}
        >
          {siteData.hero.name.split(' ')[0]}
        </a>

        <button
          type="button"
          className="md:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-accent dark:hover:text-accent-light transition-all"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div
          className={`absolute top-full left-0 right-0 md:static bg-white dark:bg-slate-900 md:bg-transparent border-b md:border-0 border-slate-200 dark:border-slate-700 md:flex items-center gap-1 shadow-lg md:shadow-none ${open ? 'flex flex-col py-4 px-4' : 'hidden'}`}
        >
          {nav.links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-4 py-3 md:py-2 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download="Giovanna_Vinci_Roberto_CV.pdf"
            className="mt-2 md:mt-0 md:ml-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-light dark:from-accent-dark dark:to-accent text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </a>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
