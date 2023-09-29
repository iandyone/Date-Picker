import styled from 'styled-components';

const size = '20px';

export const TodoCeil = styled.li`
  display: flex;
  justidy-content: space-between;
  column-gap: 10px;
`;

export const Todo = styled.p`
  width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ButtonRemove = styled.button`
  background: transparent;
`;

export const Icon = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'remove button',
}))`
  width: ${size};
  height: ${size};
  transition: ${({ theme }) => theme.animation.transition};

  &:hover {
    cursor: pointer;
  }

  &:active {
    transition: ${({ theme }) => theme.animation.transition};
    transform: ${({ theme }) => theme.animation.transformActive};
  }
`;
