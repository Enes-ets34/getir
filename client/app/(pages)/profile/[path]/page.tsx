'use client';

import { useParams } from 'next/navigation';
import ProfileScreen from '../page';
import { ProfileRouteEnum } from '@/views/profile/profile.types';

const Path = () => {
  const params = useParams<{ path: ProfileRouteEnum }>();
  return (
    <div>
      {typeof params?.path === 'string' && (
        <ProfileScreen params={{ path: params.path }} />
      )}
    </div>
  );
};

export default Path;
