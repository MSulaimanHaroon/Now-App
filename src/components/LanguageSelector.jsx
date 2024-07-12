import React from 'react';
import i18n from '../i18n';

const LanguageSelector = ({ styles }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className={`m-4 py-3 px-4 font-poppins font-medium text-[16px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={() => changeLanguage('en')}>English</button>
      <button className={`m-2 py-3 px-7 font-poppins font-medium text-[18px] text-white bg-blue-gradient rounded-[10px] outline-none ${styles}`}  onClick={() => changeLanguage('ar')}>عربي</button>
      {/* Add more buttons for additional languages */}
    </div>
  );
};

export default LanguageSelector;
