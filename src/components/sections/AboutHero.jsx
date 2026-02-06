import { Badge } from '../ui';
import { History, Globe, Users } from 'lucide-react';

const AboutHero = () => {
  const stats = [
    { label: 'Excellence', value: '14+', unit: 'Years', icon: History },
    { label: 'Network', value: '5k+', unit: 'Alumni', icon: Globe },
    { label: 'Faculty', value: '120+', unit: 'Experts', icon: Users }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
      <div>
        <Badge variant="blue" className="mb-4">Institutional Legacy</Badge>
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
  );
};

export default AboutHero;
