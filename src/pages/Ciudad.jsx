import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import DatosInfoCards from '../InfoCards.json';
import {
  // SI TENES MUCHAS PAGINAS QUE TIENEN LA  MISMA ESTRUCTURA, HACEMOS 1 SOLA PAGINA. X dentro todas las cards tenian lo mismo, aunque la info era distinta, y como eso se cambia con json y js, no hace falta que hagamos muchos jsx de ciudades si van a tener lo mismo. eso nos ahorra mucho tiempo
  Header,
  Formulario,
  WppFlotante,
  InfoCards,
  Mapa,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Ciudad = () => {
  const { ciudad } =
    useParams(); /* para hacer la url dinamica primero asociamosa useParams una variable, va entre {} xq tiene destructuring */
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  const {
    // Destructuring de todas las propiedades de el json infoCards
    nombre,
    clima,
    excursiones,
    servicios,
    titulo,
    mapa,
    temporada,
    monedas,
    prohibido,
    info,
  } = DatosInfoCards.filter((city) => {
    /* Filter te devuelve un objeto cada ves que el bucle vuelve a empezar. city es donde se almacenan  estos objetos */
    return (
      city.nombre ===
      ciudad /* Con esto le asignamos un valor a ciudad. ahora tiene el valor de los nombres. y como esta dentro de filter, los obtenemos 1 x 1 */
    ); /* nc xq esta ese 0 pero bueno */
  })[0];
  return (
    <div>
      <Header />
      <WppFlotante />
      <InfoCards
        nombre={nombre}
        clima={clima}
        excursiones={excursiones}
        servicios={servicios}
        temporada={temporada}
        monedas={monedas}
        prohibido={prohibido}
        info={info}
      />
      {/* Tenes que ponerle en cada objeto del array del infoCards.json, el titulo y mapa del Mapa.json y se las pasas como props al componente mapa, esto es para consumir un solo json en ves de 2 supongo ademas de q es mas facil plasmar todo en la misma pag si esta en el mismo json q en 2 distintos. */}
      <Mapa titulo={titulo} mapa={mapa}></Mapa>
      <Formulario />
    </div>
  );
};

Ciudad.propTypes = {};

export default Ciudad;
