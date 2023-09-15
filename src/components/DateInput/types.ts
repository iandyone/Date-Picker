import { FormEvent } from 'react';

export interface IDateInputProps {
  handlerOnSubmit: (e: FormEvent<HTMLFormElement>, date: Date) => void;
}
