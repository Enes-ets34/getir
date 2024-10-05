import {icons} from '@/theme/Icons';

// input.types.ts
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string;
  className?: string;
  icon?: icons;
  label?:string;
  errorText?:string;
  iconSize?: {width?: number; height?: number};
  disabled?:boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
