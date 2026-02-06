import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, level, duration, fee, image, tag }) => {
  return (
    <div className="glass hover-scale hover-glow" style={{ 
      padding: '0', 
      overflow: 'hidden',
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      transition: 'var(--transition)'
    }}>
      <div style={{ 
        height: '200px', 
        width: '100%', 
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '1rem', 
          right: '1rem',
          fontSize: '0.7rem', 
          background: 'rgba(0, 0, 0, 0.6)', 
          backdropFilter: 'blur(4px)',
          color: 'var(--accent-color)',
          padding: '0.3rem 0.8rem',
          borderRadius: '20px',
          fontWeight: 700,
          border: '1px solid var(--accent-color)'
        }}>{tag}</div>
      </div>
      
      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{title}</h3>
        <div style={{ flexGrow: 1, color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          <p style={{ marginBottom: '0.3rem' }}>📊 <b>Level:</b> {level}</p>
          <p style={{ marginBottom: '0.3rem' }}>⏱️ <b>Duration:</b> {duration}</p>
          <p>💰 <b>Tuition:</b> {fee}</p>
        </div>
        <Link to={`/courses/${id}`} className="btn-primary" style={{ 
          textAlign: 'center', 
          padding: '0.6rem',
          fontSize: '0.9rem'
        }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
