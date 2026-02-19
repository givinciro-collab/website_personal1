function Section({ id, title, children, className = '', icon: Icon }) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 px-4 md:px-6 max-w-4xl mx-auto ${className}`}
    >
      {title && (
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 mb-10 md:mb-12 flex items-center gap-3">
          {Icon && <Icon className="w-8 h-8 text-accent dark:text-accent-light shrink-0" />}
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export default Section;
