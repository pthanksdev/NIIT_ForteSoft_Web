import { Cpu, Code, Shield } from 'lucide-react';
import { Section, Card } from '../ui';

const HomeFeatures = () => {
  const features = [
    { 
      title: 'Industry-Standard Labs', 
      desc: 'Access to high-performance computing clusters and professional security testing environments.',
      icon: Cpu 
    },
    { 
      title: 'Hands-on Projects', 
      desc: 'Build real-world applications and defend against simulated live cyber attacks.',
      icon: Code 
    },
    { 
      title: 'Global Certifications', 
      desc: 'Curriculum designed around internationally recognized technical standards.',
      icon: Shield 
    }
  ];

  return (
    <Section title="Why NIIT Digital Fortress?" subtitle="We provide more than just education; we provide a career-ready ecosystem.">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <Card key={i} className="flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
              <feature.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HomeFeatures;
