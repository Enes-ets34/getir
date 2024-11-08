import { CartProduct } from '@/queries/cart/cart.types';
import { CartProps } from './cartList.types';
import GoToCartButton from '@/components/go-to-cart-button/GoToCartButton';
import CartListItem from '../cart-list-item/CartListItem';

const CartList: React.FC<CartProps> = ({
  products,
  totalPrice,
  deleteCart,
}) => {
  return (
    <div className='flex flex-col'>
      <ul
        className='py-2 flex flex-col overflow-y-auto max-h-96'
      >
        {products?.map((item: CartProduct, index) => (
          <CartListItem
            key={item?._id}
            products={products}
            item={item}
            className={`transition-none ${
              index + 1 !== products?.length ? 'border-b border-lilac' : ''
            }`}
            deleteCart={deleteCart}
          />
        ))}
      </ul>
      <GoToCartButton className='mt-6' totalPrice={totalPrice} />
    </div>
  );
};
export default CartList;
