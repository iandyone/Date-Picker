import { SubmitHandler } from '@appTypes/index';
import { FormEvent } from 'react';

export interface IDateInputProps {
  handlerOnSubmit: SubmitHandler;
  withTodos?: boolean;
  minDate: Date;
  maxDate: Date;
}
