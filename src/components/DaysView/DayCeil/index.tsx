import { getDateData } from '@utils/helpers/getDateData';
import { FC, memo } from 'react';
import { CurrentDay, Day, OthertMonthDay } from './styled';
import { IDayCeilProps } from './types';

const DayCeilComponent: FC<IDayCeilProps> = ({ date, currentMonth, handler }) => {
  const { day, month, year } = date;
  const { date: todayDate, month: todayMonth, year: todayYear } = getDateData(new Date());
  let Component;

  if (day === todayDate && month === todayMonth && year === todayYear) Component = CurrentDay;
  else if (month === currentMonth) Component = Day;
  else Component = OthertMonthDay;

  function handlerOnClick() {
    const newDate = new Date(year, month, day);
    handler(newDate);
  }

  return <Component onClick={handlerOnClick}>{day}</Component>;
};

export const DayCeil = memo(DayCeilComponent);
