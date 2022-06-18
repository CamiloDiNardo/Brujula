import React, { useEffect } from 'react';
import {
  Header,
  WppFlotante,
  Nosotros,
  GaleriaHexagonal,
  Formulario,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Empresa = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <WppFlotante />
      <Nosotros />
      <GaleriaHexagonal />
      <Formulario />
    </div>
  );
};

Empresa.propTypes = {};

export default Empresa;
