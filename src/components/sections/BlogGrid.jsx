import { Link } from 'react-router-dom';
import { Card, Badge } from '../ui';
import { Clock, ArrowRight } from 'lucide-react';

const BlogGrid = () => {
  const posts = [
    {
      id: 'quantum-computing',
      title: 'Preparing for the Post-Quantum Era',
      desc: 'How cryptographic standards are evolving to meet the challenges of next-generation computing.',
      date: 'May 12, 2024',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070'
    },
    {
      id: 'ai-ethics',
      title: 'The Ethics of Autonomous AI Systems',
      desc: 'Exploring the moral frameworks required for large-scale AI deployment in infrastructure.',
      date: 'May 08, 2024',
      category: 'AI Research',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070'
    },
    {
      id: 'fullstack-2024',
      title: 'Modern Full-Stack Trends in 2024',
      desc: 'From serverless architectures to edge computing, what you need to know to stay ahead.',
      date: 'May 02, 2024',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 px-6">
      {posts.map((post) => (
        <Card key={post.id} className="p-0 overflow-hidden flex flex-col h-full group" hover={true}>
          <div className="h-52 w-full relative overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 animate-fade-in">
              <Badge variant="blue">{post.category}</Badge>
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
              <Clock size={14} className="text-accent" />
              {post.date}
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-text-secondary text-sm mb-8 flex-grow leading-relaxed">
              {post.desc}
            </p>

            <Link 
              to={`/blog/${post.id}`} 
              className="w-full bg-white/5 border border-white/10 py-3 rounded-lg font-bold text-center hover:bg-accent hover:text-primary-bg transition-all flex items-center justify-center gap-2 group/btn"
            >
              Read Full Article
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogGrid;
