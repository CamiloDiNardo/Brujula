import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Formulario, WppFlotante, Header } from '../componentes';
const Contacto = (props) => {
  return (
    <div>
      <Header />
      <WppFlotante />
      <Formulario />
      <Footer />
    </div>
  );
};

Contacto.propTypes = {};

export default Contacto;
