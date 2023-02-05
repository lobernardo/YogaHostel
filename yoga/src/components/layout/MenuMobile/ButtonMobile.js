import React, { useState } from 'react';
import MenuMobile from './MenuMobile';
import styles from './ButtonMobile.module.css'
import btnmobile from '../../assets/btnmobile.jpg'

const ButtonMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <button className={styles.mobile__btn} onClick={() => setOpen(!isOpen)}><img className={styles.logo_menu_mobile} src={btnmobile}/></button>
      {isOpen && <MenuMobile />}
    </header>
  );
};

export default ButtonMobile;