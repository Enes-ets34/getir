import { useMutation } from '@tanstack/react-query';
import httpRequest from '@api/httpRequest'; 
import { LoginRequest, AuthResponse } from './auth.types';
import { useAuthStore } from '@store/auth';
import { useToastStore } from '@store/toast';
import { ToastEnum } from '@/components/toast/toast.types';

export const useLoginMutation = () => {
  const setUser = useAuthStore((state) => state.setUser); 
  const addToast = useToastStore((state) => state.addToast); 

  return useMutation<AuthResponse, Error, LoginRequest>({
    mutationFn: async (loginData: LoginRequest) => {
      const response = await httpRequest.post<AuthResponse>('/auth/login', loginData);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      setUser(data.user);
    },
    onError: (error: any) => {
      console.error('Login failed:', error);

      const messages = error?.messages;
      if (messages && Array.isArray(messages)) {
        messages.forEach((message: string) => {
          addToast(message, ToastEnum.ERROR); 
        });
      } else {
        addToast('An unexpected error occurred.', ToastEnum.ERROR); 
      }
    },
  });
};
