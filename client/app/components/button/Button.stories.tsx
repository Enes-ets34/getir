// Button.stories.tsx
import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Button from './Button';
import {ButtonProps} from './button.types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

// Primary Button Story
export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Button',
  color: 'primary',
  onClick: () => alert('Primary Button Clicked'),
};

// Secondary Button Story
export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary Button',
  color: 'secondary',
  onClick: () => alert('Secondary Button Clicked'),
};

// Disabled Button Story
export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Button',
  disabled: true,
  onClick: () => alert('Disabled Button Clicked'),
};

// Outlined Button Story
export const Outlined = Template.bind({});
Outlined.args = {
  text: 'Outlined Button',
  color: 'primary',
  outlined: true,
  onClick: () => alert('Outlined Button Clicked'),
};
