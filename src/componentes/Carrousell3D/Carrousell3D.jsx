import React from 'react';
import './Carrousell3D.css';
// Componente Reutilizable, para esto no tiene que tener valores dentro, solo la estructura HTML
const Carrousell3D = ({ nombre }) => {
const cantidadFotos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='Carrousel3DContenedor'>
    <div className='Carrousel3DContenedor__div'>
      {
        cantidadFotos.map((index) => {
          return <figure className='Carrousel3DContenedor__figure' key={index}>
              <img
                className='.Carrousel3DContenedor__img'
                src={require(`../../assets/${nombre}/${index}.jpg`)}
                alt={`imagen ${nombre} ${index}`}></img>
            </figure>
            }
        )
      }
    </div>
    </div>
  );
};
export default Carrousell3D;
