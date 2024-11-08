'use client';

import Animated from '@/components/animated/Animated';
import { AnimatePresence } from 'framer-motion';
import { productsDropdownStyles } from './productsDropdown.styles';
import { modalStyles } from '../modal/modal.styles';
import useMediaQuery, { ScreenSizes } from '@/hooks/useMediaQuery';
import CartList from '../cart-widget/_components/cart-list/CartList';
import { useCartStore } from '@/store/cart';
import useClickOutside from '@/hooks/useClickOutside';

interface ProductsDropdownProps {
  isOpen: boolean;
  setDropdown: (open: boolean) => void;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  isOpen,
  setDropdown,
}) => {
  const { products, totalPrice } = useCartStore();
  const isSmallScreen = useMediaQuery(ScreenSizes.Small);

  const modalRef = useClickOutside(() => setDropdown(false), isOpen);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setDropdown(!isOpen)}
          className={`${isSmallScreen ? modalStyles.overlay : ''} z-[99]`}
        >
          <AnimatePresence>
            <Animated
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div ref={modalRef} className={productsDropdownStyles.wrapper}>
                <div className={productsDropdownStyles.container}>
                  <CartList products={products} totalPrice={totalPrice} />
                </div>
              </div>
            </Animated>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default ProductsDropdown;
