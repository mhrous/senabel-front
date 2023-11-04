import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styles from '../styles';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faStore } from '@fortawesome/free-solid-svg-icons';
import Topsesh from '../sections/Topsesh';
import StoreContext from '../context/StoreContext';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const { store } = useContext(StoreContext);

  const router = useRouter();
  const isHomePage = router.pathname === '/';

  const handleScroll = () => {
    if (hamburgerOpen) {
      return;
    }

    const currentScrollPosition = window.pageYOffset;
    const atTop = currentScrollPosition <= 0;

    setShowNavbar(atTop);
    setLastScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition, hamburgerOpen]);

  return (
    <motion.nav
      className={`${
        styles.xPaddings
      } py-8 fixed md:top-9 top-12  xl:left-0 w-full z-10 ${
        !showNavbar && 'hidden'
      }`}
      style={{ zIndex: 2000 }}
    >
      <button
        className="md:hidden p-2 fixed top-12 right-6 z-30 text-2xl"
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
        type="button"
      >
        <FontAwesomeIcon
          icon={hamburgerOpen ? faTimes : faBars}
          className=" text-yellow-500"
        />
      </button>

      {isHomePage && (
        <Link href="/menu">
          <h1 className="absolute md:p-3 p-1 rounded-lg bg-yellow-500 hover:bg-yellow-600 ml-auto md:right-20  md:top-12 top-2 rocking-animation">
            <FontAwesomeIcon
              icon={faStore}
              className="text-white md:text-5xl text-2xl"
            />
          </h1>
        </Link>
      )}

      <div className="flex justify-center items-center w-full mx-auto xl:pr-1">
        {/* Logo */}
        <div className="absolute left-[50%] transform -translate-x-1/2 md:top-[50%] top-[30%] -translate-y-1/2">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="xl:w-[125px] w-[90px] h-auto object-contain logo-rotate"
            />
          </Link>
        </div>
        <div className="hidden md:flex justify-center pt-8 w-full font-extrabold text-lg xl:text-[24px] leading-[30px] text-white">
          <div className=" flex lg:pr-28 pr-12">
            <Link
              href="/contact"
              className="text-white font-extrabold text-lg xl:text-[24px] no-underline"
            >
              <h1 className="px-4 cursor-pointer font-extrabold text-lg xl:text-[24px] hover:text-yellow-500 text-decoration-none no-underline">
                تواصل معنا
              </h1>
            </Link>
            <Link
              href="/#about-section"
              className="text-white font-extrabold text-lg xl:text-[24px] no-underline"
            >
              <h1 className="px-4  cursor-pointer text-lg xl:text-[24px] font-extrabold hover:text-yellow-500 text-decoration-none no-underline">
                نبذة عنا
              </h1>
            </Link>


            <Link
              href={`/section/${store.allSections[0].id}`}
              className="text-white font-extrabold text-lg xl:text-[24px] no-underline"
            >
              <h1 className="px-4  cursor-pointer text-lg xl:text-[24px] font-extrabold hover:text-yellow-500 text-decoration-none no-underline">
                {store.allSections[0].name.replace('قسم','').trim()}
              </h1>
            </Link>
          </div>

          <div className=" flex lg:pl-28 pl-12">
            <Link
              href={`/section/${store.allSections[1].id}`}
              className="text-white font-extrabold text-lg xl:text-[24px] no-underline"
            >
              <h1 className="px-4 cursor-pointer font-extrabold text-lg xl:text-[24px] hover:text-yellow-500 text-decoration-none no-underline">
                {store.allSections[1].name.replace('قسم','').trim()}
              </h1>
            </Link>
            <Link
              href={`/section/${store.allSections[2].id}`}
              className="text-white font-extrabold text-lg xl:text-[24px] no-underline"
            >
              <h1 className="px-4 cursor-pointer font-extrabold text-lg xl:text-[24px] hover:text-yellow-500 text-decoration-none no-underline">
                {store.allSections[2].name.replace('قسم','').trim()}

              </h1>
            </Link>
            <Link
              href="/"
              className=" text-white font-extrabold text-lg xl:text-[24px] no-underline"
            >
              <h1 className="px-4  cursor-pointer font-extrabold text-lg xl:text-[24px] hover:text-yellow-500 text-decoration-none no-underline">
                الرئيسية
              </h1>
            </Link>
          </div>
        </div>

        {hamburgerOpen && (
          <motion.div
            className="md:hidden bg-primary-black fixed top-0 left-0 w-full h-auto z-20 p-4 overflow-y-auto"
            style={{
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
              maxHeight: '60vh',
            }} // 80vh is 80% of the viewport height. Adjust this to your needs.
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className="flex flex-col items-center space-y-8 py-14">
              <Topsesh />
              <Link
                href="/"
                className=" text-white font-bold text-[20px] no-underline"
              >
                <div className="relative px-20">
                  <h1
                    className="text-white font-bold text-[20px] no-underline hover:text-yellow-500 pb-4"
                    onClick={() => setHamburgerOpen(false)}
                  >
                    الرئيسية
                  </h1>
                  <span className="block w-full h-[1px] bg-secondary-white opacity-60 absolute bottom-0 left-0" />
                </div>
              </Link>

              {store.allSections.map(section=>(
                <Link
                  key={section.id}
                  href={`/section/${section.id}`}
                  className=" text-white font-bold text-[20px] no-underline"
                >
                  <div className="relative px-20">
                    <h1
                      className="text-white font-bold text-[20px] no-underline hover:text-yellow-500 pb-4"
                      onClick={() => setHamburgerOpen(false)}
                    >
                      {section.name.replace('قسم','').trim()}
                    </h1>
                    <span className="block w-full h-[1px] bg-secondary-white opacity-60 absolute bottom-0 left-0" />
                  </div>
                </Link>
              ))}
              <Link
                href="/#about-section"
                className=" text-white font-bold text-[20px] no-underline"
              >
                <div className="relative px-20">
                  <h1
                    className="text-white font-bold text-[20px] no-underline hover:text-yellow-500 pb-4"
                    onClick={() => setHamburgerOpen(false)}
                  >
                    نبذة عنا
                  </h1>
                  <span className="block w-full h-[1px] bg-secondary-white opacity-60 absolute bottom-0 left-0" />
                </div>
              </Link>

              <Link
                href="/contact"
                className=" text-white font-bold text-[20px] no-underline"
              >
                <div className="relative px-16">
                  <h1
                    className="text-white font-bold text-[20px] no-underline hover:text-yellow-500 pb-4"
                    onClick={() => setHamburgerOpen(false)}
                  >
                    تواصل معنا
                  </h1>
                  <span className="block w-full h-[1px] bg-secondary-white opacity-60 absolute bottom-0 left-0" />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
