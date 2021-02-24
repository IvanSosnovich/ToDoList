import React, { createContext } from 'react';

interface TodoItem {
  id: string;
  title: string;
  status: boolean;
}

interface TodoList {
  todos: TodoItem[];
  addItems: (item: TodoItem) => void;
  changeStatus: (itemId: string) => void;
  deleteItems: (itemId: string) => void;
}

const TodoContext = createContext<TodoList>({
  todos: [],
  addItems: (item: TodoItem): void => {},
  changeStatus: (itemId: string): void => {},
  deleteItems: (itemId: string): void => {},
});

export default TodoContext;
