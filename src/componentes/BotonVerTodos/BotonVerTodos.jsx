import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BotonVerTodos.module.css';
const BotonVerTodos = () => {
  return (
    <div data-aos='fade-up' className={styles.button}>
      <Link to='/VerTodos'>
        <button className={`${styles.card__button} ${styles.card__button2}`}>
          <span className={styles.card__span}>VER TODOS</span>
        </button>
      </Link>
    </div>
  );
};

export default BotonVerTodos;
