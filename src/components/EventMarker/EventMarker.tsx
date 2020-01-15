import React, { FC } from 'react';

import { EventType } from '~/lib/enums';
import { useIcon } from '~/lib/hooks';

import { Marker } from './EventMarker.styles';

interface EventMarkerProps {
  time: string;
  title: string;
  type: EventType;
  lat: number;
  lng: number;
}

export const EventMarker: FC<EventMarkerProps> = ({
  time,
  title,
  type,
  ...rest
}) => {
  const icon = useIcon(type);
  return (
    <Marker src={icon} title={title} alt={title} height="20px" {...rest} />
  );
};
