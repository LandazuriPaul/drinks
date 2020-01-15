import { User } from './user.interface';

export interface EventComment {
  user: User;
  timestamp: string;
  message: string;
}
