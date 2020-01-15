import { Action, QueryResponse } from 'react-fetching-library';

import { debugNetwork } from '~/lib/debug';

export const responseInterceptor = () => async (
  action: Action,
  response: QueryResponse,
) => {
  debugNetwork('response received', response);
  if (response.payload.data) {
    return {
      ...response,
      payload: response.payload.data,
    };
  }

  if (response.payload.error) {
    return {
      ...response,
      errorObject: response.payload.error,
      payload: false,
    };
  }

  return response;
};
