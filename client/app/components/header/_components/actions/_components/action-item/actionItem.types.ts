import {icons} from '@/theme/Icons';

export interface ActionItemProps {
  icon?: icons;
  iconSize?: {width?: number; height?: number};
  text?: string;
  boldText?: boolean;
  onClick?: () => void;
  isVisible?: boolean;
}
export interface ActionItemType {
  id: number;
  icon: icons;
  text?: string;
  iconSize: {
    width: number;
    height: number;
  };
  onClick?: () => void;
  isVisible: boolean;
}
