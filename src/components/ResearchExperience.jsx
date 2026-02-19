import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { FlaskConical } from 'lucide-react';

function ResearchCard({ title, role, location, dates, bullets }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/50 p-6 md:p-7 shadow-card hover:shadow-card-hover dark:hover:shadow-card-hover-dark hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="font-display font-semibold text-slate-900 dark:text-slate-100 text-lg">
            {title}
          </h3>
          <p className="text-accent dark:text-accent-light font-medium">{role}</p>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
          <span>{dates}</span>
          <span className="block">{location}</span>
        </div>
      </div>
      {bullets?.length > 0 && (
        <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300 text-sm">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function ResearchExperience() {
  return (
    <Section id="research" title="Research Experience" icon={FlaskConical}>
      <div className="space-y-6">
        {siteData.researchExperience.map((item, i) => (
          <ScrollReveal key={i} staggerIndex={i % 6}>
            <ResearchCard {...item} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

export default ResearchExperience;
