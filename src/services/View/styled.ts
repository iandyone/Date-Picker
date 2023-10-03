import styled, { css } from 'styled-components';

export const Calendar = styled.section<{ $withRangeDecorator: boolean; $withClearRangeButton: boolean }>`
  width: ${({ theme }) => theme.spaces.width};
  height: ${({ theme }) => theme.spaces.height};
  border-radius: ${({ theme }) => theme.spaces.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  ${({ $withRangeDecorator }) =>
    $withRangeDecorator &&
    css`
      border-radius: ${({ theme }) => theme.spaces.borderRadius} ${({ theme }) => theme.spaces.borderRadius}
        0px 0px;
    `}

  ${({ $withClearRangeButton }) =>
    $withClearRangeButton &&
    css`
      border-radius: ${({ theme }) => theme.spaces.borderRadius};
    `}
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.font.bold};
  font-family: ${({ theme }) => theme.font.family};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
    transition: ${({ theme }) => theme.animation.transition};
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: scale(0.9);
  }
`;

export const DateButton = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'poster',
}))`
  width: 20px;
  height: 20px;
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;

export const Body = styled.div`
  height: 100%;
`;

export const RangeClearButton = styled.button<{ $visability?: boolean }>`
  width: ${({ theme }) => theme.spaces.width};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0px 0px ${({ theme }) => theme.spaces.borderRadius}
    ${({ theme }) => theme.spaces.borderRadius};
  transition: ${({ theme }) => theme.animation.transition};
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: none;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    opacity: 0.6;
  }

  ${({ $visability }) =>
    $visability &&
    css`
      display: none;
    `}
`;
