/* eslint-disable no-underscore-dangle */
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { todosSliceActions } from '../../store/todoSlice';
import { getTodos } from '../../webApi/webApiTodo';
import ListItem from '../ListItem';
import StyledTodoLists from './TodoLists.style';

const TodoLists: React.FC = () => {
  const dispatch = useAppDispatch();
  // const filterTodo = React.useMemo(() => {
  //   return getTodos('all');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);  const filteredTodos = useAppSelector(({ todos }) => todos);
  dispatch(todosSliceActions.installTodos(filteredTodos));
  const filteredTodo = React.useMemo(() => {
    return getTodos('all')
  });

  fetch('asd').then((r) => setState(r))
  // eslint-disable-next-line no-console
  // console.log(arrayTodo);
  return (
    <StyledTodoLists>
      {filteredTodos.map((item) => (
        <ListItem key={item._id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
