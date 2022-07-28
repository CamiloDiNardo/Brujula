import React from 'react';
import DatosCards from '../../Cards.json';
import { CardsVerTodos } from '../../componentes';
import styles from '../CardsVerTodos/CardsVerTodos.module.css'
const MapCardsVerTodos = () => {
  return (
    <div>
      <h1 className={`${styles.Titulo} ${styles.Titulo2}`} data-aos='fade-up'>
        Modelos Añadidos Recientemente
      </h1>
      <div
        className={`${styles.contenedorcards} ${styles.contenedorcards2}`}
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
              {index === 2 &&
                <h1
                  style={{ width: '100%' }}
                  className={`${styles.Titulo} ${styles.Titulo2}`}>
                  Más Modelos
                </h1>
              }
            </> // ASI AGREGAMOS EL TITULO DESPUES DE LA 3ER CARD (OSEA INDICE 2) X eso puso si index === 2. el width lo ponemos para no hacer un css x 1 clase XD
          )
        )}
      </div>
    </div>
  );
};
export default MapCardsVerTodos;
