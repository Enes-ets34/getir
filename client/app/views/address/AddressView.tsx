'use client';
import React, { useEffect, useRef, useState } from 'react';

import { AddressViewProps } from './address.types';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import AddressForm from './_components/address-form/AddressForm';
import { useAddressStore } from '@/store/address';
import { useDeleteAddressMutation } from '@/queries/address/address.mutation';
import { useGetAddressByIdQuery } from '@/queries/address/address.query';
import { useLoadingStore } from '@/store/loading';
import AddressList from './_components/address-list/AddressList';
import { Address } from '@/queries/address/address.types';
import { addressStyles } from './address.styles';
import AddAddress from './_components/add-address-button/AddAddress';

export default function AddressView({ addressData }: AddressViewProps) {
  const [addressForm, setAddressForm] = useState<boolean>(false);
  const addressFormRef = useRef<HTMLDivElement | null>(null);
  const { selectedAddress, setSelectedAddress } = useAddressStore();
  const { showLoading, hideLoading } = useLoadingStore();
  const { refetch } = useGetAddressByIdQuery();
  const deleteAddressMutation = useDeleteAddressMutation();
  const { isSuccess, isPending } = deleteAddressMutation;
  const openAddressForm = () => {
    setAddressForm(true);
    setTimeout(() => {
      addressFormRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  const handleDeleteAddress = async (addressId: string) => {
    console.log('buraya tiklandi');
    await deleteAddressMutation.mutate(addressId);
  };
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);
  useEffect(() => {
    if (isPending) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isPending]);
  return (
    <div className={addressStyles.wrapper}>
      {!addressForm ? (
        <h2 className={addressStyles.title}>Adreslerim</h2>
      ) : (
        <div
          onClick={() => setAddressForm(false)}
          className={addressStyles.backButton}
        >
          <Icon
            source={'chevron'}
            size={{ width: 12 }}
            color={Colors.primary}
            className='transform rotate-180'
          />
          Adreslerim&apos;e geri dön
        </div>
      )}
      <div className={addressStyles.card}>
        {!addressForm ? (
          <>
            <AddressList
              addressData={addressData}
              selectedAddress={selectedAddress as Address}
              setSelectedAddress={setSelectedAddress}
              handleDeleteAddress={handleDeleteAddress}
            />

            <AddAddress openAddressForm={openAddressForm} />
          </>
        ) : (
          <div ref={addressFormRef} className='px-5 pb-5'>
            <AddressForm setAddressForm={setAddressForm} />
          </div>
        )}
      </div>
    </div>
  );
}
