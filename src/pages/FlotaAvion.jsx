import React, { useEffect } from 'react';
import {
  Header,
  FlotaTexto,
  MapFlotaCaracteristicas,
  Formulario,
  WppFlotante,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const FlotaAvion = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <WppFlotante />
      <FlotaTexto />
      <MapFlotaCaracteristicas />
      <Formulario />
    </div>
  );
};

export default FlotaAvion;
