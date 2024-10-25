'use client';

import React, { useEffect, useState } from 'react';
import { useStyles } from './checkbox.styles';
import { CheckboxProps } from './checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  disabled = false,
  description,
  onChange,
  id,
}) => {
  const { inputClassName, labelClassName } = useStyles({ checked, disabled });
  const [inputId, setInputId] = useState(id || '');

  useEffect(() => {
    if (!id) {
      setInputId(`cb-${Math.random().toString(36).substr(2, 9)}`);
    }
  }, [id]);
  return (
    <div className='flex w-full items-center me-4 group'>
      <input
        id={inputId}
        onChange={onChange}
        checked={checked}
        type='checkbox'
        className={inputClassName}
        disabled={disabled}
      />
      <label htmlFor={inputId} className={labelClassName}>
        {description}
      </label>
    </div>
  );
};

export default Checkbox;
