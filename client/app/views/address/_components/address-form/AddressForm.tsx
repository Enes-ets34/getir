'use client';
import React, { ComponentType, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { useCreateAddressMutation } from '@/queries/address/address.mutation';
import { useGetAddressByIdQuery } from '@/queries/address/address.query';
import { AddressFormProps } from './addressForm.types';
import { MapComponentProps } from '@/components/map/map.types';
import dynamic from 'next/dynamic';

const Map: ComponentType<MapComponentProps> = dynamic(
  () => import('@/components/map/Map'),
  {
    ssr: false, // SSR devre dışı bırak
    loading: () => <div>Harita yükleniyor...</div>, // Yükleme durumu
  }
);

export default function AddressForm({ setAddressForm }: AddressFormProps) {
  const [selectedLatLong, setSelectedLatLong] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleLocationSelect = (lat: number, lng: number) => {
    setSelectedLatLong({ lat, lng });
  };

  const createAddressMutation = useCreateAddressMutation();
  const { refetch } = useGetAddressByIdQuery();

  const { isSuccess } = createAddressMutation;

  const formik = useFormik({
    initialValues: {
      title: '',
      address: '',
      apartment: '',
      description: '',
      floor: '',
      number: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Başlık gerekli'),
      address: Yup.string().required('Adres gerekli'),
      apartment: Yup.string(),
      description: Yup.string(),
      floor: Yup.string(),
      number: Yup.string(),
    }),
    onSubmit: values => {
      if (selectedLatLong) {
        const newAddress = {
          ...values,
          lat: selectedLatLong.lat,
          long: selectedLatLong.lng,
        };
        createAddressMutation.mutate(newAddress);
      } else {
        console.log('Lütfen haritadan bir konum seçin.');
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
      if (setAddressForm) {
        setAddressForm(false);
      }
    }
  }, [isSuccess, refetch]);

  return (
    <div>
      <Map onLocationSelect={handleLocationSelect} />

      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-2'>
        <Input
          label='Başlık'
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          errorText={formik.errors.title}
        />
        <Input
          label='Adres'
          name='address'
          value={formik.values.address}
          onChange={formik.handleChange}
          errorText={formik.errors.address}
        />
        <div className='flex justify-between items-center gap-2'>
          <Input
            label='Bina'
            name='apartment'
            value={formik.values.apartment}
            onChange={formik.handleChange}
            errorText={formik.errors.apartment}
          />
          <Input
            label='Kat'
            name='floor'
            value={formik.values.floor}
            onChange={formik.handleChange}
            errorText={formik.errors.floor}
          />
          <Input
            label='Numara'
            name='number'
            value={formik.values.number}
            onChange={formik.handleChange}
            errorText={formik.errors.number}
          />
        </div>
        <Input
          label='Açıklama'
          name='description'
          value={formik.values.description}
          onChange={formik.handleChange}
          errorText={formik.errors.description}
        />
        <Button
          color='primary'
          type='submit'
          text='Kaydet'
          className='mt-2'
          onClick={() => {}}
        />
      </form>
    </div>
  );
}
