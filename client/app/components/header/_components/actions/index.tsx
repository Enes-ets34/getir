'use client';

import ActionItem from './_components/action-item/ActionItem';
import {actionsStyles} from './actions.styles';
import {useModalStore} from '@/store/modal';
import Login from '@/components/login/Login';
import Register from '@/components/register/Register';
import {useAuthStore} from '@/store/auth';
import {useState} from 'react';
import ProfileDropdown from '../../../profile-dropdown/ProfileDropdown';
import {ActionItemType} from './_components/action-item/actionItem.types';

const Actions = () => {
  const {user} = useAuthStore();
  const {openModal, setContent} = useModalStore();
  const [dropdown, setDropdown] = useState<boolean>(false);

  const actionItems: ActionItemType[] = [
    {
      id: 1,
      text: 'Türkçe (TR)',
      icon: 'language',
      iconSize: {width: 16, height: 16},
      onClick: () => {},
      isVisible: true,
    },
    {
      id: 2,
      text: 'Giriş yap',
      icon: 'profile',
      iconSize: {width: 16, height: 16},
      onClick: () => {
        setContent(<Login />);
        openModal();
      },
      isVisible: !user,
    },
    {
      id: 3,
      text: 'Kayıt Ol',
      icon: 'user_add',
      iconSize: {width: 16, height: 16},
      onClick: () => {
        setContent(<Register />);
        openModal();
      },
      isVisible: !user,
    },
    {
      id: 4,
      text: 'Kampanyalar',
      icon: 'campaign',
      iconSize: {width: 16, height: 16},
      onClick: () => {
        console.log('campaigns');
      },
      isVisible: !!user,
    },
    {
      id: 5,
      text: 'Profil',
      icon: 'account',
      iconSize: {width: 16, height: 16},
      onClick: () => {
        setDropdown(prev => !prev);
      },
      isVisible: !!user,
    },
  ];

  return (
    <ul className={actionsStyles.actionItemList}>
      {actionItems.map(
        (actionItem, index) =>
          actionItem.isVisible && (
            <ActionItem
              onClick={actionItem.onClick}
              key={actionItem.id}
              boldText={index > 0}
              icon={actionItem.icon}
              text={actionItem.text}
              iconSize={actionItem.iconSize}
              isVisible={actionItem.isVisible}
            />
          ),
      )}
      <ProfileDropdown
        isOpen={dropdown}
        setDropdown={() => setDropdown(prev => !prev)}
      />
    </ul>
  );
};

export default Actions;
