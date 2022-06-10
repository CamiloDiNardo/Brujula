import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcono from '../../assets/instagram-square-brands.svg';
import WhatshappIcono from '../../assets/whatsapp-brands.svg';
import FacebookIcono from '../../assets/facebook-brands.svg';
import YoutubeIcon from '../../assets/youtube-brands.svg';
import NormasIram from '../../assets/Normas iram.png';
import DataFiscal from '../../assets/Data fiscal.jpg';
// Fijate de usar hooks para no renderizar el footer con usestate camilo
const Footer = (props) => {
  return (
    <footer>
      <div className='ContenedorFooter'>
        <div className='ContenedorFooter__contenedorIconos'>
          <a
            data-aos='fade-up'
            href='https://wa.me/+5401140220039'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='ContenedorFooter__iconos '
              src={WhatshappIcono}
              alt='Whatshapp'></img>
          </a>
          &#124;
          <a
            data-aos='fade-up'
            href='https://www.facebook.com/Viajes-104631895045967/'
            target='_blank'
            rel='noopener noreferrer'
            className='ContenedorFooter__seguinos'>
            <img
              className='ContenedorFooter__iconos '
              src={FacebookIcono}
              href='https://www.facebook.com/Viajes-104631895045967/'
              alt='Facebook'></img>
            ¡Seguinos en nuestras Redes Sociales!
          </a>
          &#124;
          <a
            data-aos='fade-up'
            href='https://www.instagram.com/mejoresviajesok/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='ContenedorFooter__iconos '
              src={InstagramIcono}
              alt='Instagram'
              href='https://www.instagram.com/mejoresviajesok/'></img>
          </a>{' '}
          &#124;
          <a
            data-aos='fade-up'
            href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='ContenedorFooter__iconos '
              src={YoutubeIcon}
              href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
              alt='Youtube'></img>
          </a>
          &#124;
          <img
            data-aos='fade-up'
            src={NormasIram}
            alt='NormasIram'
            className='ContenedorFooter__iconos'></img>
          &#124;
          <img
            data-aos='fade-up'
            src={DataFiscal}
            alt='DataFiscal'
            className='ContenedorFooter__iconos'></img>
          <p data-aos='fade-up' className='ContenedorFooter__frase'>
            Todos los derechos reservados- Brujula 2022
          </p>
          <Link
            to='/PoliticasDeCookies'
            className='ContenedorFooter__seguinos'
            alt='PoliticaDeCookies'>
            Politica De Cookies
          </Link>{' '}
          &#124;
          <Link
            to='/PoliticasDePrivacidad'
            className='ContenedorFooter__seguinos'
            alt='PoliticaDePrivacidad'>
            Politica De Privacidad
          </Link>{' '}
          &#124;
          <Link
            to='/CondicionesGenerales'
            className='ContenedorFooter__seguinos'
            alt='CondicionesGenerales'>
            Condiciones Generales
          </Link>
        </div>
      </div>
      <div className='ContenedorFooter ContenedorFooter--modificador'>
        <div className='ContenedorFooter__contenedorIconos ContenedorFooter__contenedorIconos--modificador '>
          <a // esta bien poner los 2 footer (normal y responsive sin cerrar la etiqueta footer hasta el final? o deberia cerrarla y abrir una nueva? mm)
            data-aos='fade-up'
            href='https://wa.me/+5401140220039'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='ContenedorFooter__iconos ContenedorFooter__iconos--modificador'
              src={WhatshappIcono}
              alt='Whatshapp'></img>
          </a>{' '}
          &#124;
          <a
            data-aos='fade-up'
            href='https://www.facebook.com/Viajes-104631895045967/'
            target='_blank'
            rel='noopener noreferrer'
            className='ContenedorFooter__seguinos'>
            <img
              className='ContenedorFooter__iconos ContenedorFooter__iconos--modificador '
              src={FacebookIcono}
              href='https://www.facebook.com/Viajes-104631895045967/'
              alt='Facebook'></img>
          </a>{' '}
          &#124;
          <a
            data-aos='fade-up'
            href='https://www.instagram.com/mejoresviajesok/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='ContenedorFooter__iconos ContenedorFooter__iconos--modificador '
              src={InstagramIcono}
              alt='Instagram'
              href='https://www.instagram.com/mejoresviajesok/'></img>
          </a>{' '}
          &#124;
          <a
            data-aos='fade-up'
            href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
            target='_blank'
            rel='noopener noreferrer'>
            <img
              className='ContenedorFooter__iconos ContenedorFooter__iconos--modificador '
              src={YoutubeIcon}
              href='https://www.youtube.com/channel/UCKgGLynM7xJz8Mq999srCsg/'
              alt='Youtube'></img>
          </a>{' '}
          &#124;
          <img
            data-aos='fade-up'
            src={NormasIram}
            alt='NormasIram'
            className='ContenedorFooter__iconos ContenedorFooter__iconos--modificador'></img>{' '}
          &#124;
          <img
            data-aos='fade-up'
            src={DataFiscal}
            alt='DataFiscal'
            className='ContenedorFooter__iconos ContenedorFooter__iconos--modificador'></img>{' '}
          &#124;
          <p
            data-aos='fade-up'
            className='ContenedorFooter__frase ContenedorFooter__frase--modificador'>
            Todos los derechos reservados
          </p>
          <Link
            to='/PoliticasDeCookies'
            className='ContenedorFooter__seguinos ContenedorFooter__seguinos--modificador'
            alt='PoliticaDeCookies'>
            Politica De Cookies
          </Link>
          <Link
            to='/PoliticasDePrivacidad'
            className='ContenedorFooter__seguinos ContenedorFooter__seguinos--modificador'
            alt='PoliticaDePrivacidad'>
            Politica De Privacidad
          </Link>
          <Link
            to='/CondicionesGenerales'
            className='ContenedorFooter__seguinos ContenedorFooter__seguinos--modificador'
            alt='CondicionesGenerales'>
            Condiciones Generales
          </Link>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
