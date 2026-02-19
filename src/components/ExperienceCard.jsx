function ExperienceCard({ company, role, location, dates, bullets }) {
  return (
    <article className="rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/50 p-6 md:p-7 shadow-card hover:shadow-card-hover dark:hover:shadow-card-hover-dark hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="font-display font-semibold text-slate-900 dark:text-slate-100 text-lg">
            {company}
          </h3>
          <p className="text-accent dark:text-accent-light font-medium">{role}</p>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
          <span>{dates}</span>
          <span className="block">{location}</span>
        </div>
      </div>
      <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300 text-sm">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
