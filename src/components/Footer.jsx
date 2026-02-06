const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--secondary-bg)',
      padding: '4rem 2rem',
      marginTop: '4rem',
      borderTop: '1px solid var(--glass-border)'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem'
      }}>
        <div>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>NIIT FORTRESS</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Empowering the next generation of computer scientists and cybersecurity experts with industry-leading training.
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Home</li>
            <li>Courses</li>
            <li>Admissions</li>
            <li>Faculty</li>
          </ul>
        </div>
        <div>
          <h4 style={{ marginBottom: '1.5rem' }}>Contact Us</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>info@niitdigitalfortress.com</li>
            <li>+234 800 123 4567</li>
            <li>123 Tech Avenue, Digital City</li>
          </ul>
        </div>
      </div>
      <div className="container" style={{
        textAlign: 'center',
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--glass-border)',
        fontSize: '0.8rem',
        color: 'var(--text-secondary)'
      }}>
        © {new Date().getFullYear()} NIIT Digital Fortress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
