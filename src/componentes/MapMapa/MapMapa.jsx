import React from 'react';
import DataMapa from '../../Mapa.json';
import { Mapa } from '../../componentes';
// Como Mapeo muchas veces en un mismo lugar? como lo paso una ves mapeado?
const MapMapa = (props) => {
  return (
    <div className='ContenedorMaps' data-aos='fade-up'>
      {DataMapa.map(
        (
          { titulo, mapa },
          index // ponemos todos los valores del json. y el index afuera q es el 0,1,2etc.
        ) => (
          <Mapa titulo={titulo} mapa={mapa} key={index} />
        )
      )}
    </div>
  );
};

export default MapMapa;
