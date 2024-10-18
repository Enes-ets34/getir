'use client';
import {icons} from '@/theme/Icons';
import ActionItem from './ActionItem';
import {actionsStyles} from './actions.styles';
import {useModalStore} from '@/store/modal';
import Login from '@/components/login/Login';
import Register from '@/components/register/Register';

interface ActionItemType {
  id: number;
  icon: icons;
  text?: string;
  iconSize: {
    width: number;
    height: number;
  };
  onClick?: () => void;
}
const Actions = () => {
  const {openModal, setContent, setTitle, setBottom} = useModalStore();
  const actionItems: ActionItemType[] = [
    {
      id: 1,
      text: 'Türkçe (TR)',
      icon: 'language',
      iconSize: {width: 16, height: 16},
      onClick: () => {},
    },
    {
      id: 2,
      text: 'Giriş yap',
      icon: 'profile',
      iconSize: {width: 16, height: 16},
      onClick: () => {
        setContent(<Login />);
        setBottom(<div>login bottom</div>);
        setTitle('Giriş yap veya kayıt ol');
        openModal();
      },
    },
    {
      id: 3,
      text: 'Kayıt Ol',
      icon: 'user_add',
      iconSize: {width: 16, height: 16},
      onClick: () => {
        setContent(<Register />);
        setBottom(
          <div className="bg-grayLight gap-1 text-grayStorm flex justify-center p-5 items-center rounded-b-lg">
            Getir'e üyeysen <span 
            onClick={()=>{

              setContent(<Login />);
              
            }
          }
            className="text-primary cursor-pointer font-semibold">Giriş yap</span>
          </div>,
        );
        setTitle('Kayıt ol');
        openModal();
      },
    },
  ];
  return (
    <ul className={actionsStyles.actionItemList}>
      {actionItems &&
        actionItems?.map((actionItem, index) => (
          <ActionItem
            onClick={actionItem?.onClick}
            key={actionItem?.id}
            boldText={index > 0}
            icon={actionItem?.icon}
            text={actionItem?.text}
            iconSize={actionItem?.iconSize}
          />
        ))}
    </ul>
  );
};
export default Actions;
