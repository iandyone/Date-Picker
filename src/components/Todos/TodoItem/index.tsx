import removeIcon from '@assets/x-mark.png';
import { FC, MouseEvent, useMemo } from 'react';

import { ButtonRemove, Icon, Todo, TodoItem } from './styled';
import { ITodoItemProps } from './types';

export const TodoItemComponent: FC<ITodoItemProps> = ({ todo, index, handler }) => {
  const todoString = useMemo(getTodo, []);

  function getTodo() {
    return `${index}. ${todo}`;
  }

  function handlerOnClick(e: MouseEvent<HTMLButtonElement>) {
    handler(todo);
    e.preventDefault();
  }

  return (
    <TodoItem>
      <Todo>{todoString}</Todo>
      <ButtonRemove onClick={handlerOnClick}>
        <Icon src={removeIcon} />
      </ButtonRemove>
    </TodoItem>
  );
};
