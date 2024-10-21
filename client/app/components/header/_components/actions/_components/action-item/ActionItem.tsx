'use client';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import {icons} from '@/theme/Icons';
import {actionItemStyles} from './actionItem.styles';
import { ActionItemProps } from './actionItem.types';


const ActionItem = ({
  icon,
  iconSize = {width: 24, height: 24},
  boldText,
  text,
  onClick,
  isVisible,
}: ActionItemProps) => {
  return (
    <>
      {isVisible && (
        <li
          onClick={onClick}
          className={`${boldText ? 'font-bold ' : 'font-normal '} ${
            actionItemStyles.actionItem
          } `}>
          <Icon
            source={icon as icons}
            color={Colors.purpleLight}
            size={iconSize}
          />
          <a className="hover:cursor-pointer hidden lg:block">{text}</a>
          {text === 'Profil' && (
            <Icon
              source={'chevron'}
              color={Colors.purpleLight}
              size={{width:12,height:12}}
              className={actionItemStyles.chevron}
            />
          )}
        </li>
      )}
    </>
  );
};
export default ActionItem;
