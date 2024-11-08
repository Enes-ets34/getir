'use client';

import React from 'react';
import { TotalPriceProps } from './totalPrice.types';

import { totalPriceStyles } from './totalPrice.styles';
const TotalPrice: React.FC<TotalPriceProps> = ({ totalPrice,className }) => {
  return (
    <div className={`${totalPriceStyles.container} ${className}`}>
      <div className={totalPriceStyles?.cardTitle}>
        <p className='font-semibold  text-black'>Sepet Tutarı</p>
      </div>
      <div className={totalPriceStyles.totalPriceWrapper}>
          <span className='font-bold text-grayDark'>Sepet Tutarı</span>
          <span className='font-bold text-grayStorm'>₺{totalPrice}</span>
      </div>
    </div>
  );
};

export default TotalPrice;
