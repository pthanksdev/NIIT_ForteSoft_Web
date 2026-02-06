import BlogHero from '../components/sections/BlogHero';
import BlogGrid from '../components/sections/BlogGrid';
import Newsletter from '../components/sections/Newsletter';

const Blog = () => {
  return (
    <div className="animate-fade-in pt-32">
      <BlogHero />
      <BlogGrid />
      <Newsletter text="Join our newsletter to receive the latest blog updates and technical insights." />
    </div>
  );
};

export default Blog;
