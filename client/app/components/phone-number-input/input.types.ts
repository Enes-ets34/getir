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
  countryCode?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setCountryCode?: (e?:string ) => void;
}
