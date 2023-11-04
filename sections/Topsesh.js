import React, { useContext } from 'react';
import Search from '../components/Search';
import StoreContext from '../context/StoreContext';

const Topsesh = () => {

  const { store } = useContext(StoreContext);

  return (
    <div
      className="flex justify-start items-center md:mr-28 mr-11 py-1"
      dir="rtl"
    >
      <Search allProduct={(store|| {allProduct:[]}).allProduct}/>
    </div>
  );
};

export default Topsesh;
