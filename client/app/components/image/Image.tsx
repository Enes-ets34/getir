'use client';

import React from 'react';
import { ImageProps } from './image.types';
import { useStyles } from './image.styles';

const Image: React.FC<ImageProps> = ({
  src = '',
  alt = '',
  rounded = false,
  shadow = false,
  objectFit = 'cover',
  className = '',
  ...rest
}) => {
  const imageClassNames = useStyles({ rounded, shadow, className, objectFit });

  return <img src={src} alt={alt} className={imageClassNames} {...rest} />;
};

export default Image;
