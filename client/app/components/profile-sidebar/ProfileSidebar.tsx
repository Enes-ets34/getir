'use client';

import React from 'react';
import {useParams} from 'next/navigation';
import {profileSidebarStlyes} from './profileSidebar.styles';
import {listItems, ListItemType} from '../profile-dropdown/listItems';
import {RouteEnum} from '../protected-route/protectedRoutes.types';
import Link from 'next/link';

const ProfileSidebar: React.FC = () => {
  const params = useParams();
  return (
    <aside className={profileSidebarStlyes.aside}>
      <ul className={profileSidebarStlyes.list}>
        {listItems.map((listItem: ListItemType) => (
          <Link
            href={`${RouteEnum.Profile}/${listItem?.path}`}
            key={listItem.id}
            prefetch={true}>
          <li
            key={listItem?.id}
            className={`${params?.path === listItem?.path ? 'text-primary bg-lilac':' '} ${
              profileSidebarStlyes.listItem
            }`}>
              <p>{listItem.text}</p>
          </li>
            </Link>
        ))}
      </ul>
    </aside>
  );
};
export default ProfileSidebar;
