import styled, { css } from 'styled-components';

export const Calendar = styled.section<{ $withRangeDecorator: boolean }>`
  width: 250px;
  height: 240px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  ${({ $withRangeDecorator }) =>
    $withRangeDecorator &&
    css`
      border-radius: ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius} 0px 0px;
      border-bottom: none;
    `}
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
  font-family: 'Open Sans';
  transition: ${(props) => props.theme.transition};

  &:hover {
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
  }

  &:active {
    transition: ${(props) => props.theme.transition};
    transform: ${(props) => props.theme.transformActive};

    transform: scale(0.9);
  }
`;

export const DateButton = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'poster',
}))`
  width: 20px;
  height: 20px;
  transition: ${(props) => props.theme.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${(props) => props.theme.transition};
    transform: ${(props) => props.theme.transformActive};
  }
`;

export const Body = styled.div`
  display: grid;
  height: 100%;
`;

export const RangeClearButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 0px 0px ${(props) => props.theme.borderRadius} ${(props) => props.theme.borderRadius};
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${(props) => props.theme.transition};
    transform: ${(props) => props.theme.transformActive};
  }
`;
