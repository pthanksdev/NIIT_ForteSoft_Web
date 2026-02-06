import { Section } from '../ui';

const AdvisoryBoard = () => {
  return (
    <Section title="Global Advisory Board" subtitle="Aligning our curriculum with the shifting requirements of the global tech economy.">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['MIT Research', 'Stanford AI', 'Cisco Systems', 'AWS Global', 'IEEE Security', 'ACM Digital', 'Oracle Labs', 'NVIDIA Research'].map((board, i) => (
          <div key={i} className="glass py-6 text-center text-sm font-bold tracking-[0.2em] text-text-secondary hover:text-accent hover:border-accent transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            {board.toUpperCase()}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AdvisoryBoard;
