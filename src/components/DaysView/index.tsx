import { IRenderData, IDateCellItemDays } from '@appTypes/index';
import { FC, memo } from 'react';
import { DayCeil } from './DayCeil';
import { Week, WeekDay, Days } from './styled';

const DaysComponent: FC<IRenderData> = ({
  calendarItems,
  currentMonth,
  weekDays,
  clendarItemHandler,
  rangeStart,
  rangeEnd,
}) => {
  return (
    <>
      <Week>
        {weekDays.map((day) => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
      </Week>
      <Days>
        {calendarItems.map((date, index) => (
          <DayCeil
            date={date as IDateCellItemDays}
            handler={clendarItemHandler}
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
