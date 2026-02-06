import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontWeight: 800, fontSize: '1.5rem', color: 'var(--accent-color)' }}>
        NIIT <span style={{ color: 'var(--text-primary)' }}>FORTRESS</span>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Link to="/" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Home</Link>
        <Link to="/courses" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Courses</Link>
        <Link to="/about" style={{ fontSize: '0.9rem', fontWeight: 500 }}>About</Link>
        <Link to="/faculty" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Faculty</Link>
        <Link to="/admissions" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Admissions</Link>
        <Link to="/contact" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
