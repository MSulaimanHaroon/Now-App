import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Main Feature <br className="sm:block hidden" /> heading.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi facere veritatis, eius corporis magnam doloribus, repudiandae, libero voluptatum minus cumque necessitatibus quae laborum! Magni qui ea reprehenderit praesentium obcaecati odio.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="animate-spin absolute z-[0] w-[100%] h-[100%] bottom-0 rounded-full blue__gradient" />
    </div>
    
  </section>
);

export default CardDeal;
