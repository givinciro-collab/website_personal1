import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { GraduationCap } from 'lucide-react';

function Education() {
  const { education, certifications, awards } = siteData;

  return (
    <Section id="education" title="Education & Certifications" icon={GraduationCap}>
      <ScrollReveal>
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Education
            </h3>
            <ul className="space-y-4">
              {education.map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/50 p-6 md:p-7 shadow-card hover:shadow-card-hover dark:hover:shadow-card-hover-dark hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h4 className="font-display font-semibold text-slate-900 dark:text-slate-100 text-lg">
                        {item.institution}
                      </h4>
                      <p className="text-accent dark:text-accent-light font-medium">{item.degree}</p>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
                      <span>{item.dates}</span>
                      <span className="block">{item.location}</span>
                    </div>
                  </div>
                  {item.note && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 border-t border-slate-100 dark:border-slate-700/50 pt-3">
                      {item.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {certifications.length > 0 && (
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Certifications
              </h3>
              <ul className="space-y-2 rounded-2xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 p-6 md:p-7 shadow-card">
                {certifications.map((c, i) => (
                  <li key={i} className="text-slate-700 dark:text-slate-300">
                    {c.name} — {c.issuer} ({c.year})
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Awards & Scholarships
            </h3>
            <ul className="space-y-3">
              {awards.map((a, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/50 p-6 md:p-7 shadow-card hover:shadow-card-hover dark:hover:shadow-card-hover-dark transition-all duration-300"
                >
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {a.text}
                  </span>
                  <span className="text-slate-500 dark:text-slate-500 text-sm">
                    {' '}· {a.place} ({a.date})
                  </span>
                  {a.details && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 pl-0">
                      {a.details}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

export default Education;
