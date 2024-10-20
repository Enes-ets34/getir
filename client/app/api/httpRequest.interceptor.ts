import { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const requestConfigInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const requestErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error?.response?.data);
};

const responseSuccessInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response; 
};

const responseErrorInterceptor = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error?.response?.data);
};

const httpRequestInterceptor = (httpRequest: AxiosInstance): void => {
  httpRequest.interceptors.request.use(
    requestConfigInterceptor,
    requestErrorInterceptor,
  );

  httpRequest.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor,
  );
};

export default httpRequestInterceptor;
