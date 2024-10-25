import { useMutation } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import { useAuthStore } from '@store/auth';
import { useToastStore } from '@store/toast';
import { ToastEnum } from '@/components/toast/toast.types';
import { useLoadingStore } from '@/store/loading';
import { UpdateUserRequest, UpdateUserResponse } from './user.types';
import { AuthErrorResponse } from '../auth/auth.types';
export const useUpdateUserMutation = () => {
  const { setUser } = useAuthStore();
  const { addToast } = useToastStore();
  const { hideLoading } = useLoadingStore();

  return useMutation<UpdateUserResponse, Error, UpdateUserRequest>({
    mutationFn: async (updateUserData: UpdateUserRequest) => {
      const response = await httpRequest.put<UpdateUserResponse>(
        '/users/update',
        updateUserData
      );
      return response.data;
    },
    onSuccess: (data: UpdateUserResponse) => {
      if (data.status === 'success') {
        setUser(data.user);
        addToast(data.message, ToastEnum.SUCCESS);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      hideLoading();
    },
    onError: (error: Error) => {
      const authError = error as AuthErrorResponse;
      console.error('Login failed:', error);

      const messages = authError?.messages;
      if (messages && Array.isArray(messages)) {
        messages.forEach((message: string) => {
          addToast(message, ToastEnum.ERROR);
        });
        hideLoading();
      }
    },
  });
};
