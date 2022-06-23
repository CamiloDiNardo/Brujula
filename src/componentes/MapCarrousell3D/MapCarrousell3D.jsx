import React from 'react';
import DatosCarrousell3D from '../../Carrousell3D.json';
import { Carrousell3D } from '../../componentes';
const MapCarrousell3D = () => {
  console.log(DatosCarrousell3D, 'esto funciona?');
  // como hago muchos slice y los pongo en una estructura de carrousell?
  return (
    // Puedo pasarle un {titulo} a el h1? ese vendria de otro map, seria como anidar maps lol
    <div className='Carrousel3DContenedor'>
      {DatosCarrousell3D.map(
        (
          { imagenes, texto },
          index // Como hago maps de muchos carrouselles en 1 solo? xq hacer muchos maps no seria optimo
        ) => (
          <Carrousell3D imagenes={imagenes} texto={texto} key={index} />
        )
      )}
    </div>
  );
};
export default MapCarrousell3D;
