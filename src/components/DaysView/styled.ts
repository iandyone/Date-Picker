import styled from 'styled-components';

export const Week = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(7, 1fr);
`;

export const WeekDay = styled.li`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: 700;
  padding: ${(props) => props.theme.padding};
`;

export const Days = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(7, 1fr);
`;
