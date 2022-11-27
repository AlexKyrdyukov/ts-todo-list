/* eslint-disable no-underscore-dangle */
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { todosSliceActions } from '../../store/todoSlice';
import { getTodos } from '../../webApi/webApiTodo';
import ListItem from '../ListItem';
import StyledTodoLists from './TodoLists.style';

const TodoLists: React.FC = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    getTodos('all')
      .then((res) => {
        dispatch(todosSliceActions.installTodos(res));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
