import {useAuthStore} from '@/store/auth';
import {profileStyles} from './profile.styles';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import {useModalStore} from '@/store/modal';
import UpdateProfile from '@/components/update-profile-modal/UpdateProfile';

export default function ProfileView() {
  const {user} = useAuthStore();
  const {openModal, setContent} = useModalStore();
  const handleOnClick = (): void => {
    setContent(<UpdateProfile/>)
    openModal()
  };
  return (
    <div className={profileStyles.card}>
      <div className={profileStyles.fullName}>{user?.fullName}</div>
      <div className={profileStyles.listItem}>
        <Icon source={'mail'} size={{width: 12, height: 12}} />
        <small>{user?.email}</small>
      </div>
      <div className={profileStyles.listItem}>
        <Icon source={'phone'} size={{width: 12, height: 12}} />
        <small>{user?.phone}</small>
      </div>
      <button onClick={handleOnClick} className={profileStyles.editIcon}>
        <Icon
          source={'edit'}
          color={Colors.secondary}
          size={{width: 16, height: 16}}
        />
      </button>
    </div>
  );
}
