import React from 'react';
import { BotonMD } from '../../componentes';
import './ApiMD.css';
const ApiMD = () => {
  // API The Movie Database.
  // Como puedo mejorarlo? deberia hacerlo en 2 componentes distintos?
  const CargarMovieDatabase = async () => {
    try {
      const Respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=692b6374a6d6b8a7217301e9db3ad2bf&language=es-MX&page=${
          (
            <BotonMD /> // aca decia paginas, funcionara?
          )
        }`
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
        document.getElementById('MovieDatabase').innerHTML = info; // como reemplazo esto?
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

  CargarMovieDatabase(); // Como reemplazo esto version react?
  return (
    // Api de peliculas MoveDatabase
    <div>
      <h1 className='Titulo' data-aos='fade-up'>
        ¡Selecciona entre más de 1000 peliculas para que no te aburras en tu
        viaje!
      </h1>
      <div
        className='MovieDatabase'
        id='MovieDatabase'
        data-aos='fade-up'></div>
      <BotonMD />
    </div>
  );
};

export default ApiMD;
