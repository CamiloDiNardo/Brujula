import React from 'react';
import { Link } from 'react-router-dom';
import { BotonHamburgesa } from '../../componentes';
import Logo from '../../assets/brujulacolorida.jpg';
import styles from '../HeaderLinks/HeaderLinks.module.css';
const HeaderLinks = () => {
  return (
    <header>
      <nav>
        <div className={styles.brujula} id='brujula'>
          <Link to='/'>
            <img className={styles.brujula__img} src={Logo} alt='Brujula'></img>
          </Link>
          <BotonHamburgesa />
          <div className={styles.link}>
            <Link to='/PoliticasDeCookies' className={styles.links__a2}>
              Politica De Cookies
            </Link>
            <Link to='/PoliticasDePrivacidad' className={styles.links__a2}>
              Politica De Privacidad
            </Link>
            <Link to='/CondicionesGenerales' className={styles.links__a2}>
              Condiciones Generales
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default HeaderLinks;
