import { createContext, useState, useEffect } from 'react';
import { getData } from '../services/getData';

const StoreContext = createContext({
  store: null,
});

export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(null);

  useEffect(() => {
    const initStore = async () => {
      const allSections = await getData();
      const allCategory = allSections.map(item => item.category).flat().filter(item=>item.isActive);
      const allProduct = allCategory.map(item => item.product).flat().filter(item=>item.isActive);
      const showInMainPage = allCategory.filter(item=>item.showInMainPage)
      setStore({ allSections, allCategory, allProduct,showInMainPage });
    };
    initStore();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        store,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
