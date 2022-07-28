import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import InstagramIcono from '../../assets/instagram-square-brands.svg';
import WhatshappIcono from '../../assets/whatsapp-brands.svg';
import FacebookIcono from '../../assets/facebook-brands.svg';
import YoutubeIcon from '../../assets/youtube-brands.svg';
import NormasIram from '../../assets/Normas iram.png';
import DataFiscal from '../../assets/Data fiscal.jpg';
// el segundo footer tiene que ir con usestate para no mostrarlo.
const Footer = () => {
  return (
    <footer>
      <div className={styles.ContenedorFooter}>
        <div>
          <a
            data-aos='fade-up'
            href='https://wa.me/+5401140220039'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className={styles.ContenedorFooter__iconos}
              src={WhatshappIcono}
              alt='Whatshapp'></img>
          </a>
          &#124; &nbsp;
          <a
            data-aos='fade-up'
            href='https://www.facebook.com/Viajes-104631895045967/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.ContenedorFooter__seguinos}>
            <img
              className={styles.ContenedorFooter__iconos}
              src={FacebookIcono}
              href='https://www.facebook.com/Viajes-104631895045967/'
              alt='Facebook'></img>
            ¡Seguinos en nuestras Redes Sociales!
          </a>
          &nbsp;
          <a
            data-aos='fade-up'
            href='https://www.instagram.com/mejoresviajesok/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className={styles.ContenedorFooter__iconos}
              src={InstagramIcono}
              alt='Instagram'
              href='https://www.instagram.com/mejoresviajesok/'></img>
          </a>
          &#124; &nbsp;
          <a
            data-aos='fade-up'
            href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className={styles.ContenedorFooter__iconos}
              src={YoutubeIcon}
              href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
              alt='Youtube'></img>
          </a>
          &#124; &nbsp;
          <img
            data-aos='fade-up'
            src={NormasIram}
            alt='NormasIram'
            className={styles.ContenedorFooter__iconos}></img>{' '}
          &#124; &nbsp;
          <img
            data-aos='fade-up'
            src={DataFiscal}
            alt='DataFiscal'
            className={styles.ContenedorFooter__iconos}></img>{' '}
          &nbsp;
          <p data-aos='fade-up' className={styles.ContenedorFooter__frase}>
            Todos los derechos reservados - Brujula 2022
          </p>
          <Link
            to='/PoliticasDeCookies'
            className={styles.ContenedorFooter__seguinos}
            alt='PoliticaDeCookies'>
            Politica De Cookies
          </Link>{' '}
          &#124; &nbsp;
          <Link
            to='/PoliticasDePrivacidad'
            className={styles.ContenedorFooter__seguinos}
            alt='PoliticaDePrivacidad'>
            Politica De Privacidad
          </Link>{' '}
          &#124; &nbsp;
          <Link
            to='/CondicionesGenerales'
            className={styles.ContenedorFooter__seguinos}
            alt='CondicionesGenerales'>
            Condiciones Generales
          </Link>
        </div>
      </div>
      <div className={`${styles.ContenedorFooter} ${styles.ContenedorFooter2}`}>
        <div
          className={`${styles.ContenedorFooter__contenedorIconos} ${styles.ContenedorFooter__contenedorIconos2}`}>
          <a // esta bien poner los 2 footer (normal y responsive sin cerrar la etiqueta footer hasta el final? o deberia cerrarla y abrir una nueva? mm)
            data-aos='fade-up'
            href='https://wa.me/+5401140220039'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className={`${styles.ContenedorFooter__iconos} ${styles.ContenedorFooter__iconos2}`}
              src={WhatshappIcono}
              alt='Whatshapp'></img>
          </a>
          &#124; &nbsp;
          <a
            data-aos='fade-up'
            href='https://www.facebook.com/Viajes-104631895045967/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.ContenedorFooter__seguinos}>
            <img
              className={`${styles.ContenedorFooter__iconos} ${styles.ContenedorFooter__iconos2}`}
              src={FacebookIcono}
              href='https://www.facebook.com/Viajes-104631895045967/'
              alt='Facebook'></img>
          </a>
          &#124;
          <a
            data-aos='fade-up'
            href='https://www.instagram.com/mejoresviajesok/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className={`${styles.ContenedorFooter__iconos} ${styles.ContenedorFooter__iconos2}`}
              src={InstagramIcono}
              alt='Instagram'
              href='https://www.instagram.com/mejoresviajesok/'></img>
          </a>
          &#124; &nbsp;
          <a
            data-aos='fade-up'
            href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className={`${styles.ContenedorFooter__iconos} ${styles.ContenedorFooter__iconos2}`}
              src={YoutubeIcon}
              href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
              alt='Youtube'></img>
          </a>
          &#124; &nbsp;
          <img
            data-aos='fade-up'
            src={NormasIram}
            alt='NormasIram'
            className={`${styles.ContenedorFooter__iconos} ${styles.ContenedorFooter__iconos2}`}></img>
          &#124; &nbsp;
          <img
            data-aos='fade-up'
            src={DataFiscal}
            alt='DataFiscal'
            className={`${styles.ContenedorFooter__iconos} ${styles.ContenedorFooter__iconos2}`}></img>{' '}
          &#124; &nbsp;
          <p
            data-aos='fade-up'
            className={`${styles.ContenedorFooter__frase} ${styles.ContenedorFooter__frase2}`}>
            Todos los derechos reservados
          </p>
          <Link
            to='/PoliticasDeCookies'
            className={`${styles.ContenedorFooter__seguinos} ${styles.ContenedorFooter__seguinos2}`}
            alt='PoliticaDeCookies'>
            Politica De Cookies
          </Link>
          <Link
            to='/PoliticasDePrivacidad'
            className={`${styles.ContenedorFooter__seguinos} ${styles.ContenedorFooter__seguinos2}`}
            alt='PoliticaDePrivacidad'>
            Politica De Privacidad
          </Link>
          <Link
            to='/CondicionesGenerales'
            className={`${styles.ContenedorFooter__seguinos} ${styles.ContenedorFooter__seguinos2}`}
            alt='CondicionesGenerales'>
            Condiciones Generales
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
