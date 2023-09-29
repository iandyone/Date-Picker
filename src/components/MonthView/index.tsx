import { IRenderData } from '@appTypes';
import { FC, memo } from 'react';

import { MonthCeil } from './MonthCeil';
import { MonthContainer } from './styled';

const MonthComponent: FC<IRenderData> = ({ calendarItems, clendarItemHandler }) => {
  return (
    <MonthContainer data-testid='month-view'>
      {calendarItems.map((date, index) => (
        <MonthCeil date={date} handler={clendarItemHandler} key={index} />
      ))}
    </MonthContainer>
  );
};

export const MonthView = memo(MonthComponent);
