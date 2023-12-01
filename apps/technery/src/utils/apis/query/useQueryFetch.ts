import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { getMethod } from "../method/getMethod";

// NOTE : 커스텀 useQuery 구현부
export const useQueryFetch = <TOptions>({
  key,
  method,
  option,
  mapper,
  queryOption,
  isOrigin,
}: {
  key: (string | number)[];
  // NOTE : GET or POST
  method: () => void;
  option?: TOptions;
  queryOption?: TOptions;
  mapper?: (data: AxiosResponse["data"]) => void;
  isOrigin?: boolean;
}) =>
  useQuery({
    queryKey: key,
    queryFn: () => method(),
  });
