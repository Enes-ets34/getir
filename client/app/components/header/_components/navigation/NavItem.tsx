'use client';
import Icon from '@/components/icon/Icon';
import Colors from '@/theme/Colors';
import {icons} from '@/theme/Icons';
import { navigationsStyles } from './navigations.styles';

interface NavItemProps {
  icon?: icons;
  iconSize?: {width?: number; height?: number};
  selected?: boolean;
}
const NavItem = ({
  icon,
  iconSize = {width: 24, height: 24},
  selected = false,
}: NavItemProps) => {
  return (
    <li
      className={` ${
        selected ? 'bg-primary' : ' '
      } ${navigationsStyles.navItemList}`}>
      <Icon source={icon as icons} color={Colors.purpleLight} size={iconSize} />
    </li>
  );
};
export default NavItem;
