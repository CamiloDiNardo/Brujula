import React, { useEffect } from 'react';
import {
  Header,
  Footer,
  Formulario,
  MapInfoCards,
  WppFlotante,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Madrid = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <WppFlotante />
      <Header />
      <MapInfoCards />
      <Formulario />
      <Footer />
    </div>
  );
};

Madrid.propTypes = {};

export default Madrid;
