import styled from 'styled-components';

export const Month = styled.li`
  font-size: 16px;
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

export const CurrentMonth = styled(Month)`
background: ${({ theme }) => theme.colors.active};
color: ${({ theme }) => theme.colors.textLight};

&:hover {
  cursor: pointer;
  transition: ${({ theme }) => theme.animation.transition};
  background-color: ${({ theme }) => theme.colors.active};
`;
