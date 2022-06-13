import React from 'react';
import './CardsVerTodos.css';
import { Link } from 'react-router-dom';
import Temperatura from '../../assets/temperature-half-solid.svg';
import Wifi from '../../assets/wifi-solid.svg';
const CardsVerTodos = ({
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
    <div className='card'>
      <img
        className='card__img'
        src={require(`../../${imagenes}`)}
        alt={alternativo}></img>
      <h1>
        {ciudad} &#124; {pais}{' '}
      </h1>
      <p className='card__p'>
        Desde: <b>{valor}</b>
      </p>
      <img className='card__icono' src={Temperatura} alt='Wifi'></img>
      WIFI &#124;
      <img className='card__icono' src={Wifi} alt='Temperature'></img>
      Temperatura:
      <b>
        {max}&#124;{min}
      </b>
      <Link to={linkeado}>
        <button className='card__button'>
          <span className='Card__span'>VER MAS</span>
        </button>
      </Link>
    </div>
  );
};

CardsVerTodos.propTypes = {};

export default CardsVerTodos;
