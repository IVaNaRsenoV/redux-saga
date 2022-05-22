import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../saga/sagaActions";

const fetchDataSaga = (dispatch) =>
  dispatch({ type: sagaActions.FETCH_DATA_SAGA });

export const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(({ todo }) => todo.todos);

  // Отрисовка списка после нажатия на кнопку
  const renderList = () => {
    return todos.map(({ id, title }) => {
      return <p key={id}>{title}</p>;
    });
  };

  return (
    <div>
      <button onClick={fetchDataSaga(dispatch)}>Getdata</button>
      {renderList}
    </div>
  );
};
