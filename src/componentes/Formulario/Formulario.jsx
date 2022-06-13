import React from 'react';
import PropTypes from 'prop-types';
import './Formulario.css';
import { BotonFormulario } from '../../componentes';
const Formulario = (props) => {
  return (
    <div className='ContenedorForm' id='formulario' data-aos='fade-up'>
      <form id='form'>
        <h1 className='Titulo'>Contactanos</h1>
        <div className='formularioPartido'>
          <div className='FormPrimeraParte'>
            <label className='labels' htmlFor='nombre'>
              Nombre
            </label>
            <input
              type='text'
              className='Forminput'
              name='nombre'
              id='nombre'
              required=''
              placeholder='Ingrese su Nombre'></input>
            <label className='labels'>Horario de Contacto</label>
            <select className='selector'>
              <option>10:00 - 12:00</option>
              <option>12:00 - 15:00</option>
              <option>15:00 - 19:00</option>
            </select>
            <label className='labels' htmlFor='CodigoDeArea'>
              Codigo de area
            </label>
            <input
              type='number'
              className='Forminput'
              name='CodigoDeArea'
              id='CodigoDeArea'
              required=''
              placeholder='Ingrese su Numero de area'></input>
          </div>
          <div className='FormSegundaParte'>
            <label className='labels' htmlFor='Provincia'>
              Provincia
            </label>
            <select className='selector' name='Provincia' id='Provincia'>
              <option value='Buenos Aires'>Buenos Aires</option>
              <option value='Capital Federal'>Capital Federal</option>
              <option value='Catamarca'>Catamarca</option>
              <option value='Chaco'>Chaco</option>
              <option value='Chubut'>Chubut</option>
              <option value='Cordoba'>Cordoba</option>
              <option value='Corrientes'>Corrientes</option>
              <option value='Entre Rios'>Entre Rios</option>
              <option value='Formosa'>Formosa</option>
              <option value='Jujuy'>Jujuy</option>
              <option value='La Pampa'>La Pampa</option>
              <option value='La Rioja'>La Rioja</option>
              <option value='Mendoza'>Mendoza</option>
              <option value='Misiones'>Misiones</option>
              <option value='Neuquen'>Neuquen</option>
              <option value='Rio Negro'>Rio Negro</option>
              <option value='Salta'>Salta</option>
              <option value='San Juan'>San Juan</option>
              <option value='San Luis'>San Luis</option>
              <option value='Santa Cruz'>Santa Cruz</option>
              <option value='Santa Fe'>Santa Fe</option>
              <option value='Santiago Del Estero'>Santiago Del Estero</option>
              <option value='Tierra Del Fuego'>Tierra Del Fuego</option>
              <option value='Tucuman'>Tucuman</option>
            </select>
            <label className='labels' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className='Forminput'
              name='email'
              id='email'
              required=''
              placeholder='Ingrese su Email'></input>
            <label className='labels' htmlFor='telefono'>
              Telefono
            </label>
            <input
              type='tel'
              className='Forminput'
              name='telefono'
              id='Telefono'
              required=''
              placeholder='Ingrese su Telefono'></input>
          </div>
        </div>
        <div className='ContenedorConsulta'>
          <label className='labels' htmlFor='Consulta'>
            Consulta
          </label>
          <textarea
            type='text'
            className='Forminput Forminput--textarea'
            name='Consulta'
            id='Consulta'
            required=''
            placeholder='Ingrese su Consulta'></textarea>
        </div>
        <BotonFormulario />
      </form>
    </div>
  );
};

Formulario.propTypes = {};

export default Formulario;
