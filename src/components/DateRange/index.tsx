import { FC, memo, useState, ChangeEvent } from 'react';
import { RangeInput, Wrapper } from './styled';
import { getDateFromUserInput } from '@utils/helpers/getDateFromUserInput';
import { IDateRangeProps } from './types';
import { getDateData } from '@utils/helpers/getDateData';
import { getFixedValue } from '@utils/helpers/getFixedValue';

const DateRangeComponent: FC<IDateRangeProps> = ({
  handlerRange,
  rangeEnd,
  rangeStart,
  maxDate,
  minDate,
}) => {
  const [rangeStartDate, setRangeStartDate] = useState(getStartRangeDateDefaultString);
  const [rangeEndDate, setRangeEndDate] = useState(getEndRangeDateDefaultString);
  const [rangeStartError, setRangeStartError] = useState(false);
  const [rangeEndError, setRangeEndError] = useState(false);

  function handlerOnChangeRangeStart(e: ChangeEvent<HTMLInputElement>) {
    const date = e.target.value;
    const startRangeDate = getDateFromUserInput(date, minDate, maxDate);

    if (date.length <= 10) {
      setRangeStartDate(date);
    }

    if (startRangeDate) {
      setRangeStartError(false);
      handlerRange(startRangeDate, 'start');
    } else {
      setRangeStartError(true);
      handlerRange(null, 'start');
    }
  }

  function handlerOnChangeRangeEnd(e: ChangeEvent<HTMLInputElement>) {
    const date = e.target.value;
    const startRangeDate = getDateFromUserInput(rangeStartDate, minDate, maxDate);
    const endRangeDate = getDateFromUserInput(date, minDate, maxDate);

    const isValidValue = endRangeDate > startRangeDate;

    if (date.length <= 10) {
      setRangeEndDate(date);
    }

    if (isValidValue) {
      setRangeEndError(false);
      handlerRange(endRangeDate, 'end');
    } else {
      setRangeEndError(true);
      handlerRange(null, 'end');
    }
  }

  function getStartRangeDateDefaultString() {
    const { date, month, year } = getDateData(rangeStart);
    const dayValue = getFixedValue(String(date));
    const monthValue = getFixedValue(String(month + 1));

    return `${dayValue}/${monthValue}/${year}`;
  }

  function getEndRangeDateDefaultString() {
    const { date, month, year } = getDateData(rangeEnd);
    const dayValue = getFixedValue(String(date));
    const monthValue = getFixedValue(String(month + 1));

    return `${dayValue}/${monthValue}/${year}`;
  }

  return (
    <Wrapper>
      <RangeInput
        placeholder='From date'
        onChange={handlerOnChangeRangeStart}
        value={rangeStartDate}
        $error={rangeStartError}
      />
      <RangeInput
        placeholder='To date'
        onChange={handlerOnChangeRangeEnd}
        value={rangeEndDate}
        $error={rangeEndError}
      />
    </Wrapper>
  );
};

export const DateRange = memo(DateRangeComponent);
