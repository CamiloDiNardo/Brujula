import React from 'react';
import DatosFlota from '../../Flota.json';
import { FlotaCaracteristicas } from '../../componentes';

const MapFlotaCaracteristicas = () => {
  console.log(DatosFlota);
  return (
    <div>
      <div className='FlotaContenedor'>
        <div data-aos='fade-up'>
          {DatosFlota.map(
            (
              {
                titulo,
                asientos,
                largo,
                envergadura,
                alcance,
                cantidad,
                texto,
                avion,
              },
              index
            ) => (
              <FlotaCaracteristicas
                titulo={titulo}
                asientos={asientos}
                largo={largo}
                envergadura={envergadura}
                alcance={alcance}
                cantidad={cantidad}
                texto={texto}
                avion={avion}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default MapFlotaCaracteristicas;
