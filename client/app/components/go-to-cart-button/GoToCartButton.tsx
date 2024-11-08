import React from 'react';
import { GoToCartButtonProps } from './button.types';
import { buttonStyles } from './button.styles';
import Button from '../button/Button';
import { useRouter } from 'next/navigation';

const GoToCartButton: React.FC<GoToCartButtonProps> = ({
  totalPrice,
  className,
}) => {
  const router = useRouter();
  return (
    <div
      className={`${buttonStyles.cartPriceContainer} ${
        className ? className : ''
      }`}
    >
      <Button
        onClick={() => router?.push('/cart')}
        color='primary'
        text='Sepete git'
        className='rounded-r-none w-full'
      />
      <span className={buttonStyles.cartPrice}>
        ₺{JSON?.stringify(totalPrice)?.slice(0, 5)}
      </span>
    </div>
  );
};
export default GoToCartButton;
