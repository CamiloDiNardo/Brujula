import React, { useEffect } from 'react';
import { HeaderLinks, Formulario, CondicionesGenerales } from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const CondicionesGeneralesDeTransporte = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <HeaderLinks />
      <CondicionesGenerales />
      <Formulario />
    </div>
  );
};

export default CondicionesGeneralesDeTransporte;
