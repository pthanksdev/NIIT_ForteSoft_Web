// Lucide components are passed as props, no need to import the type in JS

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon: Icon, 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95';
  
  const variants = {
    primary: 'bg-linear-to-br from-accent to-accent-secondary text-white hover:shadow-[0_8px_20px_rgba(0,210,255,0.3)] hover:-translate-y-0.5',
    secondary: 'bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 hover:border-accent',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', hover = true }) => (
  <div className={`glass p-6 ${hover ? 'hover-scale hover-glow' : ''} ${className}`}>
    {children}
  </div>
);

export const Badge = ({ children, variant = 'blue' }) => {
  const variants = {
    blue: 'bg-accent/20 text-accent border border-accent/30',
    gold: 'bg-gold/20 text-gold border border-gold/30',
    green: 'bg-green-500/20 text-green-400 border border-green-500/30'
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${variants[variant]}`}>
      {children}
    </span>
  );
};

export const Section = ({ children, title, subtitle, className = '', container = true }) => (
  <section className={`py-20 ${className}`}>
    <div className={container ? 'container-custom' : ''}>
      {(title || subtitle) && (
        <div className="text-center mb-16 animate-fade-in">
          {title && <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>}
          {subtitle && <p className="text-text-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);
