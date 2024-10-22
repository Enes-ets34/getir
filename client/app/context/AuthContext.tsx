// AuthContext.tsx
'use client';
import {useEffect} from 'react';
import {useAuthStore} from '@/store/auth';
import {useTestTokenMutation} from '@/queries/auth/auth.mutation';
import {useLoadingStore} from '@/store/loading';

const AuthContext = () => {
  const {setUser, setAccessToken} = useAuthStore();
  const {showLoading, hideLoading} = useLoadingStore();
  const testTokenMutation = useTestTokenMutation();
  const {isPending} = testTokenMutation;
  useEffect(() => {
    const tokenCheck = async () => {
      const accessToken = localStorage.getItem('access_token');
      const user = localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user') as string)
        : null;
      if (accessToken && user) {
        try {
          await testTokenMutation.mutateAsync();
          setUser(user);
          setAccessToken(accessToken);
        } catch (error) {
          localStorage.removeItem('user');
          localStorage.removeItem('access_token');
          setUser(null);
          setAccessToken(null);
        }
      }
    };
    tokenCheck();
  }, []);
  useEffect(() => {
    isPending ? showLoading : hideLoading;
  }, [isPending]);

  return null;
};

export default AuthContext;
