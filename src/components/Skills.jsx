import Section from './Section';
import SkillGroup from './SkillGroup';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { Sparkles } from 'lucide-react';

function Skills() {
  const groups = siteData.skills;

  return (
    <Section id="skills" title="Skills" icon={Sparkles}>
      <ScrollReveal>
        <div className="rounded-2xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-card p-6 md:p-8 space-y-6">
          {Object.entries(groups).map(([title, items]) => (
            <SkillGroup key={title} title={title} items={items} />
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}

export default Skills;
