import React from 'react';
import styles from '../style';
import { robot } from '../assets';
import GetStarted from './GetStarted';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ${isArabic ? 'rtl' : 'ltr'}`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ${isArabic ? 'rtl-text' : 'ltr-text'}`}>
            {t("Next")} <br className={`sm:block hidden ${isArabic ? 'rtl-text' : 'ltr-text'}`}/>{" "}
            <span className="text-gradient">{t('Generation')}</span>{" "}
          </h1>
          <div className={`ss:flex hidden ${isArabic ? 'ml-4' : 'mr-4'} mr-0`}>
            <GetStarted />
          </div>
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full ${isArabic ? 'rtl-text' : 'ltr-text'}`}>
          {t("payment-method")}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 ${isArabic ? 'rtl-text' : 'ltr-text'}`}>
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis culpa vel commodi pariatur expedita quae provident dolorem officia quam atque similique, sint quidem rem est, ullam quod aliquam nesciunt alias?
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] " />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
