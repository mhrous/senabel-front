import { useContext } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import ProductItem from './ProductItem';
import CartContext from '../context/CartContext';
import ScrollableItems from './ScrollableItems';
import StoreContext from '../context/StoreContext';

const CategoryDetails = ({ category  }) => {
  const { cart } = useContext(CartContext);

  const { store } = useContext(StoreContext);

  return (
    <section
      className={`${styles.paddings} relative z-10 text-white main-container`}
    >
      <ScrollableItems items={(store || {allCategory:[]}).allCategory} />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 0.7)}
        initial="hidden"
        whileInView="show"
        className={`${styles.innerWidth} mx-auto flex flex-col `}
        style={{ direction: 'rtl' }}
      >
        <div className="mt-[50px] grid md:grid-cols-4 grid-cols-2 gap-4">
          {category && category.product &&category.product.map((item, index) => {
            const foundCartItem = cart.find(
              (cartItem) => cartItem.id === item.id,
            );
            const itemQuantity = foundCartItem ? foundCartItem.quantity : 0;

            return (
              <ProductItem
                key={index}
                product={item}
                initialQuantity={itemQuantity}
              />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default CategoryDetails;
