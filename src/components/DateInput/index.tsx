import { getDateFromUserInput } from '@utils/helpers/date';
import { ChangeEvent, FC, FormEvent, memo, useRef, useState } from 'react';

import { DatePicker, Input } from './styled';
import { IDateInputProps } from './types';

const DateInputComponent: FC<IDateInputProps> = ({ handlerOnSubmit, maxDate, minDate }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef(null);
  const placeholder = 'To date DD/MM/YYYY';

  function handlerOnSubmitForm(e: FormEvent<HTMLFormElement>) {
    const userDate = validateUserDateString(value);

    if (userDate) {
      setValue('');
      setError(false);
      handlerOnSubmit(userDate);

      if (inputRef) {
        inputRef.current!.blur();
      }
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

export const DateInput = memo(DateInputComponent);
