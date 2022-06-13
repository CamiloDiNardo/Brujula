import React from 'react';
import './InfoCards.css';
const InfoCards = ({
  clima,
  excursiones,
  servicios,
  temporada,
  monedas,
  prohibido,
  info,
}) => {
  return (
    <div>
      <li>
        Clima:
        <b />
        {clima}
      </li>
      <br />
      <li>
        Excursiones Recomendadas:
        <b />
        {excursiones}
      </li>
      <br />
      <li>
        Servicios:
        <b />
        {servicios}
      </li>
      <br />
      <li>
        Temporada Turistica:
        <b />
        {temporada}
      </li>
      <br />
      <li>
        Monedas Admitidas:
        <b />
        {monedas}
      </li>
      <br />
      <li>
        Prohibido:
        <b />
        {prohibido}
      </li>
      <br />
      <p>{info}</p>
    </div>
  );
};

export default InfoCards;
