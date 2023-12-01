import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getMethod } from "../method/getMethod";

// NOTE : useQuery 구현부
export const useGetFetch = <TOptions>({
  key,
  url,
  option,
  mapper,
  queryOption,
  isOrigin,
}: {
  key: (string | number)[];
  url: string;
  option?: TOptions;
  queryOption?: TOptions;
  mapper?: (data: AxiosResponse["data"]) => void;
  isOrigin?: boolean;
}) =>
  useQuery({
    queryKey: key,
    queryFn: () => getMethod({ url: url, options: option })(mapper),
  });
