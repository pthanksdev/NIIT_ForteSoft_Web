import { GraduationCap, Globe, Users, Award } from 'lucide-react';

const HomeStats = () => {
  const stats = [
    { label: 'Graduates', value: '5,000+', icon: GraduationCap },
    { label: 'Partners', value: '50+', icon: Globe },
    { label: 'Expert Mentors', value: '120+', icon: Users },
    { label: 'Placement Rate', value: '94%', icon: Award }
  ];

  return (
    <section className="py-12 bg-white/2 overflow-hidden border-y border-white/5">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="text-accent mb-2 flex justify-center group-hover:scale-110 transition-transform">
              <stat.icon size={28} />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-text-secondary text-xs uppercase tracking-widest font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStats;
