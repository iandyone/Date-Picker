import { Months } from '@appTypes/enums';
import { getDateData } from '@utils/helpers/date';
import { FC, memo, useCallback, useMemo } from 'react';

import { CurrentMonth, Month } from './styled';
import { IMonthComponentProps } from './types';

const MonthCeilComponent: FC<IMonthComponentProps> = ({ date, handler }) => {
  const { month, year } = date;
  const { month: todayMonth, year: todayYear } = getDateData(new Date());
  const MonthView = useMemo(
    () => (month === todayMonth && year === todayYear ? CurrentMonth : Month),
    [month, todayMonth, year, todayYear],
  );

  const monthString = useMemo(() => Months[month].slice(0, 3), [month]);

  const handlerOnClick = useCallback(() => {
    const newDate = new Date(year, month, 1);
    handler(newDate, 'month');
  }, [year, month]);

  return <MonthView onClick={handlerOnClick}>{monthString}</MonthView>;
};

export const MonthCeil = memo(MonthCeilComponent);
