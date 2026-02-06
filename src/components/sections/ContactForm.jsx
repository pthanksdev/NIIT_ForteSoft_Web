import { MessageSquare, Send } from 'lucide-react';
import { Card, Button } from '../ui';

const ContactForm = () => {
  return (
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

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
  );
};

export default ContactForm;
