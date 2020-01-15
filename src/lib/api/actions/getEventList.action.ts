import { Action } from 'react-fetching-library';

export const getEventList: Action = {
  method: 'GET',
  endpoint: 'events',
};
