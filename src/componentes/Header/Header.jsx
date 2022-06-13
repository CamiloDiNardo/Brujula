import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BotonHamburgesa } from '../../componentes';
import Logo from '../../assets/brujulacolorida.jpg';
import './Header.css';
const Header = () => {
  return (
    <header>
      <nav>
        <div className='brujula' id='brujula'>
          <Link to='/'>
            <img className='brujula__img' src={Logo} alt='Brujula'></img>
          </Link>
          <BotonHamburgesa />
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
