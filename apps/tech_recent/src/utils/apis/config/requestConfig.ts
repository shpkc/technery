import axios from "axios";
import { getCookie } from "cookies-next";

const AUTH_TOKEN = getCookie("access_token") || "";

// NOTE : default 요청 헤더
const defaultHeaders = {
  "Content-Type": "application/json",
  "Accept-Language": "ko",
  "Access-Control-Allow-Origin": "*",
  Authorization: `Bearer ${AUTH_TOKEN}`,
};

// NOTE : 요청 인스턴스
const instance = axios.create({
  headers: defaultHeaders,
});

// TODO : api 요청시 heaader config 변경사항 있을경우 적용
axios.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    //TODO: 추후 에러 핸들러 구현
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //TODO: 에러 핸들러 만들어야 함
    throw error;
  }
);

export default instance;
