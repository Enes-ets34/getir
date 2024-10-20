'use client';
import React, {useEffect, useRef, useState} from 'react';
import {InputProps} from './input.types';
import Input from '../input/Input';
import countries from '@assets/countries/countries.json';
import Icon from '../icon/Icon';
import {inputStyles} from './input.styles';

const PhoneNumberInput: React.FC<InputProps> = ({
  type = 'text',
  value,
  className,
  label = 'Telefon Numarası',
  errorText = null,
  disabled = false,
  onChange,
  id,
  setCountryCode,
  ...rest
}) => {
  const [inputId, setInputId] = useState(id || '');
  const [selectedCountry, setSelectedCountry] = useState({
    dial_code: '+90',
    emoji: '🇹🇷',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!id) {
      setInputId(`input-${Math.random().toString(36).substr(2, 9)}`);
    }
  }, [id]);

  const handleCountryCodeChange = (country: any) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    if (setCountryCode) {
      setCountryCode(country.dial_code);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      const selectedIndex = countries.findIndex(
        country => country.dial_code === selectedCountry.dial_code,
      );
      const selectedElement = dropdownRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({behavior: 'smooth', block: 'nearest'});
      }
    }
  }, [isDropdownOpen, selectedCountry]);

  return (
    <div className={inputStyles.wrapper}>
      <div
        onClick={toggleDropdown}
        className={`${
          isDropdownOpen ? 'border-primary' : 'border-borderColorGrayLight'
        } ${inputStyles.dropdown}`}>
        <span>
          {selectedCountry.emoji} {selectedCountry.dial_code}
        </span>
        <Icon
          source={'chevron'}
          size={{width: 12, height: 12}}
          className={
            isDropdownOpen ? 'transform -rotate-90' : 'transform rotate-90'
          }
        />
      </div>

      {isDropdownOpen && (
        <div ref={dropdownRef} className={inputStyles.dropdownList}>
          {countries.map(country => (
            <div
              key={country.code}
              onClick={() => handleCountryCodeChange(country)}
              className={`${
                selectedCountry?.dial_code === country?.dial_code
                  ? 'bg-borderColorPrimaryLight '
                  : ''
              } p-2 hover:bg-grayLight cursor-pointer`}>
              {country.emoji} {country.dial_code}
            </div>
          ))}
        </div>
      )}
      <div className="flex-1">
        <Input
          type={type}
          value={value}
          label={label}
          errorText={errorText || ''}
          disabled={disabled}
          onChange={onChange} // Telefon numarasını kontrol et
          id={inputId}
          className={'px-2'}
          {...rest}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
