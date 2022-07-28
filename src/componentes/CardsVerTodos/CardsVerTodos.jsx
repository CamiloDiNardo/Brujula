import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardsVerTodos.module.css';
import { Link } from 'react-router-dom';
import Temperatura from '../../assets/temperature-half-solid.svg';
import Wifi from '../../assets/wifi-solid.svg';
const CardsVerTodos = ({
  // Tuvimos que hacer una estructura aparte para VerTodos y no pudimos usar la de cards
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
        src={require(`../../${imagenes}`)}
        alt={alternativo}></img>
      <h1>
        {ciudad} &#124; {pais}
      </h1>
      <p className={styles.card__p}>
        Desde: <b>{valor}</b>
      </p>
      <img className={styles.card__icono} src={Temperatura} alt='Wifi'></img>
      WIFI &#124;
      <img className={styles.card__icono} src={Wifi} alt='Temperature'></img>
      Temperatura:
      <b>
        {max}&#124;{min}
      </b>
      <Link to={linkeado}>
        <button className={styles.card__button}>
          <span className={styles.card__span}>VER MAS</span>
        </button>
      </Link>
    </div>
  );
};
CardsVerTodos.propTypes = {
  ciudad: PropTypes.string.isRequired,
  pais: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  linkeado: PropTypes.string.isRequired,
  imagenes: PropTypes.string.isRequired,
  alternativo: PropTypes.string.isRequired,
};
export default CardsVerTodos;
