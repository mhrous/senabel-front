import Navbar from '../../components/Navbar';
import CategoryDetails from '../../components/CategoryDetails';
import Loading from '../../components/Loading';
import { useContext, useEffect, useState } from 'react';
import StoreContext from '../../context/StoreContext';
import { useParams } from 'next/navigation'

const ProductPage = () => {
  const params = useParams()

  const [category,setCategory]= useState({})
  const { store } = useContext(StoreContext);

  useEffect(()=>{
    if(!store) return;
    const selectCategory= store.allCategory.find(item=>item.id===params.id)
    setCategory(selectCategory)

  },[params,store])
 return (
    <Loading>
      <div className='bg-primary-black overflow-hidden'>
        <Navbar />
        <div className='relative'>
          <CategoryDetails category={category}  />
          <div className='gradient-15 z-0' />
        </div>
      </div>
    </Loading>
  );
}


export default ProductPage;
