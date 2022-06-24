import React, { useState } from 'react';
import './CartelCookies.css';
import { FondoCookies } from '../../componentes';
import Cookie from '../../assets/cookie-bite-solid.svg';
const CartelCookies = () => {
  const dataLayer = [];
  const [Rechazar, SetRechazar] = useState(true);
  const condicion1 =
    !localStorage.getItem('cookies-aceptadas') &&
    dataLayer.push({ event: 'cookies-aceptadas' });
  const Desapareciendo = () => {
    localStorage.setItem('cookies-aceptadas', true);
    dataLayer.push({ event: 'cookies-aceptadas' });
  };
  return (
    <>
      {condicion1 &&
        Rechazar && ( // FUNCIONO PONER 2 USEESTATE EN EL MISMO {} RECHAZAR HACE QUE TODO SE BORRE AL CLICKEAR EL BOTON! Y LO HICE SOLITO PA Y CONDICION1 SE ENCARGA DE ACEPTAR LAS COOKIES
         <>
         <FondoCookies/>
         <div className='BannerContenedor' id='BannerContenedor'>
            <img
              className='BannerContenedor__img'
              src={Cookie}
              alt='Cookie'></img>
            <h3 className='Titulo'>Cookies</h3>
            <p className='card__p'>
              Utilizamos cookies propias y de terceros para mejorar nuestros
              servicios.
            </p>
            <button
              className='card__button card__button--vertodos '
              id='BannerContenedor__Botonaceptar' onClick={Desapareciendo}>
              <span className='Card__span' >
                De acuerdo
              </span>
            </button>
            <button
              className='card__button card__button--vertodos '
              id='BannerContenedor__Botonrechazar' onClick={() => SetRechazar(false)}>
              <span className='Card__span' >
                Rechazar{' '}
              </span>
            </button>
          </div>
          </>
        )}
    </>
  );
};

CartelCookies.propTypes = {};

export default CartelCookies;
