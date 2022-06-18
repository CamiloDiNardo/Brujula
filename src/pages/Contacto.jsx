import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formulario, WppFlotante, Header } from '../componentes';
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
    </div>
  );
};

export default Contacto;
