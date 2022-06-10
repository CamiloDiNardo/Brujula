import React from 'react';
import DatosCarrousell3D from '../../Carrousell3D.json';
import { Carrousell3D } from '../../componentes';
const MapCarrousell3D = () => {
  return (
    <div>
      <h1 className='Titulo' data-aos='fade-up'>
        Acropolis de Atenas
      </h1>
      <div className='Carrousel3DContenedor'>
        <div className='Carrousel3DContenedor__div'></div>
      </div>
      {DatosCarrousell3D.map(({ imagenes, texto }, index) => (
        <Carrousell3D imagenes={imagenes} texto={texto} key={index} />
      ))}
    </div>
  );
};
export default MapCarrousell3D;
