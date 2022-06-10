import React from 'react';
import './CardsVerTodos.css';
import { Link } from 'react-router-dom';
const CardsVerTodos = (props) => {
  return (
    <div>
      <h1 className='Titulo Titulo--modificador' data-aos='fade-up'>
        Modelos Añadidos Recientemente
      </h1>
      <div
        className='contenedorcards contenedorcards--modificador'
        data-aos='fade-up'>
        <div className='card'>
          <img
            className='card__img'
            src='../../assets/MurallaChina.jpg'
            alt='MurallaChina'></img>
          <h1>Muralla China &#124; China </h1>
          <p className='card__p'>
            Desde: <b>U$D5000</b>
          </p>
          <img
            className='card__icono'
            src='../../assets/wifi-solid.svg'
            alt='Wifi'></img>{' '}
          WIFI &#124;
          <img
            className='card__icono'
            src='../../assets/temperature-half-solid.svg'
            alt='Temperature'></img>{' '}
          Temperatura: <b>25°&#124;40°</b>
          <Link to='/MurallaChina'>
            <button className='card__button'>
              <span className='Card__span'>VER MAS</span>
            </button>
          </Link>
        </div>

        <div className='card'>
          <img
            className='card__img'
            src='../../assets/TorreIfel.jpg'
            alt='TorreEiffel'></img>
          <h1>Torre Eliffel &#124; Paris </h1>
          <p className='card__p'>
            Desde: <b>U$D6000</b>
          </p>
          <img
            className='card__icono'
            src='../../assets/wifi-solid.svg'
            alt='Wifi'></img>{' '}
          WIFI &#124;
          <img
            className='card__icono'
            src='../../assets/temperature-half-solid.svg'
            alt='Temperature'></img>{' '}
          Temperatura: <b>20°&#124;34°</b>
          <Link to='/TorreEiffel'>
            <button className='card__button'>
              <span className='Card__span'>VER MAS</span>
            </button>
          </Link>
        </div>

        <div className='card'>
          <img
            className='card__img'
            src='../../assets/ColiseodeRoma.jpg'
            alt='Coliseo'></img>
          <h1>Coliseo de Roma &#124; Italia </h1>
          <p className='card__p'>
            Desde: <b>U$D1500</b>
          </p>
          <img
            className='card__icono'
            src='../../assets/wifi-solid.svg'
            alt='Wifi'></img>{' '}
          WIFI &#124;
          <img
            className='card__icono'
            src='../../assets/temperature-half-solid.svg'
            alt='Temperature'></img>
          Temperatura: <b>10°&#124;35°</b>
          <Link to='/ColiseoDeRoma'>
            <button className='card__button'>
              <span className='Card__span'>VER MAS</span>
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h1 className='Titulo Titulo--modificador' data-aos='fade-up'>
          Destinos Destacados
        </h1>
        <div className='contenedorcards' data-aos='fade-up'>
          <div className='card'>
            <img
              className='card__img'
              src='../../assets/hielo-600x336.jpg'
              alt='Calafate'></img>
            <h1>Calafate &#124; Argentina</h1>
            <p className='card__p'>
              Desde: <b>U$D1500</b>
            </p>
            <img
              className='card__icono'
              src='../../assets/wifi-solid.svg'
              alt='Wifi'></img>{' '}
            WIFI &#124;
            <img
              className='card__icono'
              src='../../assets/temperature-half-solid.svg'
              alt='Temperatura'></img>
            Temperatura: <b>-10°&#124;-50°</b>
            <Link to='/Calafate'>
              <button className='card__button'>
                <span className='Card__span'>VER MAS</span>
              </button>
            </Link>
          </div>

          <div className='card'>
            <img
              className='card__img'
              src='../../assets/Barilocheconnieve-680x680.jpg'
              alt='Bariloche'></img>
            <h1>Bariloche &#124; Argentina</h1>
            <p className='card__p'>
              Desde: <b>U$D869</b>
            </p>
            <img
              className='card__icono'
              src='../../assets/wifi-solid.svg'
              alt='Wifi'></img>{' '}
            WIFI &#124;
            <img
              className='card__icono'
              src='../../assets/temperature-half-solid.svg'
              alt='Temperatura'></img>
            Temperatura: <b>20°&#124;-10°</b>
            <Link to='/Bariloche'>
              <button className='card__button'>
                <span className='Card__span'>VER MAS</span>
              </button>
            </Link>
          </div>

          <div className='card'>
            <img
              className='card__img'
              src='../../assets/cabaña con playa-666x302.jpg'
              alt='Palolem'></img>
            <h1>Palolem &#124; India</h1>
            <p className='card__p'>
              Desde: <b>U$D1800</b>
            </p>
            <img
              className='card__icono'
              src='../../assets/wifi-solid.svg'
              alt='Wifi'></img>{' '}
            WIFI &#124;
            <img
              className='card__icono'
              src='../../assets/temperature-half-solid.svg'
              alt='Temperatura'></img>
            Temperatura: <b>40°&#124;30°</b>
            <Link to='/Palolem'>
              <button className='card__button'>
                <span className='Card__span'>VER MAS</span>
              </button>
            </Link>
          </div>

          <div className='card'>
            <img
              className='card__img'
              src='../../assets/paisajedemontañas-738x274.jpg'
              alt='Madrid'></img>
            <h1>Madrid &#124; España</h1>
            <p className='card__p'>
              Desde: <b>U$D700</b>
            </p>
            <img
              className='card__icono'
              src='../../assets/wifi-solid.svg'
              alt='Wifi'></img>{' '}
            WIFI &#124;
            <img
              className='card__icono'
              src='../../assets/temperature-half-solid.svg'
              alt='Temperatura'></img>{' '}
            Temperatura: <b>30°&#124;15°</b>
            <Link to='/Madrid'>
              <button className='card__button'>
                <span className='Card__span'>VER MAS</span>
              </button>
            </Link>
          </div>

          <div className='card'>
            <img
              className='card__img'
              src='../../assets/Panama-1750x800.jpg'
              alt='Panama'></img>
            <h1>Ciudad Panama &#124; Panama </h1>
            <p className='card__p'>
              Desde: <b>U$D1700</b>
            </p>
            <img
              className='card__icono'
              src='../../assets/wifi-solid.svg'
              alt='Wifi'></img>{' '}
            WIFI &#124;
            <img
              className='card__icono'
              src='../../assets/temperature-half-solid.svg'
              alt='Temperatura'></img>
            Temperatura: <b>25°&#124;°10</b>
            <Link to='/Panama'>
              <button className='card__button'>
                <span className='Card__span'>VER MAS</span>
              </button>
            </Link>
          </div>

          <div className='card'>
            <img
              className='card__img'
              src='../../assets/parejaencanoa-534x378.jpg'
              alt='LagoBled'></img>
            <h1>Lago Bled &#124; Eslovenia </h1>
            <p className='card__p'>
              Desde: <b>U$D2000</b>
            </p>
            <img
              className='card__icono'
              src='../../assets/wifi-solid.svg'
              alt='Wifi'></img>
            WIFI &#124;
            <img
              className='card__icono'
              src='../../assets/temperature-half-solid.svg'
              alt='Temperatura'></img>{' '}
            Temperatura: <b>20°&#124;40°</b>
            <Link to='/LagoBled'>
              <button className='card__button'>
                <span className='Card__span'>VER MAS</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='card'>
        <img
          className='card__img'
          src='../../assets/CristoRedentor3.jpg'
          alt='CristoRedentor'></img>
        <h1> Cristo Redentor&#124; Brazil</h1>
        <p className='card__p'>
          Desde: <b>U$D1100</b>
        </p>
        <img
          className='card__icono'
          src='../../assets/wifi-solid.svg'
          alt='Wifi'></img>{' '}
        WIFI &#124;
        <img
          className='card__icono'
          src='../../assets/temperature-half-solid.svg'
          alt='Temperature'></img>{' '}
        Temperatura: <b>20°&#124;38°</b>
        <Link to='/CristoRedentor'>
          <button className='card__button'>
            <span className='Card__span'>VER MAS</span>
          </button>
        </Link>
      </div>

      <div className='card'>
        <img
          className='card__img'
          src='../../assets/Machu Picchu.jpg'
          alt='MachuPicchu'></img>
        <h1>Machu Picchu &#124; Peru </h1>
        <p className='card__p'>
          Desde: <b>U$D2000</b>
        </p>
        <img
          className='card__icono'
          src='../../assets/wifi-solid.svg'
          alt='Wifi'></img>{' '}
        WIFI &#124;
        <img
          className='card__icono'
          src='../../assets/temperature-half-solid.svg'
          alt='Temperature'></img>{' '}
        Temperatura: <b>23°&#124;40°</b>
        <Link to='/MachuPicchu'>
          <button className='card__button'>
            <span className='Card__span'>VER MAS</span>
          </button>
        </Link>
      </div>

      <div className='card'>
        <img
          className='card__img'
          src='../../assets/MonteFuji.jpg'
          alt='MonteFuji'></img>
        <h1>Monte Fuji &#124; Japon </h1>
        <p className='card__p'>
          Desde: <b>U$D2000</b>
        </p>
        <img
          className='card__icono'
          src='../../assets/wifi-solid.svg'
          alt='Wifi'></img>{' '}
        WIFI &#124;
        <img
          className='card__icono'
          src='../../assets/temperature-half-solid.svg'
          alt='Temperature'></img>
        Temperatura: <b>25°&#124;30°</b>
        <Link to='/MonteFuji'>
          <button className='card__button'>
            <span className='Card__span'>VER MAS</span>
          </button>
        </Link>
      </div>

      <div className='card'>
        <img
          className='card__img'
          src='../../assets/Acropolis de Atenas.jpg'
          alt='Acropolis'></img>
        <h1>Acropolis &#124; Grecia</h1>
        <p className='card__p'>
          Desde: <b>U$D3450</b>
        </p>
        <img
          className='card__icono'
          src='../../assets/wifi-solid.svg'
          alt='Wifi'></img>{' '}
        WIFI &#124;
        <img
          className='card__icono'
          src='../../assets/temperature-half-solid.svg'
          alt='Temperature'></img>{' '}
        Temperatura: <b>20°&#124;33°</b>
        <Link to='/AcropolisDeAtenas'>
          <button className='card__button'>
            <span className='Card__span'>VER MAS</span>
          </button>
        </Link>
      </div>

      <div className='card'>
        <img
          className='card__img'
          src='../../assets/operadesidney.jpg'
          alt='OperaDeSidney'></img>
        <h1>Opera de Sidney &#124; Australia </h1>
        <p className='card__p'>
          Desde: <b>U$D9999</b>
        </p>
        <img
          className='card__icono'
          src='../../assets/wifi-solid.svg'
          alt='Wifi'></img>{' '}
        WIFI &#124;
        <img
          className='card__icono'
          src='../../assets/temperature-half-solid.svg'
          alt='Temperature'></img>
        Temperatura: <b>23°&#124;30°</b>
        <Link to='/OperaDeSidney'>
          <button className='card__button'>
            <span className='Card__span'>VER MAS</span>
          </button>
        </Link>
      </div>

      <div className='card'>
        <img
          className='card__img'
          src='../../assets/Disneyland2.jpg'
          alt='DisneyLand'></img>
        <h1>DisneyLand &#124; Francia </h1>
        <p className='card__p'>
          Desde: <b>U$D6000</b>
        </p>
        <img
          className='card__icono'
          src='../../assets/wifi-solid.svg'
          alt='Wifi'></img>{' '}
        WIFI &#124;
        <img
          className='card__icono'
          src='../../assets/temperature-half-solid.svg'
          alt='Temperature'></img>{' '}
        Temperatura: <b>23°&#124;28°</b>
        <Link to='/Disneyland'>
          <button className='card__button'>
            <span className='Card__span'>VER MAS</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

CardsVerTodos.propTypes = {};

export default CardsVerTodos;
