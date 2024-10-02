'use client';

import React from 'react';
import {ButtonProps} from './button.types';
import {buttonStyles} from './button.styles';

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  variant = 'primary',
}) => {
  const className = `${buttonStyles.base} ${
    variant === 'primary' ? buttonStyles.primary : buttonStyles.secondary
  }`;
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
