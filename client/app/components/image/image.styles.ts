export const useStyles = ({
    rounded,
    shadow,
    className,
    objectFit = 'cover',
  }: {
    rounded?: boolean;
    shadow?: boolean;
    className?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  }) => [
    `object-${objectFit}`, 
    rounded && 'rounded-full',
    shadow && 'shadow-lg',
    className,
  ]
    .filter(Boolean)
    .join(' ');
  