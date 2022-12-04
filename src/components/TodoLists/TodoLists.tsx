import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import ListItem from '../ListItem';
import getTodos from '../../store/todoThunks';
import StyledTodoLists from './TodoLists.style';

const TodoLists: React.FC = () => {
  const dispatch = useAppDispatch();

  const filteredTodos = useAppSelector(({ todos }) => todos);

  const arrayTodos = React.useMemo(() => {
    return filteredTodos;
  }, [filteredTodos]);

  React.useEffect(() => {
    dispatch(getTodos('all'));
  }, [dispatch]);

  return (
    <StyledTodoLists>
      {arrayTodos.map((item) => (
        <ListItem key={item._id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
