import React from 'react';
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
      <h1 className='Titulo'>{titulo}</h1>
      <p className='FlotaContenedor__p'>
        <img className='FlotaContenedor__img' src={avion} alt={texto}></img>
        -Asientos: {asientos} <br />
        -Largo: {largo} <br />
        -Envergadura: {envergadura}
        <br />
        -Alcance: {alcance}
        <br />
        -Cantidad: {cantidad}
      </p>
      <hr color='#9e0303'></hr>
    </div>
  );
};
export default FlotaCaracteristicas;
