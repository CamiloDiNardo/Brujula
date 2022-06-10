import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer, Formulario } from '../componentes';
import '../componentes/Header/Header.css';
import '../componentes/Footer/Footer.css';
import '../componentes/Formulario/Formulario.css';
const CondicionesGeneralesDeTransporte = (props) => {
  return (
    <div>
      <Header />
      <Formulario />
      <Footer />
    </div>
  );
};

CondicionesGeneralesDeTransporte.propTypes = {};

export default CondicionesGeneralesDeTransporte;
