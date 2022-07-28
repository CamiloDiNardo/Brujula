import React, { useState } from 'react';
import img1 from '../../assets/Img1.jpg';
import img2 from '../../assets/Img2.jpg';
import img3 from '../../assets/Img3.jpg';
import img4 from '../../assets/Img4.jpg';
import img5 from '../../assets/Img5.jpg';
import img6 from '../../assets/Img6.jpg';
import img7 from '../../assets/Img7.jpg';
import img8 from '../../assets/Img8.jpg';
import img9 from '../../assets/Img9.jpg';
import styles from './Slider.module.css';
const Slider = () => {
  const ImgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9]; // array con imagenes
  const [SeleccionarIndex, SetSeleccionarIndex] = useState(0); // esto es para que empiece en 0 el arreglo de img
  const [ImgSeleccionada, SetImgSeleccionada] = useState(ImgArray[0]); // esto es la imagen previa que vamos a tener seleccionada, en este caso la 0
  const SeleccionarNuevaImg = (index, ImgArray, siguiente = true) => {
    // ponemos 3 parametros, el index,el imgArray y el siguiente = true (el siguiente lo vamos a usar para preguntar si quiere ir para adelante o para atras)
    const condicion = siguiente
      ? SeleccionarIndex < ImgArray.length - 1
      : SeleccionarIndex > 0; // ponemos las 2 condiciones en 1 linea de codigo. si siguiente = true (va para adelante) (ponemos la condicion de si va para adelante) si es false (va para atras) entonces ponemos : y la condicion de para atras q habiamos puesto antes
    const SumaoResta = siguiente
      ? condicion
        ? SeleccionarIndex + 1
        : 0
      : condicion
      ? SeleccionarIndex - 1
      : ImgArray.length - 1; // aca tenemos que sumar o restar dependiendo de si siguiente al final es verdadero o falso y dependiendo de si se cumple la condicion anterior. asi que decimos que si es siguiente(osea q fue verdadero) y se cumple la condicion (que es toda la condicion de arriba) entonces sumamos 1, y si se cumple la condicion pero no es next (osea q da false) restamos.
    SetImgSeleccionada(ImgArray[SumaoResta]);
    SetSeleccionarIndex(SumaoResta);
  };
  const Resta = () => {
    // al final la resta te va a ser asi. llamamos a SeleccionarNuevaimg con sus valores
    SeleccionarNuevaImg(SeleccionarIndex, ImgArray, false); // le ponemos false xq es la resta y como va para atras es false. xq siguiente era true. entonces le ponemos false para identificar cual no es true
  };
  const Suma = () => {
    // lo mismo con la suma pero no se le pasa true xq ya lo tenemos arriba. solo se le pasa al que no tiene.
    SeleccionarNuevaImg(SeleccionarIndex, ImgArray);
  };
  return (
    <div>
      <h1 className={styles.Titulo} data-aos='fade-up'>
        ¡vivi una aventura Inolvidable!
      </h1>
      <br />
      <div className={styles.SliderContainer} data-aos='fade-up'>
        <img
          src={ImgSeleccionada}
          alt='imagenSlider'
          id='slider'
          className={styles.SliderContainer__img}></img>
        <button
          className={`${styles.BotonSlider} ${styles.BotonSlider1}`}
          onClick={Resta}>
          {'<'}
        </button>
        <button
          className={`${styles.BotonSlider} ${styles.BotonSlider2}`}
          onClick={Suma}>
          {'>'}
        </button>
      </div>
      <br />
      <br />
    </div>
  );
}; // boton para ir para adelante y para atras

export default Slider;
