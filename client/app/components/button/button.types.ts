export interface ButtonProps {
  onClick: () => void;
  text: string;
  color?: string;
  textColor?: string;
  disabled?: boolean;
  outlined?: boolean;
  className?: string;
}
