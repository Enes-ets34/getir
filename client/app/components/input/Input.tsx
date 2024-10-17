'use client';
import React, {useEffect, useState} from 'react';
import {InputProps} from './input.types';
import Icon from '../icon/Icon';
import {useStyles} from './input.styles';
import Colors from '@/theme/Colors';

const Input: React.FC<InputProps> = ({
  placeholder = null,
  type = 'text',
  value,
  className,
  icon = null,
  label,
  errorText = null,
  iconSize = {width: 16, height: 16},
  disabled = false,
  onChange,
  id,
  ...rest
}) => {
  const [inputId, setInputId] = useState(id || '');

  useEffect(() => {
    if (!id) {
      setInputId(`input-${Math.random().toString(36).substr(2, 9)}`);
    }
  }, [id]);

  const {
    relative,
    inputClassName,
    labelClassName,
    errorClassName,
    iconClassName,
    errorIconClassName,
  } = useStyles({
    disabled,
    errorText,
    className,
    hasIcon: !!icon,
    value,
  });

  return (
    <div className='flex flex-col'>
      <div className={relative}>
        {icon && (
          <Icon
            source={icon}
            className={iconClassName}
            color={disabled ? Colors.gray50 : Colors.primary}
            size={iconSize}
          />
        )}
        <input
          onChange={onChange}
          id={inputId}
          type={type}
          disabled={disabled}
          className={`${inputClassName}`}
          placeholder={placeholder || ' '}
          value={value}
          {...rest}
        />
        {label && (
          <label htmlFor={inputId} className={labelClassName}>
            {label}
          </label>
        )}
        {errorText && (
          <Icon
            source={'alert_circle'}
            color={Colors.borderColorError}
            className={errorIconClassName}
            size={{width: 22, height: 22}}
          />
        )}
      </div>
      {errorText && <small className={errorClassName}>{errorText}</small>}
    </div>
  );
};

export default Input;
