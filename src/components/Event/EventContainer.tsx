import React, { ReactElement } from 'react';
import { useSuspenseQuery } from 'react-fetching-library';

import { Event } from '~/components/Event';
import { getEventList } from '~/lib/api';
import { Event as IEvent } from '~/lib/interfaces';

interface EventContainerProps {
  id: number;
}

export const EventContainer: React.FC<EventContainerProps> = ({ id }) => {
  const { payload, errorObject } = useSuspenseQuery<IEvent>({
    id,
    ...getEventList,
  });

  let content: ReactElement;
  if (errorObject) {
    content = <div>An unknown error occurred, please try again later</div>;
  } else if (payload) {
    const {
      id,
      comments,
      creator,
      guests,
      location,
      time,
      title,
      type,
    } = payload;
    content = (
      <Event
        key={id}
        id={id}
        comments={comments}
        creator={creator}
        guests={guests}
        location={location}
        time={time}
        title={title}
        type={type}
      />
    );

    return content;
  }
};
