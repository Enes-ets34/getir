export const inputStyles = {
  relative: 'relative',
  base: 'peer rounded-borderRadiusM  text-black py-3.5 w-full text-sm bg-gray-50 outline-none border-2 focus:ring-0 ring-gray-300 appearance-none',
  disabled:
    'border-borderColorGrayLight  text-inputPlaceholder bg-whiteSmoke hover:cursor-not-allowed',
  error:
    'border-borderColorError hover:border-borderColorError focus:border-borderColorError',
  default:
    'border-borderColorGrayLight  focus:border-borderColorPrimary hover:border-primary',
  icon: (hasIcon: boolean) => (hasIcon ? 'pl-8' : 'px-3.5'),
  label: (value: string | undefined, hasIcon: boolean) =>
    `hover:cursor-text absolute  duration-300 transform scale-75 -translate-y-4 top-3.5 z-10 origin-[0]
     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
      ${
        value
          ? 'text-primary '
          : 'text-inputPlaceholder peer-focus:text-primary '
      }
      ${!!hasIcon ? ' start-9 ' : ' start-4'}
    `,
  errorText: 'text-borderColorError font-semibold',
  errorIcon: 'absolute right-4 top-4',
  iconClass: 'absolute left-3 top-1/3',
};

export const useStyles = ({
  disabled,
  errorText,
  className,
  hasIcon,
  value,
}: {
  disabled: boolean;
  errorText: string | null;
  className: string | undefined;
  hasIcon: boolean;
  value: string | undefined;
}) => {
  const disabledClass = disabled ? inputStyles.disabled : '';
  const errorClass = errorText ? inputStyles.error : inputStyles.default;
  const iconClass = inputStyles.icon(hasIcon);
  const labelClass = inputStyles.label(value, hasIcon);
  const errorTextClass = inputStyles.errorText;
  const errorIconClass = inputStyles.errorIcon;
  const relative = inputStyles.relative;
  return {
    relative,
    inputClassName: `${
      inputStyles.base
    } ${disabledClass} ${errorClass} ${iconClass} ${className || ''}`,
    labelClassName: labelClass,
    errorClassName: errorTextClass,
    iconClassName: inputStyles.iconClass,
    errorIconClassName: errorIconClass,
  };
};
