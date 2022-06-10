import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../assets/brujulacolorida.jpg';
const Header = () => {
  return (
    <header>
      <nav>
        <div className='brujula' id='brujula'>
          <Link to='/'>
            <img className='brujula__img' src={Logo} alt='Brujula'></img>
          </Link>
          <div className='links'>
            <Link to='/' className='links__a'>
              Inicio
            </Link>
            <Link to='/Empresa' className='links__a'>
              Empresa
            </Link>
            <Link to='/Destinos' className='links__a'>
              ¡Destinos!
            </Link>
            <Link to='#Contacto' className='links__a'>
              Contacto
            </Link>
            <Link to='/Flota' className='links__a'>
              Flota
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
