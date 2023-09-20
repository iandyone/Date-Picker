import { IRenderData } from '@appTypes/index';
import { FC, memo } from 'react';
import { YearCeil } from './YearCeil';
import { YearsContainer } from './styled';

const YearsViewComponent: FC<IRenderData> = ({ calendarItems, clendarItemHandler }) => {
  return (
    <YearsContainer>
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

export const YearsView = memo(YearsViewComponent);
