import axios from 'axios';

import constant from '../../constant';

const axiosInstance = axios.create({
  baseURL: constant.BASE_URL,
  params: { api_key: constant.API_KEY, nojsoncallback: 1, format: 'json' },
});

export default axiosInstance;
