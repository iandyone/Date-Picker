import styled from 'styled-components';

export const Calendar = styled.section`
  width: 250px;
  height: 240px;
  border-radius: ${(props) => props.theme.borderRadius};
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
  border-radius: ${(props) => props.theme.borderRadius};
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

  &:hover {
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    background-color: ${(props) => props.theme.activeCollor};
`;
