import openSansBold from '@assets/fonts/OpenSans-Bold.ttf';
import openSansMedium from '@assets/fonts/OpenSans-Medium.ttf';
import openSansRegular from '@assets/fonts/OpenSans-Regular.ttf';
import openSansSemiBold from '@assets/fonts/OpenSans-SemiBold.ttf';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  border: 0;
  font-family: 'Open Sans';
  font-weight: ${({ theme }) => theme.font.regular};

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 8px;
  }


  input:focus, input:focus-visible {
    outline: none;
    transition: ${({ theme }) => theme.animation.transition};
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansRegular}) format('truetype');
    font-weight: ${({ theme }) => theme.font.regular};
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansMedium}) format('truetype');
    font-weight: ${({ theme }) => theme.font.medium};
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansSemiBold}) format('truetype');
    font-weight: ${({ theme }) => theme.font.semibold};
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansBold}) format('truetype');
    font-weight: ${({ theme }) => theme.font.bold};
    font-style: normal;
    font-display: auto;
  }


  @keyframes spinAnimation {
    to {
      transform: rotate(360deg);
    }
  }
}
`;

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.spaces.width};
  display: flex;
  flex-direction: column;
`;
