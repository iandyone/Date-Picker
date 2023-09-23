import styled, { css } from 'styled-components';

export const Day = styled.span<{ $isHoliday?: boolean }>`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.theme.fontSize};
  padding: ${(props) => props.theme.padding} 0;
  width: 100%;
  height: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius};
  transition: ${(props) => props.theme.transition};

  &:hover {
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.hoverColor};
  }

  &:active {
    transition: ${(props) => props.theme.transition};
    transform: ${(props) => props.theme.transformActive};
  }

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${(props) => props.theme.holidayColor};
    `}
`;

export const OthertMonthDay = styled(Day)<{ $isHoliday?: boolean }>`
  color: ${(props) => props.theme.otherDateColor};

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${(props) => props.theme.holidayColor};
    `}
`;

export const CurrentDay = styled(Day)<{ $isHoliday?: boolean }>`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;
  transition: ${(props) => props.theme.transition};

  &:hover {
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.activeCollor};
    transition: ${(props) => props.theme.transition};
  }

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${(props) => props.theme.holidayColor};
    `}
`;

export const RangeStartDay = styled(CurrentDay)<{ $isHoliday?: boolean }>`
  padding: 0px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.rangeStartColor};
  border-radius: ${(props) => props.theme.borderRadius} 0px 0px ${(props) => props.theme.borderRadius};
  transition: ${(props) => props.theme.transition};

  &:hover {
    background: ${(props) => props.theme.rangeStartColor};
    border: 1px solid ${(props) => props.theme.textColor};
    transition: ${(props) => props.theme.transition};
  }
`;

export const RangeEndDay = styled(RangeStartDay)<{ $isHoliday?: boolean }>`
  background: ${(props) => props.theme.rangeEndColor};
  border-radius: 0px ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius} 0px;
  transition: ${(props) => props.theme.transition};

  &:hover {
    background: ${(props) => props.theme.rangeEndColor};
    border: 1px solid ${(props) => props.theme.textColor};
    transition: ${(props) => props.theme.transition};
  }
`;

export const InRangeDay = styled(CurrentDay)<{ $isHoliday?: boolean }>`
  background: ${(props) => props.theme.inRangeColor};
  color: ${(props) => props.theme.activeCollor};
  transition: ${(props) => props.theme.transition};
  padding: 0px;
  width: 100%;
  height: 100%;
  border-radius: 0px;

  &:hover {
    background: ${(props) => props.theme.inRangeColor};
    border: 1px solid ${(props) => props.theme.textColor};
    transition: ${(props) => props.theme.transition};
  }

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${(props) => props.theme.holidayColor};
    `}
`;

export const RangeStartCurrentDay = styled(RangeStartDay)<{ $isHoliday?: boolean }>`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${(props) => props.theme.holidayColor};
    `}
`;

export const RangeEndCurrentDay = styled(RangeEndDay)<{ $isHoliday?: boolean }>`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${(props) => props.theme.holidayColor};
    `}
`;

export const InRangeCurrentDay = styled(InRangeDay)<{ $isHoliday?: boolean }>`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${(props) => props.theme.holidayColor};
    `}
`;
