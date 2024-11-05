'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import { useLoadingStore } from '@/store/loading';
import { useTestTokenMutation } from '@/queries/auth/auth.mutation';
import { useProtectedRoute } from '@/hooks/useProtectedRoute';
import { useModalStore } from '@/store/modal';
import Login from '../login-modal/Login';
import useNavigation from '@/utils/handleNavigation';
import { RoutePaths } from '@/types/RoutePaths.enum';

const ProtectedRoute = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const navigation = useNavigation();
  const path = usePathname();

  const testTokenMutation = useTestTokenMutation();
  const { isPending } = testTokenMutation;

  const isProtected = useProtectedRoute(path);
  const { setUser, setAccessToken } = useAuthStore();
  const { showLoading, hideLoading } = useLoadingStore();
  const { openModal, setContent } = useModalStore();

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
        } catch (err) {
          localStorage.removeItem('user');
          localStorage.removeItem('access_token');
          setUser(null);
          setAccessToken(null);
          console.error(err);
          navigation('/' as RoutePaths);
        }
      } else {
        if (isProtected) {
          navigation(RoutePaths.Home);
          openModal();
          setContent(<Login />);
        }
      }
    };
    tokenCheck();
  }, [isProtected, router]);

  useEffect(() => {
    if (isPending) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [isPending, showLoading, hideLoading]);

  return <div className='container pt-[140px]'>{children}</div>;
};

export default ProtectedRoute;
