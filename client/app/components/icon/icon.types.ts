import Colors from '@/theme/Colors';
import {icons} from '@theme/Icons';

export interface IconProps {
  source?: icons | null;
  size?: {width?: number; height?: number};
  color?: keyof typeof Colors | string;
  stroke?: boolean
}
