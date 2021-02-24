import React, { createContext } from 'react';

interface TodoItems {
  id: string;
  title: string;
  status: boolean;
}

interface TodoList {
  todos: TodoItems[];
  addItems: (items: TodoItems) => void;
  changeStatus: (event: React.ChangeEvent<HTMLInputElement>) => void;
  deleteItems: (itemsId: string) => void;
}

const TodoContext = createContext<TodoList>({
  todos: [],
  addItems: (items: TodoItems): void => {},
  changeStatus: (event: React.ChangeEvent<HTMLInputElement>): void => {},
  deleteItems: (itemsId: string): void => {},
});

export default TodoContext;
