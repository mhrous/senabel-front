import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText } from '../components';

const FoodInsights = ({ section }) => {
  return (
    <section
      className={`${styles.paddings} relative z-10 my-40 main-container`}
    >
      {section && (
        <motion.div
          key={section.id}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className={`${styles.innerWidth} mx-auto flex flex-col `}
          style={{ direction: 'rtl' }}
        >
          <h1 className="text-center py-8 text-yellow-400 text-[20px]">
            إبدأ بالتسوق
          </h1>
          <TitleText title={section.name} textStyles="text-center" />
          <div className="mt-[90px] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3  md:gap-16 gap-4">
            {section && section.category &&section.category.map((item, index) => (
                <InsightCard
                  type={'category'}
                  key={`insight-${item.id}`}
                  {...item}
                  index={index + 1}
                />
              )
            )}
          </div>
        </motion.div>
      )}

    </section>
  );
};

export default FoodInsights;
