import { ID } from '@appTypes/types';

export interface ITodoItemProps {
  todo: string;
  index: ID;
  handler: (todo: string) => void;
}
