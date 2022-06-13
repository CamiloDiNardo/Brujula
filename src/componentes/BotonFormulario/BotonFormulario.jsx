import React from 'react';
import './BotonFormulario.css';

const BotonFormulario = (props) => {
  const NoEnviar = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    form.reset();
  };
  return (
    <div className='ContenedorBotonForm'>
      <button
        type='submit'
        name='button'
        className='BotonFormulario ContenedorBotonForm__boton--modificador'>
        <span className='Card__span' onClick={NoEnviar}>
          ENVIAR
        </span>
      </button>
    </div>
  );
};

export default BotonFormulario;
