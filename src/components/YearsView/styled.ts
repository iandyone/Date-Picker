import styled from 'styled-components';

export const YearsContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, minmax(20px, 30px));
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 10px;
  margin-top: 20px;
`;
