import React, { useState } from 'react';
import './CartelCookies.css';
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
    <div>
      {condicion1 &&
        Rechazar && ( // FUNCIONO PONER 2 USEESTATE EN EL MISMO {} RECHAZAR HACE QUE TODO SE BORRE AL CLICKEAR EL BOTON! Y LO HICE SOLITO PA Y CONDICION1 SE ENCARGA DE ACEPTAR LAS COOKIES
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
              id='BannerContenedor__Botonaceptar'>
              <span className='Card__span' onClick={Desapareciendo}>
                De acuerdo
              </span>
            </button>
            <button
              className='card__button card__button--vertodos '
              id='BannerContenedor__Botonrechazar'>
              <span className='Card__span' onClick={() => SetRechazar(false)}>
                Rechazar{' '}
              </span>
            </button>
          </div>
        )}
    </div>
  );
};

CartelCookies.propTypes = {};

export default CartelCookies;
