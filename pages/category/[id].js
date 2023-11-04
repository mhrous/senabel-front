import Navbar from '../../components/Navbar';
import CategoryDetails from '../../components/CategoryDetails';
import Loading from '../../components/Loading';
import { useContext, useEffect, useState } from 'react';
import StoreContext from '../../context/StoreContext';


const ProductPage = ({ id }) => {
  const [category,setCategory]= useState({})
  const { store } = useContext(StoreContext);

  useEffect(()=>{
    if(!store) return;
    const selectCategory= store.allCategory.find(item=>item.id===id)
    setCategory(selectCategory)

  },[id,store])
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

export async function getServerSideProps({ params }) {

  return { props: { id:params.id} };
}


export default ProductPage;
