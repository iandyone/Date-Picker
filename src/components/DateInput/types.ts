import { SubmitHandler } from '@appTypes/types';

export interface IDateInputProps {
  handlerOnSubmit: SubmitHandler;
  minDate: Date;
  maxDate: Date;
}
