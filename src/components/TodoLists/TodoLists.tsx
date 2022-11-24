/* eslint-disable no-underscore-dangle */
import React from 'react';

import { useAppDispatch, useAppSelector } from '../../store';
import { selectFilter } from '../../store/selector';
import { getTodosFromDB } from '../../store/todoThunks';
import ListItem from '../ListItem';
import StyledTodoLists from './TodoLists.style';

const TodoLists: React.FC = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getTodosFromDB());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { filteredTodos } = useAppSelector(selectFilter);
  // eslint-disable-next-line no-console
  console.log(filteredTodos);
  return (
    <StyledTodoLists>
      {filteredTodos.map((item) => (
        <ListItem key={item._id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
