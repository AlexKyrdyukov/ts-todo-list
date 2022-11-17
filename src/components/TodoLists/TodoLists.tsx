import React from 'react';

import { useAppSelector } from '../../store';
import { selectFilter } from '../../store/selector';
import ListItem from '../ListItem';
import StyledTodoLists from './TodoLists.style';

const TodoLists: React.FC = () => {
  const { filteredTodos } = useAppSelector(selectFilter);

  return (
    <StyledTodoLists>
      {filteredTodos.map((item) => (
        <ListItem key={item.id} todo={item} />
      ))}
    </StyledTodoLists>
  );
};

export default TodoLists;
