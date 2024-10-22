'use client';

import {useParams} from 'next/navigation';
import ProfileScreen from '../page';
import { ProfileRouteEnum } from '@/views/profile/profile.types';

const Path = () => {
  const params = useParams();
  return (
    <div>
      {typeof params?.path === 'string' && (
        <ProfileScreen path={params?.path as ProfileRouteEnum} />
      )}
    </div>
  );
};

export default Path;
