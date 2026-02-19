import { Mail, Linkedin, Github } from 'lucide-react';
import { siteData } from '../data/siteData';

function Footer() {
  const { copyright } = siteData.footer;
  const { email, linkedin, github } = siteData.contact;
  const links = [
    { label: 'Email', href: `mailto:${email}`, icon: Mail },
    ...(linkedin ? [{ label: 'LinkedIn', href: linkedin, icon: Linkedin }] : []),
    ...(github ? [{ label: 'GitHub', href: github, icon: Github }] : []),
  ];

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/50 py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-500 font-medium">
          {copyright}
        </p>
        {links.length > 0 && (
          <div className="flex gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent-light transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
