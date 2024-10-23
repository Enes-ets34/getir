import {ReactNode} from 'react';
import {Transition} from 'framer-motion';

export type Variant = {
  x?: string;
  y?: string;
  opacity?: number;
};
export interface AnimatedProps {
  children: ReactNode;
  initial?: Variant;
  animate?: Variant;
  exit?: Variant;
  transition?: Transition;
  easeType?: string;
}
