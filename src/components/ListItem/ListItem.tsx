import React from 'react';

import { useAppDispatch } from '../../store/index';
import { todosSliceActions } from '../../store/todoSlice';

import StyledListItem from './ListItem.style';

type PropsType = {
  title: string;
  id: string;
  completed: boolean;
};

type PropsArrayType = {
  todo: PropsType;
};

const ListItem: React.FC<PropsArrayType> = (props) => {
  const [inputState, setInputState] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    dispatch(todosSliceActions.deleteCompletedTodo(props.todo.id));
  };

  const handleChangeStatus = () => {
    dispatch(todosSliceActions.changeStatusTodo(props.todo.id));
  };

  const handleChangeTodoText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      todosSliceActions.changeTodoText({
        text: ev.target.value,
        id: props.todo.id,
      }),
    );
  };

  return (
    <StyledListItem isComplete={props.todo.completed}>
      <button onClick={handleChangeStatus} className="button__complete">
        completed
      </button>
      {inputState
        ? (
          <input
          className="input__block"
          value={props.todo.title}
          onBlur={() => setInputState((prevValue) => !prevValue)}
          onChange={handleChangeTodoText}
          />)
        : (
          <div
            className="title__block"
            onDoubleClick={() => setInputState((prevValue) => !prevValue)}
          >
            {props.todo.title}
          </div>
        )}
      <button onClick={handleDeleteTodo} className="button__delete">
        delete
      </button>
    </StyledListItem>
  );
};

export default ListItem;
