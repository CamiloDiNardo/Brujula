import React from 'react';
import DatosCards from '../../Cards.json';
import { Cards } from '../../componentes';
const MapCards = () => {
  const NuevosDatos = DatosCards.slice(3, 9); // ponete en la posicion 3 del array y elimina 6 elementos
  // console.log(DatosCards, 'cards que quedaron');
  // console.log(NuevosDatos, 'Estos son los nuevos datos');
  return (
    <div>
      <h1 className='Titulo Titulo--modificador' data-aos='fade-up'>
        Destinos Destacados
      </h1>
      <div className='contenedorcards' data-aos='fade-up'>
        {NuevosDatos.map(
          // Mapeamos el array modificado con slice
          // si hay datos en Objetos , entonces se hace el map. x eso se usa Objetos &&
          (
            { ciudad, pais, valor, max, min, linkeado, imagenes, alternativo },
            index // ponemos todos los valores del json. y el index afuera q es el 0,1,2etc.
          ) => (
            <Cards // para que se hace esta parte?
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
    </div>
  );
};
export default MapCards;
