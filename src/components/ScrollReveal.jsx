import { useScrollReveal } from '../hooks/useScrollReveal';

function ScrollReveal({ children, className = '', staggerIndex }) {
  const [ref, visible] = useScrollReveal();
  const staggerClass = staggerIndex != null ? `stagger-${Math.min(staggerIndex + 1, 6)}` : '';

  return (
    <div
      ref={ref}
      className={`animate-reveal ${visible ? 'visible' : ''} ${staggerClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
