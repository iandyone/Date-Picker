import styled, { css } from 'styled-components';

const gridFullWeek = 'repeat(7, 1fr)';
const gridShortWeek = 'repeat(5, 1fr)';

export const DayViewContainer = styled.div``;

export const Week = styled.ul<{ $withoutHolidays: boolean }>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: ${gridFullWeek};

  ${({ $withoutHolidays }) =>
    $withoutHolidays &&
    css`
      grid-template-columns: ${gridShortWeek};
    `}
`;

export const WeekDay = styled.li`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size};
  font-weight: ${({ theme }) => theme.font.bold};
  padding: ${({ theme }) => theme.spaces.padding};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Days = styled.div<{ $withoutHolidays: boolean }>`
  display: grid;
  justify-content: space-between;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: ${gridFullWeek};

  ${({ $withoutHolidays }) =>
    $withoutHolidays &&
    css`
      grid-template-columns: ${gridShortWeek};
    `}
`;
