import React from 'react';
import './Carrousell3D.css';
// Componente Reutilizable, para esto no tiene que tener valores dentro, solo la estructura HTML
const Carrousell3D = ({ texto, imagenes, nombre }) => {
  console.log(imagenes, texto, nombre, 'estas son las imagenes de china');
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
          src={`assets/${nombre}/2`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/3`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/4`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/5`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/6`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/7`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/8`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/9`}
          alt={texto}></img>
      </figure>
      <figure className='Carrousel3DContenedor__figure'>
        <img
          className='.Carrousel3DContenedor__img'
          src={`assets/${nombre}/10`}
          alt={texto}></img>
      </figure>
    </div>
  );
};
export default Carrousell3D;
