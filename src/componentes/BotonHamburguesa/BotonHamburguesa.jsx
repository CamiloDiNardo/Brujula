import React from 'react';
import './BotonHamburguesa.css';
import IconoHamburguesa from '../../assets/bars-solid.svg';
const BotonHamburguesa = () => {
  return (
    <button className='BotonHamburguesa'>
      <img
        className='BotonHamburguesa__icono'
        src={IconoHamburguesa}
        id='iconomenu'
        alt='Menu'></img>
    </button>
  );
};

BotonHamburguesa.propTypes = {};

export default BotonHamburguesa;
