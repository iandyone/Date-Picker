import { getDateFromUserInput } from '@utils/helpers/getDateFromUserInput';
import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';

import { DatePicker, Input } from './styled';
import { IDateInputProps } from './types';

export const DateInput: FC<IDateInputProps> = ({ handlerOnSubmit, maxDate, minDate }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef(null);
  const placeholder = 'Go to "DD/MM/YYYY"';

  function handlerOnSubmitForm(e: FormEvent<HTMLFormElement>) {
    const userDate = validateUserDateString(value);

    if (userDate) {
      setValue('');
      setError(false);
      inputRef.current.blur();
      handlerOnSubmit(userDate);
    } else {
      setError(true);
    }

    e.preventDefault();
  }

  function validateUserDateString(value: string) {
    return getDateFromUserInput(value, minDate, maxDate);
  }

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    const regex = /^[0-9/]*$/;
    const limit = 10;
    const isValidValue = newValue.length <= limit && regex.test(newValue);

    if (isValidValue) {
      setError(false);
      setValue(newValue);
    }
  }

  return (
    <DatePicker $error={error} onSubmit={handlerOnSubmitForm}>
      <Input value={value} onChange={handlerOnChange} ref={inputRef} placeholder={placeholder} />
    </DatePicker>
  );
};
