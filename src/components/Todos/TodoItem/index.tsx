import removeIcon from '@assets/x-mark.png';
import { FC, memo, MouseEvent, useMemo } from 'react';

import { ButtonRemove, Icon, Todo, TodoCeil } from './styled';
import { ITodoItemProps } from './types';

const TodoItemComponent: FC<ITodoItemProps> = ({ todo, index, handler }) => {
  const todoString = useMemo(getTodo, [index, todo]);

  function getTodo() {
    return `${index}. ${todo}`;
  }

  function removeTodo(e: MouseEvent<HTMLButtonElement>) {
    handler(todo);
    e.preventDefault();
  }

  return (
    <TodoCeil>
      <Todo>{todoString}</Todo>
      <ButtonRemove onClick={removeTodo}>
        <Icon src={removeIcon} />
      </ButtonRemove>
    </TodoCeil>
  );
};

export const TodoItem = memo(TodoItemComponent);
