import React from 'react';
import styles from './BotonFormulario.module.css';
const BotonFormulario = () => {
  const NoEnviar = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    form.reset();
  };
  return (
    <div className={styles.ContenedorBotonForm}>
      <button
        type='submit'
        name='button'
        className={`${styles.BotonFormulario} ${styles.ContenedorBotonForm__boton2}`}
        onClick={NoEnviar}>
        <span className={styles.Card__span}>ENVIAR</span>
      </button>
    </div> // Acrodate que el onClick NUNCA va en el span xq sino a veces funciona y a vece sno. tiene que ir en el boton.
  );
};

export default BotonFormulario;
