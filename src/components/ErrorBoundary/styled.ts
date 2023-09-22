import styled from 'styled-components';

export const Spinner = styled.div`
  border: 4px solid ${(props) => props.theme.activeCollor};
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-self: center;
  animation: spinAnimation 1s linear infinite;

  @keyframes spinAnimation {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Message = styled.p`
  font-size: 22px;
`;
