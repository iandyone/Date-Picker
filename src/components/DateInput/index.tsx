import { ChangeEvent, FC, FormEvent, useRef, useState } from 'react';
import { DatePicker, Input } from './styled';
import { IDateInputProps } from './types';

export const DateInput: FC<IDateInputProps> = ({ handlerOnSubmit }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef(null);

  function handlerOnSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (value.length === 10) {
      const [day, month, year] = value.split('/').map(Number);
      const userDate = new Date(year, month - 1, day);

      const newDateYear = userDate.getFullYear();
      const newDateMonth = userDate.getMonth() + 1;
      const newDateDay = userDate.getDate();

      const isValidDate = newDateDay === day && newDateMonth === month && newDateYear === year;

      if (isValidDate) {
        setValue('');
        setError(false);
        inputRef.current.blur();
        handlerOnSubmit(e, userDate);
      } else {
        setError(true);
      }
      return;
    }

    setError(true);
  }

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    const regex = /^[0-9/]*$/;
    const isValidValue = newValue.length <= 10 && regex.test(newValue);

    if (isValidValue) {
      setError(false);
      setValue(newValue);
    }
  }

  return (
    <DatePicker $error={error} onSubmit={handlerOnSubmitForm}>
      <Input value={value} onChange={handlerOnChange} ref={inputRef} />
    </DatePicker>
  );
};
