import { 
  Shield, 
  Cpu, 
  Code, 
  Users, 
  GraduationCap, 
  Globe, 
  ArrowRight, 
  Calendar, 
  Video,
  Award,
  Zap
} from 'lucide-react';
import { Button, Card, Section, Badge } from '../components/ui';

const Home = () => {
  const stats = [
    { label: 'Graduates', value: '5,000+', icon: GraduationCap },
    { label: 'Partners', value: '50+', icon: Globe },
    { label: 'Expert Mentors', value: '120+', icon: Users },
    { label: 'Placement Rate', value: '94%', icon: Award }
  ];

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

  const workshops = [
    { title: 'DeFi Security Audit', date: 'Aug 15', type: 'Virtual', icon: Video },
    { title: 'Neural Networks Lab', date: 'Aug 22', type: 'Campus', icon: Users },
    { title: 'AWS Cloud Architecture', date: 'Sep 05', type: 'Hybrid', icon: Globe }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-20"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary-bg via-transparent to-primary-bg"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <Badge variant="blue" className="mb-6">Center for Technical Excellence</Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Architecting the <br />
            <span className="text-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              Digital Frontier
            </span>
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Join Africa's leading institute for advanced Computer Science. Master Artificial Intelligence, 
            Cybersecurity, and Scalable Software Engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" icon={ArrowRight}>Explore Programs</Button>
            <Button variant="secondary">View Enrollment Guide</Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/2 overflow-hidden border-y border-white/5">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-accent mb-2 flex justify-center group-hover:scale-110 transition-transform">
                <stat.icon size={28} />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-text-secondary text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
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

      {/* Workshops */}
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

      {/* Partners - Refined */}
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

      {/* Newsletter */}
      <Section className="pb-32">
        <div className="glass p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Zap size={200} className="text-accent" />
          </div>
          <h2 className="text-4xl font-bold mb-4 relative z-10">Power Your Future</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto relative z-10">
            Join our newsletter to receive the latest updates on research, admissions, and upcoming technical workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/5 border border-white/10 rounded-lg px-6 py-4 outline-hidden focus:border-accent flex-grow text-white"
            />
            <Button variant="primary">Join Now</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
