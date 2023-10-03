import styled, { css } from 'styled-components';

export const Day = styled.span<{ $isHoliday?: boolean }>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size};
  padding: ${({ theme }) => theme.spaces.padding} 0;
  width: 100%;
  height: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.spaces.borderRadius};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.transition};
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.holiday};
    `}
`;

export const OthertMonthDay = styled(Day)<{ $isHoliday?: boolean }>`
  color: ${({ theme }) => theme.colors.otherDateColor};

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.holiday};
    `}
`;

export const CurrentDay = styled(Day)<{ $isHoliday?: boolean }>`
  background: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.textLight};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.transition};
    background-color: ${({ theme }) => theme.colors.active};
    transition: ${({ theme }) => theme.animation.transition};
  }

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.holiday};
    `}
`;

export const RangeStartDay = styled(CurrentDay)<{ $isHoliday?: boolean }>`
  padding: 0px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.rangeStart};
  border-radius: ${({ theme }) => theme.spaces.borderRadius} 0px 0px
    ${({ theme }) => theme.spaces.borderRadius};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.rangeStart};
    border: 1px solid ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.animation.transition};
  }
`;

export const RangeEndDay = styled(RangeStartDay)<{ $isHoliday?: boolean }>`
  background: ${({ theme }) => theme.colors.rangeEnd};
  border-radius: 0px ${({ theme }) => theme.spaces.borderRadius} ${({ theme }) => theme.spaces.borderRadius}
    0px;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.rangeEnd};
    border: 1px solid ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.animation.transition};
  }
`;

export const InRangeDay = styled(CurrentDay)<{ $isHoliday?: boolean }>`
  background: ${({ theme }) => theme.colors.inRange};
  color: ${({ theme }) => theme.colors.active};
  transition: ${({ theme }) => theme.animation.transition};
  padding: 0px;
  width: 100%;
  height: 100%;
  border-radius: 0px;

  &:hover {
    background: ${({ theme }) => theme.colors.inRange};
    border: 1px solid ${({ theme }) => theme.colors.text};
    transition: ${({ theme }) => theme.animation.transition};
  }

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.holiday};
    `}
`;

export const RangeStartCurrentDay = styled(RangeStartDay)<{ $isHoliday?: boolean }>`
  background: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.textLight};

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.holiday};
    `}
`;

export const RangeEndCurrentDay = styled(RangeEndDay)<{ $isHoliday?: boolean }>`
  background: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.textLight};

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.holiday};
    `}
`;

export const InRangeCurrentDay = styled(InRangeDay)<{ $isHoliday?: boolean }>`
  background: ${({ theme }) => theme.colors.active};
  color: ${({ theme }) => theme.colors.textLight};

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      color: ${({ theme }) => theme.colors.holiday};
    `}
`;
