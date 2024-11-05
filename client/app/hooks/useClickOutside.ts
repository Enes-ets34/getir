import { useEffect, useRef, RefObject } from 'react';

type UseClickOutside = (callback: () => void, isOpen: boolean) => RefObject<HTMLDivElement>;

const useClickOutside: UseClickOutside = (callback, isOpen) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [callback, isOpen]);

  return ref;
};

export default useClickOutside;
