import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { todosSliceActions } from '../../store/todoSlice';
import webApi from '../../webApi/webApiTodo';
import ListItem from '../ListItem';
import StyledTodoLists from './TodoLists.style';

const TodoLists: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const getArrayTodos = async () => {
      const arrayTodos = await webApi.getTodos('all');
      dispatch(todosSliceActions.installTodos(arrayTodos));
    };
    getArrayTodos();
  }, [dispatch]);
  const filteredTodos = useAppSelector(({ todos }) => todos);

  return (
    <StyledTodoLists>
      {filteredTodos.map((item) => (
        <ListItem key={item._id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
