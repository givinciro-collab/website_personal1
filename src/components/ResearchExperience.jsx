import { useState } from 'react';
import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import ProjectCard from './ProjectCard';
import { FlaskConical, FolderGit2, X } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState(null);

  const researchImages = Array.from(
    { length: 12 },
    (_, i) => `/research/${i + 1}.jpg`
  );

  return (
    <Section id="research" title="Research Experience" icon={FlaskConical}>
      <div className="space-y-6">
        {siteData.researchExperience.map((item, i) => (
          <ScrollReveal key={i} staggerIndex={i % 6}>
            <ResearchCard {...item} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal staggerIndex={6}>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible">
          {researchImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Research ${index + 1}`}
              className="h-24 w-24 md:h-24 md:w-full object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity shadow-sm border border-slate-200 dark:border-slate-700"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </ScrollReveal>

      {/* Projects Subsection */}
      <div className="mt-16 space-y-8">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
          Projects
        </h3>
        <div className="space-y-6">
          {siteData.projects.map((project, i) => (
            <ScrollReveal key={i} staggerIndex={i % 6}>
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </Section >
  );
}

export default ResearchExperience;
