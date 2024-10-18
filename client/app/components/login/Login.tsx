'use client';
import React, {useEffect} from 'react';
import Input from '../input/Input';
import {useModalStore} from '@/store/modal';
import Register from '../register/Register';
import PhoneNumberInput from '../phone-number-input/Input';
import Button from '../button/Button';
import {registerStyles} from '../register/register.styles';

const Login: React.FC = () => {
  const {setContent, setTitle, setBottom} = useModalStore();

  useEffect(() => {
    setBottom(
      <div className={registerStyles.bottomText}>
        Hala kayıt olmadın mı?{' '}
        <span
          onClick={() => {
            setContent(<Register />);
          }}
          className={registerStyles.actionLink}>
          Kayıt ol
        </span>
      </div>,
    );
    setTitle('Giriş yap veya kayıt ol');
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <PhoneNumberInput />
      <Button
        color="secondary"
        onClick={() => {}}
        text="Telefon numarası ile devam et"
      />
      <small className="mt-4 text-grayMid">
        Kişisel verilerine dair Aydınlatma Metni için{' '}
        <span className={registerStyles.link}>tıklayınız</span> .
      </small>
    </div>
  );
};

export default Login;
