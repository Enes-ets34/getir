import {icons} from '@/theme/Icons';
import ActionItem from './ActionItem';
import {actionsStyles} from './actions.styles';

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
      onClick: () => {},
    },
    {
      id: 3,
      text: 'Kayıt Ol',
      icon: 'user_add',
      iconSize: {width: 16, height: 16},
      onClick: () => {},
    },
  ];
  return (
    <ul className={actionsStyles.actionItemList}>
      {actionItems &&
        actionItems?.map((actionItem, index) => (
          <ActionItem
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
