function SkillGroup({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-display font-semibold text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wide">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 text-sm font-medium border border-slate-200/80 dark:border-slate-600/80 hover:bg-accent/10 dark:hover:bg-accent/20 hover:border-accent/30 dark:hover:border-accent/40 hover:text-accent-dark dark:hover:text-accent-light transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillGroup;
