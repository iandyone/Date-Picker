import { IRenderData } from '@appTypes/index';
import { FC } from 'react';
import { YearCeil } from './YearCeil';
import { YearsContainer } from './styled';

export const YearsView: FC<IRenderData> = ({ calendarItems, clendarItemHandler }) => {
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
