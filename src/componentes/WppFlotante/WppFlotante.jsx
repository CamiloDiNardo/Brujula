import React from 'react';
import styles from './WppFlotante.module.css';
import Whatshapp from '../../assets/whatsapp-brands.svg';
const WppFlotante = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=+5401140220039&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Brujula.'
      className={styles.WhatshappFlotante}
      target='_blank'
      rel='noopener noreferrer'
      data-aos='fade-up'>
      <img
        className={styles.WhatshappFlotante__svg}
        src={Whatshapp}
        alt='Whatshapp'></img>
    </a>
  );
};
export default WppFlotante;
