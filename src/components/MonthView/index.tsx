import { IRenderData } from '@appTypes/index';
import { FC, memo } from 'react';

import { MonthCeil } from './MonthCeil';
import { MonthContainer } from './styled';

const MonthsComponent: FC<IRenderData> = ({ calendarItems, clendarItemHandler }) => {
  return (
    <MonthContainer>
      {calendarItems.map((date, index) => (
        <MonthCeil date={date} handler={clendarItemHandler} key={index} />
      ))}
    </MonthContainer>
  );
};

export const MonthsView = memo(MonthsComponent);
