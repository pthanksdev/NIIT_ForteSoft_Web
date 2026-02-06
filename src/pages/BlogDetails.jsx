import { useParams, Link } from 'react-router-dom';
import { Section, Button, Badge, Card } from '../components/ui';
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogDetails = () => {
  const { id } = useParams();

  const postsData = {
    'quantum-computing': {
      title: 'Preparing for the Post-Quantum Era',
      content: `Cryptography is at a crossroads. As quantum computers advance towards commercial viability, the encryption standards that protect our digital existence—banking, governance, and private communication—are becoming increasingly vulnerable. 

      At NIIT Digital Fortress, our research team is focusing on lattice-based cryptography, a promising candidate for post-quantum security. Lattice-based systems rely on the difficulty of shortest vector problems, which remain computationally expensive even for quantum machines.

      Implementation of these new standards requires not just mathematical rigor, but a fundamental shift in how we architect digital trust. Developers must start considering "quantum-agility" in their systems today.`,
      date: 'May 12, 2024',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070',
      author: 'Prof. James Wilson',
      authorRole: 'Cybersecurity Lead'
    },
    'ai-ethics': {
        title: 'The Ethics of Autonomous AI Systems',
        content: `As autonomous systems transition from laboratory simulations to real-world infrastructure, the ethical frameworks governing their decision-making processes have never been more critical. 
  
        When an AI system is programmed to manage traffic flow or healthcare diagnostics, how do we encode human values like fairness and accountability? Our Neuro-Computational lab is currently exploring 'explainable AI' (XAI) to ensure that decision processes are transparent to human operators.
  
        Ethics is not an afterthought in engineering; it is the blueprint.`,
        date: 'May 08, 2024',
        category: 'AI Research',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
        author: 'Dr. Sarah Chen',
        authorRole: 'Head of AI Research'
      }
  };

  const post = postsData[id] || postsData['quantum-computing'];

  return (
    <div className="animate-fade-in pt-32 pb-20">
      <Section>
        <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        <div className="max-w-4xl mx-auto">
          <Badge variant="blue" className="mb-6">{post.category}</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">{post.title}</h1>
          
          <div className="flex items-center gap-6 mb-12 py-6 border-y border-white/5">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-white font-bold">{post.author}</p>
              <p className="text-text-secondary text-xs">{post.authorRole}</p>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-2 text-text-secondary text-sm">
              <Clock size={16} /> {post.date}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <img src={post.image} className="w-full h-[400px] object-cover" alt={post.title} />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">Share Article</span>
              <div className="flex gap-2">
                <button className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:text-primary-bg transition-all"><Twitter size={18} /></button>
                <button className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:text-primary-bg transition-all"><Linkedin size={18} /></button>
                <button className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:text-primary-bg transition-all"><Facebook size={18} /></button>
              </div>
            </div>
            <Button variant="secondary" icon={Share2}>Copy Link</Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BlogDetails;
