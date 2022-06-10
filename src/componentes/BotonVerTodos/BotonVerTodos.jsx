import React from 'react';
import { Link } from 'react-router-dom';
const BotonVerTodos = () => {
  return (
    <div data-aos='fade-up' className='button'>
      <Link to='/VerTodos'>
        <button className='card__button card__button--vertodos'>
          <span className='Card__span'>VER TODOS</span>
        </button>
      </Link>
    </div>
  );
};

BotonVerTodos.propTypes = {};

export default BotonVerTodos;
