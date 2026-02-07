import FacultyGrid from '../components/sections/FacultyGrid';
import ResearchPortfolio from '../components/sections/ResearchPortfolio';
import AdvisoryBoard from '../components/sections/AdvisoryBoard';

const Faculty = () => {
  return (
    <div className="animate-fade-in pt-32">
      <FacultyGrid />
      <ResearchPortfolio />
      <AdvisoryBoard />
    </div>
  );
};

export default Faculty;
