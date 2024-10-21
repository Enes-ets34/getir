import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedProps } from './animated.types';

const Animated: React.FC<AnimatedProps> = ({
  children,
  initial = { x: '100%', opacity: 0 },
  animate = { x: 0, opacity: 1 },
  exit = { x: '100%', opacity: 0 },
  transition = { duration: 0.5, ease: 'linear' },
}) => {
  return (
    <motion.div
    style={{zIndex:99}}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
