import { Twitter, Linkedin } from 'lucide-react';
import { Section, Card } from '../ui';

const FacultyGrid = () => {
  const faculty = [
    { name: 'Dr. Sarah Chen', role: 'Head of AI Research', bio: 'PhD in Machine Learning from MIT, 15+ years of research in neural networks and ethical AI.', img: 'SC' },
    { name: 'Prof. James Wilson', role: 'Cybersecurity Lead', bio: 'Certified Master Ethical Hacker, former consultant for global financial security operations.', img: 'JW' },
    { name: 'Elena Rodriguez', role: 'Full Stack Instructor', bio: 'Expert in Scalable Architectures and Cloud Systems. Former Tech Lead at leading Bay Area startups.', img: 'ER' },
    { name: 'Marcus Thorne', role: 'Database Architect', bio: 'Specialist in distributed consensus systems and large-scale data integrity protocols.', img: 'MT' }
  ];

  return (
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
  );
};

export default FacultyGrid;
