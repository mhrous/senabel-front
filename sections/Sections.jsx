import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText } from '../components';

const Sections = ({sectionList}) => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col pb-16 `}
      style={{ direction: 'rtl' }}
    >
      <h1 className="text-center py-12 text-yellow-400 text-[20px]">
        إبدأ بالتسوق
      </h1>
      <TitleText title={<>أقسامنا الرئيسية</>} textStyles="text-center" />
      <div className="sm:mt-[40px] mt-[15px] grid md:grid-cols-3 grid-cols-1 md:gap-[30px] gap-[30px]">
        {sectionList.map((item, index) => (
          <InsightCard type={'section'} key={`insight-${item.id}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Sections;
