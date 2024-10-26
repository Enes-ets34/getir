'use client';
import React, { useEffect } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import { useModalStore } from '@/store/modal';
import { Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { useAuthStore } from '@/store/auth';
import { useUpdateUserMutation } from '@/queries/users/user.mutation';
import { useLoadingStore } from '@/store/loading';

const UpdateProfile: React.FC = () => {
  const { setTitle } = useModalStore();
  const { user } = useAuthStore();
  const { showLoading, hideLoading } = useLoadingStore();
  const updateProfileMutation = useUpdateUserMutation();
  const { isPending } = updateProfileMutation;
  useEffect(() => {
    setTitle('Hesap bilgilerini güncelle');
  }, [setTitle]);
  useEffect(() => {
    if (isPending) showLoading();
    else hideLoading();
  }, [isPending]);
  const handleOnClick = async (values: FormikValues) => {
    const form = {
      email: values.email,
      fullName: values.fullName,
    };
    await updateProfileMutation.mutateAsync(form);
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Lütfen ad ve soyadını gir.')
      .min(2, 'Ad soyad en az 2 karakter olmalıdır.'),
    email: Yup.string()
      .required('Lütfen e-posta adresini gir.')
      .email('Geçerli bir e-posta adresi girin.'),
  });

  return (
    <Formik
      initialValues={{
        fullName: user?.fullName,
        phone: user?.phone,
        email: user?.email,
      }}
      validationSchema={validationSchema}
      onSubmit={handleOnClick}
      validateOnBlur={true}
      validateOnChange={true}
    >
      {({ values, handleChange, handleBlur, errors, touched, submitForm }) => (
        <div className='flex flex-col gap-4'>
          <Input
            onChange={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            type='text'
            value={values.fullName}
            errorText={
              touched.fullName && errors.fullName ? errors.fullName : ''
            }
          />
          <Input
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            type='email'
            value={values.email}
            errorText={touched.email && errors.email ? errors.email : ''}
          />
          <Input
            disabled
            onChange={handleChange('phone')}
            onBlur={handleBlur('phone')}
            type='text'
            value={values.phone}
            errorText={touched.phone && errors.phone ? errors.phone : ''}
          />
          <Button
            text='Kaydet'
            color='primary'
            onClick={submitForm}
            className='mt-8'
          />
        </div>
      )}
    </Formik>
  );
};

export default UpdateProfile;
