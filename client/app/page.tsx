'use client';
import Button from '@/components/button/Button';
import Icon from '@/components/icon/Icon';
import Colors from './theme/Colors';
import Input from './components/input/Input';
import { useState} from 'react';
import {ToastEnum} from './components/toast/toast.types';
import {useToastStore} from './store/toast';
import { useLoadingStore } from './store/loading';

export default function Home() {
  const {addToast} = useToastStore();
  const {showLoading} = useLoadingStore();
  const onClick = (): void => {
    console.log('hello');
    addToast('Kullanıcı Adı veya şifre yanlış', ToastEnum.ERROR);
    showLoading()
  };
  const [value, setValue] = useState('');
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
