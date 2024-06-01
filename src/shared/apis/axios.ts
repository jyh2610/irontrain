import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export const BASE_URL = "http://localhost:3001";
export const refreshAxiosInstance = axios.create({ baseURL: BASE_URL });

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

const handleAxiosError = (error: AxiosError) => {
  if (error.response?.status === 401) {
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

axios.interceptors.response.use((res) => {
  return res;
}, handleAxiosError);
refreshAxiosInstance.interceptors.response.use((res) => {
  return res;
}, handleAxiosError);

const request = async <T>(param: AxiosRequestConfig) => {
  return axios({
    baseURL: BASE_URL,
    ...param,
  }).then((res: AxiosResponse<T>) => res);
};

export default request;
