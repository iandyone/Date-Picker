import { FC, memo } from 'react';
import { MonthContainer } from './styled';
import { IRenderData } from '@appTypes/index';
import { MonthCeil } from './MonthCeil';

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
