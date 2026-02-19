import { useState } from 'react';
import Section from './Section';
import ExperienceCard from './ExperienceCard';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { Briefcase, X } from 'lucide-react';

function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from({ length: 12 }, (_, i) => `/experience/${i + 1}.jpg`);
  return (
    <Section id="experience" title="Professional Experience" icon={Briefcase}>
      <div className="space-y-6">
        {siteData.experience.map((item, i) => (
          <ScrollReveal key={i} staggerIndex={i % 6}>
            <ExperienceCard {...item} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal staggerIndex={6}>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:overflow-visible">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Experience ${index + 1} `}
              className="h-24 w-24 md:h-24 md:w-full object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity shadow-sm border border-slate-200 dark:border-slate-700"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </ScrollReveal>

      {/* Lightbox Modal */}
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
    </Section>
  );
}

export default Experience;
