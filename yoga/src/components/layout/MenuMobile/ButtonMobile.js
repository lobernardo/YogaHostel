import React, { useState } from 'react';
import MenuMobile from './MenuMobile';
import styles from './ButtonMobile.module.css'
import menu_mob_dois from '../../assets/menu_mob_dois.png'


const ButtonMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <button className={styles.mobile__btn} onClick={() => setOpen(!isOpen)}><img className={styles.logo_menu_mobile} src={menu_mob_dois}/></button>
      {isOpen && <MenuMobile />}
    </header>
  );
};

export default ButtonMobile;