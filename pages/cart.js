import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

import { CartPage } from '../components';

const Cart = () => (
  <Loading>
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <div className='relative'>
        <CartPage />
        <div className='gradient-15 z-0' />
      </div>
    </div>
  </Loading>
);

export default Cart;
