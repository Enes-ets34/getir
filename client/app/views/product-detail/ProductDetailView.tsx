import Button from '@/components/button/Button';
import { ProductDetailViewProps } from './productDetail.types';
import Image from '@/components/image/Image';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import { productDetailStyles } from './productDetail.styles';

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  return (
    <div className={productDetailStyles.wrapper}>
      <div className={productDetailStyles.image}>
        <Image
          src={(product?.imageUrl as string)}
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
          <p className={productDetailStyles.price}>
            ₺{product?.price}
          </p>
          <Button
            color='primary'
            onClick={() => {}}
            text='Sepete Ekle'
            className='px-12 py-3.5 my-6'
          />
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
