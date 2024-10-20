import {ToastEnum} from './toast.types';

export const getToastItemStyle = (type: ToastEnum) => {
  const baseStyle =
    'flex items-center z-9999 p-4 text-inputPlaceholder bg-white rounded-sm shadow-md border-l-4 transition-all duration-300 ease-in-out';

  const typeStyles: Record<ToastEnum, string> = {
    [ToastEnum.SUCCESS]: 'border-green-500 ',
    [ToastEnum.WARNING]: 'border-yellow-500 ',
    [ToastEnum.ERROR]: 'border-red-500 ',
    [ToastEnum.INFO]: 'border-blue-500 ',
  };

  return `${baseStyle} ${typeStyles[type]}`;
};
export const toastStyles = {
  wrapper:
    'fixed top-1 right-2  space-y-4 z-[199] w-full max-w-sm sm:max-w-xs sm:right-4 sm:top-4',
  content: 'flex justify-between flex-1 items-center',
  close:
    'p-2 flex justify-center items-center rounded cursor-pointer bg-grayLight',
};
