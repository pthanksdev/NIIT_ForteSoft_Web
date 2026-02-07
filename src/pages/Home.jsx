import HomeHero from '../components/sections/HomeHero';
import HomeStats from '../components/sections/HomeStats';
import HomeFeatures from '../components/sections/HomeFeatures';
import HomeWorkshops from '../components/sections/HomeWorkshops';
import HomePartners from '../components/sections/HomePartners';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeWorkshops />
      <HomePartners />
      <Newsletter text="Join our newsletter to receive the latest updates on research, blog posts, and upcoming technical workshops." />
    </div>
  );
};

export default Home;
