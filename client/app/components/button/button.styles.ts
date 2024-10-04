// button.styles.ts
export const buttonStyles = {
  base: 'px-4 py-2 rounded transition duration-300',
  outlinedBase: 'border',
};

export const useStyles = (
  color: string,
  textColor: string,
  disabled: boolean,
  outlined: boolean,
  className: string,
) => {
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const variantClass = outlined
    ? `${buttonStyles.outlinedBase} border-${color} text-${color} bg-transparent`
    : `${color} ${textColor}`;

  return `${buttonStyles.base} ${variantClass} ${disabledClass} ${className}`;
};
