import { IRenderData } from '@appTypes/index';
import { FC, memo } from 'react';

import { YearsContainer } from './styled';
import { YearCeil } from './YearCeil';

const YeaViewComponent: FC<IRenderData> = ({ calendarItems, clendarItemHandler }) => {
  return (
    <YearsContainer data-testid='year-view'>
      {calendarItems.map((date, index) => {
        const isOtherDecadeYear = index === 0 || index === 11;

        return (
          <YearCeil
            date={date}
            handler={clendarItemHandler}
            key={index}
            isOtherDecadeYear={isOtherDecadeYear}
          />
        );
      })}
    </YearsContainer>
  );
};

export const YearView = memo(YeaViewComponent);
