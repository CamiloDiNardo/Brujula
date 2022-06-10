import React from 'react';
import PropTypes from 'prop-types';
import { Header, Formulario, Footer, WppFlotante } from '../componentes';
import '../componentes/Header/Header.css';
import '../componentes/Footer/Footer.css';
import '../componentes/Formulario/Formulario.css';
import '../componentes/WppFlotante/WppFlotante.css';
const Destinos = (props) => {
  return (
    <div>
      <WppFlotante />
      <Header />
      <h1 className='Titulo aos-init aos-animate' data-aos='fade-up'>
        ¡Veni a disfrutar una aventura en familia!
      </h1>
      <Formulario />
      <Footer />
    </div>
  );
};

Destinos.propTypes = {};

export default Destinos;
