import React from 'react';
import { Carrousell3D } from '../../componentes';
import '../InfoCards/InfoCards.css';
import PropTypes from 'prop-types';
const InfoCards = ({
  // Para sacar la info de las cards 1 x 1, no hacemos map, xq el map recorre todo, y hacerlo con slice no se si se puede, y consume muchos recursos.
  nombre, // En Nombre estan Todas Las Ciudades. No la wea turistica en si (torre eiffel etc.)
  clima,
  excursiones,
  servicios,
  temporada,
  monedas,
  prohibido,
  info,
  // eslint-disable-next-line react/prop-types
  texto,
  // eslint-disable-next-line react/prop-types
  imagenes,
}) => {
  return (
    <div>
      <h1 className='Titulo'>
        {
          nombre.replace(
            /([A-Z])/g,
            ' $1'
          ) /* Con estas 2 lineas de codigo, hacemos que el titulo que esta antes del carrousell muestre el nombre del json segun el path. si el path es /Calafate, va a aparecer CALAFATE (creo q eso es lo q hace kta en esas lineas de codigo) */
        }
      </h1>
      <Carrousell3D texto={texto} imagenes={imagenes} nombre={nombre} />
      <h1 className='Titulo' style={{ marginTop: '13rem' }}>
        Caracteristicas
      </h1>
      <br />
      <li className='Lista'>
        <b>Clima: </b> &nbsp;
        {clima}
      </li>
      <br />
      <li className='Lista'>
        <b>Excursiones Recomendadas:</b> &nbsp;
        {excursiones}
      </li>
      <br />
      <li className='Lista'>
        <b>Servicios:</b> &nbsp;
        {servicios}
      </li>
      <br />
      <li className='Lista'>
        <b>Temporada Turistica:</b> &nbsp;
        {temporada}
      </li>
      <br />
      <li className='Lista'>
        <b> Monedas Admitidas:</b> &nbsp;
        {monedas}
      </li>
      <br />
      <li className='Lista'>
        <b> Prohibido:</b> &nbsp;
        {prohibido}
      </li>
      <br />
      <p className='Lista'>{info}</p>
    </div>
  );
};
InfoCards.propTypes = {
  nombre: PropTypes.string.isRequired,
  clima: PropTypes.string.isRequired,
  excursiones: PropTypes.string.isRequired,
  servicios: PropTypes.string.isRequired,
  temporada: PropTypes.string.isRequired,
  monedas: PropTypes.string.isRequired,
  prohibido: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  // texto: PropTypes.string.isRequired al estar indefinido no se puede poner como requerido por eso no lo pongo.,
  // imagenes: PropTypes.string.isRequired,
};

export default InfoCards;
