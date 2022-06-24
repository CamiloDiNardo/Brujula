import React from 'react';
import './BotonFormulario.css';
const BotonFormulario = () => {
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
        className='BotonFormulario ContenedorBotonForm__boton--modificador'
        onClick={NoEnviar}>
        <span className='Card__span'>ENVIAR</span>
      </button>
    </div> // Acrodate que el onClick NUNCA va en el span xq sino a veces funciona y a vece sno. tiene que ir en el boton.
  );
};

export default BotonFormulario;
