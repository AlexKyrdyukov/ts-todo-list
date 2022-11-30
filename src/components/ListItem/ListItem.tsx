/* eslint-disable no-underscore-dangle */
import React from 'react';

import { useAppDispatch } from '../../store/index';
import { todosSliceActions } from '../../store/todoSlice';
import StyledListItem from './ListItem.style';
import webApi from '../../webApi/webApiTodo';
import { ButtonDelete,
  ButtonCompleted } from '../ListItem/ListItem.style';

type PropsType = {
  title: string;
  _id: string;
  completed: boolean;
};

type PropsArrayType = {
  todo: PropsType;
};

const ListItem: React.FC<PropsArrayType> = (props) => {
  const [inputState, setInputState] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleDeleteTodo = () => {
    webApi.deleteCurrentTodo(props.todo._id);
    dispatch(todosSliceActions.deleteCompletedTodo(props.todo._id));
  };

  const handleChangeStatus = () => {
    webApi.setChangesTodoData(props.todo._id, '');
    dispatch(todosSliceActions.changeStatusTodo(props.todo._id));
  };

  const handleChangeTodoText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      todosSliceActions.changeTodoText({
        text: ev.target.value,
        _id: props.todo._id,
      }),
    );
  };

  const setTitleInDB = () => {
    setInputState((prevValue) => !prevValue);
    webApi.setChangesTodoData(props.todo._id, props.todo.title);
  };

  return (
    <StyledListItem isComplete={props.todo.completed}>
      <ButtonCompleted isComplete={props.todo.completed}
        onClick={handleChangeStatus}
        >
        completed
      </ButtonCompleted>
      {inputState
        ? (<input
          className="input__block"
          value={props.todo.title}
          onBlur={setTitleInDB}
          onChange={handleChangeTodoText}
          />)
        : (<div
            className="title__block"
            onDoubleClick={() => setInputState((prevValue) => !prevValue)}
          >
            {props.todo.title}
           </div>)}
      <ButtonDelete
        onClick={handleDeleteTodo}
      >
        delete
      </ButtonDelete>
    </StyledListItem>
  );
};

export default ListItem;
