import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Footer,
  PoliticasDePrivacidad,
  WppFlotante,
  Formulario,
} from '../componentes';

const PoliticaDePrivacidad = () => {
  return (
    <div>
      <Header />
      <WppFlotante />
      <PoliticasDePrivacidad />
      <Formulario />
      <Footer />
    </div>
  );
};

PoliticaDePrivacidad.propTypes = {};

export default PoliticaDePrivacidad;
