import React from 'react';
import Header from './Header';

export default {
  title: 'Header',
  Component: Header,
};

const Template = (args) => <Header {...args} />;
export const HeaderExample = Template.bind({});
