import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/brujulacolorida.jpg';
import BotonHamburguesa from '../BotonHamburguesa/BotonHamburguesa';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.brujula} id='brujula'>
          <Link to='/'>
            <img className={styles.brujula__img} src={Logo} alt='Brujula'></img>
          </Link>
          <BotonHamburguesa />
          <div className={styles.link}>
            <Link to='/' className={styles.links__a}>
              Inicio
            </Link>
            <Link to='/Empresa' className={styles.links__a}>
              Empresa
            </Link>
            <Link to='/Destinos' className={styles.links__a}>
              ¡Destinos!
            </Link>
            <Link to='/Contacto' className={styles.links__a}>
              Contacto
            </Link>
            <Link to='/Flota' className={styles.links__a}>
              Flota
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
