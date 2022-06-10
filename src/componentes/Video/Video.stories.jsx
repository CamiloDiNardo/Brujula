import React from 'react';
import Video from './Video';

export default {
  title: 'Video',
  Component: Video,
};

const Template = (args) => <Video {...args} />;
export const VideoExample = Template.bind({});
