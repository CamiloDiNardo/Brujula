import React from 'react';
import DatosInfoCards from '../../InfoCards.json';
import { InfoCards } from '../../componentes';
const InfoCalafate = DatosInfoCards.slice(0, 1);
const InfoBariloche = DatosInfoCards.slice(1, 2);
const InfoPalolem = DatosInfoCards.slice(2, 3);
const InfoMadrid = DatosInfoCards.slice(3, 4);
const InfoPanama = DatosInfoCards.slice(4, 5);
const InfoLagoBled = DatosInfoCards.slice(5, 6);
const InfoPekin = DatosInfoCards.slice(6, 7);
const InfoParis = DatosInfoCards.slice(7, 8);
const InfoRoma = DatosInfoCards.slice(8, 9);
const InfoBrazil = DatosInfoCards.slice(9, 10);
const InfoPeru = DatosInfoCards.slice(10, 11);
const InfoMonteFuji = DatosInfoCards.slice(11, 12);
const InfoAtenas = DatosInfoCards.slice(12, 13);
const InfoSidney = DatosInfoCards.slice(13, 14);
const InfoDisneyland = DatosInfoCards.slice(14, 15);
// Como Mapeo muchas veces en un mismo lugar? como lo paso una ves mapeado?
const MapInfoCards = (props) => {
  return (
    <div>
      <h1 className='Titulo' data-aos='fade-up'>
        Caracteristicas
      </h1>
      <ul data-aos='fade-up'></ul>
      {InfoCalafate.map(
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
