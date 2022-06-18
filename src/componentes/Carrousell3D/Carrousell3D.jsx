import React from 'react';
import './Carrousell3D.css';
// Componente Reutilizable, para esto no tiene que tener valores dentro, solo la estructura HTML
const Carrousell3D = ({ titulo, texto, imagenes, nombre }) => {
  console.log(imagenes, 'estas son las imagenes de china');
  return (
    <div className='Carrousel3DContenedor__div'>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/1`}
          alt={texto}></img>
      </figure>
    </div>
  );
};
export default Carrousell3D;
