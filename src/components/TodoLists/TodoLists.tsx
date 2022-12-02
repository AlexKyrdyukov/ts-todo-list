import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { todosSliceActions } from '../../store/todoSlice';
import api from '../../api/apiTodo';
import ListItem from '../ListItem';
import StyledTodoLists from './TodoLists.style';
import getTodos from '../../store/todoThunks';

const TodoLists: React.FC = () => {
  const dispatch = useAppDispatch();
  const filteredTodos = useAppSelector(({ todos }) => todos);

  const arrayTodos = React.useMemo(()= > {
    
  }, [filteredTodos]);

  React.useEffect(() => {
    const getArrayTodos = async () => {
      const arrayTodos = await dispatch(getTodos('all'));
      // eslint-disable-next-line no-console
      console.log(arrayTodos);
    };
    getArrayTodos();
  }, [dispatch]);

  return (
    <StyledTodoLists>
      {filteredTodos.map((item) => (
        <ListItem key={item._id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
