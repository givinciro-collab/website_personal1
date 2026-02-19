import { MapPin, Mail, Linkedin } from 'lucide-react';
import { siteData } from '../data/siteData';

function Hero() {
  const { name, headline, valueStatement, location, email, linkedin, profileImage } = siteData.hero;

  return (
    <section
      id="hero"
      className="min-h-[75vh] flex flex-col justify-center py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto"
    >
      <div className="rounded-2xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/80 dark:border-slate-700/80 shadow-card p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
        {profileImage && (
          <img
            src={profileImage}
            alt={name}
            className="w-40 h-56 md:w-48 md:h-64 rounded-2xl object-cover border-2 border-slate-200/80 dark:border-slate-600/80 shrink-0 mx-auto md:mx-0"
          />
        )}
        <div className="min-w-0 text-center md:text-left">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            {name}
          </h1>
          <p className="mt-3 font-display text-xl md:text-2xl font-semibold text-accent dark:text-accent-light">
            {headline}
          </p>
          <p className="mt-3 text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed mx-auto md:mx-0">
            {valueStatement}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-600 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent dark:text-accent-light shrink-0" />
              <span>{location}</span>
            </span>
          </div>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light font-medium underline-offset-4 hover:underline transition-colors"
            >
              <Mail className="w-4 h-4" />
              {email}
            </a>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light font-medium underline-offset-4 hover:underline transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
