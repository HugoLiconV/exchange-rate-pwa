import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

function useQueryString() {
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      // @ts-ignore
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return {
    createQueryString
  };
}

export default useQueryString;
