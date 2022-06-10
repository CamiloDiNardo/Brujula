import React from 'react';
import './CartelCookies.css';
import Cookie from '../../assets/cookie-bite-solid.svg';
const CartelCookies = () => {
  const dataLayer = [];
  // eslint-disable-next-line no-undef
  const [, SetDesaparecer] = useState(true);
  const condicion1 =
    !localStorage.getItem('cookies-aceptadas') &&
    dataLayer.push({ event: 'cookies-aceptadas' });
  const Desapareciendo = () => {
    localStorage.setItem('cookies-aceptadas', true);
    dataLayer.push({ event: 'cookies-aceptadas' });
    SetDesaparecer(false);
  };
  const SinCookies = () => {
    SetDesaparecer(false);
  };
  return (
    <div>
      {condicion1 && (
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
            <span className='Card__span'>
              De acuerdo onClick={Desapareciendo}
            </span>
          </button>
          <button
            className='card__button card__button--vertodos '
            id='BannerContenedor__Botonrechazar'>
            <span className='Card__span'>Rechazar onClick={SinCookies}</span>
          </button>
        </div>
      )}
    </div>
  );
};

CartelCookies.propTypes = {};

export default CartelCookies;
