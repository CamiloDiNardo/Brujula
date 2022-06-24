import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  Formulario,
  WppFlotante,
  Carrousell3D,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Destinos = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <WppFlotante />
      <h1 className='Titulo aos-init aos-animate' data-aos='fade-up'>
        ¡Veni a disfrutar una aventura en familia!
      </h1>
      <Carrousell3D nombre="Destinos"/>
      <div style={ { marginTop: "13rem" } }><Formulario/></div>
    </div>
  );
};

Destinos.propTypes = {};

export default Destinos;
