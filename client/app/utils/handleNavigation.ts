'use client';

import { RoutePaths } from '@/types/RoutePaths.enum';
import {useRouter} from 'next/navigation';

const useNavigation = () => {
  const router = useRouter();

  const handleNavigation = (route: RoutePaths) => {
    router.push(`${route}`);
  };

  return handleNavigation;
};

export default useNavigation;
