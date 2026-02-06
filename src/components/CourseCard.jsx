import { Link } from 'react-router-dom';
import { Badge, Card } from './ui';
import { ArrowRight, Clock, BarChart, CreditCard } from 'lucide-react';

const CourseCard = ({ id, title, level, duration, fee, image, tag }) => {
  return (
    <Card className="p-0 overflow-hidden flex flex-col h-full group" hover={true}>
      <div className="h-52 w-full relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 animate-fade-in">
          <Badge variant={tag === 'Most Popular' ? 'gold' : 'blue'}>{tag}</Badge>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <div className="space-y-3 mb-8 flex-grow">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <BarChart size={16} className="text-accent" />
            <span className="font-medium">Level:</span> {level}
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Clock size={16} className="text-accent" />
            <span className="font-medium">Duration:</span> {duration}
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <CreditCard size={16} className="text-accent" />
            <span className="font-medium">Tuition:</span> {fee}
          </div>
        </div>

        <Link 
          to={`/courses/${id}`} 
          className="w-full bg-white/5 border border-white/10 py-3 rounded-lg font-bold text-center hover:bg-accent hover:text-primary-bg transition-all flex items-center justify-center gap-2 group/btn"
        >
          View Program Details
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
};

export default CourseCard;
