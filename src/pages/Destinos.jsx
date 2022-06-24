import React, { useEffect } from 'react';
import {
  Header,
  Formulario,
  WppFlotante,
  Carrousell3D,
  Mapa,
} from '../componentes';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Destinos = () => {
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
      <Carrousell3D nombre='Destinos' />
      <div style={{ marginTop: '13rem' }}>
        <Mapa
          mapa={
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7699002962477!2d-58.520955885403836!3d-34.60997958045788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7d08d444217%3A0xd828624e1a089e20!2sAv.%20Francisco%20Beir%C3%B3%204827%2C%20C1419HZK%20CABA!5e0!3m2!1ses-419!2sar!4v1649088164263!5m2!1ses-419!2sar'
          }></Mapa>
        <br />
        <hr color='#9e0303' data-aos='fade-up'></hr>
        <br />
        <Formulario />
      </div>
    </div> // Hicimos esto para separar el carrousell del formulario, pero lo optimo seria arreglar el carrousel.
  );
};

export default Destinos;
