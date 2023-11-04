import { useContext } from 'react';
import StoreContext from '../context/StoreContext';

const Loading = ({ children } ) => {
  const { store } = useContext(StoreContext);
  return !store? <div>loading ...</div> :<>{children}</>;
}

export default Loading;
