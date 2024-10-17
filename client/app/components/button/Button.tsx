'use client';

import React from 'react';
import {ButtonProps} from './button.types';
import {useStyles} from './button.styles';

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  color = 'bg-primary',
  textColor = 'text-white',
  disabled = false,
  className = '',
  outlined = false,
}) => {
  const finalClassName = useStyles(
    color,
    textColor,
    disabled,
    outlined,
    className,
  );

  return (
    <button className={finalClassName} onClick={onClick} disabled={disabled}>
      <span className='font-semibold'>{text}</span>
    </button>
  );
};

export default Button;
