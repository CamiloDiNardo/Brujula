import React from 'react';
import PropTypes from 'prop-types';
import { HeaderLinks, PoliticasDeCookies, Formulario } from '../componentes';
const PoliticaDeCookies = (props) => {
  return (
    <div>
      <HeaderLinks />
      <PoliticasDeCookies />
      <Formulario />
    </div>
  );
};

PoliticaDeCookies.propTypes = {};

export default PoliticaDeCookies;
