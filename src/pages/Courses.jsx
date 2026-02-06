import { useState } from 'react';
import { Search, HelpCircle, GraduationCap } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { Section, Card } from '../components/ui';

const Courses = () => {
  const [filter, setFilter] = useState('All');
  
  const allCourses = [
    { 
      id: 'full-stack',
      title: 'Full-Stack Web Development', 
      level: 'Beginner to Advanced', 
      duration: '6 Months', 
      fee: '$1,200', 
      tag: 'Most Popular',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072'
    },
    { 
      id: 'cybersec',
      title: 'Advanced Cybersecurity', 
      level: 'Advanced', 
      duration: '4 Months', 
      fee: '$1,500', 
      tag: 'High Demand',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
    },
    { 
      id: 'data-science',
      title: 'Data Science & Analytics', 
      level: 'Intermediate', 
      duration: '5 Months', 
      fee: '$1,350', 
      tag: 'Trending',
      category: 'Data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
    },
    { 
      id: 'mobile-dev',
      title: 'Mobile App Development', 
      level: 'Intermediate', 
      duration: '4 Months', 
      fee: '$1,100', 
      tag: 'Creative',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070'
    },
    { 
      id: 'cloud-comp',
      title: 'Cloud Computing (AWS/Azure)', 
      level: 'Advanced', 
      duration: '3 Months', 
      fee: '$1,600', 
      tag: 'Enterprise',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072'
    },
    { 
      id: 'blockchain',
      title: 'Blockchain Fundamentals', 
      level: 'Intermediate', 
      duration: '4 Months', 
      fee: '$1,450', 
      tag: 'New',
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2064'
    }
  ];

  const categories = ['All', 'Web', 'Security', 'Data'];
  const filteredCourses = filter === 'All' ? allCourses : allCourses.filter(c => c.category === filter);

  const faqs = [
    { q: "Are the certifications industry-recognized?", a: "Yes, our certifications are accredited and recognized globally by leading tech firms including Microsoft, Google, and Amazon." },
    { q: "Do you offer job placement assistance?", a: "Absolutely. We have a dedicated career services team that works one-on-one with students for resume building, interview prep, and direct referrals." },
    { q: "Can I pay the tuition in installments?", a: "Yes, we offer flexible monthly payment plans for all professional certifications to ensure accessibility." }
  ];

  return (
    <div className="animate-fade-in pt-32">
      <Section 
        title="Professional Certifications" 
        subtitle="Accelerate your career with our industry-led curriculum. Each program is designed to deliver immediate value in the global job market."
      >
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto w-full md:w-auto">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-accent text-primary-bg shadow-[0_4px_12px_rgba(0,210,255,0.3)]' 
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
            <input 
              type="text" 
              placeholder="Search programs..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm outline-hidden focus:border-accent"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-secondary-bg" title="Experience & Support" subtitle="Everything you need to know about starting your journey with NIIT Digital Fortress.">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-accent/10 p-3 rounded-xl h-fit">
                <HelpCircle className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold">Frequently Asked <br />Questions</h2>
            </div>
            <p className="text-text-secondary">
              Can't find the answer you're looking for? Reach out to our admissions team for immediate assistance.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="p-6 overflow-visible" hover={false}>
                <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
                  <GraduationCap size={18} /> {faq.q}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Courses;
