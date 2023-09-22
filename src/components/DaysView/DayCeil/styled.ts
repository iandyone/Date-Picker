import styled from 'styled-components';

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

  &:active {
    transition: ${(props) => props.theme.transition};
    transform: ${(props) => props.theme.transformActive};
  }
`;

export const OthertMonthDay = styled(Day)`
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

export const RangeStartDay = styled(CurrentDay)`
  padding: 0px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.rangeStartColor};
  border-radius: ${(props) => props.theme.borderRadius} 0px 0px ${(props) => props.theme.borderRadius};


  &:hover {
    background: ${(props) => props.theme.rangeStartColor};
`;

export const RangeEndDay = styled(RangeStartDay)`
  background: ${(props) => props.theme.rangeEndColor};
  border-radius: 0px ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius} 0px;

  &:hover {
    background: ${(props) => props.theme.rangeEndColor};
  }
`;

export const InRangeDay = styled(CurrentDay)`
  background: ${(props) => props.theme.inRangeColor};
  color: ${(props) => props.theme.activeCollor};
  padding: 0px;
  width: 100%;
  height: 100%;
  border-radius: 0px;

  &:hover {
    background: ${(props) => props.theme.inRangeColor};
  }
`;

export const RangeStartCurrentDay = styled(RangeStartDay)`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;
`;

export const RangeEndCurrentDay = styled(RangeEndDay)`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;
`;

export const InRangeCurrentDay = styled(InRangeDay)`
  background: ${(props) => props.theme.activeCollor};
  color: #fff;
`;
