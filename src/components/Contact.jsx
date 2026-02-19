import Section from './Section';
import ScrollReveal from './ScrollReveal';
import { siteData } from '../data/siteData';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

function Contact() {
  const { email, linkedin, github } = siteData.contact;

  return (
    <Section id="contact" title="Contact" icon={MessageCircle}>
      <ScrollReveal>
        <div className="rounded-2xl bg-white/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 shadow-card p-6 md:p-8">
          <div className="flex flex-wrap gap-6">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light font-medium underline-offset-4 hover:underline transition-colors"
            >
              <Mail className="w-5 h-5" />
              {email}
            </a>
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light font-medium underline-offset-4 hover:underline transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent-light font-medium underline-offset-4 hover:underline transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            )}
            {!linkedin && !github && (
              <span className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Add your LinkedIn and GitHub URLs in src/data/siteData.js
              </span>
            )}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

export default Contact;
