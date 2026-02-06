import { Microscope, BookOpen, GraduationCap, ExternalLink } from 'lucide-react';
import { Section } from '../ui';

const ResearchPortfolio = () => {
  const research = [
    { title: 'Neural Ethics in Autonomous Systems', leads: 'Dr. Sarah Chen', year: '2023', icon: Microscope },
    { title: 'Post-Quantum Cryptographic Frameworks', leads: 'Prof. James Wilson', year: '2024', icon: BookOpen },
    { title: 'Distributed Edge Computing for IoT', leads: 'Elena Rodriguez', year: '2022', icon: GraduationCap }
  ];

  return (
    <Section title="Research Portfolio" subtitle="Pioneering new technologies and frameworks through academic rigor and industry collaboration." className="bg-secondary-bg">
      <div className="flex flex-col gap-4 max-w-5xl mx-auto">
        {research.map((r, i) => (
          <div key={i} className="glass p-6 md:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-accent/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-bg transition-colors">
                <r.icon size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold group-hover:text-accent transition-colors">{r.title}</h4>
                <p className="text-text-secondary text-sm">Principal Investigator: <span className="text-text-primary font-medium">{r.leads}</span></p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-xl font-black text-text-secondary opacity-30">{r.year}</div>
              <button className="p-2 rounded-lg bg-white/5 text-text-secondary hover:text-white transition-colors">
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ResearchPortfolio;
