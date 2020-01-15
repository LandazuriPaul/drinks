import { Action } from 'react-fetching-library';

import { debugNetwork } from '~/lib/debug';

export const requestIdInterceptor = () => async (action: Action) => {
  const { id } = action;
  if (!id) {
    return action;
  }

  debugNetwork(`id added: ${id}`);
  return {
    ...action,
    endpoint: `${action.endpoint}/${id}`,
  };
};
