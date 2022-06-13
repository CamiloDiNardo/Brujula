import React, { useEffect } from 'react';
import {
  Header,
  Footer,
  Formulario,
  CondicionesGenerales,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const CondicionesGeneralesDeTransporte = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <CondicionesGenerales />
      <Formulario />
      <Footer />
    </div>
  );
};

export default CondicionesGeneralesDeTransporte;
