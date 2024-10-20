'use client';
import React, {useEffect, useState} from 'react';
import {useModalStore} from '@/store/modal';
import Register from '../register/Register';
import PhoneNumberInput from '../phone-number-input/Input';
import Button from '../button/Button';
import {registerStyles} from '../register/register.styles';
import {useLoginMutation} from '@/queries/auth/auth.mutation';
import {useLoadingStore} from '@/store/loading';

const Login: React.FC = () => {
  const {setContent, setTitle, setBottom} = useModalStore();
  const [phoneNumber, setPhoneNumber] = useState('');
  const {showLoading, hideLoading} = useLoadingStore();
  const loginMutation = useLoginMutation();
  const {isPending} = loginMutation;

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
  }, [setBottom, setTitle]);

  const handleLogin = async () => {
    await loginMutation.mutateAsync({phoneNumber});
  };
  useEffect(() => {
    isPending ? showLoading() : hideLoading();
  }, [isPending]);
  return (
    <div className="flex flex-col gap-2">
      <PhoneNumberInput
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <Button
        color="secondary"
        onClick={handleLogin}
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
