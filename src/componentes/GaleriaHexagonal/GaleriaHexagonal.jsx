import React from 'react';
// si bien puedo hacerlo con un json decidi hacerlo de esta manera mas basica para practicar y ahorrar algo de tiempo
import styles from './GaleriaHexagonal.module.css';
import Hotel1 from '../../assets/hotel complejo abierto-2400x1800.jpg';
import Hotel2 from '../../assets/hotel dubai-554x364.jpg';
import Hotel3 from '../../assets/hotel lujo español-1000x696.jpg';
import Hotel4 from '../../assets/hotel lujoso con lamborgini-550x366.jpg';
import Hotel5 from '../../assets/hotelbello-1600x1200.jpg';
import Hotel6 from '../../assets/hoteles-originales-en-españa.jpg';
import Hotel7 from '../../assets/hotel lujoso orlando.jpg';
const GaleriaHexagonal = () => {
  return (
    <div>
      <br />
      <br />
      <div className={styles.GaleriaHexagonalContenedor} data-aos='fade-up'>
        <div
          className={`${styles.GaleriaHexagonal__div} ${styles.GaleriaHexagonal__div2}`}>
          <img
            src={Hotel1}
            alt='ImgHexagonal'
            className={styles.GaleriaHexagonal__img}></img>
        </div>
        <div
          className={`${styles.GaleriaHexagonal__div} ${styles.GaleriaHexagonal__div2}`}>
          <img
            src={Hotel2}
            alt='ImgHexagonal'
            className={styles.GaleriaHexagonal__img}></img>
        </div>
        <div
          className={`${styles.GaleriaHexagonal__div} ${styles.GaleriaHexagonal__div2}`}>
          <img
            src={Hotel3}
            alt='ImgHexagonal'
            className={styles.GaleriaHexagonal__img}></img>
        </div>
        <div className={styles.GaleriaHexagonal__div}>
          <img
            src={Hotel4}
            alt='ImgHexagonal'
            className={styles.GaleriaHexagonal__img}></img>
        </div>
        <div className={styles.GaleriaHexagonal__div}>
          <img
            src={Hotel5}
            alt='ImgHexagonal'
            className={styles.GaleriaHexagonal__img}></img>
        </div>
        <div className={styles.GaleriaHexagonal__div}>
          <img
            src={Hotel6}
            alt='ImgHexagonal'
            className={styles.GaleriaHexagonal__img}></img>
        </div>
        <div className={styles.GaleriaHexagonal__div}>
          <img
            src={Hotel7}
            alt='ImgHexagonal'
            className={styles.GaleriaHexagonal__img}></img>
        </div>
      </div>
      <br />
      <br />
      <hr color='#9e0303'></hr>
    </div>
  );
};
export default GaleriaHexagonal;
