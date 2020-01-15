import { EventType } from '~/lib/enums';

import { User } from './user.interface';
import { EventLocation } from './eventLocation.interface';
import { EventComment } from './eventComment.interface';

export interface Event {
  id: number;
  time: string;
  title: string;
  creator: User;
  guests: User[];
  type: EventType;
  location: EventLocation;
  comments: EventComment[];
}
