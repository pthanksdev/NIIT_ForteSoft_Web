import { Section, Card, Badge } from '../components/ui';
import { Microscope, BookOpen, GraduationCap, ChevronRight, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Faculty = () => {
  const faculty = [
    { name: 'Dr. Sarah Chen', role: 'Head of AI Research', bio: 'PhD in Machine Learning from MIT, 15+ years of research in neural networks and ethical AI.', img: 'SC' },
    { name: 'Prof. James Wilson', role: 'Cybersecurity Lead', bio: 'Certified Master Ethical Hacker, former consultant for global financial security operations.', img: 'JW' },
    { name: 'Elena Rodriguez', role: 'Full Stack Instructor', bio: 'Expert in Scalable Architectures and Cloud Systems. Former Tech Lead at leading Bay Area startups.', img: 'ER' },
    { name: 'Marcus Thorne', role: 'Database Architect', bio: 'Specialist in distributed consensus systems and large-scale data integrity protocols.', img: 'MT' }
  ];

  const research = [
    { title: 'Neural Ethics in Autonomous Systems', leads: 'Dr. Sarah Chen', year: '2023', icon: Microscope },
    { title: 'Post-Quantum Cryptographic Frameworks', leads: 'Prof. James Wilson', year: '2024', icon: BookOpen },
    { title: 'Distributed Edge Computing for IoT', leads: 'Elena Rodriguez', year: '2022', icon: GraduationCap }
  ];

  return (
    <div className="animate-fade-in pt-32">
      <Section 
        title="Distinguished Faculty" 
        subtitle="Our programs are delivered by world-class industry practitioners and researchers dedicated to technical excellence."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {faculty.map((member, idx) => (
            <Card key={idx} className="p-8 group" hover={true}>
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-accent to-accent-secondary p-1 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-full bg-primary-bg flex items-center justify-center text-2xl font-black text-accent">
                  {member.img}
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{member.bio}</p>
                <div className="flex justify-center gap-4 text-text-secondary">
                  <button className="hover:text-accent transition-colors"><Twitter size={16} /></button>
                  <button className="hover:text-accent transition-colors"><Linkedin size={16} /></button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Research Highlights */}
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

      {/* Advisory Board */}
      <Section title="Global Advisory Board" subtitle="Aligning our curriculum with the shifting requirements of the global tech economy.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['MIT Reserch', 'Stanford AI', 'Cisco Systems', 'AWS Global', 'IEEE Security', 'ACM Digital', 'Oracle Labs', 'NVIDIA Research'].map((board, i) => (
            <div key={i} className="glass py-6 text-center text-sm font-bold tracking-[0.2em] text-text-secondary hover:text-accent hover:border-accent transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              {board.toUpperCase()}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Faculty;
