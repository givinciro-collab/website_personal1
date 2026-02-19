import Section from './Section';
import ExperienceCard from './ExperienceCard';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { BookOpen } from 'lucide-react';

function TeachingMentorship() {
    return (
        <Section id="teaching" title="Teaching & Mentorship" icon={BookOpen}>
            <div className="space-y-6">
                {siteData.teachingExperience.map((item, i) => (
                    <ScrollReveal key={i} staggerIndex={i % 6}>
                        <ExperienceCard {...item} />
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    );
}

export default TeachingMentorship;
