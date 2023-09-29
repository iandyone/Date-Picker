import styled from 'styled-components';

export const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.active};
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  width: ${({ theme }) => theme.spaces.loaderSize};
  height: ${({ theme }) => theme.spaces.loaderSize};
  align-self: center;
  animation: spinAnimation 1s linear infinite;
`;

export const Message = styled.p`
  font-size: 22px;
`;
