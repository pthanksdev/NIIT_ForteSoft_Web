import { Sparkles, Target, Award } from 'lucide-react';
import { Card } from '../ui';

const VisionValues = () => {
  return (
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
  );
};

export default VisionValues;
