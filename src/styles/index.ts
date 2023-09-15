import styled, { createGlobalStyle } from 'styled-components';
import openSansRegular from '@assets/fonts/OpenSans-Regular.ttf';
import openSansBold from '@assets/fonts/OpenSans-Bold.ttf';
import openSansSemiBold from '@assets/fonts/OpenSans-SemiBold.ttf';
import openSansMedium from '@assets/fonts/OpenSans-Medium.ttf';

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
`;
