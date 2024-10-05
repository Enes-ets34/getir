export const inputStyles = {
  wrapper: 'relative flex items-center',
  base: 'px-2 appearance-none peer text-black py-2 border-0 text-sm outline-none ring-2 ring-primary focus:ring-2 focus:ring-secondary hover:ring-2 hover:ring-secondary',
  inputWithIcon: 'pl-10 px-4',
  icon: 'absolute left-3',
  disabled: 'hover:cursor-not-allowed bg-grayLight ring-0 hover:ring-0',
  label:
    'absolute text-sm text-primary text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] start-2.5 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto',
  errorText: 'text-xs text-danger',
  error: 'ring-danger',
};
