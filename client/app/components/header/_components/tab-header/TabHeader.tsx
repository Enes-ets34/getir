'use client';

import React, { useEffect } from 'react';
import { tabHeaderStyles } from './tab-header.styles';
import Icon from '@/components/icon/Icon';
import Input from '@/components/input/Input';
import Link from 'next/link';
import Button from '@/components/button/Button';
import { useCartStore } from '@/store/cart';
import { useAuthStore } from '@/store/auth';
import GoToCartButton from '@/components/go-to-cart-button/GoToCartButton';
import useMediaQuery, { ScreenSizes } from '@/hooks/useMediaQuery';
import { useRouter } from 'next/navigation';

const TabHeader: React.FC = ({}) => {
  const { products, totalPrice } = useCartStore();
  const router = useRouter();
  const { user } = useAuthStore();
  const isMobileScreen = useMediaQuery(ScreenSizes.Small);
  const handleOnClick = () => {
    console.log('clicked...');
  };
  return (
    <div className={tabHeaderStyles.wrapperStyle}>
      <div className={tabHeaderStyles.container}>
        <li
          className='cursor-pointer list-none'
          onClick={() => {
            router?.push('/');
          }}
        >
          <Icon source={'getir'} size={{ width: 60, height: 27 }} />
        </li>
        <div className={tabHeaderStyles.inputWrapperStyle}>
          <Input
            placeholder='Ürün ara'
            type={'text'}
            icon={'search'}
            iconSize={{ width: 15, height: 15 }}
            className={tabHeaderStyles.inputStyle}
          />
          <div className={tabHeaderStyles.TVSWrapper}>
            <div className={tabHeaderStyles.TVSIcons}>
              <Icon source={'house'} size={{ width: 22, height: 16 }} />
              <p className='text-grayMid font-bold'>Ev</p>
              <Icon source={'chevron'} size={{ width: 12, height: 12 }} />
            </div>
            <div className={tabHeaderStyles.TVS}>TVS 15-20 dk</div>
          </div>
        </div>
        {!!user && !!products && products?.length > 0 && (
          <div className={tabHeaderStyles.cartContainer}>
            <div className={tabHeaderStyles.cartIcon}>
              <Icon source={'bag'} size={{ width: 34, height: 34 }} />
            </div>
            {isMobileScreen ? (
              <GoToCartButton
                handleOnClick={() => handleOnClick}
                totalPrice={totalPrice}
              />
            ) : (
              <div className={tabHeaderStyles.cartPriceContainer}>
                <span className={tabHeaderStyles.cartPrice}>
                  ₺{JSON?.stringify(totalPrice)?.slice(0, 5)}
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabHeader;
