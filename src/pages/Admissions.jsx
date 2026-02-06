import { Section, Card, Badge, Button } from '../components/ui';
import { ClipboardCheck, Target, MessageSquare, Handshake, CheckSquare, Zap, ChevronRight } from 'lucide-react';

const Admissions = () => {
  const steps = [
    { num: '01', title: 'Application', desc: 'Fully complete our secure portal form detailing your technical background.', icon: ClipboardCheck },
    { num: '02', title: 'Aptitude', desc: 'Logical reasoning and foundational coding assessment administered remotely.', icon: Target },
    { num: '03', title: 'Evaluation', desc: 'Peer-review interview with faculty leads to discuss career roadmap.', icon: MessageSquare },
    { num: '04', title: 'Onboarding', desc: 'Secure your slot, sign NDAs, and receive your research credentials.', icon: Handshake }
  ];

  return (
    <div className="animate-fade-in pt-32">
      <Section title="Institutional Admissions" subtitle="Identifying and cultivating the next generation of technical visionaries.">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <Card className="h-full pt-16 pb-12 px-8 flex flex-col items-center text-center relative border-white/5" hover={true}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-linear-to-br from-accent to-accent-secondary flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform">
                  <s.icon size={28} />
                </div>
                <div className="text-xs font-black text-accent opacity-20 mb-4 tracking-[0.5em]">{s.num}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
              </Card>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-white/5">
                  <ChevronRight size={40} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Financial Aid */}
      <Section className="bg-secondary-bg">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Badge variant="gold" className="mb-6">Financial Empowerment</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Investing in <span className="text-accent">Potential</span></h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">
              NIIT Digital Fortress provides comprehensive financial frameworks to ensure that technical talent 
              is never sidelined by economic barriers.
            </p>
            <div className="flex gap-4">
              <Button variant="primary">Grant Eligibility Center</Button>
              <Button variant="secondary">Fee Structure PDF</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Merit Grants', desc: 'Based on assessment KPIs' },
              { title: 'Diversity Fund', icon: Zap, desc: 'Closing the gender gap' },
              { title: 'Early Access', desc: 'Cohort-priority discounts' },
              { title: 'Corporate Sync', desc: 'Company sponsored track' }
            ].map((aid, i) => (
              <Card key={i} className="bg-white/3 border-white/5 p-6 hover:border-gold/30" hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                    <CheckSquare size={16} />
                  </div>
                  <h4 className="font-bold text-white text-sm">{aid.title}</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{aid.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Master CTA */}
      <Section>
        <div className="bg-accent rounded-3xl p-12 md:p-24 text-center text-primary-bg overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10 transition-transform group-hover:scale-105 duration-700">The Journey Begins Here</h2>
          <p className="text-primary-bg/80 text-lg md:text-xl font-bold mb-12 max-w-2xl mx-auto relative z-10 uppercase tracking-wider">
            Autumn 2024 Core Certification Cohort <br /> Final Applications Close in 14 Days
          </p>
          <button className="bg-primary-bg text-white px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition-all active:scale-95 group/btn flex items-center gap-3 mx-auto relative z-10">
            Submit Application <ChevronRight className="group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </Section>
    </div>
  );
};

export default Admissions;
