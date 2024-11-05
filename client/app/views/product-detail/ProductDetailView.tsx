import Button from '@/components/button/Button';
import { ProductDetailViewProps } from './productDetail.types';
import Image from '@/components/image/Image';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import { productDetailStyles } from './productDetail.styles';
import { useCartStore } from '@/store/cart';
import { CartProduct } from '@/queries/cart/cart.types';
import Counter from '@/components/counter/Counter';
import {
  useCreateCartMutation,
  useDeleteCartMutation,
  useUpdateCartMutation,
} from '@/queries/cart/cart.mutation';
import { useIsDeleteCart } from '@/hooks/useIsDeleteCart';
import { useAuthStore } from '@/store/auth';
import { useModalStore } from '@/store/modal';
import Login from '@/components/login-modal/Login';

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const { products } = useCartStore();
  const { user } = useAuthStore();
  const { openModal,setContent } = useModalStore();
  const { increment, decrement } = useUpdateCartMutation();
  const createCartMutation = useCreateCartMutation();
  const { deleteCart } = useDeleteCartMutation();
  const isDeleteCart = useIsDeleteCart(products, product?._id);
  const avaliableProduct = products?.find(
    (cartProduct: CartProduct) => cartProduct?.product?._id === product?._id
  );
  const handleIncrease = () => {
    if (avaliableProduct) {
      increment(avaliableProduct.product._id);
    } else {
      increment(product._id);
    }
  };
  const handleOnClick = () => {
    if (!user) {
      openModal()
      setContent(<Login />);
    } else {
      if (products?.length > 0) {
        handleIncrease();
      } else {
        createCartMutation.mutate({
          products: [
            {
              product: product?._id,
              quantity: 1,
            },
          ],
        });
      }
    }
  };

  const handleDecrease = () => {
    if (avaliableProduct) {
      decrement(avaliableProduct.product._id);
      if (isDeleteCart) {
        deleteCart();
      }
    }
  };
  return (
    <div className={productDetailStyles.wrapper}>
      <div className={productDetailStyles.image}>
        <Image
          src={product?.imageUrl as string}
          className=' rounded-borderRadiusL'
        />
      </div>
      <div className={productDetailStyles.detail}>
        <div className='flex flex-col items-start'>
          <p className={productDetailStyles.title}>{product?.title}</p>
          <p className={productDetailStyles.description}>
            {product?.description}
          </p>
          {product?.discountedPrice && (
            <p className={productDetailStyles?.discountedPrice}>
              ₺{product?.discountedPrice}
            </p>
          )}
          <p className={productDetailStyles.price}>₺{product?.price}</p>
          {avaliableProduct && user ? (
            <div className='mt-12'>
              <Counter
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={avaliableProduct?.quantity}
              />
            </div>
          ) : (
            <Button
              color='primary'
              onClick={handleOnClick}
              text='Sepete Ekle'
              className='px-12 py-3.5 my-6'
            />
          )}
        </div>
        <div className={productDetailStyles.favorite}>
          <Icon
            source={'heart'}
            size={{ width: 18 }}
            color={Colors.grayBright}
            className={`group-hover:fill-[#b2a2e0] `}
          />
          Favorilere Ekle
        </div>
      </div>
    </div>
  );
}
