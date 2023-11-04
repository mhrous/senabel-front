import { Footer, Navbar, SocialIcons } from '../components';
import React, { useState, useEffect, useContext } from 'react';
import { About, Explore, Hero, Sections, World } from '../sections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Loading from '../components/Loading';
import StoreContext from '../context/StoreContext';

const Home = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const { store } = useContext(StoreContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Loading>
      <div className='bg-primary-black overflow-hidden'>
        <Navbar />
        <Hero />

        <div className='relative'>
          <About />

          <div className='hidden md:block gradient-03 z-0' />
          <Explore />
        </div>

        <SocialIcons />
        <div className='relative'>
          <Sections sectionList={(store || {}).allSections} />
          <div className='gradient-04 z-0' />
        </div>

        <World />

        <Footer />

        {!isAtTop && (
          <button
            className='fixed bottom-6 iinfo text-yellow-500 font-extrabold text-3xl p-4 rounded-full rocking-animation z-50'
            onClick={handleScrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </div>
    </Loading>
  );
};


export default Home;
