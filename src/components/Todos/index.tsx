import { IRenderData, ITodoList } from '@appTypes/index';
import addTodoIcon from '@assets/check.png';
import { getDateData } from '@utils/helpers/getDateData';
import { ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useMemo, useState } from 'react';

import { Body, ButtonAdd, Field, Icon, Input, Title, TodoList, Wrapper } from './styled';
import { TodoItemComponent } from './TodoItem';

const TodosComponent: FC<IRenderData> = ({ currentDate, withTodos }) => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);
  const key = useMemo(getTodosKey, [currentDate.getDate()]);

  const handlerOnClickTodo = useCallback(
    (todo: string) => {
      const todos: ITodoList = JSON.parse(localStorage.getItem('todos')) ?? {};
      const currentTodos = todos[key];

      const newTodoList = currentTodos.filter((todoItem) => todoItem !== todo);
      todos[key] = newTodoList;

      localStorage.setItem('todos', JSON.stringify(todos));
      setTodoList(newTodoList);
    },
    [currentDate.getDate()],
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
      const currentTodos = todos[key];

      todos[key] = currentTodos ? [...todos[key], todo] : [todo];
      localStorage.setItem('todos', JSON.stringify(todos));

      setTodoList(todos[key]);
      setTodo('');
    }

    e.preventDefault();
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    const todosList = todos ? todos[key] : [];

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
                  <TodoItemComponent
                    todo={todo}
                    index={index + 1}
                    handler={handlerOnClickTodo}
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
