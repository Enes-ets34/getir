import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Animated from './Animated';
import {AnimatedProps} from './animated.types';

export default {
  title: 'Components/Animated',
  component: Animated,
  argTypes: {
    initial: {control: 'object'},
    animate: {control: 'object'},
    exit: {control: 'object'},
    transition: {control: 'object'},
  },
} as Meta;

const Template: StoryFn<AnimatedProps> = (args: AnimatedProps) => (
  <Animated {...args}>
    <div
      style={{
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '8px',
      }}>
      Animated Content
    </div>
  </Animated>
);

export const Default = Template.bind({});
Default.args = {
  initial: {x: '100%', opacity: 0},
  animate: {x: '0', opacity: 1},
  exit: {x: '100%', opacity: 0},
  transition: {duration: 0.5, ease: 'linear'},
};
