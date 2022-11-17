import React from 'react';

import { todosSliceActions } from '../../store/todoSlice';
import { selectFilter } from '../../store/selector';
import { TodoFilterENUM } from '../../types';
import {
  useAppDispatch,
  useAppSelector,
} from '../../store/index';
import {
  DeleteButton,
  FilterButton,
  InformationTable,
  StyledFooter } from './Footer.style';

const Footer: React.FC = () => {
  const arrayTodos = useAppSelector(({ todos }) => todos.length);
  const filter = useAppSelector(({ filter }) => filter);
  const { completedTodosCount } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const handleFilterTodos = (filterValue: TodoFilterENUM) => {
    dispatch(todosSliceActions.filterTodo(filterValue));
  };

  const handleDeleteCompletedTodos = () => {
    dispatch(todosSliceActions.deleteAllCompleteTodos());
  };

  if (!arrayTodos) {
    return null;
  }

  return (
    <StyledFooter>
      <InformationTable>Completed: {completedTodosCount}</InformationTable>
      {Object.entries(TodoFilterENUM).map(([key, value]) => (
        <FilterButton
          key={key}
          onClick={() => handleFilterTodos(value)}
          isActive={value === filter}
        >
          {value}
        </FilterButton>
      ))}
      <DeleteButton
        className="footer__button-delete-todos"
        onClick={handleDeleteCompletedTodos}
      >
        delete
      </DeleteButton>
    </StyledFooter>
  );
};

export default Footer;
