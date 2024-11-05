export const useStyles = (direction: 'horizontal' | 'vertical') => {
  return {
    wrapper: `flex items-center border border-grayBright bg-white rounded-borderRadiusL shadow ${
      direction === 'vertical'
        ? 'flex-col-reverse w-[32px]'
        : 'flex-row w-[115px]'
    }`,
    iconWrapper: `border-none  cursor-pointer flex items-center justify-center px-3 ${
      direction === 'vertical' ? ' py-1 ' : ' py-0 '
    }`,
    quantity: `bg-primary flex justify-center items-center  max-w-[36px] text-white px-4 w-full py-1.5 text-center font-bold`,
  };
};
