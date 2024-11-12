
'use client';

import dynamic from 'next/dynamic';

const ProfileScreen = dynamic(() => import('../page'), {
  ssr: false,
});

const Path = () => {
  return (
    <div>
      <ProfileScreen />
    </div>
  );
};

export default Path;
