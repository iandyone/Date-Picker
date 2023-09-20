import { ID } from '@appTypes/index';

export interface ITodoItemProps {
  todo: string;
  index: ID;
  todosKey?: string;
  handler: (todo: string) => void;
}
