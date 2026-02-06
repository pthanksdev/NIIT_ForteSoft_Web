const Admissions = () => {
  const steps = [
    { num: '01', title: 'Online Application', desc: 'Sully complete our digital application form with your academic history and intent.' },
    { num: '02', title: 'Tech Assessment', desc: 'A short online test to evaluate your logical reasoning and basic tech literacy.' },
    { num: '03', title: 'Interview', desc: 'A conversation with our faculty to align your goals with our curriculum.' },
    { num: '04', title: 'Enrollment', desc: 'Finalize your paperwork and join the next cohort of tech leaders.' }
  ];

  return (
    <div className="animate-fade-in" style={{ paddingTop: '10rem' }}>
      <section className="container" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Start Your <span style={{ color: 'var(--accent-color)' }}>Transformation</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
          Admission to NIIT Digital Fortress is competitive but rewarding. We look for passion, dedication, and a thirst for innovation.
        </p>
      </section>

      {/* Process Steps */}
      <section className="container" style={{ marginBottom: '6rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {steps.map((s, i) => (
            <div key={i} className="glass" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-10px', 
                right: '-10px', 
                fontSize: '5rem', 
                fontWeight: 900, 
                opacity: 0.05,
                color: 'var(--accent-color)' 
              }}>{s.num}</div>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Aid */}
      <section className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Scholarships & <span style={{ color: 'var(--accent-color)' }}>Financial Aid</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We believe that financial constraints should never stand in the way of talent. We offer merit-based scholarships and flexible payment options.
              </p>
              <button className="btn-primary">View Scholarship Criteria</button>
            </div>
            <div className="glass" style={{ padding: '3rem' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>✅ <b>Merit-based:</b> For top academic performers.</li>
                <li style={{ display: 'flex', gap: '1rem' }}>✅ <b>Women in Tech:</b> Encouraging gender diversity in CS.</li>
                <li style={{ display: 'flex', gap: '1rem' }}>✅ <b>Early Bird:</b> Discounts for early enrollment.</li>
                <li style={{ display: 'flex', gap: '1rem' }}>✅ <b>Corporate:</b> For group employee training.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>Ready to Apply?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>Our next cohort starts in <b>September 2024</b>. Space is limited.</p>
          <button className="btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Open Application Portal</button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
