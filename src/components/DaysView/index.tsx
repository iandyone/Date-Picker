import { IDateCellItemDays, IRenderData } from '@appTypes/index';
import { FC, memo } from 'react';

import { DayCeil } from './DayCeil';
import { Days, Week, WeekDay } from './styled';

const DaysComponent: FC<IRenderData> = ({
  calendarItems,
  currentMonth,
  weekDays,
  clendarItemHandler,
  rangeStart,
  rangeEnd,
  handlerOnContextCalendarItem,
  withoutHolidays,
}) => {
  return (
    <>
      <Week $withoutHolidays={withoutHolidays}>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </Week>
      <Days $withoutHolidays={withoutHolidays}>
        {calendarItems.map((date, index) => (
          <DayCeil
            date={date as IDateCellItemDays}
            handler={clendarItemHandler}
            onContext={handlerOnContextCalendarItem}
            currentMonth={currentMonth}
            key={index}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
          />
        ))}
      </Days>
    </>
  );
};

export const DaysView = memo(DaysComponent);
