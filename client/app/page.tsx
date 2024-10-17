'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import Colors, {colors} from './theme/Colors';
import Input from './components/input/Input';
import {useEffect, useState} from 'react';
import PhoneNumberInput from './components/phone-number-input/Input';

export default function Home() {
  const onClick = (): void => {
    console.log('hello');
  };
  const [value, setValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  return (
    <div>
      home
      <Button text="deneme" onClick={onClick} />
      <div className="bg-red 500 p-5">
        <Icon
          source="language"
          color={Colors.brandYellow}
          size={{width: 12, height: 24}}
        />
        <Icon source="language" size={{width: 12, height: 24}} />
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="text"
            errorText="Lütfen TC Kimlik No gir"
            className=""
          />
          <Input
            onChange={e => setValue(e.target.value)}
            value={value}
            icon="alert_circle"
            type="text"
            label="text"
          />
        </div>
      </div>
    </div>
  );
}
