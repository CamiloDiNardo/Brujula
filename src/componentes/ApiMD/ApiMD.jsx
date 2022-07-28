import React, { useState } from 'react';
import styles from './ApiMD.module.css';
const ApiMD = () => {
  const [pagina, setPagina] = useState(1); // useState para la paginacion.
  const CargarMovieDatabase = async () => {
    try {
      const Respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=692b6374a6d6b8a7217301e9db3ad2bf&language=es-MX&page=${pagina}` // Aca va pagina q es la pagina 1 (que es la que va a cargar por defecto la api)
      );
      console.log(Respuesta, 'promesa');
      if (Respuesta.status === 200) {
        const datos = await Respuesta.json();
        console.log(datos, 'Las 20 peliculas');
        let info = '';
        datos.results.forEach((Peliculas) => {
          info += `<div class="ContenedorPeliculas">
<img class="ContenedorPeliculas__img" src="https://image.tmdb.org/t/p/w500/${Peliculas.poster_path}">
<h3 class="titulo">${Peliculas.title}</h3>
</div>`;
        });
        document.getElementById('MovieDatabase').innerHTML = info; // como reemplazo el innerhtml xq da erorr en consola?
      } else if (Respuesta.status === 401) {
        console.log('No hay conexion a internet');
      } else if (Respuesta.status === 404) {
        console.log('no existe el vuelo');
      } else {
        console.log('Ocurrio un Error desconocido');
      }
    } catch (error) {
      console.log(error);
    }
  };
  CargarMovieDatabase();
  return (
    // Api de peliculas MoveDatabase
    <div>
      <h1 className={styles.Titulo} data-aos='fade-up'>
        ¡Selecciona entre más de 1000 peliculas para que no te aburras en tu
        viaje!
      </h1>
      <div
        className={styles.MovieDatabase}
        id='MovieDatabase'
        data-aos='fade-up'></div>
      <div // Los Botones los hacemos directamente aca.
        id='botonesContenedor'
        className={`${styles.ContenedorBotonForm} ${styles.ContenedorBotonForm2}`}>
        <button // Si pagina es mayor a 1 entonces a la pagina le restamos 1
          className={`${styles.BotonApi} ${styles.ContenedorBotonForm__boton2}`}
          onClick={() => pagina > 1 && setPagina(pagina - 1)}>
          <span className={styles.card__span}>Volver</span>
        </button>
        <button // si estamos en una pagina < 1000 entonces sumamos 1 a la pag
          className={`${styles.BotonApi} ${styles.ContenedorBotonForm__boton2}`}
          onClick={() => pagina < 1000 && setPagina(pagina + 1)}>
          <span className={styles.card__span}>Siguiente</span>
        </button>
      </div>
    </div>
  );
};
export default ApiMD;
