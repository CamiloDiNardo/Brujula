import React from 'react';
import {
  Header,
  WppFlotante,
  Nosotros,
  GaleriaHexagonal,
  Formulario,
  Footer,
} from '../componentes';
import '../componentes/Header/Header.css';
import '../componentes/WppFlotante/WppFlotante.css';
import '../componentes/Nosotros/Nosotros.css';
import '../componentes/GaleriaHexagonal/GaleriaHexagonal.css';
import '../componentes/Formulario/Formulario.css';
import '../componentes/Footer/Footer.css';
const Empresa = (props) => {
  return (
    <div>
      <Header />
      <WppFlotante />
      <Nosotros />
      <GaleriaHexagonal />
      <Formulario />
      <Footer />
    </div>
  );
};

Empresa.propTypes = {};

export default Empresa;
