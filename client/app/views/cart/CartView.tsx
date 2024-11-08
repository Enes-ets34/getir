'use client';

import React from 'react';
import { CartProps } from './cart.types';

import Products from './_components/cart-list/Products';
import AddressCard from './_components/address-card/AddressCard';
import TotalPrice from './_components/total-price/TotalPrice';
import Button from '@/components/button/Button';
import { cartViewStyles } from './cart.styles';
const CartView: React.FC<CartProps> = ({
  user,
  products,
  increment,
  decrement,
  deleteCart,
  totalPrice,
}) => {
  const handleOnClick = () => {
    console.log('clicked...');
  };
  if (!user) return null;
  return (
    <>
      {user && (
        <div className={cartViewStyles.wrapper}>
          <Products
            products={products}
            increment={increment}
            decrement={decrement}
            deleteCart={deleteCart}
          />
          <div className={cartViewStyles.secondSection}>
            <AddressCard address='Yavuz Sultan Selim Blv., No:28' />
            <TotalPrice
              totalPrice={totalPrice || 0}
              className='hidden md:block'
            />
            <Button
              className='hidden sm:block'
              text='Ödemeye Geç'
              color='primary'
              onClick={handleOnClick}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CartView;
