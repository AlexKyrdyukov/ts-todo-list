import React from 'react';

import { useAppDispatch } from '../../store/index';
import { todosSliceActions } from '../../store/todoSlice';
import StyledListItem from './ListItem.style';
import api from '../../api/apiTodo';
import { ButtonDelete,
  ButtonCompleted } from '../ListItem/ListItem.style';

type TodoType = {
  title: string;
  _id: string;
  completed: boolean;
};

type PropsArrayType = {
  todo: TodoType;
};

const ListItem: React.FC<PropsArrayType> = (props) => {
  const [inputState, setInputState] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleDeleteTodo = async () => {
    try {
      await api.deleteTodo(props.todo._id);
      dispatch(todosSliceActions.deleteCompletedTodo(props.todo._id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeStatus = async () => {
    try {
      await api.changeTodo(
        props.todo._id, props.todo.title, !props.todo.completed,
      );
      dispatch(todosSliceActions.changeStatusTodo(props.todo._id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeTodoText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      todosSliceActions.changeTodoText({
        text: ev.target.value,
        _id: props.todo._id,
      }),
    );
  };

  const changeTodoTitle = async () => {
    try {
      await api.changeTodo(props.todo._id, props.todo.title, props.todo.completed);
      setInputState((prevValue) => !prevValue);
    } catch (error) {
      console.error(error);
    }
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
          onBlur={changeTodoTitle}
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
