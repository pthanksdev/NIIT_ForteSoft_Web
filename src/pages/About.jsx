import { Section, Card, Badge } from '../components/ui';
import { History, Target, Users, Globe, Award, Sparkles } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2010', title: 'The Foundation', desc: 'Established by high-profile CS academics with a global vision.' },
    { year: '2015', title: 'Global Accel', desc: 'Received ISO certifications for security training standards.' },
    { year: '2019', title: 'AI Frontier', desc: 'Launched the regions first neuro-computational research lab.' },
    { year: '2024', title: 'Scale Era', desc: 'Transitioned to hybrid global learning models and cloud research.' }
  ];

  const stats = [
    { label: 'Excellence', value: '14+', unit: 'Years', icon: History },
    { label: 'Network', value: '5k+', unit: 'Alumni', icon: Globe },
    { label: 'Faculty', value: '120+', unit: 'Experts', icon: Users }
  ];

  return (
    <div className="animate-fade-in pt-32">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <Badge variant="blue" className="mb-4">Instititional Legacy</Badge>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
              Pioneering the Future of <br />
              <span className="text-accent italic">Technical Education</span>
            </h2>
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                NIIT Digital Fortress stands as a bastion of advanced computer science education, 
                bridging the gap between academic theory and high-stakes industry application.
              </p>
              <p>
                Our pedagogy is rooted in immersive, hands-on development and defensive security research, 
                creating leaders who don't just use technology—they architect it.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/5">
              {stats.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="text-accent flex justify-center mb-2 group-hover:scale-110 transition-transform">
                    <s.icon size={24} />
                  </div>
                  <div className="text-3xl font-black text-white leading-none mb-1">{s.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">{s.unit}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1986" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Facility" 
              />
            </div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Innovation', icon: Sparkles, color: 'text-accent' },
            { title: 'Integrity', icon: Target, color: 'text-green-400' },
            { title: 'Excellence', icon: Award, color: 'text-gold' }
          ].map((val, i) => (
            <Card key={i} className="p-10 text-center border-white/5 bg-white/2" hover={true}>
              <div className={`${val.color} mb-6 flex justify-center`}>
                <val.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Upholding the highest standards of research integrity and technical brilliance in every program.
              </p>
            </Card>
          ))}
        </div>

        {/* History Timeline - Redesigned */}
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
      </Section>
    </div>
  );
};

export default About;
