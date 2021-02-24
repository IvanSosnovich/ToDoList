import Form from '../Form/Form';
import List from '../List/List';
import TodoContext from '../../Context/todoListContext';
import React, { useState } from 'react';

interface TodoItem {
  id: string;
  title: string;
  status: boolean;
}
function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addItems = (item: TodoItem): void => {
    setTodos((preTodo) => [...preTodo, item]);
  };

  const changeStatus = (itemId: string): void => {
    setTodos((prevTodo) => prevTodo.map(el => el.id === itemId ? {...el,status: !el.status} : el))
  };

  const deleteItems = (itemId: string): void => {
    setTodos((preTodo) => preTodo.filter((el) => el.id !== itemId));
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <TodoContext.Provider
        value={{ todos, addItems, changeStatus, deleteItems }}
      >
        <Form />
        <List />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
