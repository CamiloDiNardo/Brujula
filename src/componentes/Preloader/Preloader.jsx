import React from 'react';
import './Preloader.css';
import Gift from '../../assets/load-gif.gif';
const Preloader = (props) => {
  return (
    <div>
      {
        <div className='loader desaparecer'>
          <img src={Gift} alt='Preloader'></img>
        </div>
      }
    </div>
  );
};

export default Preloader;
