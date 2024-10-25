import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import  { CheckboxProps } from './checkbox.types';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    description: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<CheckboxProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={(e) => {
        setIsChecked(e.target.checked);
        args.onChange(e);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  description: 'Checkbox label',
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  description: 'Checked Checkbox label',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  description: 'Disabled Checkbox label',
  disabled: true,
};
