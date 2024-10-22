import {RouteEnum} from '@/components/protected-route/protectedRoutes.types';
import {useMemo} from 'react';

export const useProtectedRoute = (route: string) => {
  const isProtected = useMemo(() => {
    return Object.values(RouteEnum).includes(route as RouteEnum);
  }, [route]);

  return isProtected;
};
