import React from 'react';
import Preloader from './Preloader';

export default {
  title: 'Preloader',
  Component: Preloader,
};

const Template = (args) => <Preloader {...args} />;
export const PreloaderExample = Template.bind({});
