import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

function useQueryString() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

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

  const pushQueryString = useCallback(
    (name: string, value: string) => {
      const queryString = createQueryString(name, value);
      router.push(pathname + "?" + queryString);
    },
    [createQueryString, pathname, router]
  );

  return {
    pushQueryString
  };
}

export default useQueryString;
