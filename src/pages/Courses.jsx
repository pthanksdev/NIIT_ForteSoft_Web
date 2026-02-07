import CoursesHero from '../components/sections/CoursesHero';
import CoursesGrid from '../components/sections/CoursesGrid';
import FAQ from '../components/sections/FAQ';

const Courses = () => {
  return (
    <div className="animate-fade-in pt-32">
      <CoursesHero />
      <CoursesGrid />
      <FAQ />
    </div>
  );
};

export default Courses;
