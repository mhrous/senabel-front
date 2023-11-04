import Navbar from '../../components/Navbar';
import { useEffect,useState } from 'react';

import { FoodInsights } from '../../sections';
import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import StoreContext from '../../context/StoreContext';

const SectionPage = ({ id }) => {
  const [section,setSection]= useState({})
  const { store } = useContext(StoreContext);

  useEffect(()=>{
    if(!store) return;
    const selectSection = store.allSections.find(item=>item.id===id)
    setSection(selectSection)

  },[id,store])

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


export async function getServerSideProps({ params }) {
  return { props: { id:params.id } };
}

export default SectionPage;
