import React from 'react';
import Mapa from './Mapa';

export default {
  title: 'Mapa',
  Component: Mapa,
};

const Template = (args) => <Mapa {...args} />;
export const MapaExample = Template.bind({});
