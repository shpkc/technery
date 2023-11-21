import { AxiosResponse } from "axios";
import instance from "../config/requestConfig";

// NOTE : get method 처리 구현부
export const getMethod =
  <TOptions>({ url, options }: { url: string; options: TOptions }) =>
  async (mapper?: (data: AxiosResponse["data"]) => void) => {
    const axiosConfig = instance;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    try {
      const response = await axiosConfig({
        method: "get",
        url: `${baseUrl}${url}`,
        ...options,
      });
      return mapper ? mapper(response.data) : response.data;
    } catch (err) {
      console.warn(err);
    }
  };
