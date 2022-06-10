import React from 'react';
const BotonFormulario = (props) => {
  return (
    <div className='ContenedorBotonForm'>
      <button
        type='submit'
        name='button'
        className='card__button ContenedorBotonForm__boton--modificador'>
        <span className='Card__span'>ENVIAR</span>
      </button>
    </div>
  );
};

BotonFormulario.propTypes = {};

export default BotonFormulario;
