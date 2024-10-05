// components/Icon.tsx
import React from 'react';
import {IconProps} from './icon.types';
import {Icons, icons} from '@theme/Icons';
import Colors from '@/theme/Colors';

const Icon: React.FC<IconProps> = ({
  source = null,
  size = {},
  color = Colors.borderColorPrimary,
  stroke = false,
  className='',
  ...props
}: IconProps): JSX.Element => {
  const IconComponent = Icons[source as icons];

  const {width = 24, height = 24} = size;

  return (
    <IconComponent
      stroke={stroke ? color : null}
      fill={color}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default Icon;
