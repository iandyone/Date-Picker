import { IDateCellItemDays, IRenderData } from '@appTypes/index';
import { FC, memo } from 'react';

import { DayCeil } from './DayCeil';
import { Days, DayViewContainer, Week, WeekDay } from './styled';

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
    <DayViewContainer data-testid='day-view'>
      <Week $withoutHolidays={withoutHolidays} data-testid='week-days'>
        {weekDays.map((day) => (
          <WeekDay key={day} data-testid='week-day'>
            {day}
          </WeekDay>
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
    </DayViewContainer>
  );
};

export const DayView = memo(DaysComponent);
