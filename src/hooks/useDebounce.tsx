import { debounce } from "lodash";
import { useEffect, useRef } from "react";

/**
 * Debounce a function
 */
const useDebounce = <T extends (...args: any[]) => any>(
  ...args: Parameters<typeof debounce<T>>
) => {
  const debouncedRef = useRef(debounce<T>(...args));

  useEffect(
    () => () => {
      // cleanup debounce
      debouncedRef.current.cancel();
    },
    []
  );

  return debouncedRef.current;
};

export default useDebounce;
