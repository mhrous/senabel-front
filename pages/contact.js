import { Footer, Navbar } from '../components';
import { ContactPage } from '../components';
import Loading from '../components/Loading';

const contact = () => (
  <Loading>
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <div className='relative'>
        <ContactPage />
        <div className='gradient-15 z-0 lg:block hidden' />
      </div>
      <Footer />
    </div>
  </Loading>
);


export default contact;
