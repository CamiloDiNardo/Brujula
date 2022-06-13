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
const TorreEiffel = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <WppFlotante />
      <MapInfoCards />
      <Formulario />
      <Footer />
    </div>
  );
};

TorreEiffel.propTypes = {};

export default TorreEiffel;
