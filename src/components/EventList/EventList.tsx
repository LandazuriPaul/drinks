import React, { FC } from 'react';

import { EventSummary } from '~/components/EventSummary';
import { Event as IEvent } from '~/lib/interfaces';

interface EventListProps {
  eventList: IEvent[];
}

export const EventList: FC<EventListProps> = ({ eventList }) => {
  return (
    <div>
      {eventList.map(
        ({ id, comments, creator, guests, location, time, title, type }) => (
          <EventSummary
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
        ),
      )}
    </div>
  );
};
