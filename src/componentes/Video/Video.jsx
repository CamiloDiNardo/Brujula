import React from 'react';
import Video1 from '../../assets/NosotrosTeLLevamos.mp4';
import Video2 from '../../assets/NosotrosTeLLevamos.ogv';
import styles from './Video.module.css';
const Video = () => {
  return (
    <div>
      <div data-aos='fade-right' className={styles.ContenedorComercial1}>
        <div className={styles.ContenedorComercial2}>
          <video className={styles.video} autoPlay muted loop>
            <source src={Video1} type='video/mp4'></source>
            <source src={Video2} type='video/ogg'></source>
          </video>
        </div>
      </div>
    </div>
  );
};
export default Video;
