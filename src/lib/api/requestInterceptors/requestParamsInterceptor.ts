import { Action } from 'react-fetching-library';

import { debugNetwork } from '~/lib/debug';

export const requestParamsInterceptor = () => async (action: Action) => {
  if (!action.params) {
    return action;
  }

  const queryParams = Object.entries(action.params)
    .filter(([key, val]) => val !== undefined)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');

  debugNetwork(`params added: ${queryParams}`);
  return {
    ...action,
    endpoint: `${action.endpoint}?${queryParams}`,
    params: undefined,
  };
};
