import {useEffect, useState} from 'react';
export enum ScreenSizes {
  Small = '640px',
  Medium = '768px',
  Large = '1024px',
  ExtraLarge = '1280px',
}

const useMediaQuery = (size: ScreenSizes): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${size})`);
    const handleChange = () => setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    setMatches(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [size]);

  return matches;
};

export default useMediaQuery;
