const About = () => {
  const milestones = [
    { year: '2010', title: 'The Foundation', desc: 'Established by a group of CS professors with a vision for digital empowerment.' },
    { year: '2015', title: 'Global Recognition', desc: 'Received International accreditation for our Advanced Cybersecurity track.' },
    { year: '2019', title: 'AI Integration', desc: 'Launched the first comprehensive AI & Robotics lab in the region.' },
    { year: '2024', title: 'The Future', desc: 'Expanding to virtual learning and cloud-based architecture research.' }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingTop: '10rem' }}>
      <section className="container" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Pioneering <span style={{ color: 'var(--accent-color)' }}>Education</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              NIIT Digital Fortress was founded with a single mission: to provide the highest quality computer science education to aspiring tech leaders. 
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              We combine rigorous academic theory with real-world industry applications, ensuring our students are not just learners, but problem solvers ready for the global stage.
            </p>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem' }}>
              <div>
                <h3 style={{ color: 'var(--accent-color)', fontSize: '2.5rem' }}>14+</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Years of Excellence</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--accent-color)', fontSize: '2.5rem' }}>5k+</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Successful Alumni</p>
              </div>
              <div>
                <h3 style={{ color: 'var(--accent-color)', fontSize: '2.5rem' }}>50+</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Industry Partners</p>
              </div>
            </div>
          </div>
          <div className="glass" style={{ 
            height: '400px', 
            backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1986")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '24px'
          }}></div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} style={{ 
                margin: '2rem 0', 
                position: 'relative', 
                width: '50%', 
                left: i % 2 === 0 ? '0' : '50%',
                padding: i % 2 === 0 ? '0 3rem 0 0' : '0 0 0 3rem',
                textAlign: i % 2 === 0 ? 'right' : 'left'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  width: '20px', 
                  height: '20px', 
                  background: 'var(--accent-color)', 
                  borderRadius: '50%', 
                  top: '0', 
                  left: i % 2 === 0 ? 'auto' : '-10px',
                  right: i % 2 === 0 ? '-10px' : 'auto',
                  border: '4px solid var(--primary-bg)',
                  zIndex: 2
                }}></div>
                <div className="glass" style={{ padding: '1.5rem' }}>
                  <h3 style={{ color: 'var(--accent-color)' }}>{m.year}</h3>
                  <h4 style={{ margin: '0.5rem 0' }}>{m.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="section">
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>Accredited & Certified BY</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', opacity: 0.5, flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 800 }}>TECH-EDU GLOBAL</span>
            <span style={{ fontWeight: 800 }}>ISO 27001</span>
            <span style={{ fontWeight: 800 }}>ABET ACCREDITED</span>
            <span style={{ fontWeight: 800 }}>CYBER-TRUST</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
