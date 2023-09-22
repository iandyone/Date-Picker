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
  font-weight: 400;

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
    background-color: ${(props) => props.theme.textColor};
    border-radius: 8px;
  }


  input:focus, input:focus-visible {
    outline: none;
    transition: ${(props) => props.theme.transition};
  }

  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url(${openSansBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: auto;
  }
}
`;

export const Wrapper = styled.div`
  width: 272px;
  display: flex;
  flex-direction: column;
`;
