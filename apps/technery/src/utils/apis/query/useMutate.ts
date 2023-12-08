import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface MutateProps<T, P> {
  fetch: (params: any) => Promise<T>;
  refetchKey?: string[];
  updater?: {
    key: string[];
    callback?: (
      oldData: AxiosResponse["data"],
      data: AxiosResponse["data"]
    ) => void;
  };
  callback?: (
    data: AxiosResponse["data"],
    callback?: AxiosResponse["data"]
  ) => void;
  errCallback?: (
    error: AxiosResponse["data"],
    variables?: AxiosResponse["data"]
  ) => void;
}

// TODO: mutation hooks
export const useMutate = <T, P>({
  fetch,
  refetchKey,
  updater,
  callback,
  errCallback,
}: MutateProps<T, P>) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: fetch,
    onMutate: (variables: any) => {
      return variables;
    },
    onError: (error: any, variables: any) => {
      errCallback && errCallback(error, variables);
    },
    onSuccess: (
      data: AxiosResponse["data"],
      variables: AxiosResponse["data"]
    ) => {
      // NOTE : refetch key 요청시 refetch
      refetchKey && queryClient.invalidateQueries({ queryKey: refetchKey });

      updater &&
        queryClient.setQueryData(
          updater.key,
          (oldData: AxiosResponse["data"]) => {
            if (!oldData) {
              return {};
            }
            return updater.callback ? updater.callback(oldData, data) : data;
          }
        );

      callback && callback(data, variables);
    },
    // NOTE : 항상 실행이 필요할때
    onSettled: () => {},
  });
  const mutate = (params?: AxiosResponse["data"]) => mutation.mutate(params);
  return { ...mutation, mutate };
};
