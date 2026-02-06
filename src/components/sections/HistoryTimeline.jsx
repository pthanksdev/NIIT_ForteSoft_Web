import { Card } from '../ui';

const HistoryTimeline = () => {
  const milestones = [
    { year: '2010', title: 'The Foundation', desc: 'Established by high-profile CS academics with a global vision.' },
    { year: '2015', title: 'Global Accel', desc: 'Received ISO certifications for security training standards.' },
    { year: '2019', title: 'AI Frontier', desc: 'Launched the regions first neuro-computational research lab.' },
    { year: '2024', title: 'Scale Era', desc: 'Transitioned to hybrid global learning models and cloud research.' }
  ];

  return (
    <div className="max-w-4xl mx-auto border-l-4 border-accent relative space-y-12 py-10 px-8 md:px-20 ml-6 md:ml-auto">
      <h2 className="text-4xl font-black text-center mb-20">The Evolution</h2>
      {milestones.map((m, i) => (
        <div key={i} className="relative transition-all hover:translate-x-2">
          <div className="absolute -left-[54px] md:-left-[102px] top-6 w-10 h-10 rounded-full bg-primary-bg border-4 border-accent flex items-center justify-center text-[10px] font-bold text-accent z-10 shadow-[0_0_15px_rgba(0,210,255,0.4)]">
            {m.year.slice(2)}
          </div>
          <Card className="p-8 bg-white/3 border-white/5" hover={false}>
            <h3 className="text-xl font-bold text-accent mb-2 uppercase tracking-wide">{m.year} • {m.title}</h3>
            <p className="text-text-secondary leading-relaxed">{m.desc}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HistoryTimeline;
