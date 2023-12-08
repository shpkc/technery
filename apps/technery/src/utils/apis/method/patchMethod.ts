import { AxiosResponse } from "axios";
import instance from "../config/requestConfig";

// NOTE :  patch method 처리 구현부
export const patchMethod =
  <TOptions>({
    url,
    body,
    option,
    isOrigin = false,
  }: {
    url: string;
    body?: any;
    option?: TOptions;
    isOrigin?: boolean;
  }) =>
  async (mapper?: (data: AxiosResponse["data"]) => void) => {
    const axiosConfig = instance;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = `&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
    try {
      const response = await axiosConfig({
        method: "patch",
        url: `${baseUrl}${url}${apiKey}`,
        data: body,
        ...option,
      });
      return mapper ? mapper(response.data) : response.data;
    } catch (err) {
      console.warn(err);
    }
  };
