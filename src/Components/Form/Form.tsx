import React, { useContext, useState } from 'react';
import TodoContext from '../../Context/todoListContext';

function Form(): JSX.Element {
  let { addItems } = useContext(TodoContext);

  const [title, setItemsTitle] = useState('');

  const hendlerChangeTitle = (e: React.FormEvent<HTMLInputElement>): void => {
    setItemsTitle(e.currentTarget.value);
  };

  const hendlerAddItemsTodos = () => {
    const id = new Date().toString()
    addItems({ id, title, status: false });
    setItemsTitle('');
  };
  return (
    <div className="input-gr oup mt-5">
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={hendlerChangeTitle}
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        onClick={hendlerAddItemsTodos}
      >
        Button
      </button>
    </div>
  );
}

export default Form;