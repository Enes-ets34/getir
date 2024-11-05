import { useMutation } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import {
  CreateCartRequest,
  CreateCartResponse,
  DeleteCartResponse,
  GetCartResponse,
  UpdateCartRequest,
  UpdateCartResponse,
} from './cart.types';
import { useCartStore } from '@/store/cart';

export const useCreateCartMutation = () => {
  const { setCart } = useCartStore();

  return useMutation<CreateCartResponse, Error, CreateCartRequest>({
    mutationFn: async (createCartData: CreateCartRequest) => {
      const response = await httpRequest.post<CreateCartResponse>(
        '/cart',
        createCartData
      );
      return response.data;
    },
    onSuccess: (data: UpdateCartResponse) => {
      if (data?.data) {
        setCart({
          _id: data.data._id,
          userId: data.data.userId,
          products: data.data.products,
          totalPrice: data.data.totalPrice,
          createdAt: data.data.createdAt,
          updatedAt: data.data.updatedAt,
        });
      }
    },
    onError: (error: Error) => {
      console.error('Cart update failed:', error);
    },
  });
};
export const useUpdateCartMutation = () => {
  const { setCart } = useCartStore();

  const { mutate } = useMutation<UpdateCartResponse, Error, UpdateCartRequest>({
    mutationFn: async (updateCartData: UpdateCartRequest) => {
      const response = await httpRequest.patch<UpdateCartResponse>(
        '/cart',
        updateCartData
      );
      return response.data;
    },
    onSuccess: (data: UpdateCartResponse) => {
      if (data?.data) {
        setCart({
          _id: data.data._id,
          userId: data.data.userId,
          products: data.data.products,
          totalPrice: data.data.totalPrice,
          createdAt: data.data.createdAt,
          updatedAt: data.data.updatedAt,
        });
      }
    },
    onError: (error: Error) => {
      console.error('Cart update failed:', error);
      setCart({} as GetCartResponse);
    },
  });

  const increment = (product: string) => {
    mutate({
      products: [
        {
          product,
          quantity: 1,
        },
      ],
    });
  };

  const decrement = (product: string) => {
    mutate({
      products: [
        {
          product,
          quantity: -1,
        },
      ],
    });
  };

  return { increment, decrement };
};
export const useDeleteCartMutation = () => {
  const { setCart } = useCartStore();

  const { mutate } = useMutation<DeleteCartResponse, Error>({
    mutationFn: async () => {
      const response = await httpRequest.delete<DeleteCartResponse>('/cart');
      return response.data;
    },
    onSuccess: (data: DeleteCartResponse) => {
      setCart({} as GetCartResponse);
    },
    onError: (error: Error) => {
      console.error('Cart deletion failed:', error);
    },
  });

  const deleteCart = () => {
    mutate();
  };

  return { deleteCart };
};
