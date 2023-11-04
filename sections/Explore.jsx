'use client';

import { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard } from '../components';
import StoreContext from '../context/StoreContext';

const Explore = () => {
  const [active, setActive] = useState('');
  const { store } = useContext(StoreContext);

  useEffect(()=>{
    if(store.showInMainPage){
      setActive(store.showInMainPage[store.showInMainPage.length -1].id)
    }
  },[store])


  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <h1 className="text-center py-12 text-yellow-400 text-[20px]">
          تعرف على منتجاتنا
        </h1>

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[90vh] gap-5">
          {store.showInMainPage.map((item, index) => (
            <ExploreCard
              key={item.id}
              {...item}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
