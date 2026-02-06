import { useState } from 'react';
import CourseCard from '../components/CourseCard';

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
    { q: "Are the certifications industry-recognized?", a: "Yes, our certifications are accredited and recognized globally by leading tech firms." },
    { q: "Do you offer job placement assistance?", a: "Absolutely. We have a dedicated career services team that helps students with resume building and interviews." },
    { q: "Can I pay the tuition in installments?", a: "Yes, we offer flexible payment plans for all professional certifications." }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingTop: '10rem' }}>
      <section className="container" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Professional <span style={{ color: 'var(--accent-color)' }}>Certifications</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
          Choose your path to success with our expert-led programs. Filter by category to find the perfect fit for your career goals.
        </p>
      </section>

      {/* Filter Section */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? 'btn-primary' : 'btn-secondary'}
              style={{ borderRadius: '25px', padding: '0.5rem 1.5rem' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem',
        marginBottom: '6rem'
      }}>
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="glass" style={{ padding: '2rem' }}>
                <h4 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{faq.q}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
