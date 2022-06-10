import React from 'react';
import MapCards from './MapCards';

export default {
  title: 'MapCards',
  Component: MapCards,
};

const Template = (args) => <MapCards {...args} />;
export const MapCardsExample = Template.bind({});
