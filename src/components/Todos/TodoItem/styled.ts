import styled from 'styled-components';

export const TodoItem = styled.li`
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
