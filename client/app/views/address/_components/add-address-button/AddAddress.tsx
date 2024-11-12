'use client';
import React from 'react';

import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import { AddAddressProps } from './addAddress.types';
import { addAddressStyles } from './addAddress.styles';

export default function AddAddress({ openAddressForm }: AddAddressProps) {
  return (
    <div className='pb-5'>
      <h4 className={addAddressStyles.title}>Adres Ekle</h4>
      <div className={addAddressStyles.wrapper}>
        <div onClick={openAddressForm} className={addAddressStyles.container}>
          <div className={addAddressStyles.flex}>
            <div className={addAddressStyles.iconWrapper}>
              <Icon source={'house'} size={{ width: 24 }} />
            </div>
            <div className='font-semibold'>
              <span className='text-black'>Ev Adresi ekle</span>
            </div>
          </div>
          <Icon source={'plus'} size={{ width: 12 }} color={Colors.primary} />
        </div>
      </div>
    </div>
  );
}
