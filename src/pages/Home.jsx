const Home = () => {
  const partners = ['Google Cloud', 'Microsoft Azure', 'Amazon Web Services', 'IBM', 'Oracle', 'Cisco'];
  const testimonials = [
    { name: 'Alex Johnson', role: 'Security Analyst at Cisco', text: 'NIIT Fortress gave me the hands-on experience I needed to land my dream job in cybersecurity.' },
    { name: 'Sofia Martinez', role: 'AI Engineer at NVIDIA', text: 'The faculty here are world-class. The neural networks curriculum is truly cutting-edge.' },
    { name: 'David Chen', role: 'Lead Dev at Fintech Startup', text: 'The software engineering track prepared me for real-world skalability challenges.' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        paddingTop: '12rem',
        paddingBottom: '8rem',
        backgroundImage: 'linear-gradient(rgba(11, 15, 25, 0.8), rgba(11, 15, 25, 0.9)), url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="stagger-1" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: 1.1, animation: 'fadeIn 0.8s ease forwards' }}>
            The Digital <span style={{ color: 'var(--accent-color)' }}>Fortress</span> <br />
            of Learning
          </h1>
          <p className="stagger-2" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', animation: 'fadeIn 0.8s ease forwards 0.2s', opacity: 0 }}>
            Master advanced Computer Science, AI, and Cybersecurity at Nigeria's premier technology institute.
          </p>
          <div className="stagger-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', animation: 'fadeIn 0.8s ease forwards 0.4s', opacity: 0 }}>
            <button className="btn-primary">View Programs</button>
            <button className="btn-secondary">Check Admissions</button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px' }}>
            Trusted by Industry Giants
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', opacity: 0.6 }}>
            {partners.map((p, i) => (
              <span key={i} style={{ fontSize: '1.2rem', fontWeight: 700 }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Core Specializations</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <div className="glass hover-scale hover-glow" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--accent-color)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>🛡️</div>
              <h3>Cybersecurity</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                End-to-end defense strategies for the modern enterprise.
              </p>
            </div>
            <div className="glass hover-scale hover-glow" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--accent-color)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>🧠</div>
              <h3>Artificial Intelligence</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                Building the future with deep learning and robotics.
              </p>
            </div>
            <div className="glass hover-scale hover-glow" style={{ padding: '2.5rem' }}>
              <div style={{ color: 'var(--accent-color)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>⚛️</div>
              <h3>Software Engineering</h3>
              <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                Architecting scalable systems for global impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="glass" style={{ padding: '2rem' }}>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>"{t.text}"</p>
                <h4 style={{ color: 'var(--accent-color)' }}>{t.name}</h4>
                <p style={{ fontSize: '0.8rem' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container">
          <div className="glass" style={{ padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,210,255,0.1), rgba(58,123,213,0.1))' }}>
            <h2 style={{ marginBottom: '1rem' }}>Stay Informed</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Get the latest tech news and course updates delivered to your inbox.</p>
            <div style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
              <input type="email" className="glass" placeholder="Email Address" style={{ flexGrow: 1, padding: '1rem', color: 'white' }} />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
