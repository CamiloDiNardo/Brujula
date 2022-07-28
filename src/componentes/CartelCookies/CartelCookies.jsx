import React, { useState } from 'react';
import styles from './CartelCookies.module.css';
import { FondoCookies } from '../../componentes';
import Cookie from '../../assets/cookie-bite-solid.svg';
const CartelCookies = () => {
  const dataLayer = [];
  const [, SetDesaparecer] = useState(true);
  const [Rechazar, SetRechazar] = useState(true);
  const condicion1 =
    !localStorage.getItem('cookies-aceptadas') &&
    dataLayer.push({ event: 'cookies-aceptadas' });
  const Desapareciendo = () => {
    localStorage.setItem('cookies-aceptadas', true);
    dataLayer.push({ event: 'cookies-aceptadas' });
    SetDesaparecer(false);
  };
  return (
    <>
      {condicion1 && // EL FONDOCOOKIES va FUERA del cartel de cookies. x eso antes tapaba el cartel xq al estar por dentro, estaba por encima
        Rechazar && ( // FUNCIONO PONER 2 USEESTATE EN EL MISMO {} RECHAZAR HACE QUE TODO SE BORRE AL CLICKEAR EL BOTON! Y LO HICE SOLITO PA Y CONDICION1 SE ENCARGA DE ACEPTAR LAS COOKIES
          <>
            <FondoCookies />
            <div className={styles.BannerContenedor} id='BannerContenedor'>
              <img
                className={styles.BannerContenedor__img}
                src={Cookie}
                alt='Cookie'></img>
              <h3 className={styles.Titulo}>Cookies</h3>
              <p className={styles.card__p}>
                Utilizamos cookies propias y de terceros para mejorar nuestros
                servicios.
              </p>
              <button
                className={`${styles.card__button} ${styles.card__button2}`}
                id='BannerContenedor__Botonaceptar'
                onClick={Desapareciendo}>
                <span className={styles.Card__span}>De acuerdo</span>
              </button>
              <button
                className={`${styles.card__button} ${styles.card__button2}`}
                id='BannerContenedor__Botonrechazar'
                onClick={() => SetRechazar(false)}>
                <span className={styles.Card__span}>Rechazar</span>
              </button>
            </div>
          </>
        )}
    </>
  );
};
export default CartelCookies;
