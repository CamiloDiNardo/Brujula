import React from 'react';
import './Carrousell3D.css';

const Carrousell3D = ({ imagenes, texto }) => {
  return (
    <div>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={imagenes}
          alt={texto}></img>
      </figure>
    </div>
  );
};
export default Carrousell3D;
