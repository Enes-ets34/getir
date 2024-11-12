'use client';

import React from 'react';
import { AddressCardProps } from './addressCard.types';

import { addressCardStyles } from './addressCard.styles';
import Icon from '@/components/icon/Icon';
const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
  if (!address) return null;
  return (
    <div className={addressCardStyles.container}>
      <div className={addressCardStyles?.cardTitle}>
        <p className='font-semibold  text-black'>Adres</p>
      </div>
      <div className={addressCardStyles.addressWrapper}>
        <Icon size={{ width: 24 }} source={'map_pin'} />
        <span className=''>
          {address?.address},{address?.apartment}
        </span>
      </div>
    </div>
  );
};

export default AddressCard;
