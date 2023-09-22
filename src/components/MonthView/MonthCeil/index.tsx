import { Months } from '@appTypes/index';
import { getDateData } from '@utils/helpers/getDateData';
import { FC, memo } from 'react';

import { CurrentMonth, Month } from './styled';
import { IMonthComponentProps } from './types';

export const MonthCeilComponent: FC<IMonthComponentProps> = ({ date, handler }) => {
  const { month, year } = date;
  const { month: todayMonth, year: todayYear } = getDateData(new Date());
  const monthString = Months[month].slice(0, 3);
  const View = month === todayMonth && year === todayYear ? CurrentMonth : Month;

  function handlerOnClick() {
    const newDate = new Date(year, month, 1);
    handler(newDate, 'month');
  }

  return <View onClick={handlerOnClick}>{monthString}</View>;
};

export const MonthCeil = memo(MonthCeilComponent);
