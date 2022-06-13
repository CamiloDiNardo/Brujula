import React, { useEffect } from 'react';
import {
  Header,
  Footer,
  Formulario,
  MapInfoCards,
  WppFlotante,
  Carrousell3D,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BotonHamburguesa from '../componentes/BotonHamburguesa/BotonHamburguesa';
const AcropolisDeAtenas = ({ imagenes, texto }) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  // Para que el componente reutilizable tenga valores, se los pasamos donde se va a renderizar para mostrarse.
  return (
    <div>
      <Header />
      <WppFlotante />
      <Carrousell3D src={imagenes} alt={texto} />
      <MapInfoCards />
      <Formulario />
      <Footer />
    </div>
  );
};

AcropolisDeAtenas.propTypes = {};

export default AcropolisDeAtenas;
