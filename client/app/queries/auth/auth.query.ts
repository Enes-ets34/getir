import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import httpRequest from '@api/httpRequest';
import {AuthResponse} from './auth.types';
import {useAuthStore} from '@store/auth';

export const useUserQuery = () => {
  const setUser = useAuthStore(state => state.setUser);

  return useQuery<AuthResponse, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('User not authenticated');
      }
      const response = await httpRequest.get<AuthResponse>('/auth/test');
      return response.data;
    },
    onSuccess: (data: AuthResponse) => {
      setUser(data.user);
    },
    staleTime: 1000 * 60 * 5,
  } as UseQueryOptions<AuthResponse, Error>);
};
