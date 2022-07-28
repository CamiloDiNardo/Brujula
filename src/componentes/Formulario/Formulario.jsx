import React from 'react';
import styles from './Formulario.module.css';
import { BotonFormulario } from '../../componentes';
const Formulario = () => {
  return (
    <div className={styles.ContenedorForm} id='formulario' data-aos='fade-up'>
      <form id='form'>
        <h1 className={styles.Titulo}>Contactanos</h1>
        <div className={styles.formularioPartido}>
          <div className={styles.FormPrimeraParte}>
            <label className={styles.labels} htmlFor='nombre'>
              Nombre
            </label>
            <input
              type='text'
              className={styles.Forminput}
              name='nombre'
              id='nombre'
              required=''
              placeholder='Ingrese su Nombre'></input>
            <label className={styles.labels}>Horario de Contacto</label>
            <select className={styles.selector}>
              <option>10:00 - 12:00</option>
              <option>12:00 - 15:00</option>
              <option>15:00 - 19:00</option>
            </select>
            <label className={styles.labels} htmlFor='CodigoDeArea'>
              Codigo de area
            </label>
            <input
              type='number'
              className={styles.Forminput}
              name='CodigoDeArea'
              id='CodigoDeArea'
              required=''
              placeholder='Ingrese su Numero de area'></input>
          </div>
          <div className={styles.FormSegundaParte}>
            <label className={styles.labels} htmlFor='Provincia'>
              Provincia
            </label>
            <select className={styles.selector} name='Provincia' id='Provincia'>
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
            <label className={styles.labels} htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              className={styles.Forminput}
              name='email'
              id='email'
              required=''
              placeholder='Ingrese su Email'></input>
            <label className={styles.labels} htmlFor='telefono'>
              Telefono
            </label>
            <input
              type='tel'
              className={styles.Forminput}
              name='telefono'
              id='Telefono'
              required=''
              placeholder='Ingrese su Telefono'></input>
          </div>
        </div>
        <div className={styles.ContenedorConsulta}>
          <label className={styles.labels} htmlFor='Consulta'>
            Consulta
          </label>
          <textarea
            type='text'
            className={`${styles.Forminput} ${styles.Forminput__textarea}`}
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
export default Formulario;
