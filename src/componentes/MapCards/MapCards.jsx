import React from 'react';
import DatosCards from '../../Cards.json';
import { Cards } from '../../componentes';
import styles from '../Cards/Cards.module.css';
const MapCards = () => {
  const NuevosDatos = DatosCards.slice(3, 9); // ponete en la posicion 3 del array y elimina 6 elementos
  // console.log(DatosCards, 'cards que quedaron');
  // console.log(NuevosDatos, 'Estos son los nuevos datos');
  return (
    <div>
      <h1 className={`${styles.Titulo} ${styles.Titulo2}`} data-aos='fade-up'>
        Destinos Destacados
      </h1>
      <div className={styles.contenedorcards} data-aos='fade-up'>
        {NuevosDatos.map(
          // Mapeamos el array modificado con slice
          // podriamos agregarle Nuevosdatos && NuevosDatos.map que verifica que alla datos en NuevosDatos antes de mapearlo
          (
            { ciudad, pais, valor, max, min, linkeado, imagenes, alternativo },
            index // ponemos todos los valores del json. y el index afuera q es el 0,1,2etc.
          ) => (
            <Cards // Le Pasamos todas las propiedades mapeadas a el componente Cards, sino hacemos esto no le llegan y no los puede usar.(creo q es x eso q hacemos esto)
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
