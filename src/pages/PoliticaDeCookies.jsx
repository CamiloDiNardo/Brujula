import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Footer,
  PoliticasDeCookies,
  Formulario,
  WppFlotante,
} from '../componentes';
const PoliticaDeCookies = (props) => {
  return (
    <div>
      <Header />
      <WppFlotante />
      <PoliticasDeCookies />
      <Formulario />
      <Footer />
    </div>
  );
};

PoliticaDeCookies.propTypes = {};

export default PoliticaDeCookies;
