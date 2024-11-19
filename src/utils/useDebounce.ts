import { useCallback, useRef } from "react";

export const DEBOUNCE_DELAY = 500;

export const useDebounce = (
  callback: (...args: any[]) => void,
  delay: number = DEBOUNCE_DELAY,
) => {
  const timeoutRef = useRef<any>(null);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};
