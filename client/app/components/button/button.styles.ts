export const buttonStyles = {
  base: 'px-4 py-3 rounded-borderRadiusL transition duration-300 font-semibold',
  disabled: 'opacity-50 cursor-not-allowed',
  outlined: (color: string) => `border-2 text-${color} bg-white`, 
  primary: 'bg-primary text-white hover:bg-secondary',
  secondary: 'bg-brandYellow text-primary hover:bg-secondary hover:text-brandYellow',
};

export const useStyles = (
  color: 'primary' | 'secondary',
  textColor: string,
  disabled: boolean,
  outlined: boolean,
  className: string,
) => {
  const baseClass = buttonStyles.base;
  const disabledClass = disabled ? buttonStyles.disabled : '';

  const colorClass = outlined
    ? `${buttonStyles.outlined(textColor)} border-${color === 'primary' ? 'primary' : 'brandYellow'}`
    : buttonStyles[color];

  // "outlined" kelimesini ekle
  const outlinedClass = outlined ? 'outlined' : '';

  return `${baseClass} ${colorClass} ${disabledClass} ${outlinedClass} ${className}`.trim();
};
