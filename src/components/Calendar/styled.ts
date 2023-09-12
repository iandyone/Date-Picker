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

  ul {
    list-style: none;
  }
}
`;

export const Wrapper = styled.section`
  width: 250px;
  height: 240px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const Month = styled.div`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
  font-family: 'Open Sans';
`;

export const DateButton = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'poster',
}))`
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
`;

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

export const Day = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.theme.fontSize};
  padding: ${(props) => props.theme.padding};
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: ${(props) => props.theme.transition};

  &:hover {
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

export const CurrentMonthDay = styled(Day)`
  color: ${(props) => props.theme.otherDateColor};
`;

export const CurrentDay = styled(Day)`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;
`;
