import React from 'react';
import IconoHamburguesa from '../../assets/bars-solid.svg';
import styles from './BotonHamburguesa.module.css';
const BotonHamburguesa = () => {
  const desplegar = () => {
    const link = document.querySelector('.link');
    link.classList.toggle('{styles.links__Visibles');
  };
  return (
    <button className={styles.BotonHamburguesa} onClick={desplegar}>
      <img
        className={styles.BotonHamburguesa__icono}
        src={IconoHamburguesa}
        id='iconomenu'
        alt='Menu'></img>
    </button>
  );
};
export default BotonHamburguesa;
