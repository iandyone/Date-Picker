import { SubmitHandler } from '@appTypes/index';

export interface IDateInputProps {
  handlerOnSubmit: SubmitHandler;
  withTodos?: boolean;
  minDate: Date;
  maxDate: Date;
}
