// button.types.ts
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  color?: 'primary' | 'secondary'; // Renkler için sadece primary ve secondary kabul ediyoruz
  textColor?: string;
  disabled?: boolean;
  outlined?: boolean;
  className?: string;
}
