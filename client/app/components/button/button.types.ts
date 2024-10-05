export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  color?: string;
  textColor?: string;
  disabled?: boolean;
  outlined?: boolean;
  className?: string;
}
