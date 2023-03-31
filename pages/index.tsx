import type { NextPage } from 'next';
import Description from './components/Description';
import Projects from './components/Projects';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-between text-base mt-20">
        <Description />
        <Projects />
      </div>
      <Footer />
    </>
  );
};

export default Home;
