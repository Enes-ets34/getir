import Counter from '@/components/counter/Counter';
import { CartItemProps } from './cartListItem.types';
import { useUpdateCartMutation } from '@/queries/cart/cart.mutation';
import { useIsDeleteCart } from '@/hooks/useIsDeleteCart';

const CartListItem: React.FC<CartItemProps> = ({
  item,
  className,
  deleteCart,
  products,
}) => {
  const { increment, decrement } = useUpdateCartMutation();
  const isDeleteCart = useIsDeleteCart(products, item?.product?._id || '');


  const handleIncrease = () => {
    if (item) {
      increment(item.product._id);
    }
  };

  const handleDecrease = () => {
    if (item) {
      if (item?.product?.quantity === 1 && isDeleteCart && deleteCart) {
        deleteCart();
      } else {
        decrement(item.product._id);
      }
    }
  };

  return (
    <li className={`flex justify-between items-center py-2 ${className || ''}`}>
      <span className='flex flex-col'>
        <p className='text-black'>
          {item?.product.title && item?.product.title.length > 15
            ? item?.product.title.slice(0, 15) + '...'
            : item?.product.title}
        </p>
        <p className='text-primary font-semibold'>₺{item?.product.discountedPrice || item?.product.price}</p>
      </span>
      <Counter
        quantity={item?.quantity || 0}
        productId={item?._id}
        direction={'horizontal'}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </li>
  );
};

export default CartListItem;
