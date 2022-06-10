import React from 'react';
import DatosCards from '../../Cards.json';
import { Cards } from '../../componentes';
const MapCards = () => {
  return (
    <div>
      <h1 className='Titulo Titulo--modificador' data-aos='fade-up'>
        Destinos Destacados
      </h1>
      <div className='contenedorcards' data-aos='fade-up'></div>
      {DatosCards.map(
        // si hay datos en Objetos , entonces se hace el map. x eso se usa Objetos &&
        (
          { ciudad, pais, valor, max, min, linkeado, imagenes, alternativo },
          index // ponemos todos los valores del json. y el index afuera q es el 0,1,2etc.
        ) => (
          <Cards
            ciudad={ciudad}
            pais={pais}
            valor={valor}
            max={max}
            min={min}
            linkeado={linkeado}
            imagenes={imagenes}
            alternativo={alternativo}
            key={index}
          />
        )
      )}
    </div>
  );
};
export default MapCards;
