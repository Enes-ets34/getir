// button.styles.ts
export const buttonStyles = {
  base: 'px-4 py-3 rounded-borderRadiusL transition duration-300 font-semibold',
  disabled: 'opacity-50 cursor-not-allowed',
  outlined: 'border-2 bg-transparent',
  primary: 'bg-primary text-white hover:bg-secondary',
  secondary: 'bg-brandYellow text-primary hover:bg-secondary hover:text-brandYellow ',
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
  
  // Renk ve outlined durumuna göre class belirliyoruz
  const colorClass = outlined
    ? `${buttonStyles.outlined} ${textColor} border-${color === 'primary' ? 'primary' : 'brandYellow'}`
    : buttonStyles[color];

  return `${baseClass} ${colorClass} ${disabledClass} ${className}`;
};
