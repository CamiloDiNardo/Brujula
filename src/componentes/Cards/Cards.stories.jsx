import React from 'react';
import Cards from './Cards';

export default {
  title: 'Cards',
  Component: Cards,
};

const Template = (args) => <Cards {...args} />;
export const CardsExample = Template.bind({});
