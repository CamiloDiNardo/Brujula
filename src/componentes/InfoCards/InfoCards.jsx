import React from 'react';
import './InfoCards.css';
import { Carrousell3D } from '../../componentes';
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
}) => {
  return (
    <div>
      <h1>
        {nombre.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
          return str.toUpperCase(); /* Con estas 2 lineas de codigo, hacemos que el titulo que esta antes del carrousell muestre el nombre del json segun el path. si el path es /Calafate, va a aparecer CALAFATE (creo q eso es lo q hace kta en esas lineas de codigo) */
        })}
      </h1>
      {
        <Carrousell3D /> /* ACA IRIA EL CARRUSEL
    el nombre de la carpeta tendria que ser igual al nombre del path de la ciudad
    y las imagenes ponele de nombre 1,2,3 y asi con todas
    en las imagenes ponele un ejemplo:
    busca una forma de usar un for map o algo asi
    <img src={`assets/${nombre}/1`}/>
    <img src={`assets/${nombre}/2`}/>
    hasta el 10
    <img src={`assets/${nombre}/10`}/> */
      }
      <h1>Caracteristicas</h1>
      <li>
        Clima:
        <b />
        {clima}
      </li>
      <br />
      <li>
        Excursiones Recomendadas:
        <b />
        {excursiones}
      </li>
      <br />
      <li>
        Servicios:
        <b />
        {servicios}
      </li>
      <br />
      <li>
        Temporada Turistica:
        <b />
        {temporada}
      </li>
      <br />
      <li>
        Monedas Admitidas:
        <b />
        {monedas}
      </li>
      <br />
      <li>
        Prohibido:
        <b />
        {prohibido}
      </li>
      <br />
      <p>{info}</p>
    </div>
  );
};
export default InfoCards;
