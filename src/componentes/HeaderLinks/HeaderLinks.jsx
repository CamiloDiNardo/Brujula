import React from 'react';
import { Link } from 'react-router-dom';
import { BotonHamburgesa } from '../../componentes';
import Logo from '../../assets/brujulacolorida.jpg';
import '../HeaderLinks/HeaderLinks.css';
const HeaderLinks = () => {
  return (
    <header>
      <nav>
        <div className='brujula' id='brujula'>
          <Link to='/'>
            <img className='brujula__img' src={Logo} alt='Brujula'></img>
          </Link>
          <BotonHamburgesa />
          <div className='link'>
            <Link to='/PoliticasDeCookies' className='links__a2'>
              Politica De Cookies
            </Link>
            <Link to='/PoliticasDePrivacidad' className='links__a2'>
              Politica De Privacidad
            </Link>
            <Link to='/CondicionesGenerales' className='links__a2'>
              Condiciones Generales
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default HeaderLinks;
