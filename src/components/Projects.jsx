import Section from './Section';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { FolderGit2 } from 'lucide-react';

function Projects() {
  return (
    <Section id="projects" title="Projects" icon={FolderGit2}>
      <div className="space-y-6">
        {siteData.projects.map((project, i) => (
          <ScrollReveal key={i} staggerIndex={i % 6}>
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
