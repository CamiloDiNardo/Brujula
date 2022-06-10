import React from 'react';
import DatosInfoCards from '../../InfoCards.json';
import { InfoCards } from '../../componentes';

const MapInfoCards = (props) => {
  return (
    <div>
      <h1 className='Titulo' data-aos='fade-up'>
        Caracteristicas
      </h1>
      <ul data-aos='fade-up'></ul>
      {DatosInfoCards.map(
        (
          {
            clima,
            excursiones,
            servicios,
            temporada,
            monedas,
            prohibido,
            info,
          },
          index // ponemos todos los valores del json. y el index afuera q es el 0,1,2etc.
        ) => (
          <InfoCards
            clima={clima}
            excursiones={excursiones}
            servicios={servicios}
            temporada={temporada}
            monedas={monedas}
            prohibido={prohibido}
            info={info}
            key={index}
          />
        )
      )}
    </div>
  );
};

MapInfoCards.propTypes = {};

export default MapInfoCards;
