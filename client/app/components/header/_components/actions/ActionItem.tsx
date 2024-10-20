'use client';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import {icons} from '@/theme/Icons';
import {actionsStyles} from './actions.styles';

interface ActionItemProps {
  icon?: icons;
  iconSize?: {width?: number; height?: number};
  text?: string;
  boldText?: boolean;
  onClick?: () => void;
}
const ActionItem = ({
  icon,
  iconSize = {width: 24, height: 24},
  boldText,
  text,
  onClick,
}: ActionItemProps) => {
  return (
    <li
      onClick={onClick}
      className={`${boldText ? 'font-bold ' : 'font-normal '} ${
        actionsStyles.actionItem
      } `}>
      <Icon source={icon as icons} color={Colors.purpleLight} size={iconSize} />
      <a className='hover:cursor-pointer hidden lg:block'>
        {text}
      </a>
    </li>
  );
};
export default ActionItem;
