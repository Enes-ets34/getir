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
}
const ActionItem = ({
  icon,
  iconSize = {width: 24, height: 24},
  boldText,
  text,
}: ActionItemProps) => {
    console.log('boldText :>> ', boldText);
  return (
    <li
      className={`${boldText ? 'font-bold ' : 'font-normal '} ${
        actionsStyles.actionItem
      } `}>
      <Icon source={icon} color={Colors.purpleLight} size={iconSize} />
      <a href="#" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );
};
export default ActionItem;
