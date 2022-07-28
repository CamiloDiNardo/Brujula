import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Temperatura from '../../assets/temperature-half-solid.svg';
import Wifi from '../../assets/wifi-solid.svg';
import styles from './Cards.module.css';
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
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={require(`../../${imagenes}`)} // como podria hacerlo sin el require ?
        alt={alternativo}></img>
      <h1>
        {ciudad} &#124; {pais}
      </h1>
      <p className={styles.card__p}>
        Desde:<b>{valor}</b>
      </p>
      <img className={styles.card__icono} src={Temperatura} alt='Wifi'></img>
      WIFI &#124;
      <img className={styles.card__icono} src={Wifi} alt='Temperatura'></img>
      Temperatura:
      <b>
        {min}&#124;{max}
      </b>
      <Link to={linkeado}>
        <button className={styles.card__button}>
          <span className={styles.card__span}>VER MAS</span>
        </button>
      </Link>
    </div>
  );
};
Cards.propTypes = {
  ciudad: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  linkeado: PropTypes.string.isRequired,
  imagenes: PropTypes.string.isRequired,
  alternativo: PropTypes.string.isRequired,
};
export default Cards;
