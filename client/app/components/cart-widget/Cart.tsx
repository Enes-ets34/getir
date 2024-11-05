import Icon from '../icon/Icon';
import { CartProps } from './cart.types';
import { cartStyles } from './cart.styles';
import CartList from './_components/cart-list/CartList';
import { useDeleteCartMutation } from '@/queries/cart/cart.mutation';

const Cart: React.FC<CartProps> = ({ products, totalPrice }) => {
  const { deleteCart } = useDeleteCartMutation();
  if (!products) return null;

  return (
    <div className={cartStyles.wrapper}>
      <h3 className={cartStyles.title}>Sepetim</h3>
      <div
        className={
          cartStyles.container + ` ${products?.length > 0 ? 'px-5 pb-5' : ''}`
        }
      >
        {products?.length === 0 ? (
          <div className={cartStyles.emptyStateContainer}>
            <Icon source={'bag_lilac'} size={{ width: 72, height: 102 }} />
            <div className='text-center pt-10'>
              <p className={cartStyles.emptyStateTitle}>
                Sepetin şu an boş
              </p>
              <p className={cartStyles.emptyStateDescription}>
                Sipariş vermek için sepetine ürün ekle
              </p>
            </div>
          </div>
        ) : (
          <CartList products={products} totalPrice={totalPrice} deleteCart={deleteCart} />
        )}
      </div>
    </div>
  );
};
export default Cart;
