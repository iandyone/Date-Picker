import { getDateData } from '@utils/helpers/date';
import { FC, memo, MouseEvent, useEffect, useMemo, useState } from 'react';

import {
  CurrentDay,
  Day,
  InRangeCurrentDay,
  InRangeDay,
  OthertMonthDay,
  RangeEndCurrentDay,
  RangeEndDay,
  RangeStartCurrentDay,
  RangeStartDay,
} from './styled';
import { IDayCeilProps } from './types';

const DayCeilComponent: FC<IDayCeilProps> = ({
  date,
  currentMonth,
  handler,
  rangeEnd,
  rangeStart,
  onContext,
}) => {
  const { day, month, year } = date;
  const { date: todayDate, month: todayMonth, year: todayYear } = getDateData(new Date());
  const Component = getComponent();
  const key = useMemo(getKey, [day, month, year]);
  const [isHoliday, setIsHoliday] = useState(getHolidayStatus);

  useEffect(() => {
    setIsHoliday(getHolidayStatus());
  }, [day, month, year]);

  function getHolidayStatus() {
    const holidays = JSON.parse(localStorage.getItem('holidays')) ?? {};

    return Boolean(holidays[key]);
  }

  function getKey() {
    return `${day}${month}${year}`;
  }

  function getComponent() {
    const isRange = rangeStart && rangeEnd;
    const ceilDate = new Date(year, month, day);

    const isToday = day === todayDate && month === todayMonth && year === todayYear;
    const isTodayStartRange = isRange && isToday && ceilDate.toDateString() === rangeStart.toDateString();
    const isTodayInRangeDay = isRange && isToday && ceilDate < rangeEnd && ceilDate > rangeStart;
    const isTodayEndRange = isRange && isToday && ceilDate.toDateString() === rangeEnd.toDateString();
    const isRangeStart = isRange && ceilDate.toDateString() === rangeStart.toDateString();
    const isRangeEnd = isRange && ceilDate.toDateString() === rangeEnd.toDateString();
    const isInRangeDay = isRange && ceilDate > rangeStart && ceilDate < rangeEnd;
    const isCurrentMonthDay = month === currentMonth;

    if (isTodayStartRange) return RangeStartCurrentDay;
    if (isTodayEndRange) return RangeEndCurrentDay;
    if (isTodayInRangeDay) return InRangeCurrentDay;
    if (isToday) return CurrentDay;
    if (isRangeStart) return RangeStartDay;
    if (isRangeEnd) return RangeEndDay;
    if (isInRangeDay) return InRangeDay;
    if (isCurrentMonthDay) return Day;
    return OthertMonthDay;
  }

  function handlerOnClick() {
    const newDate = new Date(year, month, day);
    handler(newDate);
  }

  function handlerOnContext(e: MouseEvent<HTMLElement>) {
    const newStatus = !isHoliday;
    setIsHoliday(newStatus);

    const holidays = JSON.parse(localStorage.getItem('holidays')) ?? {};

    if (newStatus) {
      holidays[key] = newStatus;
    } else {
      delete holidays[key];
    }

    localStorage.setItem('holidays', JSON.stringify(holidays));

    onContext();

    e.preventDefault();
  }

  return (
    <Component
      onClick={handlerOnClick}
      onContextMenu={handlerOnContext}
      $isHoliday={isHoliday}
      data-testid='ceil-day'>
      {day}
    </Component>
  );
};

export const DayCeil = memo(DayCeilComponent);
