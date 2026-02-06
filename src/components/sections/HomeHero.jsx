import { ArrowRight } from 'lucide-react';
import { Button, Badge } from '../ui';

const HomeHero = () => {
  return (
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
          <span className="bg-linear-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
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
  );
};

export default HomeHero;
