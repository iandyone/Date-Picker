import styled from 'styled-components';

export const Month = styled.li`
  font-size: 16px;
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
`;

export const CurrentMonth = styled(Month)`
background: ${(props) => props.theme.activeCollor};
color: #fff;

&:hover {
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  background-color: ${(props) => props.theme.activeCollor};
`;
