'use client';
import React, {useEffect} from 'react';
import {useModalStore} from '@/store/modal';
import Button from '@/components/button/Button';
import {registerStyles} from '@/components/register/register.styles';
import {useLoginMutation} from '@/queries/auth/auth.mutation';
import {useLoadingStore} from '@/store/loading';
import Input from '@/components/input/Input';
import {PasswordProps} from './password.types';
import * as Yup from 'yup';
import {Formik} from 'formik';
import { passwordStyles } from './password.styles';

const Password: React.FC<PasswordProps> = ({loginPhoneNumber = ''}) => {
  const {setTitle, setBottom, setBackButton} = useModalStore();
  const {showLoading, hideLoading} = useLoadingStore();
  const loginMutation = useLoginMutation();
  const {isPending} = loginMutation;

  useEffect(() => {
    setBottom(
      <div className={registerStyles.bottomText}>
        Şifreni mi unuttun?{' '}
        <span
          onClick={() => {
            console.log('reset password');
          }}
          className={registerStyles.actionLink}>
          tıklayarak sıfırla.
        </span>
      </div>,
    );
    setTitle('Tek kullanımlık şifre');
    setBackButton(true);
    return () => {
      setBackButton(false);
    };
  }, []);

  const handleLogin = async (values: any) => {
    const form = {
      phone: loginPhoneNumber,
      password: values.password,
    };
    await loginMutation.mutateAsync(form);
  };

  useEffect(() => {
    isPending ? showLoading() : hideLoading();
  }, [isPending]);
  const validationSchema = Yup.object({
    password: Yup.string()
      .required('Lütfen şifreni gir.')
      .min(6, 'Şifre en az 6 karakter olmalıdır.'),
  });
  return (
    <Formik
      initialValues={{phone: loginPhoneNumber, password: ''}}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
      validateOnBlur={true}
      validateOnChange={true}>
      {({values, handleChange, handleBlur, errors, touched, submitForm}) => (
        <div className={passwordStyles.wrapper}>
          <p className={passwordStyles.message}>
            Lütfen {loginPhoneNumber} numaralı telefonuna gönderilen tek
            kullanımlık şifreyi gir
          </p>
          <Input
            onChange={handleChange('password')}
            onBlur={handleBlur('password')}
            type="password"
            label="Şifre"
            value={values.password}
            errorText={
              touched.password && errors.password ? errors.password : ''
            }
          />
          <Button
            color="primary"
            onClick={submitForm}
            text="Onayla ve giriş yap"
          />
        </div>
      )}
    </Formik>
  );
};

export default Password;
