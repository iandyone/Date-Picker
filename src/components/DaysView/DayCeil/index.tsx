import { getDateData } from '@utils/helpers/getDateData';
import { FC, memo } from 'react';

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

const DayCeilComponent: FC<IDayCeilProps> = ({ date, currentMonth, handler, rangeEnd, rangeStart }) => {
  const { day, month, year } = date;
  const { date: todayDate, month: todayMonth, year: todayYear } = getDateData(new Date());
  const Component = getComponent();

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

  return <Component onClick={handlerOnClick}>{day}</Component>;
};

export const DayCeil = memo(DayCeilComponent);
