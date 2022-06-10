import React from 'react';
import Formulario from './Formulario';

export default {
  title: 'Formulario',
  Component: Formulario,
};

const Template = (args) => <Formulario {...args} />;
export const FormularioExample = Template.bind({});
