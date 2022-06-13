import React, { useState } from 'react';
import ApiMD from '../ApiMD/ApiMD';
import './BotonMD.css';
const BotonMD = (props) => {
  // Botones Api The Movie Database
  const [AdelanteyAtras, SetAdelanteyAtras] = useState(1); // las paginas por defecto son 1
  const condicion1 = AdelanteyAtras < 1000 && AdelanteyAtras - 1;
  const condicion2 = AdelanteyAtras > 1 && AdelanteyAtras + 1; // si adelante y atras < 1000 (paginas) entonces le sumamos 1 a las paginas actuales y se pasa a la siguiente pag
  const ParaAdelante = () => {
    SetAdelanteyAtras(condicion2);
    <ApiMD />; // cuando hacemos click para la siguiente imagen tenemos que cargar la api, mepa que tiene que ir esto. sino desp sacalo
  };
  const ParaAtras = () => {
    SetAdelanteyAtras(condicion1);
    <ApiMD />; // cuando hacemos click para la siguiente imagen tenemos que cargar la api, mepa que tiene que ir esto. sino desp sacalo
  };
  return (
    <div>
      <div
        className='ContenedorBotonForm ContenedorBotonForm--modificador'
        id='botonesContenedor'>
        {condicion1 && (
          <button
            onClick={ParaAtras}
            id='Botonanterior'
            className='card__button ContenedorBotonForm__boton--modificador'
            data-aos='fade-up'>
            <span className='Card__span'>ANTERIOR</span>
          </button>
        )}
        {condicion2 && (
          <button
            onClick={ParaAdelante}
            id='Botonsiguiente'
            className='card__button ContenedorBotonForm__boton--modificador'
            data-aos='fade-up'>
            <span className='Card__span'>SIGUIENTE</span>
          </button>
        )}
      </div>
      <hr color='#9e0303'></hr>
    </div>
  );
};

export default BotonMD;
