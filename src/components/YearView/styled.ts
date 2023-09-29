import styled from 'styled-components';

const space = '20px';

export const YearsContainer = styled.ul`
  display: grid;
  grid-template-rows: repeat(4, minmax(${space}, 30px));
  grid-template-columns: repeat(3, 1fr);
  gap: ${space} 10px;
  margin-top: ${space};
`;
