import React from 'react';
import Video1 from '../../assets/NosotrosTeLLevamos.mp4';
import Video2 from '../../assets/NosotrosTeLLevamos.ogv';
const Video = () => {
  return (
    <div>
      <div data-aos='fade-right' className='ContenedorComercial1'>
        <div className='ContenedorComercial2'>
          <video className='video' autoPlay muted loop>
            <source src={Video1} type='video/mp4'></source>
            <source src={Video2} type='video/ogg'></source>
          </video>
        </div>
      </div>
    </div>
  );
};
export default Video;
