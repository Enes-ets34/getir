import {icons} from '@/theme/Icons';

// input.types.ts
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email' | 'number' | 'phone';
  value?: string;
  className?: string;
  label?: string;
  errorText?: string;
  iconSize?: {width?: number; height?: number};
  disabled?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
