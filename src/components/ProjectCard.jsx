function ProjectCard({ title, bullets, tags }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/50 p-6 md:p-7 shadow-card hover:shadow-card-hover dark:hover:shadow-card-hover-dark hover:-translate-y-0.5 transition-all duration-300">
      <h3 className="font-display font-semibold text-slate-900 dark:text-slate-100 text-lg">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300 text-sm">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
      {tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 dark:bg-accent/20 text-accent-dark dark:text-accent-light border border-accent/20 dark:border-accent/30 hover:bg-accent/15 dark:hover:bg-accent/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
