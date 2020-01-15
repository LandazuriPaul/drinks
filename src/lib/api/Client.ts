import { createClient } from 'react-fetching-library';
import axios from 'axios';

import { API_ENDPOINT } from '~/config';

import { buildAxiosFetch } from './buildAxiosFetch';
import {
  requestHostInterceptor,
  requestIdInterceptor,
  requestParamsInterceptor,
} from './requestInterceptors';
import { responseInterceptor } from './responseInterceptors';

const axiosInstance = axios.create({
  timeout: 10000,
});

export const Client = createClient({
  fetch: buildAxiosFetch(axiosInstance),
  requestInterceptors: [
    requestHostInterceptor(API_ENDPOINT),
    requestIdInterceptor,
    requestParamsInterceptor,
  ],
  responseInterceptors: [responseInterceptor],
});
