import React from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Footer,
  Formulario,
  MapInfoCards,
  WppFlotante,
} from '../componentes';
import '../componentes/Header/Header.css';
import '../componentes/Footer/Footer.css';
import '../componentes/Formulario/Formulario.css';
const TorreEiffel = (props) => {
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

TorreEiffel.propTypes = {};

export default TorreEiffel;
