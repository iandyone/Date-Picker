import { FC, memo } from 'react';
import { CurrentDay, Day, OthertMonthDay, Days, Week, WeekDay } from './styled';
import { getDateData } from '@utils/helpers/getDateData';
import { IRenderData } from '@appTypes/index';

const DaysComponent: FC<IRenderData> = ({ calendarItems, currentMonth, weekDays }) => {
  const { date: todayDate, month: todayMonth, year: todayYear } = getDateData(new Date());

  return (
    <>
      <Week>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </Week>
      <Days>
        {calendarItems.map(({ day, month, year }, index) => {
          let Component;

          if (day === todayDate && month === todayMonth && year === todayYear) Component = CurrentDay;
          else if (month === currentMonth) Component = Day;
          else Component = OthertMonthDay;

          return <Component key={String(index)}>{day}</Component>;
        })}
      </Days>
    </>
  );
};

export const DaysView = memo(DaysComponent);
