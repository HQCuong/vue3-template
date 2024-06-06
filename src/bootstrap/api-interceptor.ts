import axios from 'axios';

const instance = axios.create();

instance.defaults.baseURL = String(import.meta.env.VITE_API_URL);
instance.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      if (error.config.errorHandling) {
        const { message } = error.response.data;

        if (message && error.config.errorMessageHandling) {
          console.error(message);
        }
      }

      const response = {
        ...error.response.data,
        status_code: error.response.status,
      };

      return Promise.reject(response);
    }

    if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error);
    }

    return Promise.reject(error);
  },
);

export default instance;
