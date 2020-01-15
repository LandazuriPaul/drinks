import React, { FC } from 'react';
import GoogleMapReact from 'google-map-react';

import { Event as IEvent } from '~/lib/interfaces';
import { EventMarker } from '../EventMarker';

import { Container } from './EventListMap.styles';

interface EventListMapProps {
  eventList: IEvent[];
}

export const EventListMap: FC<EventListMapProps> = ({ eventList }) => {
  return (
    <Container>
      <GoogleMapReact
        defaultCenter={{ lat: 51.506476, lng: -0.126232 }}
        defaultZoom={10}
      >
        {eventList.map(event => (
          <EventMarker
            key={event.id}
            time={event.time}
            title={event.title}
            type={event.type}
            lat={event.location.latitude}
            lng={event.location.longitude}
          />
        ))}
      </GoogleMapReact>
    </Container>
  );
};
