import { useMutation, useQueryClient } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import {
  CreateAddressRequest,
  CreateAddressResponse,
  DeleteAddressResponse,
  UpdateAddressRequest,
  UpdateAddressResponse,
} from './address.types';

export const useCreateAddressMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateAddressResponse, Error, CreateAddressRequest>({
    mutationFn: async (createAddressData: CreateAddressRequest) => {
      const response = await httpRequest.post<CreateAddressResponse>(
        '/addresses/create',
        createAddressData
      );
      return response.data;
    },
    onSuccess: (data: CreateAddressResponse) => {
      if (data?.data) {
        queryClient.invalidateQueries({ queryKey: ['addresses'] });
      }
    },
    onError: (error: Error) => {
      console.error('Address creation failed:', error);
    },
  });
};

export const useUpdateAddressMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateAddressResponse, Error, UpdateAddressRequest>({
    mutationFn: async (updateAddressData: UpdateAddressRequest) => {
      const response = await httpRequest.patch<UpdateAddressResponse>(
        `/addresses/${updateAddressData._id}`,
        updateAddressData
      );
      return response.data;
    },
    onSuccess: (data: UpdateAddressResponse) => {
      if (data?.data) {
        queryClient.invalidateQueries({ queryKey: ['addresses'] });
      }
    },
    onError: (error: Error) => {
      console.error('Address update failed:', error);
    },
  });
};

export const useDeleteAddressMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteAddressResponse, Error, string>({
    mutationFn: async (id: string) => {
      const response = await httpRequest.delete<DeleteAddressResponse>(
        `/addresses/delete/${id}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['addresses'] });
    },
    onError: (error: Error) => {
      console.error('Address deletion failed:', error);
    },
  });
};
