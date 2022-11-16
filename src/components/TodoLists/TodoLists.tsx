import React from 'react';

import StyledTodoLists from './TodoLists.style';
import ListItem from '../ListItem';
import { selectFilter } from '../../store/main/mainSelector';
import { useAppSelector } from '../../store/main/hooksRedux/appHooks';

const TodoLists: React.FC = () => {
  const filterArrayTodos = useAppSelector(selectFilter);

  return (
    <StyledTodoLists>
      {filterArrayTodos.array.map((item) => (
        <ListItem key={item.id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
