export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  color?: 'primary' | 'secondary';
  textColor?: string;
  disabled?: boolean;
  outlined?: boolean;
  className?: string;
}
