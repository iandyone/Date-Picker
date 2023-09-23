import styled, { css } from 'styled-components';

export const Week = styled.ul<{ $withoutHolidays: boolean }>`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 1fr);

  ${({ $withoutHolidays }) =>
    $withoutHolidays &&
    css`
      grid-template-columns: repeat(5, 1fr);
    `}
`;

export const WeekDay = styled.li`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 700;
  padding: ${(props) => props.theme.padding};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Days = styled.div<{ $withoutHolidays: boolean }>`
  display: grid;
  justify-content: space-between;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);

  ${({ $withoutHolidays }) =>
    $withoutHolidays &&
    css`
      grid-template-columns: repeat(5, 1fr);
    `}
`;
