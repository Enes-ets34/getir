import React from 'react';
import { useIsDeleteCart } from '@/hooks/useIsDeleteCart';
import { CartItemProps } from './cartItem.types';
import { useCartStore } from '@/store/cart';
import Image from '@/components/image/Image';
import Counter from '@/components/counter/Counter';
import { cartItemStyles } from './cartItem.styles';

const CartItem: React.FC<CartItemProps> = ({
  item,
  increment,
  decrement,
  deleteCart,
}) => {
  const { products } = useCartStore();
  const isDeleteCart = useIsDeleteCart(products, item ? item.product._id : '');
  if (!item) return null;
  return (
    <div key={item._id} className={cartItemStyles.wrapper}>
      <div className={cartItemStyles.body}>
        <Image
          src={item.product.imageUrl || ''}
          alt={item.product.title || 'Product Image'}
          width={80}
          height={80}
          className={cartItemStyles.image}
        />
        <div className={cartItemStyles.detail}>
          <div className='flex gap-2'>
            <p
              className={
                item.product.discountedPrice
                  ? ' text-grayStorm line-through'
                  : 'text-primary font-semibold'
              }
            >
              ₺{item.product.price}
            </p>
            {item.product.discountedPrice && (
              <p className='text-primary font-semibold'>
                ₺{item.product.discountedPrice}
              </p>
            )}
          </div>

          <div className='flex flex-col'>
            <p className={cartItemStyles?.title}>{item.product.title}</p>
            <p className={cartItemStyles?.description}>
              {item.product.description}
            </p>
          </div>
        </div>
      </div>
      <Counter
        direction='horizontal'
        onDecrease={() => {
          if (item.quantity === 1 && isDeleteCart && deleteCart) {
            deleteCart();
          } else if (decrement) {
            decrement(item.product._id);
          }
        }}
        onIncrease={() => (increment ? increment(item.product._id) : () => {})}
        quantity={item.quantity}
      />
    </div>
  );
};

export default CartItem;
