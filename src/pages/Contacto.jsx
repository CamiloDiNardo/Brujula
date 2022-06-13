import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Footer,
  Formulario,
  WppFlotante,
  Header,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contacto = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <WppFlotante />
      <Formulario />
      <Footer />
    </div>
  );
};

export default Contacto;
