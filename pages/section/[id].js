import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react';

import { FoodInsights } from '../../sections';
import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import StoreContext from '../../context/StoreContext';
import { useParams } from 'next/navigation';

const SectionPage = () => {
  const params = useParams()

  const [section,setSection]= useState({})
  const { store } = useContext(StoreContext);

  useEffect(()=>{
    if(!store) return;
    const selectSection = store.allSections.find(item=>item.id===params.id)
    setSection(selectSection)

  },[params,store])

  return (
    <Loading>
      <div className='bg-primary-black overflow-hidden'>
        <Navbar />
        <div className='relative'>
          <FoodInsights section={section} />

          <div className='gradient-15 z-0' />
        </div>
      </div>
    </Loading>
  );
};



export default SectionPage;
