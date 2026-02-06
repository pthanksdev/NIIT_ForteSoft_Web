import { Zap } from 'lucide-react';
import { Section, Button } from '../ui';

const Newsletter = ({ text = "Join our newsletter to receive the latest updates on research, blog posts, and upcoming technical workshops." }) => {
  return (
    <Section className="pb-32">
      <div className="glass p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
          <Zap size={200} className="text-accent" />
        </div>
        <h2 className="text-4xl font-bold mb-4 relative z-10">Power Your Future</h2>
        <p className="text-text-secondary mb-10 max-w-xl mx-auto relative z-10">
          {text}
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
  );
};

export default Newsletter;
