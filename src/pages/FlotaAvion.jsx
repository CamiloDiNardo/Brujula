import React from 'react';
import {
  Header,
  FlotaTexto,
  MapFlotaCaracteristicas,
  Footer,
  WppFlotante,
} from '../componentes';
import '../componentes/Header/Header.css';
import '../componentes/FlotaTexto/FlotaTexto.css';
import '../componentes/FlotaCaracteristicas/FlotaCaracteristicas.css';
import '../componentes/Footer/Footer.css';
const FlotaAvion = (props) => {
  return (
    <div>
      <Header />
      <WppFlotante />
      <FlotaTexto />
      <MapFlotaCaracteristicas />
      <Footer />
    </div>
  );
};

export default FlotaAvion;
