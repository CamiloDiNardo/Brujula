import React from 'react';
import DatosCards from '../../Cards.json';
import { CardsVerTodos } from '../../componentes';
const MapCardsVerTodos = () => {
  return (
    // <h1 className='Titulo' data-aos='fade-up'>Mas Modelos </h1> como le pongo esto en medio de las 3 cards que tiene un map de por si?
    <div>
      <h1 className='Titulo Titulo--modificador' data-aos='fade-up'>
        Modelos Añadidos Recientemente
      </h1>
      <div
        className='contenedorcards contenedorcards--modificador'
        data-aos='fade-up'>
        {DatosCards.map(
          (
            { ciudad, pais, valor, max, min, linkeado, imagenes, alternativo },
            index
          ) => (
            <>
              <CardsVerTodos
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
              {index === 2 && (
                <h1
                  style={{ width: '100%' }}
                  className='Titulo Titulo--modificador'>
                  Más Modelos
                </h1>
              )}
            </> // ASI AGREGAMOS EL TITULO DESPUES DE LA 3ER CARD (OSEA INDICE 2) X eso puso si index === 2. lo q no se es si el width 100% ese se puede sacar.. xq ya estan las clases y no haria falta, desp probalo
          )
        )}
      </div>
    </div>
  );
};
export default MapCardsVerTodos;
