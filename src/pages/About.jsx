import { Section } from '../components/ui';
import AboutHero from '../components/sections/AboutHero';
import VisionValues from '../components/sections/VisionValues';
import HistoryTimeline from '../components/sections/HistoryTimeline';

const About = () => {
  return (
    <div className="animate-fade-in pt-32">
      <Section>
        <AboutHero />
        <VisionValues />
        <HistoryTimeline />
      </Section>
    </div>
  );
};

export default About;
