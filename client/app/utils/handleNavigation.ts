'use client';

import {RouteEnum} from '@/components/protected-route/protectedRoutes.types';
import {useRouter} from 'next/navigation';

const useNavigation = () => {
  const router = useRouter();

  const handleNavigation = (route: RouteEnum) => {
    router.push(`${route}`);
  };

  return handleNavigation;
};

export default useNavigation;
