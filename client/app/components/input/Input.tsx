import React from 'react';
import {InputProps} from './input.types';
import {inputStyles} from './input.styles';
import Icon from '@/components/icon/Icon'; // Icon'u içe aktar
import Colors from '@/theme/Colors';

const Input: React.FC<InputProps> = ({
  placeholder = 'Enter text...',
  type = 'text',
  value,
  onChange,
  className = '',
  icon,
  disabled = false,
  label = null,
  errorText = null,
  iconSize = {width: 14, height: 14},
}) => {
  return (
    <div>
      <div className={`${inputStyles.wrapper} ${errorText ? ' mb-1' : ''}`}>
        {icon && (
          <Icon source={icon} size={iconSize} className={inputStyles.icon} />
        )}
        <input
          id="floating_filled"
          disabled={disabled}
          type={type}
          value={value}
          placeholder={label ? ' ' : placeholder || ' '}
          onChange={onChange}
          className={`
            ${inputStyles.base} 
            ${icon ? inputStyles.inputWithIcon : ''}
            ${disabled ? inputStyles.disabled : ''}
            ${errorText ? inputStyles.error : ''}
            ${className} 
        `}
        />
        {label && (
          <label
            htmlFor="floating_filled"
            className={`${inputStyles.label} ${icon ? ' left-10 top-2' : ' '}`}>
            {label}
          </label>
        )}
        {errorText && <Icon source={'alert_circle'} color={Colors.danger} size={{width:16,height:16}} className='absolute right-2' />}
        </div>
      {errorText && <span className={inputStyles.errorText}>{errorText}</span>}
    </div>
  );
};

export default Input;
