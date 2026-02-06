import { useParams, Link } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();

  // Mock data for course details
  const coursesData = {
    'full-stack': {
      title: 'Full-Stack Web Development',
      desc: 'Master the art of building scalable web applications from front to back.',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      syllabus: [
        'HTML5, CSS3 & Responsive Design',
        'Modern JavaScript (ES6+) and TypeScript',
        'React.js and State Management (Redux/Context)',
        'Node.js, Express, and Server-Side Logic',
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
        'Security Information and Event Management (SIEM)',
        'Incident Response & Disaster Recovery',
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
          'Python for Data Science (NumPy, Pandas)',
          'Statistical Analysis & Probability',
          'Data Visualization (Matplotlib, Seaborn)',
          'Machine Learning Algorithms',
          'Big Data Processing (Spark, Hadoop)',
          'Deep Learning & Neural Networks'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
        learningOutcomes: 'Master the full data pipeline from extraction to predictive modeling using industry-standard tools.'
      }
  };

  const course = coursesData[id] || coursesData['full-stack']; // Fallback

  return (
    <div className="animate-fade-in" style={{ paddingTop: '10rem' }}>
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr', gap: '4rem' }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{course.title}</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>{course.desc}</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="glass" style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>COURSE DURATION</p>
                <h4 style={{ color: 'var(--accent-color)' }}>{course.duration}</h4>
              </div>
              <div className="glass" style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>EXPERIENCE LEVEL</p>
                <h4 style={{ color: 'var(--accent-color)' }}>{course.level}</h4>
              </div>
            </div>

            <h2 style={{ marginBottom: '1.5rem' }}>Syllabus Breakdown</h2>
            <div className="glass" style={{ padding: '2rem' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
                {course.syllabus.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ color: 'var(--accent-color)', fontWeight: 800 }}>0{i+1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="glass" style={{ 
              height: '350px', 
              backgroundImage: `url(${course.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              marginBottom: '2rem'
            }}></div>
            
            <div className="glass" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Enrollment Details</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                {course.learningOutcomes}
              </p>
              <Link to="/admissions" className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '1.2rem' }}>
                Apply for this Course
              </Link>
              <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Next batch starts: 15th Sep, 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
