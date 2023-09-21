import { ChangeEvent, FC, FormEvent, useMemo, useRef, useState } from 'react';
import { DatePicker, Input } from './styled';
import { IDateInputProps } from './types';

export const DateInput: FC<IDateInputProps> = ({ handlerOnSubmit, withTodos, maxDate, minDate }) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef(null);
  const placeholder = useMemo(getPlaceholder, [withTodos]);

  function getPlaceholder() {
    return withTodos ? 'DD/MM/YYYY' : 'MM/YYYY';
  }

  function handlerOnSubmitForm(e: FormEvent<HTMLFormElement>) {
    const userDate = validateUserDateString();

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

  function validateUserDateString() {
    let isValidDate = false;

    if (withTodos && value.length === 10) {
      const [day, month, year] = value.split('/').map(Number);
      const userDate = new Date(year, month - 1, day);

      const newDateYear = userDate.getFullYear();
      const newDateMonth = userDate.getMonth() + 1;
      const newDateDay = userDate.getDate();

      isValidDate =
        newDateDay === day && newDateMonth === month && newDateYear === year && checkDateRange(userDate);

      return isValidDate && userDate;
    } else if (!withTodos && value.length === 7) {
      const [month, year] = value.split('/').map(Number);
      const userDate = new Date(year, month - 1, 1);

      const newDateYear = userDate.getFullYear();
      const newDateMonth = userDate.getMonth() + 1;

      isValidDate = newDateMonth === month && newDateYear === year && checkDateRange(userDate);
      return isValidDate && userDate;
    }
  }

  function checkDateRange(date: Date) {
    return date <= maxDate && date >= minDate;
  }

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    const regex = /^[0-9/]*$/;
    const limit = withTodos ? 10 : 7;
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
