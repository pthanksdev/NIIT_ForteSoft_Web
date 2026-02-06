import { Section, Card, Button } from '../components/ui';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in pt-32">
      <Section 
        title="Direct Communication" 
        subtitle="Our academic advisors and support teams are available for detailed consultations regarding your technical career path."
      >
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-accent/5 border-white/5 p-10 h-full flex flex-col justify-between" hover={false}>
              <div>
                <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
                  <ShieldCheck className="text-accent" size={32} /> Command Center
                </h3>
                
                <div className="space-y-8">
                  <div className="flex gap-5 group cursor-not-allowed">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-bg transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Official Inquiry</p>
                      <p className="text-white font-medium">admissions@niitfortress.com</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group cursor-not-allowed">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-bg transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Emergency Admission</p>
                      <p className="text-white font-medium">+234 800 123 4567</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group cursor-not-allowed">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-bg transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-1">Central Campus</p>
                      <p className="text-white font-medium">123 Tech Avenue, Hub City</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 py-4 px-6 rounded-xl bg-white/5 border border-white/10 animate-fade-in">
                <Clock className="text-accent" size={20} />
                <p className="text-[10px] font-bold text-text-secondary tracking-widest uppercase">
                  Avg. Response Time: <span className="text-white">Under 2 Hours</span>
                </p>
              </div>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card className="p-10" hover={false}>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Secure Message</h3>
                  <p className="text-text-secondary text-sm">Fill out the encrypted form below.</p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Full Identity</label>
                    <input type="text" placeholder="Johnathan Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-hidden focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Digital Address</label>
                    <input type="email" placeholder="j.doe@network.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-hidden focus:border-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Communication Topic</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-hidden focus:border-accent appearance-none text-text-secondary">
                    <option>General Research Inquiry</option>
                    <option>Admissions Portal Support</option>
                    <option>Corporate Partnership</option>
                    <option>Faculty Recruitment</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-text-secondary ml-1">Detailed Message</label>
                  <textarea rows="6" placeholder="Document your query here..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-hidden focus:border-accent resize-none"></textarea>
                </div>

                <Button variant="primary" className="w-full py-5 text-lg font-black" icon={Send}>
                  Transmit Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
