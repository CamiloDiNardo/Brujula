import React from 'react';
import PropTypes from 'prop-types';
import {
  MapCards,
  Header,
  Footer,
  Formulario,
  WppFlotante,
} from '../componentes';

const VerTodos = (props) => {
  return (
    <div>
      <Header />
      <MapCards />
      <Formulario />
      <Footer />
      <WppFlotante />
    </div>
  );
};

VerTodos.propTypes = {};

export default VerTodos;
