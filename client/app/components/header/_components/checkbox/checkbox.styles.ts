export const checkboxStyles = {
    base: 'w-5 h-5 border-2 ring-transparent focus:outline-none rounded focus:ring-0 hover:border-secondary active:ring-0 bg-gray-100',
    checked: 'text-primary border-primary',
    unchecked: 'border-borderColorGrayLight',
    disabled: 'opacity-50 cursor-not-allowed',
    label: 'ms-2 text-xs text-grayMid font-light group-hover:cursor-pointer',
  };

export const useStyles = ({
  checked,
  disabled,
}: {
  checked: boolean;
  disabled: boolean;
}) => {
  return {
    inputClassName: `
      ${checkboxStyles.base} 
      ${checked ? checkboxStyles.checked : checkboxStyles.unchecked} 
      ${disabled ? checkboxStyles.disabled : ''} 
      outline-none focus:outline-none
    `,
    labelClassName: `${checkboxStyles.label} ${disabled ? 'opacity-50' : ''}`,
  };
};
