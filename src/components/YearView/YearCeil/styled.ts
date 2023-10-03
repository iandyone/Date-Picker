import styled from 'styled-components';

export const Year = styled.li`
  font-size: 18px;
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
`;

export const CurrentYear = styled(Year)`
background: ${({ theme }) => theme.colors.active};
color:  ${({ theme }) => theme.colors.textLight};

&:hover {
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};
  background-color: ${({ theme }) => theme.colors.active};
`;

export const OthertMonthDay = styled(Year)`
  color: ${({ theme }) => theme.colors.otherDateColor};
`;
