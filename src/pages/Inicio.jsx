import React from 'react';
import {
  Header,
  Video,
  MapCards,
  BotonVerTodos,
  Slider,
  ApiMD,
  BotonMD,
  Formulario,
  BotonFormulario,
  Footer,
  WppFlotante,
} from '../componentes';
import '../componentes/Header/Header.css';
import '../componentes/Video/Video.css';
import '../componentes/BotonVerTodos/BotonVerTodos.css';
import '../componentes/Slider/Slider.css';
import '../componentes/ApiMD/ApiMD.css';
import '../componentes/BotonMD/BotonMD.css';
import '../componentes/Formulario/Formulario.css';
import '../componentes/BotonFormulario/BotonFormulario.css';
import '../componentes/Footer/Footer.css';
import '../componentes/WppFlotante/WppFlotante.css';
import '../componentes/Cards/Cards.css';
const Inicio = () => {
  return (
    <div>
      <Header />
      <Video />
      <MapCards />
      <BotonVerTodos />
      <Slider />
      <ApiMD />
      <BotonMD />
      <Formulario />
      <BotonFormulario />
      <Footer />
      <WppFlotante />
    </div>
  );
};

Inicio.propTypes = {};

export default Inicio;
