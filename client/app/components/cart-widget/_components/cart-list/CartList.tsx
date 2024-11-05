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
    <ul className='py-2 flex flex-col'>
      {products?.map((item: CartProduct, index) => (
        <CartListItem
          products={products}
          item={item}
          className={`transition-none ${
            index + 1 !== products?.length ? 'border-b border-lilac' : ''
          }`}
          deleteCart={deleteCart}
        />
      ))}
      <GoToCartButton
        className='mt-6'
        handleOnClick={() => {
          console.log('hello');
        }}
        totalPrice={totalPrice}
      />
    </ul>
  );
};
export default CartList;
