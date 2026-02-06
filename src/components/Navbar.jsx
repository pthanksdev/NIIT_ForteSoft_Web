import { Link } from 'react-router-dom';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Admissions', path: '/admissions' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 glass px-6 py-4 flex justify-between items-center animate-fade-in">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-accent p-1.5 rounded-lg">
          <Shield className="text-primary-bg" size={24} />
        </div>
        <span className="font-extrabold text-xl tracking-tighter">
          NIIT <span className="text-accent">FORTRESS</span>
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link to="/contact">
          <Button variant="primary" className="py-2 px-5 text-sm" icon={ChevronRight}>
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass p-4 flex flex-col gap-4 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-lg font-medium py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
