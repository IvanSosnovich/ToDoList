import { useContext } from 'react';
import TodoContext from '../../Context/todoListContext';

function List(): JSX.Element {
  const { todos, changeStatus, deleteItems } = useContext(TodoContext);


  const hendlerDeleteItems = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    deleteItems(e.currentTarget.parentElement?.id ?? '');
  };

  return (
    <div className="list-group mt-5 w-50">
      {todos?.map((el) => {
        return (
          <label
            key={el.id}
            id={el.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              el.status ? 'list-group-item-success' : ''
            }`}
          >
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              onChange={changeStatus}
            />
            {el.title}
            <button
              type="button"
              className="btn btn-danger"
              onClick={hendlerDeleteItems}
            >
              Del
            </button>
          </label>
        );
      })}
    </div>
  );
}

export default List;
