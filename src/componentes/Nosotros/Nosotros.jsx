import React from 'react';
import './Nosotros.css';
import PremioIcono from '../../assets/award-solid.svg';
import SeguridadIcono from '../../assets/shield-halved-solid.svg';
import SaludIcono from '../../assets/briefcase-medical-solid.svg';
import DadosIcono from '../../assets/dice-solid.svg';
import AvionIcono from '../../assets/plane-arrival-solid.svg';
import ManzanaIcono from '../../assets/apple-whole-solid.svg';
const Nosotros = () => {
  return (
    <div>
      <div className='EmpresaContenedor'>
        <img className='EmpresaContenedor__img'></img>
        <h1 className='EmpresaContenedor__h1'>¿Quienes Somos?</h1>
      </div>

      <p className='EmpresaParrafo' data-aos='fade-up'>
        <b>Brujula</b> es la compañía líder del mercado aerocomercial argentino
        desde 1950. Vuela a 37 destinos dentro del país y opera 20 destinos
        internacionales dentro de América y Europa. Cuenta con una amplia red de
        intertramos y corredores federales que conectan distintas provincias sin
        la necesidad de pasar por Buenos Aires.
        <br />
        <br />
        <b>Brujula</b> forma parte de la Alianza SkyTeam junto a 19 líneas
        aéreas del mundo, siendo la única compañía miembro de la región, A
        través de esta alianza ofrece a sus pasajeros conectividad a más de 1036
        destinos en más de 170 países entre otros beneficios.
        <br />
        <br />
        En 2020 <b>Brujula</b> se fusiona con Austral Líneas Aéreas, aerolínea
        de cabotaje y regional que ya formaba parte del Grupo empresario. A
        través de esta fusión se unifican unidades, estructuras y procesos con
        el objetivo de brindar un mejor servicio a los pasajeros y pasajeras.
        <br />
        <br />
        En 1997, nace Aerohandling, la empresa de servicio de rampa y estiba de
        equipajes que cubre las necesidades de <b>Brujula</b> en todos los
        aeropuertos nacionales donde opera la compañía, y desde hace más de 20
        años, el grupo empresario también cuenta con JetPaq, la empresa de
        servicio de transporte aéreo de cargas que opera dentro de la Argentina,
        que además incluye el servicio de “puerta a puerta” para envío de
        paquetes fuera del país.
        <br />
        <br /> <b>Brujula</b> también integra a Optar, la operadora de servicios
        turísticos que gestiona las reservas y emisiones de los tickets aéreos
        de organismos estatales y dependencias públicas que forman parte del
        Estado Nacional.
        <br />
        <br /> <b>Brujula</b> se encuentra en permanente crecimiento y
        evolución, incorporando las más avanzadas tecnologías y las mejores
        prácticas de la industria a nivel mundial
      </p>

      <div className='EmpresaContenedor'>
        <img className='EmpresaContenedor__img'></img>
        <h1 className='EmpresaContenedor__h1 EmpresaContenedor__h1--modificador'>
          ¿Porque Viajar Con Nosotros?
        </h1>
      </div>
      <div className='imagenessvgContenedor'>
        <p className='imagenessvgContenedor__p'>
          <img
            src={PremioIcono}
            className='imagenessvgContenedor__iconos'
            alt='Medalla'></img>
          <b> Previamente inspeccionados, experimentados y diseñados: </b>
          &nbsp; por nuestros expertos en producto.
        </p>
        <p className='imagenessvgContenedor__p'>
          <img
            src={SeguridadIcono}
            className='imagenessvgContenedor__iconos'
            alt='Seguridad'></img>
          <b> Seguridad privada:</b> &nbsp; de primera calidad que lo acompañara
          en su travesia.
        </p>
        <p className='imagenessvgContenedor__p'>
          <img
            src={SaludIcono}
            className='imagenessvgContenedor__iconos'
            alt='Salud'></img>
          <b>asistencia sanitaria: &nbsp; </b> en el país o fuera de él en caso
          de accidente o enfermedad.
        </p>
        <p className='imagenessvgContenedor__p'>
          <img
            src={DadosIcono}
            className='imagenessvgContenedor__iconos'
            alt='Actividades'></img>
          <b>Actividades exclusivas.</b>
        </p>
        <p className='imagenessvgContenedor__p'>
          <img
            src={AvionIcono}
            className='imagenessvgContenedor__iconos'
            alt='Transporte'></img>
          <b>Transporte ida y vuelta:</b> &nbsp; a su hotel las 24 horas.
        </p>
        <p className='imagenessvgContenedor__p'>
          <img
            src={ManzanaIcono}
            className='imagenessvgContenedor__iconos'
            alt='Gastronomia'></img>
          <b>Servicio Gastronomico:</b>&nbsp;incluido 5 veces por dia, con
          dietas personalizadas.
        </p>
      </div>
      <div className='imagenessvgContenedor--modificador'>
        <p className='imagenessvgContenedor__p--modificador'>
          <img
            src={PremioIcono}
            className='imagenessvgContenedor__iconos--modificador'
            alt='Medalla'></img>
          <b> Previamente inspeccionados, experimentados y diseñados.</b>
        </p>
        <p className='imagenessvgContenedor__p--modificador'>
          <img
            src={SeguridadIcono}
            className='imagenessvgContenedor__iconos--modificador'
            alt='Seguridad'></img>
          <b> Seguridad privada.</b>
        </p>
        <p className='imagenessvgContenedor__p--modificador'>
          <img
            src={SaludIcono}
            className='imagenessvgContenedor__iconos--modificador'
            alt='Salud'></img>
          <b>asistencia sanitaria.</b>
        </p>
        <p className='imagenessvgContenedor__p--modificador'>
          <img
            src={DadosIcono}
            className='imagenessvgContenedor__iconos--modificador'
            alt='Actividades'></img>
          <b>Actividades exclusivas.</b>
        </p>
        <p className='imagenessvgContenedor__p--modificador'>
          <img
            src={AvionIcono}
            className='imagenessvgContenedor__iconos--modificador'
            alt='Transporte'></img>
          <b>Transporte ida y vuelta.</b> &nbsp;
        </p>
        <p className='imagenessvgContenedor__p--modificador'>
          <img
            src={ManzanaIcono}
            className='imagenessvgContenedor__iconos--modificador'
            alt='Gastronomia'></img>
          <b>Servicio Gastronomico.</b>
        </p>
      </div>

      <div className='EmpresaContenedor'>
        <img className='EmpresaContenedor__img'></img>
        <h1 className='EmpresaContenedor__h1 EmpresaContenedor__h1--modificador2'>
          Hoteles Recomendados
        </h1>
      </div>
    </div>
  );
};

Nosotros.propTypes = {};

export default Nosotros;
