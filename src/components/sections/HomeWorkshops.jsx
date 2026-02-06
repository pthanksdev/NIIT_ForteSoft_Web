import { Video, Users, Globe, Calendar } from 'lucide-react';
import { Section } from '../ui';

const HomeWorkshops = () => {
  const workshops = [
    { title: 'DeFi Security Audit', date: 'Aug 15', type: 'Virtual', icon: Video },
    { title: 'Neural Networks Lab', date: 'Aug 22', type: 'Campus', icon: Users },
    { title: 'AWS Cloud Architecture', date: 'Sep 05', type: 'Hybrid', icon: Globe }
  ];

  return (
    <Section 
      title="Latest Research & Workshops" 
      subtitle="Stay ahead of the curve with our weekly technical sessions and research presentations."
      className="bg-secondary-bg"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {workshops.map((ws, i) => (
          <div key={i} className="glass p-6 flex items-center gap-5 hover-glow group cursor-pointer">
            <div className="bg-accent/10 p-3 rounded-lg text-accent">
              <ws.icon size={24} />
            </div>
            <div>
              <h4 className="font-bold group-hover:text-accent transition-colors">{ws.title}</h4>
              <div className="flex items-center gap-3 mt-1 text-xs text-text-secondary">
                <span className="flex items-center gap-1"><Calendar size={12} /> {ws.date}</span>
                <span className="px-2 py-0.5 rounded-md bg-white/5">{ws.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HomeWorkshops;
