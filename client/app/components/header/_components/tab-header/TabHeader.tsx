'use client';

import React, { useState } from 'react';
import { tabHeaderStyles } from './tab-header.styles';
import Icon from '@/components/icon/Icon';
import Input from '@/components/input/Input';
import ProductsDropdown from '@/components/products-dropdown/ProductsDropdown';
import { useCartStore } from '@/store/cart';
import { useAuthStore } from '@/store/auth';
import GoToCartButton from '@/components/go-to-cart-button/GoToCartButton';
import useMediaQuery, { ScreenSizes } from '@/hooks/useMediaQuery';
import { useRouter } from 'next/navigation';

const TabHeader: React.FC = ({}) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const { products, totalPrice } = useCartStore();
  const router = useRouter();
  const { user } = useAuthStore();
  const isMobileScreen = useMediaQuery(ScreenSizes.Small);

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
          <div
            onClick={() => setDropdown(prev => !prev)}
            className={tabHeaderStyles.cartContainer}
          >
            <div className={tabHeaderStyles.cartIcon}>
              <Icon source={'bag'} size={{ width: 34, height: 34 }} />
            </div>
            {!isMobileScreen && (
              <ProductsDropdown
                isOpen={dropdown}
                setDropdown={() => setDropdown(prev => !prev)}
              />
            )}
            {isMobileScreen ? (
              <GoToCartButton totalPrice={totalPrice} />
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
