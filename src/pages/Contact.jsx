const Contact = () => {
  return (
    <div className="animate-fade-in" style={{ paddingTop: '8rem' }}>
      <section className="container" style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in <span style={{ color: 'var(--accent-color)' }}>Touch</span></h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Have questions? Our admissions team is here to help.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem' }}>
          <div className="glass" style={{ padding: '2.5rem' }}>
            <h3 style={{ marginBottom: '2rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--accent-color)' }}>Email</p>
                <p style={{ color: 'var(--text-secondary)' }}>admissions@niitdigitalfortress.com</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--accent-color)' }}>Phone</p>
                <p style={{ color: 'var(--text-secondary)' }}>+234 800 123 4567</p>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--accent-color)' }}>Campus Location</p>
                <p style={{ color: 'var(--text-secondary)' }}>123 Tech Avenue, Hub City, Digital State</p>
              </div>
            </div>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Full Name</label>
                <input type="text" className="glass" style={{ padding: '1rem', color: 'white', border: '1px solid var(--glass-border)', outline: 'none' }} placeholder="John Doe" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email Address</label>
                <input type="email" className="glass" style={{ padding: '1rem', color: 'white', border: '1px solid var(--glass-border)', outline: 'none' }} placeholder="john@example.com" />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Subject</label>
              <select className="glass" style={{ padding: '1rem', color: 'white', border: '1px solid var(--glass-border)', outline: 'none', appearance: 'none' }}>
                <option>General Inquiry</option>
                <option>Course Admissions</option>
                <option>Corporate Training</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea className="glass" rows="5" style={{ padding: '1rem', color: 'white', border: '1px solid var(--glass-border)', outline: 'none', resize: 'none' }} placeholder="How can we help you?"></textarea>
            </div>
            <button className="btn-primary" style={{ padding: '1rem' }}>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
