const HomePartners = () => {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="container-custom">
        <p className="text-center text-text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-12 opacity-50">
          Strategic Industry Partners
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {['Microsoft', 'Amazon', 'Cisco', 'Google', 'IBM', 'Oracle'].map((p) => (
            <span key={p} className="text-2xl font-black italic tracking-tighter">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePartners;
