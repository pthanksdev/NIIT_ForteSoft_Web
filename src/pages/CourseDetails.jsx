import { useParams, Link } from 'react-router-dom';
import { Button, Card, Section, Badge } from '../components/ui';
import { ArrowLeft, CheckCircle2, Calendar, Users, GraduationCap, ChevronRight } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();

  const coursesData = {
    'full-stack': {
      title: 'Full-Stack Web Development',
      desc: 'Master the art of building scalable web applications from front to back using modern frameworks.',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      syllabus: [
        'HTML5, CSS3 & Responsive Design',
        'Modern JavaScript (ES6+) and TypeScript',
        'React.js and State Management',
        'Node.js, Express, and APIs',
        'Database Design (PostgreSQL & MongoDB)',
        'Cloud Deployment (Vercel & AWS)'
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
      learningOutcomes: 'By the end of this course, you will be able to build, deploy, and manage complex web systems used by millions of users.'
    },
    'cybersec': {
      title: 'Advanced Cybersecurity',
      desc: 'Become a specialist in defending digital assets and navigating the complex threat landscape.',
      duration: '4 Months',
      level: 'Advanced',
      syllabus: [
        'Networking Fundamentals & OSI Model',
        'Ethical Hacking & Penetration Testing',
        'Cryptography and Secure Communication',
        'Security Information (SIEM)',
        'Incident Response & Recovery',
        'Cloud Security Architecture'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
      learningOutcomes: 'Students will be proficient in identifying vulnerabilities, performing forensics, and securing large-scale network infrastructures.'
    },
    'data-science': {
        title: 'Data Science & Analytics',
        desc: 'Extract meaningful insights from data and drive decision-making with AI.',
        duration: '5 Months',
        level: 'Intermediate',
        syllabus: [
          'Python for Data Science',
          'Statistical Analysis & Probability',
          'Data Visualization',
          'Machine Learning Algorithms',
          'Big Data Processing',
          'Deep Learning & Neural Networks'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
        learningOutcomes: 'Master the full data pipeline from extraction to predictive modeling using industry-standard tools.'
      }
  };

  const course = coursesData[id] || coursesData['full-stack'];

  return (
    <div className="animate-fade-in pt-32">
      <Section>
        <Link to="/courses" className="inline-flex items-center gap-2 text-accent font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={20} /> Back to Programs
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-7">
            <Badge variant="blue" className="mb-4">Professional Certification</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{course.title}</h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">{course.desc}</p>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <Card className="bg-white/2" hover={false}>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-2">Duration</span>
                <span className="text-xl font-bold flex items-center gap-2 text-accent">
                  <Calendar size={20} /> {course.duration}
                </span>
              </Card>
              <Card className="bg-white/2" hover={false}>
                <span className="text-xs font-bold text-text-secondary uppercase tracking-widest block mb-2">Expertise Level</span>
                <span className="text-xl font-bold flex items-center gap-2 text-accent">
                  <GraduationCap size={20} /> {course.level}
                </span>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent text-sm">01</span>
              Curriculum Roadmap
            </h2>
            <div className="glass p-8 space-y-4">
              {course.syllabus.map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0 hover:translate-x-2 transition-transform cursor-pointer">
                  <CheckCircle2 size={18} className="text-accent shrink-0" />
                  <span className="text-text-primary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src={course.image} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" 
                alt={course.title} 
              />
            </div>

            <Card className="bg-accent/5 border-accent/20 p-8" hover={false}>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                <Users size={20} className="text-accent" /> Enrollment Open
              </h3>
              <p className="text-text-secondary text-sm mb-8 leading-relaxed">
                {course.learningOutcomes}
              </p>
              <Link to="/contact">
                <Button variant="primary" className="w-full py-4 text-lg" icon={ChevronRight}>
                  Apply for Program
                </Button>
              </Link>

              <div className="mt-6 flex justify-between text-xs text-text-secondary font-bold uppercase tracking-wider">
                <span>Start Date: 15 Sep</span>
                <span className="text-accent">Limited Slots Left</span>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CourseDetails;
