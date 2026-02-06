import { Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary-bg pt-20 pb-10 border-t border-white/10 mt-20">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="text-accent" size={24} />
            <span className="font-extrabold text-xl">NIIT FORTRESS</span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed mb-6">
            Building the next generation of global tech leaders through immersive, industry-verified computer science education.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 glass hover:text-accent transition-all"><Twitter size={18} /></a>
            <a href="#" className="p-2 glass hover:text-accent transition-all"><Github size={18} /></a>
            <a href="#" className="p-2 glass hover:text-accent transition-all"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-white">Programs</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li><Link to="/courses" className="hover:text-accent transition-colors">Computer Science</Link></li>
            <li><Link to="/courses" className="hover:text-accent transition-colors">Cybersecurity</Link></li>
            <li><Link to="/courses" className="hover:text-accent transition-colors">AI & Robotics</Link></li>
            <li><Link to="/courses" className="hover:text-accent transition-colors">Software Engineering</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-6 text-white">Resources</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>

            <li><Link to="/contact" className="hover:text-accent transition-colors">Student Support</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">Partner With Us</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-bold mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-sm text-text-secondary">
            <li className="flex items-center gap-3"><Mail size={16} className="text-accent" /> info@niitfortress.com</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-accent" /> +234 800 123 4567</li>
            <li className="flex items-start gap-3"><MapPin size={16} className="text-accent mt-1" /> 123 Tech Avenue, Hub City</li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-white/5 text-center text-xs text-text-secondary opacity-60">
        © {new Date().getFullYear()} NIIT Digital Fortress. Built for the future of tech.
      </div>
    </footer>
  );
};

export default Footer;
