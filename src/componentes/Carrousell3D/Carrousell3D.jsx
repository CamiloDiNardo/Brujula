import React from 'react';
import PropTypes from 'prop-types';
import './Carrousell3D.css';
// Componente Reutilizable, para esto no tiene que tener valores dentro, solo la estructura HTML
const Carrousell3D = ({ nombre }) => {
  const cantidadFotos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // no es la mejor forma de hacerlo pero creamos un array con la cantidasd de fotos y lo mapeamos
  return (
    <div className='Carrousel3DContenedor'>
      <div className='Carrousel3DContenedor__div'>
        {cantidadFotos.map((index) => {
          return (
            <figure className='Carrousel3DContenedor__figure' key={index}>
              <img
                className='.Carrousel3DContenedor__img'
                src={require(`../../assets/${nombre}/${index}.jpg`)} // Ojo las imagenes solo pueden ser de un tipo para que se muestren todas. tuvimos que pasar todas a jpg, tmb las pusimos en carpetas y les cambiamos el nombre a 1.jpg y asi hasta 10, el index indica el numero de la imagen
                alt={`imagen ${nombre} ${index}`}></img>
            </figure>
          );
        })}
      </div>
    </div>
  );
};
Carrousell3D.propTypes = {
  nombre: PropTypes.string.isRequired,
};
export default Carrousell3D;
