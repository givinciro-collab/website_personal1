import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { User } from 'lucide-react';

function About() {
  return (
    <Section id="about" title="About" icon={User}>
      <ScrollReveal>
        <div className="rounded-2xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-card p-6 md:p-8 space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
          {siteData.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}

export default About;
