import { getDateData } from '@utils/helpers/getDateData';
import { FC } from 'react';
import { CurrentYear, OthertMonthDay, Year } from './styled';
import { IMonthComponentProps } from './types';

export const YearCeil: FC<IMonthComponentProps> = ({ date, handler, isOtherDecadeYear }) => {
  const { year: todayYear } = getDateData(new Date());
  const { year } = date;
  let View;

  if (year === todayYear) {
    View = CurrentYear;
  } else if (isOtherDecadeYear) {
    View = OthertMonthDay;
  } else {
    View = Year;
  }

  function handlerOnClick() {
    const newDate = new Date(year, 0, 1);
    handler(newDate, 'month');
  }

  return <View onClick={handlerOnClick}>{year}</View>;
};
