import { RouteEnum } from '@/components/protected-route/protectedRoutes.types';
import { useMemo } from 'react';

export const useProtectedRoute = (route: string) => {
  const isProtected = useMemo(() => {
    return Object.values(RouteEnum).some(enumRoute => {
      return route.startsWith('/'+enumRoute);
    });
  }, [route]);

  return isProtected;
};
