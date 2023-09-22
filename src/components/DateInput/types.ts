import { SubmitHandler } from '@appTypes/index';

export interface IDateInputProps {
  handlerOnSubmit: SubmitHandler;
  minDate: Date;
  maxDate: Date;
}
