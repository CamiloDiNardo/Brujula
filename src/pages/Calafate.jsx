import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Footer,
  Formulario,
  MapInfoCards,
  WppFlotante,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Calafate = (props) => {
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

Calafate.propTypes = {};

export default Calafate;
