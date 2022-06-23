import React, { useEffect } from 'react';
import {
  MapCardsVerTodos,
  Header,
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
    </div>
  );
};

export default VerTodos;
