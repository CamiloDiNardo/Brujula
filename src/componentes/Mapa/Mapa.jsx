import React from 'react';
import './Mapa.css'; // Como hago que el mapa muestre segun la pagina un mapa distinto?
const Mapa = ({ titulo, mapa }) => {
  return (
    <div className='ContenedorMaps'>
      <iframe
        title={titulo}
        className='Maps'
        src={mapa}
        allowFullScreen=''
        loading='lazy' /* Aca habia un width y un  width='1200' , height='600', style={{ border: '0' }} para el mapa. lo sacamos y lo pusimos en la clase Maps xq pasarlo ahi para darle estilos no esta bueno */
        referrerPolicy='no-referrer-when-downgrade'></iframe>
    </div>
  );
};

export default Mapa;
