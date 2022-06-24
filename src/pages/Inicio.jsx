import React, { useEffect } from 'react';
import {
  Header,
  Video,
  MapCards,
  BotonVerTodos,
  Slider,
  ApiMD,
  Formulario,
  WppFlotante,
  CartelCookies,
} from '../componentes';
import Aos from 'aos'; // funciona solo con 1 solo mepa q es configuracion global pero x las dudas lo ponemos en todas las pagina.
import 'aos/dist/aos.css';
const Inicio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div>
      <Header />
      <WppFlotante />
      <CartelCookies />
      <Video />
      <MapCards />
      <BotonVerTodos />
      <Slider />
      <ApiMD />
      <Formulario />
    </div>
  );
};
export default Inicio;
