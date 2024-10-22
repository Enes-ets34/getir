'use client';

import React from 'react';
import {profileSidebarStlyes} from './profileSidebar.styles';
import {listItems, ListItemType} from '../profile-dropdown/listItems';
import {RouteEnum} from '../protected-route/protectedRoutes.types';
import Link from 'next/link';
const ProfileSidebar: React.FC = () => {
  return (
    <aside className={profileSidebarStlyes.aside}>
      <ul className={profileSidebarStlyes.list}>
        {listItems.map((listItem: ListItemType) => (
          <li key={listItem?.id} className={profileSidebarStlyes.listItem}>
            <Link
              href={`${RouteEnum.Profile}/${listItem?.path}`}
              key={listItem.id}
              prefetch={true}>
              <p>{listItem.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default ProfileSidebar;
