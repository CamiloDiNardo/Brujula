import React from 'react';
import DatosCarrousell3D from '../../Carrousell3D.json';
import { Carrousell3D } from '../../componentes';
const MapCarrousell3D = () => {
  // como hago muchos slice y los pongo en una estructura de carrousell?
  /* const CarrousellPekin = DatosCarrousell3D.slice(0, 10);
  const CarrousellTorreIffel = DatosCarrousell3D.slice(10, 20);
  const CarrousellRoma = DatosCarrousell3D.slice(20, 30);
  const CarrousellCalafate = DatosCarrousell3D.slice(30, 40);
  const CarrousellBariloche = DatosCarrousell3D.slice(40, 50);
  const CarrousellPalolem = DatosCarrousell3D.slice(50, 60);
  const CarrousellMadrid = DatosCarrousell3D.slice(60, 70);
  const CarrousellPanama = DatosCarrousell3D.slice(70, 80);
  const CarrousellBled = DatosCarrousell3D.slice(80, 90);
  const CarrousellAcropolis = DatosCarrousell3D.slice(90, 100);
  const CarrousellBrazil = DatosCarrousell3D.slice(100, 110);
  const CarrousellPeru = DatosCarrousell3D.slice(110, 120);
  const CarrousellTokio = DatosCarrousell3D.slice(120, 130);
  const CarrousellAustralia = DatosCarrousell3D.slice(130, 140);
  const CarrousellDisneyland = DatosCarrousell3D.slice(140, 150);
  console.log(CarrousellPekin, 'Carrouselpekin');
  console.log(CarrousellTorreIffel, 'Carrouselpekin');
  console.log(CarrousellRoma, 'Carrouselpekin');
  console.log(CarrousellCalafate, 'Carrouselpekin');
  console.log(CarrousellBariloche, 'Carrouselpekin');
  console.log(CarrousellPalolem, 'Carrouselpekin');
  console.log(CarrousellMadrid, 'Carrouselpekin');
  console.log(CarrousellPanama, 'Carrouselpekin');
  console.log(CarrousellBled, 'Carrouselpekin');
  console.log(CarrousellAcropolis, 'Carrouselpekin');
  console.log(CarrousellBrazil, 'Carrouselpekin');
  console.log(CarrousellPeru, 'Carrouselpekin');
  console.log(CarrousellTokio, 'Carrouselpekin');
  console.log(CarrousellAustralia, 'Carrouselpekin');
  console.log(CarrousellDisneyland, 'Carrouselpekin'); */
  console.log(DatosCarrousell3D, 'aca');
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
