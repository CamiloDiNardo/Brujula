import React from 'react';
import './FlotaCaracteristicas.css';
import PropTypes from 'prop-types';
const FlotaCaracteristicas = ({
  titulo,
  asientos,
  largo,
  envergadura,
  alcance,
  cantidad,
  texto,
  avion,
}) => {
  return (
    <div>
      <h1 className='Titulo' data-aos='fade-up'>
        {titulo}
      </h1>
      <p className='FlotaContenedor__p' data-aos='fade-up'>
        <img
          className='FlotaContenedor__img'
          data-aos='fade-up'
          src={require(`../../${avion}`)}
          alt={texto}></img>
        -Asientos: {asientos} <br />
        -Largo: {largo} <br />
        -Envergadura: {envergadura}
        <br />
        -Alcance: {alcance}
        <br />
        -Cantidad: {cantidad}
      </p>
      <br />
      <hr color='#9e0303' data-aos='fade-up'></hr>
    </div>
  );
};
FlotaCaracteristicas.propTypes = {
  titulo: PropTypes.string.isRequired,
  asientos: PropTypes.string.isRequired,
  largo: PropTypes.string.isRequired,
  envergadura: PropTypes.string.isRequired,
  alcance: PropTypes.string.isRequired,
  cantidad: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  avion: PropTypes.string.isRequired,
};

export default FlotaCaracteristicas;
