import { ShieldCheck, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '../ui';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
