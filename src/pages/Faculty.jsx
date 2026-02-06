const Faculty = () => {
  const faculty = [
    { name: 'Dr. Sarah Chen', role: 'Head of AI Research', bio: 'PhD in Machine Learning from MIT, 15+ years of industry experience.', img: 'SC' },
    { name: 'Prof. James Wilson', role: 'Cybersecurity Lead', bio: 'Certified Ethical Hacker, former consultant for global financial firms.', img: 'JW' },
    { name: 'Elena Rodriguez', role: 'Full Stack Instructor', bio: 'Expert in React, Node.js, and Cloud Architecture. Lead dev for multiple startups.', img: 'ER' },
    { name: 'Marcus Thorne', role: 'Database Systems', bio: 'Specialist in distributed systems and large-scale data management.', img: 'MT' }
  ];

  const research = [
    { title: 'Neural Ethics in Autonomous Systems', leads: 'Dr. Sarah Chen', year: '2023' },
    { title: 'Post-Quantum Cryptographic Frameworks', leads: 'Prof. James Wilson', year: '2024' },
    { title: 'Distributed Edge Computing for IoT', leads: 'Elena Rodriguez', year: '2022' }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingTop: '10rem' }}>
      <section className="container" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Expert <span style={{ color: 'var(--accent-color)' }}>Faculty</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Learn from world-class instructors and leading industry researchers.</p>
      </section>

      <section className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
        marginBottom: '6rem'
      }}>
        {faculty.map((member, idx) => (
          <div key={idx} className="glass hover-scale hover-glow" style={{ padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--accent-secondary)', 
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 700,
              color: 'white',
              border: '4px solid var(--glass-border)'
            }}>
              {member.img}
            </div>
            <h3 style={{ marginBottom: '0.5rem' }}>{member.name}</h3>
            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>{member.role}</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{member.bio}</p>
          </div>
        ))}
      </section>

      {/* Research Highlights */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <h2 className="section-title">Research Highlights</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {research.map((r, i) => (
              <div key={i} className="glass" style={{ padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>{r.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Project Lead: {r.leads}</p>
                </div>
                <div style={{ fontWeight: 700, opacity: 0.5 }}>{r.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Global Advisory Board</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
            Our curriculum is guided by tech leaders from these organizations.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {['MIT', 'Stanford AI', 'Cisco Systems', 'AWS Research'].map((board, i) => (
              <div key={i} className="glass" style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--accent-color)' }}>
                {board}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
