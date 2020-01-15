import { Action, RequestInterceptor } from 'react-fetching-library';

import { debugNetwork } from '~/lib/debug';

export const requestHostInterceptor: (
  host: string,
) => RequestInterceptor = host => () => async (action: Action) => {
  const endpoint = `${host}${action.endpoint}`;
  debugNetwork(`host added: ${endpoint}`);
  return {
    ...action,
    endpoint,
  };
};
