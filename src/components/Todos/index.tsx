import { IRenderData, ITodoList } from '@appTypes';
import addTodoIcon from '@assets/check.png';
import { getDateData } from '@utils/helpers/date';
import { ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useMemo, useState } from 'react';

import { Body, ButtonAdd, Field, Icon, Input, Title, TodoList, Wrapper } from './styled';
import { TodoItem } from './TodoItem';

const TodosComponent: FC<IRenderData> = ({ currentDate, withTodos }) => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const todoKey = useMemo(getTodosKey, [currentDate.getDate()]);

  const handlerOnClickRemoveTodo = useCallback(
    (todo: string) => {
      const todos: ITodoList = JSON.parse(localStorage.getItem('todos')) ?? {};
      const currentTodos = todos[todoKey];

      const newTodoList = currentTodos.filter((todoItem) => todoItem !== todo);
      todos[todoKey] = newTodoList;

      localStorage.setItem('todos', JSON.stringify(todos));
      setTodoList(newTodoList);
    },
    [todoKey],
  );

  function handlerOnChange(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function getTodosKey() {
    const { date, month, year } = getDateData(currentDate);
    return `${date}${month}${year}`;
  }

  function handlerOnSubmit(e: FormEvent<HTMLFormElement>) {
    if (todo) {
      const todos: ITodoList = JSON.parse(localStorage.getItem('todos')) ?? {};
      const currentTodos = todos[todoKey];

      todos[todoKey] = currentTodos ? [...todos[todoKey], todo] : [todo];
      localStorage.setItem('todos', JSON.stringify(todos));

      setTodoList(todos[todoKey]);
      setTodo('');
    }

    e.preventDefault();
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const todosList = todos ? todos[todoKey] : [];

    setTodoList(todosList);
  }, [currentDate.getDate()]);

  return (
    <>
      {withTodos && (
        <Wrapper data-testid='todo-component'>
          <Title>TODOS</Title>
          <Body>
            <TodoList data-testid='todo-list'>
              {todoList &&
                todoList.map((todo, index) => (
                  <TodoItem
                    todo={todo}
                    index={index + 1}
                    handler={handlerOnClickRemoveTodo}
                    key={index + todo}
                  />
                ))}
            </TodoList>
            <Field onSubmit={handlerOnSubmit} data-testid='todo-input'>
              <Input value={todo} onChange={handlerOnChange} />
              <ButtonAdd>
                <Icon src={addTodoIcon} />
              </ButtonAdd>
            </Field>
          </Body>
        </Wrapper>
      )}
    </>
  );
};

export const Todos = memo(TodosComponent);
