import React from 'react';
import './Mapa.css'; // Como hago que el mapa muestre segun la pagina un mapa distinto?
const Mapa = ({ titulo, mapa }) => {
  return (
    <div>
      <div className='ContenedorMaps' data-aos='fade-up'>
        <iframe
          title={titulo}
          className='Maps'
          src={mapa}
          width='1200'
          height='600'
          style={{ border: '0' }}
          allowFullScreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </div>
  );
};

export default Mapa;
