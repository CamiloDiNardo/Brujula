import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  MapCardsVerTodos,
  Header,
  Footer,
  Formulario,
  WppFlotante,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const VerTodos = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <WppFlotante />
      <MapCardsVerTodos />
      <Formulario />
      <Footer />
    </div>
  );
};

VerTodos.propTypes = {};

export default VerTodos;
