import React from 'react';
import styles from './Preloader.module.css';
import Gift from '../../assets/load-gif.gif';
const Preloader = () => {
  return (
    <div>
      {
        <div className={`${styles.loader} ${styles.desaparecer}`}>
          <img src={Gift} alt='Preloader'></img>
        </div>
      }
    </div>
  );
};

export default Preloader;
