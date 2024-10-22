'use client';

import Animated from '@/components/animated/Animated';
import {AnimatePresence} from 'framer-motion';
import {profileDropdownStyles} from './profileDropdown.styles';
import Icon from '../icon/Icon';
import Colors from '@/theme/Colors';
import {modalStyles} from '../modal/modal.styles';
import useMediaQuery, {ScreenSizes} from '@/hooks/useMediaQuery';
import {listItems, ListItemType} from './listItems';
import {useAuthStore} from '@/store/auth';
import {useEffect} from 'react';
import {useLogoutMutation} from '@/queries/auth/auth.mutation';
import {useLoadingStore} from '@/store/loading';
import {RouteEnum} from '../protected-route/protectedRoutes.types';
import Link from 'next/link';

const ProfileDropdown = ({
  isOpen,
  setDropdown,
}: {
  isOpen: boolean;
  setDropdown: () => void;
}) => {
  const isSmallScreen = useMediaQuery(ScreenSizes.Small);
  const logoutMutation = useLogoutMutation();
  const {showLoading, hideLoading} = useLoadingStore();
  const {isPending} = logoutMutation;
  const {user} = useAuthStore();
  const logout = async () => {
    await logoutMutation.mutateAsync();
  };
  useEffect(() => {
    isPending ? showLoading() : hideLoading();
  }, [isPending]);

  if (!isOpen) return null;
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setDropdown()}
          className={`${isSmallScreen ? modalStyles.overlay : ''} z-[99]`}>
          <AnimatePresence>
            <Animated
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.3, ease: 'easeOut'}}>
              <div className={profileDropdownStyles.wrapper}>
                <div className={profileDropdownStyles.container}>
                  <Link
                    href={`${RouteEnum.Profile}`}
                    prefetch={true}
                    className={profileDropdownStyles.header}>
                    <div className={profileDropdownStyles.avatar}>
                      <Icon
                        source={'account'}
                        color={Colors.purpleLight}
                        size={{width: 26, height: 26}}
                      />
                    </div>
                    <div className="flex flex-col">
                      {user && <span>{user?.fullName}</span>}
                      {user && (
                        <small className="font-semibold text-grayStorm">
                          {user?.phone}
                        </small>
                      )}
                    </div>
                    {isSmallScreen && (
                      <button
                        onClick={setDropdown}
                        className={modalStyles.closeButton}>
                        <Icon
                          source={'close'}
                          size={{width: 10, height: 10}}
                          color={Colors.black}
                        />
                      </button>
                    )}
                  </Link>
                  <ul className={profileDropdownStyles.list}>
                    {listItems.map((listItem: ListItemType) => (
                      <Link
                        href={`${RouteEnum.Profile}/${listItem?.path}`}
                        key={listItem.id}
                        prefetch={true}
                        className={profileDropdownStyles.listItem}>
                        <p className={profileDropdownStyles.listItemText}>
                          {listItem.text}
                        </p>
                      </Link>
                    ))}
                  </ul>
                  <div className={profileDropdownStyles.bottom}>
                    <li
                      onClick={() => {
                        logout();
                      }}
                      className={profileDropdownStyles.listItem}>
                      <button className={profileDropdownStyles.listItemText}>
                        Çıkış yap
                      </button>
                    </li>
                  </div>
                </div>
              </div>
            </Animated>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
