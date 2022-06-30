import React from 'react';
import IconoHamburguesa from '../../assets/bars-solid.svg';
const BotonHamburguesa = () => {
  const desplegar = () => {
    const link = document.querySelector('.link');
    link.classList.toggle('links__Visibles');
  };
  return (
    <button className='BotonHamburguesa' onClick={desplegar}>
      <img
        className='BotonHamburguesa__icono'
        src={IconoHamburguesa}
        id='iconomenu'
        alt='Menu'></img>
    </button>
  );
};
export default BotonHamburguesa;
