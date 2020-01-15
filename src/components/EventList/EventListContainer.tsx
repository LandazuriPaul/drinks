import React, { FC, ReactElement } from 'react';
import { useSuspenseQuery } from 'react-fetching-library';

import { getEventList } from '~/lib/api';
import { Event as IEvent } from '~/lib/interfaces';

import { EventList } from './EventList';
import { EventListMap } from './EventListMap';

interface EventListContainerProps {
  onMap?: boolean;
  search?: string;
}

export const EventListContainer: FC<EventListContainerProps> = ({
  onMap = false,
  search,
}) => {
  const { payload, errorObject } = useSuspenseQuery<IEvent[]>({
    params: { search },
    ...getEventList,
  });

  let content: ReactElement;
  if (errorObject) {
    content = <div>An unknown error occurred, please try again later</div>;
  } else if (payload) {
    content = onMap ? (
      <EventListMap eventList={payload} />
    ) : (
      <EventList eventList={payload} />
    );
  }

  return content;
};
