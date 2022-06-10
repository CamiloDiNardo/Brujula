import React from 'react';
import { Link } from 'react-router-dom';
const Cards = ({
  ciudad,
  pais,
  valor,
  max,
  min,
  linkeado,
  imagenes,
  alternativo,
}) => {
  return (
    <div>
      <div className='card'>
        <img className='card__img' src={imagenes} alt={alternativo}></img>
        <h1>
          {ciudad} &#124; {pais}
        </h1>
        <p className='card__p'>
          Desde:<b>{valor}</b>
        </p>
        <img
          className='card__icono'
          src='../../assets/wifi-solid.svg'
          alt='Wifi'></img>
        WIFI &#124;
        <img
          className='card__icono'
          src='../../assets/temperature-half-solid.svg'
          alt='Temperatura'></img>
        Temperatura:
        <b>
          {min}&#124;{max}
        </b>
        <Link to={`/${linkeado}`}>
          <button className='card__button'>
            <span className='Card__span'>VER MAS</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
