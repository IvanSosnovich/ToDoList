import Form from '../Form/Form';
import List from '../List/List';
import TodoContext from '../../Context/todoListContext';
import React, { useState } from 'react';

interface TodoItems {
  id: string;
  title: string;
  status: boolean;
}
function App(): JSX.Element {

  const [todos, setTodos] = useState<TodoItems[]>([]);

  const addItems = (items: TodoItems): void => {
    setTodos([...todos, items]);
  };

  const changeStatus = (event: React.ChangeEvent<HTMLInputElement>): void => { 
    
    setTodos(todos.map(el => {
      
      if (String(el.id) === String(event.currentTarget.parentElement?.id)) {
        el.status = !el.status;
        return el;
      }
      console.log(todos);
      
      return el
    }))
  }
  
  const deleteItems = (itemsId: string): void => {
    console.log(itemsId);
    setTodos(todos.filter(el => {
      if (el.id === itemsId) {
        return false
      }
      return true
    }))
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
